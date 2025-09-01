# ABAP - Keyword Documentation / ABAP - Reference / Processing Internal Data / Internal Tables / System Class for Internal Tables

Included pages: 7


### abencl_abap_itab.htm

---
title: "System Class for Internal Tables"
description: |
  The class CL_ABAP_ITAB_UTILITIES contains the following methods: -   FLUSH_ITAB_KEY and FLUSH_ITAB_KEYS can be used to update individual secondary table keys(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_table_key_glosry.htm 'Glossary Entry') or all secondary tabl
version: "7.52"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_itab.htm"
abapFile: "abencl_abap_itab.htm"
keywords: ["update", "do", "if", "try", "method", "class", "data", "internal-table", "abencl", "abap", "itab"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab.htm) → 

System Class for Internal Tables

The class CL\_ABAP\_ITAB\_UTILITIES contains the following methods:

-   FLUSH\_ITAB\_KEY and FLUSH\_ITAB\_KEYS can be used to update individual [secondary table keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") or all secondary table keys of an internal table explicitly. Otherwise the update takes place as a [delayed](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendelayed_update_glosry.htm "Glossary Entry") or [lazy update](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlazy_update_glosry.htm "Glossary Entry").

-   READ\_BINARY\_SEARCH\_CHECK can be used with the addition [BINARY SEARCH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table_free.htm) to activate checks on the required sort for test purposes. If the required sort does not exist, the runtime error ITAB\_ILLEGAL\_ORDER is raised when the check is activated.

-   HAS\_COLLECT\_HASH\_ADMIN can be used to check whether the temporary hash management of the statement [COLLECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcollect.htm) exists for a standard table.

-   INDEX\_HEALTH\_CHECK can be used to check the consistency of [primary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprimary_table_index_glosry.htm "Glossary Entry") and [secondary table indexes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_table_index_glosry.htm "Glossary Entry").

-   VIRTUAL\_SORT can be used to apply virtual sorts to a set of internal tables with the same number of rows. The internal tables are treated internally like a single combined table containing all the columns of the involved internal tables. The result is an array of row numbers of the virtually sorted combined table. See the related [executable examples](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvirtual_sort_abexas.htm).

Continue
[Examples of Virtual Sorting of Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvirtual_sort_abexas.htm)


### abenvirtual_sort_abexas.htm

---
title: "Examples of Virtual Sorting of Internal Tables"
description: |
  !Example(exa.gif 'Example') Virtual Sorting of an Internal Table(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvirtual_sort_simple_abexa.htm) !Example(exa.gif 'Example') Virtual Sorting of Two Internal Tables(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvir
version: "7.52"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvirtual_sort_abexas.htm"
abapFile: "abenvirtual_sort_abexas.htm"
keywords: ["do", "if", "class", "data", "internal-table", "abenvirtual", "sort", "abexas"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab.htm) →  [System Class for Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_itab.htm) → 

Examples of Virtual Sorting of Internal Tables

Continue
![Example](exa.gif "Example") [Virtual Sorting of an Internal Table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvirtual_sort_simple_abexa.htm)
![Example](exa.gif "Example") [Virtual Sorting of Two Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvirtual_sort_combined_abexa.htm)
![Example](exa.gif "Example") [Virtual Sorting of an Internal Table with Filters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvirtual_sort_filter_abexa.htm)
![Example](exa.gif "Example") [Virtual Sorting of Flight Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvirtual_sort_flights_abexa.htm)


### abenvirtual_sort_simple_abexa.htm

---
title: "Virtual Sorting of an Internal Table"
description: |
  This example demonstrates the virtual sorting of a single internal table. Source Code REPORT demo_virtual_sort_simple. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. TYPES: BEGIN OF line, col1 TYPE i, col2 TYPE i, col3 TYPE string, col
version: "7.52"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvirtual_sort_simple_abexa.htm"
abapFile: "abenvirtual_sort_simple_abexa.htm"
keywords: ["select", "do", "case", "method", "class", "data", "types", "internal-table", "abenvirtual", "sort", "simple", "abexa"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab.htm) →  [System Class for Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_itab.htm) →  [Examples of Virtual Sorting of Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvirtual_sort_abexas.htm) → 

Virtual Sorting of an Internal Table

This example demonstrates the virtual sorting of a single internal table.

Source Code

REPORT demo\_virtual\_sort\_simple.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES:
      BEGIN OF line,
        col1 TYPE i,
        col2 TYPE i,
        col3 TYPE string,
        col4 TYPE string,
      END OF line,
      itab TYPE STANDARD TABLE OF line WITH EMPTY KEY.
    DATA(rnd) = cl\_abap\_random\_int=>create( seed = + sy-uzeit
                                            min  = 1
                                            max  = 10 ).
    DATA(itab) = VALUE itab( FOR i = 1 UNTIL i > 10
                             ( col1 = rnd->get\_next( )
                               col2 = rnd->get\_next( )
                               col3 = substring(
                                        val = sy-abcde
                                        off = rnd->get\_next( ) - 1
                                        len = 1 )
                               col4 = substring(
                                        val = sy-abcde
                                        off = rnd->get\_next( ) - 1
                                        len = 1 ) ) ).
    DATA(out) = cl\_demo\_output=>new( ).
    out->write( itab ).
    out->next\_section( \`Virtual Sort by col1, col2, Ascending\` ).
    DATA(v\_index) =
      cl\_abap\_itab\_utilities=>virtual\_sort(
        im\_virtual\_source = VALUE #(
         ( source     = REF #( itab )
           components = VALUE #( ( name = 'col1' )
                                 ( name = 'col2' ) ) ) ) ).
    out->write( v\_index ).
    DATA sorted\_tab TYPE itab.
    sorted\_tab = VALUE #( FOR idx IN v\_index ( itab\[ idx \] ) ).
    DATA(test\_tab) = itab.
    SORT test\_tab STABLE BY col1 col2.
    ASSERT sorted\_tab = test\_tab.
    out->write( sorted\_tab ).
    out->next\_section( \`Virtual Sort by col3, col4, Descending\` ).
    v\_index =
      cl\_abap\_itab\_utilities=>virtual\_sort(
        im\_virtual\_source = VALUE #(
         ( source     = REF #( itab )
           components = VALUE #(
                         ( name = 'col3'
                           astext = abap\_true
                           descending = abap\_true )
                         ( name = 'col4'
                           astext = abap\_true
                           descending = abap\_true ) ) ) ) ).
    out->write( v\_index ).
    sorted\_tab = VALUE #( FOR idx IN v\_index ( itab\[ idx \] ) ).
    test\_tab = itab.
    SORT test\_tab STABLE BY col3 AS TEXT DESCENDING
                            col4 AS TEXT DESCENDING.
    ASSERT sorted\_tab = test\_tab.
    out->write( sorted\_tab ).
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

An internal table filled with random numbers and letters is sorted virtually using the method VIRTUAL\_SORT of system class CL\_ABAP\_ITAB\_UTILITIES, first in ascending order by the first two columns and then in descending alphabetical order by the last two columns. The returned array contains the row numbers in the respective sort order. This array is used to fill an internal table sorted\_tab according to the sorting. To compare, an internal table test\_tab with the same content is constructed and sorted with the statement [SORT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsort_itab.htm). The results are the same in both cases.


### abenvirtual_sort_combined_abexa.htm

---
title: "Virtual Sorting of Two Internal Tables"
description: |
  This example demonstrates the virtual sorting of two internal tables. Source Code REPORT demo_virtual_sort_combined. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. TYPES: BEGIN OF line1, col1 TYPE i, col2 TYPE i, END OF line1, itab1 TY
version: "7.52"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvirtual_sort_combined_abexa.htm"
abapFile: "abenvirtual_sort_combined_abexa.htm"
keywords: ["select", "do", "method", "class", "data", "types", "internal-table", "abenvirtual", "sort", "combined", "abexa"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab.htm) →  [System Class for Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_itab.htm) →  [Examples of Virtual Sorting of Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvirtual_sort_abexas.htm) → 

Virtual Sorting of Two Internal Tables

This example demonstrates the virtual sorting of two internal tables.

Source Code

REPORT demo\_virtual\_sort\_combined.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES:
      BEGIN OF line1,
        col1 TYPE i,
        col2 TYPE i,
      END OF line1,
      itab1 TYPE STANDARD TABLE OF line1 WITH EMPTY KEY,
      BEGIN OF line2,
        col1 TYPE string,
        col2 TYPE string,
      END OF line2,
      itab2 TYPE STANDARD TABLE OF line2 WITH EMPTY KEY.
    TYPES:
      BEGIN OF test\_line,
        col11 TYPE i,
        col12 TYPE i,
        col21 TYPE string,
        col22 TYPE string,
      END OF test\_line,
      test\_tab TYPE STANDARD TABLE OF test\_line WITH EMPTY KEY.
    DATA(rnd) = cl\_abap\_random\_int=>create( seed = + sy-uzeit
                                            min  = 0
                                            max  = 1 ).
    DATA(itab1) = VALUE itab1( FOR i = 1 UNTIL i > 10
                               ( col1 = rnd->get\_next( )
                                 col2 = rnd->get\_next( ) ) ).
    DATA(itab2) =
      VALUE itab2( FOR i = 1 UNTIL i > 10
        ( col1 = cond #( when rnd->get\_next( ) = 0 THEN \`X\`
                                                   ELSE \`Y\` )
          col2 = cond #( when rnd->get\_next( ) = 0 THEN \`X\`
                                                   ELSE \`Y\` ) ) ).
    DATA(out) = cl\_demo\_output=>new( ).
    out->write( itab1
      )->write( itab2 ).
    out->next\_section(  \`Virtual Sort of Combined Tables\`
      )->begin\_section( \`itab1 by col1, col2, Ascending\`
      )->next\_section(  \`itab2 by col1, col2, Descending\` ).
    DATA(v\_index) =
      cl\_abap\_itab\_utilities=>virtual\_sort(
        im\_virtual\_source = VALUE #(
         ( source     = REF #( itab1 )
           components = VALUE #( ( name = 'col1' )
                                 ( name = 'col2' ) ) )
         ( source     = REF #( itab2 )
           components = VALUE #( ( name = 'col1'
                                   astext = abap\_true
                                   descending = abap\_true )
                                 ( name = 'col2'
                                   astext = abap\_true
                                   descending = abap\_true ) ) ) ) ).
    out->write( v\_index ).
    DATA sorted\_tab1 TYPE itab1.
    sorted\_tab1 = VALUE #( FOR idx IN v\_index ( itab1\[ idx \] ) ).
    DATA sorted\_tab2 TYPE itab2.
    sorted\_tab2 = VALUE #( FOR idx IN v\_index ( itab2\[ idx \] ) ).
    DATA(comb\_tab) = VALUE test\_tab( FOR i = 1 UNTIL i > 10
                        ( col11 = sorted\_tab1\[ i \]-col1
                          col12 = sorted\_tab1\[ i \]-col2
                          col21 = sorted\_tab2\[ i \]-col1
                          col22 = sorted\_tab2\[ i \]-col2 ) ).
    DATA(test\_tab) = VALUE test\_tab( FOR i = 1 UNTIL i > 10
                        ( col11 = itab1\[ i \]-col1
                          col12 = itab1\[ i \]-col2
                          col21 = itab2\[ i \]-col1
                          col22 = itab2\[ i \]-col2 ) ).
    SORT test\_tab STABLE BY col11
                            col12
                            col21 DESCENDING AS TEXT
                            col22 DESCENDING AS TEXT.
    ASSERT comb\_tab = test\_tab.
    out->write( comb\_tab ).
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

An internal table itab1 containing random numbers and an internal table itab2 containing random letters are sorted together virtually using the method VIRTUAL\_SORT of system class CL\_ABAP\_ITAB\_UTILITIES, which sorts both columns of itab1 in ascending order and both columns of itab2 in descending alphabetical order. The returned array contains the row numbers in the sort order. This array is used to fill the internal table comb\_tab, which combines the columns of the involved tables, according to the sorting. To compare, another table test\_tab, which combines the content from itab1 and itab2, is constructed and sorted using the statement [SORT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsort_itab.htm). The results are the same. However, in a real example the combined tables are not usually of interest. See the executable example [Virtual Sorting of Flight Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvirtual_sort_flights_abexa.htm).


### abenvirtual_sort_filter_abexa.htm

---
title: "Virtual Sorting of an Internal Table with Filters"
description: |
  This example demonstrates the virtual sorting of an internal table with row filtering. Source Code REPORT demo_virtual_sort_filter. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. TYPES itab TYPE STANDARD TABLE OF i WITH EMPTY KEY. DATA
version: "7.52"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvirtual_sort_filter_abexa.htm"
abapFile: "abenvirtual_sort_filter_abexa.htm"
keywords: ["select", "do", "method", "class", "data", "types", "internal-table", "abenvirtual", "sort", "filter", "abexa"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab.htm) →  [System Class for Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_itab.htm) →  [Examples of Virtual Sorting of Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvirtual_sort_abexas.htm) → 

Virtual Sorting of an Internal Table with Filters

This example demonstrates the virtual sorting of an internal table with row filtering.

Source Code

REPORT demo\_virtual\_sort\_filter.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES
      itab TYPE STANDARD TABLE OF i WITH EMPTY KEY.
    DATA(rnd) = cl\_abap\_random\_int=>create( seed = + sy-uzeit
                                            min  = 1
                                            max  = 10 ).
    DATA(itab) = VALUE itab( FOR i = 1 UNTIL i > 10
                             ( rnd->get\_next( ) ) ).
    DATA(out) = cl\_demo\_output=>new( ).
    out->write( itab ).
    out->next\_section( \`Virtual Sort by table\_line with Filter\` ).
    DATA(v\_index) =
      cl\_abap\_itab\_utilities=>virtual\_sort(
        im\_virtual\_source = VALUE #(
         ( source     = REF #( itab )
           components = VALUE #( ( name = 'table\_line' ) ) ) )
        im\_filter\_index =  VALUE #( ( 1 ) ( 3 ) ( 5 ) ( 7 ) ( 9 ) ) ).
    out->write( v\_index ).
    DATA sorted\_tab TYPE itab.
    sorted\_tab = VALUE #( FOR idx IN v\_index ( itab\[ idx \] ) ).
    out->write( sorted\_tab ).
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

An internal table filled with random numbers is sorted in ascending order by its row content using the method VIRTUAL\_SORT of system class CL\_ABAP\_ITAB\_UTILITIES. This passes a table filter\_tab containing the row numbers to be sorted. The returned array contains exactly these row numbers in the sort order. A table sorted\_tab is constructed in this order from the respective rows of itab.


### abenvirtual_sort_flights_abexa.htm

---
title: "Virtual Sorting of Flight Data"
description: |
  This example demonstrates the virtual sorting of an internal table containing flight data. Source Code REPORT demo_virtual_sort_flights. CLASS demo DEFINITION. PUBLIC SECTION. TYPES: BEGIN OF flight, carrid   TYPE s_carr_id, connid   TYPE s_conn_id, cityfrom TYPE s_city, cityto   TYPE s_cit
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvirtual_sort_flights_abexa.htm"
abapFile: "abenvirtual_sort_flights_abexa.htm"
keywords: ["select", "do", "try", "catch", "method", "class", "data", "types", "internal-table", "abenvirtual", "sort", "flights", "abexa"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab.htm) →  [System Class for Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_itab.htm) →  [Examples of Virtual Sorting of Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvirtual_sort_abexas.htm) → 

Virtual Sorting of Flight Data

This example demonstrates the virtual sorting of an internal table containing flight data.

Source Code

REPORT demo\_virtual\_sort\_flights.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    TYPES:
      BEGIN OF flight,
        carrid   TYPE s\_carr\_id,
        connid   TYPE s\_conn\_id,
        cityfrom TYPE s\_city,
        cityto   TYPE s\_city,
      END OF flight,
      flights TYPE STANDARD TABLE OF flight
              WITH EMPTY KEY,
      BEGIN OF city,
        city      TYPE  s\_city,
        latitude  TYPE  s\_lati,
        longitude TYPE  s\_long,
      END OF city,
      cities TYPE STANDARD TABLE OF city
                  WITH EMPTY KEY.
    CLASS-DATA:
      flight\_tab    TYPE flights,
      from\_city\_tab TYPE cities,
      to\_city\_tab   TYPE cities.
    CLASS-METHODS:
      main,
      class\_constructor.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    cl\_demo\_output=>new(
      )->next\_section(
      \`Ascending Sort by Latitude, Longitude of CITYFROM, CITYTO\`
      )->write( VALUE flights(
                  FOR <idx>
                  IN cl\_abap\_itab\_utilities=>virtual\_sort(
                       im\_virtual\_source =
                         VALUE #(
                           ( source     = REF #( from\_city\_tab )
                             components =
                               VALUE #( ( name = 'latitude' )
                                        ( name = 'longitude' ) ) )
                           ( source     = REF #( to\_city\_tab )
                             components =
                               VALUE #( ( name = 'latitude' )
                                        ( name = 'longitude' ) ) )
                           ( source     = REF #( flight\_tab )
                             components =
                               VALUE #( ( name = 'carrid' )
                                        ( name = 'connid' ) ) ) ) )
                  ( flight\_tab\[ <idx> \] ) )
      )->next\_section(
      \`Descending Sort by Latitude, Longitude of CITYFROM, CITYTO\`
      )->write( VALUE flights(
                  FOR <idx>
                  IN cl\_abap\_itab\_utilities=>virtual\_sort(
                       im\_virtual\_source =
                         VALUE #(
                           ( source     = REF #( from\_city\_tab )
                             components =
                               VALUE #( ( name = 'latitude'
                                          descending = abap\_true )
                                        ( name = 'longitude'
                                          descending = abap\_true ) ) )
                           ( source     = REF #( to\_city\_tab )
                             components =
                               VALUE #( ( name = 'latitude'
                                          descending = abap\_true )
                                        ( name = 'longitude'
                                          descending = abap\_true ) ) )
                           ( source     = REF #( flight\_tab )
                             components =
                               VALUE #( ( name = 'carrid' )
                                        ( name = 'connid' ) ) ) ) )
                  ( flight\_tab\[ <idx> \] ) )
      )->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    SELECT carrid, connid, cityfrom, cityto
           FROM spfli
           INTO CORRESPONDING FIELDS OF TABLE @flight\_tab.
    SELECT city, latitude, longitude
           FROM sgeocity
           INTO TABLE @DATA(cities).
    TRY.
        from\_city\_tab = VALUE #( FOR <fs> IN flight\_tab
                                 ( cities\[ city = <fs>-cityfrom \] ) ).
        to\_city\_tab   = VALUE #( FOR <fs> IN flight\_tab
                                 ( cities\[ city = <fs>-cityto \] ) ).
      CATCH cx\_sy\_itab\_line\_not\_found.
        MESSAGE 'Flight model data not consistent,' &&
                ' use program SAPBC\_DATA\_GENERATOR' &&
                ' to create the data.' TYPE 'X'.
    ENDTRY.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

In this example, an internal table flight\_tab containing flight data is sorted virtually by the longitudes and latitudes of the departure and arrival cities. To do this, two additional tables from\_city\_tab and to\_city\_tab are constructed. The rows of these tables contain the longitudes and latitudes of the departure and arrival cities from the respective rows of flight\_tab.

Virtual sorting with the method VIRTUAL\_SORT of class CL\_ABAP\_ITAB\_UTILITIES takes place at the operand position of a [FOR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_itab.htm) expression for a table iteration. The virtual sorting involves all three internal tables. The temporary result of the sorting is used to construct a sorted internal table from the rows of flight\_tab. This table is only temporary, and is an input parameter of the method WRITE of class CL\_DEMO\_OUTPUT.

It is sorted once in ascending order and once in descending order. This does not change the order of the rows in the internal tables that are involved. These remain in their original unsorted state. Virtual sorting makes it possible to generate various sorted output data without affecting the original data.


### abenvirtual_sort_abexas.htm

---
title: "Examples of Virtual Sorting of Internal Tables"
description: |
  !Example(exa.gif 'Example') Virtual Sorting of an Internal Table(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvirtual_sort_simple_abexa.htm) !Example(exa.gif 'Example') Virtual Sorting of Two Internal Tables(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvir
version: "7.52"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvirtual_sort_abexas.htm"
abapFile: "abenvirtual_sort_abexas.htm"
keywords: ["do", "if", "class", "data", "internal-table", "abenvirtual", "sort", "abexas"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab.htm) →  [System Class for Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_itab.htm) → 

Examples of Virtual Sorting of Internal Tables

Continue
![Example](exa.gif "Example") [Virtual Sorting of an Internal Table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvirtual_sort_simple_abexa.htm)
![Example](exa.gif "Example") [Virtual Sorting of Two Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvirtual_sort_combined_abexa.htm)
![Example](exa.gif "Example") [Virtual Sorting of an Internal Table with Filters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvirtual_sort_filter_abexa.htm)
![Example](exa.gif "Example") [Virtual Sorting of Flight Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvirtual_sort_flights_abexa.htm)
