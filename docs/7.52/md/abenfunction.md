  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_modularization.htm) →  [Procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_procedures.htm) →  [Function Modules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_functions.htm) →  [FUNCTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfunction.htm) → 

Function Module Interface

The [parameter interface](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenparameter_interface_glosry.htm "Glossary Entry") of a function module is defined in Function Builder. It defines interface parameters and specifies exceptions that can be raised by a function module. Function Builder creates comment lines below the statement [FUNCTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfunction.htm) automatically in the source code of the function module. These represent the interface of the function module with the following syntax:

Syntax

... *\[*IMPORTING [parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunction_parameters.htm)*\]*
    *\[*EXPORTING [parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunction_parameters.htm)*\]*
    *\[*TABLES [table\_parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptables_parameters_obsolete.htm)*\]*
    *\[*CHANGING [parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunction_parameters.htm)*\]*
    *\[**{*RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...*}*
    *|**{*EXCEPTIONS exc1 exc2 ...*}**\]*

The syntax and semantics of IMPORTING, EXPORTING, CHANGING, RAISING, and EXCEPTIONS mainly correspond to the definition of method interfaces using [*\[*CLASS-*\]*METHODS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethods_general.htm). The additional option of defining table parameters using [TABLES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptables_parameters_obsolete.htm) is obsolete.

Note

The [ABAP Development Tools](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenadt_glosry.htm "Glossary Entry") do not have a form-based Function Builder and the parameter interface of a function module is defined in an ABAP pseudo syntax. These statements are not compiled like genuine ABAP statements and the regular ABAP syntax checks are not applied. When a function module is generated, they are interpreted like the form-based instructions from classic Function Builder.

Interface Parameters

The interface parameters are defined on the relevant tab pages in Function Builder.

-   IMPORTING parameters are input parameters. When the function module is called, a suitable actual parameter must be specified for every non-optional input parameter. The content of the actual parameter is passed to the input parameter when the call is made. The content of an input parameter for which 'pass by reference' is defined cannot be changed in the function module.

-   EXPORTING parameters are output parameters. When the function module is called, a suitable actual parameter can be specified for every output parameter. The content of an output parameter that is defined for 'pass by value' is passed to the actual parameter if the function module is completed without errors. An output parameter that is defined for pass by reference is not initialized when the function module is called.

-   TABLES parameters are [obsolete table parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptables_parameters_obsolete.htm).

-   CHANGING parameters are input and output parameters. When the function module is called, a suitable actual parameter must be specified for every non-optional input or output parameter. When the function module is called, the content of the actual parameter is passed to the input/output parameter, and when the function module is completed, the content of the input/output parameter is passed to the actual parameter.

Note

The formal parameters of a function module can be registered as [global parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenglobal_parameters_obsolete.htm) in Function Builder, however this is obsolete.

Exceptions

The exceptions of a function module are defined on the Exceptions tab page in Function Builder. Here, exception classes can be selected to define whether [class-based exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_based_exception_glosry.htm "Glossary Entry") are declared or [non-class-based exception](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexceptions_non_class.htm) are defined. Class-based exceptions are represented in the above syntax by RAISING and non-class-based exceptions are represented by EXCEPTIONS.

-   The addition RAISING is used to declare class-based exceptions that can be propagated from the function module to the caller. Exceptions in the categories CX\_STATIC\_CHECK and CX\_DYNAMIC\_CHECK must be declared explicitly, to prevent propagations from violating the interface. Violations of the interface raise the handleable exception CX\_SY\_NO\_HANDLER. Exceptions of the category CX\_NO\_CHECK are always declared implicitly and with the addition RESUMABLE. Declarations of exceptions of the category CX\_STATIC\_CHECK are checked statically in the syntax check. For exceptions of the category CX\_DYNAMIC\_CHECK, the check is not performed until runtime. In a function module in which class-based exceptions are declared using the addition RAISING, the obsolete statement [CATCH SYSTEM-EXCEPTIONS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcatch_sys.htm) cannot be used to handle [catchable runtime errors](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencatchable_runtime_error_glosry.htm "Glossary Entry"). Instead, the handleable exceptions assigned to the runtime errors should be handled in a [TRY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptry.htm) control structure.
    The addition RESUMABLE declares an exception that can be propagated as a [resumable exception](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenresumable_exception_glosry.htm "Glossary Entry"). This addition has no relevance to a non-resumable exception. The addition does not have any effect on a non-resumable exception. If a resumable exception is propagated with RAISING without the addition RESUMABLE, it becomes non-resumable. If a superclass is declared as resumable, any subclasses must also be declared as resumable.

-   The addition EXCEPTIONS is used to define a list of non-class-based exceptions that can be raised in the function module using the statements [RAISE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapraise_exception.htm) or [MESSAGE RAISING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmessage_raising.htm). Exceptions defined in this way are (as with formal parameters) bound to the function module and cannot be propagated. If an exception of this type is raised in a function module, and no return value was assigned to it with the identically named addition EXCEPTIONS of the statement [CALL FUNCTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_function.htm) when the call was made, a runtime error is produced. In a function module in whose interface non-class-based exceptions are defined, the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapraise_exception_class.htm) or the addition [THROW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconditional_expression_result.htm) in a [conditional expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconditional_expressions.htm) cannot be used to raise class-based exceptions.

The Resumable column in Function Builder can be selected to flag a class-based exception as a [resumable exception](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenresumable_exception_glosry.htm "Glossary Entry"). This places the addition RESUMABLE behind RAISING in the syntax above.

Notes

-   For new developments, SAP recommends working with class-based exceptions that are independent of the function module.

-   See also [Class-Based Exceptions in Procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexceptions_procedures.htm).

Example

Comment lines generated by Function Builder for various categories of actual parameters and a class-based resumable exception of a function module.

\*"----------------------------------------------------------------------
\*"\*"Local Interface:
\*"       IMPORTING
\*"     REFERENCE(P1) TYPE  I
\*"     REFERENCE(P2) TYPE  I OPTIONAL
\*"     REFERENCE(P3) TYPE  I DEFAULT 100
\*"       EXPORTING
\*"     REFERENCE(P4) TYPE  SCARR
\*"  CHANGING
\*"     VALUE(P5)     TYPE  SPFLI OPTIONAL
\*"  RAISING
\*"     RESUMABLE(CX\_NO\_FLIGHTS)
\*"----------------------------------------------------------------------

Continue
[Properties of Interface Parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunction_parameters.htm)