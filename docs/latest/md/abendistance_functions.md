---
title: "Syntax"
description: |
  ... distance( val1 = text1(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_val.htm) val2 = text2(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_val.htm) max = max ) ... Effect This built-in function(https://help
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendistance_functions.htm"
abapFile: "abendistance_functions.htm"
keywords: ["insert", "delete", "do", "if", "try", "catch", "class", "data", "abendistance", "functions"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_processing_expr_func.htm) →  [String Functions (string\_func)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions.htm) →  [string\_func - Description Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendescriptive_functions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20string_func%20-%20distance%2C%20ABENDISTANCE_FUNCTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

string\_func - distance

Syntax

... distance( [val1 = text1](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_val.htm) [val2 = text2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_val.htm) *\[*max = max*\]* ) ...

Effect

This [built-in function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_functions.htm) returns the [Levenshtein distance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlevenshtein_distance_glosry.htm "Glossary Entry") between two strings [text1](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_val.htm) and [text2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_val.htm). This distance is the minimum number of insert, delete, and replace operations required to pass one string to another and hence reflects the similarity of the two strings. The return value has the type i.

max can be used to specify a positive value other than 0, that terminates the calculation of the Levenshtein distance if the distance is greater than max. The value max is then returned instead. max is a [numeric expression position](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry") with type i. If the value of max is less than or equal to 0, an exception of the class CX\_SY\_STRG\_PAR\_VAL is raised. If max is not specified, the calculation is not terminated

Hints

-   The complexity of the function increases in line with the product of the lengths of the two strings. The calculation time can be limited by specifying max.
-   This function can typically be used to find those words in a word set that are most similar to a word entered in a search using the minimum editing space.

Example

The result of the following function calls is 0, 1, and 3.

FINAL(result1) = distance( val1 = \`abcdefg\` val2 = \`abcdefg\` ).
FINAL(result2) = distance( val1 = \`abcdefg\` val2 = \`abcXefg\` ).
FINAL(result3) = distance( val1 = \`abcdefg\` val2 = \`aXcdXXg\` ).

Executable Example

[String Functions, distance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_function_distance_abexa.htm)

[Exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_STRG\_PAR\_VAL

-   Cause: Value in max is less than or equal to 0.
    Runtime error: STRG\_ILLEGAL\_PAR