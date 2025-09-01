  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces (ABAP Objects)](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Overview](javascript:call_link\('abenabap_objects_oview.htm'\)) →  [ABAP Objects - Classes](javascript:call_link\('abenclasses.htm'\)) →  [ABAP Objects - Components of Classes](javascript:call_link\('abenclass_components.htm'\)) →  [ABAP Objects - Methods of Classes](javascript:call_link\('abenclass_methods.htm'\)) → 

ABAP Objects - Interface Parameters in Methods

The interface parameters in methods are input parameters (IMPORTING and CHANGING parameters) and output parameters (EXPORTING, CHANGING, and RETURNING parameters). Declarations using the statements

-   [METHODS](javascript:call_link\('abapmethods.htm'\))
-   [CLASS-METHODS](javascript:call_link\('abapclass-methods.htm'\))
-   [EVENTS](javascript:call_link\('abapevents.htm'\))
-   [CLASS-EVENTS](javascript:call_link\('abapclass-events.htm'\))

define the following attributes:

Passing parameters by reference or by value

With the exception of the return value (RETURNING parameters), parameters can be passed both by value and by reference. Passing by reference is the default in methods. If only a name p is specified in the parameter declaration, the parameter is passed implicitly as a reference. If VALUE(p) is specified instead, the parameter is passed as a value. The return value may only be passed as a value. Pass by reference can also be specified explicitly in other parameters using REFERENCE(p). An IMPORTING parameter passed by reference cannot be modified in the method.

Typing of Parameters

All parameters must be [typed](javascript:call_link\('abentyping_glosry.htm'\) "Glossary Entry") when declared using TYPE or LIKE additions.

Optional Parameters

All input parameters (IMPORTING and CHANGING parameters) can be defined in the declaration as optional parameters using the additions OPTIONAL or DEFAULT. These parameters then do not always have to be transferred when the method is called. The parameter remains initial and type-compliant when the addition OPTIONAL is specified, whereas the addition DEFAULT makes it possible to specify a [start value](javascript:call_link\('abenstart_value_glosry.htm'\) "Glossary Entry").