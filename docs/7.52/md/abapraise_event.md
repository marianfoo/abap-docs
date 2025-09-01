  

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