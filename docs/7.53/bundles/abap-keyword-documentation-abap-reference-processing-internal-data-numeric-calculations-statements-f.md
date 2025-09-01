# ABAP Keyword Documentation / ABAP − Reference / Processing Internal Data / Numeric Calculations / Statements for Numeric Calculations

Included pages: 5


### abennum_processing_statements.htm

---
title: "Statements for Numeric Calculations"
description: |
  Alongside arithmetic expressions(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarithmetic_expression_glosry.htm 'Glossary Entry'), four special statements are provided for performing the basic arithmetic operations addition, subtraction, multiplication, and division: -   ADD(htt
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennum_processing_statements.htm"
abapFile: "abennum_processing_statements.htm"
keywords: ["do", "try", "data", "abennum", "processing", "statements"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencompute_expressions.htm) → 

Statements for Numeric Calculations

Alongside [arithmetic expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry"), four special statements are provided for performing the basic arithmetic operations addition, subtraction, multiplication, and division:

-   [ADD](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapadd.htm)

-   [SUBTRACT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsubtract.htm)

-   [MULTIPLY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmultiply.htm)

-   [DIVIDE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdivide.htm)

Programming Guideline

[Use the operator format](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencalc_expresssion_guidl.htm "Guideline")

Note

As well as the statements shown here, a range of [obsolete calculation statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencomputing_obsolete.htm) exists.

Continue
[ADD](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapadd.htm)
[SUBTRACT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsubtract.htm)
[MULTIPLY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmultiply.htm)
[DIVIDE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdivide.htm)


### abapadd.htm

---
title: "ADD"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapadd_shortref.htm) Syntax ADD dobj1 TO dobj2. Effect This statement has the same effect as the statement dobj2 = dobj2 + dobj1.(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenequals_arith_expr.htm) The
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapadd.htm"
abapFile: "abapadd.htm"
keywords: ["do", "while", "if", "try", "data", "abapadd"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencompute_expressions.htm) →  [Statements for Numeric Calculations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennum_processing_statements.htm) → 

ADD

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapadd_shortref.htm)

Syntax

ADD dobj1 TO dobj2.

Effect

This statement has the same effect as the statement

[dobj2 = dobj2 + dobj1.](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenequals_arith_expr.htm)

The content of dobj1 is added to the content of dobj2 and the result is assigned to dobj2. The data objects dobj1 and dobj2 have to be numeric. Only data objects can be specified, no calls or other expressions. The [calculation type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencalculation_type_glosry.htm "Glossary Entry") is determined like an [arithmetic expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_arith.htm).

Programming Guideline

[Use the operator format](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencalc_expresssion_guidl.htm "Guideline")

Note

Obsolete forms of the statement ADD are [ADD...THEN...UNTIL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapadd_sequences.htm) and [ADD-CORRESPONDING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapadd-corresponding.htm).

Example

After adding, the result contains the character string "\_\_\_\_\_\_\_\_\_1". The calculation type is decfloat34. The content of the character-like field result is converted to decfloat34 before the operation and back to c after the operation.

DATA: operand TYPE decfloat16 VALUE 1,
      result  TYPE c LENGTH 10.
ADD operand TO result.

[Exceptions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_exceptions.htm)

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


### abapsubtract.htm

---
title: "SUBTRACT"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsubtract_shortref.htm) Syntax SUBTRACT dobj1 FROM dobj2. Effect This statement has the same effect as the statement dobj2 = dobj2 - dobj1.(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenequals_arith_ex
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsubtract.htm"
abapFile: "abapsubtract.htm"
keywords: ["do", "if", "try", "data", "abapsubtract"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencompute_expressions.htm) →  [Statements for Numeric Calculations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennum_processing_statements.htm) → 

SUBTRACT

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsubtract_shortref.htm)

Syntax

SUBTRACT dobj1 FROM dobj2.

Effect

This statement has the same effect as the statement

[dobj2 = dobj2 - dobj1.](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenequals_arith_expr.htm)

