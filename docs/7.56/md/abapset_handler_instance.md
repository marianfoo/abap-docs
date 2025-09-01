---
title: "SET HANDLER, FOR"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapset_handler_shortref.htm) Syntax SET HANDLER handler1 handler2 ... FOR  oref ALL INSTANCES  ACTIVATION act. Additions: 1. ... FOR oref(#!ABAP_ADDITION_1@1@) 2. ... FOR ALL INSTANCES(#!ABAP_A
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapset_handler_instance.htm"
abapFile: "abapset_handler_instance.htm"
keywords: ["select", "delete", "do", "if", "try", "catch", "method", "class", "data", "abapset", "handler", "instance"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Calling and exiting program units](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencall_processing_blocks.htm) →  [Call Event Handler](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencall_event_handler.htm) →  [SET HANDLER](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapset_handler.htm) → 

SET HANDLER, FOR

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapset_handler_shortref.htm)

Syntax

SET HANDLER handler1 handler2 ... FOR *{* oref *|**{*ALL INSTANCES*}* *}*
                                  *\[*ACTIVATION act*\]*.

Additions:

[1\. ... FOR oref](#!ABAP_ADDITION_1@1@)
[2\. ... FOR ALL INSTANCES](#!ABAP_ADDITION_2@2@)
[3\. ... ACTIVATION act](#!ABAP_ADDITION_3@3@)

Effect

This statement registers the [event handlers](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenevent_handler_glosry.htm "Glossary Entry") handler1 handler2 ... for the associated [instance events](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninstance_event_glosry.htm "Glossary Entry") of the objects specified after FOR. The addition ACTIVATION can be used to deregister event handlers or perform a dynamic registration.

An event handler is executed if the associated instance event is raised using [RAISE EVENT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapraise_event.htm) in an object for which it is registered. An event handler handler can be specified as follows, where the names have the same meaning as in the [explicit method call](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_method_meth_ident_stat.htm):

-   meth
-   oref->meth
-   class=>meth

Methods meth can be specified from the same class or from other classes defined as instance event handlers using the addition FOR EVENT evt OF {class|intf} of the statements [*\[*CLASS-*\]*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass-methods_event_handler.htm)[METHODS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_event_handler.htm). No event handlers for [static events](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstatic_event_glosry.htm "Glossary Entry") can be specified. At least one name must be specified.

The type class or intf specified after FOR EVENT OF in the definition of an instance event handler specifies the objects whose events it can handle. Single objects or all handleable objects can be specified after the addition FOR.

Addition 1   

... FOR oref

Effect

This addition registers or deregisters the event handlers of the list handler1 handler2 ... for exactly one object. oref is an object reference that must point to an object whose events can be handled by the specified event handlers. The class of the object must be class or a subclass of class, or must implement the interface intf directly or through a superclass.

oref is a [functional operand position](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunctional_position_glosry.htm "Glossary Entry").

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

Registration with FOR ALL INSTANCES applies also in particular to temporary instances that can be created when using the instantiation operator [NEW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expression_new.htm).

Addition 3   

... ACTIVATION act

Effect

A single-character text-like field act can be specified after the addition ACTIVATION. If act has the value "X" (the default value), the event handlers handler are registered. If act has the value " ", however, the registration of the event handlers handler is canceled. A single registration cannot, however, be deregistered using mass deregistration. Conversely, individual raising objects cannot be excluded from registration after a mass registration.

Hint

As long as the registration of an instance method as an event handler for an instance event is not canceled using ACTIVATION " " or all raising instances are deleted, the associated object cannot be deleted by the [Garbage Collector](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abengarbage_collector_glosry.htm "Glossary Entry"). This is because it is still used by the runtime framework.

Example

Registration of an event handler with FOR ALL INSTANCES. The events of all temporary instances created with [NEW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expression_new.htm) are handled until registration is stopped. The program can be executed as DEMO\_SET\_HANDLER\_FOR\_ALL.

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