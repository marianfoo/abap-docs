  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [Logical Expressions (log\_exp)](javascript:call_link\('abenlogexp.htm'\)) →  [rel\_exp - Predicates](javascript:call_link\('abenpredicate.htm'\)) →  [rel\_exp - Predicate Functions](javascript:call_link\('abenpredicate_functions.htm'\)) →  [rel\_exp - Predicate Functions for Character-Like Arguments](javascript:call_link\('abenpredicate_functions_strgs.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: rel_exp - matches, ABENMATCHES_FUNCTIONS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%
0ASuggestion for improvement:)

rel\_exp - matches

Syntax

... matches( [val = text](javascript:call_link\('abenstring_functions_val.htm'\)) [pcre*|*xpath = regex](javascript:call_link\('abenstring_functions_regex.htm'\)) *\[* [case = case](javascript:call_link\('abenstring_functions_case.htm'\))*\]*
             [*\[*off = off](javascript:call_link\('abenstring_functions_off_len.htm'\))*\]* [*\[*len = len](javascript:call_link\('abenstring_functions_off_len.htm'\))*\]* ) ...

Effect

The [built-in](javascript:call_link\('abenbuilt_in_functions.htm'\)) [predicate function](javascript:call_link\('abenpredicate_function_glosry.htm'\) "Glossary Entry") matches compares a search range of the argument [text](javascript:call_link\('abenstring_functions_off_len.htm'\)), defined using [off](javascript:call_link\('abenstring_functions_off_len.htm'\)) and [len](javascript:call_link\('abenstring_functions_val.htm'\)), with the [regular expression](javascript:call_link\('abenregex_syntax.htm'\)) specified in [regex](javascript:call_link\('abenstring_functions_regex.htm'\)).

-   If the argument pcre is used, regex must contain a [PCRE regular expression](javascript:call_link\('abenregex_pcre_syntax.htm'\)).
-   If the argument xpath is used, regex must contain a [XPath regular expression](javascript:call_link\('abenregex_xpath_syntax.htm'\)).

A regular expression in PCRE or XPath syntax is compiled in an extended mode: Most unescaped whitespace (blanks and line breaks) of the pattern are ignored outside character classes and comments can be placed behind #. In order to specify whitespace and # in a pattern, they must be escaped or the extended mode must be switched of with [(?-x)](javascript:call_link\('abenregex_pcre_syntax_specials.htm'\)) in the regular expression.

The function returns a [truth value](javascript:call_link\('abentruth_value_glosry.htm'\) "Glossary Entry").

-   The return value is true when the whole search range matches the regular expression.
-   It is false else.

The comparison is case-sensitive by default, but this can be overridden using the parameter [case](javascript:call_link\('abenstring_functions_case.htm'\)).

Hints

-   The match function [match](javascript:call_link\('abenmatch_functions.htm'\)) can be used to return a substring that matches a regular expression.
-   Besides pcre and xpath, the obsolete argument [regex](javascript:call_link\('abenstring_functions_regex_obs.htm'\)) can also be used. Then an obsolete [POSIX regular expression](javascript:call_link\('abenregex_posix_syntax.htm'\)) must be passed.

Example

The first predicate function returns the value "true" because the argument val only contains letters. The second predicate function returns the value "false" because the argument val also contains numbers.

ASSERT     matches( val = 'abcde' pcre = '\[\[:alpha:\]\]\*' ).
ASSERT NOT matches( val = 'a123e' pcre = '\[\[:alpha:\]\]\*' ).

Executable Example

[Predicate Function, matches](javascript:call_link\('abenpred_function_matches_abexa.htm'\))

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Catchable Exceptions

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

-   Cause: Illegal offset or length specified in off and len.
    Runtime error: STRING\_OFFSET\_TOO\_LARGE

CX\_SY\_REGEX\_TOO\_COMPLEX

-   Cause: See [Exceptions in Regular Expressions](javascript:call_link\('abenregex_exceptions.htm'\)).
    Runtime error: REGEX\_TOO\_COMPLEX

CX\_SY\_STRG\_PAR\_VAL

-   Cause: Regular expression in regex is empty.
    Runtime error: STRG\_ILLEGAL\_PAR