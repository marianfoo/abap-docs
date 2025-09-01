---
title: "ABAP Objects - Inheritance"
description: |
  This example demonstrates how a counter is specialized using inheritance. Source Code  CCDEF CLASS o DEFINITION. PUBLIC SECTION. CLASS-DATA out TYPE REF TO if_demo_output. ENDCLASS.  Public class definition CLASS cl_demo_inheritance DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE
version: "7.58"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance_abexa.htm"
abapFile: "abeninheritance_abexa.htm"
keywords: ["do", "if", "method", "class", "data", "abeninheritance", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [ABAP Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_objects.htm) →  [ABAP Objects - Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_objects_abexas.htm) → 

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