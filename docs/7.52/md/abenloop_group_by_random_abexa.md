---
title: "Internal Tables, Random Grouping with LOOP"
description: |
  This example demonstrates a construction of the group key(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengroup_key_glosry.htm 'Glossary Entry') that does not depend on the table rows. Source Code REPORT demo_loop_group_by_random. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-MET
version: "7.52"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenloop_group_by_random_abexa.htm"
abapFile: "abenloop_group_by_random_abexa.htm"
keywords: ["select", "loop", "do", "try", "method", "class", "data", "internal-table", "abenloop", "group", "random", "abexa"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab.htm) →  [Processing Statements for Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_processing_statements.htm) →  [LOOP AT itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab_variants.htm) →  [LOOP AT itab - GROUP BY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab_group_by.htm) →  [Examples of Grouping with LOOP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenloop_group_by_abexas.htm) → 

Internal Tables, Random Grouping with LOOP

This example demonstrates a construction of the [group key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengroup_key_glosry.htm "Glossary Entry") that does not depend on the table rows.

Source Code

REPORT demo\_loop\_group\_by\_random.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      class\_constructor.
  PRIVATE SECTION.
    CLASS-DATA
      numbers TYPE STANDARD TABLE OF i WITH EMPTY KEY.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    DATA(rnd) = cl\_abap\_random\_int=>create(
      seed = CONV i( sy-uzeit ) min = 1 max = 10 ).
    DATA members LIKE numbers.
    LOOP AT numbers INTO DATA(line)
         GROUP BY rnd->get\_next( )
                  ASCENDING
                  ASSIGNING FIELD-SYMBOL(<group>).
      out->begin\_section( |Group Key: { <group> }| ).
      members = VALUE #( FOR <wa> IN GROUP <group> ( <wa> ) ).
      out->write( members
        )->write( |Lines: { lines( members ) }|
        )->end\_section( ).
    ENDLOOP.
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    numbers = VALUE #( FOR j = 1 UNTIL j > 100 ( j ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

[Grouping](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab_group_by.htm) of an internal table numbers with [group key binding](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab_group_by_binding.htm). The [group key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab_group_by_key.htm) of the [group loop](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengroup_loop_glosry.htm "Glossary Entry") is constructed as a value of the type i, which is determined as a random number fully independent of the internal table. This casts the table rows into groups of approximately the same size.

In the group loop, the rows of each group are placed in an internal table members using a [table comprehension](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_comprehension_glosry.htm "Glossary Entry"). This table is the output.