  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Character String and Byte String Processing](javascript:call_link\('abencharacter_string_obsolete.htm'\)) → 

Obsolete Regular Expression Syntax

ABAP supports several [syntax flavors](javascript:call_link\('abenregex_syntax.htm'\)) for [regular expressions](javascript:call_link\('abenregular_expression_glosry.htm'\) "Glossary Entry"). Because of these, the [POSIX syntax](javascript:call_link\('abenregex_posix_syntax.htm'\)) is obsolete.

Using regular expressions in POSIX syntax leads to a warning from the syntax check that can be hidden by the pragma ##regex\_posix. It is recommended to [migrate](javascript:call_link\('abenregex_migrating_posix.htm'\)) regular expressions from POSIX to [PCRE](javascript:call_link\('abenregex_pcre_syntax.htm'\)) or another regular expression syntax supported by ABAP.

The PCRE syntax is more powerful than the obsolete POSIX syntax. Furthermore, PCRE regular expressions generally perform better than the POSIX regular expressions supported by ABAP.

-   [POSIX regular expression](javascript:call_link\('abenregex_posix_syntax.htm'\)).
-   [FIND, REPLACE REGEX posix](javascript:call_link\('abapfind_replace_regex_obs.htm'\))
-   [string\_func - regex](javascript:call_link\('abenstring_functions_regex_obs.htm'\))

Continue
[regex - POSIX Syntax (obsolete)](javascript:call_link\('abenregex_posix_syntax.htm'\))
[FIND, REPLACE REGEX posix (obsolete)](javascript:call_link\('abapfind_replace_regex_obs.htm'\))
[string\_func - regex (obsolete)](javascript:call_link\('abenstring_functions_regex_obs.htm'\))