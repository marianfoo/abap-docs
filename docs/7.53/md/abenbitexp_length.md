  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for Byte String Processing](javascript:call_link\('abenbyte_processing_expr_func.htm'\)) →  [bit\_exp - Bit Expressions](javascript:call_link\('abapcompute_bit.htm'\)) → 

bit\_exp - Calculation Length

A bit expression is assigned a calculation length in which the operation is executed.

The calculation length is the length of the longest bit expression operand involved. Unlike in the [calculation type](javascript:call_link\('abencalculation_type_glosry.htm'\) "Glossary Entry") of an arithmetic expression, the type of the result is not included.

Before the entire expression is evaluated, all operands in question are converted to the length of the longest operand based on the [rules for the source field type x](javascript:call_link\('abenconversion_type_x.htm'\)) and [xstring](javascript:call_link\('abenconversion_type_xstring.htm'\)). This means that shorter operands are padded with hexadecimal 0 on the right.

The result in the calculation length is handled as follows:

-   If used in the statement [COMPUTE](javascript:call_link\('abenequals_bit_expr.htm'\)), the final result of the entire expression is converted to the length of the data object result based on the rules for source field type x and xstring. In assignments to an inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)) the result of type xstring is located in the calculation length.

-   If used in [relational expressions](javascript:call_link\('abenrelational_expression_glosry.htm'\) "Glossary Entry"), the result is used as an operand in the length resulting from the calculation.

-   If used as an argument of [built-in functions](javascript:call_link\('abenpredefined_function_glosry.htm'\) "Glossary Entry") or of [constructor expressions](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry"), the result is used as an operand in the length resulting from the calculation.

-   If used as an [actual parameter](javascript:call_link\('abentyping_arith_expr.htm'\)) for [input parameters](javascript:call_link\('abeninput_parameter_glosry.htm'\) "Glossary Entry") of [methods](javascript:call_link\('abenmethod_glosry.htm'\) "Glossary Entry"), the final result of the entire expression is converted to the length of the formal parameter based on the rules for source field type x and xstring. If the formal parameter is typed generically, it is set to the type x in the length determined by the operands.

Example

The result of the following bit expression is hexadecimal 11111010, with a length of 4 bytes.

DATA hex1 TYPE xstring VALUE '10101010'.
DATA hex2 TYPE xstring VALUE '0101'.
cl\_demo\_output=>display(
  |{ hex1 bit-or hex2 }\\n{
     xstrlen( conv xstring( hex1 bit-or hex2 ) ) }| ).