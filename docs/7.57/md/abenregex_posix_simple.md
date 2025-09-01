---
title: "POSIX regex - Simplified Regular Expressions (obsolete)"
description: |
  In addition to the regular expressions in accordance with the extended POSIX(https://en.wikipedia.org/wiki/POSIX) standard IEEE 1003.1, the class CL_ABAP_REGEX also offers an alternative type of simplified regular expression with restricted functions. These simplified regular expressions (short:
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_posix_simple.htm"
abapFile: "abenregex_posix_simple.htm"
keywords: ["do", "if", "class", "data", "abenregex", "posix", "simple"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_internal_obsolete.htm) →  [Obsolete Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencharacter_string_obsolete.htm) →  [Obsolete Regular Expression Syntax](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregular_expressions_obsolete.htm) →  [regex - POSIX Syntax (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_posix_syntax.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: POSIX regex - Simplified Regular Expressions \(obsolete\), ABENREGEX_POSIX_SIMPLE, 757%
0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

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

The first search uses regular syntax and finds the first three letters aaa. The second search has simplified syntax, where "+" does not have any meaning as a special character and finds the substring "a+" from offset 2.

DATA res TYPE match\_result\_tab.
FIND ALL OCCURRENCES OF REGEX ##regex\_posix
  cl\_abap\_regex=>create\_posix( pattern = 'a+'
                               simple\_regex = abap\_false )
  IN 'aaa+bbb' RESULTS res.
FIND ALL OCCURRENCES OF REGEX ##regex\_posix
  cl\_abap\_regex=>create\_posix( pattern = 'a+'
                               simple\_regex = abap\_true )
  IN 'aaa+bbb' RESULTS res.