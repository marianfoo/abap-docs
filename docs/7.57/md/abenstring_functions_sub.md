  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Functions (string\_func)](javascript:call_link\('abenstring_functions.htm'\)) →  [string\_func - Shared Parameters](javascript:call_link\('abenstring_functions_common_paras.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: string_func - sub, ABENSTRING_FUNCTIONS_SUB, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%
0D%0ASuggestion for improvement:)

string\_func - sub

Syntax

... ( ... sub = substring ...  ) ...

Effect

substring is used to pass a character string whose characters are to be searched for or inserted. substring is a [character like expression position](javascript:call_link\('abencharlike_expr_position_glosry.htm'\) "Glossary Entry"). Only arguments with elementary types can be specified.

If a character-like data object with a fixed length is specified, any trailing blanks are ignored.

Hint

The behavior of a function when an empty string is specified in substring depends on the corresponding function.

Example

The result of the following function call is 2.

FINAL(result) = count( val = 'axaxa' sub = 'x' ).