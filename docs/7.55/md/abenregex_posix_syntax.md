  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [Regular Expressions (regex)](javascript:call_link\('abenregular_expressions.htm'\)) →  [regex - Syntax](javascript:call_link\('abenregex_syntax.htm'\)) → 

regex - POSIX Syntax

Regular expressions with POSIX syntax can be specified after an addition REGEX of [statements](javascript:call_link\('abenregex_mtch.htm'\)) or for the argument regex of [built-in functions](javascript:call_link\('abenregex_mtch.htm'\)). Respective objects of the [system classes](javascript:call_link\('abenregex_system_classes.htm'\)) CL\_ABAP\_REGEX and CL\_ABAP\_MATCHER can be created with the factory method CREATE\_POSIX.

The POSIX syntax of regular expressions distinguishes the following cases:

-   [Single character patterns](javascript:call_link\('abenregex_posix_syntax_signs.htm'\))

-   [Character string patterns](javascript:call_link\('abenregex_posix_syntax_operators.htm'\))

-   [Search patterns](javascript:call_link\('abenregex_posix_search.htm'\))

-   [Replace patterns](javascript:call_link\('abenregex_posix_replace.htm'\))

-   [Simplified regular expressions](javascript:call_link\('abenregex_posix_simple.htm'\))

Using the POSIX syntax for single characters and character strings, regular expressions can be created that match whole character strings or substrings of character strings. The POSIX syntax for find and replace offers some additional elements that support the finding and replacement of substrings in character strings.

The special characters that are valid in regular expressions according to POSIX are summarized in:

-   [Special Characters in Regular Expressions](javascript:call_link\('abenregex_posix_syntax_specials.htm'\))

Hint

The PCRE syntax is more powerful than the POSIX syntax. Furthermore, PCRE regular expressions generally perform better than the POSIX regular expressions supported by ABAP.

Copyright Note

This software uses [Version 1.31](http://www.boost.org/doc/libs/1_31_0/libs/regex/doc/index.html) of the Boost.Regex Library. Copyright (c) 1998-2003 Dr. John Maddock. Attributes of the standard not yet support in this version are [listed here](http://www.boost.org/doc/libs/1_31_0/libs/regex/doc/standards.html).

Continue
[POSIX regex - Single Character Patterns](javascript:call_link\('abenregex_posix_syntax_signs.htm'\))
[POSIX regex - Character String Patterns](javascript:call_link\('abenregex_posix_syntax_operators.htm'\))
[POSIX regex - Search Patterns](javascript:call_link\('abenregex_posix_search.htm'\))
[POSIX regex - Replace Patterns](javascript:call_link\('abenregex_posix_replace.htm'\))
[POSIX regex - Simplified Regular Expressions](javascript:call_link\('abenregex_posix_simple.htm'\))
[POSIX regex - Special Characters in Regular Expressions](javascript:call_link\('abenregex_posix_syntax_specials.htm'\))