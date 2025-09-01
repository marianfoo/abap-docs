  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Declaring Data Objects](javascript:call_link\('abenobjects_statements.htm'\)) →  [Literals](javascript:call_link\('abenliteral.htm'\)) → 

Literal Operator

Syntax

... *{* '...' & '...' *\[*& '...' *\[*...*\]* *\]* *}*
  *|* *{* \`...\` & \`...\` *\[*& \`...\` *\[*...*\]* *\]* *}* ...

Effect

The literal operator & can be used to combine two [character literals](javascript:call_link\('abenuntyped_character_literals.htm'\)) of the same type into a single character literal. The two categories of literals cannot be mixed. As a result, the definition of one literal can span multiple program lines. The content of the resulting literal must match its type and its length must not exceed the associated maximum length.

The literal operator can normally be specified to combine literals in all [read position](javascript:call_link\('abenread_position_glosry.htm'\) "Glossary Entry"). Exceptions to this are literals [specified dynamically in parentheses](javascript:call_link\('abenoperands_specifying.htm'\)), literals in parenthesized lists separated by commas (here the only relevant operand position is [WHERE IN](javascript:call_link\('abenwhere_logexp_operand_in.htm'\))) , and literals in embedded [Native SQL](javascript:call_link\('abapexec_literal.htm'\)) .

Hints

-   The literal operator cannot be used for [numeric literals](javascript:call_link\('abenuntyped_character_literals.htm'\)).
-   Apart from character literals, the literal operator can also be used to combine [string templates](javascript:call_link\('abenstring_template_glosry.htm'\) "Glossary Entry").
-   Any trailing blanks in text field literals are respected by the literal operator.
-   When used for literals, the literal operator & must not be confused with the [concatenation operator &&](javascript:call_link\('abenstring_operators.htm'\)) that can be used in [string expressions](javascript:call_link\('abenstring_expression_glosry.htm'\) "Glossary Entry") to concatenate character-like operators. While literals are combined using the literal operator once when a program is compiled, the concatenation operator executes a real operation at runtime and concatenates any number of character-like operands. The trailing blanks of operands with fixed lengths, particularly text field literals, are ignored.
-   Character literals combined using the literal operator & are subject to the upper limit of 255 characters. Longer character strings can only be concatenated at runtime, for example using the [concatenation operator &&](javascript:call_link\('abenstring_operators.htm'\)).

Example

Construction of an HTML string from literals.

DATA html TYPE string.
html =
  \`<html>\`   &
  \`<body>\`   &
  \`Text\`     &
  \`</body>\`  &
  \`</html>\`.
cl\_abap\_browser=>show\_html( html\_string = html ).