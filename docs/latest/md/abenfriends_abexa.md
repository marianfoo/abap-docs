  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Objects](javascript:call_link\('abenabap_objects.htm'\)) →  [ABAP Objects - Examples](javascript:call_link\('abenabap_objects_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Friendship%2C%20ABENFRIENDS_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Objects - Friendship

This example demonstrates an interface that is a [friend](javascript:call_link\('abenfriends.htm'\)) of a class.

Source Code   

\* Public class definition
CLASS cl\_demo\_oo\_friendship DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    INTERFACES if\_demo\_friend.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_oo\_friendship IMPLEMENTATION.
  METHOD main.
    out->write( cl\_demo\_friendship=>attr ).
  ENDMETHOD.
ENDCLASS.

Description   

The empty global interface IF\_DEMO\_FRIEND is a friend of the global class CL\_DEMO\_FRIENDSHIP. Every class that implements IF\_DEMO\_FRIEND can access the private components of CL\_DEMO\_FRIENDSHIP.