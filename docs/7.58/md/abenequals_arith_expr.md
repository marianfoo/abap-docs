---
title: "Syntax"
description: |
  result = arith_exp(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcompute_arith.htm). Effect If an arithmetic expression(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarithmetic_expression_glosry.htm 'Glossary Entry') arith_exp(https://help.sap.com/doc/abapdo
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenequals_arith_expr.htm"
abapFile: "abenequals_arith_expr.htm"
keywords: ["do", "if", "case", "try", "catch", "data", "types", "field-symbol", "abenequals", "arith", "expr"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalue_assignments.htm) →  [\=, Assignment Operator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenequals_operator.htm) →  [\=, Assign Calculation Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenequals_calc_expr.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20%3D%2C%20Arithmetic%20Expression%2C%20ABENEQUALS_ARITH_EXPR%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

\=, Arithmetic Expression

Syntax

result = [arith\_exp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcompute_arith.htm).

Effect

If an [arithmetic expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") [arith\_exp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcompute_arith.htm) is specified on the right side of the [assignment operator \=](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenequals_operator.htm), its [calculation type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencalculation_type_glosry.htm "Glossary Entry") is calculated and assigned to the left side result.

The following can be specified for result:

-   A [variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvariable_glosry.htm "Glossary Entry") that is compatible with the numeric result of the arithmetic expression or to whose type the result can be converted.
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_inline.htm) or [FINAL(var)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfinal_inline.htm). The data type of the declared variable var is the statically known [calculation type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencalculation_type_glosry.htm "Glossary Entry"), where generically typed field symbols and formal parameters contribute with a [standard type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstandard_type_glosry.htm "Glossary Entry") [described here](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarith_type.htm). In the case of the calculation type p, the data type of the declared variable is always p with the length 8 without decimal places. Furthermore, if [decimal floating point numbers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendecfloat_glosry.htm "Glossary Entry") of type DECFLOAT16 are involved but no numbers of type DECFLOAT34, the data type of the declared variable is not the calculation type DECFLOAT34 but DECFLOAT16.

If an existing variable is specified for result, its data type is included in the determination of the [calculation type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarith_type.htm). If the calculation type is not the data type of result, the result is converted to the data type of the result field before the assignment is made.

Hints

-   The fact that the result field is respected when the calculation type is determined is a special property of ABAP that should always be kept in mind.
-   The calculation type that is dependent on the data type of the result field is an important difference from an [assignment of data objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmove.htm). If data objects are incompatible, the source field is always converted to the data type of the target field. When arithmetic expressions are assigned, their operands can also be converted to the data type of the result field before the calculation.
-   The fact that a [calculation type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencalculation_type_glosry.htm "Glossary Entry") p on the right side of an inline declaration produces the data type p with length 8 and no decimal places can lead to unexpected results and raise exceptions. It is best to either avoid inline declarations when using the calculation type p or to determine the data type by applying the conversion operator [CONV](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_conv.htm) to the arithmetic expression.
-   See also [calculation assignments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencalculation_assignment_glosry.htm "Glossary Entry") with the operators [+=](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencalculation_assignments.htm), [\-=](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencalculation_assignments.htm), [\*=](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencalculation_assignments.htm) and [/=](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencalculation_assignments.htm).

Example

The first assignment is an assignment of an arithmetic expression, because of the leading plus/minus sign. The [calculation type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarith_type.htm) is determined as i and result is given the value 731036, the number of days since 01.01.0001. The second assignment, on the other hand, has the same meaning as an [assignment of data objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmove.htm) and produces the value 20020704 in result.

DATA: result TYPE string,
      date   TYPE d VALUE '20020704'.
result = + date.
result =   date.

Example

This example demonstrates inline declarations with the calculation type p. Assignments of a data object use its data type, but assignments of an arithmetic expression with the calculation type p, the data type p with length 8 and without decimal places is used. This means that decimal places are lost in the first assignment and that the second assignment produces and overflow and its corresponding exception. The conversion operator CONV can be used to avoid these problems.

TYPES pack8\_3  TYPE p LENGTH 8  DECIMALS 3.
TYPES pack16   TYPE p LENGTH 16 DECIMALS 0.
DATA  number1  TYPE pack8\_3 VALUE '12345.6789'.
DATA  number2  TYPE pack16 VALUE  '12345678901234567890'.
FINAL(result1) = number1.                    "p, length 8, decimals 3
FINAL(result2) = number2.                    "p, length 16
TRY.
    FINAL(result3) = 1 \* number1 ##type.     "p, length 8, decimals 0
    FINAL(result4) = 1 \* number2 ##type.     "p, length 8 ->exception
  CATCH cx\_sy\_arithmetic\_overflow.
ENDTRY.
FINAL(result5) = CONV pack8\_3( 1 \* number1 ). "p, length 8, decimals 3
FINAL(result6) = CONV pack16(  1 \* number2 ). "p, length 16