---
title: "FOR Expressions for Mesh Paths"
description: |
  This example demonstrates table comprehensions and table reductions for mesh paths. Source Code REPORT demo_mesh_for_flights. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS: main, class_constructor. PRIVATE SECTION. TYPES: t_scarr    TYPE HASHED TABLE OF scarr WITH UNIQUE KEY carrid, t_s
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_for_abexa.htm"
abapFile: "abenmesh_for_abexa.htm"
keywords: ["select", "loop", "do", "if", "try", "catch", "method", "class", "data", "types", "abenmesh", "for", "abexa"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_meshes.htm) →  [Meshes - Using Mesh Paths](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path_usage.htm) →  [FOR ... IN mesh\_path](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_for.htm) → 

FOR Expressions for Mesh Paths

This example demonstrates table comprehensions and table reductions for mesh paths.

Source Code

REPORT demo\_mesh\_for\_flights.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      class\_constructor.
  PRIVATE SECTION.
    TYPES:
      t\_scarr    TYPE HASHED TABLE OF scarr
                 WITH UNIQUE KEY carrid,
      t\_spfli    TYPE HASHED TABLE OF spfli
                 WITH UNIQUE KEY carrid connid
                 WITH NON-UNIQUE SORTED KEY carrid
                                 COMPONENTS carrid,
      t\_sflight  TYPE HASHED TABLE OF sflight
                 WITH UNIQUE KEY carrid connid fldate
                 WITH NON-UNIQUE SORTED KEY carrid\_connid
                                 COMPONENTS carrid connid,
      t\_sairport TYPE HASHED TABLE OF sairport
                 WITH UNIQUE KEY id,
      BEGIN OF MESH t\_flights,
        scarr    TYPE t\_scarr
           ASSOCIATION \_spfli TO spfli
                    ON carrid = carrid USING KEY carrid,
        spfli    TYPE t\_spfli
           ASSOCIATION \_sflight TO sflight
                    ON carrid = carrid AND
                       connid = connid USING KEY carrid\_connid
           ASSOCIATION \_sairport TO sairport
                    ON id = airpfrom,
        sflight  TYPE t\_sflight,
        sairport TYPE t\_sairport,
      END OF MESH t\_flights.
    CLASS-DATA:
      flights TYPE t\_flights,
      in      TYPE REF TO if\_demo\_input,
      out     TYPE REF TO if\_demo\_output,
      name    TYPE scarr-carrname VALUE 'United Airlines',
      country TYPE spfli-countryto VALUE 'US',
      plane1  TYPE sflight-planetype VALUE '747-400',
      plane2  TYPE sflight-planetype VALUE 'A310-300'.
    CLASS-METHODS:
      input.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    input( ).
    TRY.
        out->begin\_section(
          'Initial Association SCARR\\\_spfli' ).
        DATA(spfli\_tab) = VALUE t\_spfli(
          FOR spfli\_wa IN
            flights-scarr\\\_spfli\[ flights-scarr\[ carrname = name \]
                                    WHERE countryto = country \]
             ( spfli\_wa ) ).
        out->write( spfli\_tab ).
        DATA(distance) = REDUCE spfli-distance(
          INIT d TYPE spfli-distance
          FOR spfli\_wa IN
            flights-scarr\\\_spfli\[ flights-scarr\[ carrname = name \]
                                    WHERE countryto = country \]
             NEXT d = d + SWITCH spfli-distance( spfli\_wa-distid
                                    WHEN 'KM'
                                      THEN spfli\_wa-distance \* '1.60934'
                                    WHEN 'MI'
                                      THEN spfli\_wa-distance
                                    ELSE 0 ) ).
        out->write( |Sum of distances in miles: { distance }| ).
        out->next\_section(
          'Chained Association SCARR\\\_spfli\\\_sairport' ).
        DATA(sairport\_tab) = VALUE t\_sairport(
          FOR sairport\_wa IN
            flights-scarr\\\_spfli\[ flights-scarr\[ carrname = name \]
                                    WHERE countryto = country
                                   \]\\\_sairport\[
                                     USING KEY primary\_key \]
            ( sairport\_wa ) ).
        out->write( sairport\_tab ).
        out->next\_section(
          'Chained Association' &&
          ' SCARR\\\_spfli\\\_sflight\\^\_sflight~spfli' ).
        spfli\_tab = VALUE t\_spfli(
          FOR spfli\_wa IN
            flights-scarr\\\_spfli\[ flights-scarr\[ carrname = name \]
                                    WHERE countryto = country
                                  \]\\\_sflight\[
                                    WHERE planetype = plane1 OR
                                          planetype = plane2
                                  \]\\^\_sflight~spfli\[ \]
             ( spfli\_wa ) ).
        out->write( spfli\_tab ).
      CATCH cx\_sy\_itab\_line\_not\_found.
        out->write( 'Exception!' ).
    ENDTRY.
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    in  = cl\_demo\_input=>new( ).
    out = cl\_demo\_output=>new( ).
    SELECT \*
           FROM scarr
           INTO TABLE @flights-scarr.
    SELECT \*
           FROM spfli
           INTO TABLE @flights-spfli.
    SELECT \*
           FROM sflight
           INTO TABLE @flights-sflight.
    SELECT \*
           FROM sairport
           INTO TABLE @flights-sairport.
  ENDMETHOD.
  METHOD input.
    in->add\_field( CHANGING field = name
     )->add\_field( CHANGING field = country
     )->add\_field( CHANGING field = plane1
     )->add\_field( CHANGING field = plane2
     )->request( ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example uses the same mesh paths as the executable example for [LOOP AT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_loops_abexa.htm) and produces the same results sets. Unlike [LOOP AT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_loop.htm), the rows in the results set are produced in a results table using [table comprehensions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_comprehension_glosry.htm "Glossary Entry") and not as individual rows.

For the first mesh path, a [table reduction](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_reduction_glosry.htm "Glossary Entry") is also performed using the reduction operator [REDUCE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_reduce.htm). This totals the distances, with the conversion from kilometers to miles done using a [SWITCH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconditional_expression_switch.htm) expression.