  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_string.htm) →  [Expressions and Functions for Byte String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbyte_processing_expr_func.htm) →  [Bit Expressions (bit\_exp)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcompute_bit.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20bit_exp%20-%20Calculation%20Length%2C%20ABENBITEXP_LENGTH%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

bit\_exp - Calculation Length

A bit expression is assigned a calculation length in which the operation is executed.

The calculation length is the length of the longest bit expression operand involved. Unlike in the [calculation type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencalculation_type_glosry.htm "Glossary Entry") of an arithmetic expression, the type of the result is not included.

Before the entire expression is evaluated, all operands involved are converted to the length of the longest operand based on the [rules for the source field type x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_x.htm) and [xstring](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_xstring.htm). This means that shorter operands are padded with hexadecimal 0 on the right.

The result in the calculation length is handled as follows:

-   If used in the statement [COMPUTE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenequals_bit_expr.htm), the final result of the entire expression is converted to the length of the data object result based on the rules for source field type x and xstring. In assignments to an inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_inline.htm) or [FINAL(var)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfinal_inline.htm) the result of type xstring is in the calculation length.
-   If used in [relational expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrelational_expression_glosry.htm "Glossary Entry"), the result is used as an operand in the length resulting from the calculation.
-   If used as an argument of [built-in functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_function_glosry.htm "Glossary Entry") or [constructor expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_glosry.htm "Glossary Entry"), the result is used as an operand in the length resulting from the calculation.
-   If used as an [actual parameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentyping_arith_expr.htm) for [input parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninput_parameter_glosry.htm "Glossary Entry") of [methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmethod_glosry.htm "Glossary Entry"), the final result of the entire expression is converted to the length of the formal parameter based on the rules for source field type x and xstring. If the formal parameter is typed generically, it is set to the type x in the length determined by the operands.

Example

The result of the following bit expression is hexadecimal 11111010 with a length of 4 bytes.

DATA hex1 TYPE xstring VALUE '10101010'.
DATA hex2 TYPE xstring VALUE '0101'.
cl\_demo\_output=>display(
  |{ hex1 bit-or hex2 }\\n{
     xstrlen( conv xstring( hex1 bit-or hex2 ) ) }| ).