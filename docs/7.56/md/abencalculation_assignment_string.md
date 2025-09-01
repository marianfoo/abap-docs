  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Expressions (string\_exp)](javascript:call_link\('abapcompute_string.htm'\)) →  [string\_exp - &&](javascript:call_link\('abenstring_operators.htm'\)) → 

&&=, Calculation Assignment

Syntax

lhs &&= rhs.

Effect

[Calculation assignment](javascript:call_link\('abencalculation_assignment_glosry.htm'\) "Glossary Entry") with the concatenation assignment operator &&=.

This assignment has the same effect as the following [assignment of a string expression](javascript:call_link\('abenequals_string_expr.htm'\)):

lhs = [lhs && rhs](javascript:call_link\('abenstring_operators.htm'\)).

The result of the expression rhs is concatenated with the content of lhs and the result is assigned to lhs.

The following applies to the operands lhs and rhs:

-   lhs is a [result position](javascript:call_link\('abenresult_position_glosry.htm'\) "Glossary Entry") and the following can be specified if they are character-like:
    -   [Variables](javascript:call_link\('abenvariable_glosry.htm'\) "Glossary Entry")
    -   [Writable expressions](javascript:call_link\('abenwritable_expression_glosry.htm'\) "Glossary Entry")
-   rhs is a [character-like expression position](javascript:call_link\('abencharlike_expr_position_glosry.htm'\) "Glossary Entry") and the following can be specified if they are character-like:
    
    -   [Data objects](javascript:call_link\('abennumeric_data_object_glosry.htm'\) "Glossary Entry")
    -   [Constructor expressions](javascript:call_link\('abenconstructor_glosry.htm'\) "Glossary Entry")
    -   [String expressions](javascript:call_link\('abenstring_expression_glosry.htm'\) "Glossary Entry")
    -   [Table expressions](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry")
    -   [Functions](javascript:call_link\('abenfunction_glosry.htm'\) "Glossary Entry")
    
    Type inference with the character # is not currently possible in constructor expressions. No [numeric expressions](javascript:call_link\('abennumerical_expression_glosry.htm'\) "Glossary Entry") and [bit expressions](javascript:call_link\('abenbit_expression_glosry.htm'\) "Glossary Entry") can be specified.
    

Hints

-   No [inline declarations](javascript:call_link\('abendata_inline.htm'\)) are possible for lhs.
-   Calculation assignments can currently only be specified as standalone statements and after NEXT in the reduction operator [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)). They are not possible in other expressions.
-   See also the [addition assignment operator](javascript:call_link\('abenadd_assignment_op_glosry.htm'\) "Glossary Entry") ([+=](javascript:call_link\('abencalculation_assignments.htm'\))), the [subtraction assignment operator](javascript:call_link\('abensub_assignment_op_glosry.htm'\) "Glossary Entry") ([\-=](javascript:call_link\('abencalculation_assignments.htm'\))), the [multiplication assignment operator](javascript:call_link\('abenmult_assignment_op_glosry.htm'\) "Glossary Entry") ([\*=](javascript:call_link\('abencalculation_assignments.htm'\))), and the [division assignment operator](javascript:call_link\('abendiv_assignment_op_glosry.htm'\) "Glossary Entry") ([/=](javascript:call_link\('abencalculation_assignments.htm'\))).

Example

After the calculation assignments, the variable text has the value 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,.

DATA text TYPE string.
DO 10 TIMES.
  text &&= |{ sy-index }, |.
ENDDO.