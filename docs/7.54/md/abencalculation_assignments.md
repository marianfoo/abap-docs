  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencompute_expressions.htm) → 

+=, \-=, \*=, /= - Calculation Assignments

Syntax

lhs +=
  *|* -=
  *|* \*=
  *|* /= rhs.

Effect

[Calculation assignment](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencalculation_assignment_glosry.htm "Glossary Entry") with the

-   addition assignment operator +=

-   subtraction assignment operator \-=

-   multiplication assignment operator \*=

-   division assignment operator /=

These assignments have the same function as the following [assignments of arithmetic expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenequals_arith_expr.htm):

lhs = [lhs + ( rhs )](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcompute_arith.htm).
lhs = [lhs - ( rhs )](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcompute_arith.htm).
lhs = [lhs \* ( rhs )](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcompute_arith.htm).
lhs = [lhs / ( rhs )](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcompute_arith.htm).

The content of lhs

-   has the result of the parenthesized expression rhs added to it,
    
-   or has the result of the parenthesized expression rhs subtracted from it,
    
-   or is multiplied by the result of the parenthesized expression rhs,
    
-   or is divided by the result of the parenthesized expression rhs,
    

and the result is assigned to lhs. The [calculation type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencalculation_type_glosry.htm "Glossary Entry") is [determined](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenarith_type.htm) accordingly.

The following applies to the operands lhs and rhs:

-   lhs is a [result position](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenresult_position_glosry.htm "Glossary Entry") and the following can be specified (if numeric):
    

-   [Variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvariable_glosry.htm "Glossary Entry")

-   [Writable expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwritable_expression_glosry.htm "Glossary Entry")

-   rhs is a [numeric expression position](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry") and the following can be specified (if numeric):
    

-   [Data objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennumeric_data_object_glosry.htm "Glossary Entry")

-   [Constructor expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_glosry.htm "Glossary Entry")

-   [Arithmetic expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry")

-   [Table expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_expression_glosry.htm "Glossary Entry")

-   [Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction_glosry.htm "Glossary Entry")

Type inference with the character # is not currently possible in constructor expressions. [Character-like expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencharlike_expression_glosry.htm "Glossary Entry") and [bit expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbit_expression_glosry.htm "Glossary Entry") cannot be specified.

Division by the value 0 is undefined and raises a handleable exception. The only situation where division by 0 does not raise an exception is if the dividend is also 0. Here, the result is set to 0.

Notes

-   Alongside data objects, calculation assignments also allow expressions in the operand positions. This makes them more powerful than the statements [ADD](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapadd.htm), [SUBTRACT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubtract_multiply_divide.htm), [MULTIPLY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubtract_multiply_divide.htm), [DIVIDE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubtract_multiply_divide.htm), and also makes these statements obsolete.
    
-   No [inline declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_inline.htm) are possible for lhs.
    
-   Calculation assignments can currently only be specified as standalone statements. They cannot be used in expressions, for example after NEXT in reduction operator [REDUCE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_reduce.htm).
    
-   See also the [concatenation assignment operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconcat_assignment_op_glosry.htm "Glossary Entry") ([&&=](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencalculation_assignment_string.htm)).
    

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