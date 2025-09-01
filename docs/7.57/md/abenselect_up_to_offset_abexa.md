  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) →  [SELECT, clauses](javascript:call_link\('abenselect_clauses.htm'\)) →  [SELECT, UP TO, OFFSET](javascript:call_link\('abapselect_up_to_offset.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SELECT, Restriction of the Rows in the Result Set, ABENSELECT_UP_TO_OFFSET_ABEXA, 757
%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

SELECT, Restriction of the Rows in the Result Set

This example demonstrates the additions [UP TO and OFFSET](javascript:call_link\('abapselect_up_to_offset.htm'\)) of the statement [SELECT](javascript:call_link\('abapselect.htm'\)).

Source Code   

REPORT demo\_select\_up\_to\_offset.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS
      main.
  PRIVATE SECTION.
    CLASS-DATA:
      o TYPE int8,
      n TYPE int8.
    CLASS-METHODS
      setup.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    setup( ).
    SELECT FROM demo\_expressions
           FIELDS id, num1 AS number, numlong1 AS result
           ORDER BY id, num1
           INTO TABLE @FINAL(itab)
           OFFSET @o
           UP TO @n ROWS.
    cl\_demo\_output=>display( itab ).
    DELETE FROM demo\_expressions.  ENDMETHOD.
  METHOD setup.
    cl\_demo\_input=>new(
       )->add\_field( CHANGING field = o
       )->request(   CHANGING field = n ).
    IF NOT ( ( o BETWEEN 0 AND 2147483646 ) AND
             ( n BETWEEN 0 AND 2147483646 ) ).
      cl\_demo\_output=>display(
        \`Input not in allowed interval!\` ).
      LEAVE PROGRAM.
    ENDIF.
    DELETE FROM demo\_expressions.
    DO strlen( sy-abcde ) TIMES.
      INSERT demo\_expressions FROM @(
        VALUE #( id       = substring( val = sy-abcde
                                       off = sy-index - 1
                                       len = 1 )
                 num1     = sy-index
                 numlong1 = ipow( base = 2 exp = sy-index ) ) ).
    ENDDO.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

An offset and a maximum number of rows can be entered for the result set of a SELECT statement.