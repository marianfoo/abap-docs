  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) → 

Regular Expressions

ABAP supports extended [regular expressions](javascript:call_link\('abenregular_expression_glosry.htm'\) "Glossary Entry") in accordance with [POSIX](http://www.pasc.org/) standard 1003.2. Regular expressions can be used after the addition REGEX of the statements

-   [FIND](javascript:call_link\('abapfind_pattern.htm'\))

-   [REPLACE](javascript:call_link\('abapreplace_in_pattern.htm'\))

and also as an argument of the following functions

-   [count, count\_...](javascript:call_link\('abencount_functions.htm'\))

-   [contains\_...](javascript:call_link\('abencontains_functions.htm'\))

-   [find, find\_...](javascript:call_link\('abensearch_functions.htm'\))

-   [match](javascript:call_link\('abenmatch_functions.htm'\))

-   [matches](javascript:call_link\('abenmatches_functions.htm'\))

-   [replace](javascript:call_link\('abenreplace_functions.htm'\))

-   [substring, substring\_...](javascript:call_link\('abensubstring_functions.htm'\))

where they are used for searching in and testing character strings. The classes

-   CL\_ABAP\_REGEX

-   CL\_ABAP\_MATCHER

permit object-oriented use of regular expressions.

A regular expression r is made up of literal characters and special characters in accordance with the [syntax of regular expressions](javascript:call_link\('abenregex_syntax.htm'\)) and represents a set of character strings. If text is a character string represented by r, this indicates that r matches text or that r fits text. Two (different) regular expressions match if they fit the same set of character strings.

If a regular expression is applied to a character string text as a search string, this indicates that a search for matches of the regular expression with substrings of text is intended. In this case, special characters in the regular expression do not match characters, but instead match positions, thus influencing the type and number of occurrences. When character strings are [tested](javascript:call_link\('abenregex_test.htm'\)), this involves checking whether the full content matches a pattern.

Notes

-   A regular expression can have correct syntax, but be too complex for to be executed. This raises a handleable exception of the class CX\_SY\_REGEX\_TOO\_COMPLEX. See [Exceptions in Regular Expressions](javascript:call_link\('abenregex_exceptions.htm'\)).

-   The example program DEMO\_REGEX and its enhancement DEMO\_REGEX\_TOY makes it possible to test the search and replace functions by applying regular expressions to texts.

Copyright Note

This software uses the [Boost.Regex Library](http://www.boost.org/doc/libs/1_61_0/libs/regex/doc/html/index.html). Copyright (c) 1998-2013 Dr. John Maddock.

Continue
[Syntax of Regular Expressions](javascript:call_link\('abenregex_syntax.htm'\))
[Testing Regular Expressions](javascript:call_link\('abenregex_test.htm'\))
[Exceptions in Regular Expressions](javascript:call_link\('abenregex_exceptions.htm'\))
![Example](exa.gif "Example") [Regular Expressions](javascript:call_link\('abenregex_abexa.htm'\))