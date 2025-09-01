# ABAP - Keyword Documentation / ABAP - Programming Language / Program Structure / Modularization Statements / Procedures / Function Modules

Included pages: 7


### abenabap_functions.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_modularization.htm) →  [Procedures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_procedures.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Function%20Modules%2C%20ABENABAP_FUNCTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Function Modules

Function modules are reusable cross-program [procedures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprocedure_glosry.htm "Glossary Entry") that are organized into [function pools](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction_pool_glosry.htm "Glossary Entry") and whose functionality is implemented between the following statements:

[FUNCTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfunction.htm)
  ...
[ENDFUNCTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapendfunction.htm)

Function modules and their [interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction.htm) are created in the [Function Builder](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction_builder_glosry.htm "Glossary Entry") in the ABAP Workbench or in the [ABAP development tools for Eclipse (ADT)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry").

Hint

Function modules in function pools are the predecessor technology of public [methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmethod_glosry.htm "Glossary Entry") in global classes.

Continue
[FUNCTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfunction.htm)
[ENDFUNCTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapendfunction.htm)


### abapfunction.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_modularization.htm) →  [Procedures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_procedures.htm) →  [Function Modules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_functions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20FUNCTION%2C%20ABAPFUNCTION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

FUNCTION

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfunction_shortref.htm)

Syntax

FUNCTION func.
\*"---------------------------------------------------------
\*" Local Interface:
\*" [parameter\_interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction.htm)
\*"---------------------------------------------------------
  ...
ENDFUNCTION.

Effect

