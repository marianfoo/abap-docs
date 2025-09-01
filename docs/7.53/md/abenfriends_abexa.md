---
title: "ABAP Objects, Friendship"
description: |
  This example demonstrates an interface that is a friend(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfriends.htm) of a class. Source Code REPORT demo_friendship. CLASS demo DEFINITION. PUBLIC SECTION. INTERFACES if_demo_friend. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMEN
version: "7.53"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfriends_abexa.htm"
abapFile: "abenfriends_abexa.htm"
keywords: ["select", "do", "if", "method", "class", "abenfriends", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Overview](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_objects_oview.htm) →  [Examples for ABAP Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_objects_abexas.htm) → 

ABAP Objects, Friendship

This example demonstrates an interface that is a [friend](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfriends.htm) of a class.

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

The empty global interface IF\_DEMO\_FRIEND is a friend of the global class CL\_DEMO\_FRIENDSHIP. Every class that implements IF\_DEMO\_FRIENDSHIP can access the private components of CL\_DEMO\_FRIENDSHIP.