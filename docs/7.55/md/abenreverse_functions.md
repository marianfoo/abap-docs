  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_processing_expr_func.htm) →  [String Functions (string\_func)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions.htm) →  [string\_func - Processing Functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprocess_functions.htm) → 

string\_func - reverse

Syntax

... reverse( [*\[*val =*\]* text](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_val.htm)  ) ...

Effect

This function returns a character string that reverses the content of [text](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_val.htm).

The return value has the type string.

Example

Returns the Latin alphabet in reverse.

DATA(result) = reverse( sy-abcde ).