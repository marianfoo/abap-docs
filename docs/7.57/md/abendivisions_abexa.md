  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencompute_expressions.htm) →  [Arithmetic Expressions (arith\_exp)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcompute_arith.htm) →  [arith\_exp - Arithmetic Operators](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarith_operators.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: arith_exp - Calculations, ABENDIVISIONS_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0
A%0D%0ASuggestion for improvement:)

arith\_exp - Calculations

This example demonstrates the function of arithmetic operators.

Source Code   

REPORT demo\_data\_calculate.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA num1 TYPE decfloat34 VALUE 2.
    cl\_demo\_input=>add\_field( CHANGING field = num1 ).
    DATA num2 TYPE decfloat34 VALUE 3.
    cl\_demo\_input=>request(   CHANGING field = num2 ).
    TRY.
        cl\_demo\_output=>new(
          )->write( |{ num1 } +   { num2 } = { num1 +   num2 }|
          )->write( |{ num1 } -   { num2 } = { num1 -   num2 }|
          )->write( |{ num1 } \*   { num2 } = { num1 \*   num2 }|
          )->write( |{ num1 } /   { num2 } = { num1 /   num2 }|
          )->write( |{ num1 } DIV { num2 } = { num1 DIV num2 }|
          )->write( |{ num1 } MOD { num2 } = { num1 MOD num2 }|
          )->write( |{ num1 } \*\*  { num2 } = { num1 \*\*  num2 }|
          )->display( ).
      CATCH cx\_sy\_arithmetic\_error INTO FINAL(exc).
        cl\_demo\_output=>display( exc->get\_text( ) ).
    ENDTRY.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The possible [arithmetic operators](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarith_operators.htm) are applied to numbers that can be entered.