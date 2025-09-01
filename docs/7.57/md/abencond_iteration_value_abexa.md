---
title: "Creating Tables Using FOR and VALUE"
description: |
  This example demonstrates conditional iterations(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfor_conditional.htm) with the operator VALUE(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_value.htm). Source Code REPORT demo_value_cond_ite
version: "7.57"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencond_iteration_value_abexa.htm"
abapFile: "abencond_iteration_value_abexa.htm"
keywords: ["select", "do", "while", "if", "method", "class", "types", "internal-table", "abencond", "iteration", "value", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_flow_logic.htm) →  [Iteration Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeniteration_expressions.htm) →  [FOR, Iteration Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfor.htm) →  [Examples of Iteration Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeniteration_expressions_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Creating Tables Using FOR and VALUE, ABENCOND_ITERATION_VALUE_ABEXA, 757%0D%0A%0D%0AE
rror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Creating Tables Using FOR and VALUE

This example demonstrates [conditional iterations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfor_conditional.htm) with the operator [VALUE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_value.htm).

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

This example demonstrates the construction of internal tables using condition iterations with a constructor expression and the corresponding variant of the value operator [VALUE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvalue_constructor_params_itab.htm). Two internal tables with different iterations are created and directly output.