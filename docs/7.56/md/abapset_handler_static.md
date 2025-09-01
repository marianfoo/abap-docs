  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and exiting program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Processing Blocks](javascript:call_link\('abencall_processing_blocks.htm'\)) →  [Call Event Handler](javascript:call_link\('abencall_event_handler.htm'\)) →  [SET HANDLER](javascript:call_link\('abapset_handler.htm'\)) → 

SET HANDLER, static\_event

[Short Reference](javascript:call_link\('abapset_handler_shortref.htm'\))

Syntax

SET HANDLER handler1 handler2 ... *\[*ACTIVATION act*\]*.

Addition:

[... ACTIVATION act](#!ABAP_ONE_ADD@1@)

Effect

This statement registers the [event handlers](javascript:call_link\('abenevent_handler_glosry.htm'\) "Glossary Entry") handler1 handler2 ... for the associated [static events](javascript:call_link\('abenstatic_event_glosry.htm'\) "Glossary Entry"). The addition ACTIVATION can be used to deregister event handlers or to perform a dynamic registration.

An event handler is executed if the associated static event is raised using [RAISE EVENT](javascript:call_link\('abapraise_event.htm'\)). The list handler1 handler2 ... has the same form as for [instance events](javascript:call_link\('abapset_handler_instance.htm'\)), but can only contain event handlers for static events declared using [CLASS EVENTS.](javascript:call_link\('abapclass-events.htm'\))

Events that can be handled by an event handler for static events are defined uniquely by their definition in the statement [*\[*CLASS-*\]*](javascript:call_link\('abapclass-methods_event_handler.htm'\)) [METHODS](javascript:call_link\('abapmethods_event_handler.htm'\)). During registration, the addition FOR, which is required to register or deregister instance event handlers that determine the raising instances, cannot be specified. An event handler for static events is registered or deregistered independently of the instance and this applies globally to the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry").

Addition   

... ACTIVATION act

Effect

The syntax and semantics of the addition ACTIVATION are the same as for the statement [SET HANDLER](javascript:call_link\('abapset_handler_instance.htm'\)) for instance events.

Hint

As long as the registration of an instance method as an event handler for a static event is not canceled using ACTIVATION " ", the associated object cannot be deleted by the [Garbage Collector](javascript:call_link\('abengarbage_collector_glosry.htm'\) "Glossary Entry"). This is because it is still used by the runtime framework.

Example

Registration of a static handler for a static event. After the event has been raised, the handling takes place.

CLASS cls DEFINITION.
  PUBLIC SECTION.
    CLASS-EVENTS evt
      EXPORTING VALUE(p) TYPE string DEFAULT \`nop\`.
    CLASS-METHODS meth.
ENDCLASS.
CLASS cls IMPLEMENTATION.
  METHOD meth.
    RAISE EVENT evt EXPORTING p = \`Ping!\`.
  ENDMETHOD.
ENDCLASS.
CLASS hdl DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS meth FOR EVENT evt OF cls
      IMPORTING p.
ENDCLASS.
CLASS hdl IMPLEMENTATION.
  METHOD meth.
    cl\_demo\_output=>display( p ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  SET HANDLER hdl=>meth ACTIVATION 'X'.
  cls=>meth( ).