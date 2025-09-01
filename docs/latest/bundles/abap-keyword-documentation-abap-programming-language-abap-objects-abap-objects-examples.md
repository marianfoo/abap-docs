# ABAP - Keyword Documentation / ABAP - Programming Language / ABAP Objects / ABAP Objects - Examples

Included pages: 8



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation latest](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenabap_objects_abexas.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_objects_abexas.htm)
- [abenabap_objects_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_objects_abexa.htm)
- [abenclass_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_abexa.htm)
- [abeninheritance_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninheritance_abexa.htm)
- [abeninterface_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninterface_abexa.htm)
- [abenevents_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenevents_abexa.htm)
- [abenfriends_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfriends_abexa.htm)
- [abenoo_transaction_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoo_transaction_abexa.htm)

**Bundle Contains**: 8 documentation pages
**Version**: ABAP latest
**Generated**: 2025-09-01T11:25:44.895Z

---

### abenabap_objects_abexas.htm

> **📖 Official SAP Documentation**: [abenabap_objects_abexas.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_objects_abexas.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Objects](javascript:call_link\('abenabap_objects.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Examples%2C%20ABENABAP_OBJECTS_ABEXAS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Objects - Examples

-   [ABAP Objects - Overview](javascript:call_link\('abenabap_objects_abexa.htm'\))
-   [ABAP Objects - Classes](javascript:call_link\('abenclass_abexa.htm'\))
-   [ABAP Objects - Inheritance](javascript:call_link\('abeninheritance_abexa.htm'\))
-   [ABAP Objects - Interfaces](javascript:call_link\('abeninterface_abexa.htm'\))
-   [ABAP Objects - Events](javascript:call_link\('abenevents_abexa.htm'\))
-   [ABAP Objects - Friendship](javascript:call_link\('abenfriends_abexa.htm'\))
-   [ABAP Objects - Object Transaction](javascript:call_link\('abenoo_transaction_abexa.htm'\))

Continue
![Example](exa.gif "Example") [ABAP Objects - Overview](javascript:call_link\('abenabap_objects_abexa.htm'\))
![Example](exa.gif "Example") [ABAP Objects - Classes](javascript:call_link\('abenclass_abexa.htm'\))
![Example](exa.gif "Example") [ABAP Objects - Inheritance](javascript:call_link\('abeninheritance_abexa.htm'\))
![Example](exa.gif "Example") [ABAP Objects - Interfaces](javascript:call_link\('abeninterface_abexa.htm'\))
![Example](exa.gif "Example") [ABAP Objects - Events](javascript:call_link\('abenevents_abexa.htm'\))
![Example](exa.gif "Example") [ABAP Objects - Friendship](javascript:call_link\('abenfriends_abexa.htm'\))
![Example](exa.gif "Example") [ABAP Objects - Object Transaction](javascript:call_link\('abenoo_transaction_abexa.htm'\))



**📖 Source**: [abenabap_objects_abexas.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_objects_abexas.htm)

### abenabap_objects_abexa.htm

> **📖 Official SAP Documentation**: [abenabap_objects_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_objects_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Objects](javascript:call_link\('abenabap_objects.htm'\)) →  [ABAP Objects - Examples](javascript:call_link\('abenabap_objects_abexas.htm'\)) → 

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



**📖 Source**: [abenabap_objects_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_objects_abexa.htm)

### abenclass_abexa.htm

> **📖 Official SAP Documentation**: [abenclass_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Objects](javascript:call_link\('abenabap_objects.htm'\)) →  [ABAP Objects - Examples](javascript:call_link\('abenabap_objects_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Classes%2C%20ABENCLASS_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Objects - Classes

This example demonstrates a class for counters.

Source Code   

\* Public class definition
CLASS cl\_demo\_class\_counter DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* CCIMP
CLASS counter DEFINITION.
  PUBLIC SECTION.
    METHODS: set
    IMPORTING VALUE(set\_value) TYPE i,
    increment,
    get
    EXPORTING VALUE(get\_value) TYPE i.
  PRIVATE SECTION.
    DATA count TYPE i.
ENDCLASS.
CLASS counter IMPLEMENTATION.
  METHOD set.
    count = set\_value.
  ENDMETHOD.
  METHOD increment.
    count += 1.
  ENDMETHOD.
  METHOD get.
    get\_value = count.
  ENDMETHOD.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_class\_counter IMPLEMENTATION.
  METHOD main.
    DATA number TYPE i VALUE 5.
    FINAL(cnt) = NEW counter( ).
    cnt->set( number ).
    DO 3 TIMES.
      cnt->increment( ).
    ENDDO.
    cnt->get( IMPORTING get\_value = number ).
    out->write( number ).
  ENDMETHOD.
ENDCLASS.

Description   

The local class counter contains three public methods, set, increment, and get, which work with the private integer field count. Two of the methods have input and output parameters and therefore define the data interface of the class. The field count, on the other hand, is not visible externally.



**📖 Source**: [abenclass_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_abexa.htm)

### abeninheritance_abexa.htm

> **📖 Official SAP Documentation**: [abeninheritance_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninheritance_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Objects](javascript:call_link\('abenabap_objects.htm'\)) →  [ABAP Objects - Examples](javascript:call_link\('abenabap_objects_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Inheritance%2C%20ABENINHERITANCE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Objects - Inheritance

This example demonstrates how a counter is specialized using inheritance.

Source Code   

\* CCDEF
CLASS o DEFINITION.
  PUBLIC SECTION.
    CLASS-DATA out TYPE REF TO if\_demo\_output.
ENDCLASS.
\* Public class definition
CLASS cl\_demo\_inheritance DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* CCIMP
CLASS counter DEFINITION.
  PUBLIC SECTION.
    METHODS:
    set
    IMPORTING VALUE(set\_value) TYPE i,
    increment,
    get
    EXPORTING VALUE(get\_value) TYPE i.
  PROTECTED SECTION.
    DATA count TYPE i.
ENDCLASS.
CLASS counter IMPLEMENTATION.
  METHOD set.
    count = set\_value.
  ENDMETHOD.
  METHOD increment.
    count += 1.
  ENDMETHOD.
  METHOD get.
    get\_value = count.
  ENDMETHOD.
ENDCLASS.
CLASS counter\_ten DEFINITION INHERITING FROM counter.
  PUBLIC SECTION.
    METHODS increment REDEFINITION.
    DATA count\_ten TYPE c LENGTH 1.
ENDCLASS.
CLASS counter\_ten IMPLEMENTATION.
  METHOD increment.
    DATA modulo TYPE i.
    super->increment( ).
    modulo = count MOD 10.
    IF modulo = 0.
      count\_ten += 1.
      o=>out->write\_text(
      |{ count } - { count\_ten }| ).
    ELSE.
      o=>out->write\_text( |{ count }| ).
    ENDIF.
  ENDMETHOD.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_inheritance IMPLEMENTATION.
  METHOD main.
    o=>out = out.
    DATA: count  TYPE REF TO counter,
          number TYPE i VALUE 5.
    count = NEW counter\_ten( ).
    count->set( number ).
    DO 20 TIMES.
      count->increment( ).
    ENDDO.
  ENDMETHOD.
ENDCLASS.

Description   

The local class counter\_ten is derived from counter and redefines the method increment. In counter, the visibility of the attribute count must be set from PRIVATE to PROTECTED. In the redefined method, the hidden method with the pseudo reference super-> is called. The redefined method specializes the inherited method.

An object of the subclass is created to which a reference variable of the superclass type points. When the method increment is executed using the superclass reference, the redefined method of the subclass is executed.



**📖 Source**: [abeninheritance_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninheritance_abexa.htm)

### abeninterface_abexa.htm

> **📖 Official SAP Documentation**: [abeninterface_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninterface_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Objects](javascript:call_link\('abenabap_objects.htm'\)) →  [ABAP Objects - Examples](javascript:call_link\('abenabap_objects_abexas.htm'\)) → 

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



**📖 Source**: [abeninterface_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninterface_abexa.htm)

### abenevents_abexa.htm

> **📖 Official SAP Documentation**: [abenevents_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenevents_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Objects](javascript:call_link\('abenabap_objects.htm'\)) →  [ABAP Objects - Examples](javascript:call_link\('abenabap_objects_abexas.htm'\)) → 

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



**📖 Source**: [abenevents_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenevents_abexa.htm)

### abenfriends_abexa.htm

> **📖 Official SAP Documentation**: [abenfriends_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfriends_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

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



**📖 Source**: [abenfriends_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfriends_abexa.htm)

### abenoo_transaction_abexa.htm

> **📖 Official SAP Documentation**: [abenoo_transaction_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoo_transaction_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenoo_transaction_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoo_transaction_abexa.htm)


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Objects](javascript:call_link\('abenabap_objects.htm'\)) →  [ABAP Objects - Examples](javascript:call_link\('abenabap_objects_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Object%20Transaction%2C%20ABENOO_TRANSACTION_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Objects - Object Transaction

This example demonstrates how a transaction code is linked with the method of a local class.

Source Code   

\*&---------------------------------------------------------------------\*
\*& Subroutine pool  DEMO\_OO\_TRANSACTION                                \*
\*&                                                                     \*
\*&---------------------------------------------------------------------\*
PROGRAM  demo\_oo\_transaction.
\*
CLASS demo\_class DEFINITION.
  PUBLIC SECTION.
    METHODS instance\_method.
ENDCLASS.
\*
CLASS demo\_class IMPLEMENTATION.
  METHOD instance\_method.
    cl\_demo\_output=>display( 'Instance method in local class' ).
  ENDMETHOD.
ENDCLASS.

Description   

The program DEMO\_OO\_TRANSACTION is a subroutine pool that does not contain any subroutines. Instead, the program contains the definition of the local class demo\_class, linked with the transaction code DEMO\_OO\_METHOD. When the transaction is called, the program is loaded, an instance of the class is created, and the method is called.
