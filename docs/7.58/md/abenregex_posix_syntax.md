  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Character String and Byte String Processing](javascript:call_link\('abencharacter_string_obsolete.htm'\)) →  [Obsolete Regular Expression Syntax](javascript:call_link\('abenregular_expressions_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20regex%20-%20POSIX%20Syntax%20%28obsolete%29%2C%20ABENREGEX_POSIX_SYNTAX%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

regex - POSIX Syntax (obsolete)

Regular expressions with POSIX syntax can be specified after the addition REGEX in obsolete variants of the statements [FIND and REPLACE](javascript:call_link\('abapfind_replace_regex_obs.htm'\)) and the obsolete argument [regex](javascript:call_link\('abenstring_functions_regex_obs.htm'\)) of built-in functions for strings. Objects for POSIX regular expressions can be created with the obsolete factory method CREATE\_POSIX of the system class [CL\_ABAP\_REGEX](javascript:call_link\('abenregex_system_classes.htm'\)) to be used in statements [FIND](javascript:call_link\('abapfind.htm'\)) and [REPLACE](javascript:call_link\('abapreplace.htm'\)) or with the system class [CL\_ABAP\_MATCHER](javascript:call_link\('abenregex_system_classes.htm'\)).

The POSIX syntax of regular expressions distinguishes the following cases:

-   [Single character patterns](javascript:call_link\('abenregex_posix_syntax_signs.htm'\))
-   [Character string patterns](javascript:call_link\('abenregex_posix_syntax_operators.htm'\))
-   [Search patterns](javascript:call_link\('abenregex_posix_search.htm'\))
-   [Replace patterns](javascript:call_link\('abenregex_posix_replace.htm'\))
-   [Simplified regular expressions](javascript:call_link\('abenregex_posix_simple.htm'\))

Using the POSIX syntax for single characters and character strings, regular expressions can be created that match entire character strings or substrings of character strings. The POSIX syntax for find and replace offers some additional elements that support the finding and replacement of substrings in character strings.

The special characters that are valid in regular expressions according to POSIX are summarized in:

-   [Special Characters in Regular Expressions](javascript:call_link\('abenregex_posix_syntax_specials.htm'\))

Regular expressions in POSIX syntax are obsolete. Using regular expressions in POSIX syntax leads to a warning from the syntax check that can be hidden by the pragma ##regex\_posix. It is recommended that regular expressions are [migrated](javascript:call_link\('abenregex_migrating_posix.htm'\)) from POSIX to [PCRE](javascript:call_link\('abenregex_pcre_syntax.htm'\)) or another regular expression syntax supported by ABAP.

Hints

-   The PCRE syntax is more powerful than the POSIX syntax. Furthermore, PCRE regular expressions generally perform better than the POSIX regular expressions supported by ABAP.
-   Creating objects of class CL\_ABAP\_REGEX with the operator [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)) or the statement [CREATE OBJECT](javascript:call_link\('abapcreate_object.htm'\)) also creates instances for POSIX regular expressions.
-   The test and demonstration program DEMO\_REGEX allows POSIX syntax to be tested by selecting POSIX.

Copyright Note

This software uses [Version 1.31](http://www.boost.org/doc/libs/1_31_0/libs/regex/doc/index.html) of the Boost.Regex Library. Copyright (c) 1998-2003 Dr. John Maddock. Attributes of the standard not yet support in this version are [listed here](http://www.boost.org/doc/libs/1_31_0/libs/regex/doc/standards.html).

The syntax and semantics described here may differ from other regular expression implementations based on the POSIX standard, or even the Boost 1.31 regular expression library in a different configuration.

Continue
[POSIX regex - Single Character Patterns (obsolete)](javascript:call_link\('abenregex_posix_syntax_signs.htm'\))
[POSIX regex - Character String Patterns (obsolete)](javascript:call_link\('abenregex_posix_syntax_operators.htm'\))
[POSIX regex - Search Patterns (obsolete)](javascript:call_link\('abenregex_posix_search.htm'\))
[POSIX regex - Replacement Patterns (obsolete)](javascript:call_link\('abenregex_posix_replace.htm'\))
[POSIX regex - Simplified Regular Expressions (obsolete)](javascript:call_link\('abenregex_posix_simple.htm'\))
[POSIX regex - Special Characters (obsolete)](javascript:call_link\('abenregex_posix_syntax_specials.htm'\))