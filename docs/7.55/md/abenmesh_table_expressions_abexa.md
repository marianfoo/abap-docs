  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_meshes.htm) →  [Meshes - Using Mesh Paths](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_path_usage.htm) →  [Meshes - Mesh Path Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_path_expression.htm) → 

Meshes - Mesh Path Expressions

This example demonstrates how mesh paths can be used as standalone expressions.

Source Code

REPORT demo\_mesh\_expressions\_flights.
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
                 WITH UNIQUE KEY carrid connid ,
      t\_sflight  TYPE HASHED TABLE OF sflight
                 WITH UNIQUE KEY carrid connid fldate,
      t\_sairport TYPE HASHED TABLE OF sairport
                 WITH UNIQUE KEY id,
      BEGIN OF MESH t\_flights,
        scarr TYPE t\_scarr
          ASSOCIATION \_spfli TO spfli
                   ON carrid = carrid,
        spfli TYPE t\_spfli
          ASSOCIATION \_sflight TO sflight
                   ON carrid = carrid AND
                      connid = connid
          ASSOCIATION \_sairport TO sairport
                   ON id = airpfrom,
        sflight TYPE t\_sflight,
        sairport TYPE t\_sairport,
      END OF MESH t\_flights.
    CLASS-DATA:
      flights    TYPE t\_flights,
      in         TYPE REF TO if\_demo\_input,
      out        TYPE REF TO if\_demo\_output,
      name       TYPE scarr-carrname VALUE 'Lufthansa',
      id         TYPE spfli-carrid   VALUE 'LH',
      connection TYPE spfli-connid   VALUE '0400',
      date       TYPE sflight-fldate.
    CLASS-METHODS:
      input.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    input( ).
    TRY.
        out->begin\_section(
          'Forward Association scarr\\\_spfli' ).
        DATA(spfli\_wa) =
          flights-scarr\\\_spfli\[ flights-scarr\[ carrname = name \]
                                  connid = connection \].
        out->write( spfli\_wa ).
        out->next\_section(
          'Inverse Association spfli\\^\_spfli~scarr' ).
        DATA(scarr\_wa) =
          flights-spfli\\^\_spfli~scarr\[
            flights-spfli\[ carrid = ID connid = CONNECTION \] \].
        out->write( scarr\_wa ).
        out->next\_section(
          'Chained Association scarr\\\_spfli\\\_sflight' ).
        DATA(sflight\_wa) =
          flights-scarr\\\_spfli\[ flights-scarr\[ carrname = name \]
                                  connid = connection
                                \]\\\_sflight\[ fldate = date \].
        out->write( sflight\_wa ).
        out->next\_section(
          'Addressing Component' ).
        DATA(price) =
          flights-scarr\\\_spfli\[ flights-scarr\[ carrname = name \]
                                  connid = connection
                                \]\\\_sflight\[ fldate = date \]-price.
        out->write( price ).
        out->next\_section(
          'Assigning to Field Symbol' ).
        ASSIGN
          flights-scarr\\\_spfli\[ flights-scarr\[ carrname = NAME \]
                                  connid = CONNECTION
                                \]\\\_sflight\[ fldate = DATE \]
          TO FIELD-SYMBOL(<sflight\_wa>).
        IF sy-subrc = 0.
          out->write( 'Field symbol OK' ).
        ENDIF.
        out->next\_section(
          'Write Access and Check Existence' ).
        flights-scarr\\\_spfli\[ flights-scarr\[ carrname = NAME \]
                                connid = CONNECTION
                              \]\\\_sflight\[ fldate = DATE
                              \]-price = price - 10.
        IF line\_exists(
          flights-scarr\\\_spfli\[ flights-scarr\[ carrname = name \]
                                  connid = connection
                                \]\\\_sflight\[ fldate = date
                                              price = price - 10 \] ).
          out->write( 'Line found!' ).
        ENDIF.
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
    TRY.
        date = flights-sflight\[ carrid = id
                                connid = connection \]-fldate.
      CATCH cx\_sy\_itab\_line\_not\_found.
        LEAVE PROGRAM.
    ENDTRY.
    in->add\_field( CHANGING  field = name
     )->add\_field( CHANGING  field = connection
     )->add\_field( CHANGING  field = id
     )->add\_field( CHANGING  field = date
     )->request( ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The following mesh paths are used as mesh path expressions:

-   Mesh path with forward association as an initial mesh association on the right side of an assignment. The source in the square brackets is a table expression supplemented by a condition.

flights-scarr\\\_spfli\[ flights-scarr\[ carrname = name \]
                                     connid = connection \]

-   Mesh path with mesh inverse association as an initial mesh association on the right side of an assignment. The source in the square brackets is a table expression.

flights-spfli\\^\_spfli~scarr\[ flights-spfli\[ carrid = ID
                                            connid = CONNECTION \] \]

-   Mesh path with path extension after the initial mesh association on the right side of an assignment.

flights-scarr\\\_spfli\[ flights-scarr\[ carrname = name \]
                                     connid = connection
                                   \]\\\_sflight\[ fldate = date \]

The mesh path with path extension is also used to demonstrate the addressing of a component using the structure component selector, assignments to a field symbol, write access, and usage in the predicate function line\_exists.