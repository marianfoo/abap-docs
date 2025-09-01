---
title: "METHODS, FOR EVENT"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_shortref.htm) Syntax METHODS meth ABSTRACTFINAL(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_abstract_final.htm) DEFAULT IGNOREFAIL(https://help.sap.c
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_event_handler.htm"
abapFile: "abapmethods_event_handler.htm"
keywords: ["do", "if", "try", "method", "class", "abapmethods", "event", "handler"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Components in Classes and Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_ifac_components.htm) →  [ABAP Objects - Methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmethods.htm) →  [METHODS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20METHODS%2C%20FOR%20EVENT%2C%20ABAPMETHODS_EVENT_HANDLER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

METHODS, FOR EVENT

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_shortref.htm)

Syntax

METHODS meth *\[*[ABSTRACT*|*FINAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_abstract_final.htm)*\]*
            *|**\[*[DEFAULT IGNORE*|*FAIL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_default.htm)*\]*
   FOR EVENT evt OF *{*class*|*intf*}*
   *\[*IMPORTING p1 p2 ... *\[*sender*\]**\]*.

Addition:

[... IMPORTING p1 p2 ... *\[*sender*\]*](#!ABAP_ONE_ADD@1@)

Effect

This statement declares the instance method meth as an [event handler](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenevent_handler_glosry.htm "Glossary Entry") for the event evt of the class class or interface intf. For class and intf, all classes and interfaces can be specified that are visible in this position and that contain an event evt as a component that is visible here.

The visibility section of the event handler cannot be more general than the visibility section of the event because otherwise properties of the method would be defined in a visibility section more restricted than the method itself.

If the event evt is an instance event, the event handler meth can handle it for all objects whose classes match class or that are subclasses of class or which implement the interface intf directly or by using a superclass. If the event is a [static event](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstatic_event_glosry.htm "Glossary Entry"), the event handler meth can handle it for the class class and its subclasses or for all classes that implement the interface intf.

-   Using the additions [ABSTRACT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_abstract_final.htm) and [FINAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_abstract_final.htm), event handlers can either be made abstract or final just like [general methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm) in classes.
-   The addition [DEFAULT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_default.htm) can be used to make event handlers optional, just like [general methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm) in interfaces.

Hints

-   To ensure that an event handler handles a raised event, it must be registered with the statement [SET HANDLER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_handler.htm).
    
    In event handlers, no class-based exceptions can be declared using RAISING. See [Class-Based Exceptions in Event Handlers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexceptions_events.htm).
    
-   When declaring event handlers for static events, note that these events are generally raised in static methods as well. In such a method, the class in which the method is declared is always the raising class, and not the subclass in which or with whose name the method was called.
-   Method declarations using this syntax are not to be confused with method declarations in the context of [RAP business events](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_entity_event_glosry.htm "Glossary Entry"): [METHODS, FOR ENTITY EVENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmethod_for_entity_event.htm)

Addition   

... IMPORTING p1 p2 ... *\[*sender*\]*

Effect

The addition IMPORTING defines the input parameters of the event handler. For p, only those names of formal parameters can be specified that are defined as output parameters of the event by using the addition EXPORTING of the statement [EVENTS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapevents.htm) or [CLASS-EVENTS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass-events.htm) in the declaration of the event evt in the class class or in the interface intf. The additions TYPE or LIKE and OPTIONAL or DEFAULT are not possible. The [typing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentyping_glosry.htm "Glossary Entry") of the input parameters and whether they are optional, and any replacement parameters, are inherited from the declaration of the event. Not all output parameters of the event need to be specified.

If evt is an instance event, a formal parameter called sender can be defined as an input parameter of an event handler in addition to the explicitly defined output parameters of the event. The formal parameter sender is an implicit output parameter of every instance event. It is completely typed as a reference variable, which itself has the class class or the interface intf as a static type, as specified in the declaration of the event handler after EVENT evt OF. If the event handler is called by an instance event, it is passed a reference to the raising object in sender.

Hint

Each event handler determines the type of its formal parameter sender.

Example

The class picture contains an event handler handle\_double\_click for the instance event picture\_dblclick of the global class cl\_gui\_picture. The event handler inherits two explicit output parameters of the event and the implicit parameter sender as input parameters.

CLASS picture DEFINITION.
  PUBLIC SECTION.
    METHODS handle\_double\_click
            FOR EVENT picture\_dblclick OF cl\_gui\_picture
            IMPORTING mouse\_pos\_x mouse\_pos\_y sender.
ENDCLASS.
CLASS picture IMPLEMENTATION.
  METHOD handle\_double\_click.
    ...
  ENDMETHOD.
ENDCLASS.