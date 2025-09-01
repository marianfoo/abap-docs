  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and JSON](javascript:call_link\('abenabap_json.htm'\)) →  [JSON, Examples](javascript:call_link\('abenabap_json_abexas.htm'\)) → 

JSON, asJSON for Structures

This example demonstrates [asJSON](javascript:call_link\('abenabap_asjson_abap_types_struc.htm'\)) for a structure.

Source Code

REPORT demo\_asjson\_structures.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: BEGIN OF struct,
            i          TYPE i            VALUE -123,
            int8       TYPE int8         VALUE -123,
            p          TYPE p DECIMALS 2 VALUE \`-1.23\`,
            decfloat16 TYPE decfloat16   VALUE \`123E+1\`,
            decfloat34 TYPE decfloat34   VALUE \`-3.140000E+02\`,
            f          TYPE f            VALUE \`-3.140000E+02\`,
            c          TYPE c LENGTH 3   VALUE \` Hi\`,
            string     TYPE string       VALUE \` Hello \`,
            n          TYPE n LENGTH 6   VALUE \`001234\`,
            d          TYPE d            VALUE \`20020204\`,
            t          TYPE t            VALUE \`201501\`,
            x          TYPE x LENGTH 3   VALUE \`ABCDEF\`,
            xstring    TYPE xstring      VALUE \`456789AB\`,
          END OF struct.
    "Transformation to JSON
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( 'asJSON' ).
    DATA(writer) = cl\_sxml\_string\_writer=>create(
      type = if\_sxml=>co\_xt\_json ).
    CALL TRANSFORMATION id SOURCE struct = struct
                           RESULT XML writer.
    DATA(json) = writer->get\_output( ).
    out->write\_json( json ).
    "JSON-XML
    out->next\_section( 'asJSON-XML' ).
    DATA(reader) = cl\_sxml\_string\_reader=>create( json ).
    DATA(xml\_writer) = cl\_sxml\_string\_writer=>create( ).
    reader->next\_node( ).
    reader->skip\_node( xml\_writer ).
    DATA(xml) = xml\_writer->get\_output( ).
    out->write\_xml( xml ).
    "asXML
    out->next\_section( 'asXML' ).
    CALL TRANSFORMATION id SOURCE struct = struct
                           RESULT XML xml.
    out->write\_xml( xml )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The [identity transformation](javascript:call_link\('abenid_trafo_glosry.htm'\) "Glossary Entry") ID (for which a [JSON writer](javascript:call_link\('abenjson_writer_glosry.htm'\) "Glossary Entry") is specified as the XML target) is called to create and display the [asJSON](javascript:call_link\('abenasjson_glosry.htm'\) "Glossary Entry") format of a structure.

As a comparison, the [JSON-XML](javascript:call_link\('abenjson_xml_glosry.htm'\) "Glossary Entry") representation of the JSON data and the [asXML](javascript:call_link\('abenasxml_glosry.htm'\) "Glossary Entry") representation of the ABAP data is also shown.