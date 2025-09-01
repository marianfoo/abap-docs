---
title: "Internal Tables - Deleting Rows Using the Index"
description: |
  This example demonstrates how rows can be deleted from internal tables using the index. Source Code REPORT demo_int_tables_delete_ind_1. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA itab TYPE SORTED TABLE OF i WITH UNIQUE KEY
version: "7.52"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendelete_line_idx_abexa.htm"
abapFile: "abendelete_line_idx_abexa.htm"
keywords: ["select", "delete", "loop", "do", "method", "class", "data", "internal-table", "abendelete", "line", "idx", "abexa"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab.htm) →  [Processing Statements for Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_processing_statements.htm) →  [DELETE itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_itab.htm) →  [DELETE itab - itab\_line](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_itab_line.htm) →  [DELETE itab - index](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_itab_index.htm) → 

Internal Tables - Deleting Rows Using the Index

This example demonstrates how rows can be deleted from internal tables using the index.

Source Code

REPORT demo\_int\_tables\_delete\_ind\_1.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA itab TYPE SORTED TABLE OF i WITH UNIQUE KEY table\_line.
    FIELD-SYMBOLS <line> LIKE LINE OF itab.
    DATA(out) = cl\_demo\_output=>new( ).
    itab = VALUE #( FOR j = 1 UNTIL j > 5 ( j ) ).
    DELETE itab INDEX: 2, 3, 4.
    out->write( |sy-subrc: { sy-subrc }| ).
    LOOP AT itab ASSIGNING <line>.
      out->write( |{ sy-tabix } { <line> }| ).
    ENDLOOP.
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

A sorted table itab is filled with five rows. Then an attempt is made to delete the rows with the indices 2, 3, and 4 using a chained statement. However, after the deletion of each individual row, the index of each subsequent row is lowered by 1.This means, the second delete operation actually deletes the row which originally had the index 4. The third delete operation fails because the table is now made up of only 3 rows.

To actually delete the rows 2 to 4, the [FROM TO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_itab_lines.htm) addition of the DELETE statement is used.