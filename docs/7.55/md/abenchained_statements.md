---
title: "Chained Statements"
description: |
  Consecutive statements that have the same initial part can be combined into in a single chained statement. To do this, the identical initial part is specified once and closed with a colon (:). The remaining parts are then listed separately, divided by commas (,), and closed with a period (.). When t
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenchained_statements.htm"
abapFile: "abenchained_statements.htm"
keywords: ["update", "do", "if", "try", "data", "abenchained", "statements"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_syntax.htm) → 

Chained Statements

Consecutive statements that have the same initial part can be combined into in a single chained statement. To do this, the identical initial part is specified once and closed with a colon (:). The remaining parts are then listed separately, divided by commas (,), and closed with a period (.). When the syntax is checked and the program is executed, a chained statement is handled in the same way as the corresponding string of individual ABAP statements.

Programming Guideline

[Only use chained statements where appropriate](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenchained_statements_guidl.htm "Guideline")

Hints

-   The identical starting parts are not limited to the keyword.

-   When using chained statements, it must be ensured that no syntactically correct statements with incorrect behavior are created by mistake. The risk of this is especially high for more complex statements, as well as when using [expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexpression_glosry.htm "Glossary Entry") or function calls where chained statements should be avoided all together.

-   If further colons are listed after the first colon of a chained statement, they are handled like blanks.

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

Chained statement in which more than just the keyword is separated:

CALL FUNCTION func EXPORTING para = : '1', '2', '3'.

The complete syntax of the three statements is:

CALL FUNCTION func EXPORTING para = '1'.
CALL FUNCTION func EXPORTING para = '2'.
CALL FUNCTION func EXPORTING para = '3'.

Incorrect use of a chained statement in ABAP SQL. This code fragment does not represent an individual statement that updates the discount and phone number of customer 00017777. Instead, there are two statements: the first changes the discount for all customers, and the second changes the phone number of customer 00017777.

UPDATE scustom SET:  discount  = '003',
                     telephone = '0621/444444'
               WHERE id        = '00017777'.

Chained statements without commas. The colons are all handled like blanks:

DATA: :num :TYPE :i.
ADD :1 TO :num.
num :+= :1.