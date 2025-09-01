  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and exiting program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Processing Blocks](javascript:call_link\('abencall_processing_blocks.htm'\)) →  [Call Event Handler](javascript:call_link\('abencall_event_handler.htm'\)) → 

SET HANDLER

[Short Reference](javascript:call_link\('abapset_handler_shortref.htm'\))

Syntax Forms

[Registers an instance events handler](javascript:call_link\('abapset_handler_instance.htm'\))
1\. SET HANDLER handler1 handler2 ... FOR oref*|**{*ALL INSTANCES*}*
                                    *\[*ACTIVATION act*\]*.
[Register static events handler](javascript:call_link\('abapset_handler_static.htm'\))
2\. SET HANDLER handler1 handler2 ... *\[*ACTIVATION act*\]*.

Effect

This statement registers or deregisters the [event handlers](javascript:call_link\('abenevent_handler_glosry.htm'\) "Glossary Entry") handler for the corresponding [instance events](javascript:call_link\('abeninstance_event_glosry.htm'\) "Glossary Entry") or [static events](javascript:call_link\('abenstatic_event_glosry.htm'\) "Glossary Entry").

System Fields

sy-subrc

Meaning

0

All specified handlers could be registered or deregistered.

4

At least one of the specified handlers could not be registered, as it is already registered for the same event.

8

At least one of the specified handlers could not be deregistered, as it is not registered for the event in question.

Hints

-   The statement SET HANDLER internally manages different system tables that relate the event raisers and event handlers to each other in single registrations, mass registrations, and registrations of static events. Each registration represents one line in one of the system tables assigned to the trigger. A handler can only occur once in a particular system table but can appear in multiple system tables, that is, it can be registered for different events. When an event is raised using RAISE EVENT, the system evaluates the corresponding system tables and calls the event handlers registered there.
-   The order of the calls of registered event handlers is not defined and can change at program runtime. To get a fixed order of different method calls, these can be called in one event handler.
-   When an instance method is registered, a reference to the corresponding object is added in the relevant table and then deleted again when deregistering. With respect to the [Garbage Collector](javascript:call_link\('abengarbage_collector_glosry.htm'\) "Glossary Entry"), such a reference has the same effect as a reference in a reference variable. Objects registered as handlers are therefore not deleted as long as they are registered, that is, they are not deregistered using the addition ACTIVATION. If a triggering instance is deleted by the Garbage Collector, the corresponding system table is also deleted and, as a result, its registrations are removed.
-   If the statement SET HANDLER registers the current handler again for the current event that has just been handled, it is not defined whether the registration is ignored by the current event handler. This can produce endless recursions and should be avoided.

Example

Registration of event handlers for two instance events and a static event. In the first statement SET HANDLER, a static event handler h1 and an instance method h2, are registered for the instance events e1 and e2 of the object referenced by the reference variable trigger. In the second statement SET HANDLER, an instance method h3 is registered for the static event ce1 of the class c1.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    EVENTS e1.
    CLASS-EVENTS ce1.
ENDCLASS.
CLASS c2 DEFINITION INHERITING FROM c1.
  PUBLIC SECTION.
    EVENTS e2.
ENDCLASS.
CLASS c3 DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS  h1 FOR EVENT e1 OF c1.
          METHODS: h2 FOR EVENT e2 OF c2,
                   h3 FOR EVENT ce1 OF c1.
ENDCLASS.
...
DATA: trigger TYPE REF TO c2,
      handler TYPE REF TO c3.
SET HANDLER: c3=>h1 handler->h2 FOR trigger,
             handler->h3.

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Uncatchable Exceptions

-   Cause: Unable to register any more handlers.
    Runtime error: SET\_HANDLER\_DISP\_OVERFLOW
-   Cause: Handlers of instance methods need the FOR addition.
    Runtime error: SET\_HANDLER\_E\_NO\_FOR
-   Cause: Event handler was registered for a static event.
    Runtime error: SET\_HANDLER\_FOR\_CE
-   Cause: The raiser of an event must not be NULL.
    Runtime error: SET\_HANDLER\_FOR\_NULL
-   Cause: The handler of an event must not be NULL.
    Runtime error: SET\_HANDLER\_HOBJ\_NULL

Continue
[SET HANDLER, FOR](javascript:call_link\('abapset_handler_instance.htm'\))
[SET HANDLER, static\_event](javascript:call_link\('abapset_handler_static.htm'\))