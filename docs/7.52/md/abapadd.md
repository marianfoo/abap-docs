  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencompute_expressions.htm) →  [Statements for Numeric Calculations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennum_processing_statements.htm) → 

ADD

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapadd_shortref.htm)

Syntax

ADD dobj1 TO dobj2.

Effect

This statement has the same effect as the statement

[dobj2 = dobj2 + dobj1.](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_arith_expr.htm)

The content of dobj1 is added to the content of dobj2 and the result is assigned to dobj2. The data objects dobj1 and dobj2 have to be numeric. Only data objects can be specified, no calls or other expressions. The [calculation type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencalculation_type_glosry.htm "Glossary Entry") is determined like an [arithmetic expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcompute_arith.htm).

Programming Guideline

[Use the operator format](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencalc_expresssion_guidl.htm "Guideline")

Note

Obsolete forms of the statement ADD are [ADD...THEN...UNTIL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapadd_sequences.htm) and [ADD-CORRESPONDING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapadd-corresponding.htm).

Example

After adding, the result contains the character string "\_\_\_\_\_\_\_\_\_1". The calculation type is decfloat34. The content of the character-like field result is converted to decfloat34 before the operation and back to c after the operation.

DATA: operand TYPE decfloat16 VALUE 1,
      result  TYPE c LENGTH 10.
ADD operand TO result.

[Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_exceptions.htm)

Handleable Exceptions

CX\_SY\_ARITHMETIC\_OVERFLOW

-   Cause: Overflow in arithmetic operation (type p)
    Runtime error: BCD\_OVERFLOW
    
-   Cause: Integer overflow while adding
    Runtime error: COMPUTE\_INT\_PLUS\_OVERFLOW
    

CX\_SY\_CONVERSION\_OVERFLOW

-   Cause: Overflow in arithmetic operation (type p, with specified length)
    Runtime error: BCD\_FIELD\_OVERFLOW
    

Non-Handleable Exceptions
Runtime error: ADD\_FIELDS\_ILLEGAL\_ACCESS

-   Cause: p field does not contain the correct BCD format
    Runtime error: BCD\_BADDATA