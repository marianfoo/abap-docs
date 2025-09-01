---
title: "INTERFACE - DEFERRED"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinterface_deferred_lo_shortref.htm) Syntax INTERFACE intf DEFERRED PUBLIC. Effect This variant of the statement INTERFACE is used to declare the interface intf independently of the location of the actual definit
version: "7.54"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinterface_deferred.htm"
abapFile: "abapinterface_deferred.htm"
keywords: ["do", "if", "class", "data", "abapinterface", "deferred"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclasses_and_interfaces.htm) →  [INTERFACE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinterface.htm) → 

INTERFACE - DEFERRED

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinterface_deferred_lo_shortref.htm)

Syntax

INTERFACE intf DEFERRED *\[*PUBLIC*\]*.

Effect

This variant of the statement INTERFACE is used to declare the interface intf independently of the location of the actual definition in the program. It does not introduce a declaration part and cannot be ended using ENDINTERFACE. The meaning is the same as for the corresponding variants of the statement [CLASS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclass_deferred.htm).

Note

This variant of the statement INTERFACE can also only be specified in the context described under [INTERFACE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinterface.htm).

Example

Using the interface intf2 in front of the actual declaration in a type reference in interface intf1. The interface must be made known using INTERFACE DEFERRED.

INTERFACE intf2 DEFERRED.
INTERFACE intf1.
  ...
  DATA iref TYPE REF TO intf2.
  ...
ENDINTERFACE.
INTERFACE intf2.
  ...
ENDINTERFACE.