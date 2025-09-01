  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Overview](javascript:call_link\('abenabap_objects_oview.htm'\)) →  [Examples for ABAP Objects](javascript:call_link\('abenabap_objects_abexas.htm'\)) → 

ABAP Objects, Events

The example demonstrates triggering and handling events.

Source Code

REPORT demo\_abap\_objects\_events NO STANDARD PAGE HEADING.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\* Declarations
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
INTERFACE i\_vehicle.
  DATA     max\_speed TYPE i.
  EVENTS:  speed\_change EXPORTING value(new\_speed) TYPE i.
  METHODS: drive,
           stop.
ENDINTERFACE.
CLASS c\_ship DEFINITION.
  PUBLIC SECTION.
    METHODS constructor.
    INTERFACES i\_vehicle.
  PRIVATE SECTION.
    ALIASES max FOR i\_vehicle~max\_speed.
    DATA ship\_speed TYPE i.
ENDCLASS.
CLASS c\_truck DEFINITION.
  PUBLIC SECTION.
    METHODS constructor.
    INTERFACES i\_vehicle.
  PRIVATE SECTION.
    ALIASES max FOR i\_vehicle~max\_speed.
    DATA truck\_speed TYPE i.
ENDCLASS.
CLASS status DEFINITION.
  PUBLIC SECTION.
    CLASS-EVENTS button\_clicked EXPORTING value(fcode) TYPE sy-ucomm.
    CLASS-METHODS: class\_constructor,
                   user\_action.
ENDCLASS.
CLASS c\_list DEFINITION.
  PUBLIC SECTION.
    METHODS: fcode\_handler FOR EVENT button\_clicked OF status
                               IMPORTING fcode,
             list\_change   FOR EVENT speed\_change OF i\_vehicle
                               IMPORTING new\_speed,
             list\_output.
  PRIVATE SECTION.
    DATA: id TYPE i,
          ref\_ship  TYPE REF TO c\_ship,
          ref\_truck TYPE REF TO c\_truck,
          BEGIN OF line,
            id TYPE i,
            flag(1) TYPE c,
            iref  TYPE REF TO i\_vehicle,
            speed TYPE i,
          END OF line,
          list LIKE SORTED TABLE OF line WITH UNIQUE KEY id.
ENDCLASS.
DATA list TYPE REF TO c\_list.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\* Implementations
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
CLASS c\_ship IMPLEMENTATION.
  METHOD constructor.
    max = 30.
  ENDMETHOD.
  METHOD i\_vehicle~drive.
    CHECK ship\_speed < max.
    ship\_speed = ship\_speed + 10.
    RAISE EVENT i\_vehicle~speed\_change
                EXPORTING new\_speed = ship\_speed.
  ENDMETHOD.
  METHOD i\_vehicle~stop.
    CHECK ship\_speed > 0.
    ship\_speed = 0.
    RAISE EVENT i\_vehicle~speed\_change
                EXPORTING new\_speed = ship\_speed.
  ENDMETHOD.
ENDCLASS.
CLASS c\_truck IMPLEMENTATION.
  METHOD constructor.
    max = 150.
  ENDMETHOD.
  METHOD i\_vehicle~drive.
    CHECK truck\_speed < max.
    truck\_speed = truck\_speed + 50.
    RAISE EVENT i\_vehicle~speed\_change
                EXPORTING new\_speed = truck\_speed.
  ENDMETHOD.
  METHOD i\_vehicle~stop.
    CHECK truck\_speed > 0.
    truck\_speed = 0.
    RAISE EVENT i\_vehicle~speed\_change
                EXPORTING new\_speed = truck\_speed.
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
CLASS c\_list IMPLEMENTATION.
  METHOD fcode\_handler.
    CLEAR line.
    CASE fcode.
      WHEN 'CREA\_SHIP'.
        id = id + 1.
        CREATE OBJECT ref\_ship.
        line-id = id.
        line-flag = 'C'.
        line-iref = ref\_ship.
        APPEND line TO list.
      WHEN 'CREA\_TRUCK'.
        id = id + 1.
        CREATE OBJECT ref\_truck.
        line-id = id.
        line-flag = 'T'.
        line-iref = ref\_truck.
        APPEND line TO list.
      WHEN 'DRIVE'.
        CHECK sy-lilli > 0.
        line = list\[ sy-lilli \].
        line-iref->drive( ).
      WHEN 'STOP'.
        LOOP AT list INTO line.
          line-iref->stop( ).
        ENDLOOP.
      WHEN 'CANCEL'.
        LEAVE PROGRAM.
    ENDCASE.
    list\_output( ).
  ENDMETHOD.
  METHOD list\_change.
    line-speed = new\_speed.
    MODIFY TABLE list FROM line.
  ENDMETHOD.
  METHOD list\_output.
    sy-lsind = 0.
    SET TITLEBAR 'TIT'.
    LOOP AT list INTO line.
      IF line-flag = 'C'.
        WRITE / icon\_ws\_ship AS ICON.
      ELSEIF line-flag = 'T'.
        WRITE / icon\_ws\_truck AS ICON .
      ENDIF.
      WRITE: 'Speed = ', line-speed.
    ENDLOOP.
  ENDMETHOD.
ENDCLASS.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\* Program events
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
START-OF-SELECTION.
  CREATE OBJECT list.
  SET HANDLER: list->fcode\_handler,
               list->list\_change FOR ALL INSTANCES.
AT USER-COMMAND.
  status=>user\_action( ).

Description

The user actions on a classic list trigger events in ABAP objects. The list and its data are implemented in the class c\_list. There is a class status for processing user actions. It triggers an event button\_clicked in the AT USER-COMMAND event. The event is handled in the class c\_list. The class c\_list contains an object of the class c\_ship or c\_truck for each line of the list. Both of these classes implement the interface i\_vehicle. Whenever the speed of one of these objects changes, the event speed\_change is triggered. The class c\_list reacts to this and updates the list.