  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Layout](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) →  [Procedures](javascript:call_link\('abenabap_language_procedures.htm'\)) →  [Function Modules](javascript:call_link\('abenabap_functions.htm'\)) →  [FUNCTION](javascript:call_link\('abapfunction.htm'\)) → 

Function Module Interface

The [parameter interface](javascript:call_link\('abenparameter_interface_glosry.htm'\) "Glossary Entry") of a function module is defined in Function Builder or in the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"). It includes the definition of interface parameters and the specification of exceptions that can be triggered by a function module. ADT uses an editor with statements in ABAP pseudo syntax and Function Builder creates comment lines automatically underneath the statement [FUNCTION](javascript:call_link\('abapfunction.htm'\)) in the source code of a function module , which represent the interface of the function module as follows:

Syntax

... *\[*IMPORTING [parameters](javascript:call_link\('abenfunction_parameters.htm'\))*\]*
    *\[*EXPORTING [parameters](javascript:call_link\('abenfunction_parameters.htm'\))*\]*
    *\[*TABLES [table\_parameters](javascript:call_link\('abaptables_parameters_obsolete.htm'\))*\]*
    *\[*CHANGING [parameters](javascript:call_link\('abenfunction_parameters.htm'\))*\]*
    *\[**{*RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...*}*
    *|**{*EXCEPTIONS exc1 exc2 ...*}**\]*

The syntax and semantics of IMPORTING, EXPORTING, CHANGING, RAISING, and EXCEPTIONS mainly correspond to the definition of method interfaces using [*\[*CLASS-*\]*METHODS](javascript:call_link\('abapmethods_general.htm'\)). The additional option of defining table parameters using [TABLES](javascript:call_link\('abaptables_parameters_obsolete.htm'\)) is obsolete.

Note

The [ABAP Development Tools](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") do not have a form-based Function Builder and the parameter interface of a function module is defined in an ABAP pseudo syntax. These statements are not compiled like genuine ABAP statements and the regular ABAP syntax checks are not applied. When a function module is generated, they are interpreted like the form-based instructions from classic Function Builder.

Interface Parameters

The interface parameters are defined in ADT in ABAP pseudo syntax and defined in Function Builder on the appropriate tabs .

-   IMPORTING parameters are input parameters. When the function module is called, a suitable actual parameter must be specified for every non-optional input parameter. The content of the actual parameter is passed to the input parameter when the call is made. The content of an input parameter for which 'pass by reference' is defined cannot be changed in the function module.

-   EXPORTING parameters are output parameters. When the function module is called, a suitable actual parameter can be specified for every output parameter. The content of an output parameter that is defined for 'pass by value' is passed to the actual parameter if the function module is completed without errors. An output parameter that is defined for pass by reference is not initialized when the function module is called.

-   TABLES parameters are [obsolete table parameters](javascript:call_link\('abaptables_parameters_obsolete.htm'\)).

-   CHANGING parameters are input and output parameters. When the function module is called, a suitable actual parameter must be specified for every non-optional input or output parameter. When the function module is called, the content of the actual parameter is passed to the input/output parameter, and when the function module is completed, the content of the input/output parameter is passed to the actual parameter.

Note

The formal parameters of a function module can be registered as [global parameters](javascript:call_link\('abenglobal_parameters_obsolete.htm'\)) in Function Builder, however this is obsolete.

Exceptions

In ADT, the exceptions of a function modules are defined in ABAP pseudo syntax or on the Exceptions tab in Function Builder . Here, exception classes can be selected to define whether [class-based exceptions](javascript:call_link\('abenclass_based_exception_glosry.htm'\) "Glossary Entry") are declared or [non-class-based exception](javascript:call_link\('abenexceptions_non_class.htm'\)) are defined. Class-based exceptions are represented in the above syntax by RAISING and non-class-based exceptions are represented by EXCEPTIONS.

-   The addition RAISING is used to declare class-based exceptions that can be propagated from the function module to the caller. Exceptions in the categories CX\_STATIC\_CHECK and CX\_DYNAMIC\_CHECK must be explicitly declared, otherwise a propagation can lead to an interface violation. A violation of the interface raises the handleable exception CX\_SY\_NO\_HANDLER. Exceptions of the category CX\_NO\_CHECK are always declared implicitly and with the addition RESUMABLE. The declaration of exceptions of the category CX\_STATIC\_CHECK is checked statically in the syntax check. For exceptions of the category CX\_DYNAMIC\_CHECK, the check is not performed until runtime. In a function module in which class-based exceptions are declared using the addition RAISING, the obsolete statement [CATCH SYSTEM-EXCEPTIONS](javascript:call_link\('abapcatch_sys.htm'\)) cannot be used to handle [catchable runtime errors](javascript:call_link\('abencatchable_runtime_error_glosry.htm'\) "Glossary Entry"). Instead, the handleable exceptions assigned to the runtime errors should be handled in a [TRY](javascript:call_link\('abaptry.htm'\)) control structure.
    The addition RESUMABLE declares an exception that can be propagated as a [resumable exception](javascript:call_link\('abenresumable_exception_glosry.htm'\) "Glossary Entry"). This addition has no relevance to a non-resumable exception. The addition does not have any effect on a non-resumable exception. If a resumable exception is propagated in RAISING and the addition RESUMABLE is not specified, it thus becomes non-resumable. If a superclass is declared as resumable, any subclasses must also be declared as resumable.

-   The addition EXCEPTIONS is used to define a list of non-class-based exceptions that can be raised in the function module using the statements [RAISE](javascript:call_link\('abapraise_exception.htm'\)) or [MESSAGE RAISING](javascript:call_link\('abapmessage_raising.htm'\)). Exceptions defined in this way are (as with formal parameters) bound to the function module and cannot be propagated. If an exception of this type is raised in a function module, and no return value was assigned to it with the identically named addition EXCEPTIONS of the statement [CALL FUNCTION](javascript:call_link\('abapcall_function.htm'\)) when the call was made, a runtime error is produced. In a function module in whose interface non-class-based exceptions are defined, the statement [RAISE EXCEPTION](javascript:call_link\('abapraise_exception_class.htm'\)) or the addition [THROW](javascript:call_link\('abenconditional_expression_result.htm'\)) in a [conditional expression](javascript:call_link\('abenconditional_expressions.htm'\)) cannot be used to raise class-based exceptions.

The Resumable column in Function Builder can be selected to flag a class-based exception as a [resumable exception](javascript:call_link\('abenresumable_exception_glosry.htm'\) "Glossary Entry"). This places the addition RESUMABLE behind RAISING in the syntax above.

Notes

-   For new developments, SAP recommends that you work with class-based exceptions that are independent of the function module.

-   See also [Class-Based Exceptions in Procedures](javascript:call_link\('abenexceptions_procedures.htm'\)).

Example

Comment lines generated by Function Builder for various categories of actual parameters and a class-based resumable exception of a function module.

\*"----------------------------------------------------------------------
\*"\*"Local Interface:
\*"  IMPORTING
\*"     REFERENCE(P1) TYPE  I
\*"     REFERENCE(P2) TYPE  I OPTIONAL
\*"     REFERENCE(P3) TYPE  I DEFAULT 100
\*"  EXPORTING
\*"     REFERENCE(P4) TYPE  SCARR
\*"  CHANGING
\*"     VALUE(P5)     TYPE  SPFLI OPTIONAL
\*"  RAISING
\*"     RESUMABLE(CX\_NO\_FLIGHTS)
\*"----------------------------------------------------------------------

Continue
[Properties of Interface Parameters](javascript:call_link\('abenfunction_parameters.htm'\))