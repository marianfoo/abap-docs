  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [Regular Expressions (regex)](javascript:call_link\('abenregular_expressions.htm'\)) →  [regex - Syntax](javascript:call_link\('abenregex_syntax.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20regex%20-%20PCRE%20Syntax%2C%20ABENREGEX_PCRE_SYNTAX%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

regex - PCRE Syntax

Regular expressions with PCRE syntax can be specified after the addition [PCRE](javascript:call_link\('abapfind_pattern.htm'\)) of the statements [FIND](javascript:call_link\('abapfind.htm'\)) and [REPLACE](javascript:call_link\('abapreplace.htm'\)) and the argument [pcre](javascript:call_link\('abenstring_functions_regex.htm'\)) of built-in functions for strings. Objects for PCRE regular expressions can be created with the factory method CREATE\_PCRE of the system class [CL\_ABAP\_REGEX](javascript:call_link\('abenregex_system_classes.htm'\)) to be used in statements [FIND](javascript:call_link\('abapfind.htm'\)) and [REPLACE](javascript:call_link\('abapreplace.htm'\)) or with the system class [CL\_ABAP\_MATCHER](javascript:call_link\('abenregex_system_classes.htm'\)).

Currently, there is no detailed description of the PCRE syntax for regular expressions in the ABAP keyword documentation.

-   For a short syntax overview, see
    
    [Special Characters in PCRE Regular Expressions](javascript:call_link\('abenregex_pcre_syntax_specials.htm'\))
    
-   For the complete documentation, refer to:
    
    [Perl documentation perlre](https://perldoc.perl.org/perlre.html)
    

A regular expression in PCRE syntax can be compiled in a normal or extended mode. In the extended mode, most unescaped whitespace characters (blanks and line breaks) of the pattern are ignored outside character classes and comments can be placed behind #. In ABAP statements and built-in functions, the extended mode is switched on by default and can be switched off with [(?-x)](javascript:call_link\('abenregex_pcre_syntax_specials.htm'\)) in the regular expression. When using CL\_ABAP\_REGEX, it can be switched by the parameter EXTENDED of method CREATE\_PCRE.

For regular expressions in PCRE syntax, it can be defined whether valid [UTF-16](javascript:call_link\('abenutf16_glosry.htm'\) "Glossary Entry") character strings are expected or not. In ABAP statements and built-in functions, a PCRE regular expression can be introduced with [(\*UTF)](javascript:call_link\('abenregex_pcre_syntax_specials.htm'\)) in order to check for valid [UTF-16](javascript:call_link\('abenutf16_glosry.htm'\) "Glossary Entry") strings. When using CL\_ABAP\_REGEX, the parameter UNICODE\_HANDLING of method CREATE\_PCRE can be used. When the strict mode for working with UTF-16 strings is switched on, a [surrogate pair](javascript:call_link\('abensurrogate_pair_glosry.htm'\) "Glossary Entry") is handled as a single character (see example for [counting](javascript:call_link\('abencount_functions.htm'\))).

Hints

-   The PCRE syntax is more powerful than the obsolete [POSIX syntax](javascript:call_link\('abenregex_posix_syntax.htm'\)). Furthermore, PCRE regular expressions generally perform better than the POSIX regular expressions supported by ABAP. Therefore, it is recommended that [POSIX regular expressions are migrated to PCRE](javascript:call_link\('abenregex_migrating_posix.htm'\)).
-   The PCRE syntax supports callouts that call ABAP methods during matching an regular expression with [CL\_ABAP\_MATCHER](javascript:call_link\('abenregex_system_classes.htm'\)).
-   [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") and [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") also support the PCRE syntax with the built-in functions [REPLACE\_REGEXPR](javascript:call_link\('abensql_functions_string.htm'\)), [LIKE\_REGEXPR](javascript:call_link\('abensql_functions_string.htm'\)), and [OCCURRENCES\_REGEXPR](javascript:call_link\('abensql_functions_string.htm'\)). These functions access the PCRE1 library implemented in the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry").
-   The test and demonstration program DEMO\_REGEX allows PCRE syntax to be tested by selecting PCRE.

Example

Searching for a PCRE regular expression in a character string. See also the class CL\_DEMO\_FIND\_REGEX.

FINAL(regex)    = \`(\\b.at\\b)\`.
FINAL(text)     = \`Cathy's cat with the hat sat on Matt's mat.\`.
FIND PCRE regex IN text SUBMATCHES FINAL(subm).
IF sy-subrc = 0.
  cl\_demo\_output=>display( subm ).
ENDIF.

Example

PCRE regular expressions support non-greedy behavior by placing a question mark (?) behind quantifiers as for example the wildcard character asterisk (\*). In the following example, the asterisk in the first regular expression is greedy and finds everything between the first <i> and the last </i>. In the second regular expression, the asterisk is marked as non-greedy and only the substring between the first <i> and the following </i> is found. Non-greedy behavior is not supported in the obsolete [POSIX syntax](javascript:call_link\('abenregex_posix_syntax.htm'\)) and other workarounds as for example \[^<\]\* have to be used. For more information, see [New features in PCRE compared to POSIX](javascript:call_link\('abenregex_posix_pcre_improve.htm'\)).

FINAL(text)  = \`<i>abc</i>def<i>ghi</i>\`.
FIND PCRE \`<i>(.\*)</i>\` IN text SUBMATCHES FINAL(subm1).
IF sy-subrc = 0.
  cl\_demo\_output=>write( |Greedy: { subm1 }| ).
ENDIF.
FIND PCRE \`<i>(.\*?)</i>\` IN text SUBMATCHES FINAL(subm2).
IF sy-subrc = 0.
  cl\_demo\_output=>write( |Non-greedy: { subm2 }| ).
ENDIF.
cl\_demo\_output=>display( ).

Example

This example shows the effect of the extended mode, that is switched on by default and might lead to unexpected results. All replacements yield the same result a-b except the one in r5, where the line break character is not found but instead all empty spaces are replaced by the replacement character \-. The reason is that the pattern |\\n| consists of nothing but the line break character and this is ignored in the extended mode. Therefore, the pattern is in fact an empty string and yields the same result as specifying an empty string directly. By switching off the extended mode with (?-x), the linebreak character is not ignored and yields the same result as the special PCRE character \\n, which is expressed in different ways here.

FINAL(text) =  \`a\` && |\\n| && \`b\`.
FINAL(r0) = replace( val = text sub  = |\\n|        with = '-' occ = 0 ).
FINAL(r1) = replace( val = text pcre = \`\\n\`        with = '-' occ = 0 ).
FINAL(r2) = replace( val = text pcre = \`(?-x)\\n\`   with = '-' occ = 0 ).
FINAL(r3) = replace( val = text pcre = |\\\\n|       with = '-' occ = 0 ).
FINAL(r4) = replace( val = text pcre = |(?-x)\\\\n|  with = '-' occ = 0 ).
FINAL(r5) = replace( val = text pcre = |\\n|        with = '-' occ = 0 ).
FINAL(r6) = replace( val = text pcre = |(?-x)\\n|   with = '-' occ = 0 ).
FINAL(re) = replace( val = text pcre = \`\`          with = '-' occ = 0 ).
ASSERT r0 = r1.
ASSERT r0 = r2.
ASSERT r0 = r3.
ASSERT r0 = r4.
ASSERT r0 = r6.
ASSERT re = r5.
cl\_demo\_output=>new(
  )->write( r0
  )->write( r5 )->display( ).

Executable Examples

-   [PCRE Regular Expression with Callouts](javascript:call_link\('abenpcre_callout_abexa.htm'\))
-   [Parsing with PCRE Regular Expression](javascript:call_link\('abenpcre_parsing_abexa.htm'\))

Copyright Note

This software uses the [PCRE2](https://www.pcre.org/) library under the [PCRE2 LICENCE](https://github.com/rurban/pcre/blob/master/LICENCE).

Continue
[PCRE regex - Special Characters](javascript:call_link\('abenregex_pcre_syntax_specials.htm'\))
![Example](exa.gif "Example") [regex - Parsing with PCRE Regular Expression](javascript:call_link\('abenpcre_parsing_abexa.htm'\))