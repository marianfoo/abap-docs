  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_assignments.htm) →  [\= - Assignment Operator](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenequals_operator.htm) →  [\= - Assign Calculation Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenequals_calc_expr.htm) → 

\=, Arithmetic Expression

Syntax

result = [arith\_exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_arith.htm).

Effect

If an [arithmetic expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") [arith\_exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_arith.htm) is specified on the right side of the [assignment operator \=](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenequals_operator.htm), its [calculation type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencalculation_type_glosry.htm "Glossary Entry") is calculated and assigned to the left side result.

The following can be specified for result:

-   A [variable](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvariable_glosry.htm "Glossary Entry") compatible with the numeric result of the arithmetic expression or to whose type the result can be converted.
    
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_inline.htm). The data type of the declared variable var is the statically known [calculation type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencalculation_type_glosry.htm "Glossary Entry"), where generically typed field symbols and formal parameters are respected using a [standard type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstandard_type_glosry.htm "Glossary Entry") [described there](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarith_type.htm). In the case of the calculation type p, the data type of the declared variable is always p with the length 8 without decimal places.
    

If an existing variable is specified for result, its data type is respected when determining the [calculation type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarith_type.htm). If the calculation type is not the data type of result, the result is converted to the data type of the result field before the assignment is made.

Notes

-   The fact that the result field is respected when the calculation type is determined is a special property of ABAP that should always be kept in mind.
    
-   The calculation type that is dependent on the data type of the result field is a major different from an [assignment of data objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmove.htm); if data objects are incompatible, the source field is always converted to the data type of the target field. When arithmetic expressions are assigned, their operands can also be converted to the data type of the result field before the calculation.
    
-   A [calculation type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencalculation_type_glosry.htm "Glossary Entry") p on the right side of an inline declaration can produce the data type p with length 8 and no decimal places and this can produce unexpected results and raise exceptions. It is best to either avoid inline declarations when using the calculation type p or to determine the data type by applying the conversion operator [CONV](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_conv.htm) to the arithmetic expression.
    

Example

The first assignment is an assignment of an arithmetic expression, because of its sign. The [calculation type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarith_type.htm) is determined as i and result is given the value "731036", the number of days since 01.01.0001. The second assignment, on the other hand, has the same meaning as an [assignment of data objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmove.htm) and produces the value "20020704" in result.

DATA: result TYPE string,
      date   TYPE d VALUE '20020704'.
result = + date.
result =   date.

Example

This example demonstrates inline declarations with the calculation type p. Assignments of a data object use its data type, but assignments of an arithmetic expression with the calculation type p of the data type p with length 8 and without decimal places. This means that decimal places are lost in the first assignment and that the second assignment produces and overflow and its corresponding exception. The conversion operator CONV can be used to bypass these problems.

TYPES pack8\_3  TYPE p LENGTH 8 DECIMALS 3.
TYPES pack16   TYPE p LENGTH 16.
DATA  number1  TYPE pack8\_3 VALUE '12345.6789'.
DATA  number2  TYPE pack16 VALUE  '12345678901234567890'.
DATA(result1) = number1.                    "p, length 8, decimals 3
DATA(result2) = number2.                    "p, length 16
TRY.
    DATA(result3) = 1 \* number1.            "p, length 8, decimals 0
    DATA(result4) = 1 \* number2.            "p, length 8 ->exception
  CATCH cx\_sy\_arithmetic\_overflow.
ENDTRY.
DATA(result5) = CONV pack8\_3( 1 \* number1 ). "p, length 8, decimals 3
DATA(result6) = CONV pack16(  1 \* number2 ). "p, length 16