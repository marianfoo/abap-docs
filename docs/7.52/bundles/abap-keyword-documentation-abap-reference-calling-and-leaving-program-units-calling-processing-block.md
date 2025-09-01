# ABAP - Keyword Documentation / ABAP - Reference / Calling and leaving program units / Calling Processing Blocks / Call Event Handler

Included pages: 6



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.52](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abencall_event_handler.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencall_event_handler.htm)
- [abapraise_event.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapraise_event.htm)
- [abapset_handler.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_handler.htm)
- [abapset_handler_instance.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_handler_instance.htm)
- [abapset_handler_static.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_handler_static.htm)

**Bundle Contains**: 5 documentation pages
**Version**: ABAP 7.52
**Generated**: 2025-09-01T11:25:46.433Z

---

### abencall_event_handler.htm

> **📖 Official SAP Documentation**: [abencall_event_handler.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencall_event_handler.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and leaving program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Processing Blocks](javascript:call_link\('abencall_processing_blocks.htm'\)) → 

Call Event Handler

Event handlers are special methods that are declared using the addition [FOR EVENT ... OF](javascript:call_link\('abapmethods_event_handler.htm'\)) of the statements [METHODS](javascript:call_link\('abapmethods.htm'\)) and [CLASS-METHODS](javascript:call_link\('abapclass-methods.htm'\)). They are not usually called directly using explicit [method calls](javascript:call_link\('abenmethod_calls.htm'\)).

-   Instead, they are called indirectly using [RAISE EVENT](javascript:call_link\('abapraise_event.htm'\)).

-   They can only be executed if an event handler is registered using [SET HANDLER](javascript:call_link\('abapset_handler.htm'\)).

Continue
[RAISE EVENT](javascript:call_link\('abapraise_event.htm'\))
[SET HANDLER](javascript:call_link\('abapset_handler.htm'\))



**📖 Source**: [abencall_event_handler.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencall_event_handler.htm)

### abapraise_event.htm

> **📖 Official SAP Documentation**: [abapraise_event.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapraise_event.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and leaving program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Processing Blocks](javascript:call_link\('abencall_processing_blocks.htm'\)) →  [Call Event Handler](javascript:call_link\('abencall_event_handler.htm'\)) → 

RAISE EVENT

[Quick Reference](javascript:call_link\('abapraise_event_shortref.htm'\))

Syntax

RAISE EVENT evt *\[*EXPORTING p1 = a1 p2 = a2 ...*\]*.

Addition:

