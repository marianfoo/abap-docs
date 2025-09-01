  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Numeric Calculations](javascript:call_link\('abencompute_expressions.htm'\)) →  [Statements for Numeric Calculations](javascript:call_link\('abennum_processing_statements.htm'\)) → 

MULTIPLY

[Quick Reference](javascript:call_link\('abapmultiply_shortref.htm'\))

Syntax

MULTIPLY dobj1 BY dobj2.

Effect

This statement has the same effect as the statement

[dobj1 = dobj1 \* dobj2.](javascript:call_link\('abenequals_arith_expr.htm'\))

The content of dobj1 is multiplied by the content of dobj2 and the result is assigned to dobj1. The data objects dobj1 and dobj2 have to be numeric. Only data objects can be specified, no calls or other expressions. The [calculation type](javascript:call_link\('abencalculation_type_glosry.htm'\) "Glossary Entry") is determined like an [arithmetic expression](javascript:call_link\('abapcompute_arith.htm'\)).

Programming Guideline

[Use the operator format](javascript:call_link\('abencalc_expresssion_guidl.htm'\) "Guideline")

Note

One obsolete form of the statement MULTIPLY is [MULTIPLY-CORRESPONDING](javascript:call_link\('abenequals_arith_expr.htm'\)).

Example

Multiplication of a percentage by 100.

DATA percentage TYPE p DECIMALS 2.
percentage = '0.85'.
MULTIPLY percentage BY 100.

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Handleable Exceptions

CX\_SY\_ARITHMETIC\_OVERFLOW

-   Cause: Overflow in conversion/arithmetic operation (type p)
    Runtime error: BCD\_OVERFLOW
    
-   Cause: Integer overflow in multiplication
    Runtime error: COMPUTE\_INT\_TIMES\_OVERFLOW
    

CX\_SY\_CONVERSION\_OVERFLOW

-   Cause: Overflow in conversion/arithmetic operation (type p with specified length)
    Runtime error: BCD\_FIELD\_OVERFLOW
    

Non-Handleable Exceptions

-   Cause: p field does not contain the correct BCD format
    Runtime error: BCD\_BADDATA