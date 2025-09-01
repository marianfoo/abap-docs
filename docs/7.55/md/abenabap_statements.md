  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_syntax.htm) → 

ABAP Statements

ABAP statements consist of the following [tokens](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentoken_glosry.htm "Glossary Entry") and always end with a period (.).

-   [ABAP words](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_words.htm)
    

-   [Operands](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoperands.htm)
    

-   [Operators](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoperators.htm)
    

Specific ABAP words, operands, and operators form

-   [expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexpressions.htm),

which can be specified at certain operand positions.

The tokens of a statement must be separated by at least one blank or a line break. Otherwise, blanks and line breaks between tokens are not significant. An ABAP statement is not limited to a line of the source code.

There is no case-sensitivity and in addition to ABAP words, operands, and operators, the following special characters can be used:

-   If multiple similar expressions are linked to one expression with operators, the priority of the individual operations can be determined using parentheses (()).
    

-   When calling functions and methods, parentheses (()) are partly used.
    

-   Lists of operands are expressed by parentheses (()) and commas (,) in specific positions.
    

-   When forming a [chained statement](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenchained_statement_glosry.htm "Glossary Entry"), a colon (:) and commas (,) can be used.
    

There are single special characters such as parentheses for determining the priority in expressions that must be separated from other tokens by a blank character. Other special characters do not need to be separated by a blank, for example, the closing period.

Hints

-   [Obsolete syntax forms](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentokenization_obsolete.htm) can still occur outside classes, where the separators between the tokens can be omitted.

-   The absolute maximum length of an ABAP statement is 128 x 1024 characters = 131072 characters. However, the actual maximum number of characters in a statement also depends on the number of tokens and the use of literals. In general, a statement can consist of almost 130000 characters. In [chained statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenchained_statement_glosry.htm "Glossary Entry"), however, there are only a maximum of 28400 characters per statement. last

Example

ABAP statement with the keyword DELETE, the addition WHERE, the operators \=, <, \>, AND, OR, the operands itab, col1, op1, col2, op2, col3, op3, and parentheses.

DELETE itab
  WHERE ( col1 = op1 AND ( col2 > op2 OR col3 < op3 ) ).

Continue
[ABAP Words](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_words.htm)
[Operands](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoperands.htm)
[Operators and Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoperators_expressions.htm)