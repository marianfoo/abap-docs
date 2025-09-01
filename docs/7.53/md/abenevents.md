  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclasses_and_interfaces.htm) →  [Components in Classes and Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_ifac_components.htm) → 

Events

Events are declared using the following statements:

-   [EVENTS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapevents.htm)

-   [CLASS-EVENTS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass-events.htm)

These statements are only possible in the declaration part of classes and interfaces.

The declaration of an event in a class makes the methods of the class raise the event and hence execute [event handlers](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenevent_handler_glosry.htm "Glossary Entry"). In the declaration, output parameters can be defined for an event. Actual parameters are then passed to the event handlers when the event is raised.

The statement EVENTS declares instance events. Instance events are bound to objects. They can only be raised in instance methods of the same class.

The statement CLASS-EVENTS declares static events. Static events are not bound to objects. They can be raised in all methods of the same class.

Continue
[EVENTS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapevents.htm)
[CLASS-EVENTS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass-events.htm)
[EVENTS - parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapevents_parameters.htm)
![Example](exa.gif "Example") [Events in Inheritance](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenevent_inheritance_abexa.htm)