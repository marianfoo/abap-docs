  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclasses_and_interfaces.htm) →  [Components in Classes and Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclass_ifac_components.htm) →  [Events](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenevents.htm) → 

CLASS-EVENTS

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclass-events_shortref.htm)

Syntax

CLASS-EVENTS evt *\[*EXPORTING [parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapevents_parameters.htm)*\]* .

Addition:

[... EXPORTING parameters](#!ABAP_ONE_ADD@1@)

Effect

This statement declares a static event evt in a class or interface. The [naming conventions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennaming_conventions.htm) apply to the name evt. Using the statement [RAISE EVENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapraise_event.htm), the static event evt can be raised in all methods of the same class or of a class that implements the interface, as well as in the methods of subclasses (if it is visible here).

Note

Event handlers declared for a [static event inherited from a superclass](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninheritance_statical.htm) can only respond to this event if it is raised by a method of the subclass or one of its subclasses. If the event is raised in a static method of a superclass, it is not handled, even if the method is called in a subclass or if the name of the subclass is specified.

Addition

... EXPORTING parameters

Effect

The addition EXPORTING defines the parameter interface of the event evt. The syntax and meaning of the additions [parameters are the same as in the definition of instance events using the statement](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapevents_parameters.htm) [EVENTS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapevents.htm).

Note

Static events do not have the implicit formal parameter sender.

Example

Declares static events in the class CL\_ABAP\_BROWSER.

CLASS cl\_abap\_browser DEFINITION
  ...
  PUBLIC SECTION.
    ...
    CLASS-EVENTS
      sapevent
        EXPORTING
          VALUE(action) TYPE string
          VALUE(query\_table) TYPE cnht\_query\_table OPTIONAL.
    CLASS-EVENTS
      closed.
    ...
ENDCLASS.

Executable Example

[Events in Inheritance](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenevent_inheritance_abexa.htm)