The content of dobj1 is subtracted from the content of dobj2 and the result is assigned to dobj2. The data objects dobj1 and dobj2 have to be numeric. Only data objects can be specified, no calls or other expressions. The [calculation type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencalculation_type_glosry.htm "Glossary Entry") is determined like an [arithmetic expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_arith.htm).

Programming Guideline

[Use the operator format](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencalc_expresssion_guidl.htm "Guideline")

Note

One obsolete form of the statement SUBTRACT is [SUBTRACT-CORRESPONDING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsubtract-corresponding.htm).

Example

Subtraction of the offset of a runtime measurement.

GET RUN TIME FIELD DATA(t1).
...
GET RUN TIME FIELD DATA(t2).
SUBTRACT t1 FROM t2.

[Exceptions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_exceptions.htm)

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


### abapmultiply.htm

---
title: "MULTIPLY"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmultiply_shortref.htm) Syntax MULTIPLY dobj1 BY dobj2. Effect This statement has the same effect as the statement dobj1 = dobj1  dobj2.(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenequals_arith_exp
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmultiply.htm"
abapFile: "abapmultiply.htm"
keywords: ["do", "if", "try", "data", "abapmultiply"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencompute_expressions.htm) →  [Statements for Numeric Calculations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennum_processing_statements.htm) → 

MULTIPLY

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmultiply_shortref.htm)

Syntax

MULTIPLY dobj1 BY dobj2.

Effect

This statement has the same effect as the statement

[dobj1 = dobj1 \* dobj2.](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenequals_arith_expr.htm)

The content of dobj1 is multiplied by the content of dobj2 and the result is assigned to dobj1. The data objects dobj1 and dobj2 have to be numeric. Only data objects can be specified, no calls or other expressions. The [calculation type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencalculation_type_glosry.htm "Glossary Entry") is determined like an [arithmetic expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_arith.htm).

Programming Guideline

[Use the operator format](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencalc_expresssion_guidl.htm "Guideline")

Note

One obsolete form of the statement MULTIPLY is [MULTIPLY-CORRESPONDING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenequals_arith_expr.htm).

Example

Multiplication of a percentage by 100.

DATA percentage TYPE p DECIMALS 2.
percentage = '0.85'.
MULTIPLY percentage BY 100.

[Exceptions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_exceptions.htm)

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


### abapdivide.htm

---
title: "DIVIDE"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdivide_shortref.htm) Syntax DIVIDE dobj1 BY dobj2. Effect This statement has the same effect as the statement dobj1 = dobj1 / dobj2.(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenequals_arith_expr.htm
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdivide.htm"
abapFile: "abapdivide.htm"
keywords: ["do", "if", "try", "data", "abapdivide"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencompute_expressions.htm) →  [Statements for Numeric Calculations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennum_processing_statements.htm) → 

DIVIDE

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdivide_shortref.htm)

Syntax

DIVIDE dobj1 BY dobj2.

Effect

This statement has the same effect as the statement

[dobj1 = dobj1 / dobj2.](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenequals_arith_expr.htm)

The content of dobj1 is divided by the content of dobj2 and the result is assigned to dobj1. The data objects dobj1 and dobj2 have to be numeric. Only data objects can be specified, no calls or other expressions. The [calculation type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencalculation_type_glosry.htm "Glossary Entry") is determined like an [arithmetic expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_arith.htm).

Programming Guidelines

-   [Preventing Division by Zero](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendivision_zero_guidl.htm "Guideline")
    
-   [Use the operator format](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencalc_expresssion_guidl.htm "Guideline")
    

Notes

-   Division by the value 0 is undefined and raises a handleable exception. The only situation where division by 0 does not raise an exception is if the dividend is also 0. Here, the result is set to 0.
    
-   One obsolete form of the statement DIVIDE is [DIVIDE-CORRESPONDING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdivide-corresponding.htm).
    

Example

Division of a percentage by 100.

DATA percentage TYPE p DECIMALS 2.
percentage = '85'.
DIVIDE percentage BY 100.

[Exceptions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_exceptions.htm)

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
