  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [Components in Classes and Interfaces](javascript:call_link\('abenclass_ifac_components.htm'\)) →  [Events](javascript:call_link\('abenevents.htm'\)) → 

CLASS-EVENTS

[Quick Reference](javascript:call_link\('abapclass-events_shortref.htm'\))

Syntax

CLASS-EVENTS evt *\[*EXPORTING [parameters](javascript:call_link\('abapevents_parameters.htm'\))*\]* .

Addition:

[... EXPORTING parameters](#!ABAP_ONE_ADD@1@)

Effect

This statement declares a static event evt in a class or interface. The [naming conventions](javascript:call_link\('abennaming_conventions.htm'\)) apply to the name evt. Using the statement [RAISE EVENT](javascript:call_link\('abapraise_event.htm'\)), the static event evt can be raised in all methods of the same class or of a class that implements the interface, as well as in the methods of subclasses (if it is visible here).

Note

Event handlers declared for a [static event inherited from a superclass](javascript:call_link\('abeninheritance_statical.htm'\)) can only respond to this event if it is raised by a method of the subclass or one of its subclasses. If the event is raised in a static method of a superclass, it is not handled, even if the method is called in a subclass or if the name of the subclass is specified.

Addition

... EXPORTING parameters

Effect

The addition EXPORTING defines the parameter interface of the event evt. The syntax and meaning of the additions [parameters are the same as in the definition of instance events using the statement](javascript:call_link\('abapevents_parameters.htm'\)) [EVENTS](javascript:call_link\('abapevents.htm'\)).

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

[Events in Inheritance](javascript:call_link\('abenevent_inheritance_abexa.htm'\))