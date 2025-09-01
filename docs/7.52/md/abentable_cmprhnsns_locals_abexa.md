  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Expressions and Functions for Internal Tables](javascript:call_link\('abentable_processing_expr_func.htm'\)) →  [FOR - Table Iterations](javascript:call_link\('abenfor_itab.htm'\)) →  [Examples of Table Comprehensions](javascript:call_link\('abentable_comprehensions_abexas.htm'\)) → 

Table Comprehensions, Local Auxiliary Fields

This example demonstrates how local auxiliary fields are used in [table comprehensions](javascript:call_link\('abentable_comprehension_glosry.htm'\) "Glossary Entry").

Source Code

REPORT demo\_table\_comprh\_locals.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES:
      array TYPE STANDARD TABLE OF i WITH EMPTY KEY,
      BEGIN OF line,
        col1 TYPE i,
        col2 TYPE i,
        col3 TYPE i,
      END OF line,
      itab TYPE STANDARD TABLE OF line WITH EMPTY KEY.
    CONSTANTS factor TYPE i VALUE 1000.
    DATA(array) = VALUE array(
      ( 3 ) ( 5 ) ( 7 ) ( 9 ) ).
    DATA(itab) = VALUE itab(
      FOR x IN array INDEX INTO idx
         LET off = factor \* idx IN
        ( col1 = x col2 = x \* x col3 = x + off ) ).
    cl\_demo\_output=>display( itab ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

From a single column table array, a three-column table itab is created whose column content is calculated from the respective row content in array. The local auxiliary fields in this example are the work area x of the [FOR expression](javascript:call_link\('abenfor_in_itab.htm'\)) and the auxiliary field off defined in a [LET expression](javascript:call_link\('abaplet.htm'\)).