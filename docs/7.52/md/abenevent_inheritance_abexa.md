  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [Components in Classes and Interfaces](javascript:call_link\('abenclass_ifac_components.htm'\)) →  [Events](javascript:call_link\('abenevents.htm'\)) → 

Inheritance Events

The example demonstrates the behavior of [inheritance events](javascript:call_link\('abeninheritance_events.htm'\)).

Source Code

REPORT demo\_event\_inheritance.
CLASS c1 DEFINITION.
  PUBLIC SECTION.
    CLASS-EVENTS  ce1.
    CLASS-METHODS cm1.
    EVENTS  ie1.
    METHODS im1.
ENDCLASS.
CLASS c2 DEFINITION INHERITING FROM c1.
  PUBLIC SECTION.
    CLASS-METHODS cm2.
    METHODS im2.
ENDCLASS.
CLASS c3 DEFINITION INHERITING FROM c2.
  PUBLIC SECTION.
    CLASS-METHODS cm3.
    METHODS im3.
ENDCLASS.
CLASS c4 DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS cm4 FOR EVENT ce1 OF c2.
    METHODS im4 FOR EVENT ie1 OF c2.
ENDCLASS.
CLASS event\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-DATA handle\_flag TYPE c LENGTH 1.
    CLASS-METHODS main.
ENDCLASS.
CLASS event\_demo IMPLEMENTATION.
  METHOD main.
    DATA oref1 TYPE REF TO c1.
    DATA oref2 TYPE REF TO c2.
    DATA oref3 TYPE REF TO c3.
    DATA oref4 TYPE REF TO c4.
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( 'Static event' ).
    SET HANDLER c4=>cm4.
    c1=>cm1( ).
    out->write( |c1=>cm1( ): { handle\_flag }| ).
    c2=>cm1( ).
    out->write( |c2=>cm1( ): { handle\_flag }| ).
    c3=>cm1( ).
    out->write( |c3=>cm1( ): { handle\_flag }| ).
    c2=>cm2( ).
    out->write( |c2=>cm2( ): { handle\_flag }| ).
    c3=>cm2( ).
    out->write( |c3=>cm2( ): { handle\_flag }| ).
    c3=>cm3( ).
    out->write( |c3=>cm3( ): { handle\_flag }| ).
    out->next\_section( 'Instance event' ).
    CREATE OBJECT: oref1, oref2, oref3, oref4.
    SET HANDLER oref4->im4 FOR ALL INSTANCES.
    oref1->im1( ).
    out->write( |oref1->im1( ): { handle\_flag }| ).
    oref2->im1( ).
    out->write( |oref2->im1( ): { handle\_flag }| ).
    oref3->im1( ).
    out->write( |oref3->im1( ): { handle\_flag }| ).
    oref2->im2( ).
    out->write( |oref2->im2( ): { handle\_flag }| ).
    oref3->im2( ).
    out->write( |oref3->im2( ): { handle\_flag }| ).
    oref3->im3( ).
    out->write( |oref3->im3( ): { handle\_flag }| ).
    out->display( ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  event\_demo=>main( ).
CLASS c1 IMPLEMENTATION.
  METHOD cm1.
    CLEAR event\_demo=>handle\_flag.
    RAISE EVENT ce1.
  ENDMETHOD.
  METHOD im1.
    CLEAR event\_demo=>handle\_flag.
    RAISE EVENT ie1.
  ENDMETHOD.
ENDCLASS.
CLASS c2 IMPLEMENTATION.
  METHOD cm2.
    CLEAR event\_demo=>handle\_flag.
    RAISE EVENT ce1.
  ENDMETHOD.
  METHOD im2.
    CLEAR event\_demo=>handle\_flag.
    RAISE EVENT ie1.
  ENDMETHOD.
ENDCLASS.
CLASS c3 IMPLEMENTATION.
  METHOD cm3.
    CLEAR event\_demo=>handle\_flag.
    RAISE EVENT ce1.
  ENDMETHOD.
  METHOD im3.
    CLEAR event\_demo=>handle\_flag.
    RAISE EVENT ie1.
  ENDMETHOD.
ENDCLASS.
CLASS c4 IMPLEMENTATION.
  METHOD cm4.
    event\_demo=>handle\_flag = 'X'.
  ENDMETHOD.
  METHOD im4.
    event\_demo=>handle\_flag = 'X'.
  ENDMETHOD.
ENDCLASS.

Description

In a c1 superclass, a static event ce1 and an instance event ie1 are declared. The superclass c1, and its subclass c2, and its subclass c3, each contain a static method and an instance method to trigger events.

In the c4 class, event handlers are declared in c2 for the events inherited from c1. The main method of the event\_demo class registers events and calls all methods which can trigger events, whereby different possibilities are used to address the methods. The output displays an "X" after the method call for a handled event.

-   The event handler cm4, declared for the c2 class, can only handle events which are triggered in this class or in its subclasses. Events which are triggered by the static method cm1 in c1, are not handled, irrelevant of the class name which is specified for the call (also refer to [Inheritance and Static Components](javascript:call_link\('abeninheritance_statical.htm'\))).

-   The event handler im4, declared for the c2 class, can also only handle events which are triggered in this class or in its subclasses. Unlike when calling static methods, the class of the object is always addressed when addressing an object using an object reference, and triggered events in the inherited method im1 of the c2 and c3 classes are handled.