  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Processing Statements for Internal Tables](javascript:call_link\('abentable_processing_statements.htm'\)) →  [SORT itab](javascript:call_link\('abapsort_itab.htm'\)) → 

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

The table itab contains a column of text fields and a column of associated country-specific sortable binary characters that were created in a sortable format using conversions. The table is sorted three times. First, a binary search is performed on the key field text, then a binary search on the xtext field, and finally an alphabetical search on the key field text.

In the first sort 'Möller' comes after 'Muller', because the internal representation of 'ö' comes after the representation for 'u'. Both the other sorts are alphabetical. The binary sort performed on xtext has the same result as an alphabetical sort on the field text.