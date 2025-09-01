---
title: "FILTER - Filter Operator"
description: |
  Syntax Forms Basic form(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expr_filter_basic.htm) 1. ... FILTER type( itab EXCEPT USING KEY keyname(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenkeyname.htm) WHERE c1 op f1 AND c2 op f2
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_filter.htm"
abapFile: "abenconstructor_expression_filter.htm"
keywords: ["select", "insert", "do", "if", "case", "try", "method", "data", "internal-table", "abenconstructor", "expression", "filter"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab.htm) →  [Expressions and Functions for Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_processing_expr_func.htm) → 

FILTER - Filter Operator

Syntax Forms

[Basic form](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expr_filter_basic.htm)
1\. ... FILTER type( itab *\[*EXCEPT*\]* *\[*USING KEY [keyname](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenkeyname.htm)*\]*
                        WHERE c1 op f1 *\[*AND c2 op f2 *\[*...*\]**\]* ) ...
[Filter table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expr_filter_table.htm)
2\. ... FILTER type( itab *\[*EXCEPT*\]* IN ftab *\[*USING KEY [keyname](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenkeyname.htm)*\]*
                        WHERE c1 op f1 *\[*AND c2 op f2 *\[*...*\]**\]* ) ...

Addition:

[... EXCEPT](#!ABAP_ONE_ADD@1@)

Effect

A [constructor expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expressions.htm) with the component operator FILTER creates a result of a table type specified using type. The rows are taken from an existing internal table itab in accordance with the condition after WHERE, converted to the row type of type, and inserted into the target table in accordance with the rules of [INSERT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_itab.htm) ... [INTO TABLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_itab_position.htm).

-   In the [basic form](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expr_filter_basic.htm) the condition is created with single values.

-   When using a [filter table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expr_filter_table.htm), the condition is created with values from the filter table ftab.

The following can be specified for type:

-   A non-generic [table type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_type_glosry.htm "Glossary Entry").

-   The # character as a symbol for the [operand type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoperand_type_glosry.htm "Glossary Entry"). If the data type required in an operand position is not unique and not known completely, the type of itab is used if known.

itab is a [functional operand position](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunctional_position_glosry.htm "Glossary Entry"). The row type of itab must be convertible to the row type of the target type type. USING KEY can (or must) be used to specify a table key for evaluating itab or ftab (depending on the variant).

Notes

-   Table filtering can also be performed using a [table comprehension](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_comprehension_glosry.htm "Glossary Entry") or a [table reduction](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_reduction_glosry.htm "Glossary Entry") with an [iteration expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeniteration_expression_glosry.htm "Glossary Entry") for [table iterations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_iteration_glosry.htm "Glossary Entry") with [FOR](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfor_itab.htm). The operator FILTER provides a shortened format for this special case and is more efficient to execute.

-   A table filter constructs the result row by row. If the result contains almost all rows in the source table, this method can be slower than copying the source table and deleting the surplus rows from the target table.
    

Addition

... EXCEPT

Effect

If EXCEPT is not specified, those rows from itab are used that meet the WHERE condition. If EXCEPT is specified, those rows from itab are used that do not meet the WHERE condition.

Note

The addition EXCEPT is not the same as a negation of the WHERE condition, particularly in the variant with a [filter table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expr_filter_table.htm).

Example

Uses the addition EXCEPT in the [basic form](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expr_filter_basic.htm) of the FILTER operator.

DATA messages TYPE SORTED TABLE OF t100 WITH NON-UNIQUE KEY sprsl.
SELECT \*
       FROM t100
       WHERE arbgb = 'SABAPDEMOS'
       ORDER BY msgnr
       INTO TABLE @messages.
cl\_demo\_output=>display(
  FILTER #( messages EXCEPT WHERE sprsl = 'D' ) ).

Continue
[FILTER - Basic Form](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expr_filter_basic.htm)
[FILTER - Filter Table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expr_filter_table.htm)
[Examples of Table Filtering](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_filtering_abexas.htm)