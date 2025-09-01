  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Numeric Calculations](javascript:call_link\('abencompute_expressions.htm'\)) →  [Statements for Numeric Calculations](javascript:call_link\('abennum_processing_statements.htm'\)) → 

DIVIDE

[Quick Reference](javascript:call_link\('abapdivide_shortref.htm'\))

Syntax

DIVIDE dobj1 BY dobj2.

Effect

This statement has the same effect as the statement

[dobj1 = dobj1 / dobj2.](javascript:call_link\('abenequals_arith_expr.htm'\))

The content of dobj1 is divided by the content of dobj2 and the result is assigned to dobj1. The data objects dobj1 and dobj2 have to be numeric. Only data objects can be specified, no calls or other expressions. The [calculation type](javascript:call_link\('abencalculation_type_glosry.htm'\) "Glossary Entry") is determined like an [arithmetic expression](javascript:call_link\('abapcompute_arith.htm'\)).

Programming Guidelines

-   [Preventing Division by Zero](javascript:call_link\('abendivision_zero_guidl.htm'\) "Guideline")
    
-   [Use the operator format](javascript:call_link\('abencalc_expresssion_guidl.htm'\) "Guideline")
    

Notes

-   Division by the value 0 is undefined and raises a handleable exception. The only situation where division by 0 does not raise an exception is if the dividend is also 0. Here, the result is set to 0.
    
-   One obsolete form of the statement DIVIDE is [DIVIDE-CORRESPONDING](javascript:call_link\('abapdivide-corresponding.htm'\)).
    

Example

Division of a percentage by 100.

DATA percentage TYPE p DECIMALS 2.
percentage = '85'.
DIVIDE percentage BY 100.

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Handleable Exceptions

CX\_SY\_ARITHMETIC\_OVERFLOW

-   Cause: Overflow in arithmetic operation (type p)
    Runtime error: BCD\_OVERFLOW
    
-   Cause: Integer overflow in division
    Runtime error: COMPUTE\_INT\_DIV\_OVERFLOW
    

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
    

Non-Handleable Exceptions

-   Cause: p field does not contain the correct BCD format
    Runtime error: BCD\_BADDATA