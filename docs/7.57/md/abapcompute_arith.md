  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Numeric Calculations](javascript:call_link\('abencompute_expressions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Arithmetic Expressions \(arith_exp\), ABAPCOMPUTE_ARITH, 757%0D%0A%0D%0AError:%0D%0A%0D
%0A%0D%0A%0D%0ASuggestion for improvement:)

Arithmetic Expressions (arith\_exp)

[Short Reference](javascript:call_link\('abenarith_exp_shortref.htm'\))

Syntax

... *\[*+*|*\-*\]* operand1
    *\[**{*[+*|*\-*|*\**|*/*|*DIV*|*MOD*|*\*\*](javascript:call_link\('abenarith_operators.htm'\))*}* *\[*+*|*\-*\]* operand2
    *\[**{*[+*|*\-*|*\**|*/*|*DIV*|*MOD*|*\*\*](javascript:call_link\('abenarith_operators.htm'\))*}* *\[*+*|*\-*\]* operand3
    ... *\]**\]* ...

Effect

An arithmetic expression expresses a calculation. The result of an arithmetic expression is a numeric value that exists in the [calculation type](javascript:call_link\('abenarith_type.htm'\)) that is assigned to the arithmetic expression. In an arithmetic expression arith\_exp, the [arithmetic operators](javascript:call_link\('abenarith_operators.htm'\)) +, \-, \*, /, DIV, MOD, or \*\* can be used to combine an operand operand1 with one or more operands operand2, operand3 ... [Brackets](javascript:call_link\('abenarith_brackets.htm'\)) are also possible. The calculation is based on [calculation rules](javascript:call_link\('abenarith_type.htm'\)) that depend on the respective calculation type.

Arithmetic expressions can occur in the read positions of [certain statements](javascript:call_link\('abenexpression_positions.htm'\)), in particular on the right side of an [assignment](javascript:call_link\('abenequals_arith_expr.htm'\)) with the [assignment operator \=](javascript:call_link\('abenequals_operator.htm'\)). When used as the operand of the lossless operator EXACT, an arithmetic expression can be checked for a [lossless calculation](javascript:call_link\('abenlossless_calculation.htm'\)).

The operand positions operand are [general expression positions](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry"), that is, numeric data objects, [built-in functions](javascript:call_link\('abenbuilt_in_functions.htm'\)), [functional methods](javascript:call_link\('abapmethods_functional.htm'\)), or compound arithmetic expressions can be specified. The arithmetic operators +, \-, \*, /, DIV, MOD, and \*\* combine two adjacent operands. When the expression is evaluated, a numeric value is calculated and combined with the next adjacent operand. The priority of this combination depends on the [operators](javascript:call_link\('abenarith_operators.htm'\)) used.

Each operand can be preceded by the signs + or \-, in any order and separated by one or more blanks. The effect of a plus/minus sign is the same as specifying the expression +1 \* or \-1 \* in its place, which means that a sign has the same priority as a multiplication.

If [functional methods](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry") or [character-like expressions](javascript:call_link\('abencharlike_expression_glosry.htm'\) "Glossary Entry") are specified as operands, they are executed from left to right and from inside to outside before the remainder of the expression is evaluated. The return values are buffered for use in the corresponding operand positions. Here, [character-like processing functions](javascript:call_link\('abenprocess_functions.htm'\)) and [string expressions](javascript:call_link\('abapcompute_string.htm'\)) are only possible as arguments of [description functions](javascript:call_link\('abendescriptive_functions.htm'\)).

Hints

-   It should be ensured that the value of a data object that is also used as an operand is changed in a specified functional method. Even if such an operand is to the left of the functional method, its value will always be changed by the method before it is evaluated.
-   Arithmetic expressions, [string expressions](javascript:call_link\('abenstring_expression_glosry.htm'\) "Glossary Entry"), and [bit expressions](javascript:call_link\('abenbit_expression_glosry.htm'\) "Glossary Entry") cannot be combined. Built-in functions that are used as operands for arithmetic expressions can, however, contain string expressions or bit expressions as arguments.
-   If an [arithmetic expression](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry") is specified as an argument of one of the overloaded [numeric functions](javascript:call_link\('abenmathematical_functions.htm'\)), the entire function works like an arithmetic expression.
-   A simple arithmetic expression +*|*\- literal, which is comprised of an operator +*|*\-, a blank, and an unsigned [numeric literal](javascript:call_link\('abennumeric_literal_glosry.htm'\) "Glossary Entry") literal, has the same value as the corresponding numeric literal +*|*\-literal prefixed directly with a plus/minus sign. However, since the expression is handled like an expression and always evaluated at runtime, the numeric literal should always be used in these cases for performance reasons.
-   The above rule specifying how [functional methods](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry") or [character-like expressions](javascript:call_link\('abencharlike_expression_glosry.htm'\) "Glossary Entry") are evaluated might lead to unexpected results.

Example

The following program section calculates the hyperbolic sine with the Eulerian formula in the explicit calculation type decfloat34 and with the [built-in function](javascript:call_link\('abenbuiltin_function_glosry.htm'\) "Glossary Entry") sinh in the implicit calculation type f and displays the difference.

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
      FINAL(x) = sy-index - 1001.
      FINAL(result1) = CONV decfloat34(
                             ( exp( x ) - exp( -1 \* x ) ) / 2 ).
      FINAL(result2) =  sinh( x ).
      FINAL(diff)    =  abs( result1 - result2 ).
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

Example

The following program demonstrates the rule specifying how [functional methods](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry") are evaluated in arithmetic expressions. The first calculation sets the variable changing to 6 and returns the expected result of 9. The result of the second calculation is 15 and not 10 as might be expected. The functional method is called first and its result 9 is added to the changed value 6 of variable changing and not to its initial value 1.

CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS meth
      IMPORTING i\_par        TYPE i
      CHANGING  c\_par        TYPE i OPTIONAL
      RETURNING VALUE(r\_par) TYPE i.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD meth.
    c\_par = i\_par + c\_par.
    r\_par = i\_par + 4.
  ENDMETHOD.
ENDCLASS.
DATA changing TYPE  i.
START-OF-SELECTION.
  changing = 1.
  FINAL(result1) = demo=>meth( EXPORTING i\_par = 5
                              CHANGING  c\_par = changing ).
  cl\_demo\_output=>write( |changing: { changing }\\n| &
                         |result1:  { result1 }| ).
  changing = 1.
  FINAL(result2) = changing + demo=>meth( EXPORTING i\_par = 5
                                         CHANGING  c\_par = changing ).
  cl\_demo\_output=>write( |changing: { changing }\\n| &
                         |result2:  { result2 }| ).
  cl\_demo\_output=>display( ).

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Catchable Exceptions

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

Uncatchable Exceptions

-   Cause: p field does not contain the correct BCD format
    Runtime error: BCD\_BADDATA
-   Cause: p field does not contain a correct sign
    Runtime error: BCD\_NO\_SIGN

Continue
[arith\_exp - Arithmetic Operators](javascript:call_link\('abenarith_operators.htm'\))
[arith\_exp - ( )](javascript:call_link\('abenarith_brackets.htm'\))
[arith\_exp - Calculation Type and Calculation Rules](javascript:call_link\('abenarith_type.htm'\))
[arith\_exp - Lossless Calculations](javascript:call_link\('abenlossless_calculation.htm'\))