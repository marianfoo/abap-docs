---
title: "Syntax"
description: |
  ... match( val = text(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_functions_val.htm) pcrexpath = regex(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_functions_regex.htm)  case = case(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/e
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmatch_functions.htm"
abapFile: "abenmatch_functions.htm"
keywords: ["do", "if", "case", "catch", "class", "data", "abenmatch", "functions"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_processing_expr_func.htm) →  [String Functions (string\_func)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_functions.htm) →  [string\_func - Processing Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprocess_functions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20string_func%20-%20match%2C%20ABENMATCH_FUNCTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

string\_func - match

The match function returns a substring of a character-like argument that matches a regular expression.

Syntax

... match( [val = text](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_functions_val.htm) [pcre*|*xpath = regex](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_functions_regex.htm) *\[* [case = case](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_functions_case.htm)*\]* *\[*[occ = occ](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_functions_occ.htm)*\]* ) ...

Effect

The [built-in function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_functions.htm) match searches [text](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_functions_val.htm) for the match specified in [occ](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_functions_occ.htm) with the [regular expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenregex_syntax.htm) specified in [regex](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_functions_regex.htm) and returns the substring found. The search is case-sensitive by default, but this can be overridden using the parameter [case](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_functions_case.htm).

-   If the argument pcre is used, regex must contain a [PCRE regular expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenregex_pcre_syntax.htm).
-   If the argument xpath is used, regex must contain a [XPath regular expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenregex_xpath_syntax.htm).

A regular expression in PCRE or XPath syntax is compiled in an extended mode: Most unescaped whitespace (blanks and line breaks) of the pattern are ignored outside character classes and comments can be placed behind #. In order to specify whitespace and # characters in a pattern, they must be escaped or the extended mode must be switched of with [(?-x)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenregex_pcre_syntax_specials.htm) in the regular expression.

The return value has the type string.

Hint

Besides pcre and xpath, the obsolete argument [regex](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_functions_regex_obs.htm) can also be used. Then an obsolete [POSIX regular expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenregex_posix_syntax.htm) must be passed.

Example

The following match function returns x2.

cl\_demo\_output=>display(
  match( val = 'x1 x2 x3' pcre = 'x.' occ = 2 ) ).

Executable Example

[String Functions, count, find and match](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_function_find_abexa.htm)

[Exceptions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_REGEX\_TOO\_COMPLEX

-   Cause: See [Exceptions in Regular Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenregex_exceptions.htm).
    Runtime error: REGEX\_TOO\_COMPLEX

CX\_SY\_STRG\_PAR\_VAL

-   Cause: Regular expression in regex is empty or there are 0 occurrences in occ.
    Runtime error: STRG\_ILLEGAL\_PAR