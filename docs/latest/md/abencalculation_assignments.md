---
title: "Syntax"
description: |
  lhs +=  -=  =  /= rhs. Effect Calculation assignment(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencalculation_assignment_glosry.htm 'Glossary Entry') with one of the following calculation assignment operators(https://help.sap.com/doc/abapdocu_latest_index_htm/la
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencalculation_assignments.htm"
abapFile: "abencalculation_assignments.htm"
keywords: ["do", "if", "try", "catch", "data", "abencalculation", "assignments"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencompute_expressions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20%2B%3D%2C%20-%3D%2C%20%2A%3D%2C%20%2F%3D%2C%20Calculation%20Assignments%2C%20ABENCALCULATION_ASSIGNMENTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASu
ggestion%20for%20improvement:)

+=, -=, \*=, /=, Calculation Assignments

Syntax

lhs +=
  *|* -=
  *|* \*=
  *|* /= rhs.

Effect

[Calculation assignment](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencalculation_assignment_glosry.htm "Glossary Entry") with one of the following [calculation assignment operators](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencalc_assignment_op_glosry.htm "Glossary Entry"):

-   addition assignment operator +=
-   subtraction assignment operator \-=
-   multiplication assignment operator \*=
-   division assignment operator /=

These assignments have the same effect as the following [assignments of arithmetic expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenequals_arith_expr.htm):

lhs = [lhs + ( rhs )](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcompute_arith.htm).
lhs = [lhs - ( rhs )](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcompute_arith.htm).
lhs = [lhs \* ( rhs )](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcompute_arith.htm).
lhs = [lhs / ( rhs )](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcompute_arith.htm).

The content of lhs

-   gets the result of the parenthesized expression rhs added to it,
-   or has the result of the parenthesized expression rhs subtracted from it,
-   or is multiplied by the result of the parenthesized expression rhs,
-   or is divided by the result of the parenthesized expression rhs,

and the result is assigned to lhs. The [calculation type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencalculation_type_glosry.htm "Glossary Entry") is [determined](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarith_type.htm) accordingly.

The following applies to the operands lhs and rhs:

-   lhs is a [result position](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenresult_position_glosry.htm "Glossary Entry") and numeric:
    -   [Variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvariable_glosry.htm "Glossary Entry") and
    -   [Writable expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwritable_expression_glosry.htm "Glossary Entry")
-   can be specified.
-   rhs is a [numeric expression position](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry") and numeric:
    -   [Data objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennumeric_data_object_glosry.htm "Glossary Entry")
    -   [Constructor expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_glosry.htm "Glossary Entry")
    -   [Arithmetic expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry")
    -   [Table expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_expression_glosry.htm "Glossary Entry")
    -   [Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction_glosry.htm "Glossary Entry")
-   can be specified.
    
    Type inference with the character # is not currently possible in constructor expressions. [Character-like expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencharlike_expression_glosry.htm "Glossary Entry") and [bit expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbit_expression_glosry.htm "Glossary Entry") cannot be specified.
    

Division by the value 0 is undefined and raises a catchable exception. The only situation where division by 0 does not raise an exception is if the dividend is also 0. Here, the result is set to 0.

Hints

-   Apart from data objects, calculation assignments also allow expressions in the operand positions. This makes them more powerful than the statements [ADD](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapadd.htm), [SUBTRACT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsubtract_multiply_divide.htm), [MULTIPLY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsubtract_multiply_divide.htm), [DIVIDE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsubtract_multiply_divide.htm), and also makes them obsolete.
-   No [inline declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninline_declaration_glosry.htm "Glossary Entry") are possible for lhs.
-   Calculation assignments can currently only be specified as standalone statements. They are not possible in other expressions, such as after NEXT in the reduction operator [REDUCE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_reduce.htm).
-   See also the [concatenation assignment operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconcat_assignment_op_glosry.htm "Glossary Entry") ([&&=](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencalculation_assignment_string.htm)).

Example

The variable n has the value 1.50 after the calculation assignments.

DATA n TYPE p DECIMALS 2.
n += 1.
n += 1.
n += 1.
n += 1.
n -= 2.
n \*= 3.
n /= 4.