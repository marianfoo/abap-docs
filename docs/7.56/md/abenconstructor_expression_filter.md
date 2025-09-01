  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Expressions and Functions](javascript:call_link\('abentable_processing_expr_func.htm'\)) → 

FILTER, Filter Operator

Syntax Forms

[Basic form](javascript:call_link\('abenconstructor_expr_filter_basic.htm'\))
1\. ... FILTER type( itab *\[*EXCEPT*\]* *\[*USING KEY [keyname](javascript:call_link\('abenkeyname.htm'\))*\]*
                        WHERE c1 op f1 *\[*AND c2 op f2 *\[*...*\]**\]* ) ...
[Filter table](javascript:call_link\('abenconstructor_expr_filter_table.htm'\))
2\. ... FILTER type( itab *\[*EXCEPT*\]* IN ftab *\[*USING KEY [keyname](javascript:call_link\('abenkeyname.htm'\))*\]*
                        WHERE c1 op f1 *\[*AND c2 op f2 *\[*...*\]**\]* ) ...

Addition:

[... EXCEPT](#!ABAP_ONE_ADD@1@)

Effect

A [constructor expression](javascript:call_link\('abenconstructor_expressions.htm'\)) with the component operator FILTER creates a result of a table type specified using type. The lines are taken from an existing internal table itab in accordance with the condition after WHERE, converted to the line type of type, and inserted into the target table in accordance with the rules of [INSERT](javascript:call_link\('abapinsert_itab.htm'\)) ... [INTO TABLE](javascript:call_link\('abapinsert_itab_position.htm'\)).

-   In the [basic form](javascript:call_link\('abenconstructor_expr_filter_basic.htm'\)), the condition is created with single values.
-   When using a [filter table](javascript:call_link\('abenconstructor_expr_filter_table.htm'\)), the condition is created with values from the filter table ftab.

The following can be specified for type:

-   A non-generic [table type](javascript:call_link\('abentable_type_glosry.htm'\) "Glossary Entry").
-   The # character as a symbol for the [operand type](javascript:call_link\('abenoperand_type_glosry.htm'\) "Glossary Entry"). If the data type required in an operand position is not unique and not known completely, the type of itab is used if known.

itab is a [functional operand position](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry"). The line type of itab must be convertible to the line type of the target type type. USING KEY can or must be used to specify a table key for evaluating itab or ftab, depending on the variant.

Hints

-   Table filtering can also be performed using a [table comprehension](javascript:call_link\('abentable_comprehension_glosry.htm'\) "Glossary Entry") or a [table reduction](javascript:call_link\('abentable_reduction_glosry.htm'\) "Glossary Entry") with an [iteration expression](javascript:call_link\('abeniteration_expression_glosry.htm'\) "Glossary Entry") for [table iterations](javascript:call_link\('abentable_iteration_glosry.htm'\) "Glossary Entry") with [FOR](javascript:call_link\('abenfor_itab.htm'\)). The operator FILTER provides a shorter notation for this special case and is more efficient to execute.
-   A table filter constructs the result line by line. If the result contains almost all lines in the source table, this method can be slower than copying the source table and deleting the surplus lines from the target table.

Addition   

... EXCEPT

Effect

If EXCEPT is not specified, those lines from itab are used that meet the WHERE condition. If EXCEPT is specified, those lines from itab are used that do not meet the WHERE condition.

Hint

The addition EXCEPT is not the same as a negation of the WHERE condition, particularly in the variant with a [filter table](javascript:call_link\('abenconstructor_expr_filter_table.htm'\)).

Example

Use of the addition EXCEPT in the [basic form](javascript:call_link\('abenconstructor_expr_filter_basic.htm'\)) of the FILTER operator.

DATA messages TYPE SORTED TABLE OF t100 WITH NON-UNIQUE KEY sprsl.
SELECT \*
       FROM t100
       WHERE arbgb = 'SABAPDEMOS'
       ORDER BY msgnr
       INTO TABLE @messages.
cl\_demo\_output=>display(
  FILTER #( messages EXCEPT WHERE sprsl = 'D' ) ).

Continue
[FILTER, Basic Form](javascript:call_link\('abenconstructor_expr_filter_basic.htm'\))
[FILTER, Filter Table](javascript:call_link\('abenconstructor_expr_filter_table.htm'\))
[itab - Examples for FILTER](javascript:call_link\('abentable_filtering_abexas.htm'\))