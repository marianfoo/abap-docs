  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencompute_expressions.htm) →  [Numeric Functions (num\_func)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmathematical_functions.htm) → 

num\_func - ipow

Syntax

... ipow( base = arg exp = n ) ...

Effect

This function powers the argument arg passed to base with the exponent n passed to exp. The arguments arg and n are [numeric expression positions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry"). Any [numeric data object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennumeric_data_object_glosry.htm "Glossary Entry") can be specified for arg. n expects the type i and exponents of other types are [converted](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_elementary.htm) to i. If the argument arg has the value 0, the value of the exponent n must be greater than or equal to 0.

The function ipow is overloaded in such a way that the return value can have different numeric types.

-   Outside of an [arithmetic expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry"), the data type of the argument arg determines the data type of the return value.

-   Within an arithmetic expression, the argument arg contributes to the [calculation type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencalculation_type_glosry.htm "Glossary Entry") of the entire expression and the function is calculated using the calculation type.

-   If the argument arg is a [numeric expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennumerical_expression_glosry.htm "Glossary Entry"), ipow works like an arithmetic operator and the function is handled in its operand position like an [arithmetic expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry").

This function can be specified in [general](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry") and [numeric expression positions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry"). The calculation type is determined from the argument arg in the same way as with the other [numeric functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennumerical_functions.htm). The argument n does not have any effect on the data type of the return value.

Hints

-   The power function ipow can replace [arg \*\* n](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenarith_operators.htm) calculations, if the [calculation type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencalculation_type_glosry.htm "Glossary Entry") f is to be avoided. This makes sense if the type f is not precise enough.

-   In many cases, the power function ipow has better performance than using the arithmetic operator [\*\*](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenarith_operators.htm).

Example

The results are 1.4399999999999999 for \*\* and 1.4400 for ipow. The result of ipow is more precise.

cl\_demo\_output=>display( |\*\*  : { '1.2' \*\* 2 } \\n| &&
                         |ipow: { ipow( base = '1.2' exp = 2 ) }| ).

Executable Example

[Power Function ipow](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenipow_function_abexa.htm)