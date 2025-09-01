  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Functions (string\_func)](javascript:call_link\('abenstring_functions.htm'\)) →  [string\_func - Shared Parameters](javascript:call_link\('abenstring_functions_common_paras.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: string_func - val, ABENSTRING_FUNCTIONS_VAL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%
0D%0ASuggestion for improvement:)

string\_func - val

Syntax

... ( ... val = text ...  ) ...

Effect

The operand text passes the text string to be processed by the function to the named argument val. text is an extended [character-like expression position](javascript:call_link\('abencharlike_expr_position_glosry.htm'\) "Glossary Entry"). Functional method calls, table expressions, and constructor expressions whose return value is convertible to the type string can also be specified. Only elementary data types can be processed.

If a character-like data object with a fixed length is specified, any trailing blanks are ignored. Non-character-like return values are converted to the data type string.

Hints

-   The conversion operator [CONV](javascript:call_link\('abenconstructor_expression_conv.htm'\)) can be applied to process those non-elementary data types that can be converted to an elementary character-like data type, such as structures with character-like-only flat components.
-   Explicit specification of val = can also be optional.

Example

The following two function calls are equivalent, since the specification of val = in to\_upper is optional.

FINAL(result1) = to\_upper( val = 'aAbBcC' ).
FINAL(result2) = to\_upper(       'aAbBcC' ).