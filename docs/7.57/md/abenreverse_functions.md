---
title: "Syntax"
description: |
  ... reverse( val = text(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_functions_val.htm)  ) ... Effect This built-in function(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in_functions.htm) returns a character string that reverses the conten
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreverse_functions.htm"
abapFile: "abenreverse_functions.htm"
keywords: ["do", "if", "data", "abenreverse", "functions"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_processing_expr_func.htm) →  [String Functions (string\_func)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_functions.htm) →  [string\_func - Processing Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprocess_functions.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: string_func - reverse, ABENREVERSE_FUNCTIONS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A
%0D%0ASuggestion for improvement:)

string\_func - reverse

Syntax

... reverse( [*\[*val =*\]* text](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_functions_val.htm)  ) ...

Effect

This [built-in function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in_functions.htm) returns a character string that reverses the content of [text](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_functions_val.htm).

The return value has the type string.

Example

Returns the Latin alphabet in reverse.

FINAL(result) = reverse( sy-abcde ).