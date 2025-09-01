  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_internal_obsolete.htm) →  [Obsolete Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencharacter_string_obsolete.htm) →  [Obsolete Regular Expression Syntax](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenregular_expressions_obsolete.htm) →  [regex - POSIX Syntax (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenregex_posix_syntax.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20POSIX%20regex%20-%20Simplified%20Regular%20Expressions%20%28obsolete%29%2C%20ABENREGEX_POSIX_SIMPLE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggest
ion%20for%20improvement:)

POSIX regex - Simplified Regular Expressions (obsolete)

In addition to the regular expressions in accordance with the extended [POSIX](https://en.wikipedia.org/wiki/POSIX) standard IEEE 1003.1, the class CL\_ABAP\_REGEX also offers an alternative type of simplified regular expression with restricted functions. These simplified regular expressions (short: simplified expressions) do not support all POSIX operators and use partially different syntax. The semantics of regular expressions and simplified expressions are, however, the same.

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

This table shows that many special characters in the regular syntax have no effect in the simplified syntax. Parentheses and curly brackets must be prefixed with the character \\ if they are to keep their function in the regular syntax.

Hints

-   Regular expressions with simplified syntax can only be used within the class CL\_ABAP\_REGEX. If the value 'X' is passed to the input parameter simple\_regex, the regular expression is handled in accordance with the simplified syntax. By default, syntax in accordance with the extended POSIX standard is used. If the simplified syntax is to be used in the statements FIND or REPLACE, an object of the class CL\_ABAP\_REGEX must be passed.
-   The simplified syntax corresponds to the syntax of regular expressions in the command grep on Unix.

Example

This table shows the differences in parentheses between regular syntax and simplified syntax. The final two columns show examples that match the expressions in the first column, depending on the syntax used.

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

The first search uses regular syntax and finds the first three letters aaa. The second search has simplified syntax, where + does not have any meaning as a special character and finds the substring a+ from offset 2.

DATA res TYPE match\_result\_tab.
FIND ALL OCCURRENCES OF REGEX ##regex\_posix
  cl\_abap\_regex=>create\_posix( pattern = 'a+'
                               simple\_regex = abap\_false )
  IN 'aaa+bbb' RESULTS res.
FIND ALL OCCURRENCES OF REGEX ##regex\_posix
  cl\_abap\_regex=>create\_posix( pattern = 'a+'
                               simple\_regex = abap\_true )
  IN 'aaa+bbb' RESULTS res.