  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_processing_expr_func.htm) →  [FOR, Table Iterations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfor_itab.htm) →  [itab - Examples of Table Comprehensions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_comprehensions_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: itab - Table Comprehensions, Multiple Lines, ABENTABLE_CMPRHNSNS_LINES_ABEXA, 757%0D%
0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

itab - Table Comprehensions, Multiple Lines

This example demonstrates how multiple lines in a [FOR expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfor_in_itab.htm) of a table [comprehension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_comprehension_glosry.htm "Glossary Entry") are created.

Source Code   

REPORT demo\_table\_comprh\_lines.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES:
      BEGIN OF line1,
        col1 TYPE i,
        col2 TYPE i,
        col3 TYPE i,
      END OF line1,
      itab1 TYPE STANDARD TABLE OF line1 WITH EMPTY KEY,
      itab2 TYPE STANDARD TABLE OF i     WITH EMPTY KEY.
    FINAL(out) = cl\_demo\_output=>new( ).
    FINAL(itab1) = VALUE itab1(
      ( col1 = 11 col2 = 12 col3 = 13 )
      ( col1 = 21 col2 = 22 col3 = 23 )
      ( col1 = 31 col2 = 32 col3 = 33 ) ).
    out->write( itab1 ).
    FINAL(itab2) = VALUE itab2(
      FOR wa IN itab1
        ( wa-col1 )
        ( wa-col2 )
        ( wa-col3 ) ).
    out->write( itab2 ).
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The columns of itabl are created as individual lines after its FOR expression. The result is a single-column internal table itab2 that contains the content of itab1 as an array