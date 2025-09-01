---
title: "INTERFACE intf"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinterface_shortref.htm) Syntax INTERFACE intf PUBLIC. components(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninterface_component.htm) ENDINTERFACE. Addition: ... PUBLIC(#
version: "latest"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinterface_definition.htm"
abapFile: "abapinterface_definition.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "types", "abapinterface", "definition"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclasses_and_interfaces.htm) →  [INTERFACE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinterface.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20INTERFACE%20intf%2C%20ABAPINTERFACE_DEFINITION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

INTERFACE intf

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinterface_shortref.htm)

Syntax

INTERFACE intf *\[*PUBLIC*\]*.
  *\[*[components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninterface_component.htm)*\]*
ENDINTERFACE.

Addition:

[... PUBLIC](#!ABAP_ONE_ADD@1@)

Effect

The statement block INTERFACE - ENDINTERFACE defines an [interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoo_intf_glosry.htm "Glossary Entry") intf. [Naming conventions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennaming_conventions.htm) apply to the name intf. The [components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninterface_component.htm) of the interface are declared between INTERFACE and ENDINTERFACE.

An interface defined using INTERFACE can be implemented in classes and included in other interfaces using the statement [INTERFACES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinterfaces.htm).

Hint

The definition of an interface can only be specified in the context described under [INTERFACE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinterface.htm).

Addition   

... PUBLIC

Effect

The addition PUBLIC makes the interface intf a [global interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenglobal_interface_glosry.htm "Glossary Entry") of the class library. The addition PUBLIC can only be used for the global interface of an [interface pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninterface_pool_glosry.htm "Glossary Entry") and is created by the [Class Builder](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_builder_glosry.htm "Glossary Entry") when a global interface is created.

Hint

A global interface is a global [object type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobject_type_glosry.htm "Glossary Entry") and is in the same namespace as all [global types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenglobal_type_glosry.htm "Glossary Entry") of an AS ABAP.

Example

In this example, an interface i1 is declared using three interface components a1, m1, and e1. The class c1 implements the interface and the interface components therefore become [public](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpublic_glosry.htm "Glossary Entry") components of the class, which can be addressed using the interface component selector (~).

INTERFACE i1.
  DATA    a1 TYPE string.
  METHODS m1.
  EVENTS  e1 EXPORTING value(p1) TYPE string.
ENDINTERFACE.
CLASS c1 DEFINITION.
  PUBLIC SECTION.
    INTERFACES i1.
ENDCLASS.
CLASS c1 IMPLEMENTATION.
  METHOD i1~m1.
    RAISE EVENT i1~e1 EXPORTING p1 = i1~a1.
  ENDMETHOD.
ENDCLASS.

Continue
[INTERFACE, components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninterface_component.htm)