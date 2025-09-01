---
title: "Obsolete Regular Expression Syntax"
description: |
  ABAP supports several syntax flavors(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenregex_syntax.htm) for regular expressions(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenregular_expression_glosry.htm 'Glossary Entry'). Because of these, the POSIX syntax(https
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenregular_expressions_obsolete.htm"
abapFile: "abenregular_expressions_obsolete.htm"
keywords: ["do", "if", "try", "data", "abenregular", "expressions", "obsolete"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_internal_obsolete.htm) →  [Obsolete Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencharacter_string_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Obsolete%20Regular%20Expression%20Syntax%2C%20ABENREGULAR_EXPRESSIONS_OBSOLETE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improveme
nt:)

Obsolete Regular Expression Syntax

ABAP supports several [syntax flavors](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenregex_syntax.htm) for [regular expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenregular_expression_glosry.htm "Glossary Entry"). Because of these, the [POSIX syntax](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenregex_posix_syntax.htm) is obsolete.

Using regular expressions in POSIX syntax leads to a warning from the syntax check that can be hidden by the pragma ##regex\_posix. It is recommended that regular expressions are [migrated](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenregex_migrating_posix.htm) from POSIX to [PCRE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenregex_pcre_syntax.htm) or another regular expression syntax supported by ABAP.

The PCRE syntax is more powerful than the obsolete POSIX syntax. Furthermore, PCRE regular expressions generally perform better than the POSIX regular expressions supported by ABAP.

-   [POSIX regular expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenregex_posix_syntax.htm).
-   [FIND, REPLACE REGEX posix](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfind_replace_regex_obs.htm)
-   [string\_func - regex](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_functions_regex_obs.htm)

Continue
[regex - POSIX Syntax (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenregex_posix_syntax.htm)
[FIND, REPLACE REGEX posix (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfind_replace_regex_obs.htm)
[string\_func - regex (Obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_functions_regex_obs.htm)