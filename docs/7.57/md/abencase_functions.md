  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_processing_expr_func.htm) →  [String Functions (string\_func)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_functions.htm) →  [string\_func - Processing Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprocess_functions.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: string_func - to_upper, to_lower, to_mixed, from_mixed, ABENCASE_FUNCTIONS, 757%0D%0A
%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

string\_func - to\_upper, to\_lower, to\_mixed, from\_mixed

Syntax Forms

1\. ... to\_upper( [*\[*val =*\]* text](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_functions_val.htm) ) ...

2\. ... to\_lower( [*\[*val =*\]* text](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_functions_val.htm) ) ...

3\. ... to\_mixed( [*\[*val =*\]* text](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_functions_val.htm) *\[*sep = sep*\]* *\[*case = case*\]* *\[*min = min*\]* ) ...

4\. ... from\_mixed( [*\[*val =*\]* text](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_functions_val.htm) *\[*sep = sep*\]* *\[*case = case*\]* *\[*min = min*\]* ) ...

Effect

These [built-in functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in_functions.htm) return the character string from [text](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_functions_val.htm) after it has been converted in accordance with the following case rules:

-   The function to\_upper transforms all letters in the character string to uppercase letters.
-   The function to\_lower transforms all letters in the character string to lowercase letters.
-   The function to\_mixed transforms all letters in the character string to lowercase letters from the second position. Then, from left to right from the second position, it removes occurrences of the first character specified in sep from the character string and transforms the next letter to an uppercase letter. The default value for separator sep is an underscore (\_). If case is not specified, the first character of the string remains unchanged. If case is specified and the first character of case is an uppercase letter, the first character in the string is also uppercase and otherwise lowercase. A positive number can be passed to min to specify a minimum number of characters that must appear before a separator from the start of the string or since the last replacement so that it works as described. The default value for min is 1.
-   The function from\_mixed inserts the first character specified in sep before each uppercase letter from left to right and from the second position. The default value for separator sep is an underscore (\_). If case is not specified or if the first character in case is an uppercase letter, the entire string is transformed to uppercase, otherwise to lowercase. A positive number can be passed to min to specify a minimum number of characters that must appear before an uppercase letter from the start of the string or since the last insert so that a separator is inserted. The default value for min is 1.

sep is a [character-like expression position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry"). If they have a fixed length, trailing blanks are ignored. min is a [numeric expression position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry") of type i. case expects a character-like data object with fixed length. val = can be omitted only if none of the optional arguments are specified. If sep is an empty string or if min is negative, an exception of class CX\_SY\_STRG\_PAR\_VAL is raised.

The return value has the type string.

Hint

The functions to\_mixed and from\_mixed are intended for transforming standard ABAP naming conventions for names with underscores to standard Java naming conventions with uppercase and lowercase letters (Mixed Case Style and Camel Case Style) and vice versa.

Example

Outputs the Latin alphabet in lowercase letters.

cl\_demo\_output=>display( to\_lower( sy-abcde ) ).

Executable Example

[String Functions, to\_mixed and from\_mixed](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_function_mixed_abexa.htm)

[Exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_STRG\_PAR\_VAL

-   Cause: The separator in sep is empty or the minimum number in min is negative.
    Runtime error: STRG\_ILLEGAL\_PAR