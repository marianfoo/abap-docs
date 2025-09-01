---
title: "Creating Tables Using FOR and VALUE"
description: |
  This example demonstrates conditional iterations(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfor_conditional.htm) with the operator VALUE(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_value.htm). Source Code REPORT demo_value_cond_ite
version: "7.53"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencond_iteration_value_abexa.htm"
abapFile: "abencond_iteration_value_abexa.htm"
keywords: ["select", "do", "while", "if", "method", "class", "types", "internal-table", "abencond", "iteration", "value", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_flow_logic.htm) →  [Iteration Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeniteration_expressions.htm) →  [FOR - Iteration Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfor.htm) →  [Examples of Iteration Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeniteration_expressions_abexas.htm) → 

Creating Tables Using FOR and VALUE

This example demonstrates [conditional iterations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfor_conditional.htm) with the operator [VALUE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_value.htm).

Source Code

REPORT demo\_value\_cond\_iteration.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES:
      BEGIN OF line,
        col1 TYPE i,
        col2 TYPE i,
        col3 TYPE i,
      END OF line,
      itab TYPE STANDARD TABLE OF line WITH EMPTY KEY.
    cl\_demo\_output=>write(
        VALUE itab(
          FOR j = 11 THEN j + 10 WHILE j < 40
          ( col1 = j col2 = j + 1 col3 = j + 2  ) ) ).
    cl\_demo\_output=>write(
        VALUE itab(
          FOR j = 31 THEN j - 10 UNTIL j < 10
          ( col1 = j col2 = j + 1 col3 = j + 2  ) ) ).
    cl\_demo\_output=>display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example demonstrates the construction of internal tables using condition iterations with a constructor expression and the corresponding variant of the value operator [VALUE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_constructor_params_itab.htm). Two internal tables with different iterations are created and the output produced directly.