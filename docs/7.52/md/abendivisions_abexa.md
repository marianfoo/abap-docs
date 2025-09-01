  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencompute_expressions.htm) →  [arith\_exp - Arithmetic Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcompute_arith.htm) →  [arith\_exp - Arithmetic Operators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarith_operators.htm) → 

Arithmetic Calculations

This example demonstrates the function of arithmetic operators.

Source Code

REPORT demo\_data\_calculate.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA num1 TYPE decfloat34.
    cl\_demo\_input=>add\_field( CHANGING field = num1 ).
    DATA num2 TYPE decfloat34.
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
      CATCH cx\_sy\_arithmetic\_error INTO DATA(exc).
        cl\_demo\_output=>display( exc->get\_text( ) ).
    ENDTRY.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The possible [arithmetic operators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarith_operators.htm) are applied to numbers that can be entered.