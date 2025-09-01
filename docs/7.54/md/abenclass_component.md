  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclasses_and_interfaces.htm) →  [CLASS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclass.htm) →  [CLASS - DEFINITION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclass_definition.htm) → 

CLASS - components

The components of the classes are defined in the [visibility sections](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvisibility_section_glosry.htm "Glossary Entry"). The following declaration statements are possible for components:

-   [TYPES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes.htm), [DATA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdata.htm), [CLASS-DATA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclass-data.htm), and [CONSTANTS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapconstants.htm) for data types and data objects

-   [METHODS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmethods.htm), [CLASS-METHODS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclass-methods.htm), [EVENTS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapevents.htm), and [CLASS-EVENTS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclass-events.htm) for methods and events

-   [INTERFACES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinterfaces.htm) for implementing interfaces and [ALIASES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapaliases.htm) for alias names for interface components

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