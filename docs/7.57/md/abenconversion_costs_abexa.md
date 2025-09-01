---
title: "Conversion Costs"
description: |
  This example demonstrates costs for type conversions in assignments and operand positions. Source Code REPORT demo_conversion_costs. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA: num   TYPE n LENGTH 10, int   TYPE i, itab  TYPE S
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_costs_abexa.htm"
abapFile: "abenconversion_costs_abexa.htm"
keywords: ["select", "do", "if", "method", "class", "data", "abenconversion", "costs", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvalue_assignments.htm) →  [Assignment and Conversion Rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_rules.htm) →  [Conversions, Performance Notes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_perfo.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Conversion Costs, ABENCONVERSION_COSTS_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A
%0D%0ASuggestion for improvement:)

Conversion Costs

This example demonstrates costs for type conversions in assignments and operand positions.

Source Code   

REPORT demo\_conversion\_costs.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: num   TYPE n LENGTH 10,
          int   TYPE i,
          itab  TYPE STANDARD TABLE OF i,
          t1    TYPE i,
          t2    TYPE i,
          toff  TYPE i,
          tn    TYPE i,
          ti    TYPE i,
          msg   TYPE string.
    CONSTANTS n TYPE i VALUE 100000.
    GET RUN TIME FIELD t1.
    DO n TIMES.
    ENDDO.
    GET RUN TIME FIELD t2.
    toff = t2 - t1.
    GET RUN TIME FIELD t1.
    DO n TIMES.
      num = sy-index.
    ENDDO.
    GET RUN TIME FIELD t2.
    tn = t2 - t1 - toff.
    GET RUN TIME FIELD t1.
    DO n TIMES.
      int = sy-index.
    ENDDO.
    GET RUN TIME FIELD t2.
    ti = t2 - t1 - toff.
    cl\_demo\_output=>write(
      |Ratio of conversion to copy during assignment: | &&
      |{ tn / ti DECIMALS = 2 }| ).
    itab = VALUE #( ( 1 ) ).
    CLEAR: tn, ti.
    num = '1'.
    GET RUN TIME FIELD t1.
    DO n TIMES.
      READ TABLE itab TRANSPORTING NO FIELDS INDEX num.
    ENDDO.
    GET RUN TIME FIELD t2.
    tn = t2 - t1 - toff.
    int = 1.
    GET RUN TIME FIELD t1.
    DO n TIMES.
      READ TABLE itab TRANSPORTING NO FIELDS INDEX int.
    ENDDO.
    GET RUN TIME FIELD t2.
    ti = t2 - t1 - toff.
    cl\_demo\_output=>display(
      |Ratio of conversion to copy during assignment: | &&
      |{ tn / ti DECIMALS = 2 }| ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The program calculates the ratio of the costs of a conversion from type n to i and the costs of a direct memory copy from type i to i. The conversion is much slower than the unconverted copy, which is visible directly in the assignment. The difference is less significant in an operand position, here when specifying the index of a READ statement. This is because the conversion costs are not as high as for a table access.