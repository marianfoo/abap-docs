---
title: "ABAP Objects - Interface Parameters in Methods"
description: |
  The interface parameters in methods are input parameters (IMPORTING and CHANGING parameters) and output parameters (EXPORTING, CHANGING, and RETURNING parameters). Declarations using the statements -   METHODS(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods.htm) -   CLASS-M
version: "7.57"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmethod_parameters.htm"
abapFile: "abenmethod_parameters.htm"
keywords: ["do", "if", "try", "method", "class", "abenmethod", "parameters"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_declarations.htm) →  [Classes and Interfaces (ABAP Objects)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Overview](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_objects_oview.htm) →  [ABAP Objects - Classes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclasses.htm) →  [ABAP Objects - Components of Classes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_components.htm) →  [ABAP Objects - Methods of Classes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_methods.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP Objects - Interface Parameters in Methods, ABENMETHOD_PARAMETERS, 757%0D%0A%0D%0
AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP Objects - Interface Parameters in Methods

The interface parameters in methods are input parameters (IMPORTING and CHANGING parameters) and output parameters (EXPORTING, CHANGING, and RETURNING parameters). Declarations using the statements

-   [METHODS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods.htm)
-   [CLASS-METHODS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass-methods.htm)
-   [EVENTS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapevents.htm)
-   [CLASS-EVENTS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass-events.htm)

define the following attributes:

Passing Parameters by Reference or by Value   

With the exception of the return value (RETURNING parameters), parameters can be passed both by value and by reference. Passing by reference is the default in methods. If only a name p is specified in the parameter declaration, the parameter is passed implicitly as a reference. If VALUE(p) is specified instead, the parameter is passed as a value. The return value may only be passed as a value. Pass by reference can also be specified explicitly in other parameters using REFERENCE(p). An IMPORTING parameter passed by reference cannot be modified in the method.

Typing of Parameters  

All parameters must be [typed](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentyping_glosry.htm "Glossary Entry") when declared using TYPE or LIKE additions.

Optional Parameters  

All input parameters (IMPORTING and CHANGING parameters) can be defined in the declaration as optional parameters using the additions OPTIONAL or DEFAULT. These parameters then do not always have to be transferred when the method is called. The parameter remains initial and type-compliant when the addition OPTIONAL is specified, whereas the addition DEFAULT makes it possible to specify a [start value](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstart_value_glosry.htm "Glossary Entry").