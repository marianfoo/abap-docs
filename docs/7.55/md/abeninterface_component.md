---
title: "INTERFACE, components"
description: |
  The following declaration statements are possible in interfaces for components: -   TYPES(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes.htm), DATA(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdata.htm), CLASS-DATA(https://help.sap.com/doc/abapdocu_755_i
version: "7.55"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninterface_component.htm"
abapFile: "abeninterface_component.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "types", "abeninterface", "component"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_declarations.htm) →  [Classes and Interfaces (ABAP Objects)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclasses_and_interfaces.htm) →  [INTERFACE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinterface.htm) →  [INTERFACE intf](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinterface_definition.htm) → 

INTERFACE, components

The following declaration statements are possible in interfaces for components:

-   [TYPES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes.htm), [DATA](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdata.htm), [CLASS-DATA](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclass-data.htm), and [CONSTANTS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapconstants.htm) for data types and data objects

-   [METHODS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmethods.htm), [CLASS-METHODS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclass-methods.htm), [EVENTS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapevents.htm), and [CLASS-EVENTS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclass-events.htm) for methods and events

-   [INTERFACES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinterfaces.htm) for the inclusion of component interfaces and [ALIASES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapaliases.htm) for alias names for their components

The only interface components that can be addressed without implementing the interface in classes are data types and constants. These can be addressed using the name of the interface and the [class component selector](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoperands_names.htm) (\=>).

Hints

-   All components of an interfaces are in one namespace. Within an interface, the name of a component must be unique regardless of its type (data type, attribute, method, event, or alias name). The components of an included interface are identified by the prefix intf~ (name of the interface with interface component selector).

-   Interfaces provide fewer variants than classes for declarations of methods using [METHODS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmethods.htm) and [CLASS-METHODS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclass-methods.htm). More specifically, no [constructors](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_glosry.htm "Glossary Entry"), [test methods](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentest_method_glosry.htm "Glossary Entry"), or [AMDP function implementations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_function_method_glosry.htm "Glossary Entry") can be declared in interfaces for CDS table functions.
    

Example

Declaration of various components in an interface.

INTERFACE intf1.
  ...
ENDINTERFACE.
INTERFACE intf2.
    INTERFACES intf1.
    TYPES:
      type ...
    DATA:
      attr TYPE ...
    CLASS-METHODS:
      factory RETURNING VALUE(ref) TYPE REF TO intf2.
    METHODS:
      meth ...
ENDINTERFACE.