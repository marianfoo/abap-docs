  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_clauses.htm) →  [SELECT, WHERE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwhere.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SELECT, SQL Expressions in the WHERE Condition, ABENSQL_EXPR_IN_WHERE_COND_ABEXA, 757
%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

SELECT, SQL Expressions in the WHERE Condition

This example demonstrates how [SQL expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsql_expr.htm) are used on the left side of a [WHERE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_stmt_logexp.htm) condition.

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
           INTO TABLE @FINAL(result)
           UP TO 100 ROWS.
    cl\_demo\_output=>display( result ).  ENDMETHOD.
  METHOD input.
    cl\_demo\_input=>request( CHANGING field = free\_seats ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

On the left side of the [relational expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_stmt_logexp.htm), the content of two specified columns is subtracted in an [SQL expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsql_expr.htm). This calculation is performed on the database. The right side is a functional method call in a [host expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_host_expressions.htm).