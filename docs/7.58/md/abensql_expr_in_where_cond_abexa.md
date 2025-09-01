  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_clauses.htm) →  [SELECT, WHERE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwhere.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECT%2C%20SQL%20Expressions%20in%20the%20WHERE%20Condition%2C%20ABENSQL_EXPR_IN_WHERE_COND_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggesti
on%20for%20improvement:)

SELECT, SQL Expressions in the WHERE Condition

This example demonstrates how [SQL expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsql_expr.htm) are used on the left side of a [WHERE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_stmt_logexp.htm) condition.

Source Code   

\* Public class definition
CLASS cl\_demo\_select\_where\_exprssn DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS input RETURNING VALUE(free\_seats) TYPE i.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_select\_where\_exprssn IMPLEMENTATION.
  METHOD main.
    SELECT carrid, connid, fldate, seatsmax, seatsocc,
           seatsmax - seatsocc AS seatsfree
           FROM sflight
           WHERE seatsmax - seatsocc > @( input( ) )
           INTO TABLE @FINAL(result)
           UP TO 100 ROWS.
    out->write( result ).
  ENDMETHOD.
  METHOD input.
    cl\_demo\_input=>new( )->request( CHANGING field = free\_seats ).
  ENDMETHOD.
ENDCLASS.

Description   

On the left side of the [relational expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_stmt_logexp.htm), the content of two specified columns is subtracted in an [SQL expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsql_expr.htm). This calculation is performed on the database. The right side is a functional method call in a [host expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_host_expressions.htm).