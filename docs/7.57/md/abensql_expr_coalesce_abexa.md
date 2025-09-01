  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsql_expr.htm) →  [sql\_exp - sql\_func](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_builtin_func.htm) →  [ABAP SQL - Built-In Functions sql\_func](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_builtin_functions.htm) →  [sql\_func - SQL Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_functions.htm) →  [sql\_func - Coalesce Function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_coalesce.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: sql_func - Coalesce Function, ABENSQL_EXPR_COALESCE_ABEXA, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

sql\_func - Coalesce Function

This example demonstrates the coalesce function in [SQL expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsql_expr.htm).

Source Code   

REPORT demo\_sql\_expr\_coalesce NO STANDARD PAGE HEADING.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS: class\_constructor,
      main.
  PRIVATE SECTION.
    CLASS-DATA: wa1 TYPE demo\_join1,
                wa2 TYPE demo\_join2,
                out TYPE REF TO if\_demo\_output.
    CLASS-DATA BEGIN OF wa.
    INCLUDE STRUCTURE wa1 AS wa1 RENAMING WITH SUFFIX 1.
    INCLUDE STRUCTURE wa2 AS wa2 RENAMING WITH SUFFIX 2.
    CLASS-DATA END OF wa.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA itab LIKE TABLE OF wa WITH EMPTY KEY.
    out = cl\_demo\_output=>new(
     )->begin\_section( \`OUTER JOIN with Coalesce\` ).
    SELECT t1~a AS a1, t1~b AS b1, t1~c AS c1, t1~d AS d1,
           COALESCE( t2~d, '--' ) AS d2,
           COALESCE( t2~e, '--' ) AS e2,
           COALESCE( t2~f, '--' ) AS f2,
           COALESCE( t2~g, '--' ) AS g2,
           COALESCE( t2~h, '--' ) AS h2
       FROM demo\_join1 AS t1
         LEFT OUTER JOIN demo\_join2 AS t2 ON t2~d = t1~d
       ORDER BY t1~d
       INTO CORRESPONDING FIELDS OF TABLE @itab.
    out->display( itab ).  ENDMETHOD.
  METHOD class\_constructor.
    DELETE FROM demo\_join1.
    INSERT demo\_join1 FROM TABLE @( VALUE #(
      ( a = 'a1' b = 'b1' c = 'c1'  d = 'uu' )
      ( a = 'a2' b = 'b2' c = 'c2'  d = 'uu' )
      ( a = 'a3' b = 'b3' c = 'c3'  d = 'vv' )
      ( a = 'a4' b = 'b4' c = 'c4'  d = 'ww' ) ) ).
    DELETE FROM demo\_join2.
    INSERT demo\_join2 FROM TABLE @( VALUE #(
      ( d = 'uu' e = 'e1' f = 'f1'  g = 'g1'  h = 'h1' )
      ( d = 'ww' e = 'e2' f = 'f2'  g = 'g2'  h = 'h2' )
      ( d = 'xx' e = 'e3' f = 'f3'  g = 'g3'  h = 'h3' ) ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

This example is an excerpt from the executable example for [joins](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenjoins_abexa.htm). Here, the function [COALESCE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_coalesce.htm) is used to replace null values produced by an outer join with a different value.