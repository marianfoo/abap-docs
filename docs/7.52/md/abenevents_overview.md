  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_objects_oview.htm) → 

Events

Events are generally characterized by occurring at a particular point in time. When an event is raised, other actions can be executed as a consequence. Examples of when events can be raised include changes in the status of an object, such as when a booking is canceled or a new account or account object created. Other interested objects are informed of these situations by events.

In contrast to other object-oriented programming languages, the event concept in ABAP Objects is an integral component of the language itself. Using the statement [EVENTS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapevents.htm), objects can contain declared events as a part of their interface, and raise them using [RAISE EVENT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapraise_event.htm). Using the addition [FOR EVENT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethods_event_handler.htm) of the statement [METHODS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethods.htm), other objects can also contain [event handlers](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenevent_handler_glosry.htm "Glossary Entry") and therefore are able to react appropriately to an event. An object that raises an event does not make any assumptions about which objects handle it (and how many) and how this is done. This means that the event concept represents a separation between the caller and the handler, and this must be clearly distinguished from concepts that uses callback routines (where only one object responds in a predefined manner). In a regular method call, a method can be called by any number of consumers, while the raising of an event can lead to any number of event handlers being called. The trigger and the handler are not associated until runtime. In a regular method call, the calling program determines the methods that it wants to call and these methods must exist. In the case of events, the handler determines the events to which it wants to respond. There does not have to be a handler method registered for every event.

An event handler in an object defines statically which events of which classes the object can handle. Before an object can react to relevant events, its event handlers must be registered dynamically for the events of other objects using the statement [SET HANDLER](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_handler.htm). One object can be registered for the events of multiple other objects at the same time. This registration can be revoked at any time by consumers of the object or by the object itself. All registered event handlers are currently executed synchronously. This means that they are executed after the statement RAISE EVENT and before the next statement. This also applies to events that are raised during the handling of other events.

If an object raises an event during the execution of a method, each appropriate registered event handler method is called, and the raising method can pass parameters. If multiple event handlers are registered for one event, they are called sequentially in an undefined order.

Event handlers can also be called directly. There can be two reasons for this: either an event handler must handle an event without being registered or must simulate the raising of an event.

Events can have output parameters which are defined in the same way as those of methods. An event handler can pass exactly these output parameters as input parameters, always using pass by value. In addition, there is always an implicit parameter called sender, which contains a reference to the raising object. The event handler uses this reference to access this object.

Executable Example

[Events](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenevents_abexa.htm)