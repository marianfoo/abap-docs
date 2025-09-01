  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Expressions and Functions for Internal Tables](javascript:call_link\('abentable_processing_expr_func.htm'\)) →  [FOR - Table Iterations](javascript:call_link\('abenfor_itab.htm'\)) →  [Examples of Table Comprehensions](javascript:call_link\('abentable_comprehensions_abexas.htm'\)) → 

Table Comprehensions, Basic Properties

This example demonstrates the basic properties of [table comprehensions](javascript:call_link\('abentable_comprehension_glosry.htm'\) "Glossary Entry").

Source Code

REPORT demo\_table\_comprh\_elementary.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
    TYPES:
      BEGIN OF line1,
        col1 TYPE i,
        col2 TYPE i,
        col3 TYPE i,
        col4 TYPE i,
      END OF line1,
      itab1 TYPE STANDARD TABLE OF line1 WITH EMPTY KEY
                                         WITH UNIQUE SORTED KEY
                                              key COMPONENTS col1,
      BEGIN OF line2,
        col1 TYPE i,
        col2 TYPE i,
      END OF line2,
      itab2 TYPE STANDARD TABLE OF line1 WITH EMPTY KEY,
      itab3 TYPE STANDARD TABLE OF line1 WITH EMPTY KEY,
      itab4 TYPE STANDARD TABLE OF line2 WITH EMPTY KEY,
      itab5 TYPE STANDARD TABLE OF i     WITH EMPTY KEY.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    DATA(itab1) = VALUE itab1(
      FOR j = 41 THEN j - 10 UNTIL j < 10
      ( col1 = j col2 = j + 1 col3 = j + 2 col4 = j + 3 ) ).
    out->write( itab1 ).
    DATA(itab2) = VALUE itab2(
      FOR wa IN itab1 WHERE ( col1 < 30 )
        ( wa ) ).
    out->write( itab2 ).
    DATA(itab3) = VALUE itab3(
      FOR wa IN itab1 INDEX INTO idx WHERE ( col1 = 21 ) ##PRIMKEY\[key\]
        ( LINES OF itab1 from idx ) ).
    out->write( itab3 ).
    DATA(itab4) = VALUE itab4(
       FOR wa IN itab1 FROM 2 TO 3
         ( col1 = wa-col2 col2 = wa-col3 ) ).
    out->write( itab4 ).
    DATA(base)  = VALUE itab5( ( 1 ) ( 2 ) ( 3 ) ).
    DATA(itab5) = VALUE itab5(
       BASE base
       FOR wa IN itab1 USING KEY key
          ( wa-col1 ) ).
    out->write( itab5 ).
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

From an internal table itab1, the content of new internal tables is created in constructor expressions with one [FOR expression](javascript:call_link\('abenfor_in_itab.htm'\)) each:

-   itab2 has the same row type as itab1. All columns of all rows are assigned that meet a WHERE condition.

-   itab3 has the same row type as itab1. All rows are assigned that meet a WHERE condition from a row.

-   itab4 has fewer columns than itab1. Only certain columns of a restricted number of rows are assigned.

-   itab5 has only one column. The addition BASE is used to first assign the table base and then the first column of itab1. This demonstrates the effect of specifying a sorted secondary key for this column.