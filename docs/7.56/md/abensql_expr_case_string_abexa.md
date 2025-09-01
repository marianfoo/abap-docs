  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm) →  [sql\_exp - sql\_case](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_case.htm) →  [sql\_exp - sql\_simple\_case](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_simple_case.htm) → 

sql\_exp - Simple CASE

This example demonstrates simple case distinctions in [SQL expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm).

Source Code

REPORT demo\_sql\_expr\_case\_string.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DELETE FROM demo\_expressions.
    INSERT demo\_expressions FROM TABLE @( VALUE #(
      ( id = 'x' char1 = 'aaaaa' char2 = 'bbbbb' )
      ( id = 'y' char1 = 'xxxxx' char2 = 'yyyyy' )
      ( id = 'z' char1 = 'mmmmm' char2 = 'nnnnn' ) ) ).
    DATA(else) = 'fffff'.
    SELECT id, char1, char2,
           CASE char1
             WHEN 'aaaaa' THEN ( char1 && char2 )
             WHEN 'xxxxx' THEN ( char2 && char1 )
             ELSE @else
           END AS text
           FROM demo\_expressions
           INTO TABLE @DATA(results).
    cl\_demo\_output=>display( results ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

In a list of columns specified after SELECT, [CASE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_simple_case.htm) is used to make a simple case distinction for the content of a column. The result is a character string that is concatenated from column content or taken from a [host variable](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_host_variables.htm). Using the alias name defined after AS, the result is assigned to the identically named column in an internal table declared inline, results.