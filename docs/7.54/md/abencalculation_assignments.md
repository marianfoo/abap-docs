  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Numeric Calculations](javascript:call_link\('abencompute_expressions.htm'\)) → 

+=, \-=, \*=, /= - Calculation Assignments

Syntax

lhs +=
  *|* -=
  *|* \*=
  *|* /= rhs.

Effect

[Calculation assignment](javascript:call_link\('abencalculation_assignment_glosry.htm'\) "Glossary Entry") with the

-   addition assignment operator +=

-   subtraction assignment operator \-=

-   multiplication assignment operator \*=

-   division assignment operator /=

These assignments have the same function as the following [assignments of arithmetic expressions](javascript:call_link\('abenequals_arith_expr.htm'\)):

lhs = [lhs + ( rhs )](javascript:call_link\('abapcompute_arith.htm'\)).
lhs = [lhs - ( rhs )](javascript:call_link\('abapcompute_arith.htm'\)).
lhs = [lhs \* ( rhs )](javascript:call_link\('abapcompute_arith.htm'\)).
lhs = [lhs / ( rhs )](javascript:call_link\('abapcompute_arith.htm'\)).

The content of lhs

-   has the result of the parenthesized expression rhs added to it,
    
-   or has the result of the parenthesized expression rhs subtracted from it,
    
-   or is multiplied by the result of the parenthesized expression rhs,
    
-   or is divided by the result of the parenthesized expression rhs,
    

and the result is assigned to lhs. The [calculation type](javascript:call_link\('abencalculation_type_glosry.htm'\) "Glossary Entry") is [determined](javascript:call_link\('abenarith_type.htm'\)) accordingly.

The following applies to the operands lhs and rhs:

-   lhs is a [result position](javascript:call_link\('abenresult_position_glosry.htm'\) "Glossary Entry") and the following can be specified (if numeric):
    

-   [Variables](javascript:call_link\('abenvariable_glosry.htm'\) "Glossary Entry")

-   [Writable expressions](javascript:call_link\('abenwritable_expression_glosry.htm'\) "Glossary Entry")

-   rhs is a [numeric expression position](javascript:call_link\('abennumerical_expr_position_glosry.htm'\) "Glossary Entry") and the following can be specified (if numeric):
    

-   [Data objects](javascript:call_link\('abennumeric_data_object_glosry.htm'\) "Glossary Entry")

-   [Constructor expressions](javascript:call_link\('abenconstructor_glosry.htm'\) "Glossary Entry")

-   [Arithmetic expressions](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry")

-   [Table expressions](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry")

-   [Functions](javascript:call_link\('abenfunction_glosry.htm'\) "Glossary Entry")

Type inference with the character # is not currently possible in constructor expressions. [Character-like expressions](javascript:call_link\('abencharlike_expression_glosry.htm'\) "Glossary Entry") and [bit expressions](javascript:call_link\('abenbit_expression_glosry.htm'\) "Glossary Entry") cannot be specified.

Division by the value 0 is undefined and raises a handleable exception. The only situation where division by 0 does not raise an exception is if the dividend is also 0. Here, the result is set to 0.

Notes

-   Alongside data objects, calculation assignments also allow expressions in the operand positions. This makes them more powerful than the statements [ADD](javascript:call_link\('abapadd.htm'\)), [SUBTRACT](javascript:call_link\('abapsubtract_multiply_divide.htm'\)), [MULTIPLY](javascript:call_link\('abapsubtract_multiply_divide.htm'\)), [DIVIDE](javascript:call_link\('abapsubtract_multiply_divide.htm'\)), and also makes these statements obsolete.
    
-   No [inline declarations](javascript:call_link\('abendata_inline.htm'\)) are possible for lhs.
    
-   Calculation assignments can currently only be specified as standalone statements. They cannot be used in expressions, for example after NEXT in reduction operator [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)).
    
-   See also the [concatenation assignment operator](javascript:call_link\('abenconcat_assignment_op_glosry.htm'\) "Glossary Entry") ([&&=](javascript:call_link\('abencalculation_assignment_string.htm'\))).
    

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