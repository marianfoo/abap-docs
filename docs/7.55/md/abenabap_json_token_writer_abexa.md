  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and JSON](javascript:call_link\('abenabap_json.htm'\)) →  [JSON - Examples](javascript:call_link\('abenabap_json_abexas.htm'\)) → 

JSON - Rendering

The example demonstrates the rendering of [JSON data](javascript:call_link\('abenjson_oview.htm'\)).

Source Code

REPORT demo\_json\_oo\_writer.
CLASS json\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-DATA writer TYPE REF TO if\_sxml\_writer.
    CLASS-METHODS write\_element IMPORTING name TYPE string
                                          attr TYPE string OPTIONAL
                                          value TYPE string OPTIONAL
                                RAISING cx\_sxml\_state\_error.
ENDCLASS.
CLASS json\_demo IMPLEMENTATION.
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
      CATCH cx\_sxml\_state\_error INTO DATA(error).
        cl\_demo\_output=>display( error->get\_text( ) ).
        RETURN.
    ENDTRY.
    DATA(json) =
      CAST cl\_sxml\_string\_writer( writer )->get\_output(  ).
    cl\_demo\_output=>display\_json( json ).
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
START-OF-SELECTION.
  json\_demo=>main( ).

Description

An [XML string writer](javascript:call_link\('abenabap_sxml_lib_render.htm'\)) from [XML Library](javascript:call_link\('abenabap_sxml_lib.htm'\)) is created as a [JSON writer](javascript:call_link\('abenjson_writer_glosry.htm'\) "Glossary Entry") with the type IF\_SXML=>CO\_XT\_JSON. [Token-based rendering](javascript:call_link\('abenabap_sxml_lib_render_token.htm'\)) methods are used to fill the writer with XML elements that create a valid [JSON-XML](javascript:call_link\('abenjson_xml_glosry.htm'\) "Glossary Entry") representation. The result is a string with valid [JSON data](javascript:call_link\('abenjson_oview.htm'\)).