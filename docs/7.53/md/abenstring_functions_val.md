  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_processing_expr_func.htm) →  [String Functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_functions.htm) →  [Shared Parameters of Character String Functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_functions_common_paras.htm) → 

val - Input Value

Syntax

... ( ... val = text ...  ) ...

Effect

text passes the main argument to be processed by the function. text is an enhanced [character-like expression position](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry"). Functional method calls whose return value is convertible to the type string can also be specified. Only elementary data types can be edited.

If a character-like data object with a fixed length is specified, any trailing blanks are ignored. Non-character-like return values are converted to the data type string.

Notes

-   The conversion operator [CONV](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_conv.htm) can be applied to edit those non-elementary data types that can be converted to an elementary character-like data type (such as structures with character-like-only flat components).

-   Explicit specification of val = can also be optional.

Example

The following two function calls are the same, as specification of val = in to\_upper is optional.

DATA(result1) = to\_upper( val = 'aAbBcC' ).
DATA(result2) = to\_upper(       'aAbBcC' ).