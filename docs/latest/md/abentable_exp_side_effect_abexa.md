---
title: "Source Code"
description: |
  CCDEF TYPES itab TYPE STANDARD TABLE OF i WITH EMPTY KEY.  Public class definition CLASS cl_demo_tab_exp_side_effect DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. PRIVATE SECTION. METHODS meth IMPORTING idx          TYPE i li
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_exp_side_effect_abexa.htm"
abapFile: "abentable_exp_side_effect_abexa.htm"
keywords: ["do", "if", "method", "class", "data", "types", "internal-table", "field-symbol", "abentable", "exp", "side", "effect", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_processing_expr_func.htm) →  [itab - Table Expressions (table\_exp)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_expressions.htm) →  [table\_exp - Result](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_exp_result.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20table_exp%20-%20Side%20Effects%2C%20ABENTABLE_EXP_SIDE_EFFECT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

table\_exp - Side Effects

This example demonstrates a possible side effect when field symbols are produced as the result.

Source Code   

\* CCDEF
TYPES itab TYPE STANDARD TABLE OF i WITH EMPTY KEY.
\* Public class definition
CLASS cl\_demo\_tab\_exp\_side\_effect DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    METHODS meth IMPORTING idx          TYPE i
                           line1        TYPE i OPTIONAL
                           VALUE(line2) TYPE i OPTIONAL
                 CHANGING  ptab         TYPE itab.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_tab\_exp\_side\_effect IMPLEMENTATION.
  METHOD main.
    DATA(itab) = VALUE itab( ( 1 ) ( 2 ) ( 3 ) ( 4 ) ).
    meth( EXPORTING idx    = 1
                           line1 = itab\[ 1 \] ##operator
                 CHANGING  ptab  = itab ).
    meth( EXPORTING idx   = 2
                           line1 = VALUE #( itab\[ 2 \] )
                 CHANGING  ptab  = itab ).
    meth( EXPORTING idx   = 3
                           line2 = itab\[ 3 \]
                 CHANGING  ptab  = itab ).
    meth( EXPORTING idx   = 4
                           line2 = VALUE #( itab\[ 4 \] )
                 CHANGING  ptab  = itab ).
  ENDMETHOD.
  METHOD meth.
    ptab\[ idx \] = 111.
    IF line1 IS SUPPLIED.
      out->write\_data( line1 ).
    ELSEIF line2 IS SUPPLIED.
      out->write\_data( line2 ).
    ENDIF.
  ENDMETHOD.
ENDCLASS.

Description   

A table expression is used to pass a line of an internal table and the internal table itself to a method. The passed line of the internal table is modified in the method by specifying a table expression on the left side of an assignment.

-   In the first method call, the table expression is passed by reference without the VALUE operator. The result is a temporary field symbol to which the read line is assigned throughout the entire method call. The change made to the line in the table also affects the formal parameter.
-   In the second method call, the table expression is passed by reference with the VALUE operator. The result is a temporary work area that exists throughout the entire method call. The change made to the line in the table does not affect the formal parameter.
-   The third and fourth method calls repeat the previous calls, but use pass by value instead of pass by reference. Pass by value does not produce any side effects, regardless of the result.

The critical point demonstrated here also produces a syntax check warning in the extended program check for performance reasons, if not hidden using the pragma ##operator.