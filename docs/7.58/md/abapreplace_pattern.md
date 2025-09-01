  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Statements for Character String and Byte String Processing](javascript:call_link\('abenstring_processing_statements.htm'\)) →  [REPLACE](javascript:call_link\('abapreplace.htm'\)) →  [REPLACE pattern IN](javascript:call_link\('abapreplace_in_pattern.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20REPLACE%2C%20pattern%2C%20ABAPREPLACE_PATTERN%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

REPLACE, pattern

[Short Reference](javascript:call_link\('abapreplace_shortref.htm'\))

Syntax

... *{**\[*SUBSTRING*\]* substring*}*
  *|* *{*PCRE [pcre](javascript:call_link\('abenregex_pcre_syntax.htm'\))*}**|**{*REGEX regex\_ref*}* ... .

Effect

Defines a search pattern for the statements [REPLACE](javascript:call_link\('abapreplace.htm'\)) and [REPLACE IN TABLE](javascript:call_link\('abapreplace_itab.htm'\)).

-   If substring is specified, the exact substring specified in substring is searched for. The optional addition SUBSTRING can be specified in front of substring for emphasis.
-   If PCRE or REGEX is specified, the substring that matches a [regular expression](javascript:call_link\('abenregular_expressions.htm'\)) specified in pcre or regex\_ref is searched for.
    -   PCRE denotes a [PCRE regular expression](javascript:call_link\('abenregex_pcre_syntax.htm'\)) in a character string pcre. The PCRE syntax is compiled in an extended mode: Most unescaped whitespace (blanks and line breaks) of the pattern are ignored outside character classes and comments can be placed behind #. In order to include whitespace and # into a pattern, they must be escaped or the extended mode must be switched of with [(?-x)](javascript:call_link\('abenregex_pcre_syntax_specials.htm'\)) in the regular expression.
    -   REGEX denotes a any regular expression supported by ABAP represented by an instance of the [system class](javascript:call_link\('abenregex_system_classes.htm'\)) CL\_ABAP\_REGEX referenced by a reference variable regex\_ref.

substring and pcre are [character-like expression positions](javascript:call_link\('abencharlike_expr_position_glosry.htm'\) "Glossary Entry"). The syntax and semantics are the same as in the definition of a search pattern for the statement [FIND](javascript:call_link\('abapfind_pattern.htm'\)). The statement [REPLACE](javascript:call_link\('abapreplace.htm'\)) replaces the found substring in accordance with the specification after [WITH](javascript:call_link\('abapreplace_in_pattern.htm'\)).

Hints

-   Instances of CL\_ABAP\_REGEX for all kinds of regular expressions, PCRE, POSIX, XPath and XSD can be used with the addition REGEX. This circumvents the restriction that regular expressions of XPath and XSD syntax cannot be specified directly as character strings.
-   When using CL\_ABAP\_REGEX, the extended mode option can be switched by a parameter.
-   A regular expression can have correct syntax, but be too complex for the execution of the statement REPLACE, which raises a catchable exception of the class CX\_SY\_REGEX\_TOO\_COMPLEX. See [Exceptions in Regular Expressions](javascript:call_link\('abenregex_exceptions.htm'\)).
-   Behind REGEX, also a character-like operand [posix](javascript:call_link\('abapfind_replace_regex_obs.htm'\)) can be specified, that contains a valid [POSIX regular expression](javascript:call_link\('abenregex_posix_syntax.htm'\)). This variant is obsolete.

Example

Replacement of the substring all with er.

DATA(str) = \`Hallo\`.
REPLACE SUBSTRING \`all\` IN str WITH \`er\`.
cl\_demo\_output=>display( str ).

Example

The following replacement with regular expression \\D removes all non-digits from a string.

DATA(str) = \`4 Apples + 2 Oranges\`.
REPLACE ALL OCCURRENCES OF PCRE \`\\D\` IN str WITH \`\`.
cl\_demo\_output=>display( str ).