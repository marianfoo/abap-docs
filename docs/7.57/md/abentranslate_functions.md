  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Functions (string\_func)](javascript:call_link\('abenstring_functions.htm'\)) →  [string\_func - Processing Functions](javascript:call_link\('abenprocess_functions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: string_func - translate, ABENTRANSLATE_FUNCTIONS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0
D%0A%0D%0ASuggestion for improvement:)

string\_func - translate

Syntax

... translate( [val = text](javascript:call_link\('abenstring_functions_val.htm'\)) from = from to = to ) ...

Effect

This [built-in function](javascript:call_link\('abenbuilt_in_functions.htm'\)) returns the character string from [text](javascript:call_link\('abenstring_functions_val.htm'\)) where each character that occurs in from is replaced by the character that occurs in the same place in to as in from. If to is shorter than from, the surplus characters from from are removed from the character string. If from is an empty string, the content of text is returned unchanged.

from and to are [character-like expression positions](javascript:call_link\('abencharlike_expr_position_glosry.htm'\) "Glossary Entry"). If they have a fixed length, trailing blanks are ignored.

The return value has the type string.

Example

The return value of the following function call is Horray!.

FINAL(result) = translate(
  val = \`---Hur-rah!---\` from = \`uh-\` to = \`oy\` ).