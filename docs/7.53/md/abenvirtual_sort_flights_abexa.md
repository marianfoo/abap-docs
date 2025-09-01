  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [System Class for Internal Tables](javascript:call_link\('abencl_abap_itab.htm'\)) →  [Examples of Virtual Sorting of Internal Tables](javascript:call_link\('abenvirtual_sort_abexas.htm'\)) → 

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

Virtual sorting with the method VIRTUAL\_SORT of class CL\_ABAP\_ITAB\_UTILITIES takes place at the operand position of a [FOR](javascript:call_link\('abenfor_itab.htm'\)) expression for a table iteration. The virtual sorting involves all three internal tables. The temporary result of the sorting is used to construct a sorted internal table from the rows of flight\_tab. This table is only temporary, and is an input parameter of the method WRITE of class CL\_DEMO\_OUTPUT.

It is sorted once in ascending order and once in descending order. This does not change the order of the rows in the internal tables that are involved. These remain in their original unsorted state. Virtual sorting makes it possible to generate various sorted output data without affecting the original data.