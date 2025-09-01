  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Overview](javascript:call_link\('abenabap_objects_oview.htm'\)) →  [Examples for ABAP Objects](javascript:call_link\('abenabap_objects_abexas.htm'\)) → 

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
    ADD 1 TO count.
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
    ADD 10 TO speed.
  ENDMETHOD.
ENDCLASS.
DATA: count      TYPE REF TO counter,
      bike       TYPE REF TO bicycle,
      status     TYPE REF TO status,
      status\_tab TYPE TABLE OF REF TO status.
START-OF-SELECTION.
  CREATE OBJECT: count, bike.
  DO 5 TIMES.
    count->increment( ).
    bike->drive( ).
  ENDDO.
  APPEND: count TO status\_tab,
          bike  TO status\_tab.
  LOOP AT status\_tab INTO status.
    status->write( ).
  ENDLOOP.
   cl\_demo\_output=>display( ).

Description

This example shows a status interface for outputting the attributes of an object and its implementation in two different classes.

The status interface contains a write method. The counter and bicycle classes implement the interface in the public area. Both classes must implement the interface method in the implementation part corresponding to the required semantics.

First, two class reference variables are declared, count and bike, for the classes counter and bicycle. An interface reference variable status and an internal table status\_tab with a suitable row type for the interface reference variable, are created for the status interface. All the reference variables begin with initial values.

Using the CREATE OBJECT statement, an object is created for each class, to which the references in count and bike point. Using the class reference variable, the increment and drive methods are called in the respective objects.

Through the addition of the class reference variables to the interface reference table, the rows in status\_tab also point to the two objects. Using the interface references, it is possible to call the interface method write in the objects, but not the class methods increment or drive.