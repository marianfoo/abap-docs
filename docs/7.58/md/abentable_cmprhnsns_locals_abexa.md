---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_table_comprh_locals DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Public class implementation CLASS cl_demo_table_comprh_locals IMPLEMENTATION. METHOD main. TYPES: array TYP
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_cmprhnsns_locals_abexa.htm"
abapFile: "abentable_cmprhnsns_locals_abexa.htm"
keywords: ["do", "if", "try", "method", "class", "data", "types", "internal-table", "abentable", "cmprhnsns", "locals", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_processing_expr_func.htm) →  [FOR, Table Iterations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_itab.htm) →  [itab - Examples of Table Comprehensions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_comprehensions_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Table%20Comprehensions%2C%20Local%20Helper%20Fields%2C%20ABENTABLE_CMPRHNSNS_LOCALS_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugges
tion%20for%20improvement:)

itab - Table Comprehensions, Local Helper Fields

This example demonstrates how local helper fields are used in [table comprehensions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_comprehension_glosry.htm "Glossary Entry").

Source Code   

\* Public class definition
CLASS cl\_demo\_table\_comprh\_locals DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_table\_comprh\_locals IMPLEMENTATION.
  METHOD main.
    TYPES:
      array TYPE STANDARD TABLE OF i WITH EMPTY KEY,
      BEGIN OF line,
        col1 TYPE i,
        col2 TYPE i,
        col3 TYPE i,
      END OF line,
      itab TYPE STANDARD TABLE OF line WITH EMPTY KEY.
    CONSTANTS factor TYPE i VALUE 1000.
    FINAL(array) = VALUE array(
      ( 3 ) ( 5 ) ( 7 ) ( 9 ) ).
    FINAL(itab) = VALUE itab(
      FOR x IN array INDEX INTO idx
         LET off = factor \* idx IN
        ( col1 = x col2 = x \* x col3 = x + off ) ).
    out->write( itab ).
  ENDMETHOD.
ENDCLASS.

Description   

From a single column table array, a three-column table itab is created whose column content is calculated from the respective line content in array. The local helper fields in this example are the work area x of the [FOR expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_in_itab.htm) and the helper field off defined in a [LET expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaplet.htm).