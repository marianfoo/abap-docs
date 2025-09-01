  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Processing Statements for Internal Tables](javascript:call_link\('abentable_processing_statements.htm'\)) →  [DELETE itab](javascript:call_link\('abapdelete_itab.htm'\)) →  [DELETE itab - itab\_line](javascript:call_link\('abapdelete_itab_line.htm'\)) →  [DELETE itab - index](javascript:call_link\('abapdelete_itab_index.htm'\)) → 

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

The addition [FROM TO](javascript:call_link\('abapdelete_itab_lines.htm'\)) of the statement DELETE can be used to actually delete the rows 2 to 4.