  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Declaring Data Objects](javascript:call_link\('abenobjects_statements.htm'\)) →  [Literals](javascript:call_link\('abenliteral.htm'\)) → 

Literal Operator

The literal operator & can be used to join two literals (of the same type) as a single literal. In this way, the definition of one literal can span multiple program lines. The content of the resulting literal must match its type and its length must not exceed the associated maximum length.

The literal operator can be used for the [character literals](javascript:call_link\('abenuntyped_character_literals.htm'\)), but not for the [numeric literals](javascript:call_link\('abenuntyped_character_literals.htm'\)). The syntax for text field literals and text string literals is:

'...' & '...' & ... & '...'

\`...\` & \`...\` & ... & \`...\`

These categories of literals cannot be mixed.

The literal operator can normally be used to join literals in any [reading position](javascript:call_link\('abenreading_position_glosry.htm'\) "Glossary Entry"). Exceptions to this are literals [specified dynamically in parentheses](javascript:call_link\('abenoperands_specifying.htm'\)), literals in parenthesized lists separated by commas (here the only relevant operand position is [WHERE IN](javascript:call_link\('abenwhere_logexp_list.htm'\))) and literals in embedded [Native SQL](javascript:call_link\('abapexec_literal.htm'\)).

Notes

-   As well as for literals, the literal operator can also be used to join [string templates](javascript:call_link\('abenstring_template_glosry.htm'\) "Glossary Entry").

-   Any trailing blanks in text field literals are respected by the literal operator.

-   When used for literals, the literal operator & must not be confused with the [chaining operator &&](javascript:call_link\('abenstring_operators.htm'\)) that can be used in [string expressions](javascript:call_link\('abenstring_expression_glosry.htm'\) "Glossary Entry") to chain character-like operators. Whereas linking literals with the literal operator takes place once at the compilation of a program, the chaining operator executes a genuine operation at runtime and chains any number of character-like operands. The trailing blanks of operands with fixed lengths, in particular text field literals, are ignored.

-   Character literals joined using the literal operator & are subject to the upper limit of 255 characters. Longer character strings can only be concatenated at runtime, for example, with the [chaining operator &&](javascript:call_link\('abenstring_operators.htm'\)).

Example

Constructs an HTML string from subliterals.

DATA html TYPE string.
html =
  \`<html>\`   &
  \`<body>\`   &
  \`Text\`     &
  \`</body>\`  &
  \`</html>\`.
cl\_abap\_browser=>show\_html( html\_string = html ).