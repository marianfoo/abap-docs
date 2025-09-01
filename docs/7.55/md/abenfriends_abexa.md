  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces (ABAP Objects)](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Overview](javascript:call_link\('abenabap_objects_oview.htm'\)) →  [ABAP Objects - Examples](javascript:call_link\('abenabap_objects_abexas.htm'\)) → 

ABAP Objects - Friendship

This example demonstrates an interface that is a [friend](javascript:call_link\('abenfriends.htm'\)) of a class.

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