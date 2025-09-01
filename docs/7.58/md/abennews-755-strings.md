  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for ABAP Release 7.55](javascript:call_link\('abennews-755.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20String%20Processing%20in%20ABAP%20Release%207.55%2C%20ABENNEWS-755-STRINGS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

String Processing in ABAP Release 7.55

[1\. Support of Perl Compatible Regular Expressions](#!ABAP_MODIFICATION_1@1@)
[2\. Verbatim Replacements](#!ABAP_MODIFICATION_2@2@)
[3\. New Catchable Exception CX\_SY\_STRING\_SIZE\_TOO\_LARGE](#!ABAP_MODIFICATION_3@3@)
[4\. Exception CX\_SY\_STRING\_SIZE\_TOO\_LARGE in Transformations](#!ABAP_MODIFICATION_4@4@)
[5\. Formatting Option CURRENCY for Decimal Floating Point Numbers](#!ABAP_MODIFICATION_5@5@)

Modification 1   

Support of Perl Compatible Regular Expressions

Besides the existing support of [POSIX regular expressions](javascript:call_link\('abenposix_regex_glosry.htm'\) "Glossary Entry"), ABAP supports now also [PCRE regular expressions](javascript:call_link\('abenpcre_regex_glosry.htm'\) "Glossary Entry") that are processed by the [PCRE2 Library](https://www.pcre.org/) implemented in the [ABAP Kernel](javascript:call_link\('abenkernel_glosry.htm'\) "Glossary Entry"). PCRE regular expressions can be used in the same way as POSIX regular expressions. The distinction is made:

-   By the new addition [PCRE](javascript:call_link\('abapfind_pattern.htm'\)) that can be used instead of [REGEX](javascript:call_link\('abapfind_pattern.htm'\)) in the statements [FIND](javascript:call_link\('abapfind.htm'\)) and [REPLACE](javascript:call_link\('abapreplace.htm'\)).
-   By the new argument [pcre](javascript:call_link\('abenstring_functions_regex.htm'\)) that can be used instead of [regex](javascript:call_link\('abenstring_functions_regex.htm'\)) in built-in functions.
-   By new (factory) methods of the [system classes](javascript:call_link\('abenregex_system_classes.htm'\)) CL\_ABAP\_REGEX and CL\_ABAP\_MATCHER.

PCRE regular expressions are more powerful and have better performance than POSIX regular expressions. For more information, see [Regular Expressions](javascript:call_link\('abenregular_expressions.htm'\)).

Modification 2   

Verbatim Replacements

The new addition [VERBATIM](javascript:call_link\('abapreplace_options.htm'\)) of the [REPLACE](javascript:call_link\('abapreplace.htm'\)) statement causes all characters of the replacement string to be taken literally. With that addition, special characters for regular expression replacement patterns have no special meaning.

Modification 3   

New Catchable Exception CX\_SY\_STRING\_SIZE\_TOO\_LARGE

See [Exception CX\_SY\_STRING\_SIZE\_TOO\_LARGE in Transformations](abennews-755-strings.htm#!ABAP_MODIFICATION_4@4@).

Modification 4   

Exception CX\_SY\_STRING\_SIZE\_TOO\_LARGE in Transformations

The exception that occurs when an operation with a [string](javascript:call_link\('abenstring_glosry.htm'\) "Glossary Entry") exceeds its [maximum size](javascript:call_link\('abenmemory_consumption_2.htm'\)) is now connected to the exception class CX\_SY\_STRING\_SIZE\_TOO\_LARGE and can be handled. Previously, it always resulted in runtime error STRING\_SIZE\_TOO\_LARGE.

This exception can also be handled for the statement [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)) if some conditions are met.

Modification 5   

Formatting Option CURRENCY for Decimal Floating Point Numbers

The

-   addition [CURRENCY](javascript:call_link\('abapwrite_to_options.htm'\)) of the [WRITE TO](javascript:call_link\('abapwrite_to.htm'\)) and [WRITE](javascript:call_link\('abapwrite-.htm'\)) statements
-   formatting option [CURRENCY](javascript:call_link\('abapcompute_string_format_options.htm'\)) in [string templates](javascript:call_link\('abenstring_templates.htm'\))

can now also be applied to [decimal floating point numbers](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry").