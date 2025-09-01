  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_processing_statements.htm) →  [SORT itab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsort_itab.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Sorting%20Internal%20Tables%20Alphabetically%2C%20ABENSORT_TEXT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Sorting Internal Tables Alphabetically

This example demonstrates the alphabetical sorting of character strings.

Source Code   

\* Public class definition
CLASS cl\_demo\_int\_tbls\_sort\_text DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_int\_tbls\_sort\_text IMPLEMENTATION.
  METHOD main.
    DATA: BEGIN OF line,
            text(6) TYPE c,
            xtext   TYPE xstring,
          END OF line.
    DATA itab LIKE HASHED TABLE OF line WITH UNIQUE KEY text.
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
  ENDMETHOD.
ENDCLASS.

Description   

The table itab contains a column of text fields and a column of associated country-specific sortable binary characters that were created in a sortable format using conversions. The table is sorted three times. First, binarily for the key field text, then binarily for the xtext field, and finally alphabetically for the key field text.

In the first sort Möller comes after Muller, because the internal representation of 'ö' comes after the representation for 'u'. Both the other sorts are alphabetical. The binary sort performed on xtext has the same result as an alphabetical sort on the field text.