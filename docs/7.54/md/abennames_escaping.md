  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) → 

Escape Character for Names

The character ! can be placed directly before a name to distinguish it from an [ABAP word](javascript:call_link\('abenabap_words.htm'\)) with the same name in a statement. With the exception of the first word, each word of a statement that is preceded by the escape character is interpreted as an operand, and not as an ABAP word, when the program is generated. The escape character itself is not part of a name and is ignored when the statement is executed.

Notes

-   The escape character ! may be required on rare occasions in which the compiler cannot tell the difference between an operand and a [reserved word](javascript:call_link\('abenabap_words.htm'\)) of the same name. Otherwise, it can be used for the documentation of operands in the source code.

-   The escape character ! cannot be used in front of [operators](javascript:call_link\('abenoperator_glosry.htm'\) "Glossary Entry"). For example, != cannot be specified instead of \=.

Example

Without the escape character ! before CHANGING after USING, the following program extract would have incorrect syntax, because a formal parameter must be entered after USING. Although the second escape character is not necessary, it is used to document USING after CHANGING as a formal parameter.

FORM test USING !CHANGING
          CHANGING !USING.
  using = changing.
ENDFORM.