  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [CLASS](javascript:call_link\('abapclass.htm'\)) →  [CLASS - DEFINITION](javascript:call_link\('abapclass_definition.htm'\)) → 

CLASS - components

The components of the classes are defined in the [visibility sections](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry"). The following declaration statements are possible for components:

-   [TYPES](javascript:call_link\('abaptypes.htm'\)), [DATA](javascript:call_link\('abapdata.htm'\)), [CLASS-DATA](javascript:call_link\('abapclass-data.htm'\)), and [CONSTANTS](javascript:call_link\('abapconstants.htm'\)) for data types and data objects

-   [METHODS](javascript:call_link\('abapmethods.htm'\)), [CLASS-METHODS](javascript:call_link\('abapclass-methods.htm'\)), [EVENTS](javascript:call_link\('abapevents.htm'\)), and [CLASS-EVENTS](javascript:call_link\('abapclass-events.htm'\)) for methods and events

-   [INTERFACES](javascript:call_link\('abapinterfaces.htm'\)) for implementing interfaces and [ALIASES](javascript:call_link\('abapaliases.htm'\)) for alias names for interface components

Note

All the components in a class are in the same namespace. Within a class, the name of a component must be unique to its type (data type, attribute, method, event, or alias name). The components of an implemented interface are marked with the prefix intf~ (the name of the interface with interface component selector).

Example

Declaration of various components in the public and private visibility area of a class.

INTERFACE intf.
  ...
ENDINTERFACE.
CLASS cls DEFINITION.
  PUBLIC SECTION.
    INTERFACES intf.
    TYPES:
      type ...
    CLASS-METHODS:
      factory RETURNING VALUE(ref) TYPE REF TO cls.
    METHODS:
      constructor ...,
      meth ...
  PRIVATE SECTION.
    DATA:
      attr TYPE ...
ENDCLASS.