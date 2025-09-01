---
title: "Source Code"
description: |
  REPORT demo_int_tables_delete_adjacen. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA: BEGIN OF line, col1 TYPE i, col2 TYPE c LENGTH 1, END OF line. DATA itab LIKE STANDARD TABLE OF line WITH NON-UNIQUE KEY col2. itab = VALUE #(
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendelete_dup_lines_abexa.htm"
abapFile: "abendelete_dup_lines_abexa.htm"
keywords: ["select", "delete", "do", "if", "method", "class", "data", "internal-table", "abendelete", "dup", "lines", "abexa"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_processing_statements.htm) →  [DELETE itab](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdelete_itab.htm) →  [DELETE itab, duplicates](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdelete_duplicates.htm) → 

itab - Deleting Duplicate Lines

This example demonstrates how adjacent duplicate lines in internal tables can be deleted.

Source Code

REPORT demo\_int\_tables\_delete\_adjacen.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: BEGIN OF line,
            col1 TYPE i,
            col2 TYPE c LENGTH 1,
          END OF line.
    DATA itab LIKE STANDARD TABLE OF line
              WITH NON-UNIQUE KEY col2.
    itab = VALUE #( ( col1 = 1 col2 = 'A' )
                    ( col1 = 1 col2 = 'A' )
                    ( col1 = 1 col2 = 'B' )
                    ( col1 = 2 col2 = 'B' )
                    ( col1 = 3 col2 = 'B' )
                    ( col1 = 4 col2 = 'B' )
                    ( col1 = 5 col2 = 'A' ) ).
    DATA(out) = cl\_demo\_output=>new(
      )->write\_data( itab ).
    DELETE ADJACENT DUPLICATES FROM itab COMPARING ALL FIELDS.
    out->write\_data( itab ).
    DELETE ADJACENT DUPLICATES FROM itab COMPARING col1.
    out->write\_data( itab ).
    DELETE ADJACENT DUPLICATES FROM itab.
    out->write\_data( itab
       )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The method main creates and fills a standard table. The first DELETE statement deletes the second line since it has the same content as the first line. The second DELETE statement deletes the second line from the remaining table since the content of the field col1 is the same as in the first line. The third DELETE statement deletes the third and fourth lines of the remaining table since the content of the key field col2 is the same as in the second line. Although the content of the key fields for the first and fifth lines is the same, the fifth line is not deleted because it is not adjacent to the first line.