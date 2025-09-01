  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_declarations.htm) →  [Classes and Interfaces (ABAP Objects)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Overview](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_objects_oview.htm) →  [ABAP Objects - Examples](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_objects_abexas.htm) → 

ABAP Objects - Friendship

This example demonstrates an interface that is a [friend](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfriends.htm) of a class.

Source Code

REPORT demo\_friendship.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    INTERFACES if\_demo\_friend.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    cl\_demo\_output=>display( cl\_demo\_friendship=>attr ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The empty global interface IF\_DEMO\_FRIEND is a friend of the global class CL\_DEMO\_FRIENDSHIP. Every class that implements IF\_DEMO\_FRIEND can access the private components of CL\_DEMO\_FRIENDSHIP.