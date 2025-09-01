  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Calculation Statements](javascript:call_link\('abencomputing_obsolete.htm'\)) → 

DIVIDE-CORRESPONDING

[Quick Reference](javascript:call_link\('abapdivide-corresponding_shortref.htm'\))

Obsolete Syntax

DIVIDE-CORRESPONDING struc1 BY struc2.

Effect

This statement is not allowed in classes and divides structures by component. Structures must be specified for struc1 and struc2. For all components of the same name in struc1 and struc2, the components of struc1 are divided by the components in struc2 in pairs, and the result is assigned to the relevant component in struc1.

The names are compared, as in the statement [MOVE-CORRESPONDING](javascript:call_link\('abapmove-corresponding.htm'\)). For each component pair with the same name comp, the statement

[DIVIDE](javascript:call_link\('abapdivide.htm'\)) struc1-comp BY struc2-comp.

is executed, and the appropriate conversions are performed, if necessary.

In complex structures, the names of the field pairs in question have to be completely identical at all hierarchical levels.

Note

This statement is error-prone because, particularly in complex structures, it is not easy to check that components of the same name have the data type and content necessary for a numeric operation.

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