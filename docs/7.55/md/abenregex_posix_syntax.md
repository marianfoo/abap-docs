  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_processing_expr_func.htm) →  [Regular Expressions (regex)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenregular_expressions.htm) →  [regex - Syntax](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenregex_syntax.htm) → 

regex - POSIX Syntax

Regular expressions with POSIX syntax can be specified after an addition REGEX of [statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenregex_mtch.htm) or for the argument regex of [built-in functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenregex_mtch.htm). Respective objects of the [system classes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenregex_system_classes.htm) CL\_ABAP\_REGEX and CL\_ABAP\_MATCHER can be created with the factory method CREATE\_POSIX.

The POSIX syntax of regular expressions distinguishes the following cases:

-   [Single character patterns](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenregex_posix_syntax_signs.htm)

-   [Character string patterns](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenregex_posix_syntax_operators.htm)

-   [Search patterns](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenregex_posix_search.htm)

-   [Replace patterns](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenregex_posix_replace.htm)

-   [Simplified regular expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenregex_posix_simple.htm)

Using the POSIX syntax for single characters and character strings, regular expressions can be created that match whole character strings or substrings of character strings. The POSIX syntax for find and replace offers some additional elements that support the finding and replacement of substrings in character strings.

The special characters that are valid in regular expressions according to POSIX are summarized in:

-   [Special Characters in Regular Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenregex_posix_syntax_specials.htm)

Hint

The PCRE syntax is more powerful than the POSIX syntax. Furthermore, PCRE regular expressions generally perform better than the POSIX regular expressions supported by ABAP.

Copyright Note

This software uses [Version 1.31](http://www.boost.org/doc/libs/1_31_0/libs/regex/doc/index.html) of the Boost.Regex Library. Copyright (c) 1998-2003 Dr. John Maddock. Attributes of the standard not yet support in this version are [listed here](http://www.boost.org/doc/libs/1_31_0/libs/regex/doc/standards.html).

Continue
[POSIX regex - Single Character Patterns](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenregex_posix_syntax_signs.htm)
[POSIX regex - Character String Patterns](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenregex_posix_syntax_operators.htm)
[POSIX regex - Search Patterns](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenregex_posix_search.htm)
[POSIX regex - Replace Patterns](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenregex_posix_replace.htm)
[POSIX regex - Simplified Regular Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenregex_posix_simple.htm)
[POSIX regex - Special Characters in Regular Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenregex_posix_syntax_specials.htm)