  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_flow_logic.htm) →  [Iteration Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeniteration_expressions.htm) →  [FOR, Iteration Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfor.htm) →  [Examples of Iteration Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeniteration_expressions_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Creating%20Tables%20Using%20FOR%20and%20VALUE%2C%20ABENCOND_ITERATION_VALUE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

Creating Tables Using FOR and VALUE

This example demonstrates [conditional iterations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfor_conditional.htm) with the operator [VALUE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_value.htm).

Source Code   

\* Public class definition
CLASS cl\_demo\_value\_cond\_iteration DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_value\_cond\_iteration IMPLEMENTATION.
  METHOD main.
    TYPES:
      BEGIN OF line,
        col1 TYPE i,
        col2 TYPE i,
        col3 TYPE i,
      END OF line,
      itab TYPE STANDARD TABLE OF line WITH EMPTY KEY.
    out->write(
        VALUE itab(
          FOR j = 11 THEN j + 10 WHILE j < 40
          ( col1 = j col2 = j + 1 col3 = j + 2  ) ) ).
    out->write(
        VALUE itab(
          FOR j = 31 THEN j - 10 UNTIL j < 10
          ( col1 = j col2 = j + 1 col3 = j + 2  ) ) ).
  ENDMETHOD.
ENDCLASS.

Description   

This example demonstrates the construction of internal tables using condition iterations with a constructor expression and the corresponding variant of the value operator [VALUE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_constructor_params_itab.htm). Two internal tables with different iterations are created and directly output.