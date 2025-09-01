  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and JSON](javascript:call_link\('abenabap_json.htm'\)) →  [JSON, Examples](javascript:call_link\('abenabap_json_abexas.htm'\)) → 

JSON, Create from XML Data

Transformation of XML data to JSON.

Source Code

REPORT kellerh\_xml\_to\_json.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES: BEGIN OF node,
             node\_type TYPE if\_sxml\_node=>node\_type,
             name      TYPE string,
             value     TYPE string,
             array     TYPE c LENGTH 1,
           END OF node.
    DATA nodes TYPE TABLE OF node WITH EMPTY KEY.
    DATA(xml\_string) = \`<root />\`.
    DO.
      cl\_demo\_text=>edit\_string(
        EXPORTING
          title = 'XML-Data'
        CHANGING
          text\_string = xml\_string
        EXCEPTIONS
          canceled    = 4 ).
      IF sy-subrc = 4.
        EXIT.
      ENDIF.
      DATA(xml) = cl\_abap\_codepage=>convert\_to(
        replace( val = xml\_string sub = |\\n| with = \`\` occ = 0  ) ).
      DATA(out) = cl\_demo\_output=>new(
        )->begin\_section( \`XML-Data\`
        )->write\_xml( xml ).
      "Parsing XML into an internal table
      DATA(reader) = cl\_sxml\_string\_reader=>create( xml ).
      CLEAR nodes.
      TRY.
          DO.
            reader->next\_node( ).
            IF reader->node\_type = if\_sxml\_node=>co\_nt\_final.
              EXIT.
            ENDIF.
            APPEND VALUE #(
              node\_type  = reader->node\_type
              name       = reader->prefix &&
                           COND string(
                             WHEN reader->prefix IS NOT INITIAL
                                  THEN \`:\` ) && reader->name
              value      = reader->value ) TO nodes.
            IF reader->node\_type = if\_sxml\_node=>co\_nt\_element\_open.
              DO.
                reader->next\_attribute( ).
                IF reader->node\_type <> if\_sxml\_node=>co\_nt\_attribute.
                  EXIT.
                ENDIF.
                APPEND VALUE #(
                  node\_type = if\_sxml\_node=>co\_nt\_initial
                  name       = reader->prefix &&
                               COND string(
                                 WHEN reader->prefix IS NOT INITIAL
                                   THEN \`:\` ) && reader->name
                  value      = reader->value ) TO nodes.
              ENDDO.
            ENDIF.
          ENDDO.
        CATCH cx\_sxml\_parse\_error INTO DATA(parse\_error).
          out->write\_text( parse\_error->get\_text( ) ).
      ENDTRY.
      "Determine the array limits in the internal table
      LOOP AT nodes ASSIGNING FIELD-SYMBOL(<node\_open>)
                    WHERE
                     node\_type = if\_sxml\_node=>co\_nt\_element\_open
                     AND array IS INITIAL.
        DATA(idx\_open) = sy-tabix.
        LOOP AT nodes ASSIGNING FIELD-SYMBOL(<node\_close>)
                      FROM idx\_open  + 1
                      WHERE
                        node\_type = if\_sxml\_node=>co\_nt\_element\_close
                        AND name = <node\_open>-name.
          DATA(idx\_close) = sy-tabix.
          IF idx\_close < lines( nodes ).
            ASSIGN nodes\[ idx\_close + 1 \] TO FIELD-SYMBOL(<node>).
            IF <node>-node\_type = if\_sxml\_node=>co\_nt\_element\_open AND
               <node>-name = <node\_open>-name.
              <node\_open>-array = 'O'.
              <node>-array = '\_'.
            ELSEIF
              ( <node>-node\_type = if\_sxml\_node=>co\_nt\_element\_open
                AND <node>-name <> <node\_open>-name )
              OR <node>-node\_type = if\_sxml\_node=>co\_nt\_element\_close.
              <node\_close>-array = COND #(
                WHEN <node\_open>-array = 'O' THEN 'C' ).
              EXIT.
            ENDIF.
          ENDIF.
        ENDLOOP.
      ENDLOOP.
      "out->begin\_section( \`Nodes\`
      ")->write( nodes ).
      "Render the internal table to JSON-XML
      DATA(writer) = CAST if\_sxml\_writer(
       cl\_sxml\_string\_writer=>create( type = if\_sxml=>co\_xt\_json ) ).
      "create( type = if\_sxml=>co\_xt\_xml10 ) ).
      TRY.
          writer->open\_element( name = 'object' ).
          LOOP AT nodes ASSIGNING <node>.
            CASE <node>-node\_type.
              WHEN if\_sxml\_node=>co\_nt\_element\_open.
                IF <node>-array IS INITIAL.
                  writer->open\_element( name = 'object' ).
                  writer->write\_attribute( name = 'name'
                                           value = <node>-name ).
                ELSEIF <node>-array = 'O'.
                  writer->open\_element( name = 'array' ).
                  writer->write\_attribute( name = 'name'
                                           value = <node>-name ).
                  writer->open\_element( name = 'object' ).
                ELSEIF <node>-array = '\_'.
                  writer->open\_element( name = 'object' ).
                ENDIF.
              WHEN if\_sxml\_node=>co\_nt\_element\_close.
                IF <node>-array <> 'C'.
                  writer->close\_element( ).
                ELSE.
                  writer->close\_element( ).
                  writer->close\_element( ).
                ENDIF.
              WHEN if\_sxml\_node=>co\_nt\_initial.
                writer->open\_element( name = 'str' ).
                writer->write\_attribute( name = 'name'
                                         value = \`a\_\` && <node>-name ).
                writer->write\_value( <node>-value ).
                writer->close\_element( ).
              WHEN if\_sxml\_node=>co\_nt\_value.
                writer->open\_element( name = 'str' ).
                writer->write\_attribute( name = 'name'
                                         value = \`e\_\` && <node>-name ).
                writer->write\_value( <node>-value ).
                writer->close\_element( ).
              WHEN OTHERS.
                out->display( 'A node type is not yet supported' ).
                RETURN.
            ENDCASE.
          ENDLOOP.
          writer->close\_element( ).
          DATA(json) =
            CAST cl\_sxml\_string\_writer( writer )->get\_output( ).
          out->next\_section( 'JSON-Data' ).
          IF writer->if\_sxml~type = if\_sxml=>co\_xt\_json.
            out->write\_json( json ).
          ELSEIF writer->if\_sxml~type = if\_sxml=>co\_xt\_xml10.
            out->write\_xml( json ).
          ENDIF.
        CATCH cx\_sxml\_error INTO DATA(exc).
          out->write( exc->get\_text( ) ).
      ENDTRY.
      out->display( ).
    ENDDO.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example demonstrates how to convert XML data to JSON. This is achieved via token-based parsing of the XML data using methods of the [sXML library](javascript:call_link\('abenabap_sxml_lib.htm'\)) and then token-based rendering of this data to [JSON-XML](javascript:call_link\('abenjson_xml_glosry.htm'\) "Glossary Entry"). A [JSON writer](javascript:call_link\('abenjson_writer_glosry.htm'\) "Glossary Entry") is filled directly. If an [XML writer](javascript:call_link\('abenxml_writer_glosry.htm'\) "Glossary Entry") had been specified instead (shown as a comment in the source code), the result would be JSON-XML.