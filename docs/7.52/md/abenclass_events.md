  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Overview](javascript:call_link\('abenabap_objects_oview.htm'\)) →  [Classes](javascript:call_link\('abenclasses.htm'\)) →  [Components of Classes](javascript:call_link\('abenclass_components.htm'\)) → 

Class Events

In ABAP Objects, [events](javascript:call_link\('abenevents_overview.htm'\)) are declared as components of classes. SAP makes a distinction between instance events and static events. Triggers and handlers can be objects and classes, depending on whether they are instance events, static events, or event handlers.

Instance events

Instance events are declared using the statement [EVENTS](javascript:call_link\('abapevents.htm'\)). They can only be triggered in instance methods.

Static events

Static events are declared using the statement [CLASS-EVENTS](javascript:call_link\('abapclass-events.htm'\)). All methods (instance methods and [static methods](javascript:call_link\('abenstatic_method_glosry.htm'\) "Glossary Entry")) can trigger static events. Static events, however, are the only events that can be triggered in static methods.