  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Overview](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_objects_oview.htm) →  [Examples for ABAP Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_objects_abexas.htm) → 

ABAP Objects, Interfaces

This example demonstrates the use of interfaces.

Source Code

REPORT demo\_interface.
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
    cl\_demo\_output=>write\_text( |Count in counter is { count }| ).
  ENDMETHOD.
  METHOD increment.
    count = count + 1.
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
    cl\_demo\_output=>write\_text( |Speed of bicycle is { speed }| ).
  ENDMETHOD.
  METHOD drive.
    speed = speed + 10.
  ENDMETHOD.
ENDCLASS.
DATA status\_tab TYPE TABLE OF REF TO status WITH EMPTY KEY.
START-OF-SELECTION.
  DATA(count) = NEW counter( ).
  DATA(bike) =  NEW bicycle( ).
  DO 5 TIMES.
    count->increment( ).
    bike->drive( ).
  ENDDO.
  status\_tab = VALUE #( ( count )
                        ( bike ) ).
  LOOP AT status\_tab ASSIGNING FIELD-SYMBOL(<status>).
    <status>->write( ).
  ENDLOOP.
  cl\_demo\_output=>display( ).

Description

This example shows an interface status for displaying the attributes of an object and its implementation in two different classes.

The interface status contains a method write. The classes counter and bicycle implement the interface in the public area. Both classes must implement the interface method in the implementation part in accordance with the required semantics.

First, two class reference variables are declared, count and bike, for the classes counter and bicycle. An interface reference variable status and an internal table status\_tab with a suitable row type for the interface reference variable are created for the interface status. All the reference variables begin with initial values.

Using the constructor operator NEW, an object is created for each class to which the references in count and bike point. Using the class reference variable, the methods increment and drive are called in the respective objects.

Class reference variables are inserted in the interface reference table to make the rows in status\_tab point to the two objects as well. Using the interface references, it is possible to call the interface method write in the objects, but not the class methods increment or drive.