Between the statements FUNCTION and ENDFUNCTION, the functionality of a [function module](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction_module_glosry.htm "Glossary Entry") func is implemented in a function pool. The function module and its interface are defined in the [ABAP development tools for Eclipse](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry") or in the [Function Builder](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction_builder_glosry.htm "Glossary Entry") tool. The function module interface defined in the Function Builder is automatically displayed in comment lines below the statement FUNCTION as [parameter\_interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction.htm).

Within the function module, local data types and data objects can be declared. There is also access to the formal parameters of the function module and to the global data types and data objects of the function pool. A function module is called using the statement [CALL FUNCTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function.htm).

Hint

The [predicate expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicate_expression_glosry.htm "Glossary Entry") [IS SUPPLIED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_supplied.htm) can be used in the function module to determine whether an actual parameter has been specified for when a formal parameter is called.

Example

Implements a function module that reads data in a table-like formal parameter flight\_tab under the condition of an elementary formal parameter id. The [parameter interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction.htm) defined in Function Builder is visible as a comment.

FUNCTION read\_spfli\_into\_table.
\*"---------------------------------------------------------
\*" Local Interface:
\*"       IMPORTING
\*"             VALUE(ID) LIKE  SPFLI-CARRID DEFAULT 'LH '
\*"       EXPORTING
\*"             FLIGHT\_TAB TYPE  SPFLI\_TAB
\*"---------------------------------------------------------
  SELECT \*
         FROM spfli
         WHERE carrid = @id
         INTO TABLE @flight\_tab.
ENDFUNCTION.

Continue
[Function Module Interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction.htm)


### abenfunction.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_modularization.htm) →  [Procedures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_procedures.htm) →  [Function Modules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_functions.htm) →  [FUNCTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfunction.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Function%20Module%20Interface%2C%20ABENFUNCTION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Function Module Interface

The [parameter interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenparameter_interface_glosry.htm "Glossary Entry") of a function module is defined in the Function Builder or in the [ABAP development tools for Eclipse (ADT)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry"). It comprises the definition of interface parameters and the specification of exceptions that can be raised by a function module. ADT uses an editor with statements in ABAP pseudo syntax and the Function Builder automatically creates comment lines below the statement [FUNCTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfunction.htm) in the source code of a function module, which represent the interface of the function module as follows:

Syntax

... *\[*IMPORTING [parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction_parameters.htm)*\]*
    *\[*EXPORTING [parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction_parameters.htm)*\]*
    *\[*TABLES [table\_parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptables_parameters_obsolete.htm)*\]*
    *\[*CHANGING [parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction_parameters.htm)*\]*
    *\[**{*RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...*}*
    *|**{*EXCEPTIONS exc1 exc2 ...*}**\]*

The syntax and semantics of IMPORTING, EXPORTING, CHANGING, RAISING, and EXCEPTIONS mainly correspond to the definition of method interfaces with [*\[*CLASS-*\]*METHODS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm). The additional option of defining table parameters using [TABLES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptables_parameters_obsolete.htm) is obsolete.

Hint

In the [ABAP development tools for Eclipse](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry") the parameter interface of a function module is defined in ABAP pseudo syntax. These statements are not compiled like genuine ABAP statements and are not subject to the regular ABAP syntax checks.

They are interpreted like the form-based instructions of the classic Function Builder when a function module is generated.

Interface Parameters   

The interface parameters are defined in the ADT in ABAP pseudo syntax and in the Function Builder on the corresponding tab pages.

-   IMPORTING parameters are input parameters. When the function module is called, a suitable actual parameter must be specified for each non-optional input parameter. The content of the actual parameter is passed to the input parameter when it is called. The content of an input parameter for which 'pass by reference' is defined cannot be changed in the function module.
-   EXPORTING parameters are output parameters. When the function module is called, a suitable actual parameter can be specified for each output parameter. The content of an output parameter that is defined for 'pass by value' is passed to the actual parameter if the function module is completed without errors. An output parameter that is defined for pass by reference is not initialized when the function module is called.
-   TABLES parameters are [obsolete table parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptables_parameters_obsolete.htm).
-   CHANGING parameters are input and output parameters. When the function module is called, a suitable actual parameter must be specified for each non-optional input or output parameter. The content of the actual parameter is passed to the input/output parameter when the parameter is called, and the content of the input/output parameter is passed to the actual parameter when the function module is completed.

Hint

The formal parameters of a function module can be registered as [global parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenglobal_parameters_obsolete.htm) in the Function Builder. However, this is obsolete.

Exceptions   

The exceptions of a function module are defined in the ADT in ABAP pseudo syntax or on the Exceptions tab in the Function Builder. When exception classes are selected, it is specified whether it is a declaration of a [class-based exception](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_based_exception_glosry.htm "Glossary Entry") or a [non-class-based exception](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexceptions_non_class.htm). Class-based exceptions are represented in the above syntax by RAISING and non-class-based exceptions are represented by EXCEPTIONS.

-   The addition RAISING is used to declare class-based exceptions that can be propagated from the function module to the caller. Exceptions of the categories CX\_STATIC\_CHECK and CX\_DYNAMIC\_CHECK must be declared explicitly, otherwise a propagation leads to an interface violation. A violation of the interface raises the catchable exception CX\_SY\_NO\_HANDLER. Exceptions of the category CX\_NO\_CHECK are always declared implicitly with the addition RESUMABLE, but they can also be declared explicitly. The declaration of exceptions of the category CX\_STATIC\_CHECK is checked statically during syntax check. For exceptions of the category CX\_DYNAMIC\_CHECK, the check is not performed until runtime. For exceptions of the category CX\_NO\_CHECK no check is performed. In a function module in which class-based exceptions are declared using the addition RAISING, the obsolete statement [CATCH SYSTEM-EXCEPTIONS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcatch_sys.htm) cannot be used to handle [catchable runtime errors](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencatchable_runtime_error_glosry.htm "Glossary Entry"). Instead, the catchable exceptions assigned to the runtime errors are intended to be handled in a [TRY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptry.htm) control structure.
    
    The addition RESUMABLE declares an exception so that it can be propagated as a [resumable exception](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenresumable_exception_glosry.htm "Glossary Entry"), which is then also propagated as such. The addition has no effect on a non-resumable exception. If a resumable exception is propagated in RAISING without the additionRESUMABLE, it becomes non-resumable. If a superclass is declared as resumable, all of the simultaneously listed subclasses must also be declared as resumable.
    
-   The addition EXCEPTIONS is used to define a list of non-class-based exceptions that can be raised in the function module using the statements [RAISE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception.htm) or [MESSAGE RAISING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmessage_raising.htm). Exceptions defined in this way are bound to the function module, similarly to formal parameters, and cannot be propagated. If such an exception is raised in a function module, and no return value was assigned to it with the identically named addition EXCEPTIONS of the statement [CALL FUNCTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function.htm) during the call, a runtime error occurs. In a function module in whose interface non-class-based exceptions are defined, the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception_class.htm) or the addition [THROW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expression_result.htm) in a [conditional expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expressions.htm) cannot be used to raise class-based exceptions.

For class-based exceptions, the Resumable column can be selected in the Function Builder to mark a class-based exception as a [resumable exception](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenresumable_exception_glosry.htm "Glossary Entry"). This places the addition RESUMABLE behind RAISING in the syntax above.

Programming Guideline

[Using Class-Based Exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_exception_guidl.htm "Guideline")

For new developments, it is recommended that class-based exceptions that are independent of individual function modules are used.

Hint

See also [Class-Based Exceptions in Procedures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexceptions_procedures.htm).

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
[Properties of Interface Parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction_parameters.htm)


### abenfunction_parameters.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_modularization.htm) →  [Procedures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_procedures.htm) →  [Function Modules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_functions.htm) →  [FUNCTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfunction.htm) →  [Function Module Interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Properties%20of%20Interface%20Parameters%2C%20ABENFUNCTION_PARAMETERS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Properties of Interface Parameters

When an interface parameter p1, p2... is defined in the Function Builder, its properties are determined that are reflected in the syntax of parameters and [table\_parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptables_parameters_obsolete.htm).

Syntax

... *{* VALUE(p1) *|* REFERENCE(p1) *}*
         *\[* *{*TYPE *\[*REF TO*\]* type*}* *|* [like\_structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfunction_typing_obsolete.htm)
           *\[*OPTIONAL*|**{*DEFAULT def1*}**\]* *\]*
    *{* VALUE(p2) *|* REFERENCE(p2) *}*
         *\[* *{*TYPE *\[*REF TO*\]* type*}* *|* [like\_structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfunction_typing_obsolete.htm)
           *\[*OPTIONAL*|**{*DEFAULT def2*}**\]* *\]*
    ...

The syntax and semantics of VALUE, TYPE, OPTIONAL, and DEFAULT are mainly the same as in the definition of method interfaces with [*\[*CLASS-*\]*METHODS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_parameters.htm). In addition, there is also the obsolete option [like\_structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfunction_typing_obsolete.htm), which uses LIKE or STRUCTURE to type interface parameters.

Type of Parameter Passing   

There are two types of pass by parameters: [pass by reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpass_by_reference_glosry.htm "Glossary Entry") and [pass by value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpass_by_value_glosry.htm "Glossary Entry"). Pass by value is selected in the Function Builder by selecting pass by value and differs from pass by reference in the above syntax, which is indicated by REFERENCE( ), by the specification of VALUE( ). If only one name p1 p2 ... is specified, the parameter is passed by reference by default.

-   In pass by reference, the formal parameter points directly to the actual parameter, so that changes to the formal parameters have an immediate effect on the actual parameter.
-   In pass by value, the formal parameter is created as a copy of the actual parameter (in IMPORTING and CHANGING parameters) or as an initial parameter (in EXPORTING parameters) on the stack when the function module is called and for CHANGING and EXPORTING parameters, the formal parameter is copied to the actual parameter when returning from the function module.

Note the following for the different types of parameter:

-   In IMPORTING, EXPORTING, and CHANGING parameters, pass by reference and pass by value are possible; for [TABLES parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptables_parameters_obsolete.htm), only pass by reference is possible.
-   IMPORTING parameters passed by reference must not be overwritten in the function module.
-   An EXPORTING parameter passed by reference behaves like a CHANGING parameter, that is, EXPORTING parameters passed by reference are not initialized when the function module is called. Therefore, no read access to these parameters should take place before the first write access. In addition, care must be taken when adding content to such parameters as, for example, when inserting lines into internal tables.

Hint

The time the function module was last edited specifies whether a parameter passed by reference is shown with or without REFERENCE( ). REFERENCE( ) is shown for function modules that have been modified since ABAP release 7.31.

Typing of Interface Parameters   

The parameter interface of a function module is public throughout the system. Interface parameters can therefore only be typed with reference to data types from the ABAP Dictionary or from the public visibility section of global classes. Interface parameters can be typed using TYPE, TYPE REF TO or [LIKE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfunction_typing_obsolete.htm).

Typing with TYPE *\[*REF TO*\]* is the only recommended typing for interface parameters of function modules. It takes place when TYPE or TYPE REF TO is used in the Function Builder. For IMPORTING, EXPORTING, and CHANGING parameters, any [built-in ABAP type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_types.htm) (complete or generic), or any data type of the ABAP Dictionary or from the public visibility section of a global class can be specified after TYPE. After TYPE REF TO, the generic data type [data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_types_generic.htm), a non-generic data type, or an [object type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobject_type_glosry.htm "Glossary Entry") can be specified, and the interface parameter is typed as a [reference variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreference_variable_glosry.htm "Glossary Entry"). The [typing check](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentyping_check.htm) is performed in the same way as for methods.

Hint

Without an explicit typing, a formal parameter is typed implicitly with the fully generic type any.

Optional Parameters   

IMPORTING, CHANGING, and [TABLES parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptables_parameters_obsolete.htm) can be made optional by using optional in the Function Builder. EXPORTING parameters are always optional. IMPORTING and CHANGING parameters can be assigned a replacement parameter (default value in the Function Builder). In the above syntax, this is expressed using the additions OPTIONAL or DEFAULT. For an optional parameter, no actual parameter must be specified when the function module is called. While a formal parameter with the addition OPTIONAL is then initialized as a type-compliant parameter, a formal parameter with the addition DEFAULT assumes the value and type of the replacement parameter def1 def2 ...

If no actual parameter is specified for a generically typed formal parameter with the addition OPTIONAL when it is called, the type of the formal parameter is completed according to [fixed rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentyping_generic.htm).

Hint

Within a function module, the [predicate expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicate_expression_glosry.htm "Glossary Entry") [IS SUPPLIED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_supplied.htm) can be used to check whether an optional formal parameter was assigned an actual parameter when it was called.


### abenfunction.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_modularization.htm) →  [Procedures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_procedures.htm) →  [Function Modules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_functions.htm) →  [FUNCTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfunction.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Function%20Module%20Interface%2C%20ABENFUNCTION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Function Module Interface

The [parameter interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenparameter_interface_glosry.htm "Glossary Entry") of a function module is defined in the Function Builder or in the [ABAP development tools for Eclipse (ADT)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry"). It comprises the definition of interface parameters and the specification of exceptions that can be raised by a function module. ADT uses an editor with statements in ABAP pseudo syntax and the Function Builder automatically creates comment lines below the statement [FUNCTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfunction.htm) in the source code of a function module, which represent the interface of the function module as follows:

Syntax

... *\[*IMPORTING [parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction_parameters.htm)*\]*
    *\[*EXPORTING [parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction_parameters.htm)*\]*
    *\[*TABLES [table\_parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptables_parameters_obsolete.htm)*\]*
    *\[*CHANGING [parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction_parameters.htm)*\]*
    *\[**{*RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...*}*
    *|**{*EXCEPTIONS exc1 exc2 ...*}**\]*

The syntax and semantics of IMPORTING, EXPORTING, CHANGING, RAISING, and EXCEPTIONS mainly correspond to the definition of method interfaces with [*\[*CLASS-*\]*METHODS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm). The additional option of defining table parameters using [TABLES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptables_parameters_obsolete.htm) is obsolete.

Hint

In the [ABAP development tools for Eclipse](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry") the parameter interface of a function module is defined in ABAP pseudo syntax. These statements are not compiled like genuine ABAP statements and are not subject to the regular ABAP syntax checks.

They are interpreted like the form-based instructions of the classic Function Builder when a function module is generated.

Interface Parameters   

The interface parameters are defined in the ADT in ABAP pseudo syntax and in the Function Builder on the corresponding tab pages.

-   IMPORTING parameters are input parameters. When the function module is called, a suitable actual parameter must be specified for each non-optional input parameter. The content of the actual parameter is passed to the input parameter when it is called. The content of an input parameter for which 'pass by reference' is defined cannot be changed in the function module.
-   EXPORTING parameters are output parameters. When the function module is called, a suitable actual parameter can be specified for each output parameter. The content of an output parameter that is defined for 'pass by value' is passed to the actual parameter if the function module is completed without errors. An output parameter that is defined for pass by reference is not initialized when the function module is called.
-   TABLES parameters are [obsolete table parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptables_parameters_obsolete.htm).
-   CHANGING parameters are input and output parameters. When the function module is called, a suitable actual parameter must be specified for each non-optional input or output parameter. The content of the actual parameter is passed to the input/output parameter when the parameter is called, and the content of the input/output parameter is passed to the actual parameter when the function module is completed.

Hint

The formal parameters of a function module can be registered as [global parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenglobal_parameters_obsolete.htm) in the Function Builder. However, this is obsolete.

Exceptions   

The exceptions of a function module are defined in the ADT in ABAP pseudo syntax or on the Exceptions tab in the Function Builder. When exception classes are selected, it is specified whether it is a declaration of a [class-based exception](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_based_exception_glosry.htm "Glossary Entry") or a [non-class-based exception](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexceptions_non_class.htm). Class-based exceptions are represented in the above syntax by RAISING and non-class-based exceptions are represented by EXCEPTIONS.

-   The addition RAISING is used to declare class-based exceptions that can be propagated from the function module to the caller. Exceptions of the categories CX\_STATIC\_CHECK and CX\_DYNAMIC\_CHECK must be declared explicitly, otherwise a propagation leads to an interface violation. A violation of the interface raises the catchable exception CX\_SY\_NO\_HANDLER. Exceptions of the category CX\_NO\_CHECK are always declared implicitly with the addition RESUMABLE, but they can also be declared explicitly. The declaration of exceptions of the category CX\_STATIC\_CHECK is checked statically during syntax check. For exceptions of the category CX\_DYNAMIC\_CHECK, the check is not performed until runtime. For exceptions of the category CX\_NO\_CHECK no check is performed. In a function module in which class-based exceptions are declared using the addition RAISING, the obsolete statement [CATCH SYSTEM-EXCEPTIONS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcatch_sys.htm) cannot be used to handle [catchable runtime errors](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencatchable_runtime_error_glosry.htm "Glossary Entry"). Instead, the catchable exceptions assigned to the runtime errors are intended to be handled in a [TRY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptry.htm) control structure.
    
    The addition RESUMABLE declares an exception so that it can be propagated as a [resumable exception](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenresumable_exception_glosry.htm "Glossary Entry"), which is then also propagated as such. The addition has no effect on a non-resumable exception. If a resumable exception is propagated in RAISING without the additionRESUMABLE, it becomes non-resumable. If a superclass is declared as resumable, all of the simultaneously listed subclasses must also be declared as resumable.
    
-   The addition EXCEPTIONS is used to define a list of non-class-based exceptions that can be raised in the function module using the statements [RAISE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception.htm) or [MESSAGE RAISING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmessage_raising.htm). Exceptions defined in this way are bound to the function module, similarly to formal parameters, and cannot be propagated. If such an exception is raised in a function module, and no return value was assigned to it with the identically named addition EXCEPTIONS of the statement [CALL FUNCTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function.htm) during the call, a runtime error occurs. In a function module in whose interface non-class-based exceptions are defined, the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception_class.htm) or the addition [THROW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expression_result.htm) in a [conditional expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expressions.htm) cannot be used to raise class-based exceptions.

For class-based exceptions, the Resumable column can be selected in the Function Builder to mark a class-based exception as a [resumable exception](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenresumable_exception_glosry.htm "Glossary Entry"). This places the addition RESUMABLE behind RAISING in the syntax above.

Programming Guideline

[Using Class-Based Exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_exception_guidl.htm "Guideline")

For new developments, it is recommended that class-based exceptions that are independent of individual function modules are used.

Hint

See also [Class-Based Exceptions in Procedures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexceptions_procedures.htm).

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
[Properties of Interface Parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction_parameters.htm)


### abapfunction.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_modularization.htm) →  [Procedures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_procedures.htm) →  [Function Modules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_functions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20FUNCTION%2C%20ABAPFUNCTION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

FUNCTION

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfunction_shortref.htm)

Syntax

FUNCTION func.
\*"---------------------------------------------------------
\*" Local Interface:
\*" [parameter\_interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction.htm)
\*"---------------------------------------------------------
  ...
ENDFUNCTION.

Effect

Between the statements FUNCTION and ENDFUNCTION, the functionality of a [function module](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction_module_glosry.htm "Glossary Entry") func is implemented in a function pool. The function module and its interface are defined in the [ABAP development tools for Eclipse](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry") or in the [Function Builder](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction_builder_glosry.htm "Glossary Entry") tool. The function module interface defined in the Function Builder is automatically displayed in comment lines below the statement FUNCTION as [parameter\_interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction.htm).

Within the function module, local data types and data objects can be declared. There is also access to the formal parameters of the function module and to the global data types and data objects of the function pool. A function module is called using the statement [CALL FUNCTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function.htm).

Hint

The [predicate expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicate_expression_glosry.htm "Glossary Entry") [IS SUPPLIED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_supplied.htm) can be used in the function module to determine whether an actual parameter has been specified for when a formal parameter is called.

Example

Implements a function module that reads data in a table-like formal parameter flight\_tab under the condition of an elementary formal parameter id. The [parameter interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction.htm) defined in Function Builder is visible as a comment.

FUNCTION read\_spfli\_into\_table.
\*"---------------------------------------------------------
\*" Local Interface:
\*"       IMPORTING
\*"             VALUE(ID) LIKE  SPFLI-CARRID DEFAULT 'LH '
\*"       EXPORTING
\*"             FLIGHT\_TAB TYPE  SPFLI\_TAB
\*"---------------------------------------------------------
  SELECT \*
         FROM spfli
         WHERE carrid = @id
         INTO TABLE @flight\_tab.
ENDFUNCTION.

Continue
[Function Module Interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction.htm)


### abapendfunction.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_modularization.htm) →  [Procedures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_procedures.htm) →  [Function Modules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_functions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ENDFUNCTION%2C%20ABAPENDFUNCTION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ENDFUNCTION

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfunction_shortref.htm)

Syntax

ENDFUNCTION.

Effect

The statement ENDFUNCTION closes a function module introduced using [FUNCTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfunction.htm).
