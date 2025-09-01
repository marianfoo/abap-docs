---
title: "MULTIPLY-CORRESPONDING"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmultiply-correspond_shortref.htm) Obsolete Syntax MULTIPLY-CORRESPONDING struc1 BY struc2. Effect This statement, which is forbidden in classes, multiplies structures in terms of components. Structures must be specified
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmultiply-corresponding.htm"
abapFile: "abapmultiply-corresponding.htm"
keywords: ["do", "if", "class", "data", "abapmultiply", "corresponding"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_internal_obsolete.htm) →  [Obsolete Calculation Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencomputing_obsolete.htm) → 

MULTIPLY-CORRESPONDING

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmultiply-correspond_shortref.htm)

Obsolete Syntax

MULTIPLY-CORRESPONDING struc1 BY struc2.

Effect

This statement, which is forbidden in classes, multiplies structures in terms of components. Structures must be specified for struc1 and struc2. All components with the same name in struc1 and struc2 are multiplied with each other in pairs and the result is assigned to the appropriate component of struc1.

The names are compared, as in the statement [MOVE-CORRESPONDING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmove-corresponding.htm). For each component pair with the same name comp, the statement

[MULTIPLY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmultiply.htm) struc1-comp BY struc2-comp.

is executed, and the appropriate conversions are performed, if necessary.

Note

This statement is error-prone because, particularly in complex structures, it is not easy to check that components of the same name have the data type and content necessary for a numeric operation.

[Exceptions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_exceptions.htm)

Handleable Exceptions

CX\_SY\_ARITHMETIC\_OVERFLOW

-   Cause: Overflow in conversion/arithmetic operation (T p)
    Runtime error: BCD\_OVERFLOW
    
-   Cause: Integer overflow in multiplication
    Runtime error: COMPUTE\_INT\_TIMES\_OVERFLOW
    

CX\_SY\_CONVERSION\_OVERFLOW

-   Cause: Overflow in conversion/arithmetic operation (T p, with specified length)
    Runtime error: BCD\_FIELD\_OVERFLOW
    

Non-Handleable Exceptions

-   Cause: p field does not contain the correct BCD format
    Runtime error: BCD\_BADDATA