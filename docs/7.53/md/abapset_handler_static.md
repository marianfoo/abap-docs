  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_processing_blocks.htm) →  [Call Event Handler](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_event_handler.htm) →  [SET HANDLER](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_handler.htm) → 

SET HANDLER - static\_event

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_handler_shortref.htm)

Syntax

SET HANDLER handler1 handler2 ... *\[*ACTIVATION act*\]*.

Addition:

[... ACTIVATION act](#!ABAP_ONE_ADD@1@)

Effect

This statement registers the [event handlers](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenevent_handler_glosry.htm "Glossary Entry") handler1 handler2 ... for the associated [static events](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstatic_event_glosry.htm "Glossary Entry"). The addition ACTIVATION can be used to deregister event handlers or perform a dynamic registration.

An event handler is executed if the associated static event is raised using [RAISE EVENT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapraise_event.htm). The list handler1 handler2 ... has the same form as for [instance events](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_handler_instance.htm), but can only contain event handlers for static events declared using [CLASS EVENTS.](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass-events.htm)

Events that can be handled by an event handler for static events are defined uniquely by their definition in the statement [*\[*CLASS-*\]*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass-methods_event_handler.htm) [METHODS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethods_event_handler.htm). The addition FOR (required when registering or deregistering instance event handlers to determine the raising instances) cannot be specified. An event handler for static events is registered or deregistered independently of the instance and this applies globally to the current [internal session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_session_glosry.htm "Glossary Entry").

Addition

... ACTIVATION act

Effect

The same applies to the syntax and semantics of the addition ACTIVATION as to the statement [SETHANDLER](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_handler_instance.htm) for instance events.

Note

As long as the registration of an instance method as an event handler for a static event is not canceled using ACTIVATION " ", the associated object cannot be deleted by the [garbage collector](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengarbage_collector_glosry.htm "Glossary Entry"). This is because it is still used by the runtime environment.

Example

Registering a static handler for a static event. After the event has been triggered, the handling takes place.

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