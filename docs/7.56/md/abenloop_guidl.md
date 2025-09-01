  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrobust_abap_gdl.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab_gdl.htm) → 

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

Hint

This rule is mainly intended to make you more aware of the problem. If you only work with [ABAP Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obj_progr_model_guidl.htm "Guideline") or if no [syntax check warnings](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensyntax_check_guidl.htm "Guideline") are ignored, the rule above should be met automatically.