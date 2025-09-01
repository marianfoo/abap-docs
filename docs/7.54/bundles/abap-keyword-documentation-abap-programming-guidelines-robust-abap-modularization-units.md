# ABAP Keyword Documentation / ABAP Programming Guidelines / Robust ABAP / Modularization units

Included pages: 10


### abenmodularization_unit_guidl.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrobust_abap_guidl.htm) → 

Modularization units

Die wesentlichen Modularisierungseinheiten bzw. aufrufbaren Einheiten innerhalb eines ABAP-Programms werden als Verarbeitungsblöcke bezeichnet. Hierbei wird nach Prozeduren auf der einen und Dialogmodulen sowie Ereignisblöcken auf der anderen Seite unterschieden. Während Dialogmodule und Ereignisblöcke aus der Dynpro-Ablauflogik oder im Rahmen der Ereignissteuerung durch die ABAP-Laufzeitumgebung aufgerufen werden, sind die Prozeduren für den direkten Aufruf aus einem ABAP-Programm heraus vorgesehen. Neben Verarbeitungsblöcken können auch noch Makros als aufrufbare Einheiten angelegt werden.

Procedures can be:

-   Methods

-   Function modules

-   Subroutines

Only procedures support parameter interfaces and have a local data context.

Dialog modules and event blocks do not have parameter interfaces and generally do not have a local data context.

Macros are a kind of halfway house between callable units and source code modularization.

