  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and JSON](javascript:call_link\('abenabap_json.htm'\)) →  [JSON - Examples](javascript:call_link\('abenabap_json_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20JSON%20-%20asJSON%20for%20Anonymous%20Data%20Objects%2C%20ABENABAP_JSON_ASJSON_DREF_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%
20improvement:)

JSON - asJSON for Anonymous Data Objects

Source Code   

\* Public class definition
CLASS cl\_demo\_asjson\_dref DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_asjson\_dref IMPLEMENTATION.
  METHOD main.
    DATA dref TYPE REF TO decfloat34.
    dref = NEW #( '1.23456' ).
    "Transformation to JSON
    out->begin\_section( 'asJSON' ).
    FINAL(writer) = cl\_sxml\_string\_writer=>create(
      type = if\_sxml=>co\_xt\_json ).
    CALL TRANSFORMATION id SOURCE dref = dref
                           RESULT XML writer.
    FINAL(json) = writer->get\_output( ).
    out->write\_json( json ).
    "JSON-XML
    out->next\_section( 'asJSON-XML' ).
    FINAL(reader) = cl\_sxml\_string\_reader=>create( json ).
    FINAL(xml\_writer) = cl\_sxml\_string\_writer=>create( ).
    reader->next\_node( ).
    reader->skip\_node( xml\_writer ).
    DATA(xml) = xml\_writer->get\_output( ).
    out->write\_xml( xml ).
    "asXML
    out->next\_section( 'asXML' ).
    CALL TRANSFORMATION id SOURCE dref = dref
                           RESULT XML xml.
    out->write\_xml( xml ).
  ENDMETHOD.
ENDCLASS.

Description   

The [identity transformation](javascript:call_link\('abenid_trafo_glosry.htm'\) "Glossary Entry") ID, for which a [JSON writer](javascript:call_link\('abenjson_writer_glosry.htm'\) "Glossary Entry") is specified as the XML target, is called to create the [asJSON](javascript:call_link\('abenasjson_glosry.htm'\) "Glossary Entry") representation of a reference variable that points to an anonymous data object.

For comparison, the [JSON-XML](javascript:call_link\('abenjson_xml_glosry.htm'\) "Glossary Entry") representation of the JSON data and the [asXML](javascript:call_link\('abenasxml_glosry.htm'\) "Glossary Entry") representation of the ABAP data is also shown.