# ABAP Keyword Documentation / ABAP − Reference / Program Layout / Modularization Statements / Procedures / Function Modules

Included pages: 7


### abenabap_functions.htm

---
title: "Function Modules"
description: |
  Function modules are cross-program reusable procedures(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprocedure_glosry.htm 'Glossary Entry') that are organized into function groups(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction_group_glosry.htm 'Glossary
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_functions.htm"
abapFile: "abenabap_functions.htm"
keywords: ["do", "try", "method", "class", "abenabap", "functions"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_modularization.htm) →  [Procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_procedures.htm) → 

Function Modules

Function modules are cross-program reusable [procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprocedure_glosry.htm "Glossary Entry") that are organized into [function groups](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction_group_glosry.htm "Glossary Entry") and whose functions are implemented between the following statements:

[FUNCTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfunction.htm)
  ...
[ENDFUNCTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapendfunction.htm)

Function modules and their [interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction.htm) are created in [Function Builder](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction_builder_glosry.htm "Glossary Entry") in ABAP Workbench or in the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadt_glosry.htm "Glossary Entry").

Note

Function modules in function groups are the predecessor technology of public [methods](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmethod_glosry.htm "Glossary Entry") in global classes.

Continue
[FUNCTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfunction.htm)
[ENDFUNCTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapendfunction.htm)


### abapfunction.htm

---
title: "FUNCTION"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfunction_shortref.htm) Syntax FUNCTION func. '--------------------------------------------------------- ' Local Interface: ' parameter_interface(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfu
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfunction.htm"
abapFile: "abapfunction.htm"
keywords: ["select", "do", "if", "try", "data", "types", "abapfunction"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_modularization.htm) →  [Procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_procedures.htm) →  [Function Modules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_functions.htm) → 

FUNCTION

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfunction_shortref.htm)

Syntax

FUNCTION func.
\*"---------------------------------------------------------
\*" Local Interface:
\*" [parameter\_interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction.htm)
\*"---------------------------------------------------------
  ...
ENDFUNCTION.

Effect

Between the statements FUNCTION and ENDFUNCTION, the functions of a [function module](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction_module_glosry.htm "Glossary Entry") func are implemented in a function group. The function module and its interface are defined in the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadt_glosry.htm "Glossary Entry") or in the [Function Builder](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction_builder_glosry.htm "Glossary Entry") tool . In the source code of the function module, the function module interface defined in Function Builder is automatically displayed as [parameter\_interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction.htm) in comment lines underneath the statement FUNCTION.

Within the function module, local data types and data objects can be declared. There is also access to the formal parameters of the function module and to the global data types and data objects of the function group. A function module is called using the statement [CALL FUNCTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function.htm).

Note

The [predicate expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpredicate_expression_glosry.htm "Glossary Entry") [IS SUPPLIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_supplied.htm) can be used in the function module to determine whether an actual parameter has been specified for a formal parameter.

Example

Implements a function module that reads data in a table-like formal parameter flight\_tab under the condition of an elementary formal parameter id. The [parameter interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction.htm) defined in Function Builder is visible as a comment.

FUNCTION read\_spfli\_into\_table.
\*"---------------------------------------------------------
\*" Local Interface:
\*"       IMPORTING
\*"             VALUE(ID) LIKE  SPFLI-CARRID DEFAULT 'LH '
\*"       EXPORTING
\*"             FLIGHT\_TAB TYPE  SPFLI\_TAB
\*"---------------------------------------------------------
  SELECT \*
         FROM spfli
         WHERE carrid = @id
         INTO TABLE @flight\_tab.
ENDFUNCTION.

Continue
[Function Module Interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction.htm)


### abenfunction.htm

---
title: "Function Module Interface"
description: |
  The parameter interface(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenparameter_interface_glosry.htm 'Glossary Entry') of a function module is defined in Function Builder or in the ABAP Development Tools (ADT)(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadt_gl
version: "7.54"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction.htm"
abapFile: "abenfunction.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "abenfunction"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_modularization.htm) →  [Procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_procedures.htm) →  [Function Modules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_functions.htm) →  [FUNCTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfunction.htm) → 

Function Module Interface

The [parameter interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenparameter_interface_glosry.htm "Glossary Entry") of a function module is defined in Function Builder or in the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadt_glosry.htm "Glossary Entry"). It includes the definition of interface parameters and the specification of exceptions that can be triggered by a function module. ADT uses an editor with statements in ABAP pseudo syntax and Function Builder creates comment lines automatically underneath the statement [FUNCTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfunction.htm) in the source code of a function module , which represent the interface of the function module as follows:

