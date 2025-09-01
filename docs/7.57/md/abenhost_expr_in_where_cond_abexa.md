  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Operands sql\_elem](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_operands.htm) →  [ABAP SQL - @( expr )](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_host_expressions.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Host Expressions, Use in the WHERE Condition, ABENHOST_EXPR_IN_WHERE_COND_ABEXA, 757%
0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Host Expressions, Use in the WHERE Condition

This example demonstrates [host expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_host_expressions.htm) on the right side of a [relational expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_stmt_logexp.htm) of a [WHERE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwhere.htm) condition.

Source Code   

REPORT demo\_select\_where\_tab\_exp.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-DATA carriers TYPE HASHED TABLE OF scarr
                  WITH UNIQUE KEY carrid
                  WITH NON-UNIQUE SORTED KEY name COMPONENTS carrname.
    CLASS-METHODS:
      class\_constructor,
      main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA name TYPE scarr-carrname VALUE 'United Airlines'.
    cl\_demo\_input=>request( CHANGING field = name ).
    SELECT carrid, connid, cityfrom, cityto
           FROM spfli
           WHERE carrid =
             @( VALUE spfli-carrid( carriers\[ KEY name
                                              carrname = name \]-carrid
                                              OPTIONAL ) )
           INTO TABLE @FINAL(result).
    cl\_demo\_output=>display( result ).  ENDMETHOD.
  METHOD class\_constructor.
    SELECT \*
           FROM scarr
           INTO TABLE carriers.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

A table expression is evaluated as a host expression on the right side of an [SQL condition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_stmt_logexp.htm). The result is used for the comparison with the column specified on the left side.