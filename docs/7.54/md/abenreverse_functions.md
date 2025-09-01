---
title: "Syntax"
description: |
  ... reverse( val = text(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_functions_val.htm)  ) ... Effect This function returns a character string that reverses the content of text(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_functions_val.ht
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreverse_functions.htm"
abapFile: "abenreverse_functions.htm"
keywords: ["do", "data", "abenreverse", "functions"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_processing_expr_func.htm) →  [String Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_functions.htm) →  [Processing Functions for Character-Like Arguments](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprocess_functions.htm) → 

reverse - Reverse Function

Syntax

... reverse( [*\[*val =*\]* text](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_functions_val.htm)  ) ...

Effect

This function returns a character string that reverses the content of [text](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_functions_val.htm).

The return code has the type string.

Example

Gets the Latin alphabet in reverse.

DATA(result) = reverse( sy-abcde ).