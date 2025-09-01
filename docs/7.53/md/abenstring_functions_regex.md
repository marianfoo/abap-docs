  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Functions](javascript:call_link\('abenstring_functions.htm'\)) →  [Shared Parameters of Character String Functions](javascript:call_link\('abenstring_functions_common_paras.htm'\)) → 

regex - Regular Expression

Syntax

... ( ... regex = regex ...  ) ...

Effect

regex is used to pass a [regular expression](javascript:call_link\('abenregex_syntax.htm'\)) to be found or matched. regex is a [character-like expression position](javascript:call_link\('abencharlike_expr_position_glosry.htm'\) "Glossary Entry") that must contain a correct regular expression. Only arguments with elementary types can be specified.

If a character-like data object with a fixed length is specifed, any trailing blanks are ignored. If regex is empty, an exception from the class CX\_SY\_STRG\_PAR\_VAL is raised.

Note

The regular expression in regex may be have correct syntax but be too complex for the execution of the function, which can raise a handleable exception of the class CX\_SY\_REGEX\_TOO\_COMPLEX. See [Exceptions in Regular Expressions](javascript:call_link\('abenregex_exceptions.htm'\)).

Example

The result of the following function call is <tag>def</tag>.

DATA(result) = replace( val   = \`<tag>abc</tag>\`
                        regex = \`(<tag>)\[^<\]+(</tag>)\`
                        with  = \`$1def$2\` ).