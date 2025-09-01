  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [Logical Expressions (log\_exp)](javascript:call_link\('abenlogexp.htm'\)) →  [Comparison Expressions (rel\_exp)](javascript:call_link\('abenlogexp_comp.htm'\)) →  [rel\_exp - Comparison Operators](javascript:call_link\('abenlogexp_op.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20rel_exp%20-%20Comparison%20Operators%20for%20Bit%20Patterns%2C%20ABENLOGEXP_BITMASKS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20imp
rovement:)

rel\_exp - Comparison Operators for Bit Patterns

The table below shows the comparison operators for comparisons of operands (single data objects or return values or [bit expressions](javascript:call_link\('abenbit_expression_glosry.htm'\) "Glossary Entry")) with bit patterns in byte-like operands in [comparison expressions](javascript:call_link\('abencomparison_expression_glosry.htm'\) "Glossary Entry"). The data type of the right operand operand2 must be byte-like (x or xstring). It contains the bit pattern with which the left operand operand1 is compared. If operand1 is shorter than operand2, hexadecimal zeros are appended to the right of operand1 in accordance with the [comparison rules](javascript:call_link\('abenlogexp_rules_operands.htm'\)) to lengthen it appropriately. No further conversion takes place. The data type of operand1 must also be byte-like (x or xstring).

operator

Meaning

O

Ones: True, if the bits that are 1 in operand2, are also 1 in operand1. If operand2 contains only zeros, the comparison expression is always true.

Z

Zeros: True, if the bits that are 1 in operand2 are 0 in operand1. If operand2 contains only zeros, the comparison expression is always true.

M

Mixed: True, if of the bits that are 1 in operand2, at least one is 1 and one is 0 in operand1. If operand2 contains only zeros, the comparison expression is always false.

Hint

For the result of the comparisons, it is irrelevant whether the bits that are 0 in operand2, are 1 or 0 in operand1.

Example

The logical expression in the IF statement is false because 00 is appended to the right of hex1 before the comparison. If the content of hex2 were 111100, the comparison would be true.

DATA: hex1 TYPE xstring,
      hex2 TYPE xstring.
hex1 = 'FFFF'.
hex2 = '111111'.
IF hex1 O hex2.
  ...
ENDIF.