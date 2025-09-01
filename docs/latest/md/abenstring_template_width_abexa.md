  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_processing_expr_func.htm) →  [String Expressions (string\_exp)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcompute_string.htm) →  [string\_exp - String Templates (string\_tmpl)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_templates.htm) →  [string\_tmpl - Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_templates_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20string_tmpl%20-%20Specified%20Length%2C%20ABENSTRING_TEMPLATE_WIDTH_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

string\_tmpl - Specified Length

This example demonstrates how to specify a length for embedded expressions.

Source Code   

\* Public class definition
CLASS cl\_demo\_str\_template\_width DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_str\_template\_width IMPLEMENTATION.
  METHOD main.
    TYPES result TYPE STANDARD TABLE OF string WITH EMPTY KEY.
    FINAL(abcde) = 'abcdefghijklmnopqrstuvwxyz'.
    out->write(
      VALUE result(
        FOR j = 1 UNTIL j > strlen( abcde )
        ( |{ substring( val = abcde len = j )
             WIDTH = j + 4 }<---| ) ) ).
    out->write(
      VALUE result(
        FOR j = 1 UNTIL j > strlen( abcde )
        ( |{ substring( val = abcde len = j )
             WIDTH = strlen( abcde ) / 2 } <---| ) ) ).
  ENDMETHOD.
ENDCLASS.

Description   

Two [iteration expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfor_conditional.htm) perform the built-in function substring for the system field sy-abcde in an embedded expression of a string template. The first iteration calculates the length from the length of the substring plus a fixed value. The second iteration constantly sets the length to half the length of the full string and is therefore ignored for longer substring accesses.