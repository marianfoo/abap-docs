  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsql_expr.htm) →  [sql\_exp - sql\_agg](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_aggregate.htm) →  [sql\_agg - Examples of Aggregate Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_agg_expr_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_agg%20-%20Aggregate%20Function%20string_agg%2C%20ABENSQL_EXPR_STRING_AGG_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impro
vement:)

sql\_agg - Aggregate Function string\_agg

This example demonstrates the [aggregate function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_agg_func.htm) string\_agg.

Source Code   

\* Public class definition
CLASS cl\_demo\_str\_agg DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_str\_agg IMPLEMENTATION.
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
           INTO TABLE @FINAL(unordered).
    out->write( unordered ).
    SELECT STRING\_AGG( char1,' ' ORDER BY id ASCENDING )
           FROM demo\_expressions
           INTO TABLE @FINAL(ordered\_ascending).
    out->write( ordered\_ascending ).
    SELECT STRING\_AGG( char1,' ' ORDER BY id DESCENDING )
           FROM demo\_expressions
           INTO TABLE @FINAL(ordered\_descending).
    out->write( ordered\_descending ).
  ENDMETHOD.
ENDCLASS.

Description   

Use of the [aggregate function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenaggregate_function_glosry.htm "Glossary Entry") [STRING\_AGG](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_agg_func.htm) as an [aggregate expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenaggregate_expression_glosry.htm "Glossary Entry") in the [SELECT list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_list.htm) with different sorts.