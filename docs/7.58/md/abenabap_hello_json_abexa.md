  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_json.htm) →  [JSON - Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_json_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20JSON%20-%20asJSON%20in%20General%2C%20ABENABAP_HELLO_JSON_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

JSON - asJSON in General

This example demonstrates [asJSON](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_asjson_general.htm) for a text string.

Source Code   

\* Public class definition
CLASS cl\_demo\_json\_elementary\_trafo DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_json\_elementary\_trafo IMPLEMENTATION.
  METHOD main.
    DATA(text) = \`Hello JSON, I'm ABAP!\`.
    out->write\_data( text ).
    FINAL(writer) = cl\_sxml\_string\_writer=>create(
      type = if\_sxml=>co\_xt\_json ).
    CALL TRANSFORMATION id SOURCE text = text
                           RESULT XML writer.
    FINAL(json) = writer->get\_output( ).
    out->write\_json( json ).
    out->line( ).
    text = \`{"TEXT":"Hello ABAP, I'm JSON!"}\`.
    out->write\_json( text ).
    CALL TRANSFORMATION id SOURCE XML text
                           RESULT text = text.
    out->write\_data( text ).
  ENDMETHOD.
ENDCLASS.

Description   

The [identity transformation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID, for which a [JSON writer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenjson_writer_glosry.htm "Glossary Entry") is specified as the XML target, serializes a text string to [JSON](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenjson_glosry.htm "Glossary Entry"). The output shows the [asJSON](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenasjson_glosry.htm "Glossary Entry") representation of the text string.

The [identity transformation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID then deserializes JSON data in asJSON format to a text string.