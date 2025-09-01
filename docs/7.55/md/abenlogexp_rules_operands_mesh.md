---
title: "Example"
description: |
  After mesh1 has been assigned to mesh2, both meshes are the same. After increasing the number of lines of component node2 in mesh2, this mesh is larger than mesh1. TYPES: BEGIN OF line1, col1 TYPE i, END OF line1, t_itab1 TYPE SORTED TABLE OF line1 WITH UNIQUE KEY col1, BEGIN OF line2, col1 TYPE i,
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_rules_operands_mesh.htm"
abapFile: "abenlogexp_rules_operands_mesh.htm"
keywords: ["do", "data", "types", "internal-table", "abenlogexp", "rules", "operands", "mesh"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogical_expr_func.htm) →  [Logical Expressions (log\_exp)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp.htm) →  [Comparison Expressions (rel\_exp)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_comp.htm) →  [rel\_exp - Comparison Rules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_rules.htm) → 

rel\_exp - Comparing Meshes

[Meshes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_meshes.htm) can only be compared with meshes that are fully [compatible](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencompatibility.htm). The comparison is performed component by component, as for the corresponding [structure](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_rules_operands_struc.htm). The rules for [internal tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_rules_operands_itab.htm) also apply to comparing components.

Example

After mesh1 has been assigned to mesh2, both meshes are the same. After increasing the number of lines of component node2 in mesh2, this mesh is larger than mesh1.

TYPES:
  BEGIN OF line1,
    col1 TYPE i,
  END OF line1,
  t\_itab1 TYPE SORTED TABLE OF line1
               WITH UNIQUE KEY col1,
  BEGIN OF line2,
    col1 TYPE i,
    col2 TYPE i,
  END OF line2,
  t\_itab2 TYPE SORTED TABLE OF line2
               WITH UNIQUE KEY col1 col2,
  BEGIN OF MESH t\_mesh,
    node1 TYPE t\_itab1
          ASSOCIATION \_node2 TO node2 ON col1 = col1,
    node2 TYPE t\_itab2,
  END OF MESH t\_mesh.
DATA:
  mesh1 TYPE t\_mesh,
  mesh2 TYPE t\_mesh.
mesh1-node1 = VALUE t\_itab1(
  ( col1 = 1 ) ).
mesh1-node2 = VALUE t\_itab2(
  ( col1 = 1 col2 = 11 )
  ( col1 = 1 col2 = 12 ) ).
mesh2 = mesh1.
ASSERT mesh2 = mesh1.
mesh2-node2 = VALUE t\_itab2(
  BASE mesh2-node2
  ( col1 = 1  col2 = 13 ) ).
ASSERT mesh2 > mesh1.