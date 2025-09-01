---
title: "ABAP Objects, Inheritance"
description: |
  This example demonstrates how a counter is specialized using inheritance. Source Code REPORT demo_inheritance. CLASS counter DEFINITION. PUBLIC SECTION. METHODS: set IMPORTING value(set_value) TYPE i, increment, get EXPORTING value(get_value) TYPE i. PROTECTED SECTION. DATA count TYPE i. ENDCLASS
version: "7.54"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninheritance_abexa.htm"
abapFile: "abeninheritance_abexa.htm"
keywords: ["select", "do", "if", "method", "class", "data", "abeninheritance", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Overview](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_objects_oview.htm) →  [Examples for ABAP Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_objects_abexas.htm) → 

ABAP Objects, Inheritance

This example demonstrates how a counter is specialized using inheritance.

Source Code

REPORT demo\_inheritance.
CLASS counter DEFINITION.
  PUBLIC SECTION.
    METHODS:
      set
        IMPORTING value(set\_value) TYPE i,
      increment,
      get
        EXPORTING value(get\_value) TYPE i.
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
      cl\_demo\_output=>write\_text( |{ count } - { count\_ten }| ).
    ELSE.
      cl\_demo\_output=>write\_text( |{ count }| ).
    ENDIF.
  ENDMETHOD.
ENDCLASS.
DATA: count TYPE REF TO counter,
      number TYPE i VALUE 5.
START-OF-SELECTION.
  count = NEW counter\_ten( ).
  count->set( number ).
  DO 20 TIMES.
    count->increment( ).
  ENDDO.
  cl\_demo\_output=>display( ).

Description

The class counter\_ten is derived from counter and redefines the method increment. In counter, the visibility of the attribute count must be changed from PRIVATE to PROTECTED. In the redefined method, the obscured method with the pseudo reference super-> is called. The redefined method specializes the inherited method.

An object of the subclass is created to which a reference variable of the superclass type points. When the method increment is executed, the redefined method of the subclass is executed using the superclass reference.