  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_flow_logic.htm) →  [Iteration Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeniteration_expressions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20REDUCE%2C%20Reduction%20Operator%2C%20ABENCONSTRUCTOR_EXPRESSION_REDUCE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

REDUCE, Reduction Operator

Syntax

... REDUCE type(
      *\[*[let\_exp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaplet.htm)*\]*
      INIT *{*x1 = rhs1*}**|**{*<x1> = wrexpr1*}**|**{*x1*|*<x1> TYPE dtype1*}*
           *{*x2 = rhs2*}**|**{*<x2> = wrexpr2*}**|**{*x2*|*<x2> TYPE dtype2*}*
           ...
      [FOR for\_exp1](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor.htm)
      [FOR for\_exp2](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor.htm)
      ...
      NEXT ...
           *{*x1 =*|*+=*|*\-=*|*\*=*|*/=*|*&&= rhs1*}**|**{*<x1> =*|*+=*|*\-=*|*\*=*|*/=*|*&&= wrexpr1*}*
           *{*x2 =*|*+=*|*\-=*|*\*=*|*/=*|*&&= rhs2*}**|**{*<x2> =*|*+=*|*\-=*|*\*=*|*/=*|*&&= wrexpr2*}*
           ... ) ...

Effect

A [constructor expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expressions.htm) with the reduction operator REDUCE creates a result of a data type specified using type from one or more [iteration expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeniteration_expression_glosry.htm "Glossary Entry"). The following can be specified for type:

-   A non-generic data type dtype.
-   The # character as a symbol for the [operand type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoperand_type_glosry.htm "Glossary Entry").
    -   If the data type required in an operand position is unique and known completely, this type is used.
    -   If the operand type is not known completely, the type of the first declaration after INIT, which is always known, is used, except when the constructor expression is passed to an actual parameter with a generically typed formal parameter.
    -   If the constructor expression is passed to an actual parameter with a generically typed formal parameter, the operand type is derived in accordance with [special rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreduce_constructor_inference.htm).

The parameters and arguments of the constructor expression must be specified as follows:

-   First, an optional [LET expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaplet.htm) can be specified for defining local helper fields whose value can be used within the expression but can no longer be changed there.
-   Then, an addition INIT must be specified followed by any number of declarations. The declarations after INIT create local variables x1, x2, ... or field symbols <x1>, <x2>, ... to which the same applies with respect to namespace and visibility as to the helper fields declared in a [LET expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaplet.htm). The syntax of the declaration is either:
    
    -   the same as in a [LET expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaplet.htm) and it follows the rules that apply here.
    -   initial variables or field symbols of the specified data type dtype can be created using TYPE.
    
    At least one variable or field symbol must be specified. The variables or field symbols declared after INIT can only be used after NEXT. In particular, they cannot be used to declare other variables or field symbols.
    
    -   The first variable x1 or the first field symbol <x1> determines the result of the expression and the data type must be convertible to the result type type.
    -   All other variables or field symbols declared after INIT are optional additional helper fields that can be on the left side of assignments after NEXT, unlike those declared after LET.
-   Then, at least one [iteration expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeniteration_expression_glosry.htm "Glossary Entry") must be specified using [FOR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor.htm) but it is also possible to specify multiple expressions.
    -   If [conditional iterations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_conditional.htm) are used, the result is created in custom iteration steps.
    -   If [table iterations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_itab.htm) are used, the lines of existing internal tables are evaluated. This is referred to as a [table reduction](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_reduction_glosry.htm "Glossary Entry"), since any values are constructed from the lines of existing internal tables.
-   Then, assignments must be specified after NEXT that are executed for every iteration of the last FOR expression. For the assignments, either the [assignment operator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassignment_operator_glosry.htm "Glossary Entry") \= or the [calculation assignment operators](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencalc_assignment_op_glosry.htm "Glossary Entry") +=, \-=, \*=, /=, or &&= can be specified and the assignment is carried out accordingly. A value or memory area must be assigned to all variables and field symbols declared after INIT. In the case of structured variables or field symbols, an assignment to one of their components is sufficient.
    
    -   The assignment on the right side rhs to variables x takes place in accordance with the rules of a regular assignment using the [assignment operator \=](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenequals_operator.htm) or a [calculation assignment operator +=, +=, \*=, /=](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencalculation_assignments.htm) or [&&=](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencalculation_assignment_string.htm), which means that any of the possible calls and expressions can be specified for rhs.
    -   Only the result of a [writable expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwritable_expression_glosry.htm "Glossary Entry") wrexp can be assigned to a field symbol. The same applies here as to assignments of writable expressions using [ASSIGN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_mem_area_writable_exp.htm), which means that only the expressions listed there can be specified.
    
    The assignments can be listed in any order and they are evaluated from to left to right. Each non-structured variable or field symbol declared after INIT can be specified exactly once as the left side. In the case of structured variables or field symbols, either the entire structure or each component once can be specified as the left side. In addition to the data objects of the program, all local variables and field symbols of the expression visible after the last FOR expression can be used in the operand positions on the right side:
    
    -   All variables and field symbols declared after LET.
    -   All variables and field symbols declared after INIT.
    -   The wa1, wa2, ... or <fs1>, <fs2>, .... filled by the FOR expressions. This enables the content of the lines of the internal tables to be accessed and the result constructed.
    
    All helper fields declared after INTIT can only be specified in read positions on the right side.
    

After the full evaluation, the content of the first variable x1 or the memory area pointed to by the first field symbol <x1> is assigned to the temporary result of the expression of type type in accordance with the [assignment rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_rules.htm).

Hints

-   The name of the operator REDUCE is explained as follows:
    -   [Conditional iterations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_conditional.htm) are generally used to reduce sets of data objects to a single data object.
    -   [Table iterations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_itab.htm) for [table reductions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_reduction_glosry.htm "Glossary Entry") are generally used to reduce the content of the internal tables in question to a summary value. Any result type is possible and does not have to be less complex than the involved internal tables, but this should only be used in exceptional cases. When constructing tables from tables, it is best to use [table comprehensions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_comprehension_glosry.htm "Glossary Entry") instead.
-   When a local field symbol <xi> is used on the left side of assignments after NEXT, it should be noted that the assignments are not made to the value referenced by the field symbol like in INIT and LET. Instead, the field symbol is set in the same way as in the statement [ASSIGN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_mem_area_writable_exp.htm).
-   Unlike in [table comprehensions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_comprehension_glosry.htm "Glossary Entry") with the value operator [VALUE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalue_constructor_params_itab.htm), an assignment of a REDUCE expression to a structure or an internal table does not overwrite them completely before the FOR expressions are processed and can be used directly anywhere in the entire expression.
-   If a variable is declared in the first position after INIT and the VALUE operator is specified with the character # on the right side, the result type type of the REDUCE expression is used for this character if possible.
-   Table reductions are also possible with [FOR expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_for.htm) for [mesh paths](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_path_glosry.htm "Glossary Entry").
-   [Table filtering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_filtering_glosry.htm "Glossary Entry") can be achieved more efficiently using the [filter operator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfilter_operator_glosry.htm "Glossary Entry") [FILTER](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_filter.htm).

Example

Calculation of the total of the numbers from 1 to 10 via REDUCE.

cl\_demo\_output=>display(
  REDUCE i( INIT s = 0
            FOR  i = 1 UNTIL i > 10
            NEXT s += i ) ).

Executable Examples

-   [Creating Values with FOR and REDUCE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencond_iteration_reduce_abexa.htm)
-   [Examples of Table Reductions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_reductions_abexas.htm).

Continue
[REDUCE, Type Inference for Actual Parameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreduce_constructor_inference.htm)
![Example](exa.gif "Example") [Reduce Operator, Type Inference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreduce_type_inference_abexa.htm)