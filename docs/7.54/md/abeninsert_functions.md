---
title: "Syntax"
description: |
  ... insert( val = text(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_functions_val.htm) sub = substring(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_functions_sub.htm) off = off(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/aben
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninsert_functions.htm"
abapFile: "abeninsert_functions.htm"
keywords: ["insert", "do", "if", "data", "abeninsert", "functions"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_processing_expr_func.htm) →  [String Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_functions.htm) →  [Processing Functions for Character-Like Arguments](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprocess_functions.htm) → 

insert- Insert Function

Syntax

... insert( [val = text](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_functions_val.htm) [sub = substring](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_functions_sub.htm) *\[*[off = off](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_functions_off_len.htm)*\]* ) ...

Effect

This function inserts the character string specified in [substring](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_functions_sub.htm) in the string specified in [text](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_functions_val.htm), either before the first character or at the optional offset specified [off](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_functions_off_len.htm) and returns the result. If substring is empty, the unchanged content of text is returned.

The return code has the type string.

Example

After the following iteration is executed, the result is in result "X X X X X".

DATA(result) = \`XXXXX\`.
result =
  REDUCE #( INIT r = result
            FOR j = 1 UNTIL j > strlen( result ) - 1
            NEXT r = insert( val = r sub = \` \` off = j \* 2 - 1 ) ).

[Exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_exceptions.htm)

Handleable Exceptions

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

-   Cause: Invalid offset specified in places.
    Runtime error: STRING\_OFFSET\_TOO\_LARGE