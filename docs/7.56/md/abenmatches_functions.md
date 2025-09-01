---
title: "Syntax"
description: |
  ... matches( val = text(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_functions_val.htm) pcrexpath = regex(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_functions_regex.htm)  case = case(https://help.sap.com/doc/abapdocu_756_index_htm/7.56
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmatches_functions.htm"
abapFile: "abenmatches_functions.htm"
keywords: ["do", "if", "case", "try", "catch", "class", "abenmatches", "functions"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogical_expr_func.htm) →  [Logical Expressions (log\_exp)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp.htm) →  [rel\_exp - Predicates](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpredicate.htm) →  [rel\_exp - Predicate Functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpredicate_functions.htm) →  [rel\_exp - Predicate Functions for Character-Like Arguments](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpredicate_functions_strgs.htm) → 

rel\_exp - matches

Syntax

... matches( [val = text](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_functions_val.htm) [pcre*|*xpath = regex](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_functions_regex.htm) *\[* [case = case](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_functions_case.htm)*\]*
             [*\[*off = off](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_functions_off_len.htm)*\]* [*\[*len = len](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_functions_off_len.htm)*\]* ) ...

Effect

The [built-in](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuilt_in_functions.htm) [predicate function](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpredicate_function_glosry.htm "Glossary Entry") matches compares a search range of the argument [text](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_functions_off_len.htm), defined using [off](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_functions_off_len.htm) and [len](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_functions_val.htm), with the [regular expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_syntax.htm) specified in [regex](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_functions_regex.htm).

-   If the argument pcre is used, regex must contain a [PCRE regular expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_pcre_syntax.htm).
-   If the argument xpath is used, regex must contain a [XPath regular expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_xpath_syntax.htm).

A regular expression in PCRE or XPath syntax is compiled in an extended mode: Most unescaped whitespace (blanks and line breaks) of the pattern are ignored outside character classes and comments can be placed behind #. In order to specify whitespace and # in a pattern, they must be escaped or the extended mode must be switched of with [(?-x)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_pcre_syntax_specials.htm) in the regular expression.

The function returns a [truth value](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentruth_value_glosry.htm "Glossary Entry").

-   The return value is true when the whole search range matches the regular expression.
-   It is false else.

The comparison is case-sensitive by default, but this can be overridden using the parameter [case](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_functions_case.htm).

Hints

-   The match function [match](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmatch_functions.htm) can be used to return a substring that matches a regular expression.
-   Besides pcre and xpath, the obsolete argument [regex](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_functions_regex_obs.htm) can also be used. Then an obsolete [POSIX regular expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_posix_syntax.htm) must be passed.

Example

The first predicate function returns the value "true" because the argument val only contains letters. The second predicate function returns the value "false" because the argument val also contains numbers.

ASSERT     matches( val = 'abcde' pcre = '\[\[:alpha:\]\]\*' ).
ASSERT NOT matches( val = 'a123e' pcre = '\[\[:alpha:\]\]\*' ).

Executable Example

[Predicate Function, matches](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpred_function_matches_abexa.htm)

[Exceptions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

-   Cause: Illegal offset or length specified in off and len.
    Runtime error: STRING\_OFFSET\_TOO\_LARGE

CX\_SY\_REGEX\_TOO\_COMPLEX

-   Cause: See [Exceptions in Regular Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_exceptions.htm).
    Runtime error: REGEX\_TOO\_COMPLEX

CX\_SY\_STRG\_PAR\_VAL

-   Cause: Regular expression in regex is empty.
    Runtime error: STRG\_ILLEGAL\_PAR