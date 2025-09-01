  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencompute_expressions.htm) →  [Arithmetic Expressions (arith\_exp)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcompute_arith.htm) →  [arith\_exp - Arithmetic Operators](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarith_operators.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20arith_exp%20-%20Calculations%2C%20ABENDIVISIONS_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

arith\_exp - Calculations

This example demonstrates the function of arithmetic operators.

Source Code   

\* Public class definition
CLASS cl\_demo\_data\_calculate DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_data\_calculate IMPLEMENTATION.
  METHOD main.
    DATA num1 TYPE decfloat34 VALUE 2.
    DATA num2 TYPE decfloat34 VALUE 3.
    cl\_demo\_input=>new(
     )->add\_field( CHANGING field = num1
     )->request(   CHANGING field = num2 ).
    TRY.
        out->write( |{ num1 } +   { num2 } = { num1 +   num2 }|
          )->write( |{ num1 } -   { num2 } = { num1 -   num2 }|
          )->write( |{ num1 } \*   { num2 } = { num1 \*   num2 }|
          )->write( |{ num1 } /   { num2 } = { num1 /   num2 }|
          )->write( |{ num1 } DIV { num2 } = { num1 DIV num2 }|
          )->write( |{ num1 } MOD { num2 } = { num1 MOD num2 }|
          )->write( |{ num1 } \*\*  { num2 } = { num1 \*\*  num2 }| ).
      CATCH cx\_sy\_arithmetic\_error INTO FINAL(exc).
        out->write( exc->get\_text( ) ).
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

Description   

The possible [arithmetic operators](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarith_operators.htm) are applied to numbers that can be entered.