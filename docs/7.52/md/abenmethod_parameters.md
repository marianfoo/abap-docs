---
title: "Interface Parameters in Methods"
description: |
  Interface parameters in methods are input parameters (IMPORTING, CHANGING parameters) and output parameters (EXPORTING, CHANGING, RETURNING parameters). In declarations with the statements -   METHODS(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethods.htm) -   CLASS-METHODS(h
version: "7.52"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmethod_parameters.htm"
abapFile: "abenmethod_parameters.htm"
keywords: ["do", "while", "if", "try", "method", "class", "types", "abenmethod", "parameters"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_objects_oview.htm) →  [Classes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclasses.htm) →  [Components of Classes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_components.htm) →  [Methods of Classes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_methods.htm) → 

Interface Parameters in Methods

Interface parameters in methods are input parameters (IMPORTING, CHANGING parameters) and output parameters (EXPORTING, CHANGING, RETURNING parameters). In declarations with the statements

-   [METHODS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethods.htm)

-   [CLASS-METHODS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass-methods.htm)

-   [EVENTS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapevents.htm)

-   [CLASS-EVENTS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass-events.htm)

the following attributes are determined:

Passing parameters by reference or by value

With the exception of the return value (RETURNING parameters), parameters can be passed both by value or reference. Passing by reference is standard with methods. If only a name p is specified in the parameter declaration, the parameter is passed implicitly as a reference. If a VALUE(p) is specified instead, then the parameter is passed as a value. The return value may only be passed as a value. Passing by reference can also be explicitly specified with other parameters using REFERENCE(p). An IMPORTING parameter transferred by reference, cannot be changed in the method.

Typing parameters

All parameters must be [typed](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_glosry.htm "Glossary Entry") during declaration using the addition TYPE or the addition LIKE. The following entries are allowed after TYPE as parameter types:

Optional parameters

All input parameters (IMPORTING, CHANGING parameters) can be defined in the declaration as optional parameters using the additions OPTIONAL or DEFAULT. These parameters must not necessarily be transfered when the method is called. With the addition OPTIONAL your parameter remains initialized according to type, while the addition DEFAULT allows you to enter a start value.