-   [Function Modules and Subroutines](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")

-   [Type of Formal Parameters in Procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentype_formal_param_proc_guidl.htm "Guideline")

-   [How Formal Parameters Are Passed](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentype_transf_formal_para_guidl.htm "Guideline")

-   [Pass By Reference for Output Parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenref_transf_output_param_guidl.htm "Guideline")

-   [Typing of Formal Parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentype_formal_param_guidl.htm "Guideline")

-   [Internal and External Procedure Calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenintern_extern_proc_call_guidl.htm "Guideline")

-   [Exiting Procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexit_procedure_guidl.htm "Guideline")

-   [Dialog Modules and Event Blocks](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendial_mod_event_block_guidl.htm "Guideline")

-   [Macros](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmacros_guidl.htm "Guideline")

Continue
[Function Modules and Subroutines](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunct_module_subroutine_guidl.htm)
[Type of Formal Parameters in Procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentype_formal_param_proc_guidl.htm)
[How Formal Parameters Are Passed](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentype_transf_formal_para_guidl.htm)
[Pass By Reference for Output Parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenref_transf_output_param_guidl.htm)
[Typing of Formal Parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentype_formal_param_guidl.htm)
[Internal and External Procedure Calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenintern_extern_proc_call_guidl.htm)
[Exiting Procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexit_procedure_guidl.htm)
[Dialog Modules and Event Blocks](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendial_mod_event_block_guidl.htm)
[Macros](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmacros_guidl.htm)


### abenfunct_module_subroutine_guidl.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrobust_abap_guidl.htm) →  [Modularization units](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmodularization_unit_guidl.htm) → 

Function Modules and Subroutines

Background

Function modules and subroutines are the [procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmodularization_guidl.htm "Guideline") of the structured programming model that already existed before the introduction of ABAP Objects.

-   Function modules in function groups are independent repository objects that the structured model provides for [external calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenintern_extern_proc_call_guidl.htm "Guideline") or for the provision of reusable functions.

-   Before the introduction of ABAP Objects, subroutines could be created in any programs and were intended for internal calls or for the internal modularization of programs in the structured model.

The introduction of ABAP Objects means that methods now have both roles.

Rule

No implementations in function modules and subroutines

Only use function modules and subroutines if they are necessary from a technical viewpoint. In these cases, do not implement the required function. Instead, call the relevant (local) methods.

Details

This rule is directly derived from rule [Use ABAP Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obj_progr_model_guidl.htm "Guideline"). This rule states that only methods should be created. You are only [allowed](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obj_progr_model_guidl.htm "Guideline") to create other types of procedures if is technically not possible to use a method:

-   Function modules for RFC, updates, and access to classical dynpros or selection screens

-   Subroutines for PERFORM ON COMMIT/ROLLBACK and GENERATE SUBROUTINE POOL

These subroutines should only be used for wrapping method calls to ensure that ABAP Objects is also used in these cases.

All the rules in these programming guidelines that relate to procedures actually refer to methods because, strictly speaking, no other procedures with nontrivial code are supposed to occur. If you strictly adhere to the above rule, is almost impossible for any of the rules that refer to implementations of procedures to be applied to function modules and subroutines, because they only serve to wrap calls. For example, function modules and subroutines should no longer contain any of the local declarations that are described in ["Defining Local Declarations at the Start of a Procedure"](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlocal_declar_guidl.htm "Guideline").

If you cannot adhere to the rule ["Use ABAP Objects"](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obj_progr_model_guidl.htm "Guideline") and the above rule because, for example, existing legacy function modules and subroutines need to be maintained or enhanced and you cannot switch to methods, the rules in these programming guidelines that refer to procedures also apply to function modules and subroutines.


### abentype_formal_param_proc_guidl.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrobust_abap_guidl.htm) →  [Modularization units](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmodularization_unit_guidl.htm) → 

Type of Formal Parameters in Procedures

Background

The parameter interface of a procedure consists of formal parameters and specifies the [exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclass_exception_guidl.htm "Guideline") possible in the procedure. The possible types of formal parameters are:

-   Input parameters
    Defined using IMPORTING in methods and function modules and using USING in subroutines.

-   Output parameters
    Defined using EXPORTING in methods and function modules.

-   Input/output parameters
    Defined using CHANGING in methods, function modules, and subroutines.

-   Return codes
    Defined using RETURNING in methods.

The actual behavior of a formal parameter, however, is in part determined by the combination of the parameter type and the [pass by type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentype_transf_formal_para_guidl.htm "Guideline").

Rule

Choose the appropriate formal parameter type

Select a formal parameter type that corresponds to the parameter semantics:

-   Input parameters for parameters that are evaluated but not changed in the procedure.

-   Output parameters or return codes for parameters that are not evaluated but changed in the procedure.

-   Input/output parameters for parameters that are evaluated and changed in the procedure.

Details

For the consumer of a procedure, the parameter types provide important information about how they are used in the procedure and leads the user to expect the procedure to behave in a certain way. If an unsuitable parameter type is selected, the risk of inappropriate use increases.

-   Input-only parameters should always have the IMPORTING type (or USING for subroutines). Be aware that, when using pass by reference, writes performed on an input parameter defined using USING are possible without a syntax error being produced (as is the case with input parameters of methods or function modules defined using IMPORTING). Yet another reason to not use subroutines.

-   Output-only parameters should always be EXPORTING or RETURNING.

-   Parameters that are received and changed should always be of the CHANGING type. In particular, in a procedure ([method](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")) the fact that an EXPORTING parameter (or a USING parameter in the case of subroutines) passed by reference [behaves](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenref_transf_output_param_guidl.htm "Guideline") (from a technical perspective) like a CHANGING parameter should not be exploited.

Input parameters or input/output parameters that are not necessarily required for the execution of a procedure should be defined as optional by using OPTIONAL or by specifying a DEFAULT value. Otherwise, calling programs are forced to pass unnecessary parameters and create helper variables especially for this purpose.

A narrow parameter interface in line with a [procedure with an appropriate number of statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenproc_volume_guidl.htm "Guideline") only requires a few input parameters and one return value. However, this cannot really be applied consistently in practice and is therefore not set out as a rule here.

Note

Another parameter type are table parameters that can be declared for function modules and subroutines using TABLES. Basically, they have the same effects as input/output parameters for internal tables. This parameter type is obsolete and should no longer be used.

Bad Example

The following source code shows a formal parameter that is declared as an output parameter using EXPORTING, but is used in the method like an input/output parameter declared with CHANGING. This does not correspond to the semantics that a calling program expects.

CLASS class DEFINITION.
  PUBLIC SECTION.
    METHODS do\_something
      EXPORTING e\_parameter TYPE ...
ENDCLASS.

CLASS class IMPLEMENTATION.
  METHOD do\_something.
    "evaluate e\_parameter
    ...
    "set e\_parameter
    ...
  ENDMETHOD.
ENDCLASS.

Good Example

The following source code corrects the above example by declaring the parameter as an input/output parameter with CHANGING according to its use.

CLASS class DEFINITION.
  PUBLIC SECTION.
    METHODS do\_something
      CHANGING c\_parameter TYPE ...
ENDCLASS.

CLASS class IMPLEMENTATION.
  METHOD do\_something.
    "evaluate c\_parameter
    ...
    "set c\_parameter
    ...
  ENDMETHOD.
ENDCLASS.


### abentype_transf_formal_para_guidl.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrobust_abap_guidl.htm) →  [Modularization units](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmodularization_unit_guidl.htm) → 

How Formal Parameters Are Passed

Background

Parameters can be passed to procedures either by reference or by value.

-   Pass by reference
    In the case of pass by reference, a reference to the actual parameter is passed to the procedure when it is called. The procedure then works with the actual parameter. No local data object is created for the actual parameter. Input parameters that are passed by reference cannot be changed in the procedure (exception: USING parameters of subroutines).

-   Pass by value
    In the case of pass by value, a type-friendly local data object is created as a copy of the actual parameter for the formal parameter. The system initializes output parameters and return values when the procedure is started. Input parameters as well as input/output parameters receive the value of the actual parameter. A changed formal parameter is only passed to the actual parameter if the procedure is completed without errors.

IMPORTING parameters that are passed by reference are protected from explicit changes within the procedure. This is not the case for the pass by value method. RETURNING parameters always require the pass by value method.

Rule

Choose a suitable pass-by type

When selecting the pass-by type, consider both speed and security:

-   Pass by value for small data sets for security reasons

-   Pass by reference for large data sets for performance reasons

Details

The pass by reference method generally has a higher performance than pass by value because no values need to be copied. This speed advantage can be noticed especially in the case of large parameters, such as internal tables or strings, or in mass data processing. In the case of small, flat parameters, the pass by value method usually does not lead to problems because the copy costs incurred are not high here. Furthermore, for strings and internal tables, sharing takes effect in the case of pass by value. Consequently, only references are passed here. The time-intensive copy process is skipped if the data objects involved are only to be read-accessed, such as in the case of EXPORTING parameters that are filled within a procedure ([method](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")), and are not modified by the calling program after the pass.

Despite the speed advantage, the pass by reference method can lead to problems due to the following aspects:

-   EXPORTING parameters that are passed by reference are not initialized automatically. Therefore, such parameters are [not supposed to be read](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenref_transf_output_param_guidl.htm "Guideline") until the first value has been assigned to them.

-   Writes performed on EXPORTING and CHANGING parameters with the pass by reference method work directly on the actual parameters. Their values are also modified if the procedure ([method](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")) is left early due to an exception.

-   IMPORTING parameters that are passed by reference change if the actual parameter changes. The actual parameter can change, for example, if it is a [global variable](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenref_transf_global_data_guidl.htm "Guideline") or a [system field](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenuse_actual_parameters_guidl.htm "Guideline").

If passing by value does not cause performance problems, that is, if small data sets are passed or sharing can be used, this method should be used for security reasons. If speed is an issue, pass by reference should be chosen. In this case, the potential risks of implementing the procedure ([method](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")) must be [considered](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenref_transf_output_param_guidl.htm "Guideline").

Example

See the example in the section about [Code Inspector](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencode_inspector_guidl.htm "Guideline"). In this example, an internal table is passed by reference due to performance reasons, while an elementary parameter is passed by value due to robustness reasons.


### abenref_transf_output_param_guidl.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrobust_abap_guidl.htm) →  [Modularization units](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmodularization_unit_guidl.htm) → 

Pass By Reference for Output Parameters

Background

When parameters are passed to a procedure by reference, this procedure directly uses the data object that has been passed as a parameter. Its value is consequently determined by the calling program of the procedure. Particular notice must be made of this behavior for EXPORTING parameters, whose value is (unlike the pass by value method) not initialized when the procedure is called. After the procedure has started, an output parameter that was passed by reference has the value of the supplied actual parameter.

Rule

Use output parameters correctly with pass by reference

Do not evaluate EXPORTING parameters that are passed by reference in a procedure ([method](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")) until a value has been explicitly assigned.

Details

The value of an output parameter that has been passed by reference is undefined from the perspective of the procedure, since cannot be evaluated within the procedure in a useful manner. Therefore, no assumptions can be made regarding the content of the parameter until the first value has been assigned to it.

If a parameter like this is an internal table or a string, a simple write is not sufficient. First, an initialization must be implemented. For example, if new rows are to be inserted in an internal table that is supposed to be produced by reference, its current content needs to be deleted first. Pass by reference means that it cannot be guaranteed that the table is actually empty when the procedure is started. The same applies to strings that are filled using concatenation operations within the procedure.

Note

If the described properties are to be exploited for writable parameters that have been passed by reference in a procedure ([method](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")), that is, a read is to be performed prior to the write or an existing dynamic data object is to be extended, the [appropriate formal parameter type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentype_formal_param_proc_guidl.htm "Guideline") must be specified, that is, input/output parameter (CHANGING parameter).

Exception

Strictly speaking, optional output parameters that have been passed by reference must be initialized only if the parameter is bound to an actual parameter when called. This can be determined using the IS SUPPLIED query. The obsolete query, IS REQUESTED, in contrast, should no longer be used.

Example

The following source code shows how an internal table that, for performance reasons, is implemented by reference is returned. For this reason, it cannot be declared as a RETURNING parameter. The tabular output parameter is explicitly initialized at the beginning of the method before new lines are inserted.

CLASS class DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS get\_some\_table
      EXPORTING e\_some\_table TYPE table\_type.
ENDCLASS.
CLASS class IMPLEMENTATION.
  METHOD get\_some\_table.
    DATA new\_line LIKE LINE OF e\_some\_table.
    CLEAR e\_some\_table.
    ...
    INSERT new\_line INTO TABLE e\_some\_table.
    ...
  ENDMETHOD.
ENDCLASS.


### abentype_formal_param_guidl.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrobust_abap_guidl.htm) →  [Modularization units](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmodularization_unit_guidl.htm) → 

Typing of Formal Parameters

Background

The typing of formal parameters can be full or generic. Formal parameters of methods must be, and formal parameters of function modules and subroutines should be, explicitly typed using the TYPE or LIKE addition. When actual parameters are bound to formal parameters, the system checks whether the data type of the actual parameter matches the typing of the formal parameter.

-   Full typing completely defines the data type of a formal parameter and applies to both dynamic access and static access to the formal parameter.

-   Generic typing does not define the data type of a formal parameter in full. Instead, the actual data type of the supplied actual parameter is used. The attributes of the actual parameter apply to dynamic access performed on formal parameters like this. The attributes defined by the typing apply to static access.

For generic typing, a set of built-in generic types is available in ABAP, which are only intended for the typing of formal parameters and field symbols. Using them in any other way can lead either to errors or to missing attributes being filled with default values. The generic types are: any, any table, c, clike, csequence, data, decfloat, hashed table, index table, n, numeric, object, simple, sorted table, standard table, table, x, and xsequence. Self-defined table types without fully specified table keys are also generic.

Rule

Be as specific as possible when typing formal parameters

Be only as generic as necessary when typing formal parameters. Fully generic types (any) should be the exception rather than the rule. When used, a formal parameter must be compliant with all possible fixed types.

Details

Absolute type security within a procedure can only be achieved using full typing. It should always be used when providing a generic service is not a defined goal. It is much easier to carry out [tests](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencorrectness_quality_guidl.htm "Guideline") for non-generic services than for generic services.

A generically typed procedure interface usually involves more implementation effort within the procedure ([method](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")) to avoid [runtime errors](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenruntime_error_dyn_proc_guidl.htm "Guideline"). Therefore, use the following principle when providing generic interfaces: as little generic typing as possible and as much generic typing as necessary. You should use specific generic types, such as numeric or csequence, instead of any or data, for example, if services are involved that are supposed to process numeric values or character strings. If csequence is used, the potential fixed types c and string must display different behavior with respect to trailing blanks or the potential numeric types in calculations for numeric must produce different [calculation types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencalculation_type_glosry.htm "Glossary Entry"). More specifically, when existing typings are generalized, it may be necessary to modify the implementation accordingly.

Generic typing can be a pitfall if you are not aware that you have used generic typing instead of full typing, because only the technical type attributes are checked when an actual parameter is connected, but no component names, for example. This can lead to different behavior than expected.

Notes

-   These statements about typing apply equally to [field symbols](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendyn_access_data_obj_guidl.htm "Guideline").

-   In typings of formal parameters with the generic type [data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_types_generic.htm), it should be noted that no [numeric functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmathematical_funktion_glosry.htm "Glossary Entry"), no [description functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendescription_function_glosry.htm "Glossary Entry"), and no [arithmetic expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") can be passed to these parameters. This restriction can be bypassed by applying the [conversion operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_operator_glosry.htm "Glossary Entry") [CONV](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_conv.htm) to the actual parameter. This restriction does not apply to the generic type any, however, which means that, if required, a typing with the generic type any is recommended.

Bad Example

The following method shows different behavior when a blank is passed as a string of the type string or as a text field of the type c.

CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main IMPORTING flag TYPE csequence.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    IF flag = abap\_false.
      ...
    ENDIF.
  ENDMETHOD.
ENDCLASS.

Good Example

Using the built-in function [condense](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencondense_functions.htm) produces the same behavior when a blank is passed, regardless of the fixed type.

CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main IMPORTING flag TYPE csequence.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    IF condense( flag ) = abap\_false.
      ...
    ENDIF.
  ENDMETHOD.
ENDCLASS.

Bad Example

The example in the following source code shows the trap you can fall into, particularly when working with table types, if the table key is not specified in full their declaration (in a program or in ABAP Dictionary). Due to the missing key specification, the table type that is used to type the formal parameter of sort\_itab is generic. While the first static sort is successful, the second SORT statement fails and triggers a runtime error. For the dynamic component specification, the attributes of the actual parameter apply to the formal parameter, and the actual parameter does not have the col2 component (this can also be tracked in the ABAP Debugger).

CLASS class DEFINITION.
  PUBLIC SECTION.
    TYPES: BEGIN OF struc,
              col1 TYPE type1,
              col2 TYPE type2,
           END OF struc,
           itab TYPE STANDARD TABLE OF struc.
    METHODS: main,
             sort\_itab CHANGING c\_itab TYPE itab.
ENDCLASS.

CLASS class IMPLEMENTATION.
  METHOD main.
    TYPES: BEGIN OF struc,
             col1 TYPE type1,
             col3 TYPE type2,
           END OF struc.
    DATA itab TYPE STANDARD TABLE OF struc
              WITH NON-UNIQUE KEY col1 col3.
              ...
     sort\_itab( CHANGING c\_itab = itab ).
  ENDMETHOD.
  METHOD sort\_itab.
     SORT c\_itab BY col1 col2.
     SORT c\_itab BY ('COL1') ('COL2'). "<- Runtime error!
  ENDMETHOD.
ENDCLASS.

Good Example

The following source code shows a very simple correction of the typing in the above example. Because the primary table key is specified in full, the type used is no longer generic, and dynamic sorts work like static sorts.

...
itab TYPE STANDARD TABLE OF struc
     WITH NON-UNIQUE KEY col1 col2.
...


### abenintern_extern_proc_call_guidl.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrobust_abap_guidl.htm) →  [Modularization units](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmodularization_unit_guidl.htm) → 

Internal and External Procedure Calls

Background

When a procedure is called, a distinction is made between internal and external procedure calls. An internal call calls a procedure of the same program, whereas an external call calls a procedure of a different program. The major difference between internal and external procedure calls is that the program might have to be loaded first for an external call. With internal calls, the program is already loaded. Possible external calls, where a program might have to be loaded, include:

-   Methods of global classes in class pools

-   Function modules in function groups

-   Subroutines in all programs that can contain subroutines (PERFORM...IN PROGRAM)

-   Methods of local classes, where the name of the class is specified dynamically using an absolute type name (\\PROGRAM= ... \\CLASS=...\\)

The programs loaded within an [internal session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_session_glosry.htm "Glossary Entry") are grouped into program groups. There is always one main program group and a number of optional additional program groups. Each program group contains a main program and possibly several additional programs (loaded due to external use). The loaded programs are not always the result of a call. The reason could also have to do with other references to components of external programs, such as a reference to a visible data type of a global class. The loaded programs are not always the result of a call. The reason could also have to do with other references to components of external programs, such as a reference to a visible data type of a global class.

If shared resources of the program group are accessed in an externally called procedure, the information about which program group the program was loaded into is very important. Whether a program creates a separate program group when loaded or whether it is loaded into an existing program group, largely depends on the program type:

-   Class pools and function groups (and external calls of global class methods or function modules) always create a new program group when loaded.

-   If subroutines or methods of local classes of other program types (not class pools and function groups) are called externally, the programs are loaded into the program group of the calling program.

Rule

Only call suitable procedures externally

Only call procedures externally that are intended for external calls. The methods of global classes and function modules are intended for external calls. Subroutines and the methods of local classes are not designed for external calls.

Details

The only procedures designed for external calls are the visible methods of global classes and function modules. The master programs of these procedures are always main programs of their program groups and the procedure always works with the resources of this program group.

However, external calls of subroutines and dynamic calls of methods in local classes of other programs are problematic. Usually, subroutines and local classes are intended for internal use within their program. External calls are not anticipated during the development phase. (On the other hand, no problems occur when an already loaded program deliberately passes a reference to an object of a local class to another program). Therefore, these subroutines and local classes should always be handled as private components of the program, even though they are technically public.

In addition, an assignment to a particular program group is not statically defined. Because the call order can depend on user actions or data contents, the program of the called procedure can belong to the main program group in one instance and can belong to an additional program group in another instance. This does not define which program group the shared resources belong to. The shared resources are:

-   Classic dynpros (including selection screens and classic lists) and GUI statuses

The classic dynpros and GUI statuses are always shared within a program group (the classic dynpros and GUI statuses of the main program in this program group). For example, the CALL SCREEN statement in an externally called procedure always calls a dynpro of the main program of the program group and not a dynpro of the master program of the procedure. The response to user actions in the dynpro (called as described above) is also handled in the main program of the program group.

-   Interface work areas

Interface work areas are defined as table work areas using the TABLES and NODES statements or using the obsolete statement DATA ... COMMON PART. They are only created once for each program group and are shared by the main program and the loaded additional programs.

Note

Except for the warning regarding dynamic calls of methods of local classes from other programs, this rule is basically intended to raise the awareness of problems when using existing programs. In new programs, the creation of new subroutines and the use of [shared resources](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_work_area_guidl.htm "Guideline") are largely obsolete anyway. The problems mentioned above can only occur if classic dynpros or selection screens (and therefore GUI statuses and table work areas) are used.

Example

The following source code demonstrates how to assign interface work areas to program groups, in the case of external subroutine calls. The table work area dbtab declared in sapssubr is shared either with sapmprog or with saplfugr. If share has the value 'FUGR', saplfugr and sapssubr share the table work area. Otherwise it is shared by sapmprog and sapssubr. It is not possible to rely on a specific assignment.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
PROGRAM sapmprog.
TABLES dbtab.
...
IF share = 'FUGR'.
  CALL FUNCTION 'FUNC'.
ENDIF.
...
PERFORM sub IN PROGRAM sapssubr.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
FUNCTION-POOL saplfugr.
TABLES dbtab.
...
FUNCTION func.
  PERFORM sub IN PROGRAM sapssubr.
ENDFUNCTION.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
PROGRAM sapssubr.
TABLES dbtab.
...
FORM sub.
  ...
ENDFORM.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*


### abenexit_procedure_guidl.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrobust_abap_guidl.htm) →  [Modularization units](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmodularization_unit_guidl.htm) → 

Exiting Procedures

Background

You can exit procedures in the usual way using the END... statement or by using one of the following statements:

-   RETURN

-   EXIT

-   CHECK log\_exp

These statements end a procedure properly, that is, the system passes output parameters for which passing by value is specified and returns values to the assigned actual parameters. In addition, you can terminate the processing of a procedure as follows, without supplying the actual parameters with values:

-   Calling another unit (program, dynpro) without returning to the procedure

-   Triggering an exception or sending a dialog message if an [error occurs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenerror_handling_guidl.htm "Guideline")

Rule

Only use RETURN to exit procedures

Use the statement RETURN to properly exit a procedure (method, see rule [no implementations in function modules and subroutines](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")) early.

Details

The statement RETURN is used to exit procedures and always has this result. The behavior of the EXIT and CHECK statements (conditional exit), in contrast, is context- dependent: Within a loop, only the loop is exited; outside a loop, the surrounding procedure is exited. This ambiguity limits the legibility of source code. Therefore, EXIT and CHECK should only be used to exit loops, and RETURN only to exit procedures. Only RETURN enables you to exit a procedure in a loop context.

Note

As well as the statements RETURN, EXIT, and CHECK specified here, the statements REJECT and STOP can be used to exit special [event blocks](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendial_mod_event_block_guidl.htm "Guideline"). Conversely, RETURN, EXIT, and CHECK can also exit processing blocks other than procedures. In both cases, you must consider the particular behavior of the ABAP runtime environment regarding the exited processing block. Because other processing blocks are only supposed to contain one method call according to the rules [use ABAP Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obj_progr_model_guidl.htm "Guideline") and [no implementations in dialog modules and event blocks](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendial_mod_event_block_guidl.htm "Guideline"), these cases should no longer occur in new programs.

Exception

An exception to the rule to only use RETURN to exit procedures are CHECK statements that are located at the beginning of a procedure and that check the prerequisites for the execution of the procedure there. Using the CHECK statement in such a way does not impair the legibility and is thus allowed. However, this exception does not apply to other positions within a procedure and outside loops.

Bad Example

The following source code shows how a method is left early with a CHECK statement, whose meaning cannot be identified by simply looking at it. You have to know that CHECK exits the procedure if the following logical expression is wrong, which is why a double negation is necessary here.

METHOD some\_method.
   ...
   CHECK is\_finished = abap\_false.
   ...
ENDMETHOD.

Good Example

The following source code corrects and simplifies the above example by implementing a conditional exit with an IF control structure that is easy to read.

METHOD some\_method.
   ...
   IF is\_finished = abap\_true.
      RETURN.
   ENDIF.
   ...
ENDMETHOD.


### abendial_mod_event_block_guidl.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrobust_abap_guidl.htm) →  [Modularization units](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmodularization_unit_guidl.htm) → 

Dialog Modules and Event Blocks

Background

Besides procedures, there are two further types of processing blocks. However, they do not have a parameter interface and do not allow declaration of local data: (AT SELECTION-SCREEN and GET are exceptions but they should not be exploited):

-   Dialog modules
    Dialog modules are introduced using the statement MODULE and ended using the statement ENDMODULE. These modules form the functional interface between classic dynpros and the associated ABAP program. They are called from within the dynpro flow logic.

-   Event blocks
    Event blocks are introduced by the corresponding keyword and implicitly ended by the next processing block. The processing of an event block is triggered by the ABAP runtime environment when the relevant event occurs. There are event blocks for:

-   Loading a program (LOAD-OF-PROGRAM)

-   Reporting events that occur during the processing of an executable program (with a logical database) (INITIALIZATION, START-OF-SELECTION, GET, END-OF-SELECTION)

-   Selection screen events (AT SELECTION-SCREEN ...)

-   List events of classic list processing (AT LINE-SELECTION, AT USER-COMMAND)

Rule

No implementations in dialog modules and event blocks

Only use dialog modules and event routines if they are necessary from a technical viewpoint. In these cases, do not implement the required function. Instead, call the relevant (local) methods.

Details

Since it is not possible to declare local data in dialog modules and event blocks, you cannot implement any useful program logic. This means that any dialog modules and event blocks (provided that they are still necessary) should only contain one method call. If you [use ABAP Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obj_progr_model_guidl.htm "Guideline") consistently, only the following elements are required:

-   LOAD-OF-PROGRAM or INITIALIZATION as the program constructor in cases where [program types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprogram_type_guidl.htm "Guideline") other than class pools are used

-   Dialog modules and AT SELECTION-SCREEN when [classic dynpros and selection screens](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenencap_class_interf_guidl.htm "Guideline") are processed

-   START-OF-SELECTION in [executable programs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprogram_type_guidl.htm "Guideline") for background processing To improve readability, you should always specify the statement explicitly (although it is optional in many situations).

-   Although possible in the syntax, you should never specify an event block more than once within a program.

Note

Using LOAD-OF-PROGRAM in a function group is basically the same as using a static constructor in a global class. In executable programs, you can use INITIALIZATION instead, if any parameters passed using SUBMIT need to be evaluated.

Example

The following source code shows the PAI modules of the function group DEMO\_CR\_CAR\_RENTAL\_SCREENS from the package SABAP\_DEMOS\_CAR\_RENTAL\_DYNPRO. The screens in this package can be called using transaction DEMO\_CR\_CAR\_RENTAL. These dialog modules adhere to the above rule. They do not contain their own implementations. They call methods of a local class of the function group.

MODULE cancel INPUT.
  screen\_handler=>cancel( ).
ENDMODULE.

MODULE user\_command\_0100 INPUT.
  screen\_handler=>user\_command\_0100( ).
ENDMODULE.

MODULE customers\_mark INPUT.
  customer\_table=>mark( ).
ENDMODULE.

MODULE reservations\_mark INPUT.
  reservation\_table=>mark( ).
ENDMODULE.


### abenmacros_guidl.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrobust_abap_guidl.htm) →  [Modularization units](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmodularization_unit_guidl.htm) → 

Macros

Background

A [macro](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_macros.htm) is a summary of a statement list for internal reuse within a program between [DEFINE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdefine.htm) and [END-OF-DEFINITION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapend-of-definition.htm). The statement list is included in another position in the program by specifying the macro name. A macro can contain up to nine placeholders, &1 to &9, in place of ABAP words and operands (or parts of operands). These placeholders must be replaced by fixed words when the macro is included.

Rule

Only use macros in exceptional cases.

We recommend that procedures ([methods](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")) or expressions with appropriate operators are used instead of macros.

Details

Macros are often used as callable units, instead of real procedures. This is rarely a good idea however. Macros do not have a real context, and cannot be executed in steps in ABAP Debugger. This makes it practically impossible to look for errors in programs that use large or complex macros. For these reasons, a macro cannot be viewed as a worthy replacement for a genuine procedure.

In addition, in the past macros were not just used to replace procedures, they were also used to perform recurrent declarations of structured data. Today, macros are, of course, avoided and [standalone types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbound_independent_dtype_guidl.htm "Guideline") are used instead.

Nowadays, expressions can be used instead of macros in many cases. One example is using the value operator [VALUE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_value.htm) to fill internal tables, which makes it unnecessary to use macros (which mostly contain the statement APPEND.

In certain cases, however, the use of macros could be justified, as long as the statement patterns are simple and recurring. Here, a macro can be seen as a design-time generation tool. The following (good) example shows how a macro can be used in this way. In a situation like this, a macro may be preferable to a procedure for the following reasons:

-   The statement list in the macro is clear and simple enough that it does not matter that it cannot be debugged.

-   The syntax check performs static checks on the correctness of the statements. When using the dynamic language methods required in a procedure, any errors (in this case, incorrect names) would not be detected until runtime. [Dynamic access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynamic_prog_technique_guidl.htm "Guideline") would also be more time-consuming.

-   Unlike listing all statements separately, using these macros makes the source code clearer, particularly if the statement list is repeated frequently. There is a lower risk of trivial typing errors being made, since there is no need to create and edit a large volume of similar source code. It is easier to make subsequent changes to the logic.

This means that, in certain cases, using macros can improve the correctness and maintainability of source code. Macros that contain non-trivial control structures, however, always present a maintenance problem because they cannot run in steps in ABAP Debugger. For this reason, use macros very sparingly and only if they contain no more than a few lines. Errors in macros are almost impossible to analyze.

Note

As well as existing in the source code of a program, macros can also be saved as cross-program macros in type groups. However, no new macros should be defined in type groups.

Bad Example

The following source code is an example where a macro is an unsuitable replacement for a genuine procedure. In this case, the macro could only be used once and in a single context, since the work area wa can only be declared once there. In this example, a procedure with dynamic components would be a better idea.

DEFINE get\_data.
  DATA wa TYPE &1.
  SELECT SINGLE \*
         FROM &1
         WHERE &2 = @&3 AND
               &4 = @&5
         INTO @wa.
END-OF-DEFINITION.

get\_data spfli carrid 'LH' connid '0400'.

Good Example

The following source code shows an example where using a macro could be a good idea. Here, a few simple statement lists (assignments enclosed in IF) are to be repeated often. The names of the operands are also very regular. This function could also be implemented using other means (such as a procedure) by using dynamic means to access the variables or by expanding every IF block. In this particular case, however, using a small macro makes the program far easier to understand and edit.

TYPES: BEGIN OF value\_and\_flag,
         value TYPE string,
         flag TYPE c LENGTH 1,
       END OF value\_and\_flag.

TYPES: BEGIN OF structure,
         component\_up TYPE value\_and\_flag,
         component\_down TYPE value\_and\_flag,
         ...
         component\_top TYPE value\_and\_flag,
       END OF structure.

DATA struct TYPE structure.

DEFINE macro\_set\_value\_if\_flag\_is\_set.
   IF struct-component\_&1-flag = abap\_true.
      struct-component\_&1-value = &2.
   ENDIF.
END-OF-DEFINITION.

...

macro\_set\_value\_if\_flag\_is\_set up 'ABC'.
macro\_set\_value\_if\_flag\_is\_set down 'IJK'.
...
macro\_set\_value\_if\_flag\_is\_set top 'XYZ'.
...
