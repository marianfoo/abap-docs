  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Types and Objects - Overview](javascript:call_link\('abentypes_objects_oview.htm'\)) →  [Data Objects](javascript:call_link\('abendata_objects.htm'\)) →  [Memory Management of Deep Objects](javascript:call_link\('abenmemory_consumption.htm'\)) → 

Deep Data Objects, Memory Consumption

The example illustrates the management costs of deep components with low data content.

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

At the breakpoints, you can use the ABAP Debugger to display the memory requirements of the four internal tables itab, rtab, ttab, and otab.

At the first breakpoint, the four tables have the same dynamic yet not duplicative data content, that is, 1000 different integers. In itab, the data content of about 4 KB is only increased by the management costs for itab itself (around 100 bytes); in all other tables, management costs are created for each single table row. In the case of the deep row types in rtab, ttab, and otab, the data content size of 4 KB compares with management costs in the order of 100, 200, and 300 KB. The costs for the inner internal table in ttab are higher than that for the data reference in rtab. The management costs for otab are made up of the costs for the object references and for the internal tables in the object references.

At the second breakpoint, all rows of each of the four tables were initialized using FREE. Of course, this does not effect the memory requirements of itab. In the case of rtab, all data as well as all management information of the individual reference variables was deleted, leaving memory requirements of about 8 KB for the initial references plus the management costs for rtab itself. In the case of ttab, all data was deleted but the individual table headers were retained. Although the management costs could be reduced slightly this way, this still leaves about 100 KB of management-only costs. For otab, by contrast, the situation was similar to rtab, leaving only the costs for the initial references.

This example shows on the one hand that for internal tables with deep row types the management costs may easily exceed the data content and on the other hand that after deleting data a table with object references is less expensive than a table with inner tables.