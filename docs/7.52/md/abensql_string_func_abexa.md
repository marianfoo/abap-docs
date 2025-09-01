  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql.htm) →  [Open SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_operands.htm) →  [Open SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsql_expr.htm) →  [Examples of SQL Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_expr_abexas.htm) → 

SQL Expressions, String Functions

This example demonstrates [string functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_string_func.htm) in [SQL expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsql_expr.htm).

Source Code

REPORT demo\_sql\_function\_string.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DELETE FROM demo\_expressions.
    INSERT demo\_expressions FROM TABLE @( VALUE #(
      ( id = 'X'
        char1 = ' 0123'
        char2 = 'aAaA' ) ) ).
    SELECT SINGLE
           char1 AS text1,
           char2 AS text2,
           CONCAT(            char1,char2 )     AS concat,
           CONCAT\_WITH\_SPACE( char1,char2, 1 )  AS concat\_with\_space,
           INSTR(             char1,'12' )      AS instr,
           LEFT(              char1,3 )         AS left,
           LENGTH(            char1 )           AS length,
           LOWER(             char2 )           AS lower,
           LPAD(              char1,10,'x' )    AS lpad,
           LTRIM(             char1,' ' )       AS ltrim,
           REPLACE(           char1,'12','\_\_' ) AS replace,
           RIGHT(             char1,3 )         as right,
           RPAD(              char1,10,'x' )    AS rpad,
           RTRIM(             char1,'3' )       AS rtrim,
           SUBSTRING(         char1,3,3 )       AS substring,
           UPPER(             char2 )           AS upper
           FROM demo\_expressions
           INTO @DATA(result).
    cl\_demo\_output=>display( result ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Uses the string functions supported by Open SQL as elements of a SELECT list.