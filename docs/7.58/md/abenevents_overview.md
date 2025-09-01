  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [ABAP Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_objects.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Events%2C%20ABENEVENTS_OVERVIEW%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Objects - Events

Events are generally characterized by occurring at a particular point in time. When an event is raised, other actions can be executed as a consequence of the event. Examples of when events can be raised are changes in the status of an object, such as when a booking is canceled or a new account (object) is created. Other interested objects are informed of these situations by events.

In contrast to other object-oriented programming languages, the event concept in ABAP Objects is an integral component of the language itself. Objects can contain declared events as part of their interface using the statement [EVENTS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapevents.htm), and raise them using [RAISE EVENT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_event.htm). Other objects can also contain declared [event handlers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenevent_handler_glosry.htm "Glossary Entry") using the addition [FOR EVENT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods_event_handler.htm) of the statement [METHODS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods.htm), and are therefore able to react appropriately to an event. An object that raises an event does not make any assumptions about which and how many objects are handled and if so, how this will be done. This means that the event concept represents a decoupling of callers and handlers, which must be clearly distinguished from a concept with callback routines where only one object responds in a predefined manner. In a regular method call, a method can be called by any number of users, while the raising of an event can lead to any number of event handlers being called. The coupling of the trigger and the handler is done at runtime. In a regular method call, the caller determines which methods to call and these must exist. In the case of events, the handler determines to which events it wants to respond and there does not have to be a handler method registered for every event.

An event handler in an object statically determines which events of which classes the object can handle. Before an object can react to relevant events, its event handlers must be registered dynamically for the events of other objects using the statement [SET HANDLER](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_handler.htm). An object can be registered for the events of multiple other objects at the same time. This registration can be revoked at any time by users of the object or by the object itself. All registered event handlers are currently executed synchronously. This means that they are executed after the statement RAISE EVENT and before the next statement is processed. This also applies to events that are raised during the handling of other events.

If an object raises an event during the execution of a method, each suitable registered event handler method is called, whereby the raising method can pass parameters. If multiple event handlers are registered for one event, they are called consecutively in an undefined order.

Event handlers can also be called directly. There can be two reasons for this: either an event handler must handle an event without being registered, or the raising of an event is to be simulated.

Events can have output parameters which are defined like those of methods. An event handler can pass exactly these output parameters as input parameters, always using pass by value. In addition, there is always an implicit parameter called sender, which contains a reference to the raising object that the event handler uses to access this object.

Executable Example

[Events](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenevents_abexa.htm)