  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and JSON](javascript:call_link\('abenabap_json.htm'\)) →  [JSON, Examples](javascript:call_link\('abenabap_json_abexas.htm'\)) → 

JSON, asJSON (General)

This example demonstrates [asJSON](javascript:call_link\('abenabap_asjson_general.htm'\)) for a text string.

Source Code

REPORT demo\_json\_elementary\_trafo.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(text) = \`Hello JSON, I'm ABAP!\`.
    DATA(out) = cl\_demo\_output=>new(
      )->write\_data( text ).
    DATA(writer) = cl\_sxml\_string\_writer=>create(
      type = if\_sxml=>co\_xt\_json ).
    CALL TRANSFORMATION id SOURCE text = text
                           RESULT XML writer.
    DATA(json) = writer->get\_output( ).
    out->write\_json( json ).
    out->line( ).
    text = \`{"TEXT":"Hello ABAP, I'm JSON!"}\`.
    out->write\_json( text ).
    CALL TRANSFORMATION id SOURCE XML text
                           RESULT text = text.
    out->write\_data( text
      )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The [identity transformation](javascript:call_link\('abenid_trafo_glosry.htm'\) "Glossary Entry") ID (for which a [JSON writer](javascript:call_link\('abenjson_writer_glosry.htm'\) "Glossary Entry") is specified as the XML target) serializes a text string to [JSON](javascript:call_link\('abenjson_glosry.htm'\) "Glossary Entry"). The output shows the [asJSON format](javascript:call_link\('abenasjson_glosry.htm'\) "Glossary Entry") of the text string.

The [identity transformation](javascript:call_link\('abenid_trafo_glosry.htm'\) "Glossary Entry") ID then deserializes JSON data in asJSON format to a text string.