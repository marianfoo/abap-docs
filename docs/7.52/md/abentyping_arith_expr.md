  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Typing](javascript:call_link\('abentyping.htm'\)) →  [Checking Typing](javascript:call_link\('abentyping_check.htm'\)) → 

Functions and Expressions as Actual Parameters

[Functions and expressions](javascript:call_link\('abenoperands_expressions.htm'\)) can be specified as actual parameters in the following formal parameters:

-   Writing positions

-   [Output parameters](javascript:call_link\('abenoutput_parameter_glosry.htm'\) "Glossary Entry"), [input/output parameters](javascript:call_link\('abeninput_output_parameter_glosry.htm'\) "Glossary Entry"), and [return values](javascript:call_link\('abenreturn_value_glosry.htm'\) "Glossary Entry") in [method calls](javascript:call_link\('abapcall_method_parameters.htm'\)).

-   Reading positions

-   [Input parameters](javascript:call_link\('abeninput_parameter_glosry.htm'\) "Glossary Entry") of [methods](javascript:call_link\('abenmethod_glosry.htm'\) "Glossary Entry") in [method calls](javascript:call_link\('abapcall_method_parameters.htm'\)), when [objects are created](javascript:call_link\('abapcreate_object_parameters.htm'\)), or when exceptions are raised using [RAISE EXCEPTION](javascript:call_link\('abapraise_exception_class.htm'\)) or [THROW](javascript:call_link\('abenconditional_expression_result.htm'\)) in a [condition exception](javascript:call_link\('abenconditional_expressions.htm'\))

-   [Input parameters](javascript:call_link\('abeninput_parameter_glosry.htm'\) "Glossary Entry") of [function modules](javascript:call_link\('abenfunction_module_glosry.htm'\) "Glossary Entry") in all variants of the statement [CALL FUNCTION](javascript:call_link\('abapcall_function.htm'\)).

The parameters are read from left to right (and from inside to outside) and the procedure executed. A parameter cannot be modified by the method itself or by the evaluation of a preceding expression. This applies in particular to [writable expressions](javascript:call_link\('abenwritable_expression_glosry.htm'\) "Glossary Entry") in [result positions](javascript:call_link\('abenresult_position_glosry.htm'\) "Glossary Entry").

Special rules apply to typing checks, identifying the calculation type, and parameter passes.

