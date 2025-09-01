  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_processing_expr_func.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20FILTER%2C%20Filter%20Operator%2C%20ABENCONSTRUCTOR_EXPRESSION_FILTER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

FILTER, Filter Operator

Syntax Forms

[Basic Form](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expr_filter_basic.htm)

1\. ... FILTER type( itab *\[*EXCEPT*\]* *\[*USING KEY [keyname](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenkeyname.htm)*\]*
                        WHERE c1 op f1 *\[*AND c2 op f2 *\[*...*\]**\]* ) ...

[Filter Table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expr_filter_table.htm)

2\. ... FILTER type( itab *\[*EXCEPT*\]* IN ftab *\[*USING KEY [keyname](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenkeyname.htm)*\]*
                        WHERE c1 op f1 *\[*AND c2 op f2 *\[*...*\]**\]* ) ...

Addition:

[... EXCEPT](#!ABAP_ONE_ADD@1@)

Effect

A [constructor expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expressions.htm) with the component operator FILTER creates a result of a table type specified using type. The lines are taken from an existing internal table itab in accordance with the condition after WHERE, converted to the line type of type, and inserted into the target table in accordance with the rules of [INSERT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinsert_itab.htm) ... [INTO TABLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinsert_itab_position.htm). The order in which the lines are taken from itab depends on its [table category](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_category_glosry.htm "Glossary Entry") and the addition USING KEY and is the same as for [LOOP AT itab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab.htm).

-   In the [basic form](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expr_filter_basic.htm), the condition is created with single values.
-   When using a [filter table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expr_filter_table.htm), the condition is created with values from the filter table ftab.

The following can be specified for type:

-   A non-generic [table type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_type_glosry.htm "Glossary Entry").
-   The # character as a symbol for the [operand type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoperand_type_glosry.htm "Glossary Entry"). If the data type required in an operand position is not unique and not known completely, the type of itab is used if known.

itab is a [functional operand position](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunctional_position_glosry.htm "Glossary Entry"). The line type of itab must be convertible to the line type of the target type type. USING KEY can or must be used to specify a table key for evaluating itab or ftab, depending on the variant.

Hints

-   Table filtering can also be performed using a [table comprehension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_comprehension_glosry.htm "Glossary Entry") or a [table reduction](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_reduction_glosry.htm "Glossary Entry") with an [iteration expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeniteration_expression_glosry.htm "Glossary Entry") for [table iterations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_iteration_glosry.htm "Glossary Entry") with [FOR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_itab.htm). The operator FILTER provides a shorter notation for this special case and is more efficient to execute.
-   A table filter constructs the result line by line. If the result contains almost all lines in the source table, this method can be slower than copying the source table and deleting the surplus lines from the target table.

Addition   

... EXCEPT

Effect

If EXCEPT is not specified, those lines from itab are used that meet the WHERE condition. If EXCEPT is specified, those lines from itab are used that do not meet the WHERE condition.

Hint

The addition EXCEPT is not the same as a negation of the WHERE condition, particularly in the variant with a [filter table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expr_filter_table.htm).

Example

Use of the addition EXCEPT in the [basic form](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expr_filter_basic.htm) of the FILTER operator. The constructed table contains messages of all languages except D.

DATA messages TYPE SORTED TABLE OF t100 WITH NON-UNIQUE KEY sprsl.
SELECT \*
       FROM t100
       WHERE arbgb = 'SABAPDEMOS'
       ORDER BY msgnr
       INTO TABLE @messages.
cl\_demo\_output=>display(
  FILTER #( messages EXCEPT WHERE sprsl = 'D' ) ).

Continue
[FILTER, Basic Form](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expr_filter_basic.htm)
[FILTER, Filter Table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expr_filter_table.htm)
[itab - Examples for FILTER](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_filtering_abexas.htm)