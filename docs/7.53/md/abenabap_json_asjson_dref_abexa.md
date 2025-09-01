  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and JSON](javascript:call_link\('abenabap_json.htm'\)) →  [JSON, Examples](javascript:call_link\('abenabap_json_abexas.htm'\)) → 

JSON, asJSON for Anonymous Data Objects

Source Code

REPORT demo\_asjson\_dref.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA dref TYPE REF TO decfloat34.
    dref = NEW #( '1.23456' ).
    "Transformation to JSON
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( 'asJSON' ).
    DATA(writer) = cl\_sxml\_string\_writer=>create(
      type = if\_sxml=>co\_xt\_json ).
    CALL TRANSFORMATION id SOURCE dref = dref
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
    CALL TRANSFORMATION id SOURCE dref = dref
                           RESULT XML xml.
    out->write\_xml( xml )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The [identity transformation](javascript:call_link\('abenid_trafo_glosry.htm'\) "Glossary Entry") ID (for which a [JSON writer](javascript:call_link\('abenjson_writer_glosry.htm'\) "Glossary Entry") is specified as the XML target) is called to create and display the [asJSON](javascript:call_link\('abenasjson_glosry.htm'\) "Glossary Entry") format of a reference variable that points to an anonymous data object.

As a comparison, the [JSON-XML](javascript:call_link\('abenjson_xml_glosry.htm'\) "Glossary Entry") representation of the JSON data and the [asXML](javascript:call_link\('abenasxml_glosry.htm'\) "Glossary Entry") representation of the ABAP data is also shown.