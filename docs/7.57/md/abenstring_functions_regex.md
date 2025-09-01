  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_processing_expr_func.htm) →  [String Functions (string\_func)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_functions.htm) →  [string\_func - Shared Parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_functions_common_paras.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: string_func - pcre, xpath, ABENSTRING_FUNCTIONS_REGEX, 757%0D%0A%0D%0AError:%0D%0A%0D
%0A%0D%0A%0D%0ASuggestion for improvement:)

string\_func - pcre, xpath

Syntax

... ( ... [pcre](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_pcre_syntax.htm)*|* [xpath](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_xpath_syntax.htm) = regex ...  ) ...

Effect

pcre*|*xpath$ is used to pass a [regular expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_syntax.htm) to be searched for or compared to. regex is a [character-like expression position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry") that must contain a correct regular expression. Only arguments with elementary data types can be specified.

-   If the argument pcre is used, regex must contain a [PCRE regular expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_pcre_syntax.htm).
-   If the argument xpath is used, regex must contain a [XPath regular expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_xpath_syntax.htm).

If a character-like data object with a fixed length is specified, any trailing blanks are ignored. If regex is empty, an exception from the class CX\_SY\_STRG\_PAR\_VAL is raised.

The regular expression is compiled an extended mode: Most unescaped whitespace (blanks and line breaks) of the pattern are ignored outside character classes and comments can be placed behind #. In order to include whitespace and # into a pattern, they must be escaped or the extended mode must be switched of with [(?-x)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_pcre_syntax_specials.htm) in the regular expression.

Hints

-   The regular expression in regex may have correct syntax but be too complex for the execution of the function, which can raise a catchable exception of the class CX\_SY\_REGEX\_TOO\_COMPLEX. See [Exceptions in Regular Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_exceptions.htm).
-   Besides pcre and xpath, also the obsolete argument [regex](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_functions_regex_obs.htm) can be used. Then an obsolete [POSIX regular expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_posix_syntax.htm) must be passed.

Example

The result of the following function call is <tag>def</tag>. By placing a question mark (?) behind the + quantifier, the greedy behavior of the PCRE regular expression is switched off for that wildcard character.

cl\_demo\_output=>display(
  replace( val   = \`<tag>abc</tag>\`
           pcre  = \`(<tag>).+?(</tag>)\`
           with  = \`$1def$2\` ) ).