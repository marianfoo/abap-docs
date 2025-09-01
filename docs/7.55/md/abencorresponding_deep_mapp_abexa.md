---
title: "Component Operator, Nested Mapping Rule"
description: |
  This example demonstrates the component operator(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expr_corresponding.htm) with a nested mapping rule. Source Code REPORT demo_corresponding_deep_mapp. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS: main, class_con
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_deep_mapp_abexa.htm"
abapFile: "abencorresponding_deep_mapp_abexa.htm"
keywords: ["select", "do", "if", "method", "class", "data", "types", "abencorresponding", "deep", "mapp", "abexa"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvalue_assignments.htm) →  [Assigning Structure Components](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding.htm) →  [Assigning Components, Examples](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_abexas.htm) → 

Component Operator, Nested Mapping Rule

This example demonstrates the [component operator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expr_corresponding.htm) with a nested mapping rule.

Source Code

REPORT demo\_corresponding\_deep\_mapp.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      class\_constructor.
  PRIVATE SECTION.
    CLASS-DATA:
      BEGIN OF struct1,
        a1 TYPE string VALUE \`a1\_XX\`,
        a2 TYPE string VALUE \`a2\_XX\`,
        BEGIN OF istruct,
          a1 TYPE string VALUE \`a1\_YY\`,
          a2 TYPE string VALUE \`a2\_YY\`,
        END OF istruct,
        itab LIKE STANDARD TABLE OF struct1-istruct WITH EMPTY KEY,
      END OF struct1,
      BEGIN OF struct2,
        b1 TYPE string,
        a2 TYPE string,
        BEGIN OF istruct,
          b1 TYPE string,
          a2 TYPE string,
        END OF istruct,
        jtab LIKE STANDARD TABLE OF struct2-istruct WITH EMPTY KEY,
      END OF struct2.
    TYPES:
      BEGIN OF out1,
        a1 LIKE struct1-a1,
        a2 LIKE struct1-a2,
      END OF out1,
      BEGIN OF out2,
        a1 LIKE struct2-b1,
        a2 LIKE struct2-a2,
      END OF out2.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    out->begin\_section( \`struct1\`
      )->write( CORRESPONDING out1( struct1 )
      )->write( struct1-istruct
      )->write( struct1-itab ).
    struct2 = CORRESPONDING #( struct1 ).
    out->next\_section(
      \`struct2 = CORRESPONDING #( struct1 )\`
      )->write( CORRESPONDING out2( struct2 )
      )->write( struct2-istruct
      )->write( struct2-jtab ).
    struct2 = CORRESPONDING #( struct1 MAPPING jtab = itab ).
    out->next\_section(
      \`struct2 = CORRESPONDING #( struct1 MAPPING jtab = itab )\`
      )->write( CORRESPONDING out2( struct2 )
      )->write( struct2-istruct
      )->write( struct2-jtab ).
    struct2 = CORRESPONDING #( struct1 MAPPING
               ( istruct = istruct MAPPING b1 = a1 EXCEPT a2 )
               ( jtab = itab MAPPING b1 = a1 ) ).
    out->next\_section(
      \`struct2 = CORRESPONDING #( struct1  MAPPING ( ... ) )\`
      )->write( CORRESPONDING out2( struct2 )
      )->write( struct2-istruct
      )->write( struct2-jtab ).
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    struct1-itab = VALUE #(
      ( a1 = \`a1\_xx\` a2 = \`a2\_xx\` )
      ( a1 = \`a1\_yy\` a2 = \`a2\_yy\` ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The example assigns the [basic form](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_constr_arg_type.htm) of the result of a constructor expression with the component operator CORRESPONDING with the parameter struct1 to a compatible structure struct2. Various [mapping rules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_constr_mapping.htm) are demonstrated. The structures contain a substructure and a tabular component.

-   If there is not mapping rule, the identically named components a2 and istruct are assigned at the top level. The substructure istruct is resolved and the component a2 is assigned here. The tabular components are not identically named and are not assigned.

-   The mapping rule MAPPING jtab = itab is used to also assign the tabular component, whereby only the identically named column a2 is considered.

-   The nested mapping rule

MAPPING ( istruct = istruct MAPPING b1 = a1 EXCEPT a2 )
        ( jtab = itab MAPPING b1 = a1 )

is used to

-   specify a mapping relationship for the components of the substructure istruct. Here, istruct = istruct must be specified at the top level.

-   define a mapping for the tabular components. Here, a mapping is also nested for their columns.

In the result, all components are filled except the component a2 of the substructure that was excluded using EXCEPT.