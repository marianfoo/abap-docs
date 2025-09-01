---
title: "Syntax"
description: |
  ... ( ... regex = regex ...  ) ... Effect regex is used to pass a regular expression(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenregex_syntax.htm) to be found or matched. regex is a character-like expression position(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/a
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_functions_regex.htm"
abapFile: "abenstring_functions_regex.htm"
keywords: ["do", "if", "try", "class", "data", "types", "abenstring", "functions", "regex"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_processing_expr_func.htm) →  [String Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_functions.htm) →  [Common Parameters of Character String Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_functions_common_paras.htm) → 

regex - Regular Expression

Syntax

... ( ... regex = regex ...  ) ...

Effect

regex is used to pass a [regular expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenregex_syntax.htm) to be found or matched. regex is a [character-like expression position](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry") that must contain a correct regular expression. Only arguments with elementary types can be specified.

If a character-like data object with a fixed length is specifed, any trailing blanks are ignored. If regex is empty, an exception from the class CX\_SY\_STRG\_PAR\_VAL is raised.

Note

The regular expression in regex may be have correct syntax but be too complex for the execution of the function, which can raise a handleable exception of the class CX\_SY\_REGEX\_TOO\_COMPLEX. See [Exceptions in Regular Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenregex_exceptions.htm).

Example

The result of the following function call is <tag>def</tag>.

DATA(result) = replace( val   = \`<tag>abc</tag>\`
                        regex = \`(<tag>)\[^<\]+(</tag>)\`
                        with  = \`$1def$2\` ).