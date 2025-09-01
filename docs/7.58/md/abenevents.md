---
title: "ABAP Objects - Events"
description: |
  Events are declared using the following statements: -   EVENTS(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapevents.htm) -   CLASS-EVENTS(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass-events.htm) These statements are only possible in the declaration part o
version: "7.58"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenevents.htm"
abapFile: "abenevents.htm"
keywords: ["do", "if", "try", "method", "class", "abenevents"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Components in Classes and Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_ifac_components.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Events%2C%20ABENEVENTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Objects - Events

Events are declared using the following statements:

-   [EVENTS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapevents.htm)
-   [CLASS-EVENTS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass-events.htm)

These statements are only possible in the declaration part of classes and interfaces.

The declaration of an event of a class has the effect that the methods of the class raise the event and hence trigger the execution of the [event handlers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenevent_handler_glosry.htm "Glossary Entry"). In the declaration, output parameters can be defined for an event for which actual parameters are then passed to the event handlers when the event is raised.

The statement EVENTS declares instance events. Instance events are bound to objects. They can only be raised in instance methods of the same class.

The statement CLASS-EVENTS declares static events. Static events are not bound to objects. They can be raised in all methods of the same class.

Continue
[EVENTS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapevents.htm)
[CLASS-EVENTS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass-events.htm)
[EVENTS, parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapevents_parameters.htm)
![Example](exa.gif "Example") [ABAP Objects - Events in Inheritance](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenevent_inheritance_abexa.htm)