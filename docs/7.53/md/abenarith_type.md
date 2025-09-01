---
title: "Determining the Calculation Type"
description: |
  The calculation type corresponds to one of the numeric data types i, int8, p, f, or decfloat34. It is determined according to the following hierarchy, and in this order of priority: 1.  If one of the data types in question is decfloat16 or decfloat34, the calculation type is decfloat34. 2.  If one o
version: "7.53"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarith_type.htm"
abapFile: "abenarith_type.htm"
keywords: ["select", "do", "while", "if", "case", "try", "method", "data", "types", "field-symbol", "abenarith", "type"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencompute_expressions.htm) →  [arith\_exp - Arithmetic Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_arith.htm) → 

arith\_exp - Calculation Type and Calculation Rules

An arithmetic expression is assigned a calculation type that specifies the calculation rules for the expression. The calculation type is determined at program runtime from those data types involved that can be identified. The calculation type only needs to be determined statically if the target field is an [inline declaration](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninline_declaration_glosry.htm "Glossary Entry"), where generically type operands are included using a [standard type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstandard_type_glosry.htm "Glossary Entry").

-   [Determining the Calculation Type](#abenarith-type-1--------calculation-rules-for-calculation-type---@ITOC@@ABENARITH_TYPE_2)

-   [Handling the Result](#@@ITOC@@ABENARITH_TYPE_3)

Determining the Calculation Type

The calculation type corresponds to one of the numeric data types i, int8, p, f, or decfloat34. It is determined according to the following hierarchy, and in this order of priority:

1.  If one of the data types in question is decfloat16 or decfloat34, the calculation type is decfloat34.
    
2.  If one of the data types in question is f or if the operator \*\* is used, the calculation type is f.
    
3.  If one of the data types in question is p, the calculation type is p.
    
4.  If one of the data types in question is int8, the calculation type is int8.
    
5.  If one of the data types in question is i, (b or s), the calculation type is i.

The data type that has the largest [value range](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuilt_in_types_complete.htm) therefore determines the calculation type. An exception to this is that each [decimal floating point number](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendecfloat_glosry.htm "Glossary Entry") produces the calculation type decfloat34, and that using the operator \*\* is handled like a data type of type f.

Involved data types include:

-   The right side of an [assignment](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenequals_arith_expr.htm) in arithmetic expressions:

-   If it is not an inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_inline.htm), the data types of all operands of the full arithmetic expressions, and the data type of the result field result.

-   If result is an inline declaration, the calculation type derived from the data types of the arithmetic expression determines the data type of the declared variable. Here, a calculation type p always produces the data type p with length 8 and no decimal places.

-   as the operand of a [relational expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrelational_expression_glosry.htm "Glossary Entry") in an arithmetic expression, the data types of all operands of the entire relational expression. The approach taken does not involve first determining the calculation type of each arithmetic expression in question and then deriving the [comparison type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencomparison_type_glosry.htm "Glossary Entry"). All operands of the relational expression are used to determine the calculation type (which is also the comparison type) regardless of the arithmetic expressions they belong to.

-   in an arithmetic expression after the statement [CASE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcase.htm), the operands of the arithmetic expression, ignoring the operands specified after WHEN.

-   as [actual parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_arith_expr.htm) for [input parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninput_parameter_glosry.htm "Glossary Entry") of [methods](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmethod_glosry.htm "Glossary Entry") in an arithmetic expression, the data types of all operands of the whole arithmetic expression and the [typing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_glosry.htm "Glossary Entry") of the formal parameter, provided that it is fully typed. If the formal parameter is typed generically, then only the operands of the expression are evaluated.

-   as [actual parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_arith_expr.htm) for [input parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninput_parameter_glosry.htm "Glossary Entry") of [function modules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunction_module_glosry.htm "Glossary Entry"), the data types of all operands of the entire arithmetic expression. The typing of the formal parameter is ignored.

-   as an argument of a built-in function in an arithmetic expression, the data types of all operands of the entire arithmetic expression and the type of the input parameter, if determined in full. An overloaded [numeric function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmathematical_functions.htm) containing an arithmetic expression as an argument, on the other hand, operates like an arithmetic operator and is handled in its position like an arithmetic expression.

-   as an [embedded expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenembedded_expression_glosry.htm "Glossary Entry") in a [string template](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_template_glosry.htm "Glossary Entry") in an arithmetic expression, only the operands of the expression are evaluated.

-   as an argument in a [constructor expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_glosry.htm "Glossary Entry") in an arithmetic expression, the calculation type is determined as in an [assignment](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenequals_arith_expr.htm). The left side of the assignment is either the result of the constructor expression with the type [type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expressions.htm) specified in front of the parentheses or a structure component.

For operands with complete numeric data types, this data type is used. Operands with other data types are handled as follows:

-   d and t as i

-   c, n, and string as p

-   x and xstring as i

In the case of operands not specified as data objects, the type is determined as follows:

-   In the case of operands specified as non-overloaded [integrated functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpredefined_function_glosry.htm "Glossary Entry"), the data type of the return value applies.

-   Operands belonging to overloaded [general numeric functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennumerical_functions.htm), and to the overloaded power function [ipow](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpower_function.htm), are used to determine the calculation type.

-   When a [floating point function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfloating_point_functions.htm) is used, the calculation type is either decfloat34 or f.

-   In the case of operands specified as [functional method calls](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_functional.htm), the data type of the return value applies.

-   In the case of operands specified as [constructor expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expressions.htm), the data type specified by type here applies. The arithmetic expression itself, however, does not determine the type of the constructor expression. If constructor expressions are used as operands of arithmetic expressions, the # character can only be specified for the data type of the constructor expression if the type can be determined from the constructor expression itself.

-   In the case of operands specified as [table expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_expression_glosry.htm "Glossary Entry"), the data type of the result applies.

-   If operands are specified as generically typed field symbols or formal parameters and an existing variable is used as the target field of an [assignment](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenequals_arith_expr.htm), these operands (together with the data type) contribute to the calculation type assigned to them at runtime.

-   If operands are specified as generically typed field symbols or formal parameters and an inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_inline.htm) is used as the target field of an [assignment](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenequals_arith_expr.htm), the generic types contribute to the statically known calculation type (used to determine the data type of the declaration) as follows.

