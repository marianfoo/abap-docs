  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclasses_and_interfaces.htm) →  [Components in Classes and Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclass_ifac_components.htm) →  [Events](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenevents.htm) → 

EVENTS

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapevents_shortref.htm)

Syntax

EVENTS evt *\[*EXPORTING [parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapevents_parameters.htm)*\]*.

Addition:

[... EXPORTING parameters](#!ABAP_ONE_ADD@1@)

Effect

Declares an instance event evt in a class or interface. The [naming conventions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennaming_conventions.htm) apply to the name evt. Using the statement [RAISE EVENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapraise_event.htm), the instance event evt can be raised in any instance method of the same class, or of any class that implements the interface, as well as in the instance methods of subclasses (if they are visible there).

Addition

... EXPORTING parameters

Effect

The addition EXPORTING defines the parameter interface of the event evt. An event can only have output parameters [parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapevents_parameters.htm) that are passed by value.

When an [event handler](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenevent_handler_glosry.htm "Glossary Entry") is declared using the addition FOR EVENT OF of the statement [METHODS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmethods_event_handler.htm) or [CLASS-METHODS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclass-methods_event_handler.htm), the output parameters of the event are defined as the input parameters of the event handler. The properties of the input parameters are applied from the output parameters defined in EVENTS.

As well as the output parameters defined explicitly using EXPORTING, each instance event has an implicit output parameter, sender. This output parameter has the type reference variable. When the event is raised using RAISE EVENT, the reference to the raising object is implicitly assigned to sender.

The static type of the input parameter sender is defined for every event handler by the object type (class or interface) that is specified after the addition FOR EVENT OF of the statement METHODS or CLASS-METHODS.

Note

The dynamic type of the implicit formal parameter sender is always the class of the object in which the event is raised.

Example

In the interface window, three events are declared, each with an explicit non-optional output parameter status. The class dialog\_window implements the interface window. The interface window\_handler contains [event handlers](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenevent_handler_glosry.htm "Glossary Entry"), which import both the explicit parameters and the implicit parameter sender. The static type of the input parameter sender is the class dialog\_window.

INTERFACE window.
  EVENTS: minimize EXPORTING VALUE(status) TYPE i,
          maximize EXPORTING VALUE(status) TYPE i,
          restore  EXPORTING VALUE(status) TYPE i.
ENDINTERFACE.
CLASS dialog\_window DEFINITION.
  PUBLIC SECTION.
    INTERFACES window.
ENDCLASS.
INTERFACE window\_handler.
  METHODS: minimize\_window
             FOR EVENT window~minimize OF dialog\_window
             IMPORTING status sender,
           maximize\_window
             FOR EVENT window~maximize OF dialog\_window
             IMPORTING status sender,
           restore
             FOR EVENT window~restore OF dialog\_window
             IMPORTING status sender.
ENDINTERFACE.

Executable Example

[Events in Inheritance](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenevent_inheritance_abexa.htm)