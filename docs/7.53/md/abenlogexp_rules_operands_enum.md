  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [log\_exp - Logical Expressions](javascript:call_link\('abenlogexp.htm'\)) →  [rel\_exp - Comparison Expressions](javascript:call_link\('abenlogexp_comp.htm'\)) →  [rel\_exp - Comparison Rules](javascript:call_link\('abenlogexp_rules.htm'\)) → 

rel\_exp - Comparison of Enumerated Types

An operand with an [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry") can only be compared with [enumerated objects](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry") of the same enumerated type. There is no implicit conversion. The values of the operands are compared according to the [rules](javascript:call_link\('abenlogexp_rules_operands.htm'\)) that apply to the elementary [base type](javascript:call_link\('abenbase_type_glosry.htm'\) "Glossary Entry") of the enumerated type.

Note

An operand of an enumerated type cannot be compared directly with a character-like operand of the type c or string, even though there is a [conversion rule](javascript:call_link\('abenconversion_enumerated.htm'\)) for this case. In this case, helper variables or the conversion operator [CONV](javascript:call_link\('abenconstructor_expression_conv.htm'\)) can be used to execute an explicit conversion.

Example

In the first two comparisons, [enumerated objects](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry") of the enumerated type number are compared with each other. The third comparison shows how an operand with an enumerated type can be converted so that it can be compared like a character.

TYPES:
  BEGIN OF ENUM number,
    n0, n1 , n2 , n3, n4, n5, n6, n7, n8, n9,
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