  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xml_libs.htm) →  [sXML Library](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sxml_lib.htm) →  [sXML - Examples](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sxml_lib_abexas.htm) → 

sXML - Formats

This example demonstrates the four formats supported by sXML.

Source Code

REPORT demo\_sxml\_formats.
CLASS sxml\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-METHODS fill\_writer
      IMPORTING writer TYPE REF TO if\_sxml\_writer.
    CLASS-METHODS parse\_outputs
      IMPORTING xml\_10 TYPE xstring
                xml\_xop TYPE if\_sxml\_xop=>xop\_package
                xml\_binary TYPE xstring
                xml\_json TYPE xstring
      EXPORTING xml TYPE xstring
      RETURNING VALUE(rc) TYPE i.
    CLASS-METHODS equals
      IMPORTING p1 TYPE data
                p2 TYPE data
                p3 TYPE data
                p4 TYPE data
      RETURNING VALUE(equals) TYPE abap\_bool.
ENDCLASS.
CLASS sxml\_demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    DATA writer TYPE REF TO if\_sxml\_writer.
    "XML 1.0
    out->begin\_section( \`XML 1.0\` ).
    writer = CAST if\_sxml\_writer(
      cl\_sxml\_string\_writer=>create( type = if\_sxml=>co\_xt\_xml10 ) ).
    fill\_writer( writer ).
    DATA(xml\_10) =
      CAST cl\_sxml\_string\_writer( writer )->get\_output(  ).
    out->write\_data( xml\_10
      )->write\_data(
      cl\_abap\_conv\_codepage=>create\_in(
        )->convert( xml\_10 ) ).
    "XOP
    out->next\_section( \`XOP\` ).
    writer = CAST if\_sxml\_writer(
      cl\_sxml\_xop\_writer=>create( ) ).
    fill\_writer( writer ).
    DATA(xml\_xop) =
      CAST cl\_sxml\_xop\_writer( writer )->get\_output(  ).
    out->write\_data( xml\_xop-xop\_document
      )->write\_data(
     cl\_abap\_conv\_codepage=>create\_in(
        )->convert( xml\_xop-xop\_document )
      )->write\_data( xml\_xop-parts ).
    "Binary XML
    out->next\_section( \`Binary XML\` ).
    writer = CAST if\_sxml\_writer(
      cl\_sxml\_string\_writer=>create( type = if\_sxml=>co\_xt\_binary ) ).
    fill\_writer( writer ).
    DATA(xml\_binary) =
      CAST cl\_sxml\_string\_writer( writer )->get\_output(  ).
    out->write\_data( xml\_binary
      )->write\_data(
      cl\_abap\_conv\_codepage=>create\_in(
        )->convert( xml\_binary ) ).
    "JSON
    out->next\_section( \`JSON\` ).
    writer = CAST if\_sxml\_writer(
      cl\_sxml\_string\_writer=>create( type = if\_sxml=>co\_xt\_json ) ).
    fill\_writer( writer ).
    DATA(xml\_json) =
      CAST cl\_sxml\_string\_writer( writer )->get\_output(  ).
    out->write\_data( xml\_json
      )->write\_data(
      cl\_abap\_conv\_codepage=>create\_in(
        )->convert( xml\_json ) ).
    "Parse outputs and compare results
    out->next\_section( \`Parsing all outputs\` ).
    DATA xml TYPE xstring.
    CASE parse\_outputs( EXPORTING xml\_10 = xml\_10
                                  xml\_xop = xml\_xop
                                  xml\_binary = xml\_binary
                                  xml\_json = xml\_json
                        IMPORTING xml = xml ).
      WHEN 0.
        out->write\_text(
          'Result is the same for all outputs:' ).
        out->write\_xml( xml ).
      WHEN 2.
        out->write\_text(
          'Results differ for elements!' ).
      WHEN 4.
        out->write\_text(
          'Results differ for attributes!' ).
      WHEN 8.
        out->write\_text(
          'Parsing raised an exception!' ).
      WHEN 16.
        out->write\_text(
          'Transformation results are different!' ).
    ENDCASE.
    out->display( ).
  ENDMETHOD.
  METHOD fill\_writer.
    writer->open\_element( name = 'object' ).
    writer->open\_element( name = 'str' ).
    writer->write\_attribute( name = 'name' value = 'text' ).
    writer->write\_value( 'Hello sXML!' ).
    writer->close\_element( ).
    writer->open\_element( name = 'str' ).
    writer->write\_attribute( name = 'name' value = 'raw' ).
    writer->write\_value\_raw( cl\_abap\_conv\_codepage=>create\_out(
                               )->convert( 'raw' ) ).
    writer->close\_element( ).
    writer->close\_element( ).
  ENDMETHOD.
  METHOD parse\_outputs.
    DATA(reader\_10) = cl\_sxml\_string\_reader=>create( xml\_10 ).
    DATA(reader\_xop) = cl\_sxml\_xop\_reader=>create( xml\_xop ).
    DATA(reader\_binary) = cl\_sxml\_string\_reader=>create( xml\_binary ).
    DATA(reader\_json) = cl\_sxml\_string\_reader=>create( xml\_json ).
    TRY.
        DO.
          reader\_10->next\_node( ).
          reader\_xop->next\_node( ).
          reader\_binary->next\_node( ).
          reader\_json->next\_node( ).
          IF equals( p1 = reader\_10->node\_type
                     p2 = reader\_xop->node\_type
                     p3 = reader\_binary->node\_type
                     p4 = reader\_json->node\_type ) = abap\_false OR
             equals( p1 = reader\_10->prefix
                     p2 = reader\_xop->prefix
                     p3 = reader\_binary->prefix
                     p4 = reader\_json->prefix ) = abap\_false OR
             equals( p1 = reader\_10->name
                     p2 = reader\_xop->name
                     p3 = reader\_binary->name
                     p4 = reader\_json->name ) = abap\_false OR
             equals( p1 = reader\_10->nsuri
                     p2 = reader\_xop->nsuri
                     p3 = reader\_binary->nsuri
                     p4 = reader\_json->nsuri ) = abap\_false OR
             equals( p1 = reader\_10->value\_type
                     p2 = reader\_xop->value\_type
                     p3 = reader\_binary->value\_type
                     p4 = reader\_json->value\_type ) = abap\_false OR
             equals( p1 = reader\_10->value
                     p2 = reader\_xop->value
                     p3 = reader\_binary->value
                     p4 = reader\_json->value ) = abap\_false.
            rc = 2.
            RETURN.
          ENDIF.
          IF reader\_10->node\_type = if\_sxml\_node=>co\_nt\_final.
            EXIT.
          ENDIF.
          IF reader\_10->node\_type = if\_sxml\_node=>co\_nt\_element\_open.
            DO.
              reader\_10->next\_attribute( ).
              reader\_xop->next\_attribute( ).
              reader\_binary->next\_attribute( ).
              reader\_json->next\_attribute( ).
              IF equals( p1 = reader\_10->prefix
                         p2 = reader\_xop->prefix
                         p3 = reader\_binary->prefix
                         p4 = reader\_json->prefix ) = abap\_false OR
                 equals( p1 = reader\_10->name
                         p2 = reader\_xop->name
                         p3 = reader\_binary->name
                         p4 = reader\_json->name ) = abap\_false OR
                 equals( p1 = reader\_10->nsuri
                         p2 = reader\_xop->nsuri
                         p3 = reader\_binary->nsuri
                         p4 = reader\_json->nsuri ) = abap\_false OR
                 equals( p1 = reader\_10->value
                         p2 = reader\_xop->value
                         p3 = reader\_binary->value
                         p4 = reader\_json->value ) = abap\_false.
                rc = 4.
                RETURN.
              ENDIF.
              IF reader\_10->node\_type <> if\_sxml\_node=>co\_nt\_attribute.
                EXIT.
              ENDIF.
            ENDDO.
          ENDIF.
        ENDDO.
      CATCH cx\_sxml\_parse\_error INTO DATA(parse\_error).
        rc = 8.
        RETURN.
    ENDTRY.
    reader\_10 = cl\_sxml\_string\_reader=>create( xml\_10 ).
    reader\_xop = cl\_sxml\_xop\_reader=>create( xml\_xop ).
    reader\_binary = cl\_sxml\_string\_reader=>create( xml\_binary ).
    reader\_json = cl\_sxml\_string\_reader=>create( xml\_json ).
    CALL TRANSFORMATION id SOURCE XML reader\_10
                           RESULT XML DATA(xstr\_10).
    CALL TRANSFORMATION id SOURCE XML reader\_xop
                           RESULT XML DATA(xstr\_xop).
    CALL TRANSFORMATION id SOURCE XML reader\_binary
                           RESULT XML DATA(xstr\_binary).
    CALL TRANSFORMATION id SOURCE XML reader\_json
                           RESULT XML DATA(xstr\_json).
    IF equals( p1 = xstr\_10
               p2 = xstr\_xop
               p3 = xstr\_binary
               p4 = xstr\_json ) = abap\_false.
      rc = 16.
      RETURN.
    ENDIF.
    xml = xstr\_10.
  ENDMETHOD.
  METHOD equals.
    IF p1 = p2 AND
       p1 = p4 AND
       p1 = p4.
      equals = abap\_true.
    ELSE.
      equals = abap\_false.
    ENDIF.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  sxml\_demo=>main( ).

Description

A writer is created for each of the four possible [formats](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sxml_lib_formats.htm) and used in the method fill\_writer to fill the string with XML data. A string writer can be created for all formats except XOP. A special XOP writer must be created for XOP. The XML data complies with the [JSON-XML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_json_xml.htm) rules and contains an element with raw data (the UTF-8 encoding of the string "raw" with the hexadecimal value 726177). For each writer, the results are obtained using GET\_OUTPUT and the binary content and the content of UTF-8 (default setting) represented in content converted to characters.

-   XML 1.0
    
    The string contains the characters of the XML data in UTF-8 encoding. The raw data is represented in [Base64](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbase64_glosry.htm "Glossary Entry") format, where the hexadecimal value 726177 is the same as the Base64 value "cmF3".
    
-   XOP
    
    The result of the writer is structured, where the component xop\_document contains the string and the table-like component xop\_parts contains the raw data. The content of the string is the same as in XML 1.0 format. The raw data is not represented in Base64 format, however, but is replaced by a reference to an external entity. The target of the reference is a table row in xop\_parts, where the hexadecimal value 726177 is stored directly.
    
-   Binary XML
    
    The encoding of the XML data in the string uses the SAP-specific format with dedicated tokens. The hexadecimal value of the raw data, 726177, can be found here directly. A direct conversion of UTF-8 to a character representation does not produce readable results. A file of this type can only be read by a parser intended for this purpose.
    
-   JSON
    
    The string contains the characters of the JSON data written using JSON-XML in UTF-8 encoding. The raw data is represented in Base64 format.
    

Readers are created for the result of each writer in the method parse\_outputs. The readers parse the results using two different methods, which are then compared:

-   The results are parsed in parallel loops using the method next\_node. The equality of the attributes of the current nodes is then checked.
-   The [identity transformation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID is called to create XML in a byte string from each result. The equality of this data is then checked.

The results show that the readers produce identical results for the four formats. It should be noted in particular that only the XOP reader has a special class, CL\_SXML\_XOP\_READER, and the other readers all have the class CL\_SXML\_STRING\_READER and can detect the format themselves.