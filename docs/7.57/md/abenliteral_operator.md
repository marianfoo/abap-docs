  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentypes_and_objects.htm) →  [Declaring Data Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobjects_statements.htm) →  [Literals](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenliteral.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Literal Operator, ABENLITERAL_OPERATOR, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0A
Suggestion for improvement:)

Literal Operator

Syntax

... *{* '...' & '...' *\[*& '...' *\[*...*\]* *\]* *}*
  *|* *{* \`...\` & \`...\` *\[*& \`...\` *\[*...*\]* *\]* *}* ...

Effect

The literal operator & can be used to combine two [character literals](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuntyped_character_literals.htm) of the same type into a single character literal. The two categories of literals cannot be mixed. As a result, the definition of one literal can span multiple program lines. The content of the resulting literal must match its type and its length must not exceed the associated maximum length.

The literal operator can normally be specified to combine literals in all [read positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenread_position_glosry.htm "Glossary Entry"). Exceptions to this are literals [specified dynamically in parentheses](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoperands_specifying.htm), literals in parenthesized lists separated by commas (here the only relevant operand position is [WHERE IN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwhere_logexp_operand_in.htm)), and literals in embedded [Native SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexec_literal.htm).

Hints

-   The literal operator cannot be used for [numeric literals](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuntyped_character_literals.htm).
-   Apart from character literals, the literal operator can also be used to combine [string templates](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_template_glosry.htm "Glossary Entry").
-   Any trailing blanks in text field literals are respected by the literal operator.
-   When used for literals, the literal operator & must not be confused with the [concatenation operator &&](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_operators.htm) that can be used in [string expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_expression_glosry.htm "Glossary Entry") to concatenate character-like operators. While literals are combined using the literal operator once when a program is compiled, the concatenation operator executes a real operation at runtime and concatenates any number of character-like operands. The trailing blanks of operands with fixed lengths, particularly text field literals, are ignored.
-   Character literals combined using the literal operator & are subject to the upper limit of 255 characters. Longer character strings can only be concatenated at runtime, for example using the [concatenation operator &&](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_operators.htm).

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