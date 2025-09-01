  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) → 

Regular Expressions (regex)

ABAP supports two kinds of extended [regular expressions](javascript:call_link\('abenregular_expression_glosry.htm'\) "Glossary Entry"):

-   [Perl Compatible Regular Expressions (PCRE)](javascript:call_link\('abenpcre_glosry.htm'\) "Glossary Entry")

-   Regular Expressions in accordance with [POSIX](https://en.wikipedia.org/wiki/POSIX) standard 1003.2.

For both kinds of regular expressions, respective libraries are implemented in [ABAP Kernel](javascript:call_link\('abenkernel_glosry.htm'\) "Glossary Entry"):

-   The [PCRE2 library](https://www.pcre.org/) is implemented for PCRE regular expressions.

-   [Version 1.31 of the Boost.Regex Library](http://www.boost.org/doc/libs/1_31_0/libs/regex/doc/index.html) is implemented for POSIX regular expressions.

Regular expressions can be specified in statements and built-in functions for character string processing. The syntax is as follows:

-   For specifying PCRE regular expressions, the addition PCRE can be used in statements and the argument pcre can be used in functions.

-   For specifying POSIX regular expressions, the addition REGEX can be used in statements and the argument regex can be used in functions.

Special [system classes](javascript:call_link\('abenregex_system_classes.htm'\)) CL\_ABAP\_REGEX and CL\_ABAP\_MATCHER can handle both kinds of regular expressions.

A regular expression r is made up of literal characters and special characters in accordance with the [syntax of regular expressions](javascript:call_link\('abenregex_syntax.htm'\)) and represents a set of character strings. If text is one of the character strings represented by r, it means that r matches text or that r fits text. Two different regular expressions are the same if they match the same set of character strings.

Regular expressions can be used for [searching, replacing and matching](javascript:call_link\('abenregex_mtch.htm'\)) character strings.

Hints

-   A regular expression can have correct syntax but be too complex for to be executed, which raises a catchable exception of the class CX\_SY\_REGEX\_TOO\_COMPLEX. See [Exceptions in Regular Expressions](javascript:call_link\('abenregex_exceptions.htm'\)).

-   The example program [DEMO\_REGEX](javascript:call_link\('abenregex_abexa.htm'\)) and its enhancement DEMO\_REGEX\_TOY makes it possible to test the search and replace functionality by applying regular expressions to texts.

-   [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") also supports regular expressions with the built-in functions [REPLACE\_REGEXPR](javascript:call_link\('abensql_string_func.htm'\)), [LIKE\_REGEXPR](javascript:call_link\('abensql_string_func.htm'\)), and [OCCURRENCES\_REGEXPR](javascript:call_link\('abensql_string_func.htm'\)). These functions access the PCRE1 library implemented in the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry").

Continue
[regex - Syntax](javascript:call_link\('abenregex_syntax.htm'\))
[regex - Searching, Replacing, Matching](javascript:call_link\('abenregex_mtch.htm'\))
[regex - System Classes](javascript:call_link\('abenregex_system_classes.htm'\))
[regex - Exceptions](javascript:call_link\('abenregex_exceptions.htm'\))
![Example](exa.gif "Example") [regex - Demonstration Program](javascript:call_link\('abenregex_abexa.htm'\))