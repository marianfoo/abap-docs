---
title: "Literal Operator"
description: |
  Syntax ...  '...' & '...' & '...' ...     `...` & `...` & `...` ...   ... Effect The literal operator & can be used to combine two character literals(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenuntyped_character_literals.htm)
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenliteral_operator.htm"
abapFile: "abenliteral_operator.htm"
keywords: ["do", "while", "if", "try", "data", "abenliteral", "operator"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_declarations.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobjects_statements.htm) →  [Literals](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenliteral.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Literal%20Operator%2C%20ABENLITERAL_OPERATOR%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Literal Operator

Syntax

... *{* '...' & '...' *\[*& '...' *\[*...*\]* *\]* *}*
  *|* *{* \`...\` & \`...\` *\[*& \`...\` *\[*...*\]* *\]* *}* ...

Effect

The literal operator & can be used to combine two [character literals](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenuntyped_character_literals.htm) of the same type into a single character literal. The two categories of literals cannot be mixed. As a result, the definition of one literal can span multiple program lines. The content of the resulting literal must match its type and its length must not exceed the associated maximum length.

The literal operator can normally be specified to combine literals in all [read positions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenread_position_glosry.htm "Glossary Entry"). Exceptions to this are literals [specified dynamically in parentheses](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoperands_specifying.htm), literals in parenthesized lists separated by commas (here the only relevant operand position is [WHERE IN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwhere_logexp_operand_in.htm)), and literals in embedded [Native SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexec_literal.htm).

Hints

-   The literal operator cannot be used for [numeric literals](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenuntyped_character_literals.htm).
-   Apart from character literals, the literal operator can also be used to combine [string templates](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_template_glosry.htm "Glossary Entry").
-   Any trailing blanks in text field literals are respected by the literal operator.
-   When used for literals, the literal operator & must not be confused with the [concatenation operator &&](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_operators.htm) that can be used in [string expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_expression_glosry.htm "Glossary Entry") to concatenate character-like operators. While literals are combined using the literal operator once when a program is compiled, the concatenation operator executes a real operation at runtime and concatenates any number of character-like operands. The trailing blanks of operands with fixed lengths, particularly text field literals, are ignored.
-   Character literals combined using the literal operator & are subject to the upper limit of 255 characters. Longer character strings can only be concatenated at runtime, for example using the [concatenation operator &&](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_operators.htm).

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