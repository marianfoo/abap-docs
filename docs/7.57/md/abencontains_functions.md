  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [Logical Expressions (log\_exp)](javascript:call_link\('abenlogexp.htm'\)) →  [rel\_exp - Predicates](javascript:call_link\('abenpredicate.htm'\)) →  [rel\_exp - Predicate Functions](javascript:call_link\('abenpredicate_functions.htm'\)) →  [rel\_exp - Predicate Functions for Character-Like Arguments](javascript:call_link\('abenpredicate_functions_strgs.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: rel_exp - contains , contains_..., ABENCONTAINS_FUNCTIONS, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

rel\_exp - contains, contains\_...

Syntax Forms

1\. ... contains( [val = text](javascript:call_link\('abenstring_functions_val.htm'\)) [sub*|*start*|*end = substring](javascript:call_link\('abenstring_functions_sub.htm'\)) *\[* [case = case](javascript:call_link\('abenstring_functions_case.htm'\))*\]*
                *\[* [off = off](javascript:call_link\('abenstring_functions_off_len.htm'\))*\]* *\[* [len = len](javascript:call_link\('abenstring_functions_off_len.htm'\))*\]* *\[*occ = occ*\]* ) ...

2\. ... contains( [val = text](javascript:call_link\('abenstring_functions_val.htm'\)) [pcre*|*xpath = regex](javascript:call_link\('abenstring_functions_regex.htm'\)) *\[* [case = case](javascript:call_link\('abenstring_functions_case.htm'\))*\]*
                *\[* [off = off](javascript:call_link\('abenstring_functions_off_len.htm'\))*\]* *\[* [len = len](javascript:call_link\('abenstring_functions_off_len.htm'\))*\]* *\[*occ = occ*\]* ) ...

3\. ... contains\_any\_of( [val = text](javascript:call_link\('abenstring_functions_val.htm'\)) [sub*|*start*|*end = substring](javascript:call_link\('abenstring_functions_sub.htm'\))
                       *\[* [off = off](javascript:call_link\('abenstring_functions_off_len.htm'\))*\]* *\[* [len = len](javascript:call_link\('abenstring_functions_off_len.htm'\))*\]* *\[*occ = occ*\]* ) ...

4\. ... contains\_any\_not\_of( [val = text](javascript:call_link\('abenstring_functions_val.htm'\)) [sub*|*start*|*end = substring](javascript:call_link\('abenstring_functions_sub.htm'\))
                           *\[* [off = off](javascript:call_link\('abenstring_functions_off_len.htm'\))*\]* *\[* [len = len](javascript:call_link\('abenstring_functions_off_len.htm'\))*\]* *\[*occ = occ*\]* ) ...

Effect

These [built-in](javascript:call_link\('abenbuilt_in_functions.htm'\)) [predicate functions](javascript:call_link\('abenpredicate_function_glosry.htm'\) "Glossary Entry") return a [truth value](javascript:call_link\('abentruth_value_glosry.htm'\) "Glossary Entry") for a condition to the argument [text](javascript:call_link\('abenstring_functions_val.htm'\)).

-   The variants of the function contains with the parameters sub, start, or end scan a search range defined by [off](javascript:call_link\('abenstring_functions_off_len.htm'\)) and [len](javascript:call_link\('abenstring_functions_off_len.htm'\)) in text for matches with the string specified in [substring](javascript:call_link\('abenstring_functions_sub.htm'\)). The return value is true if at least the number of matches specified in occ is found. The search is case-sensitive by default, but this can be overridden using the parameter [case](javascript:call_link\('abenstring_functions_case.htm'\)). If substring is passed to start or end, the matches must occur directly one after another either at the start or at the end of the search range. sub, on the other hand, allows the matches to occur anywhere in the search range. If substring is empty, an exception of the class CX\_SY\_STRG\_PAR\_VAL is raised.
-   The variants of the function contains with the parameter [pcre](javascript:call_link\('abenstring_functions_regex.htm'\)) or [xpath](javascript:call_link\('abenstring_functions_regex.htm'\)) scan a search range defined by [off](javascript:call_link\('abenstring_functions_off_len.htm'\)) and [len](javascript:call_link\('abenstring_functions_off_len.htm'\)) in text for matches with the [regular expression](javascript:call_link\('abenregex_syntax.htm'\)) specified in [regex](javascript:call_link\('abenstring_functions_regex.htm'\)).
    
    -   If the argument pcre is used, regex must contain a [PCRE regular expression](javascript:call_link\('abenregex_pcre_syntax.htm'\)).
    -   If the argument xpath is used, regex must contain a [XPath regular expression](javascript:call_link\('abenregex_xpath_syntax.htm'\)).
    
    A regular expression in PCRE or XPath syntax is compiled in an extended mode: Most unescaped whitespace (blanks and line breaks) of the pattern are ignored outside character classes and comments can be placed behind #. In order to include whitespace and # in a pattern, they must be escaped or the extended mode must be switched of with [(?-x)](javascript:call_link\('abenregex_pcre_syntax_specials.htm'\)) in the regular expression.
    
    The return value is true if at least the number of matches specified in occ is found. The search is case-sensitive by default, but this can be overridden using the parameter [case](javascript:call_link\('abenstring_functions_case.htm'\)).
    
-   The function contains\_any\_of has the same effect as contains, but does not check for the occurrences of the entire string in [substring](javascript:call_link\('abenstring_functions_sub.htm'\)). Instead, it checks for the individual characters in substring, which is always case-sensitive. The return value is true if text contains at least the set of characters specified in occ. If start or end are specified, the characters must be at the start or at the end of the search range in any order, whereas in sub they can be anywhere.
-   The function contains\_any\_not\_of has the same effect as contains\_any\_of but does not require the characters from [substring](javascript:call_link\('abenstring_functions_sub.htm'\)). Instead, it requires any characters that are not in substring.

occ is a [numeric expression position](javascript:call_link\('abennumerical_expr_position_glosry.htm'\) "Glossary Entry") of type i and its default value is 1. Specifying a value less than or equal to 0 raises an exception of the class CX\_SY\_STRG\_PAR\_VAL.

Hints

-   The parameter occ has a different meaning here than in other functions used for searches.
-   Besides pcre and xpath, also the obsolete argument [regex](javascript:call_link\('abenstring_functions_regex_obs.htm'\)) can be used. Then an obsolete [POSIX regular expression](javascript:call_link\('abenregex_posix_syntax.htm'\)) must be passed.

Example

The IF block is reached in the following code section, since neither the first nor the last character in html occur in the system field sy-abcde.

DATA html TYPE string.
html = '<body>Text</body>'.
IF contains\_any\_not\_of( val = to\_upper( html ) start = sy-abcde ) AND
   contains\_any\_not\_of( val = to\_upper( html ) end   = sy-abcde ).
  ...
ENDIF.

Example

The following function call checks whether a type c field contains any non-digit character.

DATA postal\_code TYPE c LENGTH 5.
cl\_demo\_input=>request( CHANGING field = postal\_code ).
IF contains( val  = postal\_code
             pcre = \`\\D\` ).
  cl\_demo\_output=>display( \`Invalid postal code.\` ).
  RETURN.
ENDIF.

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Catchable Exceptions

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

-   Cause: Illegal offset or length specified in off and len.
    Runtime error: STRING\_OFFSET\_TOO\_LARGE

CX\_SY\_REGEX\_TOO\_COMPLEX

-   Cause: See [Exceptions in Regular Expressions](javascript:call_link\('abenregex_exceptions.htm'\)).
    Runtime error: REGEX\_TOO\_COMPLEX

CX\_SY\_STRG\_PAR\_VAL

-   Cause: A substring in substring or regular expression in regex is empty or the number of occurrences in occ is less than or equal to 0.
    Runtime error: STRG\_ILLEGAL\_PAR