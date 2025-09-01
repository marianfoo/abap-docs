  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assigning Structure Components](javascript:call_link\('abencorresponding.htm'\)) →  [Assigning Components, Examples](javascript:call_link\('abencorresponding_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Component%20Operator%2C%20Mapping%20Rule%2C%20ABENCORRESPONDING_MAPPING_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvemen
t:)

Component Operator, Mapping Rule

This example demonstrates the [component operator](javascript:call_link\('abenconstructor_expr_corresponding.htm'\)) with explicit mapping rules.

Source Code   

\* Public class definition
CLASS cl\_demo\_crrspndng\_mapping DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    DATA:
      BEGIN OF struct1,
        a1 TYPE string VALUE \`a1\_XX\`,
        a2 TYPE string VALUE \`a2\_XX\`,
        a3 TYPE string VALUE \`a3\_XX\`,
        a4 TYPE string VALUE \`a4\_XX\`,
      END OF struct1,
      BEGIN OF struct2,
        a1 TYPE string VALUE \`a1\_YY\`,
        a2 TYPE string VALUE \`a2\_YY\`,
        b3 TYPE string VALUE \`b3\_YY\`,
        b4 TYPE string VALUE \`b4\_YY\`,
      END OF struct2.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_crrspndng\_mapping IMPLEMENTATION.
  METHOD main.
    out->begin\_section( \`struct1\`
      )->write( struct1
      )->next\_section( \`struct2\`
      )->write( struct2 ).
    struct2 = CORRESPONDING #( struct1 ).
    out->begin\_section(
      \`struct2 = CORRESPONDING #( struct1 )\`
     )->write( struct2 ).
    struct2 = CORRESPONDING #( struct1 MAPPING b4 = a3 ).
    out->begin\_section(
      \`struct2 = CORRESPONDING #( struct1 MAPPING b4 = a3 )\`
     )->write( struct2 ).
    struct2 = CORRESPONDING #( struct1 MAPPING b4 = a1 ).
    out->begin\_section(
      \`struct2 = CORRESPONDING #( struct1 MAPPING b4 = a1 )\`
     )->write( struct2 ).
    struct2 = CORRESPONDING #( struct1 EXCEPT a1 ).
    out->begin\_section(
      \`struct2 = CORRESPONDING #( struct1 EXCEPT a1 )\`
     )->write( struct2 ).
    struct2 = CORRESPONDING #( struct1  MAPPING b4 = a3 EXCEPT a1 ).
    out->begin\_section(
      \`struct2 = CORRESPONDING #( struct1 MAPPING b4 = a3 EXCEPT a1 )\`
     )->write( struct2 ).
    struct2 = CORRESPONDING #( struct1  MAPPING b4 = a3 EXCEPT \* ).
    out->begin\_section(
      \`struct2 = CORRESPONDING #( struct1 MAPPING b4 = a3 EXCEPT \* )\`
     )->write( struct2 ).
    struct2 = CORRESPONDING #( struct1 EXCEPT \* ).
    out->begin\_section(
      \`struct2 = CORRESPONDING #( struct1 EXCEPT \* )\`
     )->write( struct2 ).
  ENDMETHOD.
ENDCLASS.

Description   

The example assigns the [basic form](javascript:call_link\('abencorresponding_constr_arg_type.htm'\)) of the result of a constructor expression with the component operator CORRESPONDING with the parameter struct1 to a compatible structure struct2. Various [mapping rules](javascript:call_link\('abencorresponding_constr_mapping.htm'\)) are demonstrated.

-   If no mapping rule is used, the identically named components a1 and a2 are assigned and the other components remain initial.
-   The mapping rule MAPPING b4 = a3 also assigns the component a3 to the component b4.
-   The mapping rule MAPPING b4 = a1 assigns the component a1 twice, to b4 and to the identically named component a1.
-   The mapping rule EXCEPT a1 assigns only the component a2 to the identically named component, since the component a1 is excluded.
-   In addition to the identically named assignment, the mapping rule MAPPING b4 = a3 EXCEPT a1 assigns the component a3 to the component b4 and a1 is excluded from the identically named assignment.
-   The mapping rule EXCEPT \* does not assign any components and all components of the result remain initial.