-   any, data, simple, numeric, and decfloat like decfloat34

-   csequence, clike, c, n, and p like p. If no type with a higher priority is involved, the type p with length 8 and no decimal places is used for the declaration.

-   xsequence and x like i

The calculation type determined at runtime from all operands (including the target field) always matches the data type of the variable declared inline, because this is always the data type with the greatest value range.

Notes

-   The way a calculation type is identified before the calculation and respecting all operands including the result field (as the right side of an [assignment](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenequals_arith_expr.htm) or as an actual parameter in the case of an arithmetic expression) is a special ABAP feature that differs considerably from the way in which other programming languages perform calculations. To avoid unnecessary conversions, all operands and one result field should have the same numeric data type.

-   In the case of arithmetic expressions used as operands of [relational expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrelational_expression_glosry.htm "Glossary Entry") in [logical expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogical_expression_glosry.htm "Glossary Entry") joined using [Boolean operators](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenboolean_operator_glosry.htm "Glossary Entry"), the rule above only ever applies to the relational expression in question. The calculation type is not determined while skipping the Boolean operators AND, OR, or EQUIV.

-   If the calculation type is f, the accuracy is only approximately 15 places and integers are only represented accurately up to an absolute value of 2\*\*53 (that is, 9,007,199,254,740,992). Other subtotals are rounded. This is especially important when using the operator \*\*, which can produce the calculation type f if no decimal floating point number is involved.

-   To stop the operator \*\* producing the calculation type f, the built-in function [ipow](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpower_function.htm) can be used for integer exponents. Here, the calculation type is determined by the argument.

-   The conversion operator [CONV](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_conv.htm) can be used to convert parts of arithmetic expressions to other types and hence modify the calculation type.

-   A calculation type p in [assignment](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenequals_arith_expr.htm)s to an inline declaration can produce the data type p with length 8 and no decimal places and this can produce unexpected results and raise exceptions. It is best to either avoid inline declarations when using the calculation type p or to determine the data type by applying the conversion operator [CONV](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_conv.htm) to the arithmetic expression.

Example

The calculation type of the following arithmetic expression is f. During the inline declaration, a data object of type f is declared accordingly.

DATA(result) = 2 \*\* 10.
DESCRIBE FIELD result TYPE DATA(t).
cl\_demo\_output=>display( |{ result } of type { t }| ).

Calculation Rules for Calculation Type

Before the calculation is made, all operands (where this is required) are converted to the calculation type, in accordance with the [conversion rules for elementary data types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_elementary.htm).

The calculation type determines the calculation method and the calculation accuracy:

-   Calculation types i and int8
    The arithmetic expression is calculated using integer arithmetic, in which each subtotal that is not an integer (after a division) is rounded commercially to the nearest integer. Each subtotal must fall within the [value range](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuiltin_types_numeric.htm) of the data type i or int8, otherwise the handleable exception CX\_SY\_ARITHMETIC\_OVERFLOW is raised.
    

