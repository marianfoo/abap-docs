---
title: "Component operator, lookup table"
description: |
  This example demonstrates the component operator(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expr_corresponding.htm) with FROM ... USING. Source Code REPORT demo_corresponding_using. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS: main, class_constructor. PR
version: "7.54"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencorresponding_using_abexa.htm"
abapFile: "abencorresponding_using_abexa.htm"
keywords: ["select", "do", "if", "method", "class", "data", "types", "internal-table", "abencorresponding", "using", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_assignments.htm) →  [Assigning Structure Components](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencorresponding.htm) →  [Assigning Components: Examples](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencorresponding_abexas.htm) → 

Component operator, lookup table

This example demonstrates the [component operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expr_corresponding.htm) with FROM ... USING.

Source Code

REPORT demo\_corresponding\_using.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      class\_constructor.
  PRIVATE SECTION.
    TYPES:
      BEGIN OF struct1,
        a1 TYPE string,
        a2 TYPE string,
        b1 TYPE string,
        b2 TYPE string,
        c1 TYPE string,
        c2 TYPE string,
      END OF struct1,
      BEGIN OF struct2,
        a1 TYPE string,
        a2 TYPE string,
        b1 TYPE string,
        b2 TYPE string,
        c1 TYPE string,
        d2 TYPE string,
      END OF struct2,
      BEGIN OF struct3,
        u1 TYPE string,
        u2 TYPE string,
        v1 TYPE string,
        v2 TYPE string,
        w1 TYPE string,
        w2 TYPE string,
      END OF struct3.
    CLASS-DATA:
      itab TYPE STANDARD TABLE OF struct1,
      lookup\_tab TYPE STANDARD TABLE OF struct2
                 WITH NON-UNIQUE SORTED KEY mkey COMPONENTS b1 b2,
      jtab TYPE STANDARD TABLE OF struct3.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    out->begin\_section( \`itab\`
      )->write( itab ).
    out->next\_section(
      \`lookup\_tab\`
      )->write( lookup\_tab ).
    itab = CORRESPONDING #(
              itab FROM lookup\_tab
                   USING KEY mkey b1 = a1 b2 = a2 ).
    out->next\_section(
      \`itab = CORRESPONDING #( itab FROM lookup\_tab USING ... )\`
      )->write( itab ).
    itab = CORRESPONDING #(
              itab FROM lookup\_tab
                   USING KEY mkey b1 = a1 b2 = a2
                   MAPPING a1 = a1 a2 = a2 b1 = b1 b2 = b2 c2 = d2 ).
    out->next\_section(
    \`itab = CORRESPONDING #( itab FROM lookup\_tab \` &&
                                 \`USING ... MAPPING ... )\`
      )->write( itab ).
    jtab = CORRESPONDING #(
             itab FROM lookup\_tab
                  USING KEY mkey b1 = a1 b2 = a2 ) ##operator.
    out->next\_section(
      \`jtab = CORRESPONDING #( itab FROM lookup\_tab USING ... )\`
      )->write( jtab ).
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    itab = VALUE #(
      ( a1 = \`id1\_1\` a2 = \`id2\_1\`
        b1 = \`000\`   b2 = \`000\`
        c1 = \`000\`   c2 = \`000\` )
      ( a1 = \`id1\_2\` a2 = \`id2\_2\`
        b1 = \`000\`   b2 = \`000\`
        c1 = \`000\`   c2 = \`000\` )
      ( a1 = \`id1\_3\` a2 = \`id2\_3\`
        b1 = \`000\`   b2 = \`000\`
        c1 = \`000\`   c2 = \`000\` ) ).
    lookup\_tab = VALUE #(
      ( a1 = \`a\_11\`  a2 = \`a\_12\`
        b1 = \`id1\_1\` b2 = \`id2\_1\`
        c1 = \`c\_11\`  d2 = \`d\_12\` )
      ( a1 = \`a\_21\`  a2 = \`a\_22\`
        b1 = \`id1\_3\` b2 = \`id2\_3\`
        c1 = \`c\_21\`  d2 = \`d\_22\` ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example joins two internal tables itab and itab2 in a constructor expression with the component operator CORRESPONDING, which uses the [variant with lookup table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencorresponding_constr_using.htm).

-   The first assignment specifies the conditionb1 = a1 b2 = a2 without a mapping rule after USING. In the lookup\_tab, one row is found for the first and third row of itab and its identically named components are assigned to the corresponding row of itab, where b1 and b2 from lookup\_tab and a1 and a2 from itab are ignored here. The only identically named component is c1. All other components keep their preceding value from itab. The second row is taken unchanged from itab1.

-   In the second assignment, the default handling by specifying a mapping rule a1 = a1 a2 = a2 b1 = b1 b2 = b2 c2 = d2 is overridden by specifying a mapping relationship for all components ignored until now. Accordingly, the content of all components in the first and third row of itab are modified.

-   Finally, the third assignment still demonstrates the assignment of the expression to an internal table jtab that does not have the type of itab but is compatible with it. The full result of the expression is assigned to jtab. The pragma ##operator hides the syntax check warning stating that a temporary copy of itab needs to be created.