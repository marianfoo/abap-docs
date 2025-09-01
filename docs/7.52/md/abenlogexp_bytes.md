  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_expr_func.htm) →  [log\_exp - Logical Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp.htm) →  [rel\_exp - Comparison Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_comp.htm) →  [rel\_exp - Relational Operators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_op.htm) → 

rel\_exp - Relational Operators for Byte-Like Data Types

The following table shows the relational operators for comparisons between byte-like operands (single data objects or return values or [bit expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbit_expression_glosry.htm "Glossary Entry")) in [comparison expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencomparison_expression_glosry.htm "Glossary Entry").

operator

Meaning

BYTE-CO

Contains Only: True, if operand1 only contains bytes from operand2. If operand2 is of type xstring and initial, the relational expression is false, except if operand1 is also of type xstring and initial. In this case, the relational expression is always true. If the comparison is false, sy-fdpos contains the offset of the first byte in operand1, which is not contained in operand2. If the comparison is true, sy-fdpos contains the length of operand1.

BYTE-CN

Contains Not Only: True, if a relational expression with BYTE-CO is false, if therefore operand1 does not only contain bytes from operand2. If the comparison is true, sy-fdpos contains the offset of the first character in operand1 that is not contained in operand2. If the comparison is false, sy-fdpos contains the length of operand1.

BYTE-CA

Contains Any: True, if operand1 contains at least one byte from operand2. If operand1 or operand2 are of the type xstring and initial, the relational expression is always false. If the comparison is true, sy-fdpos contains the offset of the first byte in operand1 that is also contained in operand2. If the comparison is false, sy-fdpos contains the length of operand1.

BYTE-NA

Contains Not Any: True, if a relational expression with BYTE-CA is false, if therefore operand1 does not contain a byte from operand2. If the comparison is false, sy-fdpos contains the offset of the first byte in operand1 that is also contained in operand2. If the comparison is true, sy-fdpos contains the length of operand1.

BYTE-CS

Contains String: True, if the content of operand2 is contained in operand1. If operand1 is of type xs and initial, the relational expression is false, except if operand2 is also of type xstring and initial. In this case, the relational expression is always true. If the comparison is true, sy-fdpos contains the offset of operand2 in operand1. If the comparison is false, sy-fdpos contains the length of operand1.

BYTE-NS

Contains No String: True, if a relational expression with BYTE-CS is false, if therefore operand1 does not contain the content of operand2. If the comparison is false, sy-fdpos contains the offset of operand2 in operand1. If the comparison is true, sy-fdpos contains the length of operand1.

Example

The logical expression in the IF statement is true, if the second half-byte is not filled for any of the bytes in hex1.

DATA: hex1 TYPE xstring,
      hex2 TYPE xstring.
hex1 = ...
hex2 = '000102030405060708090A0B0C0D0E0F'.
IF hex1 BYTE-CO hex2.
  ...
ENDIF.