[... EXPORTING p1 = a1 p2 = a2 ...](#!ABAP_ONE_ADD@1@)

Effect

This statement can only be used in methods. It raises the event evt. evt is the name to be specified directly for an event that must be declared with the statement [EVENTS](javascript:call_link\('abapevents.htm'\)) or [CLASS-EVENTS](javascript:call_link\('abapclass-events.htm'\)) directly in the same class, in a superclass, or in an implemented interface.

After the event is raised, all [event handlers](javascript:call_link\('abenevent_handler_glosry.htm'\) "Glossary Entry") that were registered for this event with the statement [SET HANDLER](javascript:call_link\('abapset_handler.htm'\)) are executed. The execution order is undefined and can change while the program is being executed. After the event handlers have been executed, the system continues with the method after RAISE EVENT.

Addition

... EXPORTING p1 = a1 p2 = a2 ...

Effect

If the addition EXPORTING is used, actual parameters a1 a2 ... can be assigned to all optional formal parameters p1 p2... of the event evt and must be assigned to all non-optional formal parameters. The values of the actual parameters are passed to the event handlers whose definition specifies the formal parameters after the addition IMPORTING of the statements [*\[*CLASS-*\]*](javascript:call_link\('abapclass-events.htm'\))[EVENTS](javascript:call_link\('abapevents.htm'\)).

a1, a2, ... are [general expression positions](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry"). In other words, functions and expressions can be passed as actual parameters, alongside data objects. [Special rules](javascript:call_link\('abentyping_arith_expr.htm'\)) apply in this case.

Notes

-   To avoid endless recursion, a maximum of 1023 further events can be raised using RAISE EVENT in event handling.
    
-   If the formal parameter sender is defined for an event handler, this is automatically supplied with the reference to the raising object when instance events are raised. It cannot be specified explicitly after EXPORTING.
    
-   If there is an exception in an event handler, event handling is canceled. For a class-based exception, the control is then returned to the raising object. See [Class-Based Exceptions in Event Handlers](javascript:call_link\('abenexceptions_events.htm'\)).
    

Example

Raises an instance event e1. An actual parameter must be assigned to the non-optional formal parameter p1.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    EVENTS e1 EXPORTING value(p1) TYPE string
                        value(p2) TYPE i OPTIONAL.
    METHODS m1.
ENDCLASS.
...
CLASS c1 IMPLEMENTATION.
  METHOD m1.
    ...
    RAISE EVENT e1 EXPORTING p1 = '...'.
    ...
  ENDMETHOD.
ENDCLASS.

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Non-Handleable Exceptions

-   Cause: RAISE EVENT statements nested too deeply.
    Runtime error: RAISE\_EVENT\_NESTING\_LIMIT



**📖 Source**: [abapraise_event.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapraise_event.htm)

### abapset_handler.htm

> **📖 Official SAP Documentation**: [abapset_handler.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_handler.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and leaving program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Processing Blocks](javascript:call_link\('abencall_processing_blocks.htm'\)) →  [Call Event Handler](javascript:call_link\('abencall_event_handler.htm'\)) → 

SET HANDLER

[Quick Reference](javascript:call_link\('abapset_handler_shortref.htm'\))

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

Notes

-   The statement SET HANDLER manages internally different system tables that associate the event raisers and event handlers with each in single registrations, mass registrations, and registrations of static events. Each registration represents a row in one of the system tables assigned to the event raiser. A handler can only appear once in a particular system table, but can appear in multiple system tables, that is, it can be registered for different events. When the system raises an event using RAISE EVENT, it evaluates the corresponding system tables and calls the event handlers registered there.
    
-   The order of the calls of registered event handlers is not defined and can change during program runtime. To get a fixed order of different method calls, these can be called in one event handler.
    
-   When registering an instance method, a reference to the corresponding object in the relevant table is created and then deleted again when deregistering. With respect to the [garbage collector](javascript:call_link\('abengarbage_collector_glosry.htm'\) "Glossary Entry"), such a reference has the same effect as a reference in a reference variable. Objects registered as handlers are not deleted as long as they are registered, that is, they are not deregistered using the ACTIVATION addition. If a raising instance is deleted by the garbage collector, the corresponding system table is also deleted and as a result, its registrations are reversed.
    
-   If the statement SET HANDLER registers the current handler again for the current event in event handling, it is not clear whether the registration is ignored by the current event handler. This can produce endless recursions and should be avoided.
    

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

Non-Handleable Exceptions

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
[SET HANDLER - FOR](javascript:call_link\('abapset_handler_instance.htm'\))
[SET HANDLER - static\_event](javascript:call_link\('abapset_handler_static.htm'\))



**📖 Source**: [abapset_handler.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_handler.htm)

### abapset_handler_instance.htm

> **📖 Official SAP Documentation**: [abapset_handler_instance.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_handler_instance.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and leaving program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Processing Blocks](javascript:call_link\('abencall_processing_blocks.htm'\)) →  [Call Event Handler](javascript:call_link\('abencall_event_handler.htm'\)) →  [SET HANDLER](javascript:call_link\('abapset_handler.htm'\)) → 

SET HANDLER - FOR

[Quick Reference](javascript:call_link\('abapset_handler_shortref.htm'\))

Syntax

SET HANDLER handler1 handler2 ... FOR *{* oref *|**{*ALL INSTANCES*}* *}*
                                  *\[*ACTIVATION act*\]*.

Extras:

[1\. ... FOR oref](#!ABAP_ADDITION_1@1@)
[2\. ... FOR ALL INSTANCES](#!ABAP_ADDITION_2@2@)
[3\. ... ACTIVATION act](#!ABAP_ADDITION_3@3@)

Effect

This statement registers the [event handlers](javascript:call_link\('abenevent_handler_glosry.htm'\) "Glossary Entry") handler1 handler2 ... for the associated [instance events](javascript:call_link\('abeninstance_event_glosry.htm'\) "Glossary Entry") of the objects specified after FOR. The addition ACTIVATION can be used to deregister event handlers or perform a dynamic registration.

An event handler is raised if the associated instance event is raised using [RAISE EVENT](javascript:call_link\('abapraise_event.htm'\)) in an object for which it is registered. An event handler handler can be specified as follows, where the names have the same meaning as in the [explicit method call](javascript:call_link\('abapcall_method_meth_ident_stat.htm'\)):

-   meth
    
-   oref->meth
    
-   class=>meth
    

Methods meth can be specified from the same class or from other classes defined as instance event handlers using the addition FOR EVENT evt OF {class|intf} of the statements [*\[*CLASS-*\]*](javascript:call_link\('abapclass-methods_event_handler.htm'\))[METHODS](javascript:call_link\('abapmethods_event_handler.htm'\)). No event handlers for [static events](javascript:call_link\('abenstatic_event_glosry.htm'\) "Glossary Entry") can be specified. At least one name must be specified.

The type class or intf specified after FOR EVENT OF in the definition of an instance event handler defines the objects whose events it can handle. Single objects or all handleable objects can be specified after FOR.

Addition 1

... FOR oref

Effect

This addition registers or deregisters the event handlers of the list handler1 handler2 ... for exactly one object. oref is an object reference that must point to an object whose events can be handled by the specified event handlers. The class of the object must be class or a subclass of class, or must implement the interface intf directly or through a superclass.

oref is a [functional operand position](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry").

Example

Registers an event handler for an ALV event.

CLASS demo DEFINITION.
  PUBLIC SECTION.
    METHODS main.
  PRIVATE SECTION.
    DATA itab TYPE TABLE OF scarr.
    METHODS handle\_double\_click
            FOR EVENT double\_click OF cl\_salv\_events\_table.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA alv TYPE REF TO cl\_salv\_table.
    ...
    TRY.
        cl\_salv\_table=>factory(
          IMPORTING r\_salv\_table = alv
          CHANGING  t\_table      = itab ).
        SET HANDLER handle\_double\_click FOR alv->get\_event( ).
      CATCH cx\_salv\_msg.
        ...
    ENDTRY.
  ENDMETHOD.
  METHOD handle\_double\_click.
     ...
  ENDMETHOD.
ENDCLASS.

Addition 2

... FOR ALL INSTANCES

Effect

This addition registers or deregisters the event handlers of the list handler1 handler2 ... for all objects whose events they can handle. These are all objects whose classes are either class or the subclass of class, or which implement the interface intf directly or through a superclass. A registration of this type is also valid for all raising instances created after the statement SET HANDLER.

Note

Registration with FOR ALL INSTANCES applies also in particular for temporary instances as they can be created when using the instantiaion operator [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)).

Addition 3

... ACTIVATION act

Effect

A single-character text-like field act can be specified after the addition ACTIVATION. If act has the value "X" (the default value), the event handlers handler are registered. If act has the value " ", however, the registration of the event handlers handler is canceled. A single registration cannot, on the other hand, be deregistered using mass deregistration. Conversely, individual raising objects cannot be excluded from registration after a mass registration.

Note

As long as the registration of an instance method as an event handler for an instance event is not canceled using ACTIVATION " " or all raising instances are deleted, the associated object cannot be deleted by the [garbage collector](javascript:call_link\('abengarbage_collector_glosry.htm'\) "Glossary Entry"). This is because it is still used by the runtime environment.

Example

Registers an event handler with FOR ALL INSTANCES. The events of all temporary instances created with [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)) are handled until registration is stopped. The program can be executed as DEMO\_SET\_HANDLER\_FOR\_ALL.

CLASS cls DEFINITION.
  PUBLIC SECTION.
    EVENTS evt
      EXPORTING VALUE(p) TYPE string DEFAULT \`nop\`.
    METHODS meth
      IMPORTING p TYPE string.
ENDCLASS.
CLASS cls IMPLEMENTATION.
  METHOD meth.
    RAISE EVENT evt EXPORTING p = p.
  ENDMETHOD.
ENDCLASS.
CLASS hdl DEFINITION.
  PUBLIC SECTION.
    METHODS meth FOR EVENT evt OF cls
      IMPORTING p.
ENDCLASS.
CLASS hdl IMPLEMENTATION.
  METHOD meth.
    cl\_demo\_output=>write( p ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  DATA(href) = NEW hdl( ).
  SET HANDLER href->meth FOR ALL INSTANCES.
  NEW cls( )->meth( \`Ping 1\`).
  NEW cls( )->meth( \`Ping 2\`).
  NEW cls( )->meth( \`Ping 3\`).
  SET HANDLER href->meth FOR ALL INSTANCES ACTIVATION ' '.
  NEW cls( )->meth( \`Ping 4\`).
  NEW cls( )->meth( \`Ping 5\`).
  NEW cls( )->meth( \`Ping 6\`).
  cl\_demo\_output=>display( ).



**📖 Source**: [abapset_handler_instance.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_handler_instance.htm)

### abapset_handler_static.htm

> **📖 Official SAP Documentation**: [abapset_handler_static.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_handler_static.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and leaving program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Processing Blocks](javascript:call_link\('abencall_processing_blocks.htm'\)) →  [Call Event Handler](javascript:call_link\('abencall_event_handler.htm'\)) →  [SET HANDLER](javascript:call_link\('abapset_handler.htm'\)) → 

SET HANDLER - static\_event

[Quick Reference](javascript:call_link\('abapset_handler_shortref.htm'\))

Syntax

SET HANDLER handler1 handler2 ... *\[*ACTIVATION act*\]*.

Addition:

[... ACTIVATION act](#!ABAP_ONE_ADD@1@)

Effect

This statement registers the [event handlers](javascript:call_link\('abenevent_handler_glosry.htm'\) "Glossary Entry") handler1 handler2 ... for the associated [static events](javascript:call_link\('abenstatic_event_glosry.htm'\) "Glossary Entry"). The addition ACTIVATION can be used to deregister event handlers or perform a dynamic registration.

An event handler is executed if the associated static event is raised using [RAISE EVENT](javascript:call_link\('abapraise_event.htm'\)). The list handler1 handler2 ... has the same form as for [instance events](javascript:call_link\('abapset_handler_instance.htm'\)), but can only contain event handlers for static events declared using [CLASS EVENTS.](javascript:call_link\('abapclass-events.htm'\))

Events that can be handled by an event handler for static events are defined uniquely by their definition in the statement [*\[*CLASS-*\]*](javascript:call_link\('abapclass-methods_event_handler.htm'\)) [METHODS](javascript:call_link\('abapmethods_event_handler.htm'\)). The addition FOR (required when registering or deregistering instance event handlers to determine the raising instances) cannot be specified. An event handler for static events is registered or deregistered independently of the instance and this applies globally to the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry").

Addition

... ACTIVATION act

Effect

The same applies to the syntax and semantics of the addition ACTIVATION as to the statement [SETHANDLER](javascript:call_link\('abapset_handler_instance.htm'\)) for instance events.

Note

As long as the registration of an instance method as an event handler for a static event is not canceled using ACTIVATION " ", the associated object cannot be deleted by the [garbage collector](javascript:call_link\('abengarbage_collector_glosry.htm'\) "Glossary Entry"). This is because it is still used by the runtime environment.

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



**📖 Source**: [abapset_handler_static.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_handler_static.htm)

### abapset_handler.htm

> **📖 Official SAP Documentation**: [abapset_handler.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_handler.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abapset_handler.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_handler.htm)


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and leaving program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Processing Blocks](javascript:call_link\('abencall_processing_blocks.htm'\)) →  [Call Event Handler](javascript:call_link\('abencall_event_handler.htm'\)) → 

SET HANDLER

[Quick Reference](javascript:call_link\('abapset_handler_shortref.htm'\))

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

Notes

-   The statement SET HANDLER manages internally different system tables that associate the event raisers and event handlers with each in single registrations, mass registrations, and registrations of static events. Each registration represents a row in one of the system tables assigned to the event raiser. A handler can only appear once in a particular system table, but can appear in multiple system tables, that is, it can be registered for different events. When the system raises an event using RAISE EVENT, it evaluates the corresponding system tables and calls the event handlers registered there.
    
-   The order of the calls of registered event handlers is not defined and can change during program runtime. To get a fixed order of different method calls, these can be called in one event handler.
    
-   When registering an instance method, a reference to the corresponding object in the relevant table is created and then deleted again when deregistering. With respect to the [garbage collector](javascript:call_link\('abengarbage_collector_glosry.htm'\) "Glossary Entry"), such a reference has the same effect as a reference in a reference variable. Objects registered as handlers are not deleted as long as they are registered, that is, they are not deregistered using the ACTIVATION addition. If a raising instance is deleted by the garbage collector, the corresponding system table is also deleted and as a result, its registrations are reversed.
    
-   If the statement SET HANDLER registers the current handler again for the current event in event handling, it is not clear whether the registration is ignored by the current event handler. This can produce endless recursions and should be avoided.
    

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

Non-Handleable Exceptions

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
[SET HANDLER - FOR](javascript:call_link\('abapset_handler_instance.htm'\))
[SET HANDLER - static\_event](javascript:call_link\('abapset_handler_static.htm'\))
