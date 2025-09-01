---
title: "FILTER, Filter Table"
description: |
  This example demonstrates table filtering(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_filter.htm) using a filter table. Source Code  Public class definition CLASS cl_demo_filter_table DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PU
version: "latest"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfilter_table_abexa.htm"
abapFile: "abenfilter_table_abexa.htm"
keywords: ["select", "do", "if", "method", "class", "data", "types", "internal-table", "abenfilter", "table", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_processing_expr_func.htm) →  [FILTER, Filter Operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_filter.htm) →  [itab - Examples for FILTER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_filtering_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20FILTER%2C%20Filter%20Table%2C%20ABENFILTER_TABLE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

FILTER, Filter Table

This example demonstrates [table filtering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_filter.htm) using a filter table.

Source Code   

\* Public class definition
CLASS cl\_demo\_filter\_table DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    DATA:
      cityfrom TYPE spfli-cityfrom VALUE 'Frankfurt',
      cityto   TYPE spfli-cityto   VALUE 'New York'.
    METHODS init.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_filter\_table IMPLEMENTATION.
  METHOD main.
    init( ).
    TYPES: BEGIN OF filter,
             cityfrom TYPE spfli-cityfrom,
             cityto   TYPE spfli-cityto,
           END OF filter,
           filter\_tab TYPE HASHED TABLE OF filter
                 WITH UNIQUE KEY cityfrom cityto.
    FINAL(filter\_tab) = VALUE filter\_tab(
        ( cityfrom = cityfrom cityto = cityto )
        ( cityfrom = cityto   cityto = cityfrom ) ).
    SELECT carrid, connid, cityfrom, cityto
          FROM spfli
          ORDER BY carrid, connid, cityfrom, cityto
          INTO TABLE @FINAL(spfli\_tab).
    out->write(
      FILTER #( spfli\_tab IN filter\_tab
                  WHERE cityfrom = cityfrom  AND cityto = cityto ) ).
  ENDMETHOD.
  METHOD init.
    cl\_demo\_input=>new(
     )->add\_field( CHANGING field = cityfrom
     )->request(   CHANGING field = cityto ).
    cityfrom = to\_upper( cityfrom ).
    cityto = to\_upper( cityto ).
    IF cityfrom = cityto.
      EXIT.
    ENDIF.
  ENDMETHOD.
ENDCLASS.

Description   

Those lines are filtered out of an internal table spfli\_tab filled with flight data that have specific values in the columns cityfrom and cityto. The filter is applied using a filter table of the type filter\_tab constructed using VALUE filled with input values. The result includes all outbound and return flights for the entered cities.