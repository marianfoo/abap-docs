  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.55](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-755.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: String Processing in Release 7.55, ABENNEWS-755-STRINGS, 757%0D%0A%0D%0AError:%0D%0A%
0D%0A%0D%0A%0D%0ASuggestion for improvement:)

String Processing in Release 7.55

[1\. Support of Perl Compatible Regular Expressions](#!ABAP_MODIFICATION_1@1@)
[2\. Verbatim Replacements](#!ABAP_MODIFICATION_2@2@)
[3\. New Catchable Exception CX\_SY\_STRING\_SIZE\_TOO\_LARGE](#!ABAP_MODIFICATION_3@3@)
[4\. Exception CX\_SY\_STRING\_SIZE\_TOO\_LARGE in Transformations](#!ABAP_MODIFICATION_4@4@)
[5\. Formatting Option CURRENCY for Decimal Floating Point Numbers](#!ABAP_MODIFICATION_5@5@)

Modification 1   

Support of Perl Compatible Regular Expressions

Besides the existing support of [POSIX regular expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenposix_regex_glosry.htm "Glossary Entry"), ABAP supports now also [PCRE regular expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpcre_regex_glosry.htm "Glossary Entry") that are processed by the [PCRE2 Library](https://www.pcre.org/) implemented in the [ABAP Kernel](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenkernel_glosry.htm "Glossary Entry"). PCRE regular expressions can be used in the same way as POSIX regular expressions. The distinction is made:

-   By the new addition [PCRE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind_pattern.htm) that can be used instead of [REGEX](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind_pattern.htm) in the statements [FIND](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind.htm) and [REPLACE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace.htm).
-   By the new argument [pcre](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_functions_regex.htm) that can be used instead of [regex](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_functions_regex.htm) in built-in functions.
-   By new (factory) methods of the [system classes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_system_classes.htm) CL\_ABAP\_REGEX and CL\_ABAP\_MATCHER.

PCRE regular expressions are more powerful and have better performance than POSIX regular expressions. For more information, see [Regular Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregular_expressions.htm).

Modification 2   

Verbatim Replacements

The new addition [VERBATIM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace_options.htm) of the [REPLACE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace.htm) statement causes all characters of the replacement string to be taken literally. With that addition, special characters for regular expression replacement patterns have no special meaning.

Modification 3   

New Catchable Exception CX\_SY\_STRING\_SIZE\_TOO\_LARGE

Modification 4   

Exception CX\_SY\_STRING\_SIZE\_TOO\_LARGE in Transformations

The exception that occurs when an operation with a [string](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_glosry.htm "Glossary Entry") exceeds its [maximum size](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmemory_consumption_2.htm) is now connected to the exception class CX\_SY\_STRING\_SIZE\_TOO\_LARGE and can be handled. Previously, it always resulted in runtime error STRING\_SIZE\_TOO\_LARGE.

This exception can also be handled for the statement [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transformation.htm) if some conditions are met.

Modification 5   

Formatting Option CURRENCY for Decimal Floating Point Numbers

The

-   addition [CURRENCY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwrite_to_options.htm) of the [WRITE TO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwrite_to.htm) and [WRITE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwrite-.htm) statements
-   formatting option [CURRENCY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcompute_string_format_options.htm) in [string templates](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_templates.htm)

can now also be applied to [decimal floating point numbers](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendecfloat_glosry.htm "Glossary Entry").