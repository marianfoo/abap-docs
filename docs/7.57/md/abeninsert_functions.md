---
title: "Syntax"
description: |
  ... insert( val = text(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_functions_val.htm) sub = substring(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_functions_sub.htm) off = off(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/aben
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninsert_functions.htm"
abapFile: "abeninsert_functions.htm"
keywords: ["insert", "do", "if", "catch", "data", "abeninsert", "functions"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_processing_expr_func.htm) →  [String Functions (string\_func)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_functions.htm) →  [string\_func - Processing Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprocess_functions.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: string_func - insert, ABENINSERT_FUNCTIONS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0
D%0ASuggestion for improvement:)

string\_func - insert

Syntax

... insert( [val = text](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_functions_val.htm) [sub = substring](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_functions_sub.htm) *\[*[off = off](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_functions_off_len.htm)*\]* ) ...

Effect

This [built-in function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in_functions.htm) inserts the character string specified in [substring](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_functions_sub.htm) into the string specified in [text](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_functions_val.htm), either before the first character or at the optional offset specified [off](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_functions_off_len.htm) and returns the corresponding extended result. If substring is empty, the unchanged content of text is returned.

The return value has the type string.

Example

After the following iteration has been executed, the result is in result X X X X X.

DATA(result) = \`XXXXX\`.
result =
  REDUCE #( INIT r = result
            FOR j = 1 UNTIL j > strlen( result ) - 1
            NEXT r = insert( val = r sub = \` \` off = j \* 2 - 1 ) ).

[Exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

-   Cause: Invalid offset specified in places.
    Runtime error: STRING\_OFFSET\_TOO\_LARGE