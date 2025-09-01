  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Overview](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_objects_oview.htm) →  [Examples for ABAP Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_objects_abexas.htm) → 

ABAP Objects, Overview

This example demonstrates objects, object references, inheritance, interfaces, and events.

Source Code

REPORT demo\_abap\_objects.
\*---------------------------------------------------------------------\*
\*       CLASS main DEFINITION
\*---------------------------------------------------------------------\*
\*       Main class definition                                         \*
\*---------------------------------------------------------------------\*
CLASS main DEFINITION.
  PUBLIC SECTION.
    CLASS-DATA out TYPE REF TO if\_demo\_output.
    CLASS-METHODS:
      class\_constructor,
      start,
      objects,
      inheritance,
      interfaces,
      events.
ENDCLASS.
\*---------------------------------------------------------------------\*
\*       INTERFACE status
\*---------------------------------------------------------------------\*
\*       Interface definition                                          \*
\*---------------------------------------------------------------------\*
INTERFACE status.
  METHODS write.
ENDINTERFACE.
\*---------------------------------------------------------------------\*
\*       CLASS vessel DEFINITION
\*---------------------------------------------------------------------\*
\*       Superclass definition                                         \*
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
    DATA: speed     TYPE i,
          max\_speed TYPE i VALUE 100.
  PRIVATE SECTION.
    CLASS-DATA object\_count TYPE i.
    DATA       id           TYPE i.
ENDCLASS.
\*---------------------------------------------------------------------\*
\*       CLASS vessel IMPLEMENTATION
\*---------------------------------------------------------------------\*
\*       Superclass implementation                                     \*
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
\*       CLASS ship DEFINITION
\*---------------------------------------------------------------------\*
\*       Subclass definition                                           \*
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
\*       CLASS ship IMPLEMENTATION
\*---------------------------------------------------------------------\*
\*       Subclass implementation                                       \*
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
    main=>out->write( |{ name } is vessel { id
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
\*       CLASS coast\_guard DEFINITION
\*---------------------------------------------------------------------\*
\*       Event handler definition                                      \*
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
\*       CLASS coast\_guard IMPLEMENTATION
\*---------------------------------------------------------------------\*
\*       Event handler implementation                                  \*
\*---------------------------------------------------------------------\*
CLASS coast\_guard IMPLEMENTATION.
  METHOD status~write.
    IF caller IS INITIAL.
      main=>out->write( \`Coast guard received no call\` ).
    ELSE.
      main=>out->write( |Coast guard received a call from { caller }| ).
    ENDIF.
  ENDMETHOD.
  METHOD receive.
    caller = sender->name.
    write( ).
  ENDMETHOD.
ENDCLASS.
\*---------------------------------------------------------------------\*
\*      System event START-OF-SELECTION
\*---------------------------------------------------------------------\*
\*      Triggered by the ABAP runtime environment automatically        \*
\*---------------------------------------------------------------------\*
START-OF-SELECTION.
  main=>start( ).
\*---------------------------------------------------------------------\*
\*      CLASS main IMPLEMENTATION
\*---------------------------------------------------------------------\*
\*      Main class implementation                                      \*
\*---------------------------------------------------------------------\*
CLASS main IMPLEMENTATION.
  METHOD class\_constructor.
    out = cl\_demo\_output=>new( ).
  ENDMETHOD.
  METHOD start.
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
    out->display( ).
  ENDMETHOD.
  METHOD objects.
    DATA(vessel1) = NEW vessel( ).
    DATA(vessel2) = NEW vessel( ).
    vessel1->drive( 50 ).
    vessel2->drive( 80 ).
    out->write( |Vessel ID is { vessel1->get\_id( ) }| ).
    out->write( |Vessel ID is { vessel2->get\_id( ) }| ).
  ENDMETHOD.
  METHOD inheritance.
    DATA(ship) = NEW ship( 'Titanic' ).
    ship->drive( 20 ).
    DATA(vessel) = CAST vessel( ship ).
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
  METHOD events.
    DATA(ship)    = NEW ship( 'Titanic' ).
    DATA(station) = NEW coast\_guard( ).
    SET HANDLER station->receive FOR ship.
    DO 5 TIMES.
      ship->drive( 10 ).
    ENDDO.
  ENDMETHOD.
ENDCLASS.
\*---------------------------------------------------------------------\*

Description

The program contains a class main with a method start which is called at program start and demonstrates the use of ABAP objects using the example of classes of water vehicles.