  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_json.htm) →  [JSON - Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_json_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: JSON - Transformation to HTML, ABENABAP_JSON_TO_HTML_ABEXA, 757%0D%0A%0D%0AError:%0D%
0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

JSON - Transformation to HTML

Transformation from JSON data to HTML.

Source Code   

REPORT demo\_json\_2\_html.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    SELECT \*
           FROM scarr
           INTO TABLE @FINAL(result)
           UP TO 3 ROWS.
    FINAL(json\_writer) = cl\_sxml\_string\_writer=>create(
                          type = if\_sxml=>co\_xt\_json ).
    CALL TRANSFORMATION id SOURCE result = result
                           RESULT XML json\_writer.
    FINAL(json) = json\_writer->get\_output( ).
    CALL TRANSFORMATION sjson2html SOURCE XML json
                                   RESULT XML FINAL(html).
    cl\_demo\_output=>display\_html(
      cl\_abap\_conv\_codepage=>create\_in( )->convert( html ) ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

This example demonstrates how [JSON data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenjson_oview.htm) is transformed to HTML using the XSL transformation SJSON2HTML. The nodes for objects and arrays can be opened and closed in the displayed result.