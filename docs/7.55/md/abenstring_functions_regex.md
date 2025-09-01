---
title: "Syntax"
description: |
  ... ( ... pcreregex = regex ...  ) ... Effect pcreregex is used to pass a regular expression(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenregex_syntax.htm) to be searched for or compared to. regex is a character-like expression position(https://help.sap.com/doc/abapdocu_7
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_regex.htm"
abapFile: "abenstring_functions_regex.htm"
keywords: ["do", "while", "if", "try", "catch", "class", "data", "types", "abenstring", "functions", "regex"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_processing_expr_func.htm) →  [String Functions (string\_func)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions.htm) →  [string\_func - Shared Parameters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_common_paras.htm) → 

string\_func - pcre, regex

Syntax

... ( ... pcre*|*regex = regex ...  ) ...

Effect

pcre*|*regex is used to pass a [regular expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenregex_syntax.htm) to be searched for or compared to. regex is a [character-like expression position](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry") that must contain a correct regular expression. Only arguments with elementary data types can be specified.

-   If the argument pcre is used, regex must contain a [PCRE regular expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenregex_pcre_syntax.htm).

-   If the argument regex is used, regex must contain a [POSIX regular expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenregex_posix_syntax.htm).

If a character-like data object with a fixed length is specified, any trailing blanks are ignored. If regex is empty, an exception from the class CX\_SY\_STRG\_PAR\_VAL is raised.

Hint

The regular expression in regex may have correct syntax but be too complex for the execution of the function, which can raise a catchable exception of the class CX\_SY\_REGEX\_TOO\_COMPLEX. See [Exceptions in Regular Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenregex_exceptions.htm).

Example

The result of the following function calls is <tag>def</tag>. While the POSIX regular expression is greedy and special care has to be taken to find the desired substring between the tags, the PCRE regular expression can be made non-greedy.

cl\_demo\_output=>write(
  replace( val   = \`<tag>abc</tag>\`
           regex = \`(<tag>)\[^<\]+(</tag>)\`
           with  = \`$1def$2\` ) ).
cl\_demo\_output=>write(
  replace( val   = \`<tag>abc</tag>\`
           pcre  = \`(<tag>).+?(</tag>)\`
           with  = \`$1def$2\` ) ).
cl\_demo\_output=>display( ).