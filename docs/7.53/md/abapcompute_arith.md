  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencompute_expressions.htm) → 

arith\_exp - Arithmetic Expressions

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarith_exp_shortref.htm)

Syntax

... *\[*+*|*\-*\]* operand1
    *\[**{*[+*|*\-*|*\**|*/*|*DIV*|*MOD*|*\*\*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarith_operators.htm)*}* *\[*+*|*\-*\]* operand2
    *\[**{*[+*|*\-*|*\**|*/*|*DIV*|*MOD*|*\*\*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarith_operators.htm)*}* *\[*+*|*\-*\]* operand3
    ... *\]**\]* ...

Effect

An arithmetic expression expresses a calculation. The result of an arithmetic expression is a numeric value of the [calculation type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarith_type.htm) assigned to the arithmetic expression. In an arithmetic expression arith\_exp, the [arithmetic operators](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarith_operators.htm) +, \-, \*, /, DIV, MOD, or \*\* can be used to join an operand operand1 with one or more operands operand2, operand3 ... [Brackets](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarith_brackets.htm) are also possible. The calculation is made in accordance with [calculation rules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarith_type.htm) specified by the calculation type in question.

Arithmetic expressions can occur in the reading positions of [certain statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexpression_positions.htm), in particular on the right side of an [assignment](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenequals_arith_expr.htm) with the [assignment operator \=](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenequals_operator.htm). When used as the operand of the lossless operator EXACT, an arithmetic expression can be checked for a [lossless calculation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlossless_calculation.htm).

