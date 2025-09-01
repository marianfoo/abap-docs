# ABAP Keyword Documentation / ABAP − Reference / Processing Internal Data / Meshes / Meshes - Using Mesh Paths / LOOP AT mesh_path

Included pages: 2


### abenmesh_loop.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Meshes](javascript:call_link\('abenabap_meshes.htm'\)) →  [Meshes - Using Mesh Paths](javascript:call_link\('abenmesh_path_usage.htm'\)) → 

LOOP AT mesh\_path

Syntax

LOOP AT [mesh\_path](javascript:call_link\('abenmesh_path.htm'\)) [result](javascript:call_link\('abaploop_at_itab_result.htm'\)).
  ...
ENDLOOP.

Effect

Reads all rows described by the [results](javascript:call_link\('abenmesh_path_result.htm'\)) of a mesh path [mesh\_path](javascript:call_link\('abenmesh_path.htm'\)) in a loop. Essentially, the loop works like the statement [LOOP AT itab](javascript:call_link\('abaploop_at_itab.htm'\)) across a directly specified table, but reads the rows of the last path node described by the mesh path instead. The output behavior [result](javascript:call_link\('abaploop_at_itab_result.htm'\)) is specified in exactly the same way as in LOOP AT itab and must match the row type of the last path node. The system fields are set in the same way as in the statement LOOP AT itab, where sy-tabix depends on the table key used.

An additional condition can be specified in the square brackets [\[ ... \]](javascript:call_link\('abenmesh_path_assoc.htm'\)) of each mesh association using the additions [USING KEY](javascript:call_link\('abenmesh_path_assoc_cond.htm'\)) and [WHERE log\_exp](javascript:call_link\('abenmesh_path_assoc_cond.htm'\)).

The order in which the rows of the last path node are read is determined by the order in which the rows were found when the mesh path was evaluated. Here, an iteration is performed across every follow-on node in the mesh path, in accordance with the table key used.

If only the initial mesh association is specified, the same rules apply when changing the last path node in the loop as when using LOOP AT itab. If a path extension is specified, the following additional restrictions apply:

-   No row can be deleted from the last path node.

-   No row can be inserted in the last path node (unless a hash key is used).

-   No component of the table key being used can be changed.

The full internal table cannot be replaced or deleted in the loop. Mesh nodes evaluated when path extensions are used before the last path node, however, can be modified as required.

Notes

-   A loop across a mesh path can be understood as a nesting of loops [LOOP AT itab](javascript:call_link\('abaploop_at_itab.htm'\)) across the matching follow-on nodes, whose [WHERE conditions](javascript:call_link\('abaploop_at_itab_cond.htm'\)) are constructed from ON conditions and the explicitly specified additional conditions. The evaluation itself, however, does not take place in nested LOOPs and multiple iterations across a single table row never take place.

-   If [path extensions](javascript:call_link\('abenmesh_path_result_chaining.htm'\)) are used, any rows found more than once in mesh path evaluations are iterated only once each.

-   Tables located before the last path node in path extensions can be modified in any way in the loop, since they are evaluated only once before the loop is executed across the last path node.

Executable Example

[Loops Across Mesh Paths](javascript:call_link\('abenmesh_loops_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Loops Across Mesh Paths](javascript:call_link\('abenmesh_loops_abexa.htm'\))


### abenmesh_loops_abexa.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Meshes](javascript:call_link\('abenabap_meshes.htm'\)) →  [Meshes - Using Mesh Paths](javascript:call_link\('abenmesh_path_usage.htm'\)) →  [LOOP AT mesh\_path](javascript:call_link\('abenmesh_loop.htm'\)) → 

Loops Across Mesh Paths

This example demonstrates loops across mesh paths.

Source Code

REPORT demo\_mesh\_loop\_at\_flights.
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
        scarr TYPE t\_scarr
          ASSOCIATION \_spfli TO spfli
                   ON carrid = carrid USING KEY carrid,
        spfli TYPE t\_spfli
          ASSOCIATION \_sflight TO sflight
                   ON carrid = carrid AND
                      connid = connid USING KEY carrid\_connid
          ASSOCIATION \_sairport TO sairport
                   ON id = airpfrom,
        sflight TYPE t\_sflight,
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
        LOOP AT
          flights-scarr\\\_spfli\[ flights-scarr\[ carrname = name \]
                                  WHERE countryto = country  \]
             INTO DATA(spfli\_wa).
          out->write( spfli\_wa ).
        ENDLOOP.
        out->next\_section(
          'Chained Association SCARR\\\_spfli\\\_sairport' ).
        LOOP AT
          flights-scarr\\\_spfli\[ flights-scarr\[ carrname = name \]
                                  WHERE countryto = country
                                \]\\\_sairport\[ USING KEY primary\_key \]
             INTO DATA(sairport\_wa).
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

Loops are performed across the following mesh paths:

-   Mesh path with forward association as its initial mesh association. The source in the square brackets is a table expression, plus a WHERE condition.

flights-scarr\\\_spfli\[ flights-scarr\[ carrname = name \]
                      WHERE countryto = country  \]

The results set consists of all rows of the node spfli that meet the condition.

-   Mesh path with forward associations as its initial mesh association and path extension. The source in the square brackets of the initial mesh association is a table expression, plus a WHERE condition. A key is specified in the square brackets of the path extension for evaluating the mesh association.

flights-scarr\\\_spfli\[ flights-scarr\[ carrname = name \]
                      WHERE countryto = country
                    \]\\\_sairport\[ USING KEY primary\_key \]

The results set consists of all rows of the node sairport that match the column airpfrom in the results set of the source node spfli. Duplicate rows are removed automatically.

-   Mesh path with forward associations as its initial mesh association and two path extensions. The last path extension is an inverse mesh association that leads back to the source node.

flights-scarr\\\_spfli\[ flights-scarr\[ carrname = name \]
                      WHERE countryto = country
                    \]\\\_sflight\[
                      HERE planetype = plane1 OR
                           planetype = plane2
                      \]\\^\_sflight~spfli\[ \]

The results set consists of all rows of the node spfli for which the rows in the results set of sflight have specific values in the column plane\_type.

See also the executable example for [table comprehensions for meshes](javascript:call_link\('abenmesh_for_abexa.htm'\)).

Effect
