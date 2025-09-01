  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Character String and Byte String Processing](javascript:call_link\('abencharacter_string_obsolete.htm'\)) →  [Obsolete Regular Expression Syntax](javascript:call_link\('abenregular_expressions_obsolete.htm'\)) → 

string\_func - regex (obsolete)

Syntax

... ( ... regex = posix ...  ) ...

Effect

In [string functions](javascript:call_link\('abenstring_functions.htm'\)), where the arguments [pcre](javascript:call_link\('abenstring_functions_regex.htm'\)) or [xpath](javascript:call_link\('abenstring_functions_regex.htm'\)) can be used, the argument regex is also possible. posix is then a [character-like expression position](javascript:call_link\('abencharlike_expr_position_glosry.htm'\) "Glossary Entry") that must contain a [POSIX regular expression](javascript:call_link\('abenregex_posix_syntax.htm'\)).

Hint

Regular expressions in [POSIX syntax](javascript:call_link\('abenregex_posix_syntax.htm'\)) are obsolete. Using regular expressions in POSIX syntax leads to a warning from syntax check that can be hidden by the pragma ##regex\_posix. It is recommended that [regular expressions are migrated from POSIX to PCRE](javascript:call_link\('abenregex_migrating_posix.htm'\)) or another regular expression syntax supported by ABAP.

Example

The result of the following function call is <tag>def</tag>. The POSIX regular expression is greedy and special care must be taken to find the desired substring between the tags.

cl\_demo\_output=>display(
  replace( val   = \`<tag>abc</tag>\`
           regex = \`(<tag>)\[^<\]+(</tag>)\` ##regex\_posix
           with  = \`$1def$2\` ) ).