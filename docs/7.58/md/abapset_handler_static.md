  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencall_processing_blocks.htm) →  [Call Event Handler](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencall_event_handler.htm) →  [SET HANDLER](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_handler.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SET%20HANDLER%2C%20static_event%2C%20ABAPSET_HANDLER_STATIC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SET HANDLER, static\_event

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_handler_shortref.htm)

Syntax

SET HANDLER handler1 handler2 ... *\[*ACTIVATION act*\]*.

Addition:

[... ACTIVATION act](#!ABAP_ONE_ADD@1@)

Effect

This statement registers the [event handlers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenevent_handler_glosry.htm "Glossary Entry") handler1 handler2 ... for the associated [static events](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstatic_event_glosry.htm "Glossary Entry"). The addition ACTIVATION can be used to deregister event handlers or to perform a dynamic registration.

An event handler is executed if the associated static event is raised using [RAISE EVENT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_event.htm). The list handler1 handler2 ... has the same form as for [instance events](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_handler_instance.htm), but can only contain event handlers for static events declared using [CLASS EVENTS.](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass-events.htm)

Events that can be handled by an event handler for static events are defined uniquely by their definition in the statement [*\[*CLASS-*\]*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass-methods_event_handler.htm) [METHODS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods_event_handler.htm). During registration, the addition FOR, which is required to register or deregister instance event handlers that determine the raising instances, cannot be specified. An event handler for static events is registered or deregistered independently of the instance and this applies globally to the current [internal session](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternal_session_glosry.htm "Glossary Entry").

Addition   

... ACTIVATION act

Effect

The syntax and semantics of the addition ACTIVATION are the same as for the statement [SET HANDLER](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_handler_instance.htm) for instance events.

Hint

As long as the registration of an instance method as an event handler for a static event is not canceled using ACTIVATION blank, the associated object cannot be deleted by the [Garbage Collector](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengarbage_collector_glosry.htm "Glossary Entry"). This is because it is still used by the runtime framework.

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
CLASS exa DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS exa IMPLEMENTATION.
  METHOD main.
    SET HANDLER hdl=>meth ACTIVATION 'X'.
    cls=>meth( ).
  ENDMETHOD.
ENDCLASS.