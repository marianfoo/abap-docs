  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Exception Handling](javascript:call_link\('abenabap_exceptions.htm'\)) →  [Class-Based Exceptions](javascript:call_link\('abenexceptions.htm'\)) →  [System Response after a Class-Based Exception](javascript:call_link\('abenexceptions_system_response.htm'\)) → 

Class-Based Exceptions in Event Handlers

Class-based exceptions in [event handlers](javascript:call_link\('abenevent_handler_glosry.htm'\) "Glossary Entry") are a special case of [class-based exceptions in procedures](javascript:call_link\('abenexceptions_procedures.htm'\)).

Since event handlers and triggers are completely detached, the trigger of an event does not know the handler and therefore cannot handle its exceptions. For this reason, no class-based exceptions can be declared using RAISING in the [declaration](javascript:call_link\('abapmethods_event_handler.htm'\)).

This has the following consequences:

-   If exceptions from the classes CX\_STATIC\_CHECK or CX\_DYNAMIC\_CHECK occur when events are handled, they must be handled in the event handler or they produce a violation of the interface. In regular [procedures](javascript:call_link\('abenexceptions_procedures.htm'\)), on the other hand, the exception CX\_SY\_NO\_HANDLER is raised.

-   If a violation of the interface occurs during event handling, event handling is terminated and the control is given back to the trigger of the event. Further event handlers which are still registered for the event are not executed.

-   The trigger of the event can handle the CX\_SY\_NO\_HANDLER exception.

Notes

-   An event handler must handle exceptions of the classes CX\_STATIC\_CHECK and CX\_DYNAMIC\_CHECK that are raised during processing. If they are not handled and this leads to a violation of the interface, it is seen as a programming error in the event handling.

-   The trigger of an event does not usually have to handle exceptions, unless an exception to the class CX\_NO\_CHECK is expected. The handling of CX\_SY\_NO\_HANDLER is only considered when trying to prevent a possible programming error in an event handler from producing a runtime error.

-   The trigger of an event should not attempt, any more than the caller of a procedure, to handle the original exception after detecting CX\_SY\_NO\_HANDLER. Unlike in direct method calls, it is not yet determined here which method the event has handled.