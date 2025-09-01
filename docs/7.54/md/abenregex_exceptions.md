  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [Regular Expressions](javascript:call_link\('abenregular_expressions.htm'\)) → 

Exceptions in Regular Expressions

If a regular expression has correct syntax but is too complex, it cannot be executed by the [Boost.Regex Library](http://www.boost.org/doc/libs/1_31_0/libs/regex/doc/index.html) that is integrated in the [ABAP kernel](javascript:call_link\('abenkernel_glosry.htm'\) "Glossary Entry"). In this case, an exception of the class

-   CX\_SY\_REGEX\_TOO\_COMPLEX is raised.

A regular expression is too complex if the number of transitions exceeds a certain limit. This is usually the case if there are expressions that have been programmed incorrectly or are inadequate regular expressions that would lead to extensive tracing for certain texts.

Note

The occurrence of the CX\_SY\_REGEX\_TOO\_COMPLEX exception depends on both the regular expression and the text to be checked. A regular expression that works for one text may raise an exception in another text.

Example

If we consider the following simple search with a syntactically correct regular expression:

FIND REGEX '.\*X.\*' IN text.
IF sy-subrc = 0.
  ...
ENDIF.

If the text length is several hundred characters or more, this statement always raises the exception named above. As a result of the [Leftmost-longest rule](javascript:call_link\('abenregex_search.htm'\)) and the greedy behavior of the [chaining operator](javascript:call_link\('abenregex_syntax_operators.htm'\)) \*, all occurrences of subsequences that match the first part of the regular expression (.\*) have to be saved internally until the last X has been found. A chain like .\*, which matches any number of subsequences, should therefore be avoided at the start of a regular expression.

The above search is successful for every character string that contains at least one X and any number of other characters. Instead of a regular expression, in this case a simple search for a subsequence or the relational operator [CS](javascript:call_link\('abenlogexp_strings.htm'\)) can be used:

FIND SUBSTRING 'X' IN text.
IF sy-subrc = 0.
  ...
ENDIF.

or

IF text CS 'X'.
  ...
ENDIF.