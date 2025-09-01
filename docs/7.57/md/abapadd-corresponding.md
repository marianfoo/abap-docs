---
title: "ADD-CORRESPONDING, SUBTRACT-CORRESPONDING, MULTIPLY-CORRESPONDING, DIVIDE-CORRESPONDING"
description: |
  Obsolete Syntax ADD-CORRESPONDING      struc1 TO struc2. SUBTRACT-CORRESPONDING struc1 FROM struc2. MULTIPLY-CORRESPONDING struc1 BY   struc2. DIVIDE-CORRESPONDING   struc1 BY   struc2. Effect These statements, which are forbidden in classes, add, subtract, multiply, or divide structures by componen
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapadd-corresponding.htm"
abapFile: "abapadd-corresponding.htm"
keywords: ["do", "if", "catch", "class", "data", "abapadd", "corresponding"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_internal_obsolete.htm) →  [Obsolete Calculation Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencomputing_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ADD-CORRESPONDING, SUBTRACT-CORRESPONDING, MULTIPLY-CORRESPONDING, DIVIDE-CORRESPONDI
NG, ABAPADD-CORRESPONDING, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ADD-CORRESPONDING, SUBTRACT-CORRESPONDING, MULTIPLY-CORRESPONDING, DIVIDE-CORRESPONDING

Obsolete Syntax

ADD-CORRESPONDING      struc1 TO struc2.
SUBTRACT-CORRESPONDING struc1 FROM struc2.
MULTIPLY-CORRESPONDING struc1 BY   struc2.
DIVIDE-CORRESPONDING   struc1 BY   struc2.

Effect

These statements, which are forbidden in classes, add, subtract, multiply, or divide structures by component. Structures must be specified for struc1 and struc2. All identically named components in struc1 and struct2 are processed in pairs and the result is assigned to the respective component of struct2.

The names are compared, as in the statement [MOVE-CORRESPONDING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmove-corresponding.htm). For each identically named component pair comp, the statement

-   [ADD](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapadd.htm) struc1-comp TO struc2-comp.
-   [SUBTRACT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapadd.htm) struc1-comp FROM struc2-comp.
-   [MULTIPLY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapadd.htm) struc1-comp BY struc2-comp.
-   [DIVIDE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapadd.htm) struc1-comp BY struc2-comp.

is executed internally, and the appropriate conversions are performed, if necessary. In complex structures, the names of the field pairs in question must be completely identical at all hierarchical levels.

Hint

These statements are error-prone because, particularly in complex structures, it is not easy to check that identically named components have the data type and content necessary for a numeric operation.

Example

The components x and y occur in both structures and are added. After the addition, the results are in struc2-x and struc2-y.

DATA: BEGIN OF struc1,
        x TYPE i,
        y TYPE i,
        z TYPE i,
      END OF struc1,
      BEGIN OF struc2,
        a      TYPE i,
        b      TYPE i,
        x      TYPE p LENGTH 8 DECIMALS 0,
        y      TYPE p LENGTH 8 DECIMALS 0,
      END OF struc2.
...
ADD-CORRESPONDING struc1 TO struc2.

[Exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_ARITHMETIC\_OVERFLOW

-   Cause: Overflow in addition, type I in the additions UNTIL or FROM ... TO
    Runtime error: ADDF\_INT\_OVERFLOW
-   Cause: Overflow in arithmetic operation (type p)
    Runtime error: BCD\_OVERFLOW
-   Cause: Integer overflow in addition
    Runtime error: COMPUTE\_INT\_PLUS\_OVERFLOW

CX\_SY\_CONVERSION\_OVERFLOW

-   Cause: Overflow in arithmetic operation (type p, with specified length)
    Runtime error: BCD\_FIELD\_OVERFLOW

CX\_SY\_ZERODIVIDE

-   Cause: Division by 0 (type p)
    Runtime error: BCD\_ZERODIVIDE
-   Cause: Division by 0 (type f)
    Runtime error: COMPUTE\_FLOAT\_ZERODIVIDE
-   Cause: Division by 0 (type i)
    Runtime error: COMPUTE\_INT\_ZERODIVIDE

Uncatchable Exceptions

-   Cause: p field does not contain the correct BCD format
    Runtime error: BCD\_BADDATA