Syntax

... *\[*IMPORTING [parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction_parameters.htm)*\]*
    *\[*EXPORTING [parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction_parameters.htm)*\]*
    *\[*TABLES [table\_parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptables_parameters_obsolete.htm)*\]*
    *\[*CHANGING [parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction_parameters.htm)*\]*
    *\[**{*RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...*}*
    *|**{*EXCEPTIONS exc1 exc2 ...*}**\]*

The syntax and semantics of IMPORTING, EXPORTING, CHANGING, RAISING, and EXCEPTIONS mainly correspond to the definition of method interfaces using [*\[*CLASS-*\]*METHODS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmethods_general.htm). The additional option of defining table parameters using [TABLES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptables_parameters_obsolete.htm) is obsolete.

Note

The [ABAP Development Tools](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadt_glosry.htm "Glossary Entry") do not have a form-based Function Builder and the parameter interface of a function module is defined in an ABAP pseudo syntax. These statements are not compiled like genuine ABAP statements and the regular ABAP syntax checks are not applied. When a function module is generated, they are interpreted like the form-based instructions from classic Function Builder.

Interface Parameters

The interface parameters are defined in ADT in ABAP pseudo syntax and defined in Function Builder on the appropriate tabs .

-   IMPORTING parameters are input parameters. When the function module is called, a suitable actual parameter must be specified for every non-optional input parameter. The content of the actual parameter is passed to the input parameter when the call is made. The content of an input parameter for which 'pass by reference' is defined cannot be changed in the function module.

-   EXPORTING parameters are output parameters. When the function module is called, a suitable actual parameter can be specified for every output parameter. The content of an output parameter that is defined for 'pass by value' is passed to the actual parameter if the function module is completed without errors. An output parameter that is defined for pass by reference is not initialized when the function module is called.

-   TABLES parameters are [obsolete table parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptables_parameters_obsolete.htm).

-   CHANGING parameters are input and output parameters. When the function module is called, a suitable actual parameter must be specified for every non-optional input or output parameter. When the function module is called, the content of the actual parameter is passed to the input/output parameter, and when the function module is completed, the content of the input/output parameter is passed to the actual parameter.

Note

The formal parameters of a function module can be registered as [global parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenglobal_parameters_obsolete.htm) in Function Builder, however this is obsolete.

Exceptions

In ADT, the exceptions of a function modules are defined in ABAP pseudo syntax or on the Exceptions tab in Function Builder . Here, exception classes can be selected to define whether [class-based exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclass_based_exception_glosry.htm "Glossary Entry") are declared or [non-class-based exception](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexceptions_non_class.htm) are defined. Class-based exceptions are represented in the above syntax by RAISING and non-class-based exceptions are represented by EXCEPTIONS.

-   The addition RAISING is used to declare class-based exceptions that can be propagated from the function module to the caller. Exceptions in the categories CX\_STATIC\_CHECK and CX\_DYNAMIC\_CHECK must be explicitly declared, otherwise a propagation can lead to an interface violation. A violation of the interface raises the handleable exception CX\_SY\_NO\_HANDLER. Exceptions of the category CX\_NO\_CHECK are always declared implicitly and with the addition RESUMABLE. The declaration of exceptions of the category CX\_STATIC\_CHECK is checked statically in the syntax check. For exceptions of the category CX\_DYNAMIC\_CHECK, the check is not performed until runtime. In a function module in which class-based exceptions are declared using the addition RAISING, the obsolete statement [CATCH SYSTEM-EXCEPTIONS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcatch_sys.htm) cannot be used to handle [catchable runtime errors](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencatchable_runtime_error_glosry.htm "Glossary Entry"). Instead, the handleable exceptions assigned to the runtime errors should be handled in a [TRY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptry.htm) control structure.
    The addition RESUMABLE declares an exception that can be propagated as a [resumable exception](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenresumable_exception_glosry.htm "Glossary Entry"). This addition has no relevance to a non-resumable exception. The addition does not have any effect on a non-resumable exception. If a resumable exception is propagated in RAISING and the addition RESUMABLE is not specified, it thus becomes non-resumable. If a superclass is declared as resumable, any subclasses must also be declared as resumable.

