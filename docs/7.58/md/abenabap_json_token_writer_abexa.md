  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_json.htm) →  [JSON - Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_json_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20JSON%20-%20Rendering%2C%20ABENABAP_JSON_TOKEN_WRITER_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

JSON - Rendering

The example demonstrates the rendering of [JSON data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenjson_oview.htm).

Source Code   

\* Public class definition
CLASS cl\_demo\_json\_token\_writer DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    DATA writer TYPE REF TO if\_sxml\_writer.
    METHODS write\_element IMPORTING name  TYPE string
                                    attr  TYPE string OPTIONAL
                                    value TYPE string OPTIONAL
                          RAISING   cx\_sxml\_state\_error.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_json\_token\_writer IMPLEMENTATION.
  METHOD main.
    writer =
      CAST if\_sxml\_writer(
             cl\_sxml\_string\_writer=>create(
               type = if\_sxml=>co\_xt\_json  ) ).
    TRY.
        write\_element( name  = 'object' ).
        write\_element( name  = 'str'    attr = 'order'
                       value = '4711' ).
        writer->close\_element( ).
        write\_element( name  = 'object' attr = 'head' ).
        write\_element( name  = 'str'    attr = 'status'
                       value = 'confirmed' ).
        writer->close\_element( ).
        write\_element( name  = 'str'    attr = 'date'
                       value = '07-19-2012' ).
        writer->close\_element( ).
        writer->close\_element( ).
        write\_element( name  = 'object' attr = 'body' ).
        write\_element( name  = 'object' attr = 'item' ).
        write\_element( name  = 'str'    attr = 'units'
                       value = '2' ).
        writer->close\_element( ).
        write\_element( name  = 'str'    attr = 'price'
                       value = '17.00' ).
        writer->close\_element( ).
        write\_element( name  = 'str'    attr = 'Part No.'
                       value = '0110' ).
        writer->close\_element( ).
        writer->close\_element( ).
        write\_element( name  = 'object' attr = 'item' ).
        write\_element( name  = 'str'    attr = 'units'
                       value = '1' ).
        writer->close\_element( ).
        write\_element( name  = 'str'    attr = 'price'
                       value = '10.50' ).
        writer->close\_element( ).
        write\_element( name  = 'str'    attr = 'Part No.'
                       value = '1609' ).
        writer->close\_element( ).
        writer->close\_element( ).
        write\_element( name  = 'object' attr = 'item' ).
        write\_element( name  = 'str'    attr = 'units'
                       value = '5' ).
        writer->close\_element( ).
        write\_element( name  = 'str'    attr = 'price'
                       value = '12.30' ).
        writer->close\_element( ).
        write\_element( name  = 'str'    attr = 'Part No.'
                       value = '1710' ).
        writer->close\_element( ).
        writer->close\_element( ).
        writer->close\_element( ).
        writer->close\_element( ).
      CATCH cx\_sxml\_state\_error INTO FINAL(error).
        out->write( error->get\_text( ) ).
        RETURN.
    ENDTRY.
    FINAL(json) =
      CAST cl\_sxml\_string\_writer( writer )->get\_output(  ).
    out->write\_json( json ).
  ENDMETHOD.
  METHOD write\_element.
    writer->open\_element( name = name ).
    IF attr IS NOT INITIAL.
      writer->write\_attribute( name = 'name' value = attr ).
    ENDIF.
    IF value IS NOT INITIAL.
      writer->write\_value( value = value ).
    ENDIF.
  ENDMETHOD.
ENDCLASS.

Description   

An [XML string writer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sxml_lib_render.htm) from [XML Library](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sxml_lib.htm) is created as a [JSON writer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenjson_writer_glosry.htm "Glossary Entry") with the type IF\_SXML=>CO\_XT\_JSON. [Token-based rendering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sxml_lib_render_token.htm) methods are used to fill the writer with XML elements that create a valid [JSON-XML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenjson_xml_glosry.htm "Glossary Entry") representation. The result is a string with valid [JSON data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenjson_oview.htm).