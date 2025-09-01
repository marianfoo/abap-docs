  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Functions (string\_func)](javascript:call_link\('abenstring_functions.htm'\)) →  [string\_func - Shared Parameters](javascript:call_link\('abenstring_functions_common_paras.htm'\)) → 

string\_func - pcre, regex

Syntax

... ( ... pcre*|*regex = regex ...  ) ...

Effect

pcre*|*regex is used to pass a [regular expression](javascript:call_link\('abenregex_syntax.htm'\)) to be searched for or compared to. regex is a [character-like expression position](javascript:call_link\('abencharlike_expr_position_glosry.htm'\) "Glossary Entry") that must contain a correct regular expression. Only arguments with elementary data types can be specified.

-   If the argument pcre is used, regex must contain a [PCRE regular expression](javascript:call_link\('abenregex_pcre_syntax.htm'\)).

-   If the argument regex is used, regex must contain a [POSIX regular expression](javascript:call_link\('abenregex_posix_syntax.htm'\)).

If a character-like data object with a fixed length is specified, any trailing blanks are ignored. If regex is empty, an exception from the class CX\_SY\_STRG\_PAR\_VAL is raised.

Hint

The regular expression in regex may have correct syntax but be too complex for the execution of the function, which can raise a catchable exception of the class CX\_SY\_REGEX\_TOO\_COMPLEX. See [Exceptions in Regular Expressions](javascript:call_link\('abenregex_exceptions.htm'\)).

Example

The result of the following function calls is <tag>def</tag>. While the POSIX regular expression is greedy and special care has to be taken to find the desired substring between the tags, the PCRE regular expression can be made non-greedy.

cl\_demo\_output=>write(
  replace( val   = \`<tag>abc</tag>\`
           regex = \`(<tag>)\[^<\]+(</tag>)\`
           with  = \`$1def$2\` ) ).
cl\_demo\_output=>write(
  replace( val   = \`<tag>abc</tag>\`
           pcre  = \`(<tag>).+?(</tag>)\`
           with  = \`$1def$2\` ) ).
cl\_demo\_output=>display( ).