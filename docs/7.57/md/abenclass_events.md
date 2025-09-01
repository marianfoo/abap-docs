  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_declarations.htm) →  [Classes and Interfaces (ABAP Objects)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Overview](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_objects_oview.htm) →  [ABAP Objects - Classes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclasses.htm) →  [ABAP Objects - Components of Classes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_components.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP Objects - Class Events, ABENCLASS_EVENTS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0
A%0D%0ASuggestion for improvement:)

ABAP Objects - Class Events

In ABAP Objects, [events](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenevents_overview.htm) are declared as components of classes. There is a distinction between instance events and static events. Triggers and handlers can be objects and classes, depending on whether they are instance or static events, or event handlers.

Instance Events   

Instance events are declared using the statement [EVENTS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapevents.htm). They can only be raised in instance methods.

Static Events   

Static events are declared using the statement [CLASS-EVENTS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass-events.htm). All methods (instance methods and [static methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstatic_method_glosry.htm "Glossary Entry")) can raise static events. Static events, however, are the only events that can be raised in static methods.