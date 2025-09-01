  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Objects](javascript:call_link\('abenabap_objects.htm'\)) →  [ABAP Objects - Inheritance](javascript:call_link\('abeninheritance.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Inheritance%20and%20Events%2C%20ABENINHERITANCE_EVENTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

ABAP Objects - Inheritance and Events

Once declared in a superclass, an event is known in all subclasses of the inheritance tree in which it is visible and can be raised in the methods there.

An event handler can be declared with reference to all classes of the inheritance tree in which the event is visible for the event handler. However, it can only handle events raised in classes that are more specific than or equal to the class for which it is declared. If the event is raised in a method of a superclass of the class for which an event handler is declared, it cannot handle it.

The latter is particularly important when raising static events in static methods, since a static method is always executed in the class in which it was declared (see also [Inheritance and Static Components](javascript:call_link\('abeninheritance_statical.htm'\))).

Hint

In the case of event handlers for events declared in interfaces, the above also applies to the class in which the interface is included.

Executable Example

[Events in Inheritance](javascript:call_link\('abenevent_inheritance_abexa.htm'\))