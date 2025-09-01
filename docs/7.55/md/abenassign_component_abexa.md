  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assigning References](javascript:call_link\('abenreference_assignments.htm'\)) →  [Setting Field Symbols](javascript:call_link\('abenset_field_symbols.htm'\)) →  [ASSIGN](javascript:call_link\('abapassign.htm'\)) →  [ASSIGN, mem\_area](javascript:call_link\('abapassign_mem_area.htm'\)) →  [ASSIGN, dynamic\_dobj](javascript:call_link\('abapassign_mem_area_dynamic_dobj.htm'\)) → 

Field Symbols, Dynamic Structure Components

This example demonstrates dynamic assignments of structure components using ASSIGN.

Source Code

REPORT demo\_assign\_component.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA:
      BEGIN OF struc,
        comp1 TYPE i,
        comp2 TYPE i,
        comp3 TYPE i,
      END OF struc,
      name TYPE string,
      t1 TYPE i,
      t2 TYPE i,
      tr TYPE i.
    FIELD-SYMBOLS: <struc> TYPE any,
                   <comp>  TYPE any.
    ASSIGN struc TO <struc>.
    name = \`<STRUC>-COMP1\`.
    GET RUN TIME FIELD t1.
    DO 1000 TIMES.
      ASSIGN (name) TO <comp>.
    ENDDO.
    GET RUN TIME FIELD t2.
    tr = t2 - t1.
    cl\_demo\_output=>write( |ASSIGN (name): { tr }| ).
    name = \`COMP1\`.
    GET RUN TIME FIELD t1.
    DO 1000 TIMES.
      ASSIGN COMPONENT name OF STRUCTURE <struc> TO <comp>.
    ENDDO.
    GET RUN TIME FIELD t2.
    tr = t2 - t1.
    cl\_demo\_output=>write( |ASSIGN COMPONENT name: { tr }| ).
    GET RUN TIME FIELD t1.
    DO 1000 TIMES.
      ASSIGN COMPONENT 1 OF STRUCTURE <struc> TO <comp>.
    ENDDO.
    GET RUN TIME FIELD t2.
    tr = t2 - t1.
    cl\_demo\_output=>display( |ASSIGN COMPONENT 1: { tr }| ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

A structure is assigned to a generically typed field symbol. The field symbol can only be used to access individual components dynamically. This example shows three different methods and measures their runtime. Fully dynamic access is the most performance-intensive. An access using ASSIGN COMPONENT is better for performance, and using the position is better than using the name.