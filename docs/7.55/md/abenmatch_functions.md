  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_processing_expr_func.htm) →  [String Functions (string\_func)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions.htm) →  [string\_func - Processing Functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprocess_functions.htm) → 

string\_func - match

The match function returns a substring of a character-like argument that matches a regular expression.

Syntax

... match( [val = text](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_val.htm) [pcre*|*regex = regex](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_regex.htm) *\[* [case = case](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_case.htm)*\]* *\[*[occ = occ](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_occ.htm)*\]* ) ...

Effect

The match function searches [text](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_val.htm) for the match specified in [occ](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_occ.htm) with the [regular expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenregex_syntax.htm) specified in [regex](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_regex.htm) and returns the substring found. The search is case-sensitive by default, but this can be overridden using the parameter [case](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_case.htm).

-   If the argument pcre is used, regex must contain a [PCRE regular expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenregex_pcre_syntax.htm).

-   If the argument regex is used, regex must contain a [POSIX regular expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenregex_posix_syntax.htm).

The return value has the type string.

Example

The following match function returns x2.

cl\_demo\_output=>display(
  match( val = 'x1 x2 x3' pcre = 'x.' occ = 2 ) ).

Executable Example

[String Functions, count, find and match](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_function_find_abexa.htm)

[Exceptions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_REGEX\_TOO\_COMPLEX

-   Cause: See [Exceptions in Regular Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenregex_exceptions.htm).
    Runtime error: REGEX\_TOO\_COMPLEX

CX\_SY\_STRG\_PAR\_VAL

-   Cause: Regular expression in regex is empty or there are 0 occurrences in occ.
    Runtime error: STRG\_ILLEGAL\_PAR