  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Numeric Calculations](javascript:call_link\('abencompute_expressions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20%2B%3D%2C%20-%3D%2C%20%2A%3D%2C%20%2F%3D%2C%20Calculation%20Assignments%2C%20ABENCALCULATION_ASSIGNMENTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASu
ggestion%20for%20improvement:)

+=, -=, \*=, /=, Calculation Assignments

Syntax

lhs +=
  *|* -=
  *|* \*=
  *|* /= rhs.

Effect

[Calculation assignment](javascript:call_link\('abencalculation_assignment_glosry.htm'\) "Glossary Entry") with one of the following [calculation assignment operators](javascript:call_link\('abencalc_assignment_op_glosry.htm'\) "Glossary Entry"):

-   addition assignment operator +=
-   subtraction assignment operator \-=
-   multiplication assignment operator \*=
-   division assignment operator /=

These assignments have the same effect as the following [assignments of arithmetic expressions](javascript:call_link\('abenequals_arith_expr.htm'\)):

lhs = [lhs + ( rhs )](javascript:call_link\('abapcompute_arith.htm'\)).
lhs = [lhs - ( rhs )](javascript:call_link\('abapcompute_arith.htm'\)).
lhs = [lhs \* ( rhs )](javascript:call_link\('abapcompute_arith.htm'\)).
lhs = [lhs / ( rhs )](javascript:call_link\('abapcompute_arith.htm'\)).

The content of lhs

-   gets the result of the parenthesized expression rhs added to it,
-   or has the result of the parenthesized expression rhs subtracted from it,
-   or is multiplied by the result of the parenthesized expression rhs,
-   or is divided by the result of the parenthesized expression rhs,

and the result is assigned to lhs. The [calculation type](javascript:call_link\('abencalculation_type_glosry.htm'\) "Glossary Entry") is [determined](javascript:call_link\('abenarith_type.htm'\)) accordingly.

The following applies to the operands lhs and rhs:

-   lhs is a [result position](javascript:call_link\('abenresult_position_glosry.htm'\) "Glossary Entry") and numeric:
    -   [Variables](javascript:call_link\('abenvariable_glosry.htm'\) "Glossary Entry") and
    -   [Writable expressions](javascript:call_link\('abenwritable_expression_glosry.htm'\) "Glossary Entry")
-   can be specified.
-   rhs is a [numeric expression position](javascript:call_link\('abennumerical_expr_position_glosry.htm'\) "Glossary Entry") and numeric:
    -   [Data objects](javascript:call_link\('abennumeric_data_object_glosry.htm'\) "Glossary Entry")
    -   [Constructor expressions](javascript:call_link\('abenconstructor_glosry.htm'\) "Glossary Entry")
    -   [Arithmetic expressions](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry")
    -   [Table expressions](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry")
    -   [Functions](javascript:call_link\('abenfunction_glosry.htm'\) "Glossary Entry")
-   can be specified.
    
    Type inference with the character # is not currently possible in constructor expressions. [Character-like expressions](javascript:call_link\('abencharlike_expression_glosry.htm'\) "Glossary Entry") and [bit expressions](javascript:call_link\('abenbit_expression_glosry.htm'\) "Glossary Entry") cannot be specified.
    

Division by the value 0 is undefined and raises a catchable exception. The only situation where division by 0 does not raise an exception is if the dividend is also 0. Here, the result is set to 0.

Hints

-   Apart from data objects, calculation assignments also allow expressions in the operand positions. This makes them more powerful than the statements [ADD](javascript:call_link\('abapadd.htm'\)), [SUBTRACT](javascript:call_link\('abapsubtract_multiply_divide.htm'\)), [MULTIPLY](javascript:call_link\('abapsubtract_multiply_divide.htm'\)), [DIVIDE](javascript:call_link\('abapsubtract_multiply_divide.htm'\)), and also makes them obsolete.
-   No [inline declarations](javascript:call_link\('abeninline_declaration_glosry.htm'\) "Glossary Entry") are possible for lhs.
-   Calculation assignments can currently only be specified as standalone statements. They are not possible in other expressions, such as after NEXT in the reduction operator [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)).
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