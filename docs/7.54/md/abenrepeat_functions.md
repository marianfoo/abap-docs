---
title: "Syntax"
description: |
  ... repeat( val = text(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_functions_val.htm)  occ = occ ) ... Effect This function returns a character string that contains the content of text(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_functions_val.h
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrepeat_functions.htm"
abapFile: "abenrepeat_functions.htm"
keywords: ["do", "if", "try", "class", "data", "abenrepeat", "functions"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_processing_expr_func.htm) →  [String Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_functions.htm) →  [Processing Functions for Character-Like Arguments](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprocess_functions.htm) → 

repeat - Repeat Function

Syntax

... repeat( [val = text](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_functions_val.htm)  occ = occ ) ...

Effect

This function returns a character string that contains the content of [text](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_functions_val.htm) as many times as specified in occ. If text is an empty string or if occ contains the value 0, an empty string is returned.

occ is a [numeric expression position](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry") of type i. If the value of occ is negative, an exception of the class CX\_SY\_STRG\_PAR\_VAL is raised.

The return code has the type string.

Note

The parameter occ has a different meaning here than in functions used for searching.

Example

The function repeat is used to create a string with ten blanks.

DATA(result) = repeat( val = \` \` occ = 10 ).

[Exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_exceptions.htm)

Handleable Exceptions

CX\_SY\_STRG\_PAR\_VAL

-   Cause: Occurrences in occ are less than 0.
    Runtime error: STRG\_ILLEGAL\_PAR