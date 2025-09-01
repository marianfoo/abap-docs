---
title: "Syntax Forms"
description: |
  1. ... substring( val = text(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_val.htm)  off = off(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_off_len.htm) len = len(https://help.sap.com/doc/abapdocu_755_index_htm/7
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensubstring_functions.htm"
abapFile: "abensubstring_functions.htm"
keywords: ["do", "if", "case", "try", "catch", "class", "data", "abensubstring", "functions"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_processing_expr_func.htm) →  [String Functions (string\_func)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions.htm) →  [string\_func - Processing Functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprocess_functions.htm) → 

string\_func - substring, substring\_...

Syntax Forms

1\. ... substring( [val = text](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_val.htm) *\[* [off = off](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_off_len.htm)*\]* *\[*[len = len](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_off_len.htm)*\]* ) ...

2\. ... substring\_from( [val = text](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_val.htm) *{* [sub = substring](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_sub.htm)*}**|**{*[pcre*|*regex = regex](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_regex.htm)*}*
                     *\[*[case = case](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_case.htm)*\]* *\[* [occ = occ](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_occ.htm)*\]* *\[* [len = len](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_off_len.htm)*\]*  ) ...

3\. ... substring\_after( [val = text](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_val.htm) *{* [sub = substring](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_sub.htm)*}**|**{*[pcre*|*regex = regex](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_regex.htm)*}*
                      *\[*[case = case](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_case.htm)*\]* *\[* [occ = occ](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_occ.htm)*\]* *\[* [len = len](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_off_len.htm)*\]*  ) ...

4\. ... substring\_before( [val = text](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_val.htm) *{* [sub = substring](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_sub.htm)*}**|**{*[pcre*|*regex = regex](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_regex.htm)*}*
                       *\[*[case = case](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_case.htm)*\]* *\[* [occ = occ](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_occ.htm)*\]* *\[* [len = len](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_off_len.htm)*\]*  ) ...

5\. ... substring\_to( [val = text](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_val.htm) *{* [sub = substring](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_sub.htm)*}**|**{*[pcre*|*regex = regex](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_regex.htm)*}*
                   *\[* [case = case](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_case.htm)*\]* *\[* [occ = occ](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_occ.htm)*\]* *\[* [len = len](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_off_len.htm)*\]*  ) ...

Effect

In the argument [text](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_val.htm), the substring functions determine a substring and return it.

The substring is determined as follows:

-   The function substring uses the offset [off](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_off_len.htm) and the length [len](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_off_len.htm) to return a certain substring. At least one of the arguments off or len must be specified.

-   The function substring\_from searches text for the match specified in [occ](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_occ.htm) with the character string specified in [substring](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_sub.htm) or with the [regular expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenregex_syntax.htm) specified in [regex](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_regex.htm) and returns the subarea of the length [len](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_off_len.htm) from the offset of the occurrence.

-   If the argument pcre is used, regex must contain a [PCRE regular expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenregex_pcre_syntax.htm).

-   If the argument regex is used, regex must contain a [POSIX regular expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenregex_posix_syntax.htm).

If len is not specified, the substring is returned to the end of the character string. If substring is empty, an exception of the class CX\_SY\_STRG\_PAR\_VAL is raised. The search is case-sensitive by default, but this can be overridden using the parameter case. If no substring is found, the return value is empty.

-   The function substring\_after works in the same way as substring\_from, but the subarea plus the length of the substring found is returned, from the offset of the occurrence.

-   The function substring\_before works in the same way as substring\_from, but the subarea of the length [len](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_off_len.htm) is returned before the offset of the occurrence. If len is not specified, the subarea is formed from the start of the character string.

-   The function substring\_to works in the same way as substring\_before, but the subarea before the offset of the occurrence plus the length of the substring found is returned.

The return value has the type string accordingly.

Hint

The performance of the subfield functions is not as good as a direct [substring access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoffset_length.htm). They do, however, make it possible to use [expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexpression_glosry.htm "Glossary Entry") in all operand positions and the y allow to search for substrings that match regular expressions.

Example

The return values of the following function calls are: "CD", "CDEFGH", "EFGH", "AB", and "ABCD".

DATA result TYPE string.
...
result = substring( val = 'ABCDEFGH' off = 2 len = 2 ).
...
result = substring\_from( val = 'ABCDEFGH' sub = 'CD' ).
...
result = substring\_after( val = 'ABCDEFGH' sub = 'CD' ).
...
result = substring\_before( val = 'ABCDEFGH' sub = 'CD' ).
...
result = substring\_to( val = 'ABCDEFGH' sub = 'CD' ).
...

[Exceptions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

-   Cause: Illegal offset or length specified in off and len.
    Runtime error: STRING\_OFFSET\_TOO\_LARGE

CX\_SY\_REGEX\_TOO\_COMPLEX

-   Cause: More information: [Exceptions in Regular Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenregex_exceptions.htm).
    Runtime error: REGEX\_TOO\_COMPLEX

CX\_SY\_STRG\_PAR\_VAL

-   Cause: Substring in sub or regular expression in regex is empty or occurrence in occ is 0.
    Runtime error: STRG\_ILLEGAL\_PAR