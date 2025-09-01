  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_objects_oview.htm) →  [Classes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclasses.htm) →  [Components of Classes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_components.htm) → 

Class Events

In ABAP Objects, [events](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenevents_overview.htm) are declared as components of classes. SAP makes a distinction between instance events and static events. Triggers and handlers can be objects and classes, depending on whether they are instance events, static events, or event handlers.

Instance events

Instance events are declared using the statement [EVENTS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapevents.htm). They can only be triggered in instance methods.

Static events

Static events are declared using the statement [CLASS-EVENTS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass-events.htm). All methods (instance methods and [static methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstatic_method_glosry.htm "Glossary Entry")) can trigger static events. Static events, however, are the only events that can be triggered in static methods.