  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_processing_expr_func.htm) →  [String Functions (string\_func)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_functions.htm) →  [string\_func - Description Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendescriptive_functions.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: string_func - char_off, ABENLENGTH_FUNCTIONS_ARGS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%
0D%0A%0D%0ASuggestion for improvement:)

string\_func - char\_off

This [built-in](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in_functions.htm) length function has a named character-like argument.

Syntax

... char\_off( val = text add = pos *\[*off = off*\]* ) ...

Effect

The function returns the offset of the character in text that is pos places away from the character in the offset specified in off. The default value for off is 0. text is a [character-like expression position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry"). pos and off are [numeric expression positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry") with the type i.

This function can be specified in [general](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry") and [numeric expression positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry"). The return value has the type i.

The value of pos can be positive and negative and describes the places to the right or on the left accordingly. If pos identifies a position outside of text, the function returns the value -1. If off is greater than the length of text, an exception of the class CX\_SY\_RANGE\_OUT\_OF\_BOUNDS is raised.

Hint

The function char\_off was suitable for finding the correct offsets of characters in non-Unicode double-byte systems.

Example

The result of the following function call is 7.

FINAL(result) = char\_off( val = \`12345678\` add = 4 off = 3 ).