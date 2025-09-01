  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql.htm) →  [Open SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_operands.htm) →  [Open SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsql_expr.htm) →  [Examples of SQL Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_expr_abexas.htm) → 

SQL Expressions, Use in the WHERE Condition

This example demonstrates how [SQL expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsql_expr.htm) are used on the left side of a [WHERE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp.htm) condition.

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
           INTO TABLE @DATA(result).
    cl\_demo\_output=>display( result ).  ENDMETHOD.
  METHOD input.
    cl\_demo\_input=>request( CHANGING field = free\_seats ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

On the left side of the [SQL condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp.htm), the content of two specified columns is subtracted in an [SQL expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsql_expr.htm). This calculation is performed on the database. The right side is a functional method call in a [host expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_host_expressions.htm).