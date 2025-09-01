  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeclarations.htm) →  [Typing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping.htm) →  [Checking Typing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_check.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Functions%20and%20Expressions%20as%20Actual%20Parameters%2C%20ABENTYPING_ARITH_EXPR%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impr
ovement:)

Functions and Expressions as Actual Parameters

[Functions and expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoperands_expressions.htm) can be specified as actual parameters in the following formal parameters:

-   Write Positions
    -   [Output parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoutput_parameter_glosry.htm "Glossary Entry"), [input/output parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninput_output_parameter_glosry.htm "Glossary Entry"), and [return values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreturn_value_glosry.htm "Glossary Entry") in [method calls](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_parameters.htm).
-   Read Positions
    -   [Input parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninput_parameter_glosry.htm "Glossary Entry") of [methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmethod_glosry.htm "Glossary Entry") in [method calls](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_parameters.htm), when [objects are created](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_object_parameters.htm), or when exceptions are raised using [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_exception_class.htm) or [THROW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconditional_expression_result.htm) in a [conditional exception](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconditional_expressions.htm)
    -   [Input parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninput_parameter_glosry.htm "Glossary Entry") of [function modules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunction_module_glosry.htm "Glossary Entry") for all variants of the statement [CALL FUNCTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_function.htm).

The parameters are evaluated from left to right (and from inside to outside) and the procedure is executed. A parameter cannot be affected by the method itself but by the evaluation of a preceding expression. This applies in particular to [writable expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwritable_expression_glosry.htm "Glossary Entry") in [result positions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenresult_position_glosry.htm "Glossary Entry").

Special rules apply to typing checks, identifying the calculation type, and parameter passes.

-   [Checking Typing](#@@ITOC@@ABENTYPING_ARITH_EXPR_1)
-   [Calculation Type and Calculation Length](#@@ITOC@@ABENTYPING_ARITH_EXPR_2)
-   [Passing Parameters](#@@ITOC@@ABENTYPING_ARITH_EXPR_3)
    -   [Complete Typing](#@@ITOC@@ABENTYPING_ARITH_EXPR_4)
    -   [Generic Typing](#@@ITOC@@ABENTYPING_ARITH_EXPR_5)

Hints

-   In the case of [dynamic method calls](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_dynamic.htm), the same rules apply as to static method calls. However, handling at runtime is time-consuming. Therefore, helper variables should be used in a dynamic call instead of functions or expressions if possible. Function module calls are always dynamic and, compared to method calls, fewer rules apply.
-   A [system field](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensystem_field_glosry.htm "Glossary Entry") should [never be used an actual parameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenuse_actual_parameters_guidl.htm "Guideline").

Checking Typing   

-   A [numeric function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmathematical_funktion_glosry.htm "Glossary Entry"), a [description function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendescription_function_glosry.htm "Glossary Entry"), or an [arithmetic expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") can
    -   be bound to any numeric or any input parameter typed using the type any in a method call.
    -   be bound to any appropriately typed input parameter in a function module call.
-   A [bit function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbit_function_glosry.htm "Glossary Entry") or a [bit expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbit_expression_glosry.htm "Glossary Entry") can
    -   be bound to any byte-like or general typed input parameter in a method call.
    -   be passed to input parameters of type x or a generic type including x in function module calls.
-   A [string function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_function_glosry.htm "Glossary Entry") or a [string expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_expression_glosry.htm "Glossary Entry") can
    -   be bound to any character-like or general typed input parameter in a method call.
    -   be passed to input parameters of type string or a generic type including string in function module calls.
-   A [constructor expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_glosry.htm "Glossary Entry") can
    -   be passed to every input parameter that matches the specified type [type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expressions.htm) of the constructor expression in method calls. In this case, with the exception of conversion operator [CONV](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconv_constructor_inference.htm) in the constructor expression, the # character can only be specified for type if the input parameter is typed completely and this type is used.
    -   be passed to every input parameter that matches the specified type [type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expressions.htm) of the constructor expression in function module calls. The character # cannot be specified for type in the constructor expression since no static derivations of types are possible in function module calls.
-   A [table expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_expression_glosry.htm "Glossary Entry") can
    -   be passed in method or function calls to every input parameter that matches the type of the result.

Hints

-   In function module calls, the typing is not checked until runtime.
-   No arithmetic expressions, description functions, or numeric functions can be passed to formal parameters with the generic type [data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_types_generic.htm). This restriction can be bypassed using the [conversion operator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_operator_glosry.htm "Glossary Entry") [CONV](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_conv.htm) on the actual parameter. This restriction does not apply to the generic type any.

Calculation Type and Calculation Length   

If calculation expressions are specified as actual parameters, the calculation type and calculation length are determined as follows:

-   The [calculation type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencalculation_type_glosry.htm "Glossary Entry") of an arithmetic expression is determined
    -   in method calls from the operands of the expression and the typing of the input parameter, if this parameter is completely typed. If the input parameter is typed generically, only the operands of the expression are evaluated.
    -   in function module calls from the operands of the expression. The typing of the input parameter is ignored.
-   The [calculation length](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencalculation_length_glosry.htm "Glossary Entry") of a bit expression is the length of the largest operand of the expression.

Passing Parameters   

When binding a function, a calculation expression, a constructor expression, or a table expression, the parameters are always [passed by value](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpass_by_value_glosry.htm "Glossary Entry"), even if the formal parameter is defined as to be [passed by reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpass_by_reference_glosry.htm "Glossary Entry").

Complete Typing   

The return value of a function or the result of a calculation expression, a constructor expression, or a table expression is [converted](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_rules.htm), if necessary, to the type of the input parameter and passed.

Generic Typing   

-   In a function, a constructor expression, or a table expression, the formal parameter inherits the type of the return value or result. Only bit functions are handled like bit expressions (see below).
-   With an arithmetic expression, the formal parameter inherits the calculation type determined by the operand. If the calculation type is p, the length is always 16. The number of decimal places is determined by the accuracy required for the calculation and therefore depends on the values of the operands.
-   In a bit expression or a bit function, the formal parameter is set to type x in the calculation length determined by the operands.
-   In a string expression, the formal parameter is set to the type string for completely generic typing or the generic types csquence clike. In the case of the types c and n with generic length, the length is set to the length of the result of the string expression.

Example

The functional method m1 is called twice for each assignment to result. The first call is executed in an arithmetic expression, which is passed as an actual parameter in the second call. In the first call of each assignment, the formal parameter p1 has type p of length 16. The number of decimal places is 0 in the first assignment, 14 in the second, and 1 in the third assignment. In the second call, the formal parameter p1 has the type decfloat34 in each assignment, because the calculation type of the arithmetic expression is determined by the return value of m1.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS m1 IMPORTING p1         TYPE numeric
                     RETURNING VALUE(ret) TYPE decfloat34.
ENDCLASS.
CLASS c1 IMPLEMENTATION.
  METHOD m1.
    ret = p1.
  ENDMETHOD.
ENDCLASS.
CLASS exa DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS exa IMPLEMENTATION.
  METHOD main.
    DATA num1   TYPE p DECIMALS 2 VALUE '2.00'.
    DATA num2   TYPE p DECIMALS 2 VALUE '1.00'.
    DATA result TYPE decfloat34.
    result = c1=>m1( sqrt( 4 ) +  c1=>m1( num1 / 2 )  ).
    result = c1=>m1( sqrt( 4 ) +  c1=>m1( num1 / 3 )  ).
    result = c1=>m1( sqrt( 4 ) +  c1=>m1( num2 / 2 )  ).
  ENDMETHOD.
ENDCLASS.