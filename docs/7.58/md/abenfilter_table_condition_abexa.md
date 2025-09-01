---
title: "FILTER, Filterings with Table Filter"
description: |
  This example demonstrates various types of table filtering(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_filter.htm) using a filter table. Source Code  Public class definition CLASS cl_demo_filter_table_condition DEFINITION INHERITING FROM cl_demo_cl
version: "7.58"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfilter_table_condition_abexa.htm"
abapFile: "abenfilter_table_condition_abexa.htm"
keywords: ["do", "if", "method", "class", "data", "types", "internal-table", "abenfilter", "table", "condition", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_processing_expr_func.htm) →  [FILTER, Filter Operator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_filter.htm) →  [itab - Examples for FILTER](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_filtering_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20FILTER%2C%20Filterings%20with%20Table%20Filter%2C%20ABENFILTER_TABLE_CONDITION_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20imp
rovement:)

FILTER, Filterings with Table Filter

This example demonstrates various types of [table filtering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_filter.htm) using a filter table.

Source Code   

\* Public class definition
CLASS cl\_demo\_filter\_table\_condition DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    DATA:
      itab TYPE SORTED TABLE OF i WITH NON-UNIQUE KEY table\_line,
      ftab TYPE SORTED TABLE OF i WITH NON-UNIQUE KEY table\_line.
    METHODS constructor.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_filter\_table\_condition IMPLEMENTATION.
  METHOD main.
    out->next\_section( 'itab'
       )->write( itab
       )->next\_section( 'ftab'
       )->write( ftab
       )->next\_section(
         'FILTER #( itab IN ftab WHERE table\_line = table\_line )'
       )->write(
          FILTER #( itab IN ftab WHERE table\_line = table\_line )
       )->next\_section(
         'FILTER #( itab EXCEPT IN ftab WHERE table\_line = table\_line )'
       )->write(
          FILTER #( itab EXCEPT IN ftab WHERE table\_line = table\_line )
       )->next\_section(
         'FILTER #( itab IN ftab WHERE table\_line > table\_line )'
       )->write(
          FILTER #( itab IN ftab WHERE table\_line > table\_line )
       )->next\_section(
         'FILTER #( itab IN ftab WHERE table\_line <> table\_line )'
       )->write(
          FILTER #( itab IN ftab WHERE table\_line <> table\_line )
       )->next\_section(
         'FILTER #( itab IN ftab WHERE table\_line <= table\_line )'
       )->write(
          FILTER #( itab IN ftab WHERE table\_line <= table\_line ) ).
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    FINAL(rnd1) = cl\_abap\_random\_int=>create(
      seed = CONV i(
         cl\_demo\_date\_time=>get\_user\_time( ) ) min = 1 max = 7 ).
    FINAL(rnd2) = cl\_abap\_random\_int=>create(
     seed = CONV i(
        cl\_demo\_date\_time=>get\_user\_time( ) ) min = 3 max = 10 ).
    itab = VALUE #( FOR j = 1 UNTIL j > 5 ( rnd1->get\_next( ) ) ).
    ftab = VALUE #( FOR j = 1 UNTIL j > 5 ( rnd2->get\_next( ) ) ).
  ENDMETHOD.
ENDCLASS.

Description   

A table itab contains five random numbers between 1 and 7, a table ftab contains five random numbers between 3 and 10. Different types of table filters for itab are performed using the table ftab as a filter table:

-   The first filtering creates a table of all lines from itab for which there is at least one line with the same value in ftab.
-   The second filtering creates a table of all lines from itab for which there is no line with the same value in ftab.
-   The third filtering creates a table of all lines from itab for which there is at least one line with a lesser value in ftab.
-   The fourth filtering creates a table of all lines from itab for which there is at least one line with a non-equal value in ftab.
-   The fifth filtering creates a table of all lines from itab for which there is at least one line with a greater or lesser value in ftab.

When merged, the results from the first and second filtering are all lines from itab. The first filtering creates the union and the second filtering the difference of the two tables itab and ftab.

The fourth filtering does not produce the same result as the second filtering. The fifth filtering does not produce the lines from itab that remain after the third filtering.