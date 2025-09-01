  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [ABAP SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) →  [Examples of SQL Expressions](javascript:call_link\('abensql_expr_abexas.htm'\)) → 

SQL Expressions, Constant in SELECT List

This example demonstrates one way to use a constant value in the SELECT list.

Source Code

REPORT demo\_sql\_expr\_literal.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA carrier TYPE scarr-carrid.
    cl\_demo\_input=>request( CHANGING field = carrier ).
    SELECT SINGLE @abap\_true
           FROM scarr
           WHERE carrid = @carrier
           INTO @DATA(exists).
      IF exists = abap\_true.
        cl\_demo\_output=>display(
          |Carrier { carrier } exists in SCARR| ).
      ELSE.
        cl\_demo\_output=>display(
          |Carrier { carrier } does not exist in SCARR| ).
      ENDIF.    ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Determines whether a row exists for a WHERE condition (regardless of the content of the row). A constant is specified to make it unnecessary to specify a column of the database and transport it. The target object exists is created using an inline declaration.