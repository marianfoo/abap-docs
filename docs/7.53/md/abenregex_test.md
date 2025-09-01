  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_processing_expr_func.htm) →  [Regular Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenregular_expressions.htm) → 

Testing Regular Expressions

A built-in function or system classes can be used to test regular functions.

Using a Built-In Function

The predicate function [matches](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmatches_functions.htm) can be used as follows to test whether a regular expression passed to regex matches the character string passed to val:

... matches( val = ... regex = ...  ) ...

The function matches returns a truth value and can be used like a relational expression in the corresponding positions, for example after IF (see the [executable example for](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpred_function_matches_abexa.htm) matches). Case-sensitivity can be specified using the parameter case and the passed string can be restricted to a substring.

Note

The match function [match](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmatch_functions.htm), however, returns a regular expression that matches a regular expression.

Using System Classes

The system classes for regular expressions are CL\_ABAP\_REGEX and CL\_ABAP\_MATCHER.

-   The class CL\_ABAP\_REGEX creates an object-oriented representation from a [regular expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenregex_syntax.htm) in a character-like field.

-   The class CL\_ABAP\_MATCHER applies a regular expression created using CL\_ABAP\_REGEX to either a character string or an internal table.

CL\_ABAP\_MATCHER is enough for simple tests of regular expressions:

DATA(matcher) = cl\_abap\_matcher=>create( pattern     = ...
                                         ignore\_case = ...
                                         text        = ... ).
DATA(match) = matcher->match( ).

The data object match contains the value "X" if the regular expression passed in pattern matches the character string passed in text.

The following program works in the same way, but creates an object of the class CL\_ABAP\_REGEX explicitly. This form has better performance than the short form above if the same regular expression is used multiple times for different texts.

DATA(regex) = NEW cl\_abap\_regex( pattern  =  ...
                                 ignore\_case = ... ).
DATA(matcher) = regex->create\_matcher( text = ... ).
                                       ignore\_case = ... .
DATA(match) = matcher->match( ).
matcher = regex->create\_matcher( text = ... ).