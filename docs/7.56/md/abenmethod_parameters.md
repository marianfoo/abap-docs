  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_declarations.htm) →  [Classes and Interfaces (ABAP Objects)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Overview](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_objects_oview.htm) →  [ABAP Objects - Classes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclasses.htm) →  [ABAP Objects - Components of Classes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclass_components.htm) →  [ABAP Objects - Methods of Classes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclass_methods.htm) → 

ABAP Objects - Interface Parameters in Methods

The interface parameters in methods are input parameters (IMPORTING and CHANGING parameters) and output parameters (EXPORTING, CHANGING, and RETURNING parameters). Declarations using the statements

-   [METHODS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods.htm)
-   [CLASS-METHODS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass-methods.htm)
-   [EVENTS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapevents.htm)
-   [CLASS-EVENTS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass-events.htm)

define the following attributes:

Passing parameters by reference or by value

With the exception of the return value (RETURNING parameters), parameters can be passed both by value and by reference. Passing by reference is the default in methods. If only a name p is specified in the parameter declaration, the parameter is passed implicitly as a reference. If VALUE(p) is specified instead, the parameter is passed as a value. The return value may only be passed as a value. Pass by reference can also be specified explicitly in other parameters using REFERENCE(p). An IMPORTING parameter passed by reference cannot be modified in the method.

Typing of Parameters

All parameters must be [typed](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentyping_glosry.htm "Glossary Entry") when declared using TYPE or LIKE additions.

Optional Parameters

All input parameters (IMPORTING and CHANGING parameters) can be defined in the declaration as optional parameters using the additions OPTIONAL or DEFAULT. These parameters then do not always have to be transferred when the method is called. The parameter remains initial and type-compliant when the addition OPTIONAL is specified, whereas the addition DEFAULT makes it possible to specify a [start value](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstart_value_glosry.htm "Glossary Entry").