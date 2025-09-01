  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) → 

Escape Character for Names

The character ! can be written directly before a name i order to distinguish it from an [ABAP word](javascript:call_link\('abenabap_words.htm'\)) of the same notation in a statement. With the exception of the first word, each word of a statement that is preceded by the escape character is interpreted as an operand, and not as an ABAP word during program generation. The escape character itself is not part of a name and is ignored when the statement is executed.

Hints

-   The escape character ! may be required on rare occasions in which the compiler cannot tell the difference between an operand and a [reserved word](javascript:call_link\('abenabap_words.htm'\)) of the same name. Otherwise, it can be used for the documentation of operands in the source code.

-   The escape character ! must not be used in front of [operators](javascript:call_link\('abenoperator_glosry.htm'\) "Glossary Entry"). For example, != cannot be specified instead of \=.

Example

Without the escape character ! before CHANGING after USING, the following program extract would be syntactically incorrect, because a formal parameter must be entered after USING. Although the second escape character is not necessary, it serves to document USING after CHANGING as a formal parameter.

FORM test USING !CHANGING
          CHANGING !USING.
  using = changing.
ENDFORM.