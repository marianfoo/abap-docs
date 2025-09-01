  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Overview](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_objects_oview.htm) →  [Classes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclasses.htm) →  [Components of classes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_components.htm) → 

Class Events

In ABAP Objects, [events](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenevents_overview.htm) are declared as components of classes. SAP makes a distinction between instance events and static events. Triggers and handlers can be objects and classes, depending on whether they are instance events, static events, or event handlers.

Instance Events

Instance events are declared using the statement [EVENTS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapevents.htm). They can only be raised in instance methods.

Static Events

Static events are declared using the statement [CLASS-EVENTS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass-events.htm). All methods (instance methods and [static methods](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstatic_method_glosry.htm "Glossary Entry")) can raise static events. Static events, however, are the only events that can be raised in static methods.