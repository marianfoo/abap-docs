  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) → 

Regular Expressions (regex)

A regular expression r is made up of literal characters and special characters in accordance with the [syntax of regular expressions](javascript:call_link\('abenregex_syntax.htm'\)) and represents a set of character strings. If text is one of the character strings represented by r, it means that r matches text or that r fits text. Two different regular expressions are the same if they match the same set of character strings.

ABAP supports the following kinds of extended [regular expressions](javascript:call_link\('abenregular_expression_glosry.htm'\) "Glossary Entry"):

-   [Perl Compatible Regular Expressions (PCRE)](javascript:call_link\('abenpcre_glosry.htm'\) "Glossary Entry") in [PCRE syntax](javascript:call_link\('abenregex_pcre_syntax.htm'\))
-   [XPath regular expressions](javascript:call_link\('abenxpath_regex_glosry.htm'\) "Glossary Entry") in [XPath syntax](javascript:call_link\('abenregex_xpath_syntax.htm'\))
-   [XSD regular expressions](javascript:call_link\('abenxsd_regex_glosry.htm'\) "Glossary Entry") in [XSD syntax](javascript:call_link\('abenregex_xsd_syntax.htm'\))
-   [POSIX regular expressions](javascript:call_link\('abenposix_regex_glosry.htm'\) "Glossary Entry") in [POSIX syntax](javascript:call_link\('abenregex_posix_syntax.htm'\)) (obsolete)

For Perl and POSIX regular expressions, respective libraries are implemented in [ABAP Kernel](javascript:call_link\('abenkernel_glosry.htm'\) "Glossary Entry"):

-   The [PCRE2 library](https://www.pcre.org/) is implemented for PCRE regular expressions.
-   [Version 1.31 of the Boost.Regex Library](http://www.boost.org/doc/libs/1_31_0/libs/regex/doc/index.html) is implemented for POSIX regular expressions (obsolete).

XPath and XSD regular expressions are internally converted into Perl syntax by the ABAP runtime framework.

Regular expressions can be used for [searching, replacing and matching](javascript:call_link\('abenregex_mtch.htm'\)) character strings. To do so, regular expressions can be specified in statements and built-in functions for character string processing:

-   For all kinds of regular expressions, objects of system class [CL\_ABAP\_REGEX](javascript:call_link\('abenregex_system_classes.htm'\)) can be created. Those objects can be used with the addition [REGEX](javascript:call_link\('abapfind_pattern.htm'\)) of the statements [FIND](javascript:call_link\('abapfind.htm'\)) and [REPLACE](javascript:call_link\('abapreplace.htm'\)) and with the system class [CL\_ABAP\_MATCHER](javascript:call_link\('abenregex_system_classes.htm'\)).
-   The following language elements address specific regular expressions:
    -   For PCRE regular expressions, the addition [PCRE](javascript:call_link\('abapfind_pattern.htm'\)) can be used in the statements [FIND](javascript:call_link\('abapfind.htm'\)) and [REPLACE](javascript:call_link\('abapreplace.htm'\)). The argument [pcre](javascript:call_link\('abenstring_functions_regex.htm'\)) can be used in built-in functions for strings.
    -   For XPath regular expressions, the argument [xpath](javascript:call_link\('abenstring_functions_regex.htm'\)) can be used in some built-in functions for strings.
    -   For POSIX regular expressions, the addition REGEX can be used in obsolete variants of the statements [FIND and REPLACE](javascript:call_link\('abapfind_replace_regex_obs.htm'\)) and the obsolete argument [regex](javascript:call_link\('abenstring_functions_regex_obs.htm'\)) can be used in built-in functions for strings.

Regular expressions in [POSIX syntax](javascript:call_link\('abenregex_posix_syntax.htm'\)) are obsolete. Using regular expressions in POSIX syntax leads to a warning from syntax check that can be hidden by the pragma ##regex\_posix. It is recommended that [regular expressions are migrated from POSIX to PCRE](javascript:call_link\('abenregex_migrating_posix.htm'\)) or another regular expression syntax supported by ABAP.

Hints

-   A regular expression can have correct syntax but be too complex for to be executed, which raises a catchable exception of the class CX\_SY\_REGEX\_TOO\_COMPLEX. See [Exceptions in Regular Expressions](javascript:call_link\('abenregex_exceptions.htm'\)).
-   The test and demonstration program DEMO\_REGEX makes it possible to test the search and replace functionality by applying regular expressions to texts.
-   [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") and [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") also support regular expressions with the built-in functions [REPLACE\_REGEXPR](javascript:call_link\('abensql_functions_string.htm'\)), [LIKE\_REGEXPR](javascript:call_link\('abensql_functions_string.htm'\)), and [OCCURRENCES\_REGEXPR](javascript:call_link\('abensql_functions_string.htm'\)). These functions access the PCRE1 library implemented in the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry").

Continue
[regex - Syntax](javascript:call_link\('abenregex_syntax.htm'\))
[regex - Searching, Replacing, Matching](javascript:call_link\('abenregex_mtch.htm'\))
[regex - System Classes](javascript:call_link\('abenregex_system_classes.htm'\))
[regex - Exceptions](javascript:call_link\('abenregex_exceptions.htm'\))
[regex - Migrating from POSIX to PCRE](javascript:call_link\('abenregex_migrating_posix.htm'\))