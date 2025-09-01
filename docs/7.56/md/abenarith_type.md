  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Numeric Calculations](javascript:call_link\('abencompute_expressions.htm'\)) →  [Arithmetic Expressions (arith\_exp)](javascript:call_link\('abapcompute_arith.htm'\)) → 

arith\_exp - Calculation Type and Calculation Rules

An arithmetic expression is assigned a calculation type that defines the calculation rules for the arithmetic expression. The calculation type is determined at program runtime from the data types involved that can be identified. The calculation type only needs to be determined statically if the target field is an [inline declaration](javascript:call_link\('abeninline_declaration_glosry.htm'\) "Glossary Entry"), where generically type operands are included using a [standard type](javascript:call_link\('abenstandard_type_glosry.htm'\) "Glossary Entry").

-   [Determining the Calculation Type](#@@ITOC@@ABENARITH_TYPE_1)
-   [Calculation Rules for Calculation Type](#@@ITOC@@ABENARITH_TYPE_2)
-   [Handling the Result](#@@ITOC@@ABENARITH_TYPE_3)

Determining the Calculation Type

The calculation type corresponds to one of the numeric data types i, int8, p, f, or decfloat34. It is determined by the following hierarchy, and in the order of decreasing priority:

1.  If one of the data types involved is decfloat16 or decfloat34, the calculation type is decfloat34.

1.  If one of the data types involved is f or if the operator \*\* is used, the calculation type is f.

1.  If one of the data types involved is p, the calculation type is p.

1.  If one of the data types involved is int8, the calculation type is int8.

1.  If one of the data types involved is i, (b or s), the calculation type is i.

The data type that has the largest [value range](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) therefore determines the calculation type with the exception that each [decimal floating point number](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry") produces the calculation type decfloat34, and that use of the operator \*\* is handled like a data type of type f.

Involved data types include:

-   The right side of an [assignment](javascript:call_link\('abenequals_arith_expr.htm'\)) in arithmetic expressions:
    -   If it is not an inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)), the data types of all operands of the entire arithmetic expressions, and the data type of the result field result.
    -   If result is an inline declaration, the calculation type derived from the data types of the arithmetic expression determines the data type of the declared variable. Here, a calculation type p always produces the data type p with length 8 and no decimal places.
-   as the operand of a [relational expression](javascript:call_link\('abenrelational_expression_glosry.htm'\) "Glossary Entry") in an arithmetic expression, the data types of all operands of the entire relational expression. The calculation type of each arithmetic expression involved is not created first and the [comparison type](javascript:call_link\('abencomparison_type_glosry.htm'\) "Glossary Entry") then derived. All operands of the relational expression contribute to the calculation type, which is also the comparison type, regardless of the arithmetic expressions they belong to.
-   in an arithmetic expression after the statement [CASE](javascript:call_link\('abapcase.htm'\)), the operands of the arithmetic expression, ignoring the operands specified after WHEN.
-   as [actual parameters](javascript:call_link\('abentyping_arith_expr.htm'\)) for [input parameters](javascript:call_link\('abeninput_parameter_glosry.htm'\) "Glossary Entry") of [methods](javascript:call_link\('abenmethod_glosry.htm'\) "Glossary Entry") in an arithmetic expression, the data types of all operands of the entire arithmetic expression and the [typing](javascript:call_link\('abentyping_glosry.htm'\) "Glossary Entry") of the formal parameter, provided that it is completely typed. If the formal parameter is typed generically, then only the operands of the expression are evaluated.
-   as [actual parameters](javascript:call_link\('abentyping_arith_expr.htm'\)) for [input parameters](javascript:call_link\('abeninput_parameter_glosry.htm'\) "Glossary Entry") of [function modules](javascript:call_link\('abenfunction_module_glosry.htm'\) "Glossary Entry"), the data types of all operands of the entire arithmetic expression. The typing of the formal parameter is ignored.
-   as an argument of a built-in function in an arithmetic expression, the data types of all operands of the entire arithmetic expression and the type of the input parameter, if it is fully determined. An overloaded [numeric function](javascript:call_link\('abenmathematical_functions.htm'\)) that contains an arithmetic expression as an argument, on the other hand, acts like an arithmetic operator and is handled in its position like an arithmetic expression.
-   as an [embedded expression](javascript:call_link\('abenembedded_expression_glosry.htm'\) "Glossary Entry") in a [string template](javascript:call_link\('abenstring_template_glosry.htm'\) "Glossary Entry") in an arithmetic expression, only the operands of the expression are evaluated.
-   as an argument in a [constructor expression](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry") in an arithmetic expression, the calculation type is determined as in an [assignment](javascript:call_link\('abenequals_arith_expr.htm'\)). The left side of the assignment is either the result of the constructor expression with the type [type](javascript:call_link\('abenconstructor_expressions.htm'\)) specified in front of the parentheses or a structure component.

For operands with complete numeric data types, this data type is used. Operands with other data types are handled as follows:

-   d and t as i
-   c, n, and string as p
-   x and xstring as i
-   utclong is not allowed

In the case of operands that are not specified as data objects, the type is determined as follows:

-   In the case of operands that are specified as non-overloaded [integrated functions](javascript:call_link\('abenbuiltin_function_glosry.htm'\) "Glossary Entry"), the data type of the return value applies.
-   Operands of overloaded [general numeric functions](javascript:call_link\('abennumerical_functions.htm'\)), and of the overloaded power function [ipow](javascript:call_link\('abenpower_function.htm'\)), are used to determine the calculation type.
-   When a [floating point function](javascript:call_link\('abenfloating_point_functions.htm'\)) is used, the calculation type is either decfloat34 or f.
-   In the case of operands specified as [functional method calls](javascript:call_link\('abapcall_method_functional.htm'\)), the data type of the return value applies.
-   In the case of operands specified as [constructor expressions](javascript:call_link\('abenconstructor_expressions.htm'\)), the data type specified by type here applies. The arithmetic expression itself, however, does not determine the type of the constructor expression. If constructor expressions are used as operands of arithmetic expressions, the # character can only be specified for the data type of the constructor expression if the type can be determined from the constructor expression itself.
-   In the case of operands specified as [table expressions](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry"), the data type of the result applies.
-   If operands are specified as generically typed field symbols or formal parameters and an existing variable is used as the target field of an [assignment](javascript:call_link\('abenequals_arith_expr.htm'\)), these operands contribute to the calculation type assigned to them at runtime with their data type.
-   If operands are specified as generically typed field symbols or formal parameters and an inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)) is used as the target field of an [assignment](javascript:call_link\('abenequals_arith_expr.htm'\)), the generic types contribute to the statically known calculation type, from which the data type of the declaration is determined as follows:
    
    -   any, data, simple, numeric, and decfloat like decfloat34
    -   csequence, clike, c, n, and p and f. If there is no involved type with a higher priority, type p with length 8 and without decimal places is used for the declaration.
    -   xsequence and x like i
    
    The calculation type determined at runtime from all operands including the target field always matches the data type of the variable declared inline, because this is always the data type with the greatest value range.
    

Hints

-   The determination of a calculation type before the calculation is performed and while respecting all operands including the result field (as the right side of an [assignment](javascript:call_link\('abenequals_arith_expr.htm'\)) or as an actual parameter in the case of an arithmetic expression) is a special ABAP feature that differs considerably from how other programming languages perform calculations. To avoid unnecessary conversions, all operands and a result field should have the same numeric data type.
-   In the case of arithmetic expressions as operands of [relational expressions](javascript:call_link\('abenrelational_expression_glosry.htm'\) "Glossary Entry") in [logical expressions](javascript:call_link\('abenlogical_expression_glosry.htm'\) "Glossary Entry") combined using [Boolean operators](javascript:call_link\('abenboolean_operator_glosry.htm'\) "Glossary Entry"), the rule above only applies to the relational expression in question. The calculation type is not determined while skipping the Boolean operators AND, OR, or EQUIV.
-   If the calculation type is f, it should be ensured that the precision is only approximately 15 places and integers are only represented accurately up to an absolute value of 2\*\*53, that is, 9,007,199,254,740,992. Other interim results are rounded. This is especially important when using the operator \*\*, which can produce the calculation type f if no decimal floating point number is involved.
-   To avoid that the operator \*\* produces the calculation type f, the built-in function [ipow](javascript:call_link\('abenpower_function.htm'\)) can be used for integer exponents, for which the calculation type is determined by the argument.
-   The time stamp type utclong cannot be converted implicitly to a numeric type, and therefore cannot be specified directly as an operand of an arithmetic expression.
-   The conversion operator [CONV](javascript:call_link\('abenconstructor_expression_conv.htm'\)) can be used to convert parts of arithmetic expressions to other types and hence modify the calculation type.
-   A calculation type p in [assignments](javascript:call_link\('abenequals_arith_expr.htm'\)) to an inline declaration can produce the data type p with length 8 and no decimal places, which can produce unexpected results and raise exceptions. It is best to either avoid inline declarations when using the calculation type p or to determine the data type by applying the conversion operator [CONV](javascript:call_link\('abenconstructor_expression_conv.htm'\)) to the arithmetic expression.

Example

The calculation type of the following arithmetic expression is f. Accordingly, a data object of the type f is declared in the inline declaration.

DATA(result) = 2 \*\* 10.
DESCRIBE FIELD result TYPE DATA(t).
cl\_demo\_output=>display( |{ result } of type { t }| ).

Calculation Rules for Calculation Type

Before the calculation is performed, all operands for which it is necessary are converted to the calculation type, in accordance with the [conversion rules for elementary data types](javascript:call_link\('abenconversion_elementary.htm'\)).

The calculation type determines the calculation method and the calculation precision:

-   Calculation types i and int8
    
    The arithmetic expression is calculated using integer arithmetic, in which each interim result that is not an integer (after a division) is rounded commercially to the nearest integer. Each interim result must be in the [value range](javascript:call_link\('abenbuiltin_types_numeric.htm'\)) of the data type i or int8, otherwise the catchable exception CX\_SY\_ARITHMETIC\_OVERFLOW is raised.
    
-   Calculation type p
    
    Fixed point arithmetic. The arithmetic expression is calculated with an internal precision of 31 [places](javascript:call_link\('abenplace_glosry.htm'\) "Glossary Entry") and a special decimal floating point arithmetic for interim results. During the calculation, the decimal point for numbers of type p is not fixed. If an overflow occurs because an interim result is greater than 10^31 - 1, the whole expression is recalculated to an internal precision of 63 places, or a maximum value of 10^63 -1 for interim results. If another overflow occurs, the catchable exception CX\_SY\_ARITHMETIC\_OVERFLOW is raised. An overflow always occurs if the level of precision is not sufficient for all integral digits before the decimal separator. Surplus [decimal places](javascript:call_link\('abendecimal_place_glosry.htm'\) "Glossary Entry") do not raise an exception but are rounded commercially to the nearest whole number for each interim result.
    
-   Calculation type f
    
    The arithmetic expression is calculated using the binary floating point arithmetic of the current platform. Each interim result must be in [value range](javascript:call_link\('abenbuiltin_types_numeric.htm'\)) of the data type f, otherwise the catchable exception CX\_SY\_ARITHMETIC\_OVERFLOW is raised. Since the decimal places of a floating point number are represented internally using a dual fraction, there is not an exact equivalent for every number that can be represented in the decimal system, which can produce rounding errors in the interim results.
    
-   Calculation type decfloat34
    
    The arithmetic expression is calculated with decimal floating point arithmetic according to norm IEEE-754-2008, where division by 0 does not raise an exception if the dividend is 0 as for all calculation types. Each interim result must be in [value range](javascript:call_link\('abenbuiltin_types_numeric.htm'\)) of the data type decfloat34, otherwise the catchable exception CX\_SY\_ARITHMETIC\_OVERFLOW is raised. Interim results are rounded commercially to the nearest whole number. The [scaling](javascript:call_link\('abenscale_glosry.htm'\) "Glossary Entry") of each interim result is defined so that the smallest possible exponent is selected if the result is not precise, and the following procedure is used to determine the scaling if the result is precise:
    
    -   For addition and subtraction, the exponent of the result is the smaller of the exponents of the two operands.
    -   For multiplication, the exponent of the result is the sum of the exponents of the two operands.
    -   For division, the exponent of the result is the difference between the exponents of the dividend and of the divisor.
    -   If the sqrt function is used, the exponent is the integer part of half of the exponent of the operand.

Hint

Commercial rounding of interim results in the calculation types i, int8, p, and decfloat34 is a characteristic that distinguishes ABAP greatly from other programming languages where the decimal places are usually cut off rather than rounded. This can produce different results, in particular in divisions with the calculation types i.

Example

The result of the second arithmetic expression is 0. The calculation type is i and the interim results of each division are rounded to 0. The result of the second arithmetic expression is 0.9999999999999999999999999999999999. The calculation type decfloat34 and the interim results 0.3333333333333333333333333333333333 are not rounded. The outer conversion operator [CONV](javascript:call_link\('abenconstructor_expression_conv.htm'\)) creates the integer 1 from this data.

DATA(result1) =  1 / 3 + 1 / 3 + 1 / 3.
DATA(result2) =  CONV i( CONV decfloat34( 1 / 3 + 1 / 3 + 1 / 3 ) ).
cl\_demo\_output=>display( |{ result1 }, { result2 }| ).

Handling the Result

After the calculation is performed, the result of the arithmetic expression is handled as follows:

-   In the case of an arithmetic expression as the right side of an [assignment](javascript:call_link\('abenequals_arith_expr.htm'\)) to an existing data object, the result is converted to the data type of the result field if the calculation type is different.
-   With an arithmetic expression on the right side of an [assignment](javascript:call_link\('abenequals_arith_expr.htm'\)) to an inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)), the statically known calculation type of variable var, whereby generically typed field symbols and formal parameters are included with the [standard type](javascript:call_link\('abenstandard_type_glosry.htm'\) "Glossary Entry") described above. In the case of the calculation type p, the data type of the declared variable is always p with the length 8 without decimal places.
-   In the case of an arithmetic expression as an operand of a relational expression, no conversion takes place, since the calculation type and the comparison type are identical.
-   In the case of an arithmetic expression as an actual parameter for input values of methods, and if the formal parameter is completely typed, the result is converted into the formal parameter type in the static method call and passed. If the formal parameter is generically typed, it inherits the calculation type, where in the case of calculation type p, the number of decimal places is determined based on the precision required in the calculation.

Example

Calculation type f of the following arithmetic expression is [converted](javascript:call_link\('abenconversion_type_f.htm'\)) to string, whereby the value is formatted in [scientific notation](javascript:call_link\('abenscientific_notation_glosry.htm'\) "Glossary Entry"). After the assignment, the text string contains the character string 1.0240000000000000E+03.

DATA result TYPE string.
result = 2 \*\* 10.
cl\_demo\_output=>display( result ).