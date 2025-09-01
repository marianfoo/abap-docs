# ABAP - Keyword Documentation / ABAP - Programming Language / Calling and Exiting Program Units / Calling Processing Blocks / Call Event Handler

Included pages: 6


### abencall_event_handler.htm

---
title: "Call Event Handler"
description: |
  Event handlers are special methods that are declared using the addition FOR EVENT ... OF(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_event_handler.htm) of the statements METHODS(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods.htm) and
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_event_handler.htm"
abapFile: "abencall_event_handler.htm"
keywords: ["do", "if", "method", "class", "abencall", "event", "handler"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_processing_blocks.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Call%20Event%20Handler%2C%20ABENCALL_EVENT_HANDLER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Call Event Handler

Event handlers are special methods that are declared using the addition [FOR EVENT ... OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_event_handler.htm) of the statements [METHODS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods.htm) and [CLASS-METHODS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass-methods.htm). They are not usually called directly using explicit [method calls](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmethod_calls.htm).

-   Instead, they are called indirectly using [RAISE EVENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_event.htm).
-   They can only be executed if an event handler is registered using [SET HANDLER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_handler.htm).

Continue
[RAISE EVENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_event.htm)
[SET HANDLER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_handler.htm)


### abapraise_event.htm

---
title: "RAISE EVENT"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_event_shortref.htm) Syntax RAISE EVENT evt EXPORTING p1 = a1 p2 = a2 .... Addition: ... EXPORTING p1 = a1 p2 = a2 ...(#!ABAP_ONE_ADD@1@) Effect This statement can only be used in methods. It raises
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_event.htm"
abapFile: "abapraise_event.htm"
keywords: ["do", "if", "case", "try", "catch", "method", "class", "data", "abapraise", "event"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_processing_blocks.htm) →  [Call Event Handler](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_event_handler.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAISE%20EVENT%2C%20ABAPRAISE_EVENT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAISE EVENT

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_event_shortref.htm)

Syntax

RAISE EVENT evt *\[*EXPORTING p1 = a1 p2 = a2 ...*\]*.

Addition:

[... EXPORTING p1 = a1 p2 = a2 ...](#!ABAP_ONE_ADD@1@)

Effect

This statement can only be used in methods. It raises the event evt. evt is the name to be specified directly for an event that must be declared with the statement [EVENTS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapevents.htm) or [CLASS-EVENTS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass-events.htm) directly in the same class, in a superclass, or in an implemented interface.

After the event is raised, all [event handlers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenevent_handler_glosry.htm "Glossary Entry") that were registered for this event with the statement [SET HANDLER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_handler.htm) are executed. The order of execution is undefined and can change during program execution. After the event handlers have been executed, the method continues after RAISE EVENT.

Addition   

... EXPORTING p1 = a1 p2 = a2 ...

Effect

If the addition EXPORTING is used, actual parameters a1 a2 ... can be assigned to all optional formal parameters p1 p2... of the event evt and must be assigned to all non-optional formal parameters. The values of the actual parameters are passed to those event handlers whose definition lists the according formal parameters after the addition IMPORTING of the statements [*\[*CLASS-*\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass-events.htm)[EVENTS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapevents.htm).

a1, a2, ... are [general expression positions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry"), which means that, alongside data objects, functions and expressions can also be passed as actual parameters. [Special rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentyping_arith_expr.htm) apply in this case.

Hints

-   To avoid endless recursion, a maximum of 1023 further events can be raised using RAISE EVENT in event handling.
-   If the formal parameter sender is defined for an event handler, this is automatically supplied with the reference to the raising object when instance events are raised. It cannot be specified explicitly after EXPORTING.
-   If there is an exception in an event handler, event handling is canceled. For a class-based exception, the control is then returned to the trigger. See [Class-Based Exceptions in Event Handlers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexceptions_events.htm).

Example

Raising of the instance event e1. An actual parameter must be assigned to the non-optional formal parameter p1.

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

[Exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_exceptions.htm)

Uncatchable Exceptions

-   Cause: RAISE EVENT statements nested too deeply.
    Runtime error: RAISE\_EVENT\_NESTING\_LIMIT


### abapset_handler.htm

---
title: "SET HANDLER"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_handler_shortref.htm) Syntax Forms Register Instance Event Handlers(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_handler_instance.htm) 1. SET HANDLER handler1 handler2 ... FOR oref
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_handler.htm"
abapFile: "abapset_handler.htm"
keywords: ["delete", "do", "if", "try", "catch", "method", "class", "data", "abapset", "handler"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_processing_blocks.htm) →  [Call Event Handler](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_event_handler.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SET%20HANDLER%2C%20ABAPSET_HANDLER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SET HANDLER

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_handler_shortref.htm)

Syntax Forms

[Register Instance Event Handlers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_handler_instance.htm)

1\. SET HANDLER handler1 handler2 ... FOR oref*|**{*ALL INSTANCES*}*
                                    *\[*ACTIVATION act*\]*.

[Register Static Event Handlers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_handler_static.htm)

2\. SET HANDLER handler1 handler2 ... *\[*ACTIVATION act*\]*.

Effect

This statement registers or deregisters the [event handlers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenevent_handler_glosry.htm "Glossary Entry") handler for the corresponding [instance events](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninstance_event_glosry.htm "Glossary Entry") or [static events](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstatic_event_glosry.htm "Glossary Entry").

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
-   When an instance method is registered, a reference to the corresponding object is added in the relevant table and then deleted again when deregistering. With respect to the [Garbage Collector](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengarbage_collector_glosry.htm "Glossary Entry"), such a reference has the same effect as a reference in a reference variable. Objects registered as handlers are therefore not deleted as long as they are registered, that is, they are not deregistered using the addition ACTIVATION. If a triggering instance is deleted by the Garbage Collector, the corresponding system table is also deleted and, as a result, its registrations are removed.
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
CLASS exa DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
...
CLASS c3 IMPLEMENTATION.
  METHOD h1.
    ...
  ENDMETHOD.
  METHOD h2.
    ...
  ENDMETHOD.
  METHOD h3.
    ...
  ENDMETHOD.
ENDCLASS.
CLASS exa IMPLEMENTATION.
  METHOD main.
    DATA: trigger TYPE REF TO c2,
          handler TYPE REF TO c3.
    SET HANDLER: c3=>h1 handler->h2 FOR trigger,
                 handler->h3.
  ENDMETHOD.
ENDCLASS.

[Exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_exceptions.htm)

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
[SET HANDLER, FOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_handler_instance.htm)
[SET HANDLER, static\_event](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_handler_static.htm)


### abapset_handler_instance.htm

---
title: "SET HANDLER, FOR"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_handler_shortref.htm) Syntax SET HANDLER handler1 handler2 ... FOR  oref ALL INSTANCES  ACTIVATION act. Additions: 1. ... FOR oref(#!ABAP_ADDITION_1@1@) 2. ... FOR ALL INSTANCES(#!A
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_handler_instance.htm"
abapFile: "abapset_handler_instance.htm"
keywords: ["delete", "do", "if", "try", "catch", "method", "class", "data", "abapset", "handler", "instance"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_processing_blocks.htm) →  [Call Event Handler](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_event_handler.htm) →  [SET HANDLER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_handler.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SET%20HANDLER%2C%20FOR%2C%20ABAPSET_HANDLER_INSTANCE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SET HANDLER, FOR

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_handler_shortref.htm)

Syntax

SET HANDLER handler1 handler2 ... FOR *{* oref *|**{*ALL INSTANCES*}* *}*
                                  *\[*ACTIVATION act*\]*.

Additions:

[1\. ... FOR oref](#!ABAP_ADDITION_1@1@)
[2\. ... FOR ALL INSTANCES](#!ABAP_ADDITION_2@2@)
[3\. ... ACTIVATION act](#!ABAP_ADDITION_3@3@)

Effect

This statement registers the [event handlers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenevent_handler_glosry.htm "Glossary Entry") handler1 handler2 ... for the associated [instance events](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninstance_event_glosry.htm "Glossary Entry") of the objects specified after FOR. The addition ACTIVATION can be used to deregister event handlers or perform a dynamic registration.

An event handler is executed if the associated instance event is raised using [RAISE EVENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_event.htm) in an object for which it is registered. An event handler handler can be specified as follows, where the names have the same meaning as in the [explicit method call](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_method_meth_ident_stat.htm):

-   meth
-   oref->meth
-   class=>meth

Methods meth can be specified from the same class or from other classes defined as instance event handlers using the addition FOR EVENT evt OF {class|intf} of the statements [*\[*CLASS-*\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass-methods_event_handler.htm)[METHODS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_event_handler.htm). No event handlers for [static events](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstatic_event_glosry.htm "Glossary Entry") can be specified. At least one name must be specified.

The type class or intf specified after FOR EVENT OF in the definition of an instance event handler specifies the objects whose events it can handle. Single objects or all handleable objects can be specified after the addition FOR.

Addition 1   

... FOR oref

Effect

This addition registers or deregisters the event handlers of the list handler1 handler2 ... for exactly one object. oref is an object reference that must point to an object whose events can be handled by the specified event handlers. The class of the object must be class or a subclass of class, or must implement the interface intf directly or through a superclass.

oref is a [functional operand position](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunctional_position_glosry.htm "Glossary Entry").

Example

Registration of an event handler for an ALV event.

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

This addition registers or deregisters the event handlers of the list handler1 handler2 ... for all objects whose events they can handle. These are all objects whose classes are either class or the subclass of class, or which implement the interface intf directly or through a superclass. Such a registration also applies to all raising instances created after the statement SET HANDLER.

Hint

Registration with FOR ALL INSTANCES applies also in particular to temporary instances that can be created when using the instantiation operator [NEW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_new.htm).

Addition 3   

... ACTIVATION act

Effect

A single-character text-like field act can be specified after the addition ACTIVATION. If act has the value X (the default value), the event handlers handler are registered. If act has the value blank, however, the registration of the event handlers handler is canceled. A single registration cannot, however, be deregistered using mass deregistration. Conversely, individual raising objects cannot be excluded from registration after a mass registration.

Hint

As long as the registration of an instance method as an event handler for an instance event is not canceled using ACTIVATION ' ' or all raising instances are deleted, the associated object cannot be deleted by the [Garbage Collector](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengarbage_collector_glosry.htm "Glossary Entry"). This is because it is still used by the runtime framework.

Example

Registration of an event handler with FOR ALL INSTANCES. The events of all temporary instances created with [NEW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_new.htm) are handled until registration is stopped. The code is taken from class CL\_DEMO\_SET\_HANDLER\_FOR\_ALL and can be executed there.

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
CLASS exa DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS exa IMPLEMENTATION.
  METHOD main.
    FINAL(href) = NEW hdl( ).
    SET HANDLER href->meth FOR ALL INSTANCES.
    NEW cls( )->meth( \`Ping 1\` ).
    NEW cls( )->meth( \`Ping 2\` ).
    NEW cls( )->meth( \`Ping 3\` ).
    SET HANDLER href->meth FOR ALL INSTANCES ACTIVATION ' '.
    NEW cls( )->meth( \`Ping 4\` ).
    NEW cls( )->meth( \`Ping 5\` ).
    NEW cls( )->meth( \`Ping 6\` ).
    cl\_demo\_output=>display( ).
  ENDMETHOD.
ENDCLASS.


### abapset_handler_static.htm

---
title: "Syntax"
description: |
  SET HANDLER handler1 handler2 ... ACTIVATION act. Addition: ... ACTIVATION act(#!ABAP_ONE_ADD@1@) Effect This statement registers the event handlers(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenevent_handler_glosry.htm 'Glossary Entry') handler1 handler2 ... for th
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_handler_static.htm"
abapFile: "abapset_handler_static.htm"
keywords: ["delete", "do", "if", "try", "method", "class", "abapset", "handler", "static"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_processing_blocks.htm) →  [Call Event Handler](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_event_handler.htm) →  [SET HANDLER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_handler.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SET%20HANDLER%2C%20static_event%2C%20ABAPSET_HANDLER_STATIC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SET HANDLER, static\_event

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_handler_shortref.htm)

Syntax

SET HANDLER handler1 handler2 ... *\[*ACTIVATION act*\]*.

Addition:

[... ACTIVATION act](#!ABAP_ONE_ADD@1@)

Effect

This statement registers the [event handlers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenevent_handler_glosry.htm "Glossary Entry") handler1 handler2 ... for the associated [static events](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstatic_event_glosry.htm "Glossary Entry"). The addition ACTIVATION can be used to deregister event handlers or to perform a dynamic registration.

An event handler is executed if the associated static event is raised using [RAISE EVENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_event.htm). The list handler1 handler2 ... has the same form as for [instance events](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_handler_instance.htm), but can only contain event handlers for static events declared using [CLASS EVENTS.](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass-events.htm)

Events that can be handled by an event handler for static events are defined uniquely by their definition in the statement [*\[*CLASS-*\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass-methods_event_handler.htm) [METHODS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_event_handler.htm). During registration, the addition FOR, which is required to register or deregister instance event handlers that determine the raising instances, cannot be specified. An event handler for static events is registered or deregistered independently of the instance and this applies globally to the current [internal session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session_glosry.htm "Glossary Entry").

Addition   

... ACTIVATION act

Effect

The syntax and semantics of the addition ACTIVATION are the same as for the statement [SET HANDLER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_handler_instance.htm) for instance events.

Hint

As long as the registration of an instance method as an event handler for a static event is not canceled using ACTIVATION blank, the associated object cannot be deleted by the [Garbage Collector](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengarbage_collector_glosry.htm "Glossary Entry"). This is because it is still used by the runtime framework.

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


### abapset_handler.htm

---
title: "SET HANDLER"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_handler_shortref.htm) Syntax Forms Register Instance Event Handlers(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_handler_instance.htm) 1. SET HANDLER handler1 handler2 ... FOR oref
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_handler.htm"
abapFile: "abapset_handler.htm"
keywords: ["delete", "do", "if", "try", "catch", "method", "class", "data", "abapset", "handler"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_processing_blocks.htm) →  [Call Event Handler](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_event_handler.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SET%20HANDLER%2C%20ABAPSET_HANDLER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SET HANDLER

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_handler_shortref.htm)

Syntax Forms

[Register Instance Event Handlers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_handler_instance.htm)

1\. SET HANDLER handler1 handler2 ... FOR oref*|**{*ALL INSTANCES*}*
                                    *\[*ACTIVATION act*\]*.

[Register Static Event Handlers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_handler_static.htm)

2\. SET HANDLER handler1 handler2 ... *\[*ACTIVATION act*\]*.

Effect

This statement registers or deregisters the [event handlers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenevent_handler_glosry.htm "Glossary Entry") handler for the corresponding [instance events](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninstance_event_glosry.htm "Glossary Entry") or [static events](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstatic_event_glosry.htm "Glossary Entry").

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
-   When an instance method is registered, a reference to the corresponding object is added in the relevant table and then deleted again when deregistering. With respect to the [Garbage Collector](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengarbage_collector_glosry.htm "Glossary Entry"), such a reference has the same effect as a reference in a reference variable. Objects registered as handlers are therefore not deleted as long as they are registered, that is, they are not deregistered using the addition ACTIVATION. If a triggering instance is deleted by the Garbage Collector, the corresponding system table is also deleted and, as a result, its registrations are removed.
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
CLASS exa DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
...
CLASS c3 IMPLEMENTATION.
  METHOD h1.
    ...
  ENDMETHOD.
  METHOD h2.
    ...
  ENDMETHOD.
  METHOD h3.
    ...
  ENDMETHOD.
ENDCLASS.
CLASS exa IMPLEMENTATION.
  METHOD main.
    DATA: trigger TYPE REF TO c2,
          handler TYPE REF TO c3.
    SET HANDLER: c3=>h1 handler->h2 FOR trigger,
                 handler->h3.
  ENDMETHOD.
ENDCLASS.

[Exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_exceptions.htm)

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
[SET HANDLER, FOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_handler_instance.htm)
[SET HANDLER, static\_event](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_handler_static.htm)
