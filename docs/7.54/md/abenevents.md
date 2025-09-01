  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [Components in Classes and Interfaces](javascript:call_link\('abenclass_ifac_components.htm'\)) → 

Events

Events are declared using the statements [EVENTS](javascript:call_link\('abapevents.htm'\)) and [CLASS-EVENTS](javascript:call_link\('abapclass-events.htm'\)), which are possible only in the declaration part of classes and interfaces. Declaring an event in a class means that the methods of the class trigger the event and can therefore cause execution of [event handlers](javascript:call_link\('abenevent_handler_glosry.htm'\) "Glossary Entry"). In the declaration, you can define output parameters for an event, for which actual parameters are transferred to the event handler when the event is executed.

The statement EVENTS declares instance events. Instance events are linked to objects. They can only be triggered in instance methods of the same class.

The statement CLASS-EVENTS declares static events. Static events are not linked to objects. They can be triggered in all methods of the same class.

Continue
[EVENTS](javascript:call_link\('abapevents.htm'\))
[CLASS-EVENTS](javascript:call_link\('abapclass-events.htm'\))
[EVENTS - parameters](javascript:call_link\('abapevents_parameters.htm'\))
![Example](exa.gif "Example") [Events in Inheritance](javascript:call_link\('abenevent_inheritance_abexa.htm'\))