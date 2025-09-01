---
title: "Syntax"
description: |
  ... operand NOT IN seltab ... Effect In a comparison expression with the relational operator IN, the conditions of a selection table(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_table_glosry.htm 'Glossary Entry') or a table with this layout are checked. This mea
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_select_option.htm"
abapFile: "abenlogexp_select_option.htm"
keywords: ["select", "loop", "do", "if", "try", "method", "data", "types", "internal-table", "abenlogexp", "option"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_expr_func.htm) →  [log\_exp - Logical Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp.htm) →  [rel\_exp - Comparison Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_comp.htm) →  [rel\_exp - Relational Operators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_op.htm) →  [rel\_exp - Relational Operators for All Data Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_compare_all.htm) → 

rel\_exp - Tabular Relational Operator IN

Syntax

... operand *\[*NOT*\]* IN seltab ...

Effect

In a comparison expression with the relational operator IN, the conditions of a [selection table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_table_glosry.htm "Glossary Entry") or a table with this layout are checked. This means that an operand operand is checked to see whether it meets the conditions of the rows in the selection table or (if the addition NOT is specified) whether it does not meet them. The tabular comparison expression is equivalent to a join using [binary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_any_operand.htm) or [ternary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_between.htm) comparison expressions whose number is determined by the number of rows in the internal table.

Any internal table whose row type matches that of a selection table or a [functional method](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunctional_method_glosry.htm "Glossary Entry") with the corresponding type of return value can be specified as a selection table seltab. This includes, in particular, [ranges tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenranges_table_glosry.htm "Glossary Entry"). The selection table can be of any table category. More information about the layout of selection tables can be found under [SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect-options.htm). The evaluation of a selection table requires the table to contain the valid values specified in that section in the columns sign and option. If the selection table contains invalid values, a non-handleable exception is raised. If the selection table is initial, the comparison expression is always true.

Each row in a non-initial selection table is included in the join using one of the following comparison expressions. Depending on the operator in the column option, this involves a comparison between two operands using a [binary relational operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_any_operand.htm) or the delimitation of an interval using the [ternary operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_between.htm) BETWEEN.

-   The operators "EQ", "NE", "GE", "GT", "LE", and "LT" produce a comparison of sizes:
    ... operand [*{*EQ*|*NE*|*GE*|*GT*|*LE*|*LT*}*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_any_operand.htm) seltab-low ...
    The relational operator matches the content of the column seltab-option and the content of column seltab-low is used as the right operand.
    

-   The operators "CP" and "NP" produce a string comparison:
    ... operand [*{*CP*|*NP*}*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_strings.htm) operand
    The relational operator matches the content of the column seltab-option and the content of the columns seltab-low and seltab-high is concatenated as the right operand.
    

-   The operators "BT" and "NB" produce a delimitation of an interval:
    ... operand *\[*NOT*\]* [BETWEEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_between.htm) seltab-low AND seltab-high ...
    This comparison is made without the addition NOT if the content of the column seltab-option is "BT" and with the addition NOT if the content is "NB". The content of the columns seltab-low and seltab-high is used for the interval boundaries.

operand is a [general expression position](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry") and the usual [comparison rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_rules.htm) apply to operand and the columns low and high of the selection table. The comparison expressions of the individual rows are [joined](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_boole.htm) as a logical expression in accordance with the following hierarchy:

1.  The expressions of all rows that contain "I" in the column sign are joined using OR. If there are no rows that contain "E" in the column sign, this represents the entire logical expression.
    
2.  The expressions of all rows that contain "E" in the column sign are joined using OR and then negated using NOT. If there are no rows that contain "I" in the column sign, this represents the entire logical expression.
    
3.  If the content "I" and the content "E" are both in the column sign, AND is used to join the logical expression that is produced by step 1 with the logical expression from step 2

Notes

-   The rules above can be interpreted in such a way that the rows containing "I" or "E" in the column sign describe two value sets. The set for "I" is the inclusive set and the set for "E" is the exclusive set. By subtracting the exclusive set from the inclusive set, a results set is calculated that contains all values for which the entire logical expression is true.

-   Due to its implementation using [binary relational operators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_any_operand.htm), the operator IN is not suitable for selecting natural-language text content.

-   If the selection table seltab was declared using the statement [SELECT-OPTIONS seltab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect-options.htm) for the data object operand, it is possible to specify the comparison expression in an [obsolete short form](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_in_short_form.htm).
    

Example

Fills a [ranges table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenranges_table_glosry.htm "Glossary Entry") in a [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) loop and uses it in a logical expression in the condition operator [COND](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconditional_expression_cond.htm).

DATA seltab TYPE RANGE OF scarr-carrid.
SELECT carrid
       FROM scarr
       INTO @DATA(wa).
  seltab = VALUE #( BASE seltab
                    ( option = 'EQ'
                      sign   = 'I'
                      low    = wa ) ).
ENDSELECT.
DATA carrid TYPE scarr-carrid.
cl\_demo\_input=>request( CHANGING field = carrid ).
cl\_demo\_output=>display(
  COND #( WHEN to\_upper( carrid ) IN seltab THEN \`Yes!\`
                                            ELSE \`No!\` ) ).

Executable Example

[Selection Tables in Relational Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlog_exp_in_abexa.htm)

This translation does not reflect the current version of the documentation.
Continue
![Example](exa.gif "Example") [Comparison with Selection Table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlog_exp_in_abexa.htm)