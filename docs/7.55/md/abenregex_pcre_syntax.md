  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [Regular Expressions (regex)](javascript:call_link\('abenregular_expressions.htm'\)) →  [regex - Syntax](javascript:call_link\('abenregex_syntax.htm'\)) → 

regex - PCRE Syntax

Regular expressions with PCRE syntax can be specified after an addition PCRE of [statements](javascript:call_link\('abenregex_mtch.htm'\)) or for the argument pcre of [built-in functions](javascript:call_link\('abenregex_mtch.htm'\)). Respective objects of the [system classes](javascript:call_link\('abenregex_system_classes.htm'\)) CL\_ABAP\_REGEX and CL\_ABAP\_MATCHER can be created with the factory method CREATE\_PCRE.

Currently, there is no detailed description of the PCRE syntax for regular expressions in the ABAP keyword documentation.

-   For the complete documentation, please refer to:

[Perl documentation perlre](https://perldoc.perl.org/perlre.html)

-   For a short syntax overview, please refer to:

[PCRE2 documentation pcre2syntax man page](https://www.pcre.org/current/doc/html/pcre2syntax.html)

Hint

The PCRE syntax is more powerful than the POSIX syntax. Furthermore, PCRE regular expressions generally perform better than the POSIX regular expressions supported by ABAP.

Example

PCRE regular expressions support non-greedy behavior by placing a question mark (?) behind wildcard characters as for example the asterisk (\*). In the following example, the asterisk in the first regular expression is greedy and finds everything between the first <i> and the last </i>. In the second regular expression, the asterisk is marked as non-greedy and only the substring between the first <i> and the following </i> is found. Non-greedy behavior is not supported in [POSIX syntax](javascript:call_link\('abenregex_posix_syntax.htm'\)) and other workarounds as for example \[^<\]\* have to be used.

DATA(text)  = \`<i>abc</i>def<i>ghi</i>\`.
FIND PCRE \`<i>(.\*)</i>\` IN text SUBMATCHES DATA(subm1).
IF sy-subrc = 0.
  cl\_demo\_output=>write( |Greedy: { subm1 }| ).
ENDIF.
FIND PCRE \`<i>(.\*?)</i>\` IN text SUBMATCHES DATA(subm2).
IF sy-subrc = 0.
  cl\_demo\_output=>write( |Non-greedy: { subm2 }| ).
ENDIF.
cl\_demo\_output=>display( ).

Copyright Note

This software uses the [PCRE2](https://www.pcre.org/) library under the [PCRE2 LICENCE](https://github.com/rurban/pcre/blob/master/LICENCE).