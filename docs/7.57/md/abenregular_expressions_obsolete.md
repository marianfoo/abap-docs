  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Character String and Byte String Processing](javascript:call_link\('abencharacter_string_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Obsolete Regular Expression Syntax, ABENREGULAR_EXPRESSIONS_OBSOLETE, 757%0D%0A%0D%0A
Error:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Obsolete Regular Expression Syntax

ABAP supports several [syntax flavors](javascript:call_link\('abenregex_syntax.htm'\)) for [regular expressions](javascript:call_link\('abenregular_expression_glosry.htm'\) "Glossary Entry"). Because of these, the [POSIX syntax](javascript:call_link\('abenregex_posix_syntax.htm'\)) is obsolete.

Using regular expressions in POSIX syntax leads to a warning from the syntax check that can be hidden by the pragma ##regex\_posix. It is recommended that regular expressions are [migrated](javascript:call_link\('abenregex_migrating_posix.htm'\)) from POSIX to [PCRE](javascript:call_link\('abenregex_pcre_syntax.htm'\)) or another regular expression syntax supported by ABAP.

The PCRE syntax is more powerful than the obsolete POSIX syntax. Furthermore, PCRE regular expressions generally perform better than the POSIX regular expressions supported by ABAP.

-   [POSIX regular expression](javascript:call_link\('abenregex_posix_syntax.htm'\)).
-   [FIND, REPLACE REGEX posix](javascript:call_link\('abapfind_replace_regex_obs.htm'\))
-   [string\_func - regex](javascript:call_link\('abenstring_functions_regex_obs.htm'\))

Continue
[regex - POSIX Syntax (obsolete)](javascript:call_link\('abenregex_posix_syntax.htm'\))
[FIND, REPLACE REGEX posix (obsolete)](javascript:call_link\('abapfind_replace_regex_obs.htm'\))
[string\_func - regex (Obsolete)](javascript:call_link\('abenstring_functions_regex_obs.htm'\))