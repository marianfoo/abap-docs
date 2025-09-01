  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_processing_expr_func.htm) →  [String Functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_functions.htm) →  [Processing Functions for Character-Like Arguments](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprocess_functions.htm) → 

to\_upper, to\_lower, to\_mixed, from\_mixed - Case Functions

Syntax Forms

1\. ... to\_upper( [*\[*val =*\]* text](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_functions_val.htm) ) ...

2\. ... to\_lower( [*\[*val =*\]* text](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_functions_val.htm) ) ...

3\. ... to\_mixed( [*\[*val =*\]* text](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_functions_val.htm) *\[*sep = sep*\]* *\[*case = case*\]* *\[*min = min*\]* ) ...

4\. ... from\_mixed( [*\[*val =*\]* text](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_functions_val.htm) *\[*sep = sep*\]* *\[*case = case*\]* *\[*min = min*\]* ) ...

Effect

These functions return the character string from [text](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_functions_val.htm) after it has been converted in accordance with the following case rules:

-   The function to\_upper transforms all letters in the character string to uppercase letters.

-   The function to\_lower transforms all letters in the character string to lowercase letters.

-   The function to\_mixed transforms all letters in the character string to lowercase letters from the second position. It then removes occurrences of the first character specified in sep from the character string (from left to right from the second position) and transforms the next letter to an uppercase letter. The default value for separator sep is an underscore (\_). If case is not specified, the first character of the string remains unchanged. If case is specified and the first character of case is an uppercase letter, the first character in the string is also uppercase and then lowercase in all other occurrences. A positive number can be passed to min to specify a minimum number of characters that must appear before a separator (from the start of the string or since the last replacement) before the separator becomes effective. The default value for min is 1.

-   The function from\_mixed inserts the first character specified in sep before each uppercase letter (from left to right and from the second position). The default value for separator sep is an underscore (\_). If case is not specified or if the first character in case is an uppercase letter, the entire string is displayed as uppercase; otherwise it is displayed as lowercase. A positive number can be passed to min to specify a minimum number of characters that must appear before an uppercase letter (from the start of the string or since the last insert) so that a separator is inserted. The default value for min is 1.

sep is a [character-like expression position](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry"). If they have a fixed length, trailing blanks are ignored. min is a [numeric expression position](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry") of type i. case expects a character-like data object with a fixed length. val = can be omitted only if none of the optional arguments are specified. If sep is an empty string or if min is negative, an exception of class CX\_SY\_STRG\_PAR\_VAL is raised.

The return code has the type string accordingly.

Note

The functions to\_mixed and from\_mixed are used to transform standard ABAP naming conventions for names with underscores to standard Java naming conventions with uppercase and lowercase letters and (namely Mixed Case Style and Camel Case Style) and the other way around.

Example

Displays the Latin alphabet in lowercase letters.

cl\_demo\_output=>display( to\_lower( sy-abcde ) ).

Executable Example

[String Functions, to\_mixed and from\_mixed](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_function_mixed_abexa.htm)

[Exceptions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_exceptions.htm)

Handleable Exceptions

CX\_SY\_STRG\_PAR\_VAL

-   Cause: The separator in sep is empty or the minimum number in min is negative.
    Runtime error: STRG\_ILLEGAL\_PAR