  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and JSON](javascript:call_link\('abenabap_json.htm'\)) →  [JSON, Examples](javascript:call_link\('abenabap_json_abexas.htm'\)) → 

JSON, Identity Transformation with JSONWriter as Target

This example demonstrates various XML sources for the [identity transformation](javascript:call_link\('abenid_trafo_glosry.htm'\) "Glossary Entry") with a [JSON writer](javascript:call_link\('abenjson_writer_glosry.htm'\) "Glossary Entry") as target.

Source Code

REPORT demo\_call\_trafo\_id\_json.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section(
      \`Identity Transformation for JSON Writer\` ).
    DATA json\_writer TYPE REF TO cl\_sxml\_string\_writer.
    out->begin\_section(
      \`Source JSON String\` ).
    DATA(json) = cl\_abap\_codepage=>convert\_to(
                   \`{"TEXT":"Hello JSON!"}\` ).
    json\_writer = cl\_sxml\_string\_writer=>create(
                    type = if\_sxml=>co\_xt\_json ).
    CALL TRANSFORMATION id SOURCE XML json
                           RESULT XML json\_writer.
    out->write\_json( json\_writer->get\_output( ) ).
    out->next\_section(
      \`Source JSON Reader\` ).
    DATA(json\_reader) = cl\_sxml\_string\_reader=>create( json ).
    json\_writer = cl\_sxml\_string\_writer=>create(
                    type = if\_sxml=>co\_xt\_json ).
    CALL TRANSFORMATION id SOURCE XML json\_reader
                           RESULT XML json\_writer.
    out->write\_json( json\_writer->get\_output( ) ).
    out->next\_section(
      \`Source JSON-XML\` ).
    DATA(xml\_json) = cl\_abap\_codepage=>convert\_to(
     \`<object><str name="TEXT">Hello JSON!</str></object>\` ).
    json\_writer = cl\_sxml\_string\_writer=>create(
                    type = if\_sxml=>co\_xt\_json ).
    CALL TRANSFORMATION id SOURCE XML xml\_json
                           RESULT XML json\_writer.
    out->write\_json( json\_writer->get\_output( )
      )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The [identity transformation](javascript:call_link\('abenid_trafo_glosry.htm'\) "Glossary Entry") ID is filled three times with XML sources which can be passed to the [JSON writer](javascript:call_link\('abenjson_writer_glosry.htm'\) "Glossary Entry") specified as an XML target.

-   Valid JSON data in a byte string.

-   A [JSON reader](javascript:call_link\('abenjson_reader_glosry.htm'\) "Glossary Entry") that points to this byte string.

-   XML data in [JSON-XML format](javascript:call_link\('abenjson_xml_glosry.htm'\) "Glossary Entry") in a byte string.