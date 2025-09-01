  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_modularization.htm) →  [Procedures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_procedures.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Parameter%20Interface%20of%20Procedures%2C%20ABENFORMAL_PARAMETERS_OVIEW%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Parameter Interface of Procedures

The parameter interface of a procedure consists of [formal parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenformal_parameter_glosry.htm "Glossary Entry") and specifies the possible [exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexception_glosry.htm "Glossary Entry") in the procedure.

-   [Formal Parameters](#@@ITOC@@ABENFORMAL_PARAMETERS_OVIEW_1)
    -   [Pass by Reference or Pass by Value](#@@ITOC@@ABENFORMAL_PARAMETERS_OVIEW_2)
-   [Exceptions](#@@ITOC@@ABENFORMAL_PARAMETERS_OVIEW_3)

Formal Parameters   

Formal parameters are [input parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninput_parameter_glosry.htm "Glossary Entry"), [output parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoutput_parameter_glosry.htm "Glossary Entry"), [input/output parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninput_output_parameter_glosry.htm "Glossary Entry"), or [return values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreturn_value_glosry.htm "Glossary Entry"). In addition, there are several obsolete [table parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_parameter_glosry.htm "Glossary Entry"). Formal parameters are either generic or completely [typed](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentyping_glosry.htm "Glossary Entry"). [Pass by reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpass_by_reference_glosry.htm "Glossary Entry") or [pass by value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpass_by_value_glosry.htm "Glossary Entry") can be specified for most formal parameters. Pass by value is mandatory for some formal parameters.

Programming Guideline

[Choose the appropriate formal parameter type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentype_formal_param_proc_guidl.htm "Guideline")

Pass by Reference or Pass by Value   

Parameters can be passed to procedures either by reference or by value.

-   Pass by reference
    
    In the case of pass by reference, a reference to the actual parameter is passed to the procedure when it is called. The procedure then works with the actual parameter itself. No local data object is created for the actual parameter. Input parameters that are passed by reference cannot be changed in the procedure (exception: USING parameters of subroutines).
    
-   Pass by value
    
    In the case of pass by value, a type-compliant local data object is created as a copy of the actual parameter for the formal parameter. Output parameters and return values are initialized when the procedure is started and input parameters, as well as input/output parameters, are given the value of the actual parameter. A changed formal parameter is only passed to the actual parameter if the procedure is completed without errors.
    

When deciding whether to use pass by reference or pass by value for a formal parameter, the performance and robustness of each pass-by type must be compared.

In ABAP, pass by reference always has better performance since no local data object is created and no data transport is necessary when the procedure is called. Therefore, for performance reasons, pass by reference is usually preferable, unless explicit or implicit writes to an input parameter take place in the procedure or if it needs to be ensured that an input/output parameter or an output parameter is returned only if the procedure ends without any errors. In such a case, pass by value is mandatory, to make sure that the assigned [actual parameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenactual_parameter_glosry.htm "Glossary Entry") is not modified simultaneously in the caller when writes are made to a formal parameter. For performance reasons, only parameters of 100 bytes or less should be passed in these cases, whenever possible.

Also note the following when using pass by reference:

-   In [subroutines](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensubroutine_glosry.htm "Glossary Entry"), writes can be made to an input parameter defined using USING without a syntax error being produced. In contrast, for input parameters of methods or function modules defined using IMPORTING writes are syntactically forbidden.
-   An output parameter that is passed by reference acts like an input/ output parameter; that is, if read access to an output parameter is carried out in the procedure before the value of that parameter is changed, this value is not initial, unlike with pass by value, but corresponds to the current value of the actual parameter in the caller.
-   If a procedure is terminated because of an error, that is, if it is terminated for a reason other than reaching its last statement or RETURN, EXIT, or CHECK, all actual parameters that are passed by reference are set to the value of the assigned formal parameter that the parameter was at when the program was terminated. In pass by value, no values are passed to actual parameters when a procedure is terminated.

Procedures and their calls must be programmed in such a way that these kinds of errors do not occur.

To summarize, pass by reference is always preferable when performance is important, whereas pass by value is more secure in situations where the emphasis is on robustness and data consistency. These factors must be considered when deciding which pass-by type to use with which type of parameter.

Programming Guideline

[Choose a suitable pass-by type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentype_transf_formal_para_guidl.htm "Guideline")

Hints

-   When strings or internal tables of the same type are passed by value, [table sharing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensharing_glosry.htm "Glossary Entry") takes effect between the data object created locally and the passed data object, such as in [assignments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenassignment_glosry.htm "Glossary Entry"). However, [table sharing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_sharing_glosry.htm "Glossary Entry") only occurs if the line type of the internal table allows it. When passing strings and internal tables, the performance drawbacks of pass by value can, under certain circumstances, be lifted by sharing.
-   Only pass by reference can be specified for the obsolete [table parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_parameter_glosry.htm "Glossary Entry").
-   A local data object is generated for formal parameters that are passed by reference and are not bound to an actual parameter during the call as for pass by value.
-   There are special rules for defining [literals](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentyping_literals.htm) and [functions and expressions as actual parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentyping_arith_expr.htm):
    -   When a literal is bound, its typing is not checked as strictly.
    -   When a function, a calculation expression, a constructor expression, or a table expression is bound, passing is always [pass by value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpass_by_value_glosry.htm "Glossary Entry"), even if the formal parameter is defined as [pass by reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpass_by_reference_glosry.htm "Glossary Entry").
-   The result of the [typing check](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentyping_check.htm) when passing actual parameters to formal parameters is independent of the pass type. In a [pass by value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpass_by_value_glosry.htm "Glossary Entry"), the check for [pass by reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpass_by_reference_glosry.htm "Glossary Entry") is always performed, even though this is stricter than necessary in individual cases. For example, a special reference variable cannot be passed to a general typed CHANGING parameter, even if pass by value is defined for this parameter.
-   Pass by value is mandatory for the [return value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreturn_value_glosry.htm "Glossary Entry") of [functional methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunctional_method_glosry.htm "Glossary Entry"), the output parameters of [events](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenevent_glosry.htm "Glossary Entry") in ABAP Objects, and for all formal parameters of [RFC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrfc_glosry.htm "Glossary Entry")\-enabled function modules and [update function modules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenupdate_function_module_glosry.htm "Glossary Entry") (pass by value is also used implicitly with table parameters).

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
CLASS exa DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS cls IMPLEMENTATION.
  METHOD meth.
    p1 = 333.
    p2 = 444.
    RAISE EXCEPTION TYPE cx\_exception.
  ENDMETHOD.
ENDCLASS.
CLASS exa IMPLEMENTATION.
  METHOD main.
    DATA(a1) = 111.
    DATA(a2) = 222.
    TRY.
        cls=>meth( CHANGING p1 = a1
                           p2 = a2 ).
      CATCH cx\_exception.
        cl\_demo\_output=>display( |{ a1 }, { a2 }| ).
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

Exceptions   

[Class-based exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_based_exception_glosry.htm "Glossary Entry") can be declared using RAISING in all procedures ([methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmethod_glosry.htm "Glossary Entry"), [function modules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction_module_glosry.htm "Glossary Entry"), and [subroutines](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensubroutine_glosry.htm "Glossary Entry")), and can then be [propagated from the procedure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexceptions_procedures.htm). EXCEPTIONS can also be used in methods and function modules to define non-class-based exceptions, which can then be raised in the procedure using [RAISE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception.htm) or [MESSAGE ... RAISING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmessage_raising.htm).

Continue
![Example](exa.gif "Example") [Parameter Passing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprocedure_param_abexa.htm)