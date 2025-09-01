  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Functions](javascript:call_link\('abenstring_functions.htm'\)) →  [Common Parameters of Character String Functions](javascript:call_link\('abenstring_functions_common_paras.htm'\)) → 

val - Input Value

Syntax

... ( ... val = text ...  ) ...

Effect

text passes the main argument to be processed by the function. text is an extended [character-like expression position](javascript:call_link\('abencharlike_expr_position_glosry.htm'\) "Glossary Entry"). Functional method calls, table expressions, and constructor expressions whose return value is convertible to the type string can also be specified. Only elementary data types can be edited.

If a character-like data object with a fixed length is specified, any trailing blanks are ignored. Non-character-like return values are converted to the data type string.

Notes

-   The conversion operator [CONV](javascript:call_link\('abenconstructor_expression_conv.htm'\)) can be applied to edit those non-elementary data types that can be converted to an elementary character-like data type (such as structures with character-like-only flat components).

-   Explicit specification of val = can also be optional.

Example

The following two function calls are the same, as specification of val = in to\_upper is optional.

DATA(result1) = to\_upper( val = 'aAbBcC' ).
DATA(result2) = to\_upper(       'aAbBcC' ).