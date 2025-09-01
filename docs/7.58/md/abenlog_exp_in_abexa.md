---
title: "Source Code"
description: |
  REPORT demo_logical_expr_seltab_1 . DATA wa_carrid TYPE spfli-carrid. SELECT-OPTIONS airline FOR wa_carrid. WRITE: 'Inside', 'Outside'. SKIP. SELECT carrid FROM spfli INTO @wa_carrid. IF wa_carrid IN airline. WRITE: / wa_carrid UNDER 'Inside'. ELSE. WRITE: / wa_carrid UNDER 'Outside'. ENDI
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlog_exp_in_abexa.htm"
abapFile: "abenlog_exp_in_abexa.htm"
keywords: ["select", "loop", "do", "if", "data", "types", "abenlog", "exp", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogical_expr_func.htm) →  [Logical Expressions (log\_exp)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogexp.htm) →  [Comparison Expressions (rel\_exp)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogexp_comp.htm) →  [rel\_exp - Comparison Operators](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogexp_op.htm) →  [rel\_exp - Comparison Operators for All Data Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogexp_compare_all.htm) →  [rel\_exp - Tabular Comparison Operator IN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogexp_select_option.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20rel_exp%20-%20Comparison%20with%20Selection%20Table%2C%20ABENLOG_EXP_IN_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvemen
t:)

rel\_exp - Comparison with Selection Table

This example demonstrates the evaluation of selection tables in a comparison expression.

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

The SELECT loop reads all lines from the database table SPFLI and arranges them in a list, depending on their relation to the condition specified on the selection screen.