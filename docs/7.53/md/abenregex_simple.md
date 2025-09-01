  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [Regular Expressions](javascript:call_link\('abenregular_expressions.htm'\)) →  [Syntax of Regular Expressions](javascript:call_link\('abenregex_syntax.htm'\)) → 

Simplified Regular Expressions

In addition to the regular expressions (in accordance with the extended [POSIX](http://www.pasc.org/) standard IEEE 1003.1), the class CL\_ABAP\_REGEX also offers an alternative type of simplified regular expression with restricted functions. These simplified regular expressions (also known as simplified expressions) do not support all POSIX operators and use a slightly different syntax in parts. The semantics of regular expressions and simplified expressions are, however, the same.

Simplified Syntax

The following table provides an overview of the syntax differences between regular expressions and simplified regular expressions.

Regular Syntax

Simplified Syntax

\*

\*

+

Not supported

{ }

\\{ \\}

( )

\\( \\)

\[ \]

\[ \]

|

Not supported

(?= ) (?! )

Not supported

(?: )

Not supported

This table shows you that many special characters in the regular syntax have no effect in the simplified syntax. Parentheses and curly brackets need to be escaped using the character \\ if they are to keep their function in the regular syntax.

Notes

-   Regular expressions with simplified syntax can only be used within the class CL\_ABAP\_REGEX. If the value 'X' is passed to the input parameter simple\_regex, the regular expression is handled in accordance with the simplified syntax. By default, syntax in accordance with the extended POSIX standard is used. If the simplified syntax is to be used in the statements FIND or REPLACE, an object of the class CL\_ABAP\_REGEX must be passed.

-   The simplified syntax corresponds to the syntax of regular expressions in the command grep on Unix.

Example

This table shows the differences in parentheses between regular syntax and simplified syntax. The final two columns show examples to which the expressions in the first column are suited (depending on the syntax used).

Pattern

Regular Syntax

Simplified Syntax

(.)

a

(a)

\\(.\\)

(a)

a

Example

The first search uses regular syntax and finds the first three letters "aaa". The second search has simplified syntax, where "+" does not have any meaning as a special character, and finds the substring "a+" from offset 2.

DATA: regex TYPE REF TO cl\_abap\_regex,
      res   TYPE        match\_result\_tab.
CREATE OBJECT regex
  EXPORTING
    pattern      = 'a+'
    simple\_regex = abap\_false.
FIND ALL OCCURRENCES OF REGEX regex IN 'aaa+bbb' RESULTS res.
CREATE OBJECT regex
  EXPORTING
    pattern      = 'a+'
    simple\_regex = abap\_true.
FIND ALL OCCURRENCES OF REGEX regex IN 'aaa+bbb' RESULTS res.