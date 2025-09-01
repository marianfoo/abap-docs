  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_internal_obsolete.htm) →  [Obsolete Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencharacter_string_obsolete.htm) → 

Obsolete Regular Expression Syntax

ABAP supports several [syntax flavors](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_syntax.htm) for [regular expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregular_expression_glosry.htm "Glossary Entry"). Because of these, the [POSIX syntax](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_posix_syntax.htm) is obsolete.

Using regular expressions in POSIX syntax leads to a warning from the syntax check that can be hidden by the pragma ##regex\_posix. It is recommended to [migrate](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_migrating_posix.htm) regular expressions from POSIX to [PCRE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_pcre_syntax.htm) or another regular expression syntax supported by ABAP.

The PCRE syntax is more powerful than the obsolete POSIX syntax. Furthermore, PCRE regular expressions generally perform better than the POSIX regular expressions supported by ABAP.

-   [POSIX regular expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_posix_syntax.htm).
-   [FIND, REPLACE REGEX posix](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfind_replace_regex_obs.htm)
-   [string\_func - regex](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_functions_regex_obs.htm)

Continue
[regex - POSIX Syntax (obsolete)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_posix_syntax.htm)
[FIND, REPLACE REGEX posix (obsolete)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfind_replace_regex_obs.htm)
[string\_func - regex (obsolete)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_functions_regex_obs.htm)