---
title: "CLASS-EVENTS"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclass-events_shortref.htm) Syntax CLASS-EVENTS evt EXPORTING parameters(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapevents_parameters.htm). Addition: ... EXPORTING parameters(#!ABAP_ONE_AD
version: "7.55"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclass-events.htm"
abapFile: "abapclass-events.htm"
keywords: ["do", "if", "method", "class", "abapclass", "events"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_declarations.htm) →  [Classes and Interfaces (ABAP Objects)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Components in Classes and Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclass_ifac_components.htm) →  [ABAP Objects - Events](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenevents.htm) → 

CLASS-EVENTS

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclass-events_shortref.htm)

Syntax

CLASS-EVENTS evt *\[*EXPORTING [parameters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapevents_parameters.htm)*\]*.

Addition:

[... EXPORTING parameters](#!ABAP_ONE_ADD@1@)

Effect

This statement declares a static event evt in a class or interface. The [naming conventions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennaming_conventions.htm) apply to the name evt. The statement [RAISE EVENT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapraise_event.htm) can be used to raise the static event evt in all methods of the same class or of a class that implements the interface, as well as in the methods of subclasses if it is visible here.

Hint

Event handlers that are declared for a [static event inherited from a superclass](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninheritance_statical.htm) can only respond to this event if it is raised by a method of the subclass or one of its subclasses. If the event is raised in a static method of a superclass, it is not handled, even if the method is called in a subclass or if the name of the subclass is specified.

Addition

... EXPORTING parameters

Effect

The addition EXPORTING defines the parameter interface of the event evt. The syntax and meaning of the additions [parameters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapevents_parameters.htm) are the same as in the definition of instance events using the statement [EVENTS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapevents.htm).

Hint

Static events do not have an implicit formal parameter sender.

Example

Declaration of static events in the class CL\_ABAP\_BROWSER.

CLASS cl\_abap\_browser DEFINITION
  ...
  PUBLIC SECTION.
    ...
    CLASS-EVENTS
      sapevent
        EXPORTING
          VALUE(action) TYPE string
          VALUE(query\_table) TYPE cnht\_query\_table OPTIONAL.
    CLASS-EVENTS
      closed.
    ...
ENDCLASS.

Executable Example

[Events in Inheritance](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenevent_inheritance_abexa.htm)