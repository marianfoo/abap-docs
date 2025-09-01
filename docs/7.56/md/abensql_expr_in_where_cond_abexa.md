  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) →  [SELECT, clauses](javascript:call_link\('abenselect_clauses.htm'\)) →  [SELECT, WHERE](javascript:call_link\('abapwhere.htm'\)) → 

SELECT, SQL Expressions in the WHERE Condition

This example demonstrates how [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) are used on the left side of a [WHERE](javascript:call_link\('abenabap_sql_stmt_logexp.htm'\)) condition.

Source Code

REPORT demo\_select\_where\_expression.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      input RETURNING VALUE(free\_seats) TYPE i.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    SELECT carrid, connid, fldate, seatsmax, seatsocc,
           seatsmax - seatsocc AS seatsfree
           FROM sflight
           WHERE seatsmax - seatsocc > @( input( ) )
           INTO TABLE @DATA(result)
           UP TO 100 ROWS.
    cl\_demo\_output=>display( result ).  ENDMETHOD.
  METHOD input.
    cl\_demo\_input=>request( CHANGING field = free\_seats ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

On the left side of the [relational expression](javascript:call_link\('abenabap_sql_stmt_logexp.htm'\)), the content of two specified columns is subtracted in an [SQL expression](javascript:call_link\('abapsql_expr.htm'\)). This calculation is performed on the database. The right side is a functional method call in a [host expression](javascript:call_link\('abenabap_sql_host_expressions.htm'\)).