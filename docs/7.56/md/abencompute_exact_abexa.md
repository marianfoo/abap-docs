  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencompute_expressions.htm) →  [Arithmetic Expressions (arith\_exp)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcompute_arith.htm) →  [arith\_exp - Lossless Calculations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlossless_calculation.htm) → 

arith\_exp - Lossless Calculations

The example demonstrates [lossless calculations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlossless_calculation_glosry.htm "Glossary Entry") and the exceptions raised when roundings occur.

Source Code

REPORT demo\_compute\_exact.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-DATA:
      BEGIN OF out,
        div     TYPE string,
        result1 TYPE string,
        flag1   TYPE string,
        result2 TYPE string,
        flag2    TYPE string,
      END OF out,
      output LIKE TABLE OF out.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: number TYPE i VALUE 3,
          result TYPE decfloat34,
          exc    TYPE REF TO  cx\_sy\_conversion\_rounding.
    cl\_demo\_input=>request( CHANGING field = number ).
    cl\_demo\_output=>begin\_section(
      |{ number } / div vs. { number } \* ( 1 / div )| ).
    DO 100 TIMES.
      APPEND INITIAL LINE TO output.
      output\[ sy-index \]-div = sy-index.
      TRY.
          result = EXACT #( number / sy-index ).
          output\[ sy-index \]-result1 = result.
          output\[ sy-index \]-flag1   = \`X\`.
        CATCH cx\_sy\_conversion\_rounding INTO exc.
          output\[ sy-index \]-result1 = exc->value.
          output\[ sy-index \]-flag1   = \` \`.
      ENDTRY.
      TRY.
          result = EXACT #( number \* ( 1 / sy-index ) ).
          output\[ sy-index \]-result2 = result.
          output\[ sy-index \]-flag2   = \`X\`.
        CATCH cx\_sy\_conversion\_rounding INTO exc.
          output\[ sy-index \]-result2 = exc->value.
          output\[ sy-index \]-flag2   = \` \`.
      ENDTRY.
    ENDDO.
    cl\_demo\_output=>display( output ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The lossless operator [EXACT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expression_exact.htm) is used to perform the following calculations and to assign the result to a data object with the type decfloat34:

result = number / sy-index

result = number \* ( 1 / sy-index )

If rounding is not needed, the result result is produced. If roundings are needed, the associated exception CX\_SY\_CONVERSION\_ROUNDING is caught, and its attribute VALUE is displayed. The results of lossless calculations are flagged in the display.

This example demonstrates how the structure of an arithmetic expression can affect the result of a lossless calculation. For example, the division of the number number by itself is always a lossless calculation. Multiplying number by 1 / number, however, raises an exception when a rounding occurs in the division.

The following two expressions are further examples of the affect the structure has on an arithmetic expression:

result = number \* 1 / sy-index

result = 1 / sy-index \* number

The first expression has an effect like number / sy-index and the second like number \* ( 1 / sy-index ).