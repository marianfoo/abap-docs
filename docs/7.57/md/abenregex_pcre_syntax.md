  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_processing_expr_func.htm) →  [Regular Expressions (regex)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregular_expressions.htm) →  [regex - Syntax](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_syntax.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: regex - PCRE Syntax, ABENREGEX_PCRE_SYNTAX, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0
D%0ASuggestion for improvement:)

regex - PCRE Syntax

Regular expressions with PCRE syntax can be specified after the addition [PCRE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind_pattern.htm) of the statements [FIND](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind.htm) and [REPLACE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace.htm) and the argument [pcre](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_functions_regex.htm) of built-in functions for strings. Objects for PCRE regular expressions can be created with the factory method CREATE\_PCRE of the system class [CL\_ABAP\_REGEX](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_system_classes.htm) to be used in statements [FIND](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind.htm) and [REPLACE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace.htm) or with the system class [CL\_ABAP\_MATCHER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_system_classes.htm).

Currently, there is no detailed description of the PCRE syntax for regular expressions in the ABAP keyword documentation.

-   For a short syntax overview, see
    
    [Special Characters in PCRE Regular Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_pcre_syntax_specials.htm)
    
-   For the complete documentation, refer to:
    
    [Perl documentation perlre](https://perldoc.perl.org/perlre.html)
    

A regular expression in PCRE syntax can be compiled in a normal or extended mode. In the extended mode, most unescaped whitespace characters (blanks and line breaks) of the pattern are ignored outside character classes and comments can be placed behind #. In ABAP statements and built-in functions, the extended mode is switched on by default and can be switched off with [(?-x)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_pcre_syntax_specials.htm) in the regular expression. When using CL\_ABAP\_REGEX, it can be switched by the parameter EXTENDED of method CREATE\_PCRE.

For regular expressions in PCRE syntax, it can be defined whether valid [UTF-16](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenutf16_glosry.htm "Glossary Entry") character strings are expected or not. In ABAP statements and built-in functions, a PCRE regular expression can be introduced with [(\*UTF)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_pcre_syntax_specials.htm) in order to check for valid [UTF-16](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenutf16_glosry.htm "Glossary Entry") strings. When using CL\_ABAP\_REGEX, the parameter UNICODE\_HANDLING of method CREATE\_PCRE can be used. When the strict mode for working with UTF-16 strings is switched on, a [surrogate pair](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensurrogate_pair_glosry.htm "Glossary Entry") is handled as a single character (see example for [counting](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencount_functions.htm)).

Hints

-   The PCRE syntax is more powerful than the obsolete [POSIX syntax](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_posix_syntax.htm). Furthermore, PCRE regular expressions generally perform better than the POSIX regular expressions supported by ABAP. Therefore, it is recommended that [POSIX regular expressions are migrated to PCRE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_migrating_posix.htm).
-   The PCRE syntax supports callouts that call ABAP methods during matching an regular expression with [CL\_ABAP\_MATCHER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_system_classes.htm).
-   [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_glosry.htm "Glossary Entry") and [ABAP CDS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cds_glosry.htm "Glossary Entry") also support the PCRE syntax with the built-in functions [REPLACE\_REGEXPR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions_string.htm), [LIKE\_REGEXPR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions_string.htm), and [OCCURRENCES\_REGEXPR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions_string.htm). These functions access the PCRE1 library implemented in the [SAP HANA database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhana_database_glosry.htm "Glossary Entry").
-   The test and demonstration program DEMO\_REGEX allows PCRE syntax to be tested by selecting PCRE.

Example

Searching for a PCRE regular expression in a character string. See also the program DEMO\_FIND\_REGEX.

FINAL(regex)    = \`(\\b.at\\b)\`.
FINAL(text)     = \`Cathy's cat with the hat sat on Matt's mat.\`.
FIND PCRE regex IN text SUBMATCHES FINAL(subm).
IF sy-subrc = 0.
  cl\_demo\_output=>display( subm ).
ENDIF.

Example

PCRE regular expressions support non-greedy behavior by placing a question mark (?) behind quantifiers as for example the wildcard character asterisk (\*). In the following example, the asterisk in the first regular expression is greedy and finds everything between the first <i> and the last </i>. In the second regular expression, the asterisk is marked as non-greedy and only the substring between the first <i> and the following </i> is found. Non-greedy behavior is not supported in the obsolete [POSIX syntax](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_posix_syntax.htm) and other workarounds as for example \[^<\]\* have to be used. For more information, see [New features in PCRE compared to POSIX](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_posix_pcre_improve.htm).

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

-   [PCRE Regular Expression with Callouts](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpcre_callout_abexa.htm)
-   [Parsing with PCRE Regular Expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpcre_parsing_abexa.htm)

Copyright Note

This software uses the [PCRE2](https://www.pcre.org/) library under the [PCRE2 LICENCE](https://github.com/rurban/pcre/blob/master/LICENCE).

Continue
[PCRE regex - Special Characters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_pcre_syntax_specials.htm)
![Example](exa.gif "Example") [regex - Parsing with PCRE Regular Expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpcre_parsing_abexa.htm)