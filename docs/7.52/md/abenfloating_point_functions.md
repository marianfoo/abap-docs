  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencompute_expressions.htm) →  [Numerical Functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmathematical_functions.htm) → 

acos, sin, tanh, exp, log, sqrt - Floating Point Functions

The following table shows the floating point functions that expect a [floating point number](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfloating_point_number_2_glosry.htm "Glossary Entry") as an unnamed argument. Floating point functions are overloaded so that the return code can have the type decfloat34 or f. [Decimal floating point numbers](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendecfloat_glosry.htm "Glossary Entry") are still only possible as arguments of exp, log, log10, and sqrt.

Syntax

... func( arg ) ...

Effect

The argument of a floating point function must be a single data object outside an arithmetic expression and can be an arithmetic expression itself within an arithmetic expression.

Effect of the floating point functions:

Function func

Meaning

Definition Range

acos

arccosine

\[-1,1\], no decfloat34

asin

arcsine

\[-1,1\], no decfloat34

atan

arctangent

\-, no decfloat34

cos

cosine

\-, no decfloat34

sin

sine

\-, no decfloat34

tan

tangent

\-, no decfloat34

cosh

hyperbolic cosine

\-, no decfloat34

sinh

hyperbolic sine

\-, no decfloat34

tanh

hyperbolic tangent

\-, no decfloat34

exp

Exponential function for base e

\[-709, 709\] for type f and \[-14144, 14149\] for type decfloat34

log

Natural logarithm

\> 0

log10

Logarithm to base 10

\> 0

sqrt

Square root

\>= 0

Functions that specify "no decfloat34" cannot currently have the [calculation type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencalculation_type_glosry.htm "Glossary Entry") decfloat34. If one of these functions is specified in an expression with this calculation type, a syntax error occurs or the exception CX\_SY\_UNSUPPORTED\_FUNCTION is raised.

The following applies to the [floating point arithmetic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfloating_point_arith_glosry.htm "Glossary Entry") in which a floating point function is calculated, and to the data type of the return code:

-   If the argument has the type decfloat16 or decfloat34, a floating point function is calculated in decimal floating point arithmetic and the return code has the type decfloat34.

-   If a floating point function is used in an [arithmetic expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") whose [calculation type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencalculation_type_glosry.htm "Glossary Entry") is decfloat34, or that contains a [numeric expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumerical_expression_glosry.htm "Glossary Entry") of type decfloat34 as an argument, it also calculates a return code with the type decfloat34 and the argument is first converted to the data type decfloat34, if necessary.

-   In all other cases, floating point functions use binary floating point arithmetic to calculate a return code with type f and the argument is first converted to the data type f, if necessary.

Functions with a definition range require the value of arg to be within the specified limits. Arguments within the definition ranges are guaranteed to be error-free for the exponential function exp, since the results are then within the [value ranges](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_range_glosry.htm "Glossary Entry") for [binary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbinfloat_glosry.htm "Glossary Entry") or [decimal](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendecfloat_glosry.htm "Glossary Entry") [floating point numbers](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfloating_point_number_2_glosry.htm "Glossary Entry") in accordance with IEEE-754. For arguments less than -709, the result for binary floating point numbers is (depending on the platform) a subnormal number, 0, or a handleable exception of the class CX\_SY\_ARITHMETIC\_OVERFLOW is raised from a specific value.

The trigonometric functions sin, cos, and tan are defined for any arguments but the results become imprecise if the argument is greater than approximately 100,000,000.

Notes

-   The atan function is undefined for odd number multiples of pi/2, but the definition range of atan is nevertheless restricted since an argument of this function can never contain the precise value of pi/2.

-   The functions described here are some of the functions that can be used in the obsolete [extended functional operand positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenextended_functional_positions.htm), even if their argument is a single data object.

Example

The results in the internal table should all have the value 1 or a value very close to this.

DATA itab TYPE TABLE OF f WITH EMPTY KEY.
itab = VALUE #( FOR i = 0 UNTIL i > 64
                LET n = CONV f( i / 10 ) IN
                ( sin( n ) \*\* 2 + cos( n ) \*\* 2 ) ).
cl\_demo\_output=>display( itab ).

[Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_exceptions.htm)

Handleable Exceptions

CX\_SY\_ARG\_OUT\_OF\_DOMAIN

-   Cause: Invalid call of acos
    Runtime error: COMPUTE\_ACOS\_DOMAIN
    
-   Cause: Invalid call of asin
    Runtime error: COMPUTE\_ASIN\_DOMAIN
    
-   Cause: Invalid call of cos
    Runtime error: COMPUTE\_COS\_DOMAIN
    
-   Cause: Invalid call of log10
    Runtime error: COMPUTE\_LOG10\_ERROR
    
-   Cause: Invalid call of log
    Runtime error: COMPUTE\_LOG\_ERROR
    
-   Cause: Invalid call of sin
    Runtime error: COMPUTE\_SIN\_DOMAIN
    
-   Cause: Invalid call of sqrt
    Runtime error: COMPUTE\_SQRT\_DOMAIN
    
-   Cause: Invalid call of tan
    Runtime error: COMPUTE\_TAN\_DOMAIN