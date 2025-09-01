  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_and_objects.htm) →  [Declaring Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobjects_statements.htm) →  [Literals](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenliteral.htm) → 

Literal Operator

The literal operator & can be used to join two literals (of the same type) as a single literal. In this way, the definition of one literal can span multiple program lines. The content of the resulting literal must match its type and its length must not exceed the associated maximum length.

The literal operator can be used for the [character literals](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenuntyped_character_literals.htm), but not for the [numeric literals](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenuntyped_character_literals.htm). The syntax for text field literals and text string literals is:

'...' & '...' & ... & '...'

\`...\` & \`...\` & ... & \`...\`

These categories of literals cannot be mixed.

The literal operator can normally be used to join literals in any [reading position](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreading_position_glosry.htm "Glossary Entry"). Exceptions to this are literals [specified dynamically in parentheses](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoperands_specifying.htm), literals in parenthesized lists separated by commas (here the only relevant operand position is [WHERE IN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_list.htm)) , and literals in embedded [Native SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapexec_literal.htm) .

Notes

-   As well as for literals, the literal operator can also be used to join [string templates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_template_glosry.htm "Glossary Entry").

-   Any trailing blanks in text field literals are respected by the literal operator.

-   When used for literals, the literal operator & must not be confused with the [chaining operator &&](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_operators.htm) that can be used in [string expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_expression_glosry.htm "Glossary Entry") to chain character-like operators. Literals are joined using the literal operator only once when a program is compiled. The chaining operator, on the other hand, executes a real operation at runtime and chains any number of character-like operands. The trailing blanks of operands with fixed lengths, in particular text field literals, are ignored.

-   Character literals joined using the literal operator & are subject to the upper limit of 255 characters. Longer character strings can only be concatenated at runtime, for example using the [chaining operator &&](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_operators.htm).

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