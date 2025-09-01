---
title: "SUBTRACT"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubtract_shortref.htm) Syntax SUBTRACT dobj1 FROM dobj2. Effect This statement has the same effect as the statement dobj2 = dobj2 - dobj1.(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_arith_ex
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubtract.htm"
abapFile: "abapsubtract.htm"
keywords: ["do", "if", "try", "data", "abapsubtract"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencompute_expressions.htm) →  [Statements for Numeric Calculations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennum_processing_statements.htm) → 

SUBTRACT

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubtract_shortref.htm)

Syntax

SUBTRACT dobj1 FROM dobj2.

Effect

This statement has the same effect as the statement

[dobj2 = dobj2 - dobj1.](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_arith_expr.htm)

The content of dobj1 is subtracted from the content of dobj2 and the result is assigned to dobj2. The data objects dobj1 and dobj2 have to be numeric. Only data objects can be specified, no calls or other expressions. The [calculation type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencalculation_type_glosry.htm "Glossary Entry") is determined like an [arithmetic expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcompute_arith.htm).

Programming Guideline

[Use the operator format](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencalc_expresssion_guidl.htm "Guideline")

Note

One obsolete form of the statement SUBTRACT is [SUBTRACT-CORRESPONDING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubtract-corresponding.htm).

Example

Subtraction of the offset of a runtime measurement.

GET RUN TIME FIELD DATA(t1).
...
GET RUN TIME FIELD DATA(t2).
SUBTRACT t1 FROM t2.

[Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_exceptions.htm)

Handleable Exceptions

CX\_SY\_ARITHMETIC\_OVERFLOW

-   Cause: Overflow in conversion/arithmetic operation (type p)
    Runtime error: BCD\_OVERFLOW
    
-   Cause: Integer overflow after subtraction
    Runtime error: COMPUTE\_INT\_MINUS\_OVERFLOW
    

CX\_SY\_CONVERSION\_OVERFLOW

-   Cause: Overflow in conversion/arithmetic operation (type p, with specified length)
    Runtime error: BCD\_FIELD\_OVERFLOW
    

Non-Handleable Exceptions

-   Cause: p field does not contain the correct BCD format
    Runtime error: BCD\_BADDATA