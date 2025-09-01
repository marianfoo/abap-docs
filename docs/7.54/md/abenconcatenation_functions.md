  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Functions](javascript:call_link\('abenstring_functions.htm'\)) →  [Processing Functions for Character-Like Arguments](javascript:call_link\('abenprocess_functions.htm'\)) → 

concat\_lines\_of - Concatenation Function

Syntax

... concat\_lines\_of( *\[*table =*\]* itab *\[*sep = sep*\]* ) ...

Effect

This function concatenates all row contents of an internal table itab and returns the result as a character string. itab expects an [index table](javascript:call_link\('abenindex_table_glosry.htm'\) "Glossary Entry") with character-like row type. itab is a [functional operand position](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry").

sep can be used to specify a string as a separator, which is then inserted between the rows. sep is a [character-like expression position](javascript:call_link\('abencharlike_expr_position_glosry.htm'\) "Glossary Entry"). If sep is not specified, the row contents of the internal table are appended to each other directly. If the row types or the argument sep have a fixed length, trailing blanks are ignored.

The formal parameter table must be specified explicitly only if sep is also specified.

The return code has the type string.

Note

The [concatenation operator](javascript:call_link\('abenconcatenation_operator_glosry.htm'\) "Glossary Entry") && can be used to concatenate elementary character strings.

Example

This function returns "ABAP Objects".

TYPES: c80  TYPE c LENGTH 80,
       itab TYPE TABLE OF c80 WITH EMPTY KEY.
DATA(itab) = VALUE itab( ( 'ABAP' ) ( 'Objects' ) ).
cl\_demo\_output=>display(
  concat\_lines\_of( table = itab sep = \` \` ) ).