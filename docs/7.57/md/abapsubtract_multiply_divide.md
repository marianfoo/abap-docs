---
title: "SUBTRACT, MULTIPLY, DIVIDE"
description: |
  Obsolete Syntax SUBTRACT dobj1 FROM dobj2. MULTIPLY dobj2 BY   dobj1. DIVIDE   dobj2 BY   dobj1. Effect These statements have the same effect as the statements dobj2 = dobj2 - dobj1.(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenequals_arith_expr.htm) dobj2 = dobj2  dobj1.(htt
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsubtract_multiply_divide.htm"
abapFile: "abapsubtract_multiply_divide.htm"
keywords: ["do", "if", "try", "catch", "data", "abapsubtract", "multiply", "divide"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_internal_obsolete.htm) →  [Obsolete Calculation Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencomputing_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SUBTRACT, MULTIPLY, DIVIDE, ABAPSUBTRACT_MULTIPLY_DIVIDE, 757%0D%0A%0D%0AError:%0D%0A
%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

SUBTRACT, MULTIPLY, DIVIDE

Obsolete Syntax

SUBTRACT dobj1 FROM dobj2.
MULTIPLY dobj2 BY   dobj1.
DIVIDE   dobj2 BY   dobj1.

Effect

These statements have the same effect as the statements

[dobj2 = dobj2 - dobj1.](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenequals_arith_expr.htm)
[dobj2 = dobj2 \* dobj1.](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenequals_arith_expr.htm)
[dobj2 = dobj2 / dobj1.](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenequals_arith_expr.htm)

The content of dobj2

-   has the content of dobj1 subtracted,
-   or is multiplied by the content of dobj1,
-   or is divided by the content of dobj1,

and the result is assigned to dobj2. The data objects dobj1 and dobj2 must be numeric. Only data objects can be specified and no calls or other expressions. The [calculation type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencalculation_type_glosry.htm "Glossary Entry") is determined like an [arithmetic expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcompute_arith.htm).

Division by the value 0 is undefined and raises a catchable exception. The only situation where division by 0 does not raise an exception is if the dividend is also 0. Here, the result is set to 0.

Hint

The statements shown here have been replaced by [calculation assignments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencalculation_assignment_glosry.htm "Glossary Entry") with the operators [\-=](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencalculation_assignments.htm), [\*=](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencalculation_assignments.htm), and [/=](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencalculation_assignments.htm) in which the operands can also be specified as expressions.

Example

The variable n has the value 1.50 after the calculation statements. See also the example for the corresponding [calculation assignments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencalculation_assignments.htm).

DATA n TYPE p DECIMALS 2.
ADD 1 TO n.
ADD 1 TO n.
ADD 1 TO n.
ADD 1 TO n.
SUBTRACT 2 FROM n.
MULTIPLY n BY 3.
DIVIDE n BY 4.

[Exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_ARITHMETIC\_OVERFLOW

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
Runtime error: ADD\_FIELDS\_ILLEGAL\_ACCESS

-   Cause: p field does not contain the correct BCD format
    Runtime error: BCD\_BADDATA