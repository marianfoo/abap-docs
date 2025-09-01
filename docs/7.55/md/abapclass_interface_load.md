---
title: "CLASS, INTERFACE, LOAD"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclass_deferred_load_shortref.htm) Obsolete Syntax CLASS class DEFINITION LOAD. INTERFACE intf LOAD. Effect The variants of the statements CLASS(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclass.htm)
version: "7.55"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclass_interface_load.htm"
abapFile: "abapclass_interface_load.htm"
keywords: ["do", "if", "class", "types", "abapclass", "interface", "load"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenobsolete_declarations.htm) →  [Declaration and Loading](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenaddress_obsolet.htm) → 

CLASS, INTERFACE, LOAD

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclass_deferred_load_shortref.htm)

Obsolete Syntax

CLASS class DEFINITION LOAD.
INTERFACE intf LOAD.

Effect

The variants of the statements [CLASS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclass.htm) and [INTERFACE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinterface.htm) with the addition LOAD are obsolete. ABAP Compiler ignores these statements.

Previously, these statements were only required if the compilation of an ABAP program failed to contain recursive access to a global class or a global interface. These types of recursions are now avoided and a class or an interface is loaded automatically when a component is first accessed.

Hint

These variants of the statements CLASS and INTERFACE can also be used in contexts other than the context described in [CLASS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclass.htm) and [INTERFACE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinterface.htm).