---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_tab_exp_default DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Public class implementation CLASS cl_demo_tab_exp_default IMPLEMENTATION. METHOD main. TYPES: BEGIN OF line, id
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_exp_default_abexa.htm"
abapFile: "abentable_exp_default_abexa.htm"
keywords: ["select", "do", "if", "case", "method", "class", "data", "types", "internal-table", "abentable", "exp", "default", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_processing_expr_func.htm) →  [itab - Table Expressions (table\_exp)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_expressions.htm) →  [table\_exp - default](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_exp_optional_default.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20table_exp%20-%20Default%20Value%2C%20ABENTABLE_EXP_DEFAULT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

table\_exp - Default Value

This example demonstrates default values for table expressions.

Source Code   

\* Public class definition
CLASS cl\_demo\_tab\_exp\_default DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_tab\_exp\_default IMPLEMENTATION.
  METHOD main.
    TYPES:
      BEGIN OF line,
        id    TYPE i,
        value TYPE string,
      END OF line,
      itab TYPE SORTED TABLE OF line WITH UNIQUE KEY id.
    FINAL(def) = VALUE line( id = 0 value = \`not found\` ).
    FINAL(itab) = VALUE itab( ( id = 3 value = \`CCC\` )
                             ( id = 4 value = \`DDD\` )
                             ( id = 5 value = \`EEE\` ) ).
    FINAL(result1) = VALUE #( itab\[ id = 1 \] DEFAULT def ).
    out->write( result1 ).
    FINAL(result2) = VALUE #( itab\[ id = 1 \]-value DEFAULT def-value ).
    out->write\_data( result2 ).
    FINAL(result3) = VALUE #( itab\[ id = 1 \] DEFAULT VALUE #(
                             itab\[ id = 2 \] DEFAULT VALUE #(
                             itab\[ id = 3 \] OPTIONAL ) ) ).
    out->write\_data( result3 ).
  ENDMETHOD.
ENDCLASS.

Description   

The result result1 of the first table expression has the line type of the internal table itab. The specified line is not found, which means that the structure def specified after DEFAULT is returned instead.

The result result2 of the second table expression results from a chaining with the structure component selector and is a component with the type string. Here, only the corresponding component of the structure def is specified as the default value.

The result result3 of the third table expression again has the line type of the internal table itab. Further table expressions with default values are specified as the default value. In the case shown here, the table expression in the second default value finds a line and returns it. If no searches are successful, an initial line is returned due to the closing OPTIONAL.