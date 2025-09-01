  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Functions (string\_func)](javascript:call_link\('abenstring_functions.htm'\)) →  [string\_func - Common Parameters](javascript:call_link\('abenstring_functions_common_paras.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20string_func%20-%20pcre%2C%20xpath%2C%20ABENSTRING_FUNCTIONS_REGEX%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

string\_func - pcre, xpath

Syntax

... ( ... [pcre](javascript:call_link\('abenregex_pcre_syntax.htm'\))*|* [xpath](javascript:call_link\('abenregex_xpath_syntax.htm'\)) = regex ...  ) ...

Effect

pcre*|*xpath$ is used to pass a [regular expression](javascript:call_link\('abenregex_syntax.htm'\)) to be searched for or compared to. regex is a [character-like expression position](javascript:call_link\('abencharlike_expr_position_glosry.htm'\) "Glossary Entry") that must contain a correct regular expression. Only arguments with elementary data types can be specified.

-   If the argument pcre is used, regex must contain a [PCRE regular expression](javascript:call_link\('abenregex_pcre_syntax.htm'\)).
-   If the argument xpath is used, regex must contain a [XPath regular expression](javascript:call_link\('abenregex_xpath_syntax.htm'\)).

If a character-like data object with a fixed length is specified, any trailing blanks are ignored. If regex is empty, an exception from the class CX\_SY\_STRG\_PAR\_VAL is raised.

The regular expression is compiled an extended mode: Most unescaped whitespace (blanks and line breaks) of the pattern are ignored outside character classes and comments can be placed behind #. In order to include whitespace and # into a pattern, they must be escaped or the extended mode must be switched of with [(?-x)](javascript:call_link\('abenregex_pcre_syntax_specials.htm'\)) in the regular expression.

Hints

-   The regular expression in regex may have correct syntax but be too complex for the execution of the function, which can raise a catchable exception of the class CX\_SY\_REGEX\_TOO\_COMPLEX. See [Exceptions in Regular Expressions](javascript:call_link\('abenregex_exceptions.htm'\)).
-   Besides pcre and xpath, also the obsolete argument [regex](javascript:call_link\('abenstring_functions_regex_obs.htm'\)) can be used. Then an obsolete [POSIX regular expression](javascript:call_link\('abenregex_posix_syntax.htm'\)) must be passed.

Example

The result of the following function call is <tag>def</tag>. By placing a question mark (?) behind the + quantifier, the greedy behavior of the PCRE regular expression is switched off for that wildcard character.

cl\_demo\_output=>display(
  replace( val   = \`<tag>abc</tag>\`
           pcre  = \`(<tag>).+?(</tag>)\`
           with  = \`$1def$2\` ) ).