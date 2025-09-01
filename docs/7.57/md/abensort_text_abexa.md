  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Processing Statements](javascript:call_link\('abentable_processing_statements.htm'\)) →  [SORT itab](javascript:call_link\('abapsort_itab.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Sorting Internal Tables Alphabetically, ABENSORT_TEXT_ABEXA, 757%0D%0A%0D%0AError:%0D
%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

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
    FINAL(out) = cl\_demo\_output=>new( ).
    line-text = 'Muller'(001).
    CONVERT TEXT line-text INTO SORTABLE CODE line-xtext.
    INSERT line INTO TABLE itab.
    line-text = 'Möller'(002).
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

The table itab contains a column of text fields and a column of associated country-specific sortable binary characters that were created in a sortable format using conversions. The table is sorted three times. First, binarily for the key field text, then binarily for the xtext field, and finally alphabetically for the key field text.

In the first sort Möller comes after Muller, because the internal representation of 'ö' comes after the representation for 'u'. Both the other sorts are alphabetical. The binary sort performed on xtext has the same result as an alphabetical sort on the field text.