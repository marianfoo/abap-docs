# ABAP Keyword Documentation / ABAP − Reference / Processing Internal Data / Numeric Calculations / arith_exp - Arithmetic Expressions / arith_exp - Lossless Calculations

Included pages: 2



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.53](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenlossless_calculation.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlossless_calculation.htm)
- [abencompute_exact_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencompute_exact_abexa.htm)

**Bundle Contains**: 2 documentation pages
**Version**: ABAP 7.53
**Generated**: 2025-09-01T11:25:46.219Z

---

### abenlossless_calculation.htm

> **📖 Official SAP Documentation**: [abenlossless_calculation.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlossless_calculation.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Numeric Calculations](javascript:call_link\('abencompute_expressions.htm'\)) →  [arith\_exp - Arithmetic Expressions](javascript:call_link\('abapcompute_arith.htm'\)) → 

arith\_exp - Lossless Calculations

A [lossless calculation](javascript:call_link\('abenlossless_calculation_glosry.htm'\) "Glossary Entry") is a calculation of an [arithmetic expression](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry") in which no roundings occur. Lossless calculations can be performed using the [lossless operator EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\)):

Syntax

... EXACT type( arith\_exp ) ....

If the operand of the operator EXACT is an arithmetic expression, the data type specified by type cannot have the type f. arith\_exp must be an arithmetic expression simplified as follows:

-   The permitted [arithmetic operators](javascript:call_link\('abenarithmetic_operator_glosry.htm'\) "Glossary Entry") are +, \-, \*, and /. The operators DIV, MOD, and \*\* cannot be used.

-   The permitted [built-in functions](javascript:call_link\('abenpredefined_function_glosry.htm'\) "Glossary Entry") are abs, sign, ceil, floor, trunc, frac, round, and rescale. These functions do not raise the exception CX\_SY\_CONVERSION\_ROUNDING. No other built-in functions can be specified because their results are not lossless (in principle).

-   No operands of data type x and xstring can be specified.

-   No [functional methods](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry") can be specified, since the losslessness requirements cannot be applied to the method execution.

-   Operands of the type f (binary floating point numbers) are not permitted because they cannot represent every decimal number precisely, due to their internal representation.

The operator EXACT specifies that a simplified expression with the [calculation type](javascript:call_link\('abencalculation_type_glosry.htm'\) "Glossary Entry") decfloat34 is calculated and checks whether roundings are performed. If roundings are not performed, the result is assigned to the return value (if necessary, the result is converted from decfloat34 to the data type determined by type. If a rounding is required by the calculation, the exception CX\_SY\_CONVERSION\_ROUNDING is raised. Rounding can take place when operands are converted to the calculation type, during the calculation, or when the result is converted to the target field.

The exception is raised when the first subexpression that requires a rounding is calculated. When the exception is handled, the VALUE attribute in the exception object contains the result provided by a regular calculation. The attribute OPERATION contains the first operation that had to be rounded; conversions are represented by ":=".

Notes

-   The first calculation in lossless calculations that requires rounding raises an exception. This means that arithmetic expressions that are mathematically identical but constructed in different ways can display different behavior (see the executable [example](javascript:call_link\('abencompute_exact_abexa.htm'\))).

-   If the operand of the operator EXACT is not an arithmetic expression, the operator performs a [lossless assignment](javascript:call_link\('abenlossless_assignment_glosry.htm'\) "Glossary Entry").

-   The use of the addition EXACT in the obsolete statement [COMPUTE](javascript:call_link\('abapcompute.htm'\)) is an obsolete form of lossless calculation.
    

Example

The second arithmetic expression raises an exception, since it requires rounding to two decimal places.

TYPES pack TYPE p LENGTH 8 DECIMALS 2.
DATA(result1) = EXACT pack( 1 / 4 ).
DATA(result2) = EXACT pack( 1 / 3 ).

Executable Example

[Lossless Calculations](javascript:call_link\('abencompute_exact_abexa.htm'\))

Executable Example

[Floating Point Numbers, Arithmetic Calculations](javascript:call_link\('abenfloating_point_numbers_abexa.htm'\))

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Handleable Exceptions

CX\_SY\_TYPE\_NOT\_EXACT

-   Cause: Invalid operand type for lossless calculations
    Runtime error: UNCAUGHT\_EXCEPTION
    

CX\_SY\_CONVERSION\_ROUNDING

-   Cause: Rounding in a lossless calculation
    Runtime error: UNCAUGHT\_EXCEPTION
    

Continue
![Example](exa.gif "Example") [Lossless Calculations](javascript:call_link\('abencompute_exact_abexa.htm'\))



**📖 Source**: [abenlossless_calculation.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlossless_calculation.htm)

### abencompute_exact_abexa.htm

> **📖 Official SAP Documentation**: [abencompute_exact_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencompute_exact_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abencompute_exact_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencompute_exact_abexa.htm)


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Numeric Calculations](javascript:call_link\('abencompute_expressions.htm'\)) →  [arith\_exp - Arithmetic Expressions](javascript:call_link\('abapcompute_arith.htm'\)) →  [arith\_exp - Lossless Calculations](javascript:call_link\('abenlossless_calculation.htm'\)) → 

Lossless Calculations

The example demonstrates [lossless calculations](javascript:call_link\('abenlossless_calculation_glosry.htm'\) "Glossary Entry") and the exceptions raised when roundings occur.

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

The lossless operator [EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\)) makes the following calculations and assigns the result to a data object with the type decfloat34:

result = number / sy-index

result = number \* ( 1 / sy-index )

If rounding is not needed, the result result is produced. If roundings are needed, the associated exception CX\_SY\_CONVERSION\_ROUNDING is caught and its attribute VALUE is displayed. The results of lossless calculations are flagged in the display.

This example demonstrates how the structure of an arithmetic expression can influence the result of a lossless calculation. For example, the division of the number number by itself is always a lossless calculation; multiplying number by 1 / number, however, raises an exception when a rounding occurs in the division.

The following two expressions are further examples where the structure of an arithmetic expression is an influence:

result = number \* 1 / sy-index

result = 1 / sy-index \* number

The first expression has an effect like number / sy-index and the second like number \* ( 1 / sy-index ) (again).
