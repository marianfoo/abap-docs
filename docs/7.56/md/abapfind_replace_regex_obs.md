---
title: "FIND, REPLACE REGEX posix (obsolete)"
description: |
  Syntax FINDREPLACE REGEX posix ...  . Effect In this variant for specifying a pattern(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfind_pattern.htm) in the statements FIND(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfind.htm) and REPLACE(https://help.sap
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfind_replace_regex_obs.htm"
abapFile: "abapfind_replace_regex_obs.htm"
keywords: ["select", "do", "if", "try", "data", "abapfind", "replace", "regex", "obs"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_internal_obsolete.htm) →  [Obsolete Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencharacter_string_obsolete.htm) →  [Obsolete Regular Expression Syntax](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregular_expressions_obsolete.htm) → 

FIND, REPLACE REGEX posix (obsolete)

Syntax

FIND*|*REPLACE REGEX posix ...  .

Effect

In this variant for specifying a [pattern](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfind_pattern.htm) in the statements [FIND](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfind.htm) and [REPLACE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapreplace.htm), a character string posix is specified behind REGEX instead of a reference variable [regex\_ref](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfind_pattern.htm).

posix is a [character-like expression position](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry") that can contain a valid [POSIX regular expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_posix_syntax.htm).

The occurrences are determined according to the "leftmost-longest" rule. Of all possible matches between the regular expression and the character string to be searched, the substring that starts at the furthest position to the left is selected. If there are multiple matches at this position, the longest of these substrings is selected.

Hint

Regular expressions in [POSIX syntax](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_posix_syntax.htm) are obsolete. Using regular expressions in POSIX syntax leads to a warning from syntax check that can be hidden by the pragma ##regex\_posix. It is recommended that [regular expressions are migrated from POSIX to PCRE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_migrating_posix.htm) or another regular expression syntax supported by ABAP.

Example

The search uses obsolete POSIX regular expression syntax and finds the substring 'ababb' from offset 3. The substring 'babboo' from offset 4, which also matches, is not found because of the leftmost-longest rule of POSIX regular expressions.

DATA(text) = \`oooababboo\`.
FIND REGEX 'a.|\[ab\]+|b.\*' IN text ##regex\_posix
     MATCH OFFSET DATA(moff)
     MATCH LENGTH DATA(mlen).
IF sy-subrc = 0.
  cl\_demo\_output=>display( substring( val = text off = moff
                                                 len = mlen ) ).
ENDIF.