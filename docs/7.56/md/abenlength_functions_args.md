  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Functions (string\_func)](javascript:call_link\('abenstring_functions.htm'\)) →  [string\_func - Description Functions](javascript:call_link\('abendescriptive_functions.htm'\)) → 

string\_func - char\_off

This [built-in](javascript:call_link\('abenbuilt_in_functions.htm'\)) length function has a named character-like argument.

Syntax

... char\_off( val = text add = pos *\[*off = off*\]* ) ...

Effect

The function returns the offset of the character in text that is pos places away from the character in the offset specified in off. The default value for off is 0. text is a [character-like expression position](javascript:call_link\('abencharlike_expr_position_glosry.htm'\) "Glossary Entry"). pos and off are [numeric expression positions](javascript:call_link\('abennumerical_expr_position_glosry.htm'\) "Glossary Entry") with the type i.

This function can be specified in [general](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry") and [numeric expression positions](javascript:call_link\('abennumerical_expr_position_glosry.htm'\) "Glossary Entry"). The return value has the type i.

The value of pos can be positive and negative and describes the places to the right or on the left accordingly. If pos identifies a position outside of text, the function returns the value -1. If off is greater than the length of text, an exception of the class CX\_SY\_RANGE\_OUT\_OF\_BOUNDS is raised.

Hint

The function char\_off was suitable for finding the correct offsets of characters in non-Unicode double-byte systems.

Example

The result of the following function call is 7.

DATA(result) = char\_off( val = \`12345678\` add = 4 off = 3 ).