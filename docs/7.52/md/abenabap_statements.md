---
title: "ABAP Statements"
description: |
  ABAP statements consist of the following tokens(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentoken_glosry.htm 'Glossary Entry') and end with a period (.): -   ABAP words(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_words.htm) -   Operands(https://help.s
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_statements.htm"
abapFile: "abenabap_statements.htm"
keywords: ["delete", "do", "if", "case", "try", "method", "class", "abenabap", "statements"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_syntax.htm) → 

ABAP Statements

ABAP statements consist of the following [tokens](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentoken_glosry.htm "Glossary Entry") and end with a period (.):

-   [ABAP words](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_words.htm)
    

-   [Operands](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoperands.htm)
    

-   [Operators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoperators.htm)
    

Certain ABAP words, operands, and operators are used to construct

-   [expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexpressions.htm),

Expressions can be specified at certain operand positions.

The tokens of a statement must be separated by at least one blank or a line break. Otherwise, blanks and line breaks between tokens are not significant. An ABAP statement is not restricted to a single line in the source code.

They are not case-sensitive. Apart from ABAP words, operands, and operators, the following special characters can also be used:

-   If a number of expressions of the same type with operators are joined as an expression, the priority of the individual operations can be defined using parentheses (()).
    

-   For the purpose of calling functions and methods, parentheses (()) can sometimes be used.
    

-   Lists of operands are expressed by parentheses (()) and commas (,) in certain positions.
    

-   When forming a [chained statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenchained_statement_glosry.htm "Glossary Entry"), a colon (:) and commas (,) can be used.
    

A number of standalone special characters, such as parentheses for setting the priority, need to be separated from other tokens using a blank. Other special characters (as well as the period at the end) do not have to be separated by a blank.

Notes

-   [Obsolete syntax forms](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentokenization_obsolete.htm) can still occur in all objects apart from classes. In such cases, the separators between the tokens can be omitted.

-   The absolute maximum length of an ABAP statement is 128 x 1024 characters = 131072 characters. However, the actual maximum number of characters in a statement also depends on the number of tokens and the use of literals. A statement usually consists of almost 130000 characters. In [chained statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenchained_statement_glosry.htm "Glossary Entry"), however, it is only a maximum of 28400 characters per statement.

Example

ABAP statement with the keyword DELETE, the addition WHERE, the operators \=, <, \>, AND, OR, the operands itab, col1, op1, col2, op2, col3, op3, parentheses.

DELETE itab
  WHERE ( col1 = op1 AND ( col2 > op2 OR col3 < op3 ) ).

Continue
[ABAP Words](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_words.htm)
[Operands](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoperands.htm)
[Operators and Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoperators_expressions.htm)