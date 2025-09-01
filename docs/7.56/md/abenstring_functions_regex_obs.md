---
title: "Syntax"
description: |
  ... ( ... regex = posix ...  ) ... Effect In string functions(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_functions.htm), where the arguments pcre(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_functions_regex.htm) or xpath(https://help.sap.com/
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_functions_regex_obs.htm"
abapFile: "abenstring_functions_regex_obs.htm"
keywords: ["do", "try", "data", "abenstring", "functions", "regex", "obs"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_internal_obsolete.htm) →  [Obsolete Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencharacter_string_obsolete.htm) →  [Obsolete Regular Expression Syntax](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregular_expressions_obsolete.htm) → 

string\_func - regex (obsolete)

Syntax

... ( ... regex = posix ...  ) ...

Effect

In [string functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_functions.htm), where the arguments [pcre](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_functions_regex.htm) or [xpath](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_functions_regex.htm) can be used, the argument regex is also possible. posix is then a [character-like expression position](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry") that must contain a [POSIX regular expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_posix_syntax.htm).

Hint

Regular expressions in [POSIX syntax](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_posix_syntax.htm) are obsolete. Using regular expressions in POSIX syntax leads to a warning from syntax check that can be hidden by the pragma ##regex\_posix. It is recommended that [regular expressions are migrated from POSIX to PCRE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_migrating_posix.htm) or another regular expression syntax supported by ABAP.

Example

The result of the following function call is <tag>def</tag>. The POSIX regular expression is greedy and special care must be taken to find the desired substring between the tags.

cl\_demo\_output=>display(
  replace( val   = \`<tag>abc</tag>\`
           regex = \`(<tag>)\[^<\]+(</tag>)\` ##regex\_posix
           with  = \`$1def$2\` ) ).