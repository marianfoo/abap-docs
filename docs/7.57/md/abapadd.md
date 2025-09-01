---
title: "ADD"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapadd_shortref.htm) Obsolete Syntax ADD dobj1 TO dobj2. Effect This statement has the same effect as the statement dobj2 = dobj2 + dobj1.(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenequals_arith_expr.
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapadd.htm"
abapFile: "abapadd.htm"
keywords: ["do", "if", "try", "catch", "data", "abapadd"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_internal_obsolete.htm) →  [Obsolete Calculation Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencomputing_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ADD, ABAPADD, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement
:)

ADD

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapadd_shortref.htm)

Obsolete Syntax

ADD dobj1 TO dobj2.

Effect

This statement has the same effect as the statement

[dobj2 = dobj2 + dobj1.](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenequals_arith_expr.htm)

The content of dobj1 is added to the content of dobj2 and the result is assigned to dobj2. The data objects dobj1 and dobj2 must be numeric. Only data objects can be specified, no calls or other expressions. The [calculation type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencalculation_type_glosry.htm "Glossary Entry") is determined like an [arithmetic expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcompute_arith.htm).

Hint

The statement shown here has been replaced by [calculation assignments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencalculation_assignment_glosry.htm "Glossary Entry") with the operator [+=](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencalculation_assignments.htm) in which the operands can also be specified as expressions.

Example

The variable result\_old has the value 10 after the calculation statements. The syntax for the [calculation assignment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencalculation_assignments.htm) with the same meaning is also shown.

DATA result\_old TYPE i.
DO 10 TIMES.
  ADD 1 TO result\_old.
ENDDO.
DATA(result\_new) = 0.
DO 10 TIMES.
  result\_new += 1.
ENDDO.
ASSERT result\_old = result\_new.

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

Uncatchable Exceptions
Runtime error: ADD\_FIELDS\_ILLEGAL\_ACCESS

-   Cause: p field does not contain the correct BCD format
    Runtime error: BCD\_BADDATA