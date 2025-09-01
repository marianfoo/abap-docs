  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentypes_and_objects.htm) →  [Types and Objects, Overview](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentypes_objects_oview.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_objects.htm) →  [Memory Management of Deep Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmemory_consumption.htm) → 

Deep Data Objects, Memory Consumption

The example illustrates the administrative costs of deep components with low data content.

Source Code

REPORT demo\_memory\_usage.
CLASS lcl DEFINITION.
  PUBLIC SECTION.
    DATA atab TYPE TABLE OF i.
ENDCLASS.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    CONSTANTS n TYPE i VALUE 1000.
    DATA: itab TYPE TABLE OF i,
          dref TYPE REF   TO i,
          rtab TYPE TABLE OF REF TO i,
          ltab TYPE TABLE OF i,
          ttab LIKE TABLE OF ltab,
          oref TYPE REF   TO lcl,
          otab TYPE TABLE OF REF TO lcl.
    FIELD-SYMBOLS <line> TYPE any.
    DO n TIMES.
      APPEND sy-index TO itab.
      CLEAR dref.
      CREATE DATA dref.
      dref->\* = sy-index.
      APPEND dref TO rtab.
      CLEAR ltab.
      APPEND sy-index TO ltab.
      APPEND ltab TO ttab.
      CLEAR oref.
      CREATE OBJECT oref.
      APPEND sy-index TO oref->atab.
      APPEND oref TO otab.
    ENDDO.
    BREAK-POINT ##no\_break.
    LOOP AT itab ASSIGNING <line>.
      FREE <line>.
    ENDLOOP.
    LOOP AT rtab ASSIGNING <line>.
      FREE <line>.
    ENDLOOP.
    LOOP AT ttab ASSIGNING <line>.
      FREE <line>.
    ENDLOOP.
    LOOP AT otab ASSIGNING <line>.
      FREE <line>.
    ENDLOOP.
    BREAK-POINT ##no\_break.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

At the breakpoints, the memory requirements of the four internal tables itab, rtab, ttab, and otab can be displayed by the ABAP Debugger.

At the first breakpoint, the four tables have the same dynamic but not duplicate data content, that is, 1000 different integers. In itab, the data content of about 4 KB is only increased by the administrative costs for itab itself (around 100 bytes); in all other tables, administrative costs are created for each table line. In the case of the deep line types in rtab, ttab, and otab, the data content size of 4 KB compares with administrative costs of 100, 200, and 300 KB. The costs for the inner internal table in ttab are higher than that for the data reference in rtab and the administrative costs for otab consist of the costs for the object references and for the internal tables in the referenced objects.

At the second breakpoint, all lines of each of the four tables were initialized using FREE. Of course, this has no effect on the memory requirements of itab. In the case of rtab, all data and all administrative information of the individual reference variables was deleted, leaving memory requirements of about 8 KB for the initial references as well as the administrative costs for rtab itself. In the case of ttab, all data was deleted but the individual table headers were retained, which means that, even though they are lower than before, there are still administrative costs of about 100 KB. For otab however, the same applies as to rtab, leaving only the costs for the initial references.

This example shows, for example, that for internal tables with deep line types the administrative costs may easily exceed the data content and, on the other hand, that a table with object references is less expensive after the deletion of data than a table with inner tables.