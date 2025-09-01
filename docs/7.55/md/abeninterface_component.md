  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces (ABAP Objects)](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [INTERFACE](javascript:call_link\('abapinterface.htm'\)) →  [INTERFACE intf](javascript:call_link\('abapinterface_definition.htm'\)) → 

INTERFACE, components

The following declaration statements are possible in interfaces for components:

-   [TYPES](javascript:call_link\('abaptypes.htm'\)), [DATA](javascript:call_link\('abapdata.htm'\)), [CLASS-DATA](javascript:call_link\('abapclass-data.htm'\)), and [CONSTANTS](javascript:call_link\('abapconstants.htm'\)) for data types and data objects

-   [METHODS](javascript:call_link\('abapmethods.htm'\)), [CLASS-METHODS](javascript:call_link\('abapclass-methods.htm'\)), [EVENTS](javascript:call_link\('abapevents.htm'\)), and [CLASS-EVENTS](javascript:call_link\('abapclass-events.htm'\)) for methods and events

-   [INTERFACES](javascript:call_link\('abapinterfaces.htm'\)) for the inclusion of component interfaces and [ALIASES](javascript:call_link\('abapaliases.htm'\)) for alias names for their components

The only interface components that can be addressed without implementing the interface in classes are data types and constants. These can be addressed using the name of the interface and the [class component selector](javascript:call_link\('abenoperands_names.htm'\)) (\=>).

Hints

-   All components of an interfaces are in one namespace. Within an interface, the name of a component must be unique regardless of its type (data type, attribute, method, event, or alias name). The components of an included interface are identified by the prefix intf~ (name of the interface with interface component selector).

-   Interfaces provide fewer variants than classes for declarations of methods using [METHODS](javascript:call_link\('abapmethods.htm'\)) and [CLASS-METHODS](javascript:call_link\('abapclass-methods.htm'\)). More specifically, no [constructors](javascript:call_link\('abenconstructor_glosry.htm'\) "Glossary Entry"), [test methods](javascript:call_link\('abentest_method_glosry.htm'\) "Glossary Entry"), or [AMDP function implementations](javascript:call_link\('abenamdp_function_method_glosry.htm'\) "Glossary Entry") can be declared in interfaces for CDS table functions.
    

Example

Declaration of various components in an interface.

INTERFACE intf1.
  ...
ENDINTERFACE.
INTERFACE intf2.
    INTERFACES intf1.
    TYPES:
      type ...
    DATA:
      attr TYPE ...
    CLASS-METHODS:
      factory RETURNING VALUE(ref) TYPE REF TO intf2.
    METHODS:
      meth ...
ENDINTERFACE.