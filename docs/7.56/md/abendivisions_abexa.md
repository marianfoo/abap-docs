  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Numeric Calculations](javascript:call_link\('abencompute_expressions.htm'\)) →  [Arithmetic Expressions (arith\_exp)](javascript:call_link\('abapcompute_arith.htm'\)) →  [arith\_exp - Arithmetic Operators](javascript:call_link\('abenarith_operators.htm'\)) → 

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
      CATCH cx\_sy\_arithmetic\_error INTO DATA(exc).
        cl\_demo\_output=>display( exc->get\_text( ) ).
    ENDTRY.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The possible [arithmetic operators](javascript:call_link\('abenarith_operators.htm'\)) are applied to numbers that can be entered.