-   The addition EXCEPTIONS is used to define a list of non-class-based exceptions that can be raised in the function module using the statements [RAISE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapraise_exception.htm) or [MESSAGE RAISING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage_raising.htm). Exceptions defined in this way are (as with formal parameters) bound to the function module and cannot be propagated. If an exception of this type is raised in a function module, and no return value was assigned to it with the identically named addition EXCEPTIONS of the statement [CALL FUNCTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function.htm) when the call was made, a runtime error is produced. In a function module in whose interface non-class-based exceptions are defined, the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapraise_exception_class.htm) or the addition [THROW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_expression_result.htm) in a [conditional expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_expressions.htm) cannot be used to raise class-based exceptions.

The Resumable column in Function Builder can be selected to flag a class-based exception as a [resumable exception](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenresumable_exception_glosry.htm "Glossary Entry"). This places the addition RESUMABLE behind RAISING in the syntax above.

Notes

-   For new developments, SAP recommends that you work with class-based exceptions that are independent of the function module.

-   See also [Class-Based Exceptions in Procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexceptions_procedures.htm).

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
[Properties of Interface Parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction_parameters.htm)


### abenfunction_parameters.htm

---
title: "Properties of Interface Parameters"
description: |
  When an interface parameter p1, p2... is defined in Function Builder, properties are determined for the parameter that are reflected in the syntax of parameters and table_parameters(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptables_parameters_obsolete.htm). Syntax ...  VALU
version: "7.54"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction_parameters.htm"
abapFile: "abenfunction_parameters.htm"
keywords: ["select", "insert", "do", "while", "if", "try", "method", "class", "data", "types", "internal-table", "abenfunction", "parameters"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_modularization.htm) →  [Procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_procedures.htm) →  [Function Modules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_functions.htm) →  [FUNCTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfunction.htm) →  [Function Module Interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction.htm) → 

Properties of Interface Parameters

When an interface parameter p1, p2... is defined in Function Builder, properties are determined for the parameter that are reflected in the syntax of parameters and [table\_parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptables_parameters_obsolete.htm).

Syntax

... *{* VALUE(p1) *|* REFERENCE(p1) *}*
         *\[* *{*TYPE *\[*REF TO*\]* type*}* *|* [like\_structure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfunction_typing_obsolete.htm)
           *\[*OPTIONAL*|**{*DEFAULT def1*}**\]* *\]*
    *{* VALUE(p2) *|* REFERENCE(p2) *}*
         *\[* *{*TYPE *\[*REF TO*\]* type*}* *|* [like\_structure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfunction_typing_obsolete.htm)
           *\[*OPTIONAL*|**{*DEFAULT def2*}**\]* *\]*
    ...

The syntax and semantics of VALUE, TYPE, OPTIONAL, and DEFAULT are mainly the same as in the definition of method interfaces by [*\[*CLASS-*\]*METHODS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmethods_parameters.htm). The obsolete option [like\_structure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfunction_typing_obsolete.htm) also exists, which uses LIKE or STRUCTURE to type interface parameters.

Type of Parameter Passing

There are two ways in which parameters can be passed: [pass by reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpass_by_reference_glosry.htm "Glossary Entry") and [pass by value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpass_by_value_glosry.htm "Glossary Entry"). Pass by value is selected in Function Builder by selecting pass by value and differs from pass by reference in the above syntax (indicated by REFERENCE( )) by VALUE( ) being specified. If only one name p1 p2 ... is specified, the parameter is passed by reference by default.

-   In pass by reference, the formal parameter points directly to the actual parameter, so that changes to the formal parameters have an immediate effect on the actual parameter.

