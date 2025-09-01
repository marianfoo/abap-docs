  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [log\_exp - Logical Expressions](javascript:call_link\('abenlogexp.htm'\)) →  [rel\_exp - Comparison Expressions](javascript:call_link\('abenlogexp_comp.htm'\)) →  [rel\_exp - Relational Operators](javascript:call_link\('abenlogexp_op.htm'\)) →  [rel\_exp - Relational Operators for All Data Types](javascript:call_link\('abenlogexp_compare_all.htm'\)) → 

rel\_exp - Tabular Relational Operator IN

Syntax

... operand *\[*NOT*\]* IN seltab ...

Effect

In a comparison expression with the relational operator IN, the conditions of a [ranges table](javascript:call_link\('abenranges_table_glosry.htm'\) "Glossary Entry") or a table with this layout are checked. This means that an operand operand is checked to see whether it meets the conditions of the rows in the ranges table or (if the addition NOT is specified) whether it does not meet them. The tabular comparison expression is equivalent to a join using [binary](javascript:call_link\('abenlogexp_any_operand.htm'\)) or [ternary](javascript:call_link\('abenlogexp_between.htm'\)) comparison expressions whose number is determined by the number of rows in the internal table.

Any internal table whose row type matches that of a ranges table or a [functional method](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry") with the corresponding type of return value can be specified as a table seltab. This includes, in particular, [selection tables](javascript:call_link\('abenselection_table_glosry.htm'\) "Glossary Entry"). The ranges table can be of any type. For information about the layout of a ranges table, see [TYPES RANGE OF](javascript:call_link\('abaptypes_ranges.htm'\)). The evaluation of a ranges table requires the table to contain the valid values specified in that section in the columns sign and option. If the ranges table contains invalid values, an exception that cannot be handled is raised. If the ranges table is initial, the comparison expression is always true.

Each row in a non-initial ranges table is included in the join using one of the following comparison expressions. Depending on the operator in the column option, this involves a comparison between two operands using a [binary relational operator](javascript:call_link\('abenlogexp_any_operand.htm'\)) or the delimitation of an interval using the [ternary operator](javascript:call_link\('abenlogexp_between.htm'\)) BETWEEN.

-   The operators "EQ", "NE", "GE", "GT", "LE", and "LT" produce a comparison of sizes:
    ... operand [*{*EQ*|*NE*|*GE*|*GT*|*LE*|*LT*}*](javascript:call_link\('abenlogexp_any_operand.htm'\)) seltab-low ...
    The relational operator matches the content of the column seltab-option and the content of column seltab-low is used as the right operand.
    

-   The operators "CP" and "NP" produce a string comparison:
    ... operand [*{*CP*|*NP*}*](javascript:call_link\('abenlogexp_strings.htm'\)) operand
    The relational operator matches the content of the column seltab-option and the content of the columns seltab-low and seltab-high is concatenated as the right operand.
    

-   The operators "BT" and "NB" produce a delimitation of an interval:
    ... operand *\[*NOT*\]* [BETWEEN](javascript:call_link\('abenlogexp_between.htm'\)) seltab-low AND seltab-high ...
    This comparison is made without the addition NOT if the content of the column seltab-option is "BT" and with the addition NOT if the content is "NB". The content of the columns seltab-low and seltab-high is used for the interval boundaries.

operand is a [general expression position](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry") and the usual [comparison rules](javascript:call_link\('abenlogexp_rules.htm'\)) apply to operand and the columns low and high of the ranges table. The comparison expressions of the individual rows are [joined](javascript:call_link\('abenlogexp_boole.htm'\)) as a logical expression in accordance with the following hierarchy:

1.  The expressions of all rows that contain "I" in the column sign are joined using OR. If there are no rows that contain "E" in the column sign, this represents the entire logical expression.
    
2.  The expressions of all rows that contain "E" in the column sign are joined using OR and then negated using NOT. If there are no rows that contain "I" in the column sign, this represents the entire logical expression.
    
3.  If the content "I" and the content "E" are both in the column sign, AND is used to join the logical expression that is produced by step 1 with the logical expression from step 2

Notes

-   The rules above can be interpreted in such a way that the rows containing "I" or "E" in the column sign describe two value sets. The set for "I" is the inclusive set and the set for "E" is the exclusive set. By subtracting the exclusive set from the inclusive set, a results set is calculated that contains all values for which the entire logical expression is true.

-   The operator IN is, due to its implementation using [binary relational operators](javascript:call_link\('abenlogexp_any_operand.htm'\)), not suitable for selecting natural-language text content.

-   If the ranges table seltab was declared using the statement [SELECT-OPTIONS seltab](javascript:call_link\('abapselect-options.htm'\)) for the data object operand, it is possible to specify the comparison expression in an [obsolete short form](javascript:call_link\('abenlogexp_in_short_form.htm'\)).
    

Example

Fills a [ranges table](javascript:call_link\('abenranges_table_glosry.htm'\) "Glossary Entry") in a [SELECT](javascript:call_link\('abapselect.htm'\)) loop and uses it in a logical expression in the condition operator [COND](javascript:call_link\('abenconditional_expression_cond.htm'\)).

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

[Ranges Tables in Relational Expressions](javascript:call_link\('abenlog_exp_in_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Comparison with Selection Table](javascript:call_link\('abenlog_exp_in_abexa.htm'\))