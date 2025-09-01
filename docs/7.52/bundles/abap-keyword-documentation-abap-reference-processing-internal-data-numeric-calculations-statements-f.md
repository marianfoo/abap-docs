# ABAP - Keyword Documentation / ABAP - Reference / Processing Internal Data / Numeric Calculations / Statements for Numeric Calculations

Included pages: 5


### abennum_processing_statements.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Numeric Calculations](javascript:call_link\('abencompute_expressions.htm'\)) → 

Statements for Numeric Calculations

Alongside [arithmetic expressions](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry"), four special statements are provided for performing the basic arithmetic operations addition, subtraction, multiplication, and division:

-   [ADD](javascript:call_link\('abapadd.htm'\))

-   [SUBTRACT](javascript:call_link\('abapsubtract.htm'\))

-   [MULTIPLY](javascript:call_link\('abapmultiply.htm'\))

-   [DIVIDE](javascript:call_link\('abapdivide.htm'\))

Programming Guideline

[Use the operator format](javascript:call_link\('abencalc_expresssion_guidl.htm'\) "Guideline")

Note

As well as the statements shown here, a range of [obsolete calculation statements](javascript:call_link\('abencomputing_obsolete.htm'\)) exists.

Continue
[ADD](javascript:call_link\('abapadd.htm'\))
[SUBTRACT](javascript:call_link\('abapsubtract.htm'\))
[MULTIPLY](javascript:call_link\('abapmultiply.htm'\))
[DIVIDE](javascript:call_link\('abapdivide.htm'\))


### abapadd.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Numeric Calculations](javascript:call_link\('abencompute_expressions.htm'\)) →  [Statements for Numeric Calculations](javascript:call_link\('abennum_processing_statements.htm'\)) → 

ADD

[Quick Reference](javascript:call_link\('abapadd_shortref.htm'\))

Syntax

ADD dobj1 TO dobj2.

Effect

This statement has the same effect as the statement

[dobj2 = dobj2 + dobj1.](javascript:call_link\('abenequals_arith_expr.htm'\))

The content of dobj1 is added to the content of dobj2 and the result is assigned to dobj2. The data objects dobj1 and dobj2 have to be numeric. Only data objects can be specified, no calls or other expressions. The [calculation type](javascript:call_link\('abencalculation_type_glosry.htm'\) "Glossary Entry") is determined like an [arithmetic expression](javascript:call_link\('abapcompute_arith.htm'\)).

Programming Guideline

[Use the operator format](javascript:call_link\('abencalc_expresssion_guidl.htm'\) "Guideline")

Note

Obsolete forms of the statement ADD are [ADD...THEN...UNTIL](javascript:call_link\('abapadd_sequences.htm'\)) and [ADD-CORRESPONDING](javascript:call_link\('abapadd-corresponding.htm'\)).

Example

After adding, the result contains the character string "\_\_\_\_\_\_\_\_\_1". The calculation type is decfloat34. The content of the character-like field result is converted to decfloat34 before the operation and back to c after the operation.

DATA: operand TYPE decfloat16 VALUE 1,
      result  TYPE c LENGTH 10.
ADD operand TO result.

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

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

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Numeric Calculations](javascript:call_link\('abencompute_expressions.htm'\)) →  [Statements for Numeric Calculations](javascript:call_link\('abennum_processing_statements.htm'\)) → 

SUBTRACT

[Quick Reference](javascript:call_link\('abapsubtract_shortref.htm'\))

Syntax

SUBTRACT dobj1 FROM dobj2.

Effect

This statement has the same effect as the statement

[dobj2 = dobj2 - dobj1.](javascript:call_link\('abenequals_arith_expr.htm'\))

The content of dobj1 is subtracted from the content of dobj2 and the result is assigned to dobj2. The data objects dobj1 and dobj2 have to be numeric. Only data objects can be specified, no calls or other expressions. The [calculation type](javascript:call_link\('abencalculation_type_glosry.htm'\) "Glossary Entry") is determined like an [arithmetic expression](javascript:call_link\('abapcompute_arith.htm'\)).

Programming Guideline

[Use the operator format](javascript:call_link\('abencalc_expresssion_guidl.htm'\) "Guideline")

Note

One obsolete form of the statement SUBTRACT is [SUBTRACT-CORRESPONDING](javascript:call_link\('abapsubtract-corresponding.htm'\)).

Example

Subtraction of the offset of a runtime measurement.

GET RUN TIME FIELD DATA(t1).
...
GET RUN TIME FIELD DATA(t2).
SUBTRACT t1 FROM t2.

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

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

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Numeric Calculations](javascript:call_link\('abencompute_expressions.htm'\)) →  [Statements for Numeric Calculations](javascript:call_link\('abennum_processing_statements.htm'\)) → 

MULTIPLY

[Quick Reference](javascript:call_link\('abapmultiply_shortref.htm'\))

Syntax

MULTIPLY dobj1 BY dobj2.

Effect

This statement has the same effect as the statement

[dobj1 = dobj1 \* dobj2.](javascript:call_link\('abenequals_arith_expr.htm'\))

The content of dobj1 is multiplied by the content of dobj2 and the result is assigned to dobj1. The data objects dobj1 and dobj2 have to be numeric. Only data objects can be specified, no calls or other expressions. The [calculation type](javascript:call_link\('abencalculation_type_glosry.htm'\) "Glossary Entry") is determined like an [arithmetic expression](javascript:call_link\('abapcompute_arith.htm'\)).

Programming Guideline

[Use the operator format](javascript:call_link\('abencalc_expresssion_guidl.htm'\) "Guideline")

Note

One obsolete form of the statement MULTIPLY is [MULTIPLY-CORRESPONDING](javascript:call_link\('abenequals_arith_expr.htm'\)).

Example

Multiplication of a percentage by 100.

DATA percentage TYPE p DECIMALS 2.
percentage = '0.85'.
MULTIPLY percentage BY 100.

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

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

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Numeric Calculations](javascript:call_link\('abencompute_expressions.htm'\)) →  [Statements for Numeric Calculations](javascript:call_link\('abennum_processing_statements.htm'\)) → 

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
