---
title: "Internal Tables, Deleting Rows Using the Index"
description: |
  This example demonstrates how rows can be deleted from internal tables using the index. Source Code REPORT demo_int_tables_delete_ind_1. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA itab TYPE SORTED TABLE OF i WITH UNIQUE KEY
version: "7.53"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendelete_line_idx_abexa.htm"
abapFile: "abendelete_line_idx_abexa.htm"
keywords: ["select", "delete", "loop", "do", "method", "class", "data", "internal-table", "abendelete", "line", "idx", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab.htm) →  [Processing Statements for Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_processing_statements.htm) →  [DELETE itab](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_itab.htm) →  [DELETE itab - itab\_line](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_itab_line.htm) →  [DELETE itab - index](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_itab_index.htm) → 

Internal Tables, Deleting Rows Using the Index

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

A sorted table itab is filled with five rows. Then an attempt is made to delete the rows with the indexes 2, 3, and 4 using a chained statement. However, after the deletion of each individual row, the index of each subsequent row is lowered by 1. To actually delete the rows 2 to 4, the FROM TO addition of the DELETE statement is used. The third deletion fails, since the table now has only three rows.

The addition [FROM TO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_itab_lines.htm) of the statement DELETE can be used to actually delete the rows 2 to 4.