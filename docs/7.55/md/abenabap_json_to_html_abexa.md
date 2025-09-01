  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and JSON](javascript:call_link\('abenabap_json.htm'\)) →  [JSON - Examples](javascript:call_link\('abenabap_json_abexas.htm'\)) → 

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
           INTO TABLE @DATA(result)
           UP TO 3 ROWS.
    DATA(json\_writer) = cl\_sxml\_string\_writer=>create(
                          type = if\_sxml=>co\_xt\_json ).
    CALL TRANSFORMATION id SOURCE result = result
                           RESULT XML json\_writer.
    DATA(json) = json\_writer->get\_output( ).
    CALL TRANSFORMATION sjson2html SOURCE XML json
                                   RESULT XML DATA(html).
    cl\_demo\_output=>display\_html(
      cl\_abap\_conv\_codepage=>create\_in( )->convert( html ) ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example demonstrates how [JSON data](javascript:call_link\('abenjson_oview.htm'\)) is transformed to SJSON2HTML to HTML using the transformation XSL. The nodes for objects and arrays can be opened and closed in the displayed result.