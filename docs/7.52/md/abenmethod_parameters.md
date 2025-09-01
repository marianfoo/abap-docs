  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Overview](javascript:call_link\('abenabap_objects_oview.htm'\)) →  [Classes](javascript:call_link\('abenclasses.htm'\)) →  [Components of Classes](javascript:call_link\('abenclass_components.htm'\)) →  [Methods of Classes](javascript:call_link\('abenclass_methods.htm'\)) → 

Interface Parameters in Methods

Interface parameters in methods are input parameters (IMPORTING, CHANGING parameters) and output parameters (EXPORTING, CHANGING, RETURNING parameters). In declarations with the statements

-   [METHODS](javascript:call_link\('abapmethods.htm'\))

-   [CLASS-METHODS](javascript:call_link\('abapclass-methods.htm'\))

-   [EVENTS](javascript:call_link\('abapevents.htm'\))

-   [CLASS-EVENTS](javascript:call_link\('abapclass-events.htm'\))

the following attributes are determined:

Passing parameters by reference or by value

With the exception of the return value (RETURNING parameters), parameters can be passed both by value or reference. Passing by reference is standard with methods. If only a name p is specified in the parameter declaration, the parameter is passed implicitly as a reference. If a VALUE(p) is specified instead, then the parameter is passed as a value. The return value may only be passed as a value. Passing by reference can also be explicitly specified with other parameters using REFERENCE(p). An IMPORTING parameter transferred by reference, cannot be changed in the method.

Typing parameters

All parameters must be [typed](javascript:call_link\('abentyping_glosry.htm'\) "Glossary Entry") during declaration using the addition TYPE or the addition LIKE. The following entries are allowed after TYPE as parameter types:

Optional parameters

All input parameters (IMPORTING, CHANGING parameters) can be defined in the declaration as optional parameters using the additions OPTIONAL or DEFAULT. These parameters must not necessarily be transfered when the method is called. With the addition OPTIONAL your parameter remains initialized according to type, while the addition DEFAULT allows you to enter a start value.