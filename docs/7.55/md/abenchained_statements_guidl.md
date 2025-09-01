---
title: "Chained Statements"
description: |
  Background Successive ABAP statements that have the same starting part can be expressed in a chained statement. A chained statement consists of the identical starting part that is specified once and that is concluded by a colon (:). Behind this colon, the remaining parts are separated by commas (,).
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenchained_statements_guidl.htm"
abapFile: "abenchained_statements_guidl.htm"
keywords: ["select", "update", "do", "if", "case", "try", "catch", "method", "data", "types", "exception-handling", "abenchained", "statements", "guidl"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_pgl.htm) →  [Structure and Style](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstructure_style_guidl.htm) →  [Alternative Spellings](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenalternative_spelling_guidl.htm) → 

Chained Statements

Background

Successive ABAP statements that have the same starting part can be expressed in a chained statement. A chained statement consists of the identical starting part that is specified once and that is concluded by a colon (:). Behind this colon, the remaining parts are separated by commas (,). Only the last part is concluded with a period (.). During the syntax check and the compilation, a chained statement is handled like the respective sequence of individual ABAP statements, where the shared starting part is put in front of each remaining part. The identical starting parts are not restricted to the keyword.

Rule

Only use chained statements where appropriate

Use chained statements mainly for declarations. They should always be used for related declarations of type TYPES BEGIN OF ... TYPES END OF ....

Details

The main motivation for using chained statements is to increase the readability of programs. Using chained statements correctly in declarations achieves this goal. In other statements, chained statements can actually decrease the readability or, in the worst case, result in incorrect program behavior. When using chained statements, only [one statement at most should be specified per program line](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstatement_guidl.htm "Guideline"). Never span [expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexpression_glosry.htm "Glossary Entry") or functional calls across multiple parts of chained statements.

Declarations

In complex declarations, chained statements can be used to improve readability. (However, if local declarations are too complex, this suggests an [insufficient separation of tasks](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenproc_volume_guidl.htm "Guideline"), and should not occur.) In particular, multiple chained statements can be used to group related declarations:

DATA:
   airplane            TYPE REF TO cl\_airplane,
   airplane\_attributes TYPE cl\_airplane=>airplane\_attributes.
DATA:
   airport            TYPE REF TO cl\_airport,
   airport\_attributes TYPE cl\_airport=>airport\_attributes.
...

The grouping of declarative statements that semantically represent a composite statement is even more important. For example, the declaration of structured types and data objects in ABAP is done using individual statements, whose close relationship should be expressed by a chained statement:

TYPES:
   BEGIN OF file,
     name TYPE string,
     owner TYPE sy-uname,
     creation\_date TYPE timestamp,
   END OF file.

For structures that copy components of another structure using the statements INCLUDE TYPE or INCLUDE STRUCTURE, this procedure cannot be used consistently because the beginning of the statement is different and therefore the chained statement must be interrupted. In any case, we [no longer recommend](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenincluding_structures_guidl.htm "Guideline") using the statement INCLUDE.

Operational Statements

For operational statements, however, chained statements are not recommended because they do not usually result in better readability. Example:

CALL METHOD meth EXPORTING para = : '1', '2', '3'.

Here, the exploitation of the fact that the same starting parts in front of the colon are not limited to the keyword was a little overdone. The following chained statement would be easier to read:

CALL METHOD:
meth EXPORTING para = '1',
meth EXPORTING para = '2',
meth EXPORTING para = '3'.

However, in this case the best [notation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmethod_call_guidl.htm "Guideline") can manage without a chained statement anyway:

meth( '1' ).
meth( '2' ).
meth( '3' ).

Unexpected Behavior

If chained statements are not understood correctly, this can easily produce statements with correct syntax but unexpected behavior. Prominent examples are initiating statements within control structures. Here, the use of chained statements does not usually lead to the intended result.

Let us look at the following TRY control structure, in which the CATCH statements are implemented using a chained statement:

TRY.
     ...
  CATCH: cx\_1, cx\_2, cx\_3.
     "exception handling
      ...
ENDTRY.

A reader and probably even a developer would assume that this is a CATCH block that handles three exceptions. In fact, the complete syntax is as follows:

TRY.
     ...
  CATCH cx\_1.
  CATCH cx\_2.
  CATCH cx\_3.
    "exception handling
     ...
ENDTRY.

The cx\_1 and cx\_2 exceptions are indeed caught, but the corresponding CATCH blocks are empty. Only the third exception cx\_3 has a CATCH block that is not empty. The syntax that the developer presumably intended is as follows:

TRY.
    ...
  CATCH cx\_1 cx\_2 cx\_3.
    "exception handling
    ...
ENDTRY.

For the WHEN blocks within a CASE control structure, the following applies:

WHEN: a, b, c.

is not equivalent to the more probable

WHEN a OR b OR c.

The [extended program check](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenextended_program_check_guidl.htm "Guideline") warns of empty statement blocks after CATCH and WHEN. In this way, the extended program check can be used to uncover where chained statements have been misused within TRY and CASE control structures.

Another example in which the use of chained statements can cause problems are ABAP SQL statements. Here are two examples:

-   The following chained statement consists of two SELECT statements that both supply a work area with values, and of which only the second one has a WHERE condition.

SELECT SINGLE carrid, connid
       FROM spfli
       WHERE @carrid = '...'
       INTO: @carrid\_wa, @connid\_wa.

The following INTO clause was undoubtedly meant here:

INTO (@carrid\_wa, @connid\_wa).

-   In the following example, the seemingly single statement does not update the discount and the telephone number of the customer with the customer ID 00017777. Instead, these are in fact two statements, of which the first changes the discount for all customers and the second changes the telephone number of the customer with the customer ID 00017777.

UPDATE scustom SET: discount = '003',
                    telephone = '0621/444444'
               WHERE id = '00017777'.

Even if the previous examples of the chained statements would show the semantic that is expected by the developer, such use is not recommended in any case because each reader would probably expect a different program behavior, and the readability and maintainability of the source code would be impaired considerably.

Expressions and Function Calls

Unfortunately, ABAP statements can be spanned across the colon in chained statements, even within expressions or function calls. The following example with correct syntax shows what can happen here, even in the simplest of cases. This example cannot be understood and nor does it produce the expected result.

DATA: itab TYPE TABLE OF i,
      num  TYPE i.
itab = VALUE #(: ( 1 ) ), ( 2 ) ), ( 3 ) ), ( 4 ) ).
num  = itab\[: 1 \], 2 \], 3 \], 4 \].
cl\_demo\_output=>new(
  )->write\_data(: \`Text1\` ), \`Text2\` ), num
  )->display( ).