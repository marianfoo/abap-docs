  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Calculation Statements](javascript:call_link\('abencomputing_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SUBTRACT%2C%20MULTIPLY%2C%20DIVIDE%2C%20ABAPSUBTRACT_MULTIPLY_DIVIDE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SUBTRACT, MULTIPLY, DIVIDE

Obsolete Syntax

SUBTRACT dobj1 FROM dobj2.
MULTIPLY dobj2 BY   dobj1.
DIVIDE   dobj2 BY   dobj1.

Effect

These statements have the same effect as the statements

[dobj2 -= dobj1.](javascript:call_link\('abencalculation_assignments.htm'\))

[dobj2 \*= dobj1.](javascript:call_link\('abencalculation_assignments.htm'\))

[dobj2 /= dobj1.](javascript:call_link\('abencalculation_assignments.htm'\))

that are the same as

[dobj2 = dobj2 - dobj1.](javascript:call_link\('abenequals_arith_expr.htm'\))
[dobj2 = dobj2 \* dobj1.](javascript:call_link\('abenequals_arith_expr.htm'\))
[dobj2 = dobj2 / dobj1.](javascript:call_link\('abenequals_arith_expr.htm'\))

The content of dobj2

-   has the content of dobj1 subtracted,
-   or is multiplied by the content of dobj1,
-   or is divided by the content of dobj1,

and the result is assigned to dobj2. The data objects dobj1 and dobj2 must be numeric. Only data objects can be specified and no calls or other expressions. The [calculation type](javascript:call_link\('abencalculation_type_glosry.htm'\) "Glossary Entry") is determined as for an [arithmetic expression](javascript:call_link\('abapcompute_arith.htm'\)).

Division by the value 0 is undefined and raises a catchable exception. The only situation where division by 0 does not raise an exception is if the dividend is also 0. Here, the result is set to 0.

Hint

The statements shown here have been fully replaced by [calculation assignments](javascript:call_link\('abencalculation_assignment_glosry.htm'\) "Glossary Entry") with the operators [\-=](javascript:call_link\('abencalculation_assignments.htm'\)), [\*=](javascript:call_link\('abencalculation_assignments.htm'\)), and [/=](javascript:call_link\('abencalculation_assignments.htm'\)) in which the operands can also be specified as expressions.

Example

The variables n1 and n2 both have the value 1.50 after the calculation statements. The calculations are done with the obsolete calculation statements and with the corresponding [calculation assignments](javascript:call_link\('abencalculation_assignments.htm'\)).

DATA n1 TYPE p DECIMALS 2.
ADD 1 TO n1.
ADD 1 TO n1.
ADD 1 TO n1.
ADD 1 TO n1.
SUBTRACT 2 FROM n1.
MULTIPLY n1 BY 3.
DIVIDE n1 BY 4.
DATA n2 TYPE p DECIMALS 2.
n2 += 1.
n2 += 1.
n2 += 1.
n2 += 1.
n2 -= 2.
n2 \*= 3.
n2 /= 4.
ASSERT n1 = n2.

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