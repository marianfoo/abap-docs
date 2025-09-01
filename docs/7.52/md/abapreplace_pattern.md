---
title: "REPLACE - pattern"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreplace_shortref.htm) Syntax ...  SUBSTRING substring  REGEX regex ... . Effect Defines a search pattern for the statements REPLACE(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/aba
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreplace_pattern.htm"
abapFile: "abapreplace_pattern.htm"
keywords: ["do", "if", "try", "class", "data", "abapreplace", "pattern"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_string.htm) →  [Statements for Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_processing_statements.htm) →  [REPLACE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreplace.htm) →  [REPLACE pattern IN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreplace_in_pattern.htm) → 

REPLACE - pattern

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreplace_shortref.htm)

Syntax

...  *{**\[*SUBSTRING*\]* substring*}* *|* *{*REGEX regex*}* ... .

Effect

Defines a search pattern for the statements [REPLACE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreplace.htm) and [REPLACE IN TABLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreplace_itab.htm).

-   If substring is specified, the exact substring specified in substring is found. The optional addition SUBSTRING can be specified in front of substring for extra emphasis.
    
-   If REGEX is specified, the substring is found that matches a regular expression specified in regex.
    

substring and a directly specified regex are [character-like expression positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry"). The syntax and semantics are the same as in the definition of a search pattern for the statement [FIND](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfind_pattern.htm). The statement [REPLACE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreplace.htm) replaces the substring in question in accordance with the information specified after WITH.

Note

A regular expression can be have correct syntax, but be too complex for the execution of the statement REPLACE, which raises a handleable exception of the class CX\_SY\_REGEX\_TOO\_COMPLEX. See [Exceptions in Regular Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenregex_exceptions.htm).

Example

Replaces the substring "all" with "er".

DATA(str) = \`Hallo\`.
REPLACE SUBSTRING \`all\` IN str WITH \`er\`.
cl\_demo\_output=>display( str ).

Example

The following replacement with regular expression [\\D](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenregex_syntax_specials.htm) removes all non-digits from a string.

DATA(str) = \`4 Apples + 2 Oranges\`.
REPLACE ALL OCCURRENCES OF REGEX \`\\D\` IN str WITH \`\`.
cl\_demo\_output=>display( str ).