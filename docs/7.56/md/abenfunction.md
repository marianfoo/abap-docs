---
title: "Function Module Interface"
description: |
  The parameter interface(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenparameter_interface_glosry.htm 'Glossary Entry') of a function module is defined in the Function Builder or in the ABAP Development Tools (ADT)(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenad
version: "7.56"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunction.htm"
abapFile: "abenfunction.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "types", "abenfunction"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_modularization.htm) →  [Procedures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_procedures.htm) →  [Function Modules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_functions.htm) →  [FUNCTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfunction.htm) → 

Function Module Interface

The [parameter interface](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenparameter_interface_glosry.htm "Glossary Entry") of a function module is defined in the Function Builder or in the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenadt_glosry.htm "Glossary Entry"). It comprises the definition of interface parameters and the specification of exceptions that can be raised by a function module. ADT uses an editor with statements in ABAP pseudo syntax and the Function Builder automatically creates comment lines below the statement [FUNCTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfunction.htm) in the source code of a function module , which represent the interface of the function module as follows:

Syntax

... *\[*IMPORTING [parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunction_parameters.htm)*\]*
    *\[*EXPORTING [parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunction_parameters.htm)*\]*
    *\[*TABLES [table\_parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptables_parameters_obsolete.htm)*\]*
    *\[*CHANGING [parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunction_parameters.htm)*\]*
    *\[**{*RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...*}*
    *|**{*EXCEPTIONS exc1 exc2 ...*}**\]*

The syntax and semantics of IMPORTING, EXPORTING, CHANGING, RAISING, and EXCEPTIONS mainly correspond to the definition of method interfaces with [*\[*CLASS-*\]*METHODS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_general.htm). The additional option of defining table parameters using [TABLES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptables_parameters_obsolete.htm) is obsolete.

Hint

In the [ABAP Development Tools](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenadt_glosry.htm "Glossary Entry"), in which there is no form-based Function Builder, the parameter interface of a function module is defined in ABAP pseudo syntax. These statements are not compiled like genuine ABAP statements and are not subject to the regular ABAP syntax checks. They are interpreted like the form-based instructions of the classic Function Builder when a function module is generated.

Interface Parameters

The interface parameters are defined in the ADT in ABAP pseudo syntax and in the Function Builder on the corresponding tab pages .

-   IMPORTING parameters are input parameters. When the function module is called, a suitable actual parameter must be specified for each non-optional input parameter. The content of the actual parameter is passed to the input parameter when it is called. The content of an input parameter for which 'pass by reference' is defined cannot be changed in the function module.
-   EXPORTING parameters are output parameters. When the function module is called, a suitable actual parameter can be specified for each output parameter. The content of an output parameter that is defined for 'pass by value' is passed to the actual parameter if the function module is completed without errors. An output parameter that is defined for pass by reference is not initialized when the function module is called.
-   TABLES parameters are [obsolete table parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptables_parameters_obsolete.htm).
-   CHANGING parameters are input and output parameters. When the function module is called, a suitable actual parameter must be specified for each non-optional input or output parameter. The content of the actual parameter is passed to the input/output parameter when the parameter is called, and the content of the input/output parameter is passed to the actual parameter when the function module is completed.

Hint

The formal parameters of a function module can be registered as [global parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenglobal_parameters_obsolete.htm) in the Function Builder. However, this is obsolete.

Exceptions

The exceptions of a function module are defined in the ADT in ABAP pseudo syntax or on the Exceptions tab in the Function Builder . When exception classes are selected, it is specified whether it is a declaration of a [class-based exception](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclass_based_exception_glosry.htm "Glossary Entry") or a [non-class-based exception](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexceptions_non_class.htm). Class-based exceptions are represented in the above syntax by RAISING and non-class-based exceptions are represented by EXCEPTIONS.

-   The addition RAISING is used to declare class-based exceptions that can be propagated from the function module to the caller. Exceptions of the categories CX\_STATIC\_CHECK and CX\_DYNAMIC\_CHECK must be declared explicitly, otherwise a propagation leads to an interface violation. A violation of the interface raises the catchable exception CX\_SY\_NO\_HANDLER. Exceptions of the category CX\_NO\_CHECK are always declared implicitly with the addition RESUMABLE, but they can also be declared explicitly. The declaration of exceptions of the category CX\_STATIC\_CHECK is checked statically during syntax check. For exceptions of the category CX\_DYNAMIC\_CHECK, the check is not performed until runtime. For exceptions of the category CX\_NO\_CHECK no check is performed. In a function module in which class-based exceptions are declared using the addition RAISING, the obsolete statement [CATCH SYSTEM-EXCEPTIONS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcatch_sys.htm) cannot be used to handle [catchable runtime errors](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencatchable_runtime_error_glosry.htm "Glossary Entry"). Instead, the catchable exceptions assigned to the runtime errors are intended to be handled in a [TRY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptry.htm) control structure.
    
    The addition RESUMABLE declares an exception so that it can be propagated as a [resumable exception](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenresumable_exception_glosry.htm "Glossary Entry"), which is then also propagated as such. The addition has no effect on a non-resumable exception. If a resumable exception is propagated in RAISING without the additionRESUMABLE, it becomes non-resumable. If a superclass is declared as resumable, all of the simultaneously listed subclasses must also be declared as resumable.
    
-   The addition EXCEPTIONS is used to define a list of non-class-based exceptions that can be raised in the function module using the statements [RAISE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapraise_exception.htm) or [MESSAGE RAISING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmessage_raising.htm). Exceptions defined in this way are bound to the function module, similarly to formal parameters, and cannot be propagated. If such an exception is raised in a function module, and no return value was assigned to it with the identically named addition EXCEPTIONS of the statement [CALL FUNCTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_function.htm) during the call, a runtime error occurs. In a function module in whose interface non-class-based exceptions are defined, the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapraise_exception_class.htm) or the addition [THROW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconditional_expression_result.htm) in a [conditional expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconditional_expressions.htm) cannot be used to raise class-based exceptions.

For class-based exceptions, the Resumable column can be selected in the Function Builder to mark a class-based exception as a [resumable exception](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenresumable_exception_glosry.htm "Glossary Entry"). This places the addition RESUMABLE behind RAISING in the syntax above.

Hints

-   For new developments, SAP recommends working with class-based exceptions that are independent of the concrete function module.
-   See also [Class-Based Exceptions in Procedures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexceptions_procedures.htm).

Example

Comment lines generated by the tools for different types of actual parameters and a class-based resumable exception of a function module.

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
[Properties of Interface Parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunction_parameters.htm)