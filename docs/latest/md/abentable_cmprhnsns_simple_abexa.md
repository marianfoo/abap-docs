  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Expressions and Functions](javascript:call_link\('abentable_processing_expr_func.htm'\)) →  [FOR, Table Iterations](javascript:call_link\('abenfor_itab.htm'\)) →  [itab - Examples of Table Comprehensions](javascript:call_link\('abentable_comprehensions_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Table%20Comprehensions%2C%20Basic%20Properties%2C%20ABENTABLE_CMPRHNSNS_SIMPLE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%
20for%20improvement:)

itab - Table Comprehensions, Basic Properties

This example demonstrates the basic properties of [table comprehensions](javascript:call_link\('abentable_comprehension_glosry.htm'\) "Glossary Entry").

Source Code   

\* Public class definition
CLASS cl\_demo\_table\_comprh\_elmntry DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
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
\* Public class implementation
CLASS cl\_demo\_table\_comprh\_elmntry IMPLEMENTATION.
  METHOD main.
    FINAL(itab1) = VALUE itab1(
      FOR j = 41 THEN j - 10 UNTIL j < 10
      ( col1 = j col2 = j + 1 col3 = j + 2 col4 = j + 3 ) ).
    out->write( itab1 ).
    FINAL(itab2) = VALUE itab2(
      FOR wa IN itab1 WHERE ( col1 < 30 ) ##PRIMKEY\[KEY\]
        ( wa ) ).
    out->write( itab2 ).
    FINAL(itab3) = VALUE itab3(
      FOR wa IN itab1 INDEX INTO idx WHERE ( col1 = 21 ) ##PRIMKEY\[key\]
        ( LINES OF itab1 FROM idx ) ).
    out->write( itab3 ).
    FINAL(itab4) = VALUE itab4(
       FOR wa IN itab1 FROM 2 TO 3
         ( col1 = wa-col2 col2 = wa-col3 ) ).
    out->write( itab4 ).
    FINAL(base)  = VALUE itab5( ( 1 ) ( 2 ) ( 3 ) ).
    FINAL(itab5) = VALUE itab5(
       BASE base
       FOR wa IN itab1 USING KEY key
          ( wa-col1 ) ).
    out->write( itab5 ).
  ENDMETHOD.
ENDCLASS.

Description   

From an internal table itab1, the content of new internal tables is created in constructor expressions with one [FOR expression](javascript:call_link\('abenfor_in_itab.htm'\)) each:

-   itab2 has the same line type as itab1. All columns of all lines are assigned that meet a WHERE condition.
-   itab3 has the same line type as itab1. All lines are assigned that meet a WHERE condition from a line.
-   itab4 has fewer columns than itab1. Only certain columns of a restricted number of lines are assigned.
-   itab5 has only one column. The addition BASE is used to first assign the table base and then the first column of itab1. This demonstrates the effect of specifying a sorted secondary key for this column.