-   Calculation type p
    Fixed point arithmetic The arithmetic expression is calculated to an internal accuracy of 31 [places](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenplace_glosry.htm "Glossary Entry") and using a special decimal floating point arithmetic for subtotals. During the calculation, the decimal point for numbers of type p is not fixed. If an overflow occurs because an subtotal is greater than 10^31 - 1, the whole expression is recalculated to an internal accuracy of 63 places, or a maximum value of 10^63 -1 for subtotals. If another overflow occurs, this triggers the treatable exception CX\_SY\_ARITHMETIC\_OVERFLOW. An overflow always occurs if the level of accuracy is not sufficient for all integral digits before the decimal separator. Surplus [decimal places](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfractional_portion_glosry.htm "Glossary Entry") do not raise an exception, but are rounded commercially to the nearest whole number for each subtotal.
    

-   Calculation type f
    The arithmetic expression is calculated using the binary floating point arithmetic of the current platform. Each subtotal must fall within the [value range](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuiltin_types_numeric.htm) of the data type f, otherwise the handleable exception CX\_SY\_ARITHMETIC\_OVERFLOW is raised. Since the decimal places of a floating point number are represented internally using a dual fraction, there is not an exact equivalent for every number that can be represented in the decimal system. This can produce rounding errors in the subtotals.

-   Calculation type decfloat34
    The arithmetic expression is calculated with decimal floating point arithmetic according to norm IEEE-754-2008, where (as for all calculation types) division by 0 does not result in an exception if the dividend is 0. Each subtotal must fall within the [value range](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuiltin_types_numeric.htm) of the data type decfloat34, otherwise the handleable exception CX\_SY\_ARITHMETIC\_OVERFLOW is raised. Subtotals are rounded commercially to the nearest whole number. The [scaling](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscale_glosry.htm "Glossary Entry") of each subtotal is defined such that the smallest possible exponent is selected if the result is not precise, and the following procedure is used to determine the scaling if the result is precise:

-   For addition and subtraction, the exponent of the result is the smaller of the exponents of the two operands.

-   For multiplication, the exponent of the result is the sum of the exponents of the two operands.

-   For division, the exponent of the result is the difference between the exponents of the dividend and of the divisor.

-   If the sqrt function is used, the exponent is the integer part of half of the exponent of the operand.

Note

Commercial rounding of subtotals in the calculation types i, int8, p, and decfloat34 is a characteristic that distinguishes ABAP greatly from other programming languages where the decimal places are usually cut off rather than rounded. This can produce different results, in particular in divisions with the calculation types i.

Example

The result of the second arithmetic expression is 0. The calculation type is i and the subtotals of each division are rounded to 0. The result of the second arithmetic expression is 0.9999999999999999999999999999999999. The calculation type decfloat34 and the subtotals 0.3333333333333333333333333333333333 are not rounded. The outer conversion operator [CONV](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_conv.htm) creates the integer 1 from this data.

DATA(result1) =  1 / 3 + 1 / 3 + 1 / 3.
DATA(result2) =  CONV i( CONV decfloat34( 1 / 3 + 1 / 3 + 1 / 3 ) ).
cl\_demo\_output=>display( |{ result1 }, { result2 }| ).

Handling the Result

After the calculation is performed, the result of the arithmetic expression is handled as follows:

-   In the case of an arithmetic expression as the right side of an [assignment](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenequals_arith_expr.htm) statement, the result is converted to the data type of the result field if the calculation type is different.

-   With an arithmetic expression on the right side of an [assignment](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenequals_arith_expr.htm) to an inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_inline.htm), the statically identifiable calculation type of variable var, whereby generically typed field symbols and formal parameters are included with the [standard type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstandard_type_glosry.htm "Glossary Entry") described above. In the case of the calculation type p, the data type of the declared variable is always p with the length 8 without decimal places.

-   In the case of an arithmetic expression as an operand of a relational expression, no conversion takes place, since the calculation type and the comparison type are identical.

-   In the case of an arithmetic expression used as an actual parameter for input values of methods, and if the formal parameter is fully typed, the result is converted into the formal parameter type in the static method call and passed. If the formal parameter is generically typed, it takes on the calculation type; in the case of calculation type p, the number of decimal places is determined based on the accuracy required in the calculation.

Example

Calculation type f of the following arithmetic expression is [converted](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_type_f.htm) to string, whereby the value is prepared in [scientific notation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscientific_notation_glosry.htm "Glossary Entry"). After the assignment, the text string contains the character string 1.0240000000000000E+03.

DATA  result TYPE string.
result = 2 \*\* 10.
cl\_demo\_output=>display( result ).