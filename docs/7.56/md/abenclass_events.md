  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces (ABAP Objects)](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Overview](javascript:call_link\('abenabap_objects_oview.htm'\)) →  [ABAP Objects - Classes](javascript:call_link\('abenclasses.htm'\)) →  [ABAP Objects - Components of Classes](javascript:call_link\('abenclass_components.htm'\)) → 

ABAP Objects - Class Events

In ABAP Objects, [events](javascript:call_link\('abenevents_overview.htm'\)) are declared as components of classes. There is a distinction between instance events and static events. Triggers and handlers can be objects and classes, depending on whether they are instance or static events, or event handlers.

Instance Events

Instance events are declared using the statement [EVENTS](javascript:call_link\('abapevents.htm'\)). They can only be raised in instance methods.

Static Events

Static events are declared using the statement [CLASS-EVENTS](javascript:call_link\('abapclass-events.htm'\)). All methods (instance methods and [static methods](javascript:call_link\('abenstatic_method_glosry.htm'\) "Glossary Entry")) can raise static events. Static events, however, are the only events that can be raised in static methods.