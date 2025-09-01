  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [Logical Expressions (log\_exp)](javascript:call_link\('abenlogexp.htm'\)) →  [Comparison Expressions (rel\_exp)](javascript:call_link\('abenlogexp_comp.htm'\)) →  [rel\_exp - Comparison Operators](javascript:call_link\('abenlogexp_op.htm'\)) → 

rel\_exp - Comparison Operators for Byte-Like Data Types

The following table shows the comparison operators for comparisons between byte-like operands (single data objects or return values or [bit expressions](javascript:call_link\('abenbit_expression_glosry.htm'\) "Glossary Entry")) in [comparison expressions](javascript:call_link\('abencomparison_expression_glosry.htm'\) "Glossary Entry").

operator

Meaning

BYTE-CO

Contains Only: True, if operand1 only contains bytes from operand2. If operand2 is of type xstring and initial, the comparison expression is false, unless operand1 is also of type xstring and initial, in which case the comparison expression is always true. If the comparison is false, sy-fdpos contains the offset of the first byte in operand1, which is not contained in operand2. If the comparison is true, sy-fdpos contains the length of operand1.

BYTE-CN

Contains Not Only: True, if a comparison expression with BYTE-CO is false, provided that operand1 does not only contain bytes from operand2. If the comparison is true, sy-fdpos contains the offset of the first byte in operand1 that is not contained in operand2. If the comparison is false, sy-fdpos contains the length of operand1.

BYTE-CA

Contains Any: True, if operand1 contains at least one byte from operand2. If operand1 or operand2 are of the type xstring and initial, the comparison expression is always false. If the comparison is true, sy-fdpos contains the offset of the first byte in operand1 that is also contained in operand2. If the comparison is false, sy-fdpos contains the length of operand1.

BYTE-NA

Contains Not Any: True, if a comparison expression with BYTE-CA is false, provided that operand1 does not contain a byte from operand2. If the comparison is false, sy-fdpos contains the offset of the first byte in operand1 that is also contained in operand2. If the comparison is true, sy-fdpos contains the length of operand1.

BYTE-CS

Contains String: True, if the content of operand2 is contained in operand1. If operand1 is of type xs and initial, the comparison expression is false, unless operand2 is also of type xstring and initial, in which case the comparison expression is always true. If the comparison is true, sy-fdpos contains the offset of operand2 in operand1. If the comparison is false, sy-fdpos contains the length of operand1.

BYTE-NS

Contains No String: True, if a comparison expression with BYTE-CS is false, provided that operand1 does not contain the content of operand2. If the comparison is false, sy-fdpos contains the offset of operand2 in operand1. If the comparison is true, sy-fdpos contains the length of operand1.

Example

The logical expression in the IF statement is true, if the second half-byte is not filled for any of the bytes in hex1.

DATA: hex1 TYPE xstring,
      hex2 TYPE xstring.
hex1 = ...
hex2 = '000102030405060708090A0B0C0D0E0F'.
IF hex1 BYTE-CO hex2.
  ...
ENDIF.