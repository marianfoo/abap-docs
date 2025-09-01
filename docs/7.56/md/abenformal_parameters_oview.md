  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Structure](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) →  [Procedures](javascript:call_link\('abenabap_language_procedures.htm'\)) → 

Parameter Interface of Procedures

The parameter interface of a procedure consists of [formal parameters](javascript:call_link\('abenformal_parameter_glosry.htm'\) "Glossary Entry") and specifies the possible [exceptions](javascript:call_link\('abenexception_glosry.htm'\) "Glossary Entry") in the procedure.

-   [Formal Parameters](#abenformal-parameters-oview-1-----------pass-by-reference-or-pass-by-value---@ITOC@@ABENFORMAL_PARAMETERS_OVIEW_2)
-   [Exceptions](#@@ITOC@@ABENFORMAL_PARAMETERS_OVIEW_3)

Formal Parameters

Formal parameters are [input parameters](javascript:call_link\('abeninput_parameter_glosry.htm'\) "Glossary Entry"), [output parameters](javascript:call_link\('abenoutput_parameter_glosry.htm'\) "Glossary Entry"), [input/output parameters](javascript:call_link\('abeninput_output_parameter_glosry.htm'\) "Glossary Entry"), or [return values](javascript:call_link\('abenreturn_value_glosry.htm'\) "Glossary Entry"). In addition, there are several obsolete [table parameters](javascript:call_link\('abentable_parameter_glosry.htm'\) "Glossary Entry"). Formal parameters are either generic or completely [typed](javascript:call_link\('abentyping_glosry.htm'\) "Glossary Entry"). [Pass by reference](javascript:call_link\('abenpass_by_reference_glosry.htm'\) "Glossary Entry") or [pass by value](javascript:call_link\('abenpass_by_value_glosry.htm'\) "Glossary Entry") can be specified for most formal parameters. Pass by value is mandatory for some formal parameters.

Programming Guideline

[Choose the appropriate formal parameter type](javascript:call_link\('abentype_formal_param_proc_guidl.htm'\) "Guideline")

Pass by Reference or Pass by Value

Parameters can be passed to procedures either by reference or by value.

-   Pass by reference
    
    In the case of pass by reference, a reference to the actual parameter is passed to the procedure when it is called. The procedure then works with the actual parameter itself. No local data object is created for the actual parameter. Input parameters that are passed by reference cannot be changed in the procedure (exception: USING parameters of subroutines).
    
-   Pass by value
    
    In the case of pass by value, a type-compliant local data object is created as a copy of the actual parameter for the formal parameter. Output parameters and return values are initialized when the procedure is started and input parameters, as well as input/output parameters, are given the value of the actual parameter. A changed formal parameter is only passed to the actual parameter if the procedure is completed without errors.
    

When deciding whether to use pass by reference or pass by value for a formal parameter, the performance and robustness of each pass-by type must be compared.

In ABAP, pass by reference always has better performance since no local data object is created and no data transport is necessary when the procedure is called. Therefore, for performance reasons, pass by reference is usually preferable, unless explicit or implicit writes to an input parameter take place in the procedure or if it needs to be ensured that an input/output parameter or an output parameter is returned only if the procedure ends without any errors. In such a case, pass by value is mandatory, to make sure that the assigned [actual parameter](javascript:call_link\('abenactual_parameter_glosry.htm'\) "Glossary Entry") is not modified simultaneously in the caller when writes are made to a formal parameter. For performance reasons, only parameters of 100 bytes or less should be passed in these cases, whenever possible.

Also note the following when using pass by reference:

-   In [subroutines](javascript:call_link\('abensubroutine_glosry.htm'\) "Glossary Entry"), writes can be made to an input parameter defined using USING without a syntax error being produced. In contrast, for input parameters of methods or function modules defined using IMPORTING writes are syntactically forbidden.
-   An output parameter that is passed by reference acts like an input/ output parameter; that is, if read access to an output parameter is carried out in the procedure before the value of that parameter is changed, this value is not initial, unlike with pass by value, but corresponds to the current value of the actual parameter in the caller.
-   If a procedure is terminated because of an error, that is, if it is terminated for a reason other than reaching its last statement or RETURN, EXIT, or CHECK, all actual parameters that are passed by reference are set to the value of the assigned formal parameter that the parameter was at when the program was terminated. In pass by value, no values are passed to actual parameters when a procedure is terminated.

Procedures and their calls must be programmed in such a way that these kinds of errors do not occur.

To summarize, pass by reference is always preferable when performance is important, whereas pass by value is more secure in situations where the emphasis is on robustness and data consistency. These factors must be considered when deciding which pass-by type to use with which type of parameter.

Programming Guideline

[Choose a suitable pass-by type](javascript:call_link\('abentype_transf_formal_para_guidl.htm'\) "Guideline")

Hints

-   When strings or internal tables of the same type are passed by value, [table sharing](javascript:call_link\('abensharing_glosry.htm'\) "Glossary Entry") takes effect between the data object created locally and the passed data object, such as in [assignments](javascript:call_link\('abenassignment_glosry.htm'\) "Glossary Entry"). However, [table sharing](javascript:call_link\('abentable_sharing_glosry.htm'\) "Glossary Entry") only occurs if the line type of the internal table allows it. When passing strings and internal tables, the performance drawbacks of pass by value can, under certain circumstances, be lifted by sharing.
-   Only pass by reference can be specified for the obsolete [table parameters](javascript:call_link\('abentable_parameter_glosry.htm'\) "Glossary Entry").
-   Pass by value is mandatory for the [return value](javascript:call_link\('abenreturn_value_glosry.htm'\) "Glossary Entry") of [functional methods](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry"), the output parameters of [events](javascript:call_link\('abenevent_glosry.htm'\) "Glossary Entry") in ABAP Objects, and for all formal parameters of [RFC](javascript:call_link\('abenrfc_glosry.htm'\) "Glossary Entry")\-enabled function modules and [update function modules](javascript:call_link\('abenupdate_function_module_glosry.htm'\) "Glossary Entry") (pass by value is also used implicitly with table parameters).
-   A local data object is generated for formal parameters that are passed by reference and are not bound to an actual parameter during the call as for pass by value.
-   There are special rules for defining [literals](javascript:call_link\('abentyping_literals.htm'\)) and [functions and expressions as actual parameters](javascript:call_link\('abentyping_arith_expr.htm'\)):
    -   When a literal is bound, its typing is not checked as strictly.
    -   When a function, a calculation expression, a constructor expression, or a table expression is bound, passing is always [pass by value](javascript:call_link\('abenpass_by_value_glosry.htm'\) "Glossary Entry"), even if the formal parameter is defined as [pass by reference](javascript:call_link\('abenpass_by_reference_glosry.htm'\) "Glossary Entry").
-   The result of the [typing check](javascript:call_link\('abentyping_check.htm'\)) when passing actual parameters to formal parameters is independent of the pass type. In a [pass by value](javascript:call_link\('abenpass_by_value_glosry.htm'\) "Glossary Entry"), the check for [pass by reference](javascript:call_link\('abenpass_by_reference_glosry.htm'\) "Glossary Entry") is always performed, even though this is stricter than necessary in individual cases. For example, a special reference variable cannot be passed to a general typed CHANGING parameter, even if pass by value is defined for this parameter.

Example

For a method meth, CHANGING parameter p1 is defined for pass by reference and p2 for pass by value. The value of both parameters is changed before an exception is raised. The actual parameter a1 bound to the parameter using pass by reference contains the changed value when the exception is handled. The actual parameter a2 bound to the parameter using pass by value, on the other hand, keeps its value.

CLASS cx\_exception DEFINITION
                   INHERITING FROM cx\_static\_check.
ENDCLASS.
CLASS cls DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS meth CHANGING p1        TYPE i
                                VALUE(p2) TYPE i
                       RAISING  cx\_exception.
ENDCLASS.
CLASS cls IMPLEMENTATION.
  METHOD meth.
    p1 = 333.
    p2 = 444.
    RAISE EXCEPTION TYPE cx\_exception.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  DATA(a1) = 111.
  DATA(a2) = 222.
  TRY.
      cls=>meth( CHANGING p1 = a1
                          p2 = a2 ).
    CATCH cx\_exception.
      cl\_demo\_output=>display( |{ a1 }, { a2 }| ).
  ENDTRY.

Exceptions

[Class-based exceptions](javascript:call_link\('abenclass_based_exception_glosry.htm'\) "Glossary Entry") can be declared using RAISING in all procedures ( [methods](javascript:call_link\('abenmethod_glosry.htm'\) "Glossary Entry"), [function modules](javascript:call_link\('abenfunction_module_glosry.htm'\) "Glossary Entry") , and [subroutines](javascript:call_link\('abensubroutine_glosry.htm'\) "Glossary Entry") ), and can then be [propagated from the procedure](javascript:call_link\('abenexceptions_procedures.htm'\)). EXCEPTIONS can also be used in methods and function modules to define non-class-based exceptions, which can then be raised in the procedure using [RAISE](javascript:call_link\('abapraise_exception.htm'\)) or [MESSAGE ... RAISING](javascript:call_link\('abapmessage_raising.htm'\)).

Continue
![Example](exa.gif "Example") [Parameter Passing](javascript:call_link\('abenprocedure_param_abexa.htm'\))