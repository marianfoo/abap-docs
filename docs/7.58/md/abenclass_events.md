  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Objects](javascript:call_link\('abenabap_objects.htm'\)) →  [ABAP Objects - Classes](javascript:call_link\('abenclasses.htm'\)) →  [ABAP Objects - Components of Classes](javascript:call_link\('abenclass_components.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Class%20Events%2C%20ABENCLASS_EVENTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Objects - Class Events

In ABAP Objects, [events](javascript:call_link\('abenevents_overview.htm'\)) are declared as components of classes. There is a distinction between instance events and static events. Triggers and handlers can be objects and classes, depending on whether they are instance or static events, or event handlers.

Instance Events   

Instance events are declared using the statement [EVENTS](javascript:call_link\('abapevents.htm'\)). They can only be raised in instance methods.

Static Events   

Static events are declared using the statement [CLASS-EVENTS](javascript:call_link\('abapclass-events.htm'\)). All methods (instance methods and [static methods](javascript:call_link\('abenstatic_method_glosry.htm'\) "Glossary Entry")) can raise static events. Static events, however, are the only events that can be raised in static methods.