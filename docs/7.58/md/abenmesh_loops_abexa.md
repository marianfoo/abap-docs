  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_meshes.htm) →  [Meshes - Using Mesh Paths](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_path_usage.htm) →  [LOOP AT mesh\_path](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_loop.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Meshes%20-%20Loops%20Across%20Mesh%20Paths%2C%20ABENMESH_LOOPS_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Meshes - Loops Across Mesh Paths

This example demonstrates loops across mesh paths.

Source Code   

\* Public class definition
CLASS cl\_demo\_mesh\_loop\_at\_flights DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor .
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
CLASS cl\_demo\_mesh\_loop\_at\_flights IMPLEMENTATION.
  METHOD main.
    input( ).
    TRY.
        out->begin\_section(
          'Initial Association SCARR\\\_spfli' ).
        LOOP AT
          flights-scarr\\\_spfli\[ flights-scarr\[ carrname = name \]
                                  WHERE countryto = country  \]
             INTO FINAL(spfli\_wa).
          out->write( spfli\_wa ).
        ENDLOOP.
        out->next\_section(
          'Chained Association SCARR\\\_spfli\\\_sairport' ).
        LOOP AT
          flights-scarr\\\_spfli\[ flights-scarr\[ carrname = name \]
                                  WHERE countryto = country
                                \]\\\_sairport\[ USING KEY primary\_key \]
             INTO FINAL(sairport\_wa).
          out->write( sairport\_wa ).
        ENDLOOP.
        out->next\_section(
          'Chained Association' &&
          ' SCARR\\\_spfli\\\_sflight\\^\_sflight~spfli' ).
        LOOP AT
          flights-scarr\\\_spfli\[ flights-scarr\[ carrname = name \]
                                  WHERE countryto = country
                                \]\\\_sflight\[
                                  WHERE planetype = plane1 OR
                                        planetype = plane2
                                \]\\^\_sflight~spfli\[ \]
             ASSIGNING FIELD-SYMBOL(<spfli\_wa>).
          out->write( <spfli\_wa> ).
        ENDLOOP.
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

Loops are performed across the following mesh paths:

-   Mesh path with forward association as its initial mesh association. The source in the square brackets is a table expression, supplemented by a WHERE condition.
    
    flights-scarr\\\_spfli\[ flights-scarr\[ carrname = name \]
                          WHERE countryto = country  \]
    
    The result set consists of all lines of the node spfli that meet the condition.
    
-   Mesh path with forward associations as its initial mesh association and path extension. The source in the square brackets of the initial mesh association is a table expression, supplemented by a WHERE condition. A key is specified in the square brackets of the path extension for evaluating the mesh association.
    
    flights-scarr\\\_spfli\[ flights-scarr\[ carrname = name \]
                          WHERE countryto = country
                        \]\\\_sairport\[ USING KEY primary\_key \]
    
    The result set consists of all lines of the node sairport that match the column airpfrom in the result set of the entry node spfli. Duplicate lines are removed automatically.
    
-   Mesh path with forward associations as its initial mesh association and two path extensions. The last path extension is an inverse mesh association that leads back to the entry node.
    
    flights-scarr\\\_spfli\[ flights-scarr\[ carrname = name \]
                          WHERE countryto = country
                        \]\\\_sflight\[
                          HERE planetype = plane1 OR
                               planetype = plane2
                          \]\\^\_sflight~spfli\[ \]
    
    The result set consists of all lines of the node spfli for which the lines in the result set of sflight have specific values in the column plane\_type.
    

See also the executable example for [table comprehensions for meshes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_for_abexa.htm).

Effect