---
title: "EVENTS"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapevents_shortref.htm) Syntax EVENTS evt EXPORTING parameters(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapevents_parameters.htm). Addition: ... EXPORTING parameters(#!ABAP_ONE_ADD@1@) Effect
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapevents.htm"
abapFile: "abapevents.htm"
keywords: ["do", "if", "try", "method", "class", "abapevents"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Components in Classes and Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_ifac_components.htm) →  [ABAP Objects - Events](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenevents.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20EVENTS%2C%20ABAPEVENTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

EVENTS

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapevents_shortref.htm)

Syntax

EVENTS evt *\[*EXPORTING [parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapevents_parameters.htm)*\]*.

Addition:

[... EXPORTING parameters](#!ABAP_ONE_ADD@1@)

Effect

This statement declares an instance event evt in a class or interface. The [naming conventions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennaming_conventions.htm) apply to the name evt. The statement [RAISE EVENT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_event.htm) can be used to raise the instance event evt in any instance method of the same class, or of any class that implements the interface, as well as in the instance methods of subclasses if they are visible there.

Addition   

... EXPORTING parameters

Effect

The addition EXPORTING defines the parameter interface of the event evt. An event can only have output parameters [parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapevents_parameters.htm) that are passed by value.

When an [event handler](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenevent_handler_glosry.htm "Glossary Entry") is declared using the addition FOR EVENT OF of the statement [METHODS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods_event_handler.htm) or [CLASS-METHODS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass-methods_event_handler.htm), the output parameters of the event are defined as the input parameters of the event handler. The properties of the input parameters are transferred from the output parameters defined in EVENTS.

In addition to the output parameters defined explicitly using EXPORTING, each instance event has an implicit output parameter, sender. This output parameter has the type reference variable. When the event is raised using RAISE EVENT, the reference to the raising object is implicitly assigned to sender.

The static type of the input parameter sender is defined for every event handler by the object type (class or interface) that is specified after the addition FOR EVENT OF of the statement METHODS or CLASS-METHODS.

Hint

The dynamic type of the implicit formal parameter sender is always the class of the object in which the event is raised.

Example

In the interface window, three events are declared, each with an explicit non-optional output parameter status. The class dialog\_window implements the interface window. The interface window\_handler contains [event handlers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenevent_handler_glosry.htm "Glossary Entry"), which import both the explicit parameters and the implicit parameter sender. The static type of the input parameter sender is the class dialog\_window.

INTERFACE window.
  EVENTS: minimize EXPORTING VALUE(status) TYPE i,
          maximize EXPORTING VALUE(status) TYPE i,
          restore  EXPORTING VALUE(status) TYPE i.
ENDINTERFACE.
CLASS dialog\_window DEFINITION.
  PUBLIC SECTION.
    INTERFACES window.
ENDCLASS.
INTERFACE window\_handler.
  METHODS: minimize\_window
             FOR EVENT window~minimize OF dialog\_window
             IMPORTING status sender,
           maximize\_window
             FOR EVENT window~maximize OF dialog\_window
             IMPORTING status sender,
           restore
             FOR EVENT window~restore OF dialog\_window
             IMPORTING status sender.
ENDINTERFACE.

Executable Example

[Events in Inheritance](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenevent_inheritance_abexa.htm)