---
title: "Loop Processing"
description: |
  Background Alongside the statements for processing individual lines in internal tables, other statements can be used to address and modify the entire body of the table. Examples: -   All categories of assignments applying to whole internal tables -   Deleting the whole of an internal table using CLE
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenloop_guidl.htm"
abapFile: "abenloop_guidl.htm"
keywords: ["select", "loop", "do", "if", "class", "types", "internal-table", "abenloop", "guidl"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrobust_abap_gdl.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Loop Processing, ABENLOOP_GUIDL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggest
ion for improvement:)

Loop Processing

Background   

Alongside the statements for processing individual lines in internal tables, other statements can be used to address and modify the entire body of the table. Examples:

-   All categories of assignments applying to whole internal tables
-   Deleting the whole of an internal table using CLEAR or FREE
-   Operations in target ranges such as SELECT INTO TABLE

These types of accesses to the table body cause problems by producing a loop across the internal table

Rule   

Do not modify the entire table body in a loop

You cannot use a loop across an internal table to perform accesses to the table that modify the entire table body at once.

Details   

A modifying access to the entire table body usually produces a runtime error and at the very least unpredictable program behavior. If this is known statically, a syntax error occurs within classes. This error also occurs in LOOP statements with a secondary key known statically when the table operations in question are used. Otherwise, the syntax check simply returns a warning for compatibility reasons.

Hints

-   This rule is mainly intended to make you more aware of the problem. If you only work with [ABAP Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obj_progr_model_guidl.htm "Guideline") or if no [syntax check warnings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensyntax_check_guidl.htm "Guideline") are ignored, the rule above should be met automatically.
-   For more information, see [Changing Internal Tables in a Loop](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_loop_change.htm).