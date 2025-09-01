---
title: "CORRESPONDING Operator Using the Additions MAPPING and DEFAULT"
description: |
  This example demonstrates the CORRESPONDING operator and the additions MAPPING and DEFAULT. Source Code  Public class definition CLASS cl_demo_corr_op_map_default DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Public
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencorresp_mapping_default_abexa.htm"
abapFile: "abencorresp_mapping_default_abexa.htm"
keywords: ["do", "if", "method", "class", "data", "internal-table", "abencorresp", "mapping", "default", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalue_assignments.htm) →  [Assigning Structure Components](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencorresponding.htm) →  [Assigning Components, Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencorresponding_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CORRESPONDING%20Operator%20Using%20the%20Additions%20MAPPING%20and%20DEFAULT%2C%20ABENCORRESP_MAPPING_DEFAULT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D
%0A%0D%0ASuggestion%20for%20improvement:)

CORRESPONDING Operator Using the Additions MAPPING and DEFAULT

This example demonstrates the CORRESPONDING operator and the additions MAPPING and DEFAULT.

Source Code   

\* Public class definition
CLASS cl\_demo\_corr\_op\_map\_default DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_corr\_op\_map\_default IMPLEMENTATION.
  METHOD main.
    out->begin\_section( \`Demo: CORRESPONDING operator\` &&
    \` using the additions MAPPING and DEFAULT\` ).
    "Creating structures
    DATA: BEGIN OF struc1,
            id1 TYPE i,
            a   TYPE string,
            b   TYPE string,
            c   TYPE i,
            d   TYPE string,
            e   TYPE i,
          END OF struc1.
    DATA: BEGIN OF struc2,
            id2 TYPE i,
            a   TYPE string,
            b   TYPE string,
            c   TYPE i,
            d   TYPE string,
            z   TYPE i,
          END OF struc2.
    "Creating internal table
    DATA itab1 LIKE TABLE OF struc1 WITH EMPTY KEY.
    "Filling structure
    struc1 = VALUE #( id1 = 1 a = \`a\`  b = \`b\` c = 2 d = \`c\` e = 3 ).
    "1) Assignment using CORRESPONDING (DEFAULT only)
    "- Component a is not specified; it is mapped anyway
    "  due to the identical name and not being explicitly specified
    "  for mapping
    "- The other components demonstrate various expressions
    "  in combination with the DEFAULT addition
    "- Component d: Since the table is initial, there would be
    "  a shortdump if there was not the DEFAULT addition specified
    "  as part of the expression with the VALUE operator
    struc2 = CORRESPONDING #(
      struc1 MAPPING id2 = id1
                     b = DEFAULT \`ha\` && \`llo\`
                     c = DEFAULT 1 + 5
                     d = DEFAULT VALUE #( itab1\[ 1 \]-d DEFAULT \`hi\` )
                     z = DEFAULT cl\_abap\_random\_int=>create(
                                        seed = cl\_abap\_random=>seed( )
                                        min  = 1
                                        max = 100 )->get\_next( ) ).
    out->write( struc2 ).
    "2) Assignment using CORRESPONDING (DEFAULT preceded by source
    "   component on the right-hand side)
    "- Component a is not specified; it is mapped anyway
    "  due to the identical name and not being explicitly specified
    "  for mapping
    "- The other components demonstrate various expressions
    "  in combination with the DEFAULT addition
    "- Component b: The value of component b in the source is initial.
    "  Hence, the result of the expression is assigned.
    "- Component c: The value of component c in the source is not
    "  initial. Hence, the value of c is assigned.
    "- Component d: Not initial. Value of d is assigned.
    "- Component e: Initial. Result of the expression is assigned.
    "Filling structure
    struc1 = VALUE #( id1 = 1 a = \`a\` b = \`\` c = 2 d = \`c\` e = 0 ).
    struc2 = CORRESPONDING #(
      struc1 MAPPING id2 = id1
                     b = b DEFAULT \`ha\` && \`llo\`
                     c = c DEFAULT 1 + 5
                     d = d DEFAULT VALUE #( itab1\[ 1 \]-d DEFAULT \`hi\` )
                     z = e DEFAULT cl\_abap\_random\_int=>create(
                                        seed = cl\_abap\_random=>seed( )
                                        min  = 1
                                        max = 100 )->get\_next( ) ).
    out->write( struc2 ).
  ENDMETHOD.
ENDCLASS.

Description   

The example covers assignments with the CORRESPONDING operator demonstrating expressions following the DEFAULT addition.

Check the comments in the source code for more information.