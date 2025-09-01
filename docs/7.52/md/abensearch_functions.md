  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_processing_expr_func.htm) →  [String Functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions.htm) →  [Description Functions for Character-Like Arguments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendescriptive_functions.htm) → 

find, find\_... - Search Functions

Syntax Forms

1\. ... find( [val = text](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_val.htm)  *{* [sub = substring](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_sub.htm)*}**|**{* [regex = regex](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_regex.htm)*}* *\[*[case = case](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_case.htm)*\]*
           *\[* [off = off](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_off_len.htm)*\]* *\[* [len = len](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_off_len.htm)*\]* *\[*[occ = occ](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_occ.htm)*\]* ) ...

2\. ... find\_end( [val = text](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_val.htm) [regex = regex](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_regex.htm) *\[*[case = case](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_case.htm)*\]*
               *\[* [off = off](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_off_len.htm)*\]* *\[* [len = len](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_off_len.htm)*\]* *\[*[occ = occ](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_occ.htm)*\]* ) ...

3\. ... find\_any\_of( [val = text](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_val.htm)  [sub = substring](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_sub.htm)
                  *\[* [off = off](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_off_len.htm)*\]* *\[* [len = len](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_off_len.htm)*\]* *\[*[occ = occ](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_occ.htm)*\]* ) ...

4\. ... find\_any\_not\_of( [val = text](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_val.htm)  [sub = substring](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_sub.htm)
                      *\[*[off = off](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_off_len.htm)*\]* *\[* [len = len](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_off_len.htm)*\]* *\[*[occ = occ](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_occ.htm)*\]* ) ...

Effect

The search functions find and find\_... scan [text](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_val.htm) for the characters specified in [substring](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_sub.htm) or for a match with a [regular expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenregex_syntax.htm) specified in [regex](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_regex.htm), with the scanned subarea specified in the optional parameters [off](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_off_len.htm) and [len](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_off_len.htm) and the occurrence of the match specified in the optional parameter [occ](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_occ.htm).

The return code has the type i and is filled as follows:

-   The function find searches for the exact substring specified in [substring](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_sub.htm) or for a match with the regular expression [regex](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_regex.htm) and returns the offset of the occurrence with respect to the full length of text. The search is case-sensitive by default, but this can be overridden using the parameter [case](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_case.htm). If substring is empty, an exception from the class CX\_SY\_STRG\_PAR\_VAL is raised.

-   The function find\_end searches like find, however it returns the sum of the offset of the location and the length of the correspondence to the regular expression.

-   The function find\_any\_of returns the offset of the occurrence of any character in [substring](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_sub.htm), and is always case-sensitive. If substring is empty, the value -1 is returned.

-   The function find\_any\_not\_of returns the offset of the found occurrence of any character not in [substring](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_sub.htm), and is always case-sensitive. If substring is empty, the value -1 is returned.

If a search is not successful, all functions return the value -1.

The optional parameters [off](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_off_len.htm), [len](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_off_len.htm), and [occ](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_occ.htm) have the following meaning when combined:

-   If occ is positive, the subarea defined by off and len is searched from left to right.

-   If occ is negative, the subarea defined by off and len is searched from right to left.

The occurrence of the match specified by occ refers to the search area defined by off and len.

Notes

-   Using the related search functions [count](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencount_functions.htm) and [count\_...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencount_functions.htm), it is possible to determine the total number of occurrences instead of an offset.

-   Like the statement [FIND](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfind.htm), the search functions can be faster than the relational operator [CS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_strings.htm) cy some magnitude.

Example

The result of the following function calls is 3, 6, 3, and 3.

DATA(result1) = find(            val = \`xxx123yyy\` regex = \`\\d+\` ).
DATA(result2) = find\_end(        val = \`xxx123yyy\` regex = \`\\d+\` ).
DATA(result3) = find\_any\_of(     val = \`xxx123yyy\` sub   = \`123\` ).
DATA(result4) = find\_any\_not\_of( val = \`xxx123yyy\` sub   = \`x\`   ).

Executable Example

[String Functions, find and substring](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_function_find_abexa.htm)

[Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_exceptions.htm)

Handleable Exceptions

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

-   Cause: Illegal offset or length specified in off and len.
    Runtime error: STRING\_OFFSET\_TOO\_LARGE
    

CX\_SY\_REGEX\_TOO\_COMPLEX

-   Cause: More information: [Exceptions in Regular Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenregex_exceptions.htm).
    Runtime error: REGEX\_TOO\_COMPLEX
    

CX\_SY\_STRG\_PAR\_VAL

-   Cause: Substring in sub or regular expression in regex is empty or occurrence in occ is 0.
    Runtime error: STRG\_ILLEGAL\_PAR