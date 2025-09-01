---
title: "ABAP Statements"
description: |
  ABAP statements(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_statements_overview.htm) consist of the following tokens(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentoken_glosry.htm 'Glossary Entry') and always end with a period (.): -   ABAP words(https:
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_statements.htm"
abapFile: "abenabap_statements.htm"
keywords: ["delete", "do", "if", "case", "try", "method", "class", "abenabap", "statements"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Syntax Elements of an ABAP Program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_syntax.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP Statements, ABENABAP_STATEMENTS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASu
ggestion for improvement:)

ABAP Statements

[ABAP statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_statements_overview.htm) consist of the following [tokens](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentoken_glosry.htm "Glossary Entry") and always end with a period (.):

-   [ABAP words](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_words.htm)
-   [Operands at Operand Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoperand_positions.htm)
-   [Operators](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoperators.htm)

Specific ABAP words, operands, and operators can be combined to

-   [expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexpressions.htm),

which can be specified at certain operand positions.

A special syntax allows a set of statements to be written as

-   [chained statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenchained_statements.htm).

The tokens of a statement must be separated by at least one blank or a line break. Otherwise, blanks and line breaks between tokens are not significant. An ABAP statement is not limited to a line of the source code.

There is no case-sensitivity and in addition to ABAP words, operands, and operators, the following special characters can be used:

-   If multiple similar expressions are combined into one expression with operators, the priority of the individual operations can be determined using parentheses (()).
-   When calling functions and methods, parentheses (()) are used.
-   Lists of operands are expressed by parentheses (()) and commas (,) in specific positions.
-   When forming a [chained statement](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenchained_statement_glosry.htm "Glossary Entry"), a colon (:) and commas (,) can be used.

There are single special characters such as parentheses for determining the priority in expressions that must be separated from other tokens by a blank character. Other special characters do not need to be separated by a blank, for example, the closing period.

Hints

-   Some special characters as hyphens (\-) or angle brackets (\->) are parts of operands. Other special characters as square brackets (\[ \]), curly brackets ({ }) or the vertical bar (|) are part of expressions.
-   Some expressions use [obsolete syntax forms](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentokenization_obsolete.htm) that can still occur outside classes, where the separators between the tokens can be omitted.
-   The absolute maximum length of an ABAP statement is 128 x 1024 characters = 131072 characters. However, the actual maximum number of characters in a statement also depends on the number of tokens and the use of literals. In general, a statement can consist of almost 130000 characters. In [chained statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenchained_statement_glosry.htm "Glossary Entry"), however, there are only a maximum of 28400 characters per statement.

Example

ABAP statement with the keyword DELETE, the addition WHERE, the operators \=, <, \>, AND, OR, the operands itab, col1, op1, col2, op2, col3, op3, and parentheses.

DELETE itab
  WHERE ( col1 = op1 AND ( col2 > op2 OR col3 < op3 ) ).

Continue
[ABAP Statements, Overview](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_statements_overview.htm)
[ABAP Words, Overview](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_words.htm)
[Operand Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoperand_positions.htm)
[Chained Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenchained_statements.htm)