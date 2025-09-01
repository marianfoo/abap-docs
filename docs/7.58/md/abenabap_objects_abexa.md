  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [ABAP Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_objects.htm) →  [ABAP Objects - Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_objects_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Overview%2C%20ABENABAP_OBJECTS_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Objects - Overview

The example demonstrates objects, object references, inheritance, interfaces, and events.

Source Code   

\* CCDEF
CLASS o DEFINITION.
  PUBLIC SECTION.
    CLASS-DATA out TYPE REF TO if\_demo\_output.
ENDCLASS.
\*---------------------------------------------------------------------\*
\* INTERFACE status
\*---------------------------------------------------------------------\*
\* Interface definition \*
\*---------------------------------------------------------------------\*
INTERFACE status.
  METHODS write.
ENDINTERFACE.
\* Public class definition
CLASS cl\_demo\_abap\_objects DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS:
      objects,
      inheritance,
      interfaces,
      events.
ENDCLASS.
\* CCIMP
\*---------------------------------------------------------------------\*
\* CLASS vessel DEFINITION
\*---------------------------------------------------------------------\*
\* Superclass definition \*
\*---------------------------------------------------------------------\*
CLASS vessel DEFINITION.
  PUBLIC SECTION.
    METHODS:
    constructor,
    drive
    IMPORTING speed\_up TYPE i,
    get\_id
    RETURNING VALUE(id) TYPE i.
  PROTECTED SECTION.
    DATA: speed TYPE i,
    max\_speed TYPE i VALUE 100.
  PRIVATE SECTION.
    CLASS-DATA object\_count TYPE i.
    DATA id TYPE i.
ENDCLASS.
\*---------------------------------------------------------------------\*
\* CLASS vessel IMPLEMENTATION
\*---------------------------------------------------------------------\*
\* Superclass implementation \*
\*---------------------------------------------------------------------\*
CLASS vessel IMPLEMENTATION.
  METHOD constructor.
    object\_count += 1.
    id = object\_count.
  ENDMETHOD.
  METHOD drive.
    speed += speed\_up.
    IF speed > max\_speed.
      speed = max\_speed.
    ENDIF.
  ENDMETHOD.
  METHOD get\_id.
    id = me->id.
  ENDMETHOD.
ENDCLASS.
\*---------------------------------------------------------------------\*
\* CLASS ship DEFINITION
\*---------------------------------------------------------------------\*
\* Subclass definition \*
\*---------------------------------------------------------------------\*
CLASS ship DEFINITION INHERITING FROM vessel.
  PUBLIC SECTION.
    INTERFACES status.
    DATA name TYPE string READ-ONLY.
    METHODS:
    constructor
    IMPORTING name TYPE string,
    drive
    REDEFINITION.
    EVENTS emergency\_call.
ENDCLASS.
\*---------------------------------------------------------------------\*
\* CLASS ship IMPLEMENTATION
\*---------------------------------------------------------------------\*
\* Subclass implementation \*
\*---------------------------------------------------------------------\*
CLASS ship IMPLEMENTATION.
  METHOD constructor.
    super->constructor( ).
    max\_speed = 30.
    me->name = name.
  ENDMETHOD.
  METHOD status~write.
    DATA id TYPE c LENGTH 1.
    id = me->get\_id( ).
    o=>out->write( |{ name } is vessel { id
    } and has speed { speed }| ).
  ENDMETHOD.
  METHOD drive.
    speed += speed\_up.
    IF speed > max\_speed.
      max\_speed = 0.
      speed = 0.
      RAISE EVENT emergency\_call.
    ENDIF.
  ENDMETHOD.
ENDCLASS.
\*---------------------------------------------------------------------\*
\* CLASS coast\_guard DEFINITION
\*---------------------------------------------------------------------\*
\* Event handler definition \*
\*---------------------------------------------------------------------\*
CLASS coast\_guard DEFINITION.
  PUBLIC SECTION.
    INTERFACES status.
    METHODS receive
    FOR EVENT emergency\_call OF ship
    IMPORTING sender.
    ALIASES write FOR status~write.
  PRIVATE SECTION.
    DATA caller TYPE string.
ENDCLASS.
\*---------------------------------------------------------------------\*
\* CLASS coast\_guard IMPLEMENTATION
\*---------------------------------------------------------------------\*
\* Event handler implementation \*
\*---------------------------------------------------------------------\*
CLASS coast\_guard IMPLEMENTATION.
  METHOD status~write.
    IF caller IS INITIAL.
      o=>out->write(
      \`Coast guard received no call\` ).
    ELSE.
      o=>out->write(
      |Coast guard received a call from { caller }| ).
    ENDIF.
  ENDMETHOD.
  METHOD receive.
    caller = sender->name.
    write( ).
  ENDMETHOD.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_abap\_objects IMPLEMENTATION.
  METHOD main.
    o=>out = out.
    DATA: button1 TYPE abap\_bool VALUE abap\_true,
          button2 TYPE abap\_bool,
          button3 TYPE abap\_bool,
          button4 TYPE abap\_bool.
    cl\_demo\_input=>new(
      )->add\_field( EXPORTING text = \`Objects and Object References\`
                              as\_checkbox = abap\_true
                    CHANGING  field = button1
      )->add\_field( EXPORTING text = \`Inheritance\`
                              as\_checkbox = abap\_true
                    CHANGING  field = button2
      )->add\_field( EXPORTING text = \`Interfaces\`
                              as\_checkbox = abap\_true
                    CHANGING  field = button3
      )->add\_field( EXPORTING text = \`Events\`
                              as\_checkbox = abap\_true
                    CHANGING  field = button4
      )->request( ).
    IF strlen( button1 && button2 && button3 && button4 ) > 1.
      EXIT.
    ELSEIF button1 = abap\_true.
      objects( ).
    ELSEIF button2 = abap\_true.
      inheritance( ).
    ELSEIF button3 = abap\_true.
      interfaces( ).
    ELSEIF button4 = abap\_true.
      events( ).
    ENDIF.
  ENDMETHOD.
  METHOD events.
    FINAL(ship)    = NEW ship( 'Titanic' ).
    FINAL(station) = NEW coast\_guard( ).
    SET HANDLER station->receive FOR ship.
    DO 5 TIMES.
      ship->drive( 10 ).
    ENDDO.
  ENDMETHOD.
  METHOD inheritance.
    FINAL(ship) = NEW ship( 'Titanic' ).
    ship->drive( 20 ).
    FINAL(vessel) = CAST vessel( ship ).
    vessel->drive( 10 ).
    ship->status~write( ).
  ENDMETHOD.
  METHOD interfaces.
    DATA status\_tab TYPE TABLE OF REF TO status WITH EMPTY KEY.
    status\_tab = VALUE #( ( NEW ship( name = 'Titanic' ) )
                          ( NEW coast\_guard( ) ) ).
    LOOP AT status\_tab ASSIGNING FIELD-SYMBOL(<status>).
      <status>->write( ).
    ENDLOOP.
  ENDMETHOD.
  METHOD objects.
    FINAL(vessel1) = NEW vessel( ).
    FINAL(vessel2) = NEW vessel( ).
    vessel1->drive( 50 ).
    vessel2->drive( 80 ).
    o=>out->write( |Vessel ID is { vessel1->get\_id( ) }| ).
    o=>out->write( |Vessel ID is { vessel2->get\_id( ) }| ).
  ENDMETHOD.
ENDCLASS.

Description   

The class demonstrates how ABAP Objects can be used based on example classes for boats.