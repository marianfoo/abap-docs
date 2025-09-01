  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Calculation Statements](javascript:call_link\('abencomputing_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ADD%2C%20ABAPADD%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ADD

[Short Reference](javascript:call_link\('abapadd_shortref.htm'\))

Obsolete Syntax

ADD dobj1 TO dobj2.

Effect

This statement has the same effect as the statement

[dobj2 += dobj1.](javascript:call_link\('abencalculation_assignments.htm'\))

that is the same as

[dobj2 = dobj2 + dobj1.](javascript:call_link\('abenequals_arith_expr.htm'\))

The content of dobj1 is added to the content of dobj2 and the result is assigned to dobj2. The data objects dobj1 and dobj2 must be numeric. Only data objects can be specified, no calls or other expressions. The [calculation type](javascript:call_link\('abencalculation_type_glosry.htm'\) "Glossary Entry") is determined as for an [arithmetic expression](javascript:call_link\('abapcompute_arith.htm'\)).

Hint

The statement ADD has been fully replaced by the [calculation assignment](javascript:call_link\('abencalculation_assignment_glosry.htm'\) "Glossary Entry") with the operator [+=](javascript:call_link\('abencalculation_assignments.htm'\)) in which the operands can also be specified as expressions.

Example

The variable result\_old has the value 10 after the calculation statements. The syntax for the [calculation assignment](javascript:call_link\('abencalculation_assignments.htm'\)) with the same effect is also shown.

DATA result\_old TYPE i.
DO 10 TIMES.
  ADD 1 TO result\_old.
ENDDO.
DATA(result\_new) = 0.
DO 10 TIMES.
  result\_new += 1.
ENDDO.
ASSERT result\_old = result\_new.

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

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