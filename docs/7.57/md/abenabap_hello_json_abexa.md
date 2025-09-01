  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_json.htm) →  [JSON - Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_json_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: JSON - asJSON in General, ABENABAP_HELLO_JSON_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0
A%0D%0A%0D%0ASuggestion for improvement:)

JSON - asJSON in General

This example demonstrates [asJSON](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_asjson_general.htm) for a text string.

Source Code   

REPORT demo\_json\_elementary\_trafo.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(text) = \`Hello JSON, I'm ABAP!\`.
    FINAL(out) = cl\_demo\_output=>new(
      )->write\_data( text ).
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
    out->write\_data( text
      )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The [identity transformation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID, for which a [JSON writer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenjson_writer_glosry.htm "Glossary Entry") is specified as the XML target, serializes a text string to [JSON](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenjson_glosry.htm "Glossary Entry"). The output shows the [asJSON](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenasjson_glosry.htm "Glossary Entry") representation of the text string.

The [identity transformation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID then deserializes JSON data in asJSON format to a text string.