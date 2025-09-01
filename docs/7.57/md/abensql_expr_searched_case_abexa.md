  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) →  [sql\_exp - sql\_case](javascript:call_link\('abensql_case.htm'\)) →  [sql\_exp - sql\_searched\_case](javascript:call_link\('abensql_searched_case.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: sql_exp - Complex CASE, ABENSQL_EXPR_SEARCHED_CASE_ABEXA, 757%0D%0A%0D%0AError:%0D%0A
%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

sql\_exp - Complex CASE

This example demonstrates complex case distinctions in [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)).

Source Code   

REPORT demo\_sql\_expr\_searched\_case.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    CONSTANTS: both\_l  TYPE c LENGTH 20 VALUE 'Both < 50',
               both\_gt TYPE c LENGTH 20 VALUE 'Both >= 50',
               others  TYPE c LENGTH 20 VALUE 'Others'.
    FINAL(rnd) = cl\_abap\_random\_int=>create(
      seed = CONV i( sy-uzeit ) min = 1 max = 100 ).
    DELETE FROM demo\_expressions.
    INSERT demo\_expressions FROM TABLE @( VALUE #(
      FOR i = 0 UNTIL i > 9
      ( id = i
        num1 = rnd->get\_next( )
        num2 = rnd->get\_next( ) ) ) ).
    SELECT num1, num2,
           CASE WHEN num1 <  50 AND num2 <  50 THEN @both\_l
                WHEN num1 >= 50 AND num2 >= 50 THEN @both\_gt
                ELSE @others
           END AS group
           FROM demo\_expressions
           ORDER BY group
           INTO TABLE @FINAL(results).
    cl\_demo\_output=>write( results ).
    LOOP AT results ASSIGNING FIELD-SYMBOL(<wa>)
                    GROUP BY ( key = <wa>-group size = GROUP SIZE )
                    INTO FINAL(group).
      cl\_demo\_output=>write( group ).
    ENDLOOP.
    cl\_demo\_output=>display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

In a list of columns specified after SELECT, [CASE](javascript:call_link\('abensql_simple_case.htm'\)) is used to make a complex case distinction for the content of two columns. The result is a string taken from a [host variable](javascript:call_link\('abenabap_sql_host_variables.htm'\)). Using the alias name defined after AS, the result is assigned to the identically named column in an internal table declared inline, results. [GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)) is used to group this table by the results column.