  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Functions (string\_func)](javascript:call_link\('abenstring_functions.htm'\)) →  [string\_func - Processing Functions](javascript:call_link\('abenprocess_functions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20string_func%20-%20reverse%2C%20ABENREVERSE_FUNCTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

string\_func - reverse

Syntax

... reverse( [*\[*val =*\]* text](javascript:call_link\('abenstring_functions_val.htm'\))  ) ...

Effect

This [built-in function](javascript:call_link\('abenbuilt_in_functions.htm'\)) returns a character string that reverses the content of [text](javascript:call_link\('abenstring_functions_val.htm'\)).

The return value has the type string.

Example

Returns the Latin alphabet in reverse.

FINAL(abcde) = \`àbcdefghijklmnopqrstuvwxyz\`.
FINAL(result) = reverse( abcde ).