-   In pass by value, when the function module is called, the formal parameter is created as a copy of the actual parameter (in IMPORTING and CHANGING parameters) or as an initial parameter (in EXPORTING parameters) in the stack. In CHANGING and EXPORTING parameters, the formal parameter is copied to the actual parameter when returning from the function module.

Note the following for the different types of parameter:

-   In IMPORTING, EXPORTING, and CHANGING parameters, pass by reference and pass by value are possible. In [TABLES parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptables_parameters_obsolete.htm), only pass by reference is possible.

-   IMPORTING parameters passed by reference must not be overwritten in the function module.

-   An EXPORTING parameter passed by reference behaves like a CHANGING parameter, which means that EXPORTING parameters passed by reference are not initialized when the function module is called. For this reason, no read access to these parameters should be permitted before the first write access. In addition, be careful when adding content to such parameters as, for example, when inserting rows into internal tables.

Note

The time the function module was last edited specifies whether a parameter passed by reference is displayed with or without REFERENCE( ). REFERENCE( ) is displayed for function modules modified in Release 7.31 and later.

Typing of Interface Parameters

The parameter interface of a function module is public across the system. Interface parameters can therefore only be typed with reference to data types from ABAP Dictionary or from the public visible section of global classes. Interface parameters can be typed in Function Builder by selecting either TYPE or TYPE REF TO or by entering [LIKE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfunction_typing_obsolete.htm).

Typing with TYPE *\[*REF TO*\]* is the recommended typing for interface parameters of function modules. It takes place when TYPE or TYPE REF TO is selected in Function Builder . For IMPORTING, EXPORTING, and CHANGING parameters, any [built-in ABAP type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_types.htm) (complete or generic), or any data type from ABAP Dictionary or from the public visibility section of a global class can be specified after TYPE. After TYPE REF TO, the generic data type [data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_types_generic.htm), a non-generic data type, or an [object type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenobject_type_glosry.htm "Glossary Entry") can be specified and the interface parameter is typed as a [reference variable](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreference_variable_glosry.htm "Glossary Entry"). The [typing check](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_check.htm) is performed in the same way as for methods.

Note

Without an explicit typing, a formal parameter is typed implicitly with the fully generic type any.

Optional Parameters

IMPORTING, CHANGING, and [TABLES parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptables_parameters_obsolete.htm) can be made optional by using optional in Function Builder . EXPORTING parameters are always optional. IMPORTING and CHANGING parameters can be assigned a replacement parameter (the default value in Function Builder) . In the above syntax, this is expressed using the additions OPTIONAL or DEFAULT. For an optional parameter, no actual parameter must be entered when the function module is called. While a formal parameter with the addition OPTIONAL is then initialized as a type-friendly parameter, a formal parameter with the addition DEFAULT assumes the value and type of the replacement parameter def1 def2 ...

If no actual parameter is specified for a generically typed formal parameter using the addition OPTIONAL when it is called, the type of the formal parameter is completed according to [fixed rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_generic.htm).

Note

Within a function module, the [predicate expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpredicate_expression_glosry.htm "Glossary Entry") [IS SUPPLIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_supplied.htm) can be used to check whether an optional formal parameter was assigned an actual parameter when it was called.


### abenfunction.htm

---
title: "Function Module Interface"
description: |
  The parameter interface(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenparameter_interface_glosry.htm 'Glossary Entry') of a function module is defined in Function Builder or in the ABAP Development Tools (ADT)(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadt_gl
version: "7.54"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction.htm"
abapFile: "abenfunction.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "abenfunction"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_modularization.htm) →  [Procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_procedures.htm) →  [Function Modules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_functions.htm) →  [FUNCTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfunction.htm) → 

Function Module Interface

The [parameter interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenparameter_interface_glosry.htm "Glossary Entry") of a function module is defined in Function Builder or in the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadt_glosry.htm "Glossary Entry"). It includes the definition of interface parameters and the specification of exceptions that can be triggered by a function module. ADT uses an editor with statements in ABAP pseudo syntax and Function Builder creates comment lines automatically underneath the statement [FUNCTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfunction.htm) in the source code of a function module , which represent the interface of the function module as follows:

Syntax

