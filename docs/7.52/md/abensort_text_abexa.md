  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab.htm) →  [Processing Statements for Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_processing_statements.htm) →  [SORT itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsort_itab.htm) → 

Sorting Internal Tables Alphabetically

This example demonstrates the alphabetical sorting of character strings.

Source Code

REPORT demo\_int\_tables\_sort\_text .
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: BEGIN OF line,
            text(6) TYPE c,
            xtext TYPE xstring,
          END OF line.
    DATA itab LIKE HASHED TABLE OF line WITH UNIQUE KEY text.
    DATA(out) = cl\_demo\_output=>new( ).
    line-text = 'Muller'(001).
    CONVERT TEXT line-text INTO SORTABLE CODE line-xtext.
    INSERT line INTO TABLE itab.
    line-text = 'M�ller'(002).
    CONVERT TEXT line-text INTO SORTABLE CODE line-xtext.
    INSERT line INTO TABLE itab.
    line-text = 'Moller'(003).
    CONVERT TEXT line-text INTO SORTABLE CODE line-xtext.
    INSERT line INTO TABLE itab.
    line-text = 'Miller'(004).
    CONVERT TEXT line-text INTO SORTABLE CODE line-xtext.
    INSERT line INTO TABLE itab.
    SORT itab.
    out->write\_data( itab ).
    SORT itab BY xtext.
    out->write\_data( itab ).
    SORT itab AS TEXT.
    out->write\_data( itab ).
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The table itab contains a column with text fields and a column with corresponding, country-specific, binary characters that can be sorted and have been created, through conversion, in a sortable format. The table is sorted three times. First, a binary search on the key field text, then a binary search on the xtext field and finally, alphabetically on the key field text.

In the first sort 'Möller' comes after 'Muller', because the internal representation of 'ö' comes after the representation for 'u'. Both the other sorts are alphabetic. The binary sort on xtext has the same result as an alphabetic sort on the field text.