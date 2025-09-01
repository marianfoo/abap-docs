---
title: "DIVIDE"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdivide_shortref.htm) Syntax DIVIDE dobj1 BY dobj2. Effect This statement has the same effect as the statement dobj1 = dobj1 / dobj2.(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_arith_expr.htm
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdivide.htm"
abapFile: "abapdivide.htm"
keywords: ["do", "if", "try", "data", "abapdivide"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencompute_expressions.htm) →  [Statements for Numeric Calculations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennum_processing_statements.htm) → 

DIVIDE

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdivide_shortref.htm)

Syntax

DIVIDE dobj1 BY dobj2.

Effect

This statement has the same effect as the statement

[dobj1 = dobj1 / dobj2.](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_arith_expr.htm)

The content of dobj1 is divided by the content of dobj2 and the result is assigned to dobj1. The data objects dobj1 and dobj2 have to be numeric. Only data objects can be specified, no calls or other expressions. The [calculation type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencalculation_type_glosry.htm "Glossary Entry") is determined like an [arithmetic expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcompute_arith.htm).

Programming Guidelines

-   [Preventing Division by Zero](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendivision_zero_guidl.htm "Guideline")
    
-   [Use the operator format](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencalc_expresssion_guidl.htm "Guideline")
    

Notes

-   Division by the value 0 is undefined and raises a handleable exception. The only situation where division by 0 does not raise an exception is if the dividend is also 0. Here, the result is set to 0.
    
-   One obsolete form of the statement DIVIDE is [DIVIDE-CORRESPONDING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdivide-corresponding.htm).
    

Example

Division of a percentage by 100.

DATA percentage TYPE p DECIMALS 2.
percentage = '85'.
DIVIDE percentage BY 100.

[Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_exceptions.htm)

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