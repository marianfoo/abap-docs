---
title: "Syntax"
description: |
  ... ( ... val = text ...  ) ... Effect The operand text passes the text string to be processed by the function to the named argument val. text is an extended character-like expression position(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencharlike_expr_position_glosry.htm 'Gl
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_val.htm"
abapFile: "abenstring_functions_val.htm"
keywords: ["do", "if", "try", "method", "data", "types", "abenstring", "functions", "val"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_processing_expr_func.htm) →  [String Functions (string\_func)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions.htm) →  [string\_func - Common Parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_common_paras.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20string_func%20-%20val%2C%20ABENSTRING_FUNCTIONS_VAL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

string\_func - val

Syntax

... ( ... val = text ...  ) ...

Effect

The operand text passes the text string to be processed by the function to the named argument val. text is an extended [character-like expression position](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry"). Functional method calls, table expressions, and constructor expressions whose return value is convertible to the type string can also be specified. Only elementary data types can be processed.

If a character-like data object with a fixed length is specified, any trailing blanks are ignored. Non-character-like return values are converted to the data type string.

Hints

-   The conversion operator [CONV](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_conv.htm) can be applied to process those non-elementary data types that can be converted to an elementary character-like data type, such as structures with character-like-only flat components.
-   Explicit specification of val = can also be optional.

Example

The following two function calls are equivalent, since the specification of val = in to\_upper is optional.

FINAL(result1) = to\_upper( val = 'aAbBcC' ).
FINAL(result2) = to\_upper(       'aAbBcC' ).