-   [Checking Typing](#@@ITOC@@ABENTYPING_ARITH_EXPR_1)

-   [Calculation Type and Calculation Length](#@@ITOC@@ABENTYPING_ARITH_EXPR_2)

-   [Passing Parameters](#@@ITOC@@ABENTYPING_ARITH_EXPR_3)

-   [Fully Typed](#@@ITOC@@ABENTYPING_ARITH_EXPR_4)

-   [Generically Typed](#@@ITOC@@ABENTYPING_ARITH_EXPR_5)

Note

In the case of [dynamic method calls](javascript:call_link\('abapcall_method_dynamic.htm'\)), the same rules apply as to static method calls. However, the handling during runtime is time-consuming. Therefore, helper variables should be used in a dynamic call instead of functions or arithmetic expressions if possible. Function module calls are always dynamic and, compared to method calls, fewer rules apply.

Checking Typing

-   A [numeric function](javascript:call_link\('abenmathematical_funktion_glosry.htm'\) "Glossary Entry"), a [description function](javascript:call_link\('abendescription_function_glosry.htm'\) "Glossary Entry"), or an [arithmetic expression](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry") can

-   be bound to any numerically typed input parameter in a method call.

-   be bound to any appropriately typed input parameter in a function module call.

-   A [bit function](javascript:call_link\('abenbit_function_glosry.htm'\) "Glossary Entry") or a [bit expression](javascript:call_link\('abenbit_expression_glosry.htm'\) "Glossary Entry") can

-   be bound to any byte-like typed input parameter in a method call.

-   be passed to input parameters of the type x or a generic type covering x in function module calls.

-   A [string function](javascript:call_link\('abenstring_function_glosry.htm'\) "Glossary Entry") or a [string expression](javascript:call_link\('abenstring_expression_glosry.htm'\) "Glossary Entry") can

-   be bound to any character-like typed input parameter in a method call.

-   be passed to input parameters of the type string or a generic type covering string in function module calls.

-   A [constructor expression](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry") can

-   be passed to every input parameter that matches the specified type [type](javascript:call_link\('abenconstructor_expressions.htm'\)) of the constructor expression in method calls. In this case (with the exception of conversion operator [CONV](javascript:call_link\('abenconv_constructor_inference.htm'\)) in the constructor operator), the # character can only be specified for type if the input parameter is typed in full and this type is used.

-   be passed to every input parameter that matches the specified type [type](javascript:call_link\('abenconstructor_expressions.htm'\)) of the constructor expression in function module calls. The character # cannot be specified for type ion the constructor expression since static derivations of types are not possible in function module calls.

-   A [table expression](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry") can

-   be passed in method calls or function calls to every input parameter that matches the type of the result.

Note

In function module calls, the typing is not checked until runtime.

Calculation Type and Calculation Length

If calculation expressions are specified as actual parameters, the calculation type and calculation length are specified as follows:

-   The [calculation type](javascript:call_link\('abencalculation_type_glosry.htm'\) "Glossary Entry") of an arithmetic expression is determined

-   in method calls from the operands of the expression and the typing of the input parameter, if this parameter is fully typed. If the input parameter is typed generically, only the operands of the expression are evaluated.

-   in function module calls from the operands of the expression. The typing of the input parameter is ignored.

-   The [calculation length](javascript:call_link\('abencalculation_length_glosry.htm'\) "Glossary Entry") of a bit expression is the length of the largest operand of the expression.

Passing Parameters

When binding a function, a calculation expression, a constructor expression, or a table expression, the parameters are always [passed by value](javascript:call_link\('abenpass_by_value_glosry.htm'\) "Glossary Entry"), even if the formal parameter is defined as to be [passed by reference](javascript:call_link\('abenpass_by_reference_glosry.htm'\) "Glossary Entry").

Fully Typed

The return value of a function or the result of a calculation expression, a constructor expression, or a table expression is [converted](javascript:call_link\('abenconversion_rules.htm'\)), if necessary, to the type of the input parameter and passed.

Generically Typed

-   In a function, a constructor expression, or a table expression, the formal parameter inherits the type of the return value or result. Only bit functions are handled like bit expressions (see below).

-   With an arithmetic expression, the formal parameter takes over the calculation type determined by the operand. If the calculation type is p, the length is always 16. The number of decimal places is determined by the accuracy required by the calculation and therefore depends on the values of the operands.

-   In a bit expression or a bit function, the formal parameter is set to type x in the calculation length determined by the operands.

-   In a string expression, the formal parameter is set to the type string in the case of fully generic typing or the generic types csquence clike. In the case of the types c and n with generic lengths, the length is set to the length of the result of the string expression.

Example

The functional method m1 is called twice for each assignment to result. The first call is executed in an arithmetic expression, which is passed as an actual parameter in the second call. In the first call of each assignment, the formal parameter p1 has type p of length 16. The number of decimal places is 0 in the first assignment, 14 in the second, and 1 in the third assignment. In the second call, the formal parameter p1 has the type decfloat34 in each assignment, because the calculation type of the arithmetic expression is determined by the return value of m1.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS m1 IMPORTING p1 TYPE numeric
                     RETURNING value(ret) TYPE decfloat34.
ENDCLASS.
CLASS c1 IMPLEMENTATION.
  METHOD m1.
    ret = p1.
  ENDMETHOD.
ENDCLASS.
DATA num1   TYPE p DECIMALS 2 VALUE '2.00'.
DATA num2   TYPE p DECIMALS 2 VALUE '1.00'.
DATA result TYPE decfloat34.
START-OF-SELECTION.
  result = c1=>m1( sqrt( 4 ) +  c1=>m1( num1 / 2 )  ).
  result = c1=>m1( sqrt( 4 ) +  c1=>m1( num1 / 3 )  ).
  result = c1=>m1( sqrt( 4 ) +  c1=>m1( num2 / 2 )  ).