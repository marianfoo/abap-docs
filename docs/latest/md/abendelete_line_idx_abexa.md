  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_processing_statements.htm) →  [DELETE itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_itab.htm) →  [DELETE itab, itab\_line](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_itab_line.htm) →  [DELETE itab, index](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_itab_index.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Deleting%20Lines%20Using%20the%20Index%2C%20ABENDELETE_LINE_IDX_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improve
ment:)

itab - Deleting Lines Using the Index

This example demonstrates how lines can be deleted from internal tables using the index.

Source Code   

\* Public class definition
CLASS cl\_demo\_int\_tbls\_delete\_ind\_1 DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_int\_tbls\_delete\_ind\_1 IMPLEMENTATION.
  METHOD main.
    DATA itab TYPE SORTED TABLE OF i WITH UNIQUE KEY table\_line.
    FIELD-SYMBOLS <line> LIKE LINE OF itab.
    itab = VALUE #( FOR j = 1 UNTIL j > 5 ( j ) ).
    DELETE itab INDEX: 2, 3, 4.
    out->write( |sy-subrc: { sy-subrc }| ).
    LOOP AT itab ASSIGNING <line>.
      out->write( |{ sy-tabix } { <line> }| ).
    ENDLOOP.
  ENDMETHOD.
ENDCLASS.

Description   

A sorted table itab is filled with five lines. Then an attempt is made to delete the lines with the indexes 2, 3, and 4 using a chained statement. However, after the deletion of each individual line, the index of each subsequent line is lowered by 1. As a result, the second delete operation deletes the line that had the index 4 first. The third deletion fails because the table now has only 4 lines.

To actually delete the lines 2 to 4, the addition [FROM TO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_itab_lines.htm) of the statement DELETE is used.