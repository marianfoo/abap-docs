  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [Logical Expressions (log\_exp)](javascript:call_link\('abenlogexp.htm'\)) →  [Comparison Expressions (rel\_exp)](javascript:call_link\('abenlogexp_comp.htm'\)) →  [rel\_exp - Comparison Operators](javascript:call_link\('abenlogexp_op.htm'\)) →  [rel\_exp - Comparison Operators for All Data Types](javascript:call_link\('abenlogexp_compare_all.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20rel_exp%20-%20Binary%20Comparison%20Operators%2C%20ABENLOGEXP_ANY_OPERAND%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

rel\_exp - Binary Comparison Operators

The following table shows the binary comparison operators for comparisons between two operands (data objects or return values or [calculation expressions](javascript:call_link\('abencalculation_expression_glosry.htm'\) "Glossary Entry")) of any data types in [comparison expressions](javascript:call_link\('abencomparison_expression_glosry.htm'\) "Glossary Entry").

operator

Meaning

\=, EQ

Equal: True, if the value of operand1 is equal to the value of operand2.

<>, NE

Not Equal: True, if the value of operand1 is not equal to the value of operand2.

<, LT

Less Than: True, if the value of operand1 is less than the value of operand2.

\>, GT

Greater Than: True, if the value of operand1 is greater than the value of operand2.

<=, LE

Less Equal: True, if the value of operand1 is less than or equal to the value of operand2.

\>=, GE

Greater Equal: True, if the value of operand1 is greater than or equal to the value of operand2.

The values are compared in accordance with the [comparison rules](javascript:call_link\('abenlogexp_rules.htm'\)).

Programming Guideline

[Use consistent spelling](javascript:call_link\('abenalternative_langu_guidl.htm'\) "Guideline")

Hints

-   The operators \=, <>, <, \>, <=, and \>= are equivalent to EQ, NE, LT, GT, LE, and GE respectively. It is recommended that only one or the other set of operators is used within the context of a program. If in doubt, the variant with the characters \=, <, and \> is considered to be more up-to-date, however this also contributes to the overload of these characters. Comparison operators that consist of two letters, on the other hand, are better suited to other comparison operators such as [CO](javascript:call_link\('abenlogexp_strings.htm'\)), [CN](javascript:call_link\('abenlogexp_strings.htm'\)), and so on, for which there are no alternative forms.
-   Due to the [comparison rules](javascript:call_link\('abenlogexp_rules.htm'\)), the size comparisons shown here are not suitable for determining the textual order of character-like data objects.
-   The obsolete forms [\><, \=<, and \=>](javascript:call_link\('abenobsolete_logexp_op.htm'\)) of comparison operators may still appear outside of classes.

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