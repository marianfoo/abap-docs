---
title: "ABAP Objects, Events"
description: |
  This example demonstrates how events are raised and handled. Source Code REPORT demo_abap_objects_events NO STANDARD PAGE HEADING.   Declarations
version: "7.54"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenevents_abexa.htm"
abapFile: "abenevents_abexa.htm"
keywords: ["select", "loop", "do", "if", "case", "method", "class", "data", "types", "abenevents", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Overview](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_objects_oview.htm) →  [Examples for ABAP Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_objects_abexas.htm) → 

ABAP Objects, Events

This example demonstrates how events are raised and handled.

Source Code

REPORT demo\_abap\_objects\_events NO STANDARD PAGE HEADING.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\* Declarations
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
INTERFACE vehicle.
  DATA
    max\_speed TYPE i.
  EVENTS
    speed\_change EXPORTING
                   VALUE(id) TYPE i
                   VALUE(new\_speed) TYPE i.
  METHODS:
    drive IMPORTING id TYPE i,
    stop  IMPORTING id TYPE i.
ENDINTERFACE.
CLASS ship DEFINITION.
  PUBLIC SECTION.
    METHODS
      constructor.
    INTERFACES
      vehicle.
  PRIVATE SECTION.
    ALIASES
      max FOR vehicle~max\_speed.
    DATA
      ship\_speed TYPE i.
ENDCLASS.
CLASS truck DEFINITION.
  PUBLIC SECTION.
    METHODS
      constructor.
    INTERFACES
      vehicle.
  PRIVATE SECTION.
    ALIASES
      max FOR vehicle~max\_speed.
    DATA
      truck\_speed TYPE i.
ENDCLASS.
CLASS status DEFINITION.
  PUBLIC SECTION.
    CLASS-EVENTS
      button\_clicked
        EXPORTING VALUE(fcode) TYPE sy-ucomm.
    CLASS-METHODS:
      class\_constructor,
      user\_action.
ENDCLASS.
CLASS list DEFINITION.
  PUBLIC SECTION.
    METHODS:
      fcode\_handler
                    FOR EVENT button\_clicked OF status
        IMPORTING fcode,
      list\_change
                    FOR EVENT speed\_change OF vehicle
        IMPORTING id
                    new\_speed,
      list\_output.
  PRIVATE SECTION.
    TYPES:
      BEGIN OF line,
        iref  TYPE REF TO vehicle,
        speed TYPE i,
      END OF line.
    DATA
      list TYPE standard TABLE OF line WITH empty key.
ENDCLASS.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\* Implementations
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
CLASS ship IMPLEMENTATION.
  METHOD constructor.
    max = 30.
  ENDMETHOD.
  METHOD vehicle~drive.
    CHECK ship\_speed < max.
    ship\_speed += 10.
    RAISE EVENT vehicle~speed\_change
                EXPORTING id = id
                          new\_speed = ship\_speed.
  ENDMETHOD.
  METHOD vehicle~stop.
    CHECK ship\_speed > 0.
    ship\_speed = 0.
    RAISE EVENT vehicle~speed\_change
                EXPORTING id = id
                          new\_speed = ship\_speed.
  ENDMETHOD.
ENDCLASS.
CLASS truck IMPLEMENTATION.
  METHOD constructor.
    max = 100.
  ENDMETHOD.
  METHOD vehicle~drive.
    CHECK truck\_speed < max.
    truck\_speed += 50.
    RAISE EVENT vehicle~speed\_change
                EXPORTING id = id
                          new\_speed = truck\_speed.
  ENDMETHOD.
  METHOD vehicle~stop.
    CHECK truck\_speed > 0.
    truck\_speed = 0.
    RAISE EVENT vehicle~speed\_change
                EXPORTING  id = id
                           new\_speed = truck\_speed.
  ENDMETHOD.
ENDCLASS.
CLASS status IMPLEMENTATION.
  METHOD class\_constructor.
    SET PF-STATUS 'VEHICLE'.
    WRITE 'Click a button!'.
  ENDMETHOD.
  METHOD user\_action.
    RAISE EVENT button\_clicked EXPORTING fcode = sy-ucomm.
  ENDMETHOD.
ENDCLASS.
CLASS list IMPLEMENTATION.
  METHOD fcode\_handler.
    CASE fcode.
      WHEN 'CREA\_SHIP'.
        list = VALUE #( BASE list
                        ( iref = NEW ship( ) ) ).
      WHEN 'CREA\_TRUCK'.
        list = VALUE #( BASE list
                        ( iref = NEW truck( ) ) ).
      WHEN 'DRIVE'.
        CHECK sy-lilli > 0.
        list\[ sy-lilli \]-iref->drive( sy-lilli ).
      WHEN 'STOP'.
        LOOP AT list ASSIGNING FIELD-SYMBOL(<line>).
          data(id) = sy-tabix.
          <line>-iref->stop( id ).
        ENDLOOP.
      WHEN 'CANCEL'.
        LEAVE PROGRAM.
    ENDCASE.
    list\_output( ).
  ENDMETHOD.
  METHOD list\_change.
    list\[ id \]-speed  = new\_speed.
  ENDMETHOD.
  METHOD list\_output.
    sy-lsind = 0.
    SET TITLEBAR 'TIT'.
    LOOP AT list ASSIGNING FIELD-SYMBOL(<line>).
      IF <line>-iref is INSTANCE OF ship.
        WRITE / icon\_ws\_ship AS ICON.
      ELSEIF <line>-iref is INSTANCE OF truck.
        WRITE / icon\_ws\_truck AS ICON.
      ENDIF.
      WRITE: 'Speed = ', <line>-speed.
    ENDLOOP.
  ENDMETHOD.
ENDCLASS.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\* Program events
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
START-OF-SELECTION.
  DATA(list) = NEW list( ).
  SET HANDLER:
    list->fcode\_handler,
    list->list\_change FOR ALL INSTANCES.
AT USER-COMMAND.
  status=>user\_action( ).

Description

The user actions on a classic list raise events in ABAP Objects. The list and its data are implemented in the class list. The class status is used to process user actions. It raises an event button\_clicked at AT USER-COMMAND time. The event is handled in the class list. The class list contains an object of the class ship or truck for each line of the list. Both classes implement the interface vehicle. If the speed of one of these objects changes, the event speed\_change is raised. The class list responds to this event by modifying the list output.