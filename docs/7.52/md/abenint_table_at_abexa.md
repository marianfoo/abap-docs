---
title: "Control Level Processing"
description: |
  This example demonstrates control level processing in internal tables. Source Code REPORT demo_int_tables_at. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. PRIVATE SECTION. TYPES: BEGIN OF line, col1 TYPE c LENGTH 1, col2 TYPE i, col3 TYPE i, END OF line. ENDCLASS. CLASS demo IMPLEME
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenint_table_at_abexa.htm"
abapFile: "abenint_table_at_abexa.htm"
keywords: ["select", "loop", "do", "method", "class", "data", "types", "internal-table", "abenint", "table", "abexa"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab.htm) →  [Processing Statements for Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_processing_statements.htm) →  [LOOP AT itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab_variants.htm) →  [LOOP AT itab - Basic Form](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab.htm) →  [AT - Group Level Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_itab.htm) →  [Examples of Control Level Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenat_itab_abexas.htm) → 

Control Level Processing

This example demonstrates control level processing in internal tables.

Source Code

REPORT demo\_int\_tables\_at.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    TYPES: BEGIN OF line,
             col1 TYPE c LENGTH 1,
             col2 TYPE i,
             col3 TYPE i,
           END OF line.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA itab TYPE HASHED TABLE OF line
              WITH UNIQUE KEY col1 col2.
    DATA(out) = cl\_demo\_output=>new( ).
    itab = VALUE #(
      FOR j = 1 UNTIL j > 3
       ( col1 = 'A'
         col2 = j
         col3 = j \*\* 2 )
       ( col1 = 'B'
         col2 = 2 \* j
         col3 = ( 2 \* j ) \*\* 2 ) ).
    SORT itab.
    out->write( itab )->line( ).
    DATA group LIKE itab.
    LOOP AT itab INTO DATA(line).
      AT NEW col1.
        CLEAR group.
      ENDAT.
      group = VALUE #( BASE group ( line ) ).
      AT END OF col1.
        out->write( group ).
        SUM.
        out->line( )->write( line )->line( ).
      ENDAT.
      AT LAST.
        SUM.
        out->line( )->write( line ).
      ENDAT.
    ENDLOOP.
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

A hashed table itab is created, filled with six rows, and sorted by the primary table key. In the LOOP - ENDLOOP loop, the work area line is used and is displayed for every loop pass. The first field of the primary table key col1 is used for control level processing. The sum of all numeric fields is calculated each time the content of col1 changes and once for the last table row.

The executable example [Grouping in Control Levels](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenloop_group_by_levels_abexa.htm) shows how the same function can be provided using the addition [GROUP BY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab_group_by.htm).