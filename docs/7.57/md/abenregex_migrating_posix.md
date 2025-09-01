  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [Regular Expressions (regex)](javascript:call_link\('abenregular_expressions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: regex - Migrating from POSIX to PCRE, ABENREGEX_MIGRATING_POSIX, 757%0D%0A%0D%0AError
:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

regex - Migrating from POSIX to PCRE

The ABAP Kernel of an [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry") implements two libraries for regular expressions:

-   The [PCRE2 library](https://www.pcre.org/) for [PCRE regular expressions](javascript:call_link\('abenpcre_regex_glosry.htm'\) "Glossary Entry").
-   [Version 1.31 of the Boost.Regex Library](http://www.boost.org/doc/libs/1_31_0/libs/regex/doc/index.html) for [POSIX regular expressions](javascript:call_link\('abenposix_regex_glosry.htm'\) "Glossary Entry") (obsolete).

Regular expressions in [POSIX syntax](javascript:call_link\('abenregex_posix_syntax.htm'\)) are obsolete. Using regular expressions in POSIX syntax leads to a warning from syntax check that can be hidden by the pragma ##regex\_posix. Therefore, it is recommended that regular expressions are migrated from POSIX to [PCRE syntax](javascript:call_link\('abenregex_pcre_syntax.htm'\)) or another regular expression syntax supported by ABAP.

The following table provides a general troubleshooting for migrating from POSIX to PCRE:

Symptom

Possible Solutions

The PCRE library rejects the pattern (e.g. by giving a compiler error or raising an exception)

Make sure to not use any features that are supported by POSIX but not by PCRE. Also pay close attention to the error message, which often contains useful information.

The pattern does not match what it should after migrating to PCRE

Make sure that you have taken PCRE's extended mode into account by either explicitly encoding whitespaces or by disabling extended mode. Ensure that you have set the correct Unicode handling for your context.

The following topics provide detailed assistance for the migration from POSIX to PCRE.

-   [Incompatibilities between POSIX and PCRE](javascript:call_link\('abenregex_posix_pcre_incompat.htm'\))
-   [New features in PCRE compared to POSIX](javascript:call_link\('abenregex_posix_pcre_improve.htm'\))

Continue
[regex - Incompatibilities Between POSIX and PCRE](javascript:call_link\('abenregex_posix_pcre_incompat.htm'\))
[regex - New Features in PCRE Compared to POSIX](javascript:call_link\('abenregex_posix_pcre_improve.htm'\))