  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [ABAP Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_objects.htm) →  [ABAP Objects - Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_objects_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Interfaces%2C%20ABENINTERFACE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Objects - Interfaces

This example demonstrates the use of interfaces.

Source Code   

\* CCDEF
CLASS o DEFINITION.
  PUBLIC SECTION.
    CLASS-DATA out TYPE REF TO if\_demo\_output.
ENDCLASS.
\* Public class definition
CLASS cl\_demo\_interface DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* CCIMP
INTERFACE status.
  METHODS write.
ENDINTERFACE.
CLASS counter DEFINITION.
  PUBLIC SECTION.
    INTERFACES status.
    METHODS increment.
  PRIVATE SECTION.
    DATA count TYPE i.
ENDCLASS.
CLASS counter IMPLEMENTATION.
  METHOD status~write.
    o=>out->write\_text(
    |Count in counter is { count }| ).
  ENDMETHOD.
  METHOD increment.
    count += 1.
  ENDMETHOD.
ENDCLASS.
CLASS bicycle DEFINITION.
  PUBLIC SECTION.
    INTERFACES status.
    METHODS drive.
  PRIVATE SECTION.
    DATA speed TYPE i.
ENDCLASS.
CLASS bicycle IMPLEMENTATION.
  METHOD status~write.
    o=>out->write\_text(
    |Speed of bicycle is { speed }| ).
  ENDMETHOD.
  METHOD drive.
    speed += 10.
  ENDMETHOD.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_interface IMPLEMENTATION.
  METHOD main.
    o=>out = out.
    DATA status\_tab TYPE TABLE OF REF TO status WITH EMPTY KEY.
    FINAL(count) = NEW counter( ).
    FINAL(bike) =  NEW bicycle( ).
    DO 5 TIMES.
      count->increment( ).
      bike->drive( ).
    ENDDO.
    status\_tab = VALUE #( ( count )
                          ( bike ) ).
    LOOP AT status\_tab ASSIGNING FIELD-SYMBOL(<status>).
      <status>->write( ).
    ENDLOOP.
  ENDMETHOD.
ENDCLASS.

Description   

This example shows a local interface status for displaying the attributes of an object and its implementation in two different local classes.

The interface status contains a method write. The classes counter and bicycle implement the interface in the public area. Both classes must implement the interface method in the implementation part according to the required semantics.

First, two class reference variables count and bike are declared for the classes counter and bicycle. An interface reference variable status and an internal table status\_tab with a suitable line type for the interface reference variable are created for the interface status. All reference variables begin with initial values.

Using the constructor operator NEW, an object is created for each class to which the references in count and bike point. Using the class reference variable, the methods increment and drive are called in the respective objects.

Class reference variables are inserted in the interface reference table to have the lines in status\_tab point to the two objects as well. Using the interface references, it is possible to call the interface method write in the objects, but not the class methods increment or drive.