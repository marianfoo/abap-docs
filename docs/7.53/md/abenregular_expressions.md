---
title: "Regular Expressions"
description: |
  ABAP supports extended regular expressions(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenregular_expression_glosry.htm 'Glossary Entry') in accordance with POSIX(http://www.pasc.org/) standard 1003.2. Regular expressions can be used after the addition REGEX of the statements -
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenregular_expressions.htm"
abapFile: "abenregular_expressions.htm"
keywords: ["do", "if", "case", "try", "class", "data", "abenregular", "expressions"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_processing_expr_func.htm) → 

Regular Expressions

ABAP supports extended [regular expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenregular_expression_glosry.htm "Glossary Entry") in accordance with [POSIX](http://www.pasc.org/) standard 1003.2. Regular expressions can be used after the addition REGEX of the statements

-   [FIND](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfind_pattern.htm)

-   [REPLACE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreplace_in_pattern.htm)

and also as an argument of the following functions

-   [count, count\_...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencount_functions.htm)

-   [contains\_...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencontains_functions.htm)

-   [find, find\_...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensearch_functions.htm)

-   [match](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmatch_functions.htm)

-   [matches](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmatches_functions.htm)

-   [replace](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreplace_functions.htm)

-   [substring, substring\_...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubstring_functions.htm)

where they are used for searching in and testing character strings. The classes

permit object-oriented use of regular expressions.

A regular expression r is made up of literal characters and special characters in accordance with the [syntax of regular expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenregex_syntax.htm) and represents a set of character strings. If text is a character string represented by r, this indicates that r matches text or that r fits text. Two (different) regular expressions match if they fit the same set of character strings.

If a regular expression is applied to a character string text as a search string, this indicates that a search for matches of the regular expression with substrings of text is intended. In this case, special characters in the regular expression do not match characters, but instead match positions, thus influencing the type and number of occurrences. When character strings are [tested](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenregex_test.htm), this involves checking whether the full content matches a pattern.

Notes

-   A regular expression can have correct syntax, but be too complex for to be executed. This raises a handleable exception of the class CX\_SY\_REGEX\_TOO\_COMPLEX. See [Exceptions in Regular Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenregex_exceptions.htm).

-   The example program DEMO\_REGEX and its enhancement DEMO\_REGEX\_TOY makes it possible to test the search and replace functions by applying regular expressions to texts.

Copyright Note

This software uses [Version 1.31](http://www.boost.org/doc/libs/1_31_0/libs/regex/doc/index.html) of the Boost.Regex Library. Copyright (c) 1998-2003 Dr. John Maddock. Attributes of this standard not yet support in this version are [listed here](http://www.boost.org/doc/libs/1_31_0/libs/regex/doc/standards.html).

Continue
[Syntax of Regular Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenregex_syntax.htm)
[Testing Regular Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenregex_test.htm)
[Exceptions in Regular Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenregex_exceptions.htm)
![Example](exa.gif "Example") [Regular Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenregex_abexa.htm)