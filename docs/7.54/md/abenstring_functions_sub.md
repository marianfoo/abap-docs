  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Functions](javascript:call_link\('abenstring_functions.htm'\)) →  [Common Parameters of Character String Functions](javascript:call_link\('abenstring_functions_common_paras.htm'\)) → 

sub - Substring

Syntax

... ( ... sub = substring ...  ) ...

Effect

substring is used to pass a character string whose characters are to be found or inserted. substring is a [character like expression position](javascript:call_link\('abencharlike_expr_position_glosry.htm'\) "Glossary Entry"). Only arguments with elementary types can be specified.

If a character-like data object with a fixed length is specified, any trailing blanks are ignored.

Note

The behavior displayed when an empty string is specified in substring depends on the function in question.

Example

The result of the following function call is 2.

DATA(result) = count( val = 'axaxa' sub = 'x' ).