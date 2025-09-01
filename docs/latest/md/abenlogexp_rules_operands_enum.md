  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [Logical Expressions (log\_exp)](javascript:call_link\('abenlogexp.htm'\)) →  [Comparison Expressions (rel\_exp)](javascript:call_link\('abenlogexp_comp.htm'\)) →  [rel\_exp - Comparison Rules](javascript:call_link\('abenlogexp_rules.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20rel_exp%20-%20Comparing%20Enumerated%20Types%2C%20ABENLOGEXP_RULES_OPERANDS_ENUM%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improve
ment:)

rel\_exp - Comparing Enumerated Types

An operand with an [enumerated type](javascript:call_link\('abenenum_type_glosry.htm'\) "Glossary Entry") can only be compared with [enumerated objects](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry") of the same enumerated type. There is no implicit conversion. The values of the operands are compared according to the [rules](javascript:call_link\('abenlogexp_rules_operands.htm'\)) that apply to the elementary [base type](javascript:call_link\('abenbase_type_glosry.htm'\) "Glossary Entry") of the enumerated type.

Hint

An operand of an enumerated type cannot be compared directly with a character-like operand of type c or string, even though there is a [conversion rule](javascript:call_link\('abenconversion_enumerated.htm'\)) for this case. In this case, helper variables or the conversion operator [CONV](javascript:call_link\('abenconstructor_expression_conv.htm'\)) can be used to perform an explicit conversion.

Example

In the first two comparisons, [enumerated objects](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry") of the enumerated type number are compared with each other. The third comparison shows how an operand with an enumerated type can be converted to be compared like a character.

TYPES:
  BEGIN OF ENUM number,
    n0, n1, n2, n3, n4, n5, n6, n7, n8, n9,
  END OF ENUM number.
DATA: num2 TYPE number VALUE n2,
      num5 TYPE number VALUE n5.
IF num2 < num5.
  cl\_demo\_output=>write( |num2 < num5| ).
ENDIF.
IF num2 > n0.
  cl\_demo\_output=>write( |num2 > n0| ).
ENDIF.
IF CONV string( n7 ) = \`N7\`.
  cl\_demo\_output=>write( |CONV string( n7 ) = \`N7\`| ).
ENDIF.
cl\_demo\_output=>display( ).