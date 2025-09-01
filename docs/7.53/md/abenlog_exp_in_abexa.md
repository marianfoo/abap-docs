  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [log\_exp - Logical Expressions](javascript:call_link\('abenlogexp.htm'\)) →  [rel\_exp - Comparison Expressions](javascript:call_link\('abenlogexp_comp.htm'\)) →  [rel\_exp - Relational Operators](javascript:call_link\('abenlogexp_op.htm'\)) →  [rel\_exp - Relational Operators for All Data Types](javascript:call_link\('abenlogexp_compare_all.htm'\)) →  [rel\_exp - Tabular Relational Operator IN](javascript:call_link\('abenlogexp_select_option.htm'\)) → 

Comparison with Selection Table

This example demonstrates how selection tables are evaluated in a comparison expression.

Source Code

REPORT demo\_logical\_expr\_seltab\_1 .
DATA wa\_carrid TYPE spfli-carrid.
SELECT-OPTIONS airline FOR wa\_carrid.
WRITE: 'Inside', 'Outside'.
SKIP.
SELECT carrid FROM spfli INTO @wa\_carrid.
  IF wa\_carrid IN airline.
    WRITE: / wa\_carrid UNDER 'Inside'.
  ELSE.
    WRITE: / wa\_carrid UNDER 'Outside'.
  ENDIF.
ENDSELECT.

Description

The SELECT loop reads all rows from the database table SPFLI and arranges them in a list, depending on their relation to the condition specified on the selection screen.