  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) →  [sql\_exp - sql\_win](javascript:call_link\('abapselect_over.htm'\)) →  [sql\_win - Examples of Window Expressions](javascript:call_link\('abensql_expr_over_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_win%20-%20Window%20Function%20NTILE%2C%20ABENSQL_EXPR_OVER_NTILE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sql\_win - Window Function NTILE

This example demonstrates the [window expression](javascript:call_link\('abapselect_over.htm'\)) with the [window function](javascript:call_link\('abenwindow_function_glosry.htm'\) "Glossary Entry") [NTILE](javascript:call_link\('abensql_win_func.htm'\)).

Source Code   

\* Public class definition
CLASS cl\_demo\_select\_over\_ntile DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_select\_over\_ntile IMPLEMENTATION.
  METHOD main.
    SELECT name,
           salary,
           NTILE( 5 ) OVER( ORDER BY salary ) AS ntile
           FROM demo\_employees
           INTO TABLE @FINAL(result).
    out->write( result ).
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    DELETE FROM demo\_employees.
    INSERT demo\_employees FROM TABLE @(
       VALUE #( ( name = 'Lothar Sudhoff' salary = '1354.00' )
       ( name = 'Christa Martin' salary = '3247.00' )
       ( name = 'Illya Gueldenpfennig' salary = '7453.00' )
       ( name = 'Johannes Legrand' salary = '1468.00' )
       ( name = 'Johann Buchholm' salary = '3245.00' )
       ( name = 'Holm Trensch' salary = '2324.00' )
       ( name = 'Laura Lindwurm' salary = '3247.00' )
       ( name = 'Thilo Eichbaum' salary = '5436.00' )
       ( name = 'Amelie Babilon' salary = '3485.00' )
       ( name = 'Ulla Babilon' salary = '5489.00' )
       ( name = 'Anna Picard' salary = '7453.00' )
       ) ).
  ENDMETHOD.
ENDCLASS.

Description   

All employees from the DEMO\_EMPLOYEES table are sorted by their salary, starting with the lowest, and distributed into five salary groups by the NTILE function. The first group, group 1, has one entry more than the other four groups, as the number of employees (11) cannot be distributed equally into the number of buckets (five in this example).