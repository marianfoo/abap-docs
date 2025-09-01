  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces (ABAP Objects)](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Components in Classes and Interfaces](javascript:call_link\('abenclass_ifac_components.htm'\)) → 

ABAP Objects - Events

Events are declared using the following statements:

-   [EVENTS](javascript:call_link\('abapevents.htm'\))
-   [CLASS-EVENTS](javascript:call_link\('abapclass-events.htm'\))

These statements are only possible in the declaration part of classes and interfaces.

The declaration of an event of a class has the effect that the methods of the class raise the event and hence trigger the execution of the [event handlers](javascript:call_link\('abenevent_handler_glosry.htm'\) "Glossary Entry"). In the declaration, output parameters can be defined for an event for which actual parameters are then passed to the event handlers when the event is raised.

The statement EVENTS declares instance events. Instance events are bound to objects. They can only be raised in instance methods of the same class.

The statement CLASS-EVENTS declares static events. Static events are not bound to objects. They can be raised in all methods of the same class.

Continue
[EVENTS](javascript:call_link\('abapevents.htm'\))
[CLASS-EVENTS](javascript:call_link\('abapclass-events.htm'\))
[EVENTS, parameters](javascript:call_link\('abapevents_parameters.htm'\))
![Example](exa.gif "Example") [ABAP Objects - Events in Inheritance](javascript:call_link\('abenevent_inheritance_abexa.htm'\))