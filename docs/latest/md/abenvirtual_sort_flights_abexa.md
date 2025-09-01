---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_virtual_sort_flights DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. TYPES: BEGIN OF flight, carrid   TYPE s_carr_id, connid   TYPE s_conn_id, cityfrom TYPE s_city, cityto   TYPE s_city,
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvirtual_sort_flights_abexa.htm"
abapFile: "abenvirtual_sort_flights_abexa.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "types", "internal-table", "abenvirtual", "sort", "flights", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) →  [itab - System Classes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_system_classes.htm) →  [itab - System Class CL\_ABAP\_ITAB\_UTILITIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_itab.htm) →  [itab - Examples of Virtual Sorts](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvirtual_sort_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Virtual%20Sort%20of%20Flight%20Data%2C%20ABENVIRTUAL_SORT_FLIGHTS_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impro
vement:)

itab - Virtual Sort of Flight Data

This example demonstrates the virtual sorting of an internal table containing flight data.

Source Code   

\* Public class definition
CLASS cl\_demo\_virtual\_sort\_flights DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
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
    DATA:
      flight\_tab    TYPE flights,
      from\_city\_tab TYPE cities,
      to\_city\_tab   TYPE cities.
    METHODS constructor.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_virtual\_sort\_flights IMPLEMENTATION.
  METHOD main.
    out->next\_section(
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
                  ( flight\_tab\[ <idx> \] ) ) ).          "#EC CI\_NOORDER
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    SELECT carrid, connid, cityfrom, cityto
           FROM spfli
           INTO CORRESPONDING FIELDS
             OF TABLE @flight\_tab.                      "#EC CI\_NOORDER
    SELECT city, latitude, longitude
           FROM sgeocity
           INTO TABLE @FINAL(cities).                   "#EC CI\_NOORDER
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

Description   

In this example, an internal table flight\_tab containing flight data is sorted virtually by the longitudes and latitudes of the departure and arrival cities. To do this, two additional tables from\_city\_tab and to\_city\_tab are constructed. The lines of these tables contain the longitudes and latitudes of the departure and arrival cities from the respective lines of flight\_tab.

Virtual sorting with the method VIRTUAL\_SORT of class CL\_ABAP\_ITAB\_UTILITIES takes place at the operand position of a [FOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfor_itab.htm) expression for a table iteration. The virtual sorting involves all three internal tables. The temporary result of the sorting is used to construct a sorted internal table from the lines of flight\_tab. This table is only temporary, and is an input parameter of the method WRITE of class CL\_DEMO\_OUTPUT.

It is sorted once in ascending order and once in descending order. This does not change the order of the lines in the internal tables that are involved. These remain in their original unsorted state. Virtual sorting makes it possible to generate various sorted output data without affecting the original data.