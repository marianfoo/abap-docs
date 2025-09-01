  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_internal_obsolete.htm) →  [Obsolete Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencharacter_string_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Obsolete Regular Expression Syntax, ABENREGULAR_EXPRESSIONS_OBSOLETE, 757%0D%0A%0D%0A
Error:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Obsolete Regular Expression Syntax

ABAP supports several [syntax flavors](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_syntax.htm) for [regular expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregular_expression_glosry.htm "Glossary Entry"). Because of these, the [POSIX syntax](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_posix_syntax.htm) is obsolete.

Using regular expressions in POSIX syntax leads to a warning from the syntax check that can be hidden by the pragma ##regex\_posix. It is recommended that regular expressions are [migrated](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_migrating_posix.htm) from POSIX to [PCRE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_pcre_syntax.htm) or another regular expression syntax supported by ABAP.

The PCRE syntax is more powerful than the obsolete POSIX syntax. Furthermore, PCRE regular expressions generally perform better than the POSIX regular expressions supported by ABAP.

-   [POSIX regular expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_posix_syntax.htm).
-   [FIND, REPLACE REGEX posix](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind_replace_regex_obs.htm)
-   [string\_func - regex](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_functions_regex_obs.htm)

Continue
[regex - POSIX Syntax (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_posix_syntax.htm)
[FIND, REPLACE REGEX posix (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind_replace_regex_obs.htm)
[string\_func - regex (Obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_functions_regex_obs.htm)