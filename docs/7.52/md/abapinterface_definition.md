---
title: "INTERFACE intf"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinterface_shortref.htm) Syntax INTERFACE intf PUBLIC. components(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninterface_component.htm) ENDINTERFACE. Addition: ... PUBLIC(#!ABAP_ONE_
version: "7.52"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinterface_definition.htm"
abapFile: "abapinterface_definition.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "types", "abapinterface", "definition"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclasses_and_interfaces.htm) →  [INTERFACE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinterface.htm) → 

INTERFACE intf

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinterface_shortref.htm)

Syntax

INTERFACE intf *\[*PUBLIC*\]*.
    *\[*[components](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninterface_component.htm)*\]*
ENDINTERFACE.

Addition:

[... PUBLIC](#!ABAP_ONE_ADD@1@)

Effect

The statement block INTERFACE - ENDINTERFACE defines an [interface](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninterface_oo_glosry.htm "Glossary Entry") intf. [Naming conventions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennaming_conventions.htm) apply to the name intf. The [components](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninterface_component.htm) of the interface are declared between INTERFACE and ENDINTERFACE.

An interface defined using INTERFACE can be implemented in classes and included in other interfaces using the statement [INTERFACES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinterfaces.htm).

Note

The definition of an interface can only be specified in the context described under [INTERFACE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinterface.htm).

Addition

... PUBLIC

Effect

The addition PUBLIC makes the interface intf a [global interface](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenglobal_interface_glosry.htm "Glossary Entry") of the class library. The addition PUBLIC can only be used for the global interface of an [interface pool](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninterface_pool_glosry.htm "Glossary Entry") and is created by [Class Builder](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_builder_glosry.htm "Glossary Entry") when a global interface is created.

Note

A global interface is a global [object type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobject_type_glosry.htm "Glossary Entry") and is in the same namespace as a [global class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenglobal_interface_glosry.htm "Glossary Entry") and as the global [data types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_type_glosry.htm "Glossary Entry") in [ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary_glosry.htm "Glossary Entry").

Example

In this example, an interface i1 is declared using three interface components a1, m1, and e1. The class c1 implements the interface and the interface components therefore become [public](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpublic_glosry.htm "Glossary Entry") components of the class, which can be addressed using the interface component selector (~).

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
[INTERFACE - components](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninterface_component.htm)