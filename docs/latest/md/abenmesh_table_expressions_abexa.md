---
title: "Meshes - Mesh Path Expressions"
description: |
  This example demonstrates how mesh paths can be used as standalone expressions. Source Code  Public class definition CLASS cl_demo_mesh_exprssns_flights DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. METHODS constructor. PRIVATE S
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmesh_table_expressions_abexa.htm"
abapFile: "abenmesh_table_expressions_abexa.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "types", "field-symbol", "abenmesh", "table", "expressions", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Meshes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_meshes.htm) →  [Meshes - Using Mesh Paths](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmesh_path_usage.htm) →  [Meshes - Mesh Path Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmesh_path_expression.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Meshes%20-%20Mesh%20Path%20Expressions%2C%20ABENMESH_TABLE_EXPRESSIONS_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement
:)

Meshes - Mesh Path Expressions

This example demonstrates how mesh paths can be used as standalone expressions.

Source Code   

\* Public class definition
CLASS cl\_demo\_mesh\_exprssns\_flights DEFINITION
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
                 WITH UNIQUE KEY carrid connid ,
      t\_sflight  TYPE HASHED TABLE OF sflight
                 WITH UNIQUE KEY carrid connid fldate,
      t\_sairport TYPE HASHED TABLE OF sairport
                 WITH UNIQUE KEY id,
      BEGIN OF MESH t\_flights,
        scarr    TYPE t\_scarr
          ASSOCIATION \_spfli TO spfli
                   ON carrid = carrid,
        spfli    TYPE t\_spfli
          ASSOCIATION \_sflight TO sflight
                   ON carrid = carrid AND
                      connid = connid
          ASSOCIATION \_sairport TO sairport
                   ON id = airpfrom,
        sflight  TYPE t\_sflight,
        sairport TYPE t\_sairport,
      END OF MESH t\_flights.
    DATA:
      flights    TYPE t\_flights,
      in         TYPE REF TO if\_demo\_input,
      name       TYPE scarr-carrname VALUE 'Lufthansa',
      id         TYPE spfli-carrid   VALUE 'LH',
      connection TYPE spfli-connid   VALUE '0400',
      date       TYPE sflight-fldate.
    METHODS:
      input.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_mesh\_exprssns\_flights IMPLEMENTATION.
  METHOD main.
    input( ).
    TRY.
        out->begin\_section(
          'Forward Association scarr\\\_spfli' ).
        FINAL(spfli\_wa) =
          flights-scarr\\\_spfli\[ flights-scarr\[ carrname = name \]
                                  connid = connection \].
        out->write( spfli\_wa ).
        out->next\_section(
          'Inverse Association spfli\\^\_spfli~scarr' ).
        FINAL(scarr\_wa) =
          flights-spfli\\^\_spfli~scarr\[
            flights-spfli\[ carrid = id connid = connection \] \].
        out->write( scarr\_wa ).
        out->next\_section(
          'Chained Association scarr\\\_spfli\\\_sflight' ).
        FINAL(sflight\_wa) =
          flights-scarr\\\_spfli\[ flights-scarr\[ carrname = name \]
                                  connid = connection
                                \]\\\_sflight\[ fldate = date \].
        out->write( sflight\_wa ).
        out->next\_section(
          'Addressing Component' ).
        FINAL(price) =
          flights-scarr\\\_spfli\[ flights-scarr\[ carrname = name \]
                                  connid = connection
                                \]\\\_sflight\[ fldate = date \]-price.
        out->write( price ).
        out->next\_section(
          'Assigning to Field Symbol' ).
        ASSIGN
          flights-scarr\\\_spfli\[ flights-scarr\[ carrname = name \]
                                  connid = connection
                                \]\\\_sflight\[ fldate = date \]
          TO FIELD-SYMBOL(<sflight\_wa>).
        IF sy-subrc = 0.
          out->write( 'Field symbol OK' ).
        ENDIF.
        out->next\_section(
          'Write Access and Check Existence' ).
        flights-scarr\\\_spfli\[ flights-scarr\[ carrname = name \]
                                connid = connection
                              \]\\\_sflight\[ fldate = date
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
  ENDMETHOD.
  METHOD input.
    TRY.
        date = flights-sflight\[ carrid = id
                                connid = connection \]-fldate.
      CATCH cx\_sy\_itab\_line\_not\_found.
        RETURN.
    ENDTRY.
    in->add\_field( CHANGING  field = name
     )->add\_field( CHANGING  field = connection
     )->add\_field( CHANGING  field = id
     )->add\_field( CHANGING  field = date
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