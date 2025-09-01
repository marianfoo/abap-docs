---
title: "Field Symbols, Dynamic Structure Components"
description: |
  This example demonstrates dynamic assignments of structure components using ASSIGN. Source Code REPORT demo_assign_component. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA: BEGIN OF struc, comp1 TYPE i, comp2 TYPE i, comp3 TYPE i,
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenassign_component_abexa.htm"
abapFile: "abenassign_component_abexa.htm"
keywords: ["select", "do", "if", "method", "class", "data", "field-symbol", "abenassign", "component", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreference_assignments.htm) →  [Assigning Field Symbols](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenset_field_symbols.htm) →  [ASSIGN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign.htm) →  [ASSIGN, mem\_area](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_mem_area.htm) →  [ASSIGN, dynamic\_components](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_dynamic_components.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Field Symbols, Dynamic Structure Components, ABENASSIGN_COMPONENT_ABEXA, 757%0D%0A%0D
%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

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
      ASSIGN <struc>-(name) TO <comp>.
    ENDDO.
    GET RUN TIME FIELD t2.
    tr = t2 - t1.
    cl\_demo\_output=>write( |ASSIGN <struc>-(name): { tr }| ).
    GET RUN TIME FIELD t1.
    DO 1000 TIMES.
      ASSIGN <struc>-(1) TO <comp>.
    ENDDO.
    GET RUN TIME FIELD t2.
    tr = t2 - t1.
    cl\_demo\_output=>display( |ASSIGN <struc>-(1): { tr }| ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

A structure is assigned to a generically typed field symbol. Using the field symbol only the individual components of the structure can be addressed dynamically only. This example shows three different ways of doing so and measures their runtime. Fully dynamic access is the most performance-intensive. A dynamic access to an individual component is better for performance, and using the position is better than using the name.