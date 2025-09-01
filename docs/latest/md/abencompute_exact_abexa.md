  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencompute_expressions.htm) →  [Arithmetic Expressions (arith\_exp)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcompute_arith.htm) →  [arith\_exp - Lossless Calculations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlossless_calculation.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20arith_exp%20-%20Lossless%20Calculations%2C%20ABENCOMPUTE_EXACT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

arith\_exp - Lossless Calculations

The example demonstrates [lossless calculations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlossless_calculation_glosry.htm "Glossary Entry") and the exceptions raised when roundings occur.

Source Code   

\* Public class definition
CLASS cl\_demo\_compute\_exact DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    DATA:
      BEGIN OF o,
        div     TYPE string,
        result1 TYPE string,
        flag1   TYPE string,
        result2 TYPE string,
        flag2   TYPE string,
      END OF o,
      output LIKE TABLE OF o.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_compute\_exact IMPLEMENTATION.
  METHOD main.
    DATA: number TYPE i VALUE 3,
          result TYPE decfloat34,
          exc    TYPE REF TO  cx\_sy\_conversion\_rounding.
    cl\_demo\_input=>new( )->request( CHANGING field = number ).
    out->begin\_section(
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
    out->write( output ).
  ENDMETHOD.
ENDCLASS.

Description   

The lossless operator [EXACT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_exact.htm) is used to perform the following calculations and to assign the result to a data object with the type decfloat34:

result = number / sy-index

result = number \* ( 1 / sy-index )

If rounding is not needed, the result result is produced. If roundings are needed, the associated exception CX\_SY\_CONVERSION\_ROUNDING is caught, and its attribute VALUE is displayed. The results of lossless calculations are flagged in the display.

This example demonstrates how the structure of an arithmetic expression can affect the result of a lossless calculation. For example, the division of the number number by itself is always a lossless calculation. Multiplying number by 1 / number, however, raises an exception when a rounding occurs in the division.

The following two expressions are further examples of the affect the structure has on an arithmetic expression:

result = number \* 1 / sy-index

result = 1 / sy-index \* number

The first expression has an effect like number / sy-index and the second like number \* ( 1 / sy-index ).