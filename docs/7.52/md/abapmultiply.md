---
title: "MULTIPLY"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmultiply_shortref.htm) Syntax MULTIPLY dobj1 BY dobj2. Effect This statement has the same effect as the statement dobj1 = dobj1  dobj2.(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_arith_exp
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmultiply.htm"
abapFile: "abapmultiply.htm"
keywords: ["do", "if", "try", "data", "abapmultiply"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencompute_expressions.htm) →  [Statements for Numeric Calculations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennum_processing_statements.htm) → 

MULTIPLY

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmultiply_shortref.htm)

Syntax

MULTIPLY dobj1 BY dobj2.

Effect

This statement has the same effect as the statement

[dobj1 = dobj1 \* dobj2.](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_arith_expr.htm)

The content of dobj1 is multiplied by the content of dobj2 and the result is assigned to dobj1. The data objects dobj1 and dobj2 have to be numeric. Only data objects can be specified, no calls or other expressions. The [calculation type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencalculation_type_glosry.htm "Glossary Entry") is determined like an [arithmetic expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcompute_arith.htm).

Programming Guideline

[Use the operator format](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencalc_expresssion_guidl.htm "Guideline")

Note

One obsolete form of the statement MULTIPLY is [MULTIPLY-CORRESPONDING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_arith_expr.htm).

Example

Multiplication of a percentage by 100.

DATA percentage TYPE p DECIMALS 2.
percentage = '0.85'.
MULTIPLY percentage BY 100.

[Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_exceptions.htm)

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