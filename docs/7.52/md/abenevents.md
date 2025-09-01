  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclasses_and_interfaces.htm) →  [Components in Classes and Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_ifac_components.htm) → 

Events

Events are declared using the statements [EVENTS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapevents.htm) and [CLASS-EVENTS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass-events.htm), which are possible only in the declaration part of classes and interfaces. Declaring an event in a class means that the methods of the class trigger the event and can therefore cause execution of [event handlers](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenevent_handler_glosry.htm "Glossary Entry"). In the declaration, you can define output parameters for an event, for which actual parameters are transferred to the event handler when the event is executed.

The statement EVENTS declares instance events. Instance events are linked to objects. They can only be triggered in instance methods of the same class.

The statement CLASS-EVENTS declares static events. Static events are not linked to objects. They can be triggered in all methods of the same class.

Continue
[EVENTS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapevents.htm)
[CLASS-EVENTS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass-events.htm)
[EVENTS - parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapevents_parameters.htm)
![Example](exa.gif "Example") [Inheritance Events](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenevent_inheritance_abexa.htm)