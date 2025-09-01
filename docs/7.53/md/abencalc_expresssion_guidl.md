  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_pgl.htm) →  [Structure and Style](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstructure_style_guidl.htm) →  [Alternative Spellings](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenalternative_spelling_guidl.htm) → 

Calculations

Background

In ABAP, the [arithmetic operators](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarithmetic_operator_glosry.htm "Glossary Entry") in [arithmetic expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") are used for numeric calculations. Alongside the operand format, the dedicated ABAP keywords ADD, SUBTRACT, MULTIPLY and DIVIDE are also used for the basic arithmetic operations.

Rule

Use the operator format

For calculations, use the operator format with the equals sign (=) instead of the ABAP keyword format.

Details

Calculations with the statements ADD, SUBTRACT, MULTIPLY, and DIVIDE are often more difficult to read than the corresponding operator format. Calculations other than the basic arithmetic operations cannot be expressed by ABAP keywords in any case.

Exception

The command format allows the use of [chained statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenchained_statements_guidl.htm "Guideline"), which can be useful in these special cases:

ADD increment TO: sum\_individual,
                  sum\_total.

If arithmetic operations are in the form a = a + 1, where the target variable and one of the operands are identical, using the statements ADD, SUBTRACT and so on has the advantage of being easier on the eye, especially when the name of the target variable is relatively long:

SUBTRACT 1 FROM reference->structured\_attribute-component.

It is immediately clear to the observer that the value of the specified variables is reduced by one. This may not be the case for the operator format, if it is not straightaway obvious that the target variable and one of the operands are identical. In such cases you can and should ignore the above rule. The primary concern is the readability of the source code.

Bad Example

The following source code shows a multiplication using the statement MULTIPLY.

MULTIPLY n1 by n2.

Good Example

The following source code shows the same example as above, but in the more compact operator format.

n1 = n1 \* n2.