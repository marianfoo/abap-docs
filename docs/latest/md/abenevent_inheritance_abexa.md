  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Components in Classes and Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_ifac_components.htm) →  [ABAP Objects - Events](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenevents.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Events%20in%20Inheritance%2C%20ABENEVENT_INHERITANCE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

ABAP Objects - Events in Inheritance

This example demonstrates the behavior of [events in inheritance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninheritance_events.htm).

Source Code   

\* Public class definition
CLASS cl\_demo\_event\_inheritance DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    CLASS-DATA handle\_flag TYPE c LENGTH 1.
ENDCLASS.
\* CCIMP
CLASS c1 DEFINITION.
  PUBLIC SECTION.
    CLASS-EVENTS ce1.
    CLASS-METHODS cm1.
    EVENTS ie1.
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
CLASS c1 IMPLEMENTATION.
  METHOD cm1.
    CLEAR cl\_demo\_event\_inheritance=>handle\_flag.
    RAISE EVENT ce1.
  ENDMETHOD.
  METHOD im1.
    CLEAR cl\_demo\_event\_inheritance=>handle\_flag.
    RAISE EVENT ie1.
  ENDMETHOD.
ENDCLASS.
CLASS c2 IMPLEMENTATION.
  METHOD cm2.
    CLEAR cl\_demo\_event\_inheritance=>handle\_flag.
    RAISE EVENT ce1.
  ENDMETHOD.
  METHOD im2.
    CLEAR cl\_demo\_event\_inheritance=>handle\_flag.
    RAISE EVENT ie1.
  ENDMETHOD.
ENDCLASS.
CLASS c3 IMPLEMENTATION.
  METHOD cm3.
    CLEAR cl\_demo\_event\_inheritance=>handle\_flag.
    RAISE EVENT ce1.
  ENDMETHOD.
  METHOD im3.
    CLEAR cl\_demo\_event\_inheritance=>handle\_flag.
    RAISE EVENT ie1.
  ENDMETHOD.
ENDCLASS.
CLASS c4 IMPLEMENTATION.
  METHOD cm4.
    cl\_demo\_event\_inheritance=>handle\_flag = 'X'.
  ENDMETHOD.
  METHOD im4.
    cl\_demo\_event\_inheritance=>handle\_flag = 'X'.
  ENDMETHOD.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_event\_inheritance IMPLEMENTATION.
  METHOD main.
    DATA oref1 TYPE REF TO c1.
    DATA oref2 TYPE REF TO c2.
    DATA oref3 TYPE REF TO c3.
    DATA oref4 TYPE REF TO c4.
    out->begin\_section( 'Static event' ).
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
  ENDMETHOD.
ENDCLASS.

Description   

A static event ce1 and an instance event ie1 are declared in a superclass c1. The superclass c1, its subclass c2, and its subclass c3 each contain a static method and an instance method for raising the events.

In the class c4, event handlers are declared in c2 for the events inherited from c1. The method main of the class event\_demo registers the events and calls all methods that can raise events, whereby different options are used to address the methods. An X is displayed after the method call for a handled event.

-   The event handler cm4 declared for the class c2 can only handle events that are raised in this class or in its subclass. Events that are raised by the static method cm1 in c1 are not handled, regardless of the class name specified for the call (see also [Inheritance and Static Components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninheritance_statical.htm)).
-   The event handler im4 declared for the class c2 can also only handle events raised in this class or in its subclass. Unlike when calling static methods, the class of the object is always addressed when addressing an object using an object reference and raised events in the inherited method im1 of the classes c2 and c3 are handled.