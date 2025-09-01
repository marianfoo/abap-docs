  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_string.htm) →  [Expressions and Functions for Byte String Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbyte_processing_expr_func.htm) →  [bit\_exp - Bit Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcompute_bit.htm) → 

bit\_exp - Calculation Length

A bit expression is assigned a calculation length in which the operation is executed.

The calculation length is the length of the longest bit expression operand involved. Unlike in the [calculation type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencalculation_type_glosry.htm "Glossary Entry") of an arithmetic expression, the type of the result is not included.

Before the entire expression is evaluated, all operands in question are converted to the length of the longest operand based on the [rules for the source field type x](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_type_x.htm) and [xstring](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_type_xstring.htm). This means that shorter operands are padded with hexadecimal 0 on the right.

The result in the calculation length is handled as follows:

-   If used in the statement [COMPUTE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_bit_expr.htm), the final result of the entire expression is converted to the length of the data object result based on the rules for source field type x and xstring. In assignments to an inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_inline.htm) the result of type xstring is located in the calculation length.

-   If used in [relational expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrelational_expression_glosry.htm "Glossary Entry"), the result is used as an operand in the length resulting from the calculation.

-   If used as an argument of [built-in functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredefined_function_glosry.htm "Glossary Entry") or of [constructor expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_glosry.htm "Glossary Entry"), the result is used as an operand in the length resulting from the calculation.

-   If used as an [actual parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_arith_expr.htm) for [input parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninput_parameter_glosry.htm "Glossary Entry") of [methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmethod_glosry.htm "Glossary Entry"), the final result of the entire expression is converted to the length of the formal parameter based on the rules for source field type x and xstring. If the formal parameter is typed generically, it is set to the type x in the length determined by the operands.

Example

The result of the following bit expression is hexadecimal 11111010, with a length of 4 bytes.

DATA hex1 TYPE xstring VALUE '10101010'.
DATA hex2 TYPE xstring VALUE '0101'.
cl\_demo\_output=>display(
  |{ hex1 bit-or hex2 }\\n{
     xstrlen( conv xstring( hex1 bit-or hex2 ) ) }| ).