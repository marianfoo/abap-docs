  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assigning References](javascript:call_link\('abenreference_assignments.htm'\)) →  [Assigning Field Symbols](javascript:call_link\('abenset_field_symbols.htm'\)) →  [ASSIGN](javascript:call_link\('abapassign.htm'\)) →  [ASSIGN, mem\_area](javascript:call_link\('abapassign_mem_area.htm'\)) →  [ASSIGN, dynamic\_components](javascript:call_link\('abapassign_dynamic_components.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Field%20Symbols%2C%20Dynamic%20Structure%20Components%2C%20ABENASSIGN_COMPONENT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20im
provement:)

Field Symbols, Dynamic Structure Components

This example demonstrates dynamic assignments of structure components using ASSIGN.

Source Code   

\* Public class definition
CLASS cl\_demo\_assign\_component DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC .
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_assign\_component IMPLEMENTATION.
  METHOD main.
    DATA:
      BEGIN OF struc,
        comp1 TYPE i,
        comp2 TYPE i,
        comp3 TYPE i,
      END OF struc,
      name TYPE string,
      t1   TYPE i,
      t2   TYPE i,
      tr   TYPE i.
    FIELD-SYMBOLS: <struc> TYPE any,
                   <comp>  TYPE any.
    FINAL(timer) = cl\_abap\_runtime=>create\_hr\_timer( ).
    ASSIGN struc TO <struc>.
    name = \`<STRUC>-COMP1\`.
    t1 = timer->get\_runtime( ).
    DO 1000 TIMES.
      ASSIGN (name) TO <comp>.
    ENDDO.
    t2 = timer->get\_runtime( ).
    tr = t2 - t1.
    out->write( |ASSIGN (name): { tr }| ).
    name = \`COMP1\`.
    t1 = timer->get\_runtime( ).
    DO 1000 TIMES.
      ASSIGN <struc>-(name) TO <comp>.
    ENDDO.
    t2 = timer->get\_runtime( ).
    tr = t2 - t1.
    out->write( |ASSIGN <struc>-(name): { tr }| ).
    t1 = timer->get\_runtime( ).
    DO 1000 TIMES.
      ASSIGN <struc>-(1) TO <comp>.
    ENDDO.
    t2 = timer->get\_runtime( ).
    tr = t2 - t1.
    out->write( |ASSIGN <struc>-(1): { tr }| ).
  ENDMETHOD.
ENDCLASS.

Description   

A structure is assigned to a generically typed field symbol. Using the field symbol the individual components of the structure can be addressed dynamically only. This example shows different ways of doing so and measures their runtime. Using the position is better for performance than using the name. Using a [fully dynamic name (name)](abapassign_mem_area_dynamic_dobj.htm#!ABAP_ALTERNATIVE_1@1@) with the content <STRUC>-COMP1 is most time consuming. This variant should not be used any more.