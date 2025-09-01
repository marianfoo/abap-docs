---
title: "Syntax"
description: |
  ... operand NOT IN range_tab ... Effect In a comparison expression with the comparison operator IN, the conditions of a ranges table(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenranges_table_glosry.htm 'Glossary Entry') or a table of this structure are checked. This
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_select_option.htm"
abapFile: "abenlogexp_select_option.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "data", "types", "internal-table", "abenlogexp", "option"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogical_expr_func.htm) →  [Logical Expressions (log\_exp)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp.htm) →  [Comparison Expressions (rel\_exp)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_comp.htm) →  [rel\_exp - Comparison Operators](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_op.htm) →  [rel\_exp - Comparison Operators for All Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_compare_all.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20rel_exp%20-%20Tabular%20Comparison%20Operator%20IN%2C%20ABENLOGEXP_SELECT_OPTION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improve
ment:)

rel\_exp - Tabular Comparison Operator IN

Syntax

... operand *\[*NOT*\]* IN range\_tab ...

Effect

In a comparison expression with the comparison operator IN, the conditions of a [ranges table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenranges_table_glosry.htm "Glossary Entry") or a table of this structure are checked. This means whether an operand operand is checked to see whether it meets the conditions in the lines of the ranges table or not, if the addition NOT is specified. The tabular comparison expression is equivalent to a combination of [binary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_any_operand.htm) or [ternary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_between.htm) comparison expressions whose number is determined by the number of lines in the internal table.

Any internal table whose line type matches that of a ranges table or a [functional method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunctional_method_glosry.htm "Glossary Entry") with the corresponding type of return value can be specified as a table range\_tab. This includes, in particular, [selection tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselection_table_glosry.htm "Glossary Entry"). The ranges table can be of any table type. For the structure of a ranges tables, see [TYPES RANGE OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_ranges.htm). The evaluation of a ranges table requires it to contain the valid values listed there in the columns sign and option. If the ranges table contains invalid values, an uncatchable exception is raised. If the ranges table is initial, the comparison expression is always true.

Each line of a non-initial ranges table is included in the combination using one of the following comparison expressions. Depending on the operator in the column option, this is a comparison between two operands using a [binary comparison operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_any_operand.htm) or an interval restriction using the [ternary operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_between.htm) BETWEEN.

-   The operators EQ, NE, GE, GT, LE, and LT produce a size comparison:
    
    ... operand [*{*EQ*|*NE*|*GE*|*GT*|*LE*|*LT*}*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_any_operand.htm) range\_tab-low ...
    
    The comparison operator is derived from the content of the column range\_tab-option and the content of the column range\_tab-low is used as the right operand.
    
-   The operators CP and NP produce a string comparison:
    
    ... operand [*{*CP*|*NP*}*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_strings.htm) range\_tab-low && range\_tab-high
    
    The comparison operator is derived from the content of the column range\_tab-option and the content of the columns range\_tab-low and range\_tab-high is concatenated as the right operand.
    
-   The operators BT and NB produce a delimitation of an interval:
    
    ... operand *\[*NOT*\]* [BETWEEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_between.htm) range\_tab-low AND range\_tab-high ...
    
    The comparison is executed without the addition NOT if the content of the column range\_tab-option is BT and with the addition NOT if the content is NB. The content of the columns range\_tab-low and range\_tab-high is used for the interval restrictions.
    

operand is a [general expression position](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry") and the usual [comparison rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_rules.htm) apply to operand and the columns low and high of the ranges table. The comparison expressions of the individual lines are [combined](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_boole.htm) into a logical expression in accordance with the following hierarchy:

1.  The expressions of all lines that contain I in the column sign are combined using OR. If there are no lines that contain E in the column sign, this represents the entire logical expression.
2.  The expressions of all lines that contain E in the column sign are combined using OR and then negated using NOT. If there are no lines that contain I in the column sign, this represents the entire logical expression.
3.  If the content I and the content E are both in the column sign, AND is used to combine the logical expression that is produced by step 1 with the logical expression from step 2

Hints

-   The rules above can be interpreted in such a way that the lines containing I or E in the column sign describe two value sets. The set for I is the inclusive set and the set for E is the exclusive set. By subtracting the exclusive set from the inclusive set, a result set is calculated that contains all values for which the entire logical expression is true.
-   The [comparison rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_rules.htm) are checked only at runtime and comparisons that are not allowed lead to exceptions.
-   The operator IN is, due to its implementation using [binary comparison operators](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_any_operand.htm), not suitable for selecting natural-language text content.
-   If the [selection table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselection_table_glosry.htm "Glossary Entry") selcrit was declared as a special form of ranges table for the data object operand using the statement [SELECT-OPTIONS selcrit](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect-options.htm), the comparison expression can also be specified in an [obsolete short form](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_in_short_form.htm).

Example

Filling of a [ranges table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenranges_table_glosry.htm "Glossary Entry") with a [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect.htm) statement and its use in a logical expression in the conditional operator [COND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expression_cond.htm).

DATA range\_tab TYPE RANGE OF scarr-carrid.
SELECT 'I' AS sign, 'EQ' AS option, carrid AS low
       FROM scarr
       INTO TABLE @range\_tab.
DATA carrid TYPE scarr-carrid.
cl\_demo\_input=>request( CHANGING field = carrid ).
cl\_demo\_output=>display(
  COND #( WHEN to\_upper( carrid ) IN range\_tab THEN \`Yes!\`
                                               ELSE \`No!\` ) ).

Executable Examples

-   [Comparison with Ranges Table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_in_ranges_abexa.htm)
-   [Comparison with Selection Table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlog_exp_in_abexa.htm)

Continue
![Example](exa.gif "Example") [rel\_exp - Comparison with Ranges Table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_in_ranges_abexa.htm)
![Example](exa.gif "Example") [rel\_exp - Comparison with Selection Table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlog_exp_in_abexa.htm)