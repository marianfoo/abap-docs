  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Data Objects in Operand Positions](javascript:call_link\('abenoperands_data_objects.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: !, Escape Character for Operands, ABENNAMES_ESCAPING, 757%0D%0A%0D%0AError:%0D%0A%0D%
0A%0D%0A%0D%0ASuggestion for improvement:)

!, Escape Character for Operands

Syntax

... !operand ...

Effect

The character ! can be written directly before a name operand of a single operand in order to distinguish it from an [ABAP word](javascript:call_link\('abenabap_words.htm'\)) with the same notation in a statement. The escape character ! can be placed in front of a [chaining](javascript:call_link\('abencomponent_chaining_selector.htm'\)), but it cannot be used in front of components that are addressed by a [component selector](javascript:call_link\('abencomponent_selector_glosry.htm'\) "Glossary Entry").

With the exception of the first word of a statement that is introduced by a keyword, each word of a statement that is preceded by the escape character is interpreted as an operand, and not as an ABAP word during program generation. The escape character itself is not part of a name and is ignored when the statement is executed.

Hints

-   The escape character ! may be required on rare occasions in which the compiler cannot tell the difference between an operand and a [reserved word](javascript:call_link\('abenabap_words.htm'\)) of the same name. Otherwise, it can be used for the documentation of operands in the source code.
-   The escape character ! must not be used in front of [operators](javascript:call_link\('abenoperator_glosry.htm'\) "Glossary Entry"). For example, != cannot be specified instead of \=.

Example

Without the escape character ! before CHANGING after USING, the following program extract would be syntactically incorrect, because a formal parameter must be entered after USING. Although the second escape character is not necessary, it is used to document USING after CHANGING as a formal parameter.

FORM test USING !CHANGING
          CHANGING !USING.
  using = changing.
ENDFORM.