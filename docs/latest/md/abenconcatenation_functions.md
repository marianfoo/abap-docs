  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Functions (string\_func)](javascript:call_link\('abenstring_functions.htm'\)) →  [string\_func - Processing Functions](javascript:call_link\('abenprocess_functions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20string_func%20-%20concat_lines_of%2C%20ABENCONCATENATION_FUNCTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

string\_func - concat\_lines\_of

Syntax

... concat\_lines\_of( *\[*table =*\]* itab *\[*sep = sep*\]* ) ...

Effect

This [built-in function](javascript:call_link\('abenbuilt_in_functions.htm'\)) concatenates all line content of an internal table itab and returns the result as a character string. itab expects an [index table](javascript:call_link\('abenindex_table_glosry.htm'\) "Glossary Entry") with character-like line type. itab is a [functional operand position](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry").

sep can be used to specify a string as a separator, which is then inserted between the lines. sep is a [character-like expression position](javascript:call_link\('abencharlike_expr_position_glosry.htm'\) "Glossary Entry"). If sep is not specified, the line content of the internal table is appended to each other directly. If the line types or the argument sep have a fixed length, trailing blanks are ignored.

The formal parameter table must be specified explicitly only if sep is also specified.

The return value has the type string.

Hint

The [concatenation operator](javascript:call_link\('abenconcatenation_operator_glosry.htm'\) "Glossary Entry") && can be used to concatenate elementary character strings.

Example

This function returns ABAP Objects.

TYPES: c80  TYPE c LENGTH 80,
       itab TYPE TABLE OF c80 WITH EMPTY KEY.
FINAL(itab) = VALUE itab( ( 'ABAP' ) ( 'Objects' ) ).
cl\_demo\_output=>display(
  concat\_lines\_of( table = itab sep = \` \` ) ).