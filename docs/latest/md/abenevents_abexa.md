---
title: "ABAP Objects - Events"
description: |
  This example demonstrates how events are raised and handled. Source Code REPORT demo_abap_objects_events NO STANDARD PAGE HEADING.   Declarations
version: "latest"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenevents_abexa.htm"
abapFile: "abenevents_abexa.htm"
keywords: ["select", "loop", "do", "if", "case", "method", "class", "data", "types", "abenevents", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [ABAP Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_objects.htm) →  [ABAP Objects - Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_objects_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Events%2C%20ABENEVENTS_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Objects - Events

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
  FINAL(list) = NEW list( ).
  SET HANDLER:
    list->fcode\_handler,
    list->list\_change FOR ALL INSTANCES.
AT USER-COMMAND.
  status=>user\_action( ).

Description   

The user actions on a classic list raise events in ABAP Objects. The list and its data are implemented in a class list. User actions are processed by the class status, which raises an event button\_clicked at AT USER-COMMAND time. The event is handled in the class list. The class list contains an object of the class ship or truck for each line of the list, which both implement the interface vehicle. If the speed of one of these objects changes, the event speed\_change is raised, to which the class list responds by adapting the list output.