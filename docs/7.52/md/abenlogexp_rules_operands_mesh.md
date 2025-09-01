  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [log\_exp - Logical Expressions](javascript:call_link\('abenlogexp.htm'\)) →  [rel\_exp - Comparison Expressions](javascript:call_link\('abenlogexp_comp.htm'\)) →  [rel\_exp - Comparison Rules](javascript:call_link\('abenlogexp_rules.htm'\)) → 

rel\_exp - Comparing Meshes

[Meshes](javascript:call_link\('abenabap_meshes.htm'\)) can only be compared with meshes that are fully [compatible](javascript:call_link\('abencompatibility.htm'\)). The comparison is performed component by component, as for the corresponding [structure](javascript:call_link\('abenlogexp_rules_operands_struc.htm'\)). The rules for [internal tables](javascript:call_link\('abenlogexp_rules_operands_itab.htm'\)) also apply when comparing components.

Example

After mesh1 has been assigned to mesh2, both meshes are the same. After the number of rows of component node2 has been increased in mesh2, this mesh is larger than mesh1.

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