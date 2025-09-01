  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_processing_statements.htm) →  [DELETE itab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdelete_itab.htm) →  [DELETE itab, itab\_line](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdelete_itab_line.htm) →  [DELETE itab, index](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdelete_itab_index.htm) → 

itab - Deleting Lines Using the Index

This example demonstrates how lines can be deleted from internal tables using the index.

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

A sorted table itab is filled with five lines. Then an attempt is made to delete the lines with the indexes 2, 3, and 4 using a chained statement. However, after the deletion of each individual line, the index of each subsequent line is lowered by 1. As a result, the second delete operation deletes the line that had the index 4 first. The third deletion fails because the table now has only 4 lines.

To actually delete the lines 2 to 4, the addition [FROM TO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdelete_itab_lines.htm) of the statement DELETE is used.