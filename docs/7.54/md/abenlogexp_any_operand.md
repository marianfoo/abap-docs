  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [log\_exp - Logical Expressions](javascript:call_link\('abenlogexp.htm'\)) →  [rel\_exp - Comparison Expressions](javascript:call_link\('abenlogexp_comp.htm'\)) →  [rel\_exp - Relational Operators](javascript:call_link\('abenlogexp_op.htm'\)) →  [rel\_exp - Relational Operators for All Data Types](javascript:call_link\('abenlogexp_compare_all.htm'\)) → 

rel\_exp - Binary Relational Operators

The following table shows the binary relational operators for comparisons between two operands (data objects and return values or [calculation expressions](javascript:call_link\('abencalculation_expression_glosry.htm'\) "Glossary Entry")) of any data types in [comparison expressions](javascript:call_link\('abencomparison_expression_glosry.htm'\) "Glossary Entry").

operator

Meaning

\=, EQ

Equal: True if the value of operand1 matches the value of operand2.

<>, NE

Not Equal: True if the value of operand1 does not match the value of operand2.

<, LT

Less Than: True if the value of operand1 is less than the value of operand2.

\>, GT

Greater Than: True if the value of operand1 is greater than the value of operand2.

<=, LE

Less Equal: True if the value of operand1 is less than or equal to the value of operand2.

\>=, GE

Greater Equal: True if the value of operand1 is greater than or equal to the value of operand2.

The values are compared in accordance with the [comparison rules](javascript:call_link\('abenlogexp_rules.htm'\)).

Programming Guideline

[Use consistent spelling](javascript:call_link\('abenalternative_langu_guidl.htm'\) "Guideline")

Notes

-   The operators \=, <>, <, \>, <=, and \>= are equivalent to EQ, NE, LT, GT, LE, and GE respectively. It is recommended that only one of these types of operator is used within the same program. If in doubt, the variant with the characters \=, <, and \> is considered to be more up-to-date, however this also overloads these characters. Relational operators that consist of two letters, on the other hand, are better suited to other relational operators such as [CO](javascript:call_link\('abenlogexp_strings.htm'\)), [CN](javascript:call_link\('abenlogexp_strings.htm'\)), and so on, which have no alternative forms.

-   Due to the [comparison rules](javascript:call_link\('abenlogexp_rules.htm'\)), the size comparisons shown here are not suitable for determining the textual order of character-like data objects.

-   The obsolete forms [\><, \=<, and \=>](javascript:call_link\('abenobsolete_logexp_op.htm'\)) of relational operators may still appear outside of classes.

Example

Logical expression as a termination condition of an unlimited [DO](javascript:call_link\('abapdo.htm'\)) loop.

CONSTANTS limit TYPE i VALUE 1000.
DATA variable TYPE i.
...
DO.
  IF variable > limit.
    EXIT.
  ENDIF.
  ...
ENDDO.