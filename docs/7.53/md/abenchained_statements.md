  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) → 

Chained Statements

Consecutive statements that have the same initial part can be combined into one chained statement. To do this, the identical initial part is specified once and closed with a colon (:). The remaining parts are then specified separately, separated by commas (,), and closed with a period (.). When the syntax is checked and the program executed, the chained statement is handled in the same way as the corresponding string of individual ABAP statements.

Programming Guideline

[Only use chained statements where appropriate](javascript:call_link\('abenchained_statements_guidl.htm'\) "Guideline")

Notes

-   The identical starting parts are not restricted to the keyword.

-   When using chained statements, care must be taken to not mistakenly produce any statements that have correct syntax but the wrong behavior. This mistake is most commonly made with more complex statements, such as when using [expressions](javascript:call_link\('abenexpression_glosry.htm'\) "Glossary Entry") or function calls where chained statements must be avoided all together.

-   If further colons are specified after the first colon of a chained statement, they are handled like blanks.

Examples

Typical use of a chained statement:

DATA: BEGIN OF struc,
        col1 TYPE c LENGTH 4,
        col2 TYPE c LENGTH 4,
      END OF struc.

The complete syntax of the four statements is:

DATA BEGIN OF struc.
DATA   col1 TYPE c LENGTH 4.
DATA   col2 TYPE c LENGTH 4.
DATA END OF struc.

Chained statement in which more than just the keyword is cut off:

CALL FUNCTION func EXPORTING para = : '1', '2', '3'.

The complete syntax of the three statements is:

CALL FUNCTION func EXPORTING para = '1'.
CALL FUNCTION func EXPORTING para = '2'.
CALL FUNCTION func EXPORTING para = '3'.

Incorrect use of a chained statement in ABAP SQL:

UPDATE scustom SET:  discount  = '003',
                     telephone = '0621/444444'
               WHERE id        = '00017777'.

This code fragment does not represent an individual statement that updates the discount and phone number of customer 00017777. Instead, there are two statements, with the first changing the discount for all customers and the second changing the phone number of customer 00017777.