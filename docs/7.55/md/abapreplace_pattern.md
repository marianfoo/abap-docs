  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Statements for Character String and Byte String Processing](javascript:call_link\('abenstring_processing_statements.htm'\)) →  [REPLACE](javascript:call_link\('abapreplace.htm'\)) →  [REPLACE pattern IN](javascript:call_link\('abapreplace_in_pattern.htm'\)) → 

REPLACE, pattern

[Short Reference](javascript:call_link\('abapreplace_shortref.htm'\))

Syntax

... *{**\[*SUBSTRING*\]* substring*}*
  *|* *{*PCRE*|*REGEX regex*}* ... .

Effect

Defines a search pattern for the statements [REPLACE](javascript:call_link\('abapreplace.htm'\)) and [REPLACE IN TABLE](javascript:call_link\('abapreplace_itab.htm'\)).

-   If substring is specified, the exact substring specified in substring is searched for. The optional addition SUBSTRING can be specified in front of substring for emphasis.

-   If PCRE*|*REGEX is specified, the substring that matches a [regular expression](javascript:call_link\('abenregular_expressions.htm'\)) specified in regex is searched for, where PCRE denotes a [regular PCRE expression](javascript:call_link\('abenregex_pcre_syntax.htm'\)) and REGEX denotes a [regular POSIX expression](javascript:call_link\('abenregex_posix_syntax.htm'\)).

substring and a direct specification of regex are [character-like expression positions](javascript:call_link\('abencharlike_expr_position_glosry.htm'\) "Glossary Entry"). The syntax and semantics are the same as in the definition of a search pattern for the statement [FIND](javascript:call_link\('abapfind_pattern.htm'\)). The statement [REPLACE](javascript:call_link\('abapreplace.htm'\)) replaces the found substring in accordance with the specification after WITH.

Hint

A regular expression can have correct syntax, but be too complex for the execution of the statement REPLACE, which raises a catchable exception of the class CX\_SY\_REGEX\_TOO\_COMPLEX. See [Exceptions in Regular Expressions](javascript:call_link\('abenregex_exceptions.htm'\)).

Example

Replacement of the substring "all" with "er".

DATA(str) = \`Hallo\`.
REPLACE SUBSTRING \`all\` IN str WITH \`er\`.
cl\_demo\_output=>display( str ).

Example

The following replacement with regular expression \\D removes all non-digits from a string.

DATA(str) = \`4 Apples + 2 Oranges\`.
REPLACE ALL OCCURRENCES OF PCRE \`\\D\` IN str WITH \`\`.
cl\_demo\_output=>display( str ).