---
title: "Comparison with Selection Table"
description: |
  This example demonstrates how selection tables are evaluated in a comparison expression. Source Code REPORT demo_logical_expr_seltab_1 . DATA wa_carrid TYPE spfli-carrid. SELECT-OPTIONS airline FOR wa_carrid. WRITE: 'Inside', 'Outside'. SKIP. SELECT carrid FROM spfli INTO @wa_carrid. IF wa_c
version: "7.52"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlog_exp_in_abexa.htm"
abapFile: "abenlog_exp_in_abexa.htm"
keywords: ["select", "loop", "do", "if", "data", "types", "abenlog", "exp", "abexa"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_expr_func.htm) →  [log\_exp - Logical Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp.htm) →  [rel\_exp - Comparison Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_comp.htm) →  [rel\_exp - Relational Operators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_op.htm) →  [rel\_exp - Relational Operators for All Data Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_compare_all.htm) →  [rel\_exp - Tabular Relational Operator IN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_select_option.htm) → 

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