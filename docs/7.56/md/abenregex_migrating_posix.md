  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_processing_expr_func.htm) →  [Regular Expressions (regex)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregular_expressions.htm) → 

regex - Migrating from POSIX to PCRE

The ABAP Kernel of an [AS ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenas_abap_glosry.htm "Glossary Entry") implements two libraries for regular expressions:

-   The [PCRE2 library](https://www.pcre.org/) for [PCRE regular expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpcre_regex_glosry.htm "Glossary Entry").
-   [Version 1.31 of the Boost.Regex Library](http://www.boost.org/doc/libs/1_31_0/libs/regex/doc/index.html) for [POSIX regular expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenposix_regex_glosry.htm "Glossary Entry") (obsolete).

Regular expressions in [POSIX syntax](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_posix_syntax.htm) are obsolete. Using regular expressions in POSIX syntax leads to a warning from syntax check that can be hidden by the pragma ##regex\_posix. Therefore, it is recommended to migrate regular expressions from POSIX to [PCRE syntax](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_pcre_syntax.htm) or another regular expression syntax supported by ABAP.

The following table provides a general troubleshooting for migrating from POSIX to PCRE:

Symptom

Possible Solutions

The PCRE library rejects the pattern (e.g. by giving a compiler error or raising an exception)

Make sure to not use any features that are supported by POSIX but not by PCRE. Also pay close attention to the error message, which often contains useful information.

The pattern does not match what it should after migrating to PCRE

Make sure that you have taken PCRE's extended mode into account by either explicitly encoding whitespaces or by disabling extended mode. Ensure that you have set the correct Unicode handling for your context.

The following topics provide detailed assistance for the migration from POSIX to PCRE.

-   [Incompatibilities between POSIX and PCRE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_posix_pcre_incompat.htm)
-   [New features in PCRE compared to POSIX](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_posix_pcre_improve.htm)

Continue
[regex - Incompatibilities between POSIX and PCRE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_posix_pcre_incompat.htm)
[regex - New features in PCRE compared to POSIX](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_posix_pcre_improve.htm)