The operand positions operand are [general expression positions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry"), which means that numeric data objects, [built-in functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuilt_in_functions.htm), [functional methods](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethods_functional.htm), or compound arithmetic expressions can be specified. The arithmetic operators +, \-, \*, /, DIV, MOD, and \*\* join two adjacent operands. When the expression is evaluated, a numeric value is calculated and associated with the next adjacent operand. The priority of this join depends on the [operators](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarith_operators.htm) used.

Each operand can be preceded by the signs + or \-, in any order and separated by one or more blanks. The effect of using a sign is the same as specifying the expression +1 \* or \-1 \* in its place, which means that a sign has the same priority as a multiplication.

If [functional methods](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunctional_method_glosry.htm "Glossary Entry") or [character-like expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencharlike_expression_glosry.htm "Glossary Entry") are specified as operands, they are specified from left to right and from inside to outside before the remainder of the expression is evaluated. The return values are buffered to be used in the corresponding operand positions. Here, [character-like processing functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprocess_functions.htm) and [string expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_string.htm) are only possible as arguments of [description functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendescriptive_functions.htm).

Notes

-   It must be noted whether the value of a data object that is also used as an operand is changed in a specified functional method. Even if an operand of this type precedes the functional method, its value will always be changed by the method before it is evaluated.
    
-   Arithmetic expressions, [string expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_expression_glosry.htm "Glossary Entry"), and [bit expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbit_expression_glosry.htm "Glossary Entry") cannot be combined. Built-in functions that are used as operands for arithmetic expressions can, however, contain string expressions or bit expressions as arguments.
    
-   If an [arithmetic expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") is specified as an argument of one of the overloaded [numeric functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmathematical_functions.htm), the entire function works like an arithmetic expression.
    

Example

The following program excerpt computes the hyperbolic sine with the Eulerian formula in the explicit calculation type decfloat34 and with the [built-in function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpredefined_function_glosry.htm "Glossary Entry") sinh in calculation type f and displays the difference.

REPORT kellerh\_test1.
TYPES:
  BEGIN OF line,
    x       TYPE string,
    result1 TYPE string,
    result2 TYPE string,
    diff    TYPE string,
  END OF  line.
DATA
  output TYPE TABLE OF line WITH EMPTY KEY.
DO 2001 TIMES.
  TRY.
      DATA(x) = sy-index - 1001.
      DATA(result1) = CONV decfloat34(
                             ( exp( x ) - exp( -1 \* x ) ) / 2 ).
      DATA(result2) =  sinh( x ).
      DATA(diff)    =  abs( result1 - result2 ).
      IF diff <> 0.
        APPEND VALUE #(
          x       = |{ x }|
          result1 = |{ result1 STYLE = SCIENTIFIC }|
          result2 = |{ result2 STYLE = SCIENTIFIC }|
          diff    = |{ diff    STYLE = SCIENTIFIC }| ) TO output.
      ENDIF.
    CATCH cx\_sy\_conversion\_overflow cx\_sy\_arithmetic\_overflow.
  ENDTRY.
ENDDO.
cl\_demo\_output=>display( output ).

[Exceptions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_exceptions.htm)

Handleable Exceptions

CX\_SY\_ARG\_OUT\_OF\_DOMAIN

-   Cause: Illegal argument in powers
    Runtime error: COMPUTE\_POW\_DOMAIN
    

CX\_SY\_ARITHMETIC\_OVERFLOW

-   Cause: Overflow in arithmetic operation (type p)
    Runtime error: BCD\_OVERFLOW
    
-   Cause: Overflow in arithmetic operation (all operands type p)
    Runtime error: COMPUTE\_BCD\_OVERFLOW
    
-   Cause: Overflow in cosh
    Runtime error: COMPUTE\_COSH\_OVERFLOW
    
-   Cause: Overflow or underflow in exp
    Runtime error: COMPUTE\_EXP\_RANGE
    
-   Cause: Overflow in addition (type decfloat)
    Runtime error: COMPUTE\_DECFLOAT\_ADD\_OVERFLOW
    
-   Cause: Overflow in subtraction (type decfloat)
    Runtime error: COMPUTE\_DECFLOAT\_SUB\_OVERFLOW
    
-   Cause: Overflow in multiplication (type decfloat)
    Runtime error: COMPUTE\_DECFLOAT\_MUL\_OVERFLOW
    
-   Cause: Overflow in division (type decfloat)
    Runtime error: COMPUTE\_DECFLOAT\_DIV\_OVERFLOW
    
-   Cause: Overflow in division (type decfloat)
    Runtime error: COMPUTE\_DECFLOAT\_DIV\_OVERFLOW
    
-   Cause: Overflow in division (type f)
    Runtime error: COMPUTE\_FLOAT\_DIV\_OVERFLOW
    
-   Cause: Overflow in subtraction (type f)
    Runtime error: COMPUTE\_FLOAT\_MINUS\_OVERFLOW
    
-   Cause: Overflow in addition (type f)
    Runtime error: COMPUTE\_FLOAT\_PLUS\_OVERFLOW
    
-   Cause: Overflow in multiplication (type f)
    Runtime error: COMPUTE\_FLOAT\_TIMES\_OVERFLOW
    
-   Cause: Overflow in |-2147483648|
    Runtime error: COMPUTE\_INT\_ABS\_OVERFLOW
    
-   Cause: Integer overflow in division
    Runtime error: COMPUTE\_INT\_DIV\_OVERFLOW
    
-   Cause: Integer overflow after subtraction
    Runtime error: COMPUTE\_INT\_MINUS\_OVERFLOW
    
-   Cause: Integer overflow while adding
    Runtime error: COMPUTE\_INT\_PLUS\_OVERFLOW
    
-   Cause: Integer overflow in multiplication
    Runtime error: COMPUTE\_INT\_TIMES\_OVERFLOW
    
-   Cause: Invalid call of log10
    Runtime error: COMPUTE\_LOG10\_ERROR
    
-   Cause: Invalid call of log
    Runtime error: COMPUTE\_LOG\_ERROR
    
-   Cause: Overflow or underflow in powers
    Runtime error: COMPUTE\_POW\_RANGE
    
-   Cause: Overflow in sinh
    Runtime error: COMPUTE\_SINH\_OVERFLOW
    
-   Cause: Overflow in function round or rescale
    Runtime error: COMPUTE\_ROUND\_RESCALE\_OVERFLOW
    

CX\_SY\_CONVERSION\_NO\_NUMBER

-   Cause: Operand cannot be interpreted as a number
    Runtime error: CONVT\_NO\_NUMBER
    

CX\_SY\_CONVERSION\_OVERFLOW

-   Cause: Overflow in arithmetic operation (type p, with specified length)
    Runtime error: BCD\_FIELD\_OVERFLOW
    
-   Cause: Operand too big or (interim) result too big
    Runtime error: CONVT\_OVERFLOW
    

CX\_SY\_PRECISION\_LOSS

-   Cause: Result of cos not exact
    Runtime error: COMPUTE\_COS\_LOSS
    
-   Cause: Result of sin not exact
    Runtime error: COMPUTE\_SIN\_LOSS
    
-   Cause: Result of tan not exact
    Runtime error: COMPUTE\_TAN\_LOSS
    

CX\_SY\_UNSUPPORTED\_FUNCTION

-   Cause: Invalid function for calculation type decfloat34
    Runtime error: COMPUTE\_UNSUPPORTED\_DECF\_FUNC
    

CX\_SY\_ZERODIVIDE

-   Cause: Division by 0 (type p)
    Runtime error: BCD\_ZERODIVIDE
    
-   Cause: Division by 0 (type f)
    Runtime error: COMPUTE\_FLOAT\_ZERODIVIDE
    
-   Cause: Division by 0 (types (b, s), i, int8)
    Runtime error: COMPUTE\_INT\_ZERODIVIDE
    
-   Cause: Division by 0 (type decfloat)
    Runtime error: COMPUTE\_DECFLOAT\_ZERODIVIDE
    

Non-Handleable Exceptions

-   Cause: p field does not contain the correct BCD format
    Runtime error: BCD\_BADDATA
    
-   Cause: p field does not contain a correct sign
    Runtime error: BCD\_NO\_SIGN
    

Continue
[arith\_exp - Arithmetic Operators](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarith_operators.htm)
[arith\_exp - ( )](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarith_brackets.htm)
[arith\_exp - Calculation Type and Calculation Rules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarith_type.htm)
[arith\_exp - Lossless Calculations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlossless_calculation.htm)