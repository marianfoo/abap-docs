---
title: "Exceptions in Regular Expressions"
description: |
  If a regular expression has correct syntax but is too complex, it cannot be executed by the Boost.Regex Library(http://www.boost.org/doc/libs/1_61_0/libs/regex/doc/html/index.html) that is integrated in the ABAP kernel(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenkernel_glosry.
version: "7.52"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenregex_exceptions.htm"
abapFile: "abenregex_exceptions.htm"
keywords: ["do", "if", "case", "try", "class", "data", "abenregex", "exceptions"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_processing_expr_func.htm) →  [Regular Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenregular_expressions.htm) → 

Exceptions in Regular Expressions

If a regular expression has correct syntax but is too complex, it cannot be executed by the [Boost.Regex Library](http://www.boost.org/doc/libs/1_61_0/libs/regex/doc/html/index.html) that is integrated in the [ABAP kernel](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenkernel_glosry.htm "Glossary Entry"). In this case, an exception of the class

-   CX\_SY\_REGEX\_TOO\_COMPLEX is raised.

A regular expression is too complex if the number of transitions exceeds a certain limit. This is usually the case if there are expressions that have been programmed incorrectly or are inadequate regular expressions that would produce extensive tracing for certain texts.

Note

The occurrence of the exception CX\_SY\_REGEX\_TOO\_COMPLEX depends on both the regular expression and the text to be checked. A regular expression that works for one text may raise an exception in another text.

Example

Consider the following simple search with a regular expression that has correct syntax:

FIND REGEX '.\*X.\*' IN text.
IF sy-subrc = 0.
  ...
ENDIF.

If the text length is several hundred characters or more, this statement always raises the exception named above. As a result of the [Leftmost-longest rule](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenregex_search.htm) and the greedy behavior of the [chaining operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenregex_syntax_operators.htm) \*, all occurrences of subsequences that match the first part of the regular expression (.\*) have to be saved internally until the last X has been found. A chaining like .\*, which matches any number of subsequences, should therefore be avoided at the start of a regular expression.

The above search is successful for every character string that contains at least one X and any number of other characters. Instead of a regular expression, in this case a simple search for a subsequence or the relational operator [CS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_strings.htm) can be used:

FIND SUBSTRING 'X' IN text.
IF sy-subrc = 0.
  ...
ENDIF.

or

IF text CS 'X'.
  ...
ENDIF.