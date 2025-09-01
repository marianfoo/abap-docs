  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Meshes](javascript:call_link\('abenabap_meshes.htm'\)) →  [Meshes - Using Mesh Paths](javascript:call_link\('abenmesh_path_usage.htm'\)) →  [FOR ... IN mesh\_path](javascript:call_link\('abenmesh_for.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Meshes%20-%20FOR%20Expressions%20for%20Mesh%20Paths%2C%20ABENMESH_FOR_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

Meshes - FOR Expressions for Mesh Paths

This example demonstrates table comprehensions and table reductions for mesh paths.

Source Code   

\* Public class definition
CLASS cl\_demo\_mesh\_for\_flights DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
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
    DATA:
      flights TYPE t\_flights,
      in      TYPE REF TO if\_demo\_input,
      o       TYPE REF TO if\_demo\_output,
      name    TYPE scarr-carrname VALUE 'United Airlines',
      country TYPE spfli-countryto VALUE 'US',
      plane1  TYPE sflight-planetype VALUE '747-400',
      plane2  TYPE sflight-planetype VALUE 'A310-300'.
    METHODS:
      input.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_mesh\_for\_flights IMPLEMENTATION.
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
        FINAL(distance) = REDUCE spfli-distance(
          INIT d TYPE spfli-distance
          FOR spfli\_wa IN
            flights-scarr\\\_spfli\[ flights-scarr\[ carrname = name \]
                                    WHERE countryto = country \]
             NEXT d += SWITCH spfli-distance( spfli\_wa-distid
                                WHEN 'KM'
                                  THEN spfli\_wa-distance \* '1.60934'
                                WHEN 'MI'
                                  THEN spfli\_wa-distance
                                ELSE 0 ) ).
        out->write( |Sum of distances in miles: { distance }| ).
        out->next\_section(
          'Chained Association SCARR\\\_spfli\\\_sairport' ).
        FINAL(sairport\_tab) = VALUE t\_sairport(
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
  ENDMETHOD.
  METHOD input.
    in->add\_field( CHANGING field = name
     )->add\_field( CHANGING field = country
     )->add\_field( CHANGING field = plane1
     )->add\_field( CHANGING field = plane2
     )->request( ).
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    in  = cl\_demo\_input=>new( ).
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
ENDCLASS.

Description   

This example uses the same mesh paths as the executable example for [LOOP AT](javascript:call_link\('abenmesh_loops_abexa.htm'\)) and thus produces the same result sets. Unlike [LOOP AT](javascript:call_link\('abenmesh_loop.htm'\)), the lines in the result set are produced in a results table using [table comprehensions](javascript:call_link\('abentable_comprehension_glosry.htm'\) "Glossary Entry") and not as individual lines.

For the first mesh path, a [table reduction](javascript:call_link\('abentable_reduction_glosry.htm'\) "Glossary Entry") is also performed using the reduction operator [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)). This totals the distances, with the conversion from kilometers to miles using a [SWITCH](javascript:call_link\('abenconditional_expression_switch.htm'\)) expression.