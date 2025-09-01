---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_int_tbls_insert DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Public class implementation CLASS cl_demo_int_tbls_insert IMPLEMENTATION. METHOD main. TYPES: BEGIN OF line, co
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninsert_lines_abexa.htm"
abapFile: "abeninsert_lines_abexa.htm"
keywords: ["insert", "loop", "do", "if", "method", "class", "data", "types", "internal-table", "abeninsert", "lines", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_processing_statements.htm) →  [INSERT itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinsert_itab.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Insert%20Lines%2C%20ABENINSERT_LINES_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

itab - Insert Lines

This example demonstrates how lines are inserted into internal tables.

Source Code   

\* Public class definition
CLASS cl\_demo\_int\_tbls\_insert DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_int\_tbls\_insert IMPLEMENTATION.
  METHOD main.
    TYPES: BEGIN OF line,
             col1 TYPE i,
             col2 TYPE i,
           END OF line.
    DATA: itab  TYPE TABLE OF line WITH EMPTY KEY,
          jtab  LIKE itab,
          itab1 TYPE TABLE OF line WITH EMPTY KEY,
          jtab1 LIKE itab,
          itab2 TYPE TABLE OF line WITH EMPTY KEY,
          jtab2 TYPE SORTED TABLE OF line
                WITH NON-UNIQUE KEY col1 col2.
    itab = VALUE #( FOR i = 1 UNTIL i > 3
                   ( VALUE #( col1 = i col2 = i \*\* 2 ) ) ).
    out->write( itab ).
    jtab = VALUE #( FOR i = 1 UNTIL i > 3
                   ( VALUE #( col1 = i col2 = i \*\* 3 ) ) ).
    out->write( jtab ).
    "Insert a single line into an index table
    itab1 = itab.
    INSERT VALUE #( col1 = 11 col2 = 22 ) INTO itab1 INDEX 2.
    INSERT INITIAL LINE INTO itab1 INDEX 1.
    out->write( itab1 ).
    "Insert lines into an index table with LOOP
    itab1 = itab.
    LOOP AT itab1 ASSIGNING FIELD-SYMBOL(<line>).
      INSERT VALUE #( col1 = 3 \* sy-tabix col2 = 5 \* sy-tabix )
             INTO itab1.
    ENDLOOP.
    out->write( itab1 ).
    "Insert lines into an index table
    itab1 = itab.
    jtab1 = jtab.
    INSERT LINES OF itab1 INTO jtab1 INDEX 1.
    out->write( jtab1 ).
    "Insert lines into a sorted table
    itab2 = itab.
    jtab2 = jtab.
    INSERT LINES OF itab2 INTO TABLE jtab2.
    out->write( jtab2 ).
  ENDMETHOD.
ENDCLASS.

Description   

This example is consists of four parts where lines are inserted in different ways. First, two internal tables, itab and jtab, are filled with squared and cubic numbers. These are also used to reset the tables above to their initial values, using an assignment, between the individual parts of the example.

-   In the first part, a new line is inserted in front of the second line and a line with initial values is inserted in front of the first line.
-   Next, using a LOOP, a new line is inserted before each existing line.
-   In the third part, the whole of the table itab1 is inserted in front of the first line of jtab1.
-   In the final part, the whole of the table itab2 is inserted into the sorted table jtab2.