... *\[*IMPORTING [parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction_parameters.htm)*\]*
    *\[*EXPORTING [parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction_parameters.htm)*\]*
    *\[*TABLES [table\_parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptables_parameters_obsolete.htm)*\]*
    *\[*CHANGING [parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction_parameters.htm)*\]*
    *\[**{*RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...*}*
    *|**{*EXCEPTIONS exc1 exc2 ...*}**\]*

The syntax and semantics of IMPORTING, EXPORTING, CHANGING, RAISING, and EXCEPTIONS mainly correspond to the definition of method interfaces using [*\[*CLASS-*\]*METHODS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmethods_general.htm). The additional option of defining table parameters using [TABLES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptables_parameters_obsolete.htm) is obsolete.

Note

The [ABAP Development Tools](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadt_glosry.htm "Glossary Entry") do not have a form-based Function Builder and the parameter interface of a function module is defined in an ABAP pseudo syntax. These statements are not compiled like genuine ABAP statements and the regular ABAP syntax checks are not applied. When a function module is generated, they are interpreted like the form-based instructions from classic Function Builder.

Interface Parameters

The interface parameters are defined in ADT in ABAP pseudo syntax and defined in Function Builder on the appropriate tabs .

-   IMPORTING parameters are input parameters. When the function module is called, a suitable actual parameter must be specified for every non-optional input parameter. The content of the actual parameter is passed to the input parameter when the call is made. The content of an input parameter for which 'pass by reference' is defined cannot be changed in the function module.

-   EXPORTING parameters are output parameters. When the function module is called, a suitable actual parameter can be specified for every output parameter. The content of an output parameter that is defined for 'pass by value' is passed to the actual parameter if the function module is completed without errors. An output parameter that is defined for pass by reference is not initialized when the function module is called.

-   TABLES parameters are [obsolete table parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptables_parameters_obsolete.htm).

-   CHANGING parameters are input and output parameters. When the function module is called, a suitable actual parameter must be specified for every non-optional input or output parameter. When the function module is called, the content of the actual parameter is passed to the input/output parameter, and when the function module is completed, the content of the input/output parameter is passed to the actual parameter.

Note

The formal parameters of a function module can be registered as [global parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenglobal_parameters_obsolete.htm) in Function Builder, however this is obsolete.

Exceptions

In ADT, the exceptions of a function modules are defined in ABAP pseudo syntax or on the Exceptions tab in Function Builder . Here, exception classes can be selected to define whether [class-based exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclass_based_exception_glosry.htm "Glossary Entry") are declared or [non-class-based exception](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexceptions_non_class.htm) are defined. Class-based exceptions are represented in the above syntax by RAISING and non-class-based exceptions are represented by EXCEPTIONS.

-   The addition RAISING is used to declare class-based exceptions that can be propagated from the function module to the caller. Exceptions in the categories CX\_STATIC\_CHECK and CX\_DYNAMIC\_CHECK must be explicitly declared, otherwise a propagation can lead to an interface violation. A violation of the interface raises the handleable exception CX\_SY\_NO\_HANDLER. Exceptions of the category CX\_NO\_CHECK are always declared implicitly and with the addition RESUMABLE. The declaration of exceptions of the category CX\_STATIC\_CHECK is checked statically in the syntax check. For exceptions of the category CX\_DYNAMIC\_CHECK, the check is not performed until runtime. In a function module in which class-based exceptions are declared using the addition RAISING, the obsolete statement [CATCH SYSTEM-EXCEPTIONS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcatch_sys.htm) cannot be used to handle [catchable runtime errors](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencatchable_runtime_error_glosry.htm "Glossary Entry"). Instead, the handleable exceptions assigned to the runtime errors should be handled in a [TRY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptry.htm) control structure.
    The addition RESUMABLE declares an exception that can be propagated as a [resumable exception](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenresumable_exception_glosry.htm "Glossary Entry"). This addition has no relevance to a non-resumable exception. The addition does not have any effect on a non-resumable exception. If a resumable exception is propagated in RAISING and the addition RESUMABLE is not specified, it thus becomes non-resumable. If a superclass is declared as resumable, any subclasses must also be declared as resumable.

