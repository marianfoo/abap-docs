---
title: "Sorting Internal Tables"
description: |
  This example demonstrates how internal tables are sorted using SORT itab(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsort_itab.htm). Source Code  Public class definition CLASS cl_demo_int_tbls_sort DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC
version: "7.58"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensort_stable_abexa.htm"
abapFile: "abensort_stable_abexa.htm"
keywords: ["do", "if", "method", "class", "data", "types", "internal-table", "abensort", "stable", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_processing_statements.htm) →  [SORT itab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsort_itab.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Sorting%20Internal%20Tables%2C%20ABENSORT_STABLE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Sorting Internal Tables

This example demonstrates how internal tables are sorted using [SORT itab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsort_itab.htm).

Source Code   

\* Public class definition
CLASS cl\_demo\_int\_tbls\_sort DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_int\_tbls\_sort IMPLEMENTATION.
  METHOD main.
    TYPES: BEGIN OF line,
             land   TYPE c LENGTH 3,
             name   TYPE c LENGTH 10,
             age    TYPE i,
             weight TYPE p LENGTH 8 DECIMALS 2,
           END OF line.
    DATA itab TYPE STANDARD TABLE OF line WITH NON-UNIQUE KEY land.
    itab =
      VALUE #(
        ( land = 'D'   name = 'Hans'    age = 20 weight = '80.00' )
        ( land = 'USA' name = 'Nancy'   age = 35 weight = '45.00' )
        ( land = 'USA' name = 'Howard'  age = 40 weight = '95.00' )
        ( land = 'GB'  name = 'Jenny'   age = 18 weight = '50.00' )
        ( land = 'F'   name = 'Michele' age = 30 weight = '60.00' )
        ( land = 'G'   name = 'Karl'    age = 60 weight = '75.00' ) ).
    SORT itab.
    out->write\_data( itab ).
    SORT itab.
    out->write\_data( itab ).
    SORT itab STABLE.
    out->write\_data( itab ).
    SORT itab DESCENDING BY land weight ASCENDING.
    out->write\_data( itab ).
  ENDMETHOD.
ENDCLASS.

Description   

The class sorts a standard table with one key field four times. First, the table is sorted twice by the key field (land) without the STABLE addition. The sort is unstable. The order of lines in which multiple keys appear can change. The same sort is then performed using the STABLE addition. The sort is stable. The lines remain in the same sequence. Then, it is sorted by a sort key defined as land and weight. The general sort order is defined as descending, but for weight it is defined as ascending.