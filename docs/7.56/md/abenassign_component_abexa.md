  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenreference_assignments.htm) →  [Setting Field Symbols](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenset_field_symbols.htm) →  [ASSIGN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassign.htm) →  [ASSIGN, mem\_area](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassign_mem_area.htm) →  [ASSIGN, dynamic\_components](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassign_dynamic_components.htm) → 

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