-   The addition EXCEPTIONS is used to define a list of non-class-based exceptions that can be raised in the function module using the statements [RAISE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapraise_exception.htm) or [MESSAGE RAISING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage_raising.htm). Exceptions defined in this way are (as with formal parameters) bound to the function module and cannot be propagated. If an exception of this type is raised in a function module, and no return value was assigned to it with the identically named addition EXCEPTIONS of the statement [CALL FUNCTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function.htm) when the call was made, a runtime error is produced. In a function module in whose interface non-class-based exceptions are defined, the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapraise_exception_class.htm) or the addition [THROW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_expression_result.htm) in a [conditional expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_expressions.htm) cannot be used to raise class-based exceptions.

The Resumable column in Function Builder can be selected to flag a class-based exception as a [resumable exception](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenresumable_exception_glosry.htm "Glossary Entry"). This places the addition RESUMABLE behind RAISING in the syntax above.

Notes

-   For new developments, SAP recommends that you work with class-based exceptions that are independent of the function module.

-   See also [Class-Based Exceptions in Procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexceptions_procedures.htm).

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
[Properties of Interface Parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction_parameters.htm)


### abapfunction.htm

---
title: "FUNCTION"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfunction_shortref.htm) Syntax FUNCTION func. '--------------------------------------------------------- ' Local Interface: ' parameter_interface(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfu
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfunction.htm"
abapFile: "abapfunction.htm"
keywords: ["select", "do", "if", "try", "data", "types", "abapfunction"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_modularization.htm) →  [Procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_procedures.htm) →  [Function Modules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_functions.htm) → 

FUNCTION

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfunction_shortref.htm)

Syntax

FUNCTION func.
\*"---------------------------------------------------------
\*" Local Interface:
\*" [parameter\_interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction.htm)
\*"---------------------------------------------------------
  ...
ENDFUNCTION.

Effect

Between the statements FUNCTION and ENDFUNCTION, the functions of a [function module](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction_module_glosry.htm "Glossary Entry") func are implemented in a function group. The function module and its interface are defined in the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadt_glosry.htm "Glossary Entry") or in the [Function Builder](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction_builder_glosry.htm "Glossary Entry") tool . In the source code of the function module, the function module interface defined in Function Builder is automatically displayed as [parameter\_interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction.htm) in comment lines underneath the statement FUNCTION.

Within the function module, local data types and data objects can be declared. There is also access to the formal parameters of the function module and to the global data types and data objects of the function group. A function module is called using the statement [CALL FUNCTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function.htm).

Note

The [predicate expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpredicate_expression_glosry.htm "Glossary Entry") [IS SUPPLIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_supplied.htm) can be used in the function module to determine whether an actual parameter has been specified for a formal parameter.

Example

Implements a function module that reads data in a table-like formal parameter flight\_tab under the condition of an elementary formal parameter id. The [parameter interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction.htm) defined in Function Builder is visible as a comment.

FUNCTION read\_spfli\_into\_table.
\*"---------------------------------------------------------
\*" Local Interface:
\*"       IMPORTING
\*"             VALUE(ID) LIKE  SPFLI-CARRID DEFAULT 'LH '
\*"       EXPORTING
\*"             FLIGHT\_TAB TYPE  SPFLI\_TAB
\*"---------------------------------------------------------
  SELECT \*
         FROM spfli
         WHERE carrid = @id
         INTO TABLE @flight\_tab.
ENDFUNCTION.

Continue
[Function Module Interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction.htm)


### abapendfunction.htm

---
title: "ENDFUNCTION"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfunction_shortref.htm) Syntax ENDFUNCTION. Effect The statement ENDFUNCTION closes a function module introduced using FUNCTION(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfunction.htm).
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapendfunction.htm"
abapFile: "abapendfunction.htm"
keywords: ["do", "abapendfunction"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_modularization.htm) →  [Procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_procedures.htm) →  [Function Modules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_functions.htm) → 

ENDFUNCTION

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfunction_shortref.htm)

Syntax

ENDFUNCTION.

Effect

The statement ENDFUNCTION closes a function module introduced using [FUNCTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfunction.htm).
