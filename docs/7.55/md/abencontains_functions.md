---
title: "Syntax Forms"
description: |
  1. ... contains( val = text(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_val.htm) substartend = substring(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_sub.htm)  case = case(https://help.sap.com/doc/abapdocu_755_in
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencontains_functions.htm"
abapFile: "abencontains_functions.htm"
keywords: ["do", "if", "case", "try", "catch", "class", "data", "types", "abencontains", "functions"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogical_expr_func.htm) →  [Logical Expressions (log\_exp)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp.htm) →  [rel\_exp - Predicates](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpredicate.htm) →  [rel\_exp - Predicate Functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpredicate_functions.htm) →  [rel\_exp - Predicate Functions for Character-Like Arguments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpredicate_functions_strgs.htm) → 

rel\_exp - contains, contains\_...

Syntax Forms

1\. ... contains( [val = text](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_val.htm) [sub*|*start*|*end = substring](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_sub.htm) *\[* [case = case](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_case.htm)*\]*
                *\[* [off = off](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_off_len.htm)*\]* *\[* [len = len](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_off_len.htm)*\]* *\[*occ = occ*\]* ) ...

2\. ... contains( [val = text](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_val.htm) [pcre*|*regex = regex](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_regex.htm) *\[* [case = case](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_case.htm)*\]*
                *\[* [off = off](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_off_len.htm)*\]* *\[* [len = len](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_off_len.htm)*\]* *\[*occ = occ*\]* ) ...

3\. ... contains\_any\_of( [val = text](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_val.htm) [sub*|*start*|*end = substring](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_sub.htm)
                       *\[* [off = off](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_off_len.htm)*\]* *\[* [len = len](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_off_len.htm)*\]* *\[*occ = occ*\]* ) ...

4\. ... contains\_any\_not\_of( [val = text](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_val.htm) [sub*|*start*|*end = substring](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_sub.htm)
                           *\[* [off = off](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_off_len.htm)*\]* *\[* [len = len](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_off_len.htm)*\]* *\[*occ = occ*\]* ) ...

Effect

These [predicate functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpredicate_function_glosry.htm "Glossary Entry") return a [truth value](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentruth_value_glosry.htm "Glossary Entry") for a condition to the argument [text](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_val.htm).

-   The variants of the function contains with the parameters sub, start, or end scan a search range defined by [off](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_off_len.htm) and [len](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_off_len.htm) in text for matches with the string specified in [substring](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_sub.htm). The return value is true if at least the number of matches specified in occ is found. The search is case-sensitive by default, but this can be overridden using the parameter [case](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_case.htm). If substring is passed to start or end, the matches must occur directly one after another either at the start or at the end of the search range. sub, on the other hand, allows the matches to occur anywhere in the search range. If substring is empty, an exception of the class CX\_SY\_STRG\_PAR\_VAL is raised.

-   The variants of the function contains with the parameter [regex](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_regex.htm) scan a search range defined by [off](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_off_len.htm) and [len](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_off_len.htm) in text for matches with the [regular expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenregex_syntax.htm) specified in [regex](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_regex.htm).

-   If the argument pcre is used, regex must contain a [PCRE regular expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenregex_pcre_syntax.htm).

-   If the argument regex is used, regex must contain a [POSIX regular expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenregex_posix_syntax.htm).

The return value is true if at least the number of matches specified in occ is found. The search is case-sensitive by default, but this can be overridden using the parameter [case](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_case.htm).

-   The function contains\_any\_of has the same effect as contains, but does not check for the occurrences of the entire string in [substring](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_sub.htm). Instead, it checks for the individual characters in substring, which is always case-sensitive. The return value is true if text contains at least the set of characters specified in occ. If start or end are specified, the characters must be in any order at the start or at the end of the search range, whereas in sub they can be anywhere.

-   The function contains\_any\_not\_of has the same effect as contains\_any\_of but does not require the characters from [substring](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_sub.htm). Instead, it requires any characters that are not in substring.

occ is a [numeric expression position](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry") of type i and its default value is 1. Specifying a value less than or equal to 0 raises an exception of the class CX\_SY\_STRG\_PAR\_VAL.

Hints

-   The parameter occ has a different meaning here than in other functions used for searches.

-   The functions shown here can replace the [comparison operators for character-like data types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_strings.htm) as follows:

Comparison Operator

Predicate Function

o1 CO o2

NOT contains\_any\_not\_of( val = o1 sub = o2 )

o1 CN o2

contains\_any\_not\_of( val = o1 sub = o2 )

o1 CA o2

contains\_any\_of( val = o1 sub = o2 )

o1 NA o2

NOT contains\_any\_of( val = o1 sub = o2 )

o1 CS o2

contains( val = to\_upper( o1 ) sub = to\_upper( o2 ) )

o1 NS o2

NOT contains( val = to\_upper( o1 ) sub = to\_upper( o2 ) )

Since the comparison operators CS and NS are not case-sensitive, which means that the arguments must be processed by the functions [to\_upper](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencase_functions.htm) (or to\_lower). It should also be noted that the trailing blanks of character-like arguments of fixed length are always ignored in the predicate functions, whereas there are exceptions to this rule for operands of comparison operators.

The operators CP and NP can be replaced by the predicate function contains and a suitable regular expression. The differences in case-sensitive handling must also be respected, whereby a simple mapping like in CS and NS is not possible, but usually not required.

Example

The IF block is reached in the following code section, since neither the first nor the last character in html occur in the system field sy-abcde.

DATA html TYPE string.
html = '<body>Text</body>'.
IF contains\_any\_not\_of( val = to\_upper( html ) start = sy-abcde ) AND
   contains\_any\_not\_of( val = to\_upper( html ) end   = sy-abcde ).
  ...
ENDIF.

Example

The following function call checks, if a type c field contains any non-digit character.

DATA postal\_code TYPE c LENGTH 5.
cl\_demo\_input=>request( CHANGING field = postal\_code ).
IF contains( val  = postal\_code
             pcre = \`\\D\` ).
  cl\_demo\_output=>display( \`Invalid postal code.\` ).
  RETURN.
ENDIF.

[Exceptions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

-   Cause: Illegal offset or length specified in off and len.
    Runtime error: STRING\_OFFSET\_TOO\_LARGE

CX\_SY\_REGEX\_TOO\_COMPLEX

-   Cause: See [Exceptions in Regular Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenregex_exceptions.htm).
    Runtime error: REGEX\_TOO\_COMPLEX

CX\_SY\_STRG\_PAR\_VAL

-   Cause: A substring in substring or regular expression in regex is empty or the number of occurrences in occ is less than or equal to 0.
    Runtime error: STRG\_ILLEGAL\_PAR