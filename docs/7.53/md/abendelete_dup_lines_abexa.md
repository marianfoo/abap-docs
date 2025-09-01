  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab.htm) →  [Processing Statements for Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_processing_statements.htm) →  [DELETE itab](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_itab.htm) →  [DELETE itab - duplicates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_duplicates.htm) → 

Internal Tables, Deleting Duplicate Rows

This example demonstrates how adjacent duplicate rows in internal tables can be deleted.

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

The method main creates and fills a standard table. The first DELETE statement deletes the second row since it has the same content as the first row. The second DELETE statement deletes the second row from the remaining table since the content of the field col1 is the same as in the first row. The third DELETE statement deletes the third and fourth rows of the remaining table since the content of the key field col2 is the same as in the second row. Although the content of the key fields for the first and fifth rows is the same, the fifth row is not deleted because it is not adjacent to the first row.