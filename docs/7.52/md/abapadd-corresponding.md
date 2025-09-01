  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_internal_obsolete.htm) →  [Obsolete Calculation Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencomputing_obsolete.htm) → 

ADD-CORRESPONDING

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapadd-corresponding_shortref.htm)

Obsolete Syntax

ADD-CORRESPONDING struc1 TO struc2.

Effect

This statement, which is not allowed in classes, adds structures by component. Structures must be specified for struc1 and struc2. All components of the same name in struc1 and struct2 are added in pairs and the result is assigned to the respective component of struct2.

The names are compared, as in the statement [MOVE-CORRESPONDING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmove-corresponding.htm). For each component pair with the same name comp, the statement

[ADD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapadd.htm) struc1-comp TO struc2-comp.

is executed, and the appropriate conversions are performed, if necessary.

Note

This statement is error-prone because, particularly in complex structures, it is not easy to check that components of the same name have the data type and content necessary for a numeric operation.

Example

The components x and y exist in both structures and are added. After the addition, the results are in struc2-x and struc2-y.

DATA: BEGIN OF struc1,
        x       TYPE i,
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

[Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_exceptions.htm)

Handleable Exceptions

CX\_SY\_ARITHMETIC\_OVERFLOW

-   Cause: Overflow while adding, type I in additions UNTIL or FROM ... TO
    Runtime error: ADDF\_INT\_OVERFLOW
    
-   Cause: Overflow in arithmetic operation (type p)
    Runtime error: BCD\_OVERFLOW
    
-   Cause: Integer overflow while adding
    Runtime error: COMPUTE\_INT\_PLUS\_OVERFLOW
    

CX\_SY\_CONVERSION\_OVERFLOW

-   Cause: Overflow in arithmetic operation (type p, with specified length)
    Runtime error: BCD\_FIELD\_OVERFLOW
    

Non-Handleable Exceptions

-   Cause: Access to data outside of the range specified in the RANGE addition
    Runtime error: ADD\_FIELDS\_NOT\_IN\_RANGE
    
-   Cause: Invalid access to tables, strings, field references, or object references within the range specified by the addition RANGE.
    Runtime error: ADD\_FIELDS\_ILLEGAL\_ACCESS
    
-   Cause: p field does not contain the correct BCD format
    Runtime error: BCD\_BADDATA