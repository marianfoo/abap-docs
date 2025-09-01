---
title: "Source Code"
description: |
  REPORT demo_string_agg. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DELETE FROM demo_expressions. INSERT demo_expressions FROM TABLE @( VALUE #( ( id = '5' char1 = 'nowhere' ) ( id = '3' char1 = 'this' ) ( id = '1' char1 = 'everybo
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_expr_string_agg_abexa.htm"
abapFile: "abensql_expr_string_agg_abexa.htm"
keywords: ["select", "insert", "delete", "do", "if", "try", "method", "class", "data", "abensql", "expr", "string", "agg", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) →  [sql\_exp - sql\_agg](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_aggregate.htm) →  [ABAP SQL - Examples of Aggregate Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_agg_expr_abexas.htm) → 

SQL Expression, Aggregate Function string\_agg

This example demonstrates the [aggregate function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_agg_func.htm) string\_agg.

Source Code

REPORT demo\_string\_agg.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DELETE FROM demo\_expressions.
    INSERT demo\_expressions FROM TABLE @( VALUE #(
      ( id = '5' char1 = 'nowhere' )
      ( id = '3' char1 = 'this' )
      ( id = '1' char1 = 'everybody' )
      ( id = '4' char1 = 'is' )
      ( id = '2' char1 = 'knows' ) ) ).
    SELECT STRING\_AGG( char1,' ' )
           FROM demo\_expressions
           INTO TABLE @DATA(unordered).
    cl\_demo\_output=>write( unordered ).
    SELECT STRING\_AGG( char1,' ' ORDER BY id ASCENDING )
           FROM demo\_expressions
           INTO TABLE @DATA(ordered\_ascending).
    cl\_demo\_output=>write( ordered\_ascending ).
    SELECT STRING\_AGG( char1,' ' ORDER BY id DESCENDING )
           FROM demo\_expressions
           INTO TABLE @DATA(ordered\_descending).
    cl\_demo\_output=>write( ordered\_descending ).
    cl\_demo\_output=>display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Uses the [aggregate function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenaggregate_function_glosry.htm "Glossary Entry") [STRING\_AGG](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_agg_func.htm) as an [aggregate expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenaggregate_expression_glosry.htm "Glossary Entry") in the [SELECT list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_list.htm) with different sorts.