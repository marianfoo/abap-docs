  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Calculation Statements](javascript:call_link\('abencomputing_obsolete.htm'\)) → 

SUBTRACT-CORRESPONDING

[Quick Reference](javascript:call_link\('abapsubtract-correspond_shortref.htm'\))

Obsolete Syntax

SUBTRACT-CORRESPONDING struc1 FROM struc2.

Effect

This statement is not allowed in classes and subtracts structures by component. Structures must be specified for struc1 and struc2. For all identically named components in struc1 and struc2, the component in struc1 is subtracted in pairs from the component in struc2 and the result is assigned to the relevant component of struc2.

The names are compared, as in the statement [MOVE-CORRESPONDING](javascript:call_link\('abapmove-corresponding.htm'\)). For each component pair with the same name comp, the statement

[SUBTRACT](javascript:call_link\('abapsubtract.htm'\)) struc1-comp FROM struc2-comp.

is executed, and the appropriate conversions are performed, if necessary.

Note

This statement is error-prone because, particularly in complex structures, it is not easy to check that components of the same name have the data type and content necessary for a numeric operation.

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Handleable Exceptions

CX\_SY\_ARITHMETIC\_OVERFLOW

-   Cause: Overflow in conversion/arithmetic operation (T p)
    Runtime error: BCD\_OVERFLOW
    
-   Cause: Integer overflow after subtraction
    Runtime error: COMPUTE\_INT\_MINUS\_OVERFLOW
    

CX\_SY\_CONVERSION\_OVERFLOW

-   Cause: Overflow in conversion/arithmetic operation (T p, with specified length)
    Runtime error: BCD\_FIELD\_OVERFLOW
    

Non-Handleable Exceptions

-   Cause: p field does not contain the correct BCD format
    Runtime error: BCD\_BADDATA