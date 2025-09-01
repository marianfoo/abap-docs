  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_reading.htm) →  [WITH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwith.htm) →  [WITH, Examples](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwith_abexas.htm) → 

WITH, Exposing Associations with a Recursive Redirect

This example demonstrates the addition REDIRECTED of [WITH ASSOCIATIONS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwith_associations.htm) where the redirect is made to the current CTE.

Source Code

REPORT demo\_with\_assocs\_redir\_self.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      class\_constructor.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA selection TYPE demo\_join2-d VALUE 'xx'.
    cl\_demo\_input=>request( CHANGING field = selection ).
    "Path expressions in main query
    WITH
      +cte AS ( SELECT FROM demo\_cds\_expose\_assoc\_1 AS cds
                         INNER JOIN  demo\_join2 AS src1
                           ON cds~d = src1~d
                             CROSS JOIN demo\_join2 AS src2
                       FIELDS cds~d  AS cds\_d,
                              src1~d AS src1\_d,
                              src1~e AS src1\_e,
                              src1~f AS src1\_f,
                              src2~d AS src2\_d,
                              src2~e AS src2\_e,
                              src2~f AS src2\_f
                       WHERE cds~d = @selection )
            WITH ASSOCIATIONS
              ( cds~\\\_demo\_join2
                  REDIRECTED TO +cte VIA src1 )
      SELECT FROM +cte\\\_demo\_join2 AS demo\_join2
             FIELDS demo\_join2~\*
             ORDER BY cds\_d,
                      src1\_d,
                      src1\_e,
                      src1\_f,
                      src2\_d,
                      src2\_e,
                      src2\_f
             INTO TABLE @DATA(resulta).
    WITH
      +cte AS ( SELECT FROM demo\_cds\_expose\_assoc\_1 AS cds
                         INNER JOIN  demo\_join2 AS src1
                           ON cds~d = src1~d
                             CROSS JOIN demo\_join2 AS src2
                       FIELDS cds~d  AS cds\_d,
                              src1~d AS src1\_d,
                              src1~e AS src1\_e,
                              src1~f AS src1\_f,
                              src2~d AS src2\_d,
                              src2~e AS src2\_e,
                              src2~f AS src2\_f
                       WHERE cds~d = @selection )
            WITH ASSOCIATIONS
              ( cds~\\\_demo\_join2
                  REDIRECTED TO +cte VIA src2 )
      SELECT FROM +cte\\\_demo\_join2 AS demo\_join2
             FIELDS demo\_join2~\*
             ORDER BY cds\_d,
                      src1\_d,
                      src1\_e,
                      src1\_f,
                      src2\_d,
                      src2\_e,
                      src2\_f
             INTO TABLE @DATA(resultb).
    IF NOT (
       resulta IS INITIAL AND
       resultb IS INITIAL  ).
      ASSERT resulta <> resultb.
    ENDIF.
    "Explicite joins in main query
    WITH
      +cte AS ( SELECT FROM demo\_cds\_expose\_assoc\_1 AS cds
                         INNER JOIN  demo\_join2 AS src1
                           ON cds~d = src1~d
                             CROSS JOIN demo\_join2 AS src2
                       FIELDS cds~d  AS cds\_d,
                              src1~d AS src1\_d,
                              src1~e AS src1\_e,
                              src1~f AS src1\_f,
                              src2~d AS src2\_d,
                              src2~e AS src2\_e,
                              src2~f AS src2\_f
                       WHERE cds~d = @selection )
      SELECT FROM +cte AS cte\_1
               INNER JOIN +cte AS cte\_2
                 ON cte\_1~cds\_d = cte\_2~src1\_d
             FIELDS cte\_2~\*
             ORDER BY cte\_2~cds\_d,
                      cte\_2~src1\_d,
                      cte\_2~src1\_e,
                      cte\_2~src1\_f,
                      cte\_2~src2\_d,
                      cte\_2~src2\_e,
                      cte\_2~src2\_f
             INTO TABLE @DATA(join\_resulta).
    ASSERT join\_resulta = resulta.
    WITH
      +cte AS ( SELECT FROM demo\_cds\_expose\_assoc\_1 AS cds
                         INNER JOIN  demo\_join2 AS src1
                           ON cds~d = src1~d
                             CROSS JOIN demo\_join2 AS src2
                       FIELDS cds~d  AS cds\_d,
                              src1~d AS src1\_d,
                              src1~e AS src1\_e,
                              src1~f AS src1\_f,
                              src2~d AS src2\_d,
                              src2~e AS src2\_e,
                              src2~f AS src2\_f
                       WHERE cds~d = @selection )
      SELECT FROM +cte AS cte\_1
               INNER JOIN +cte AS cte\_2
                 ON cte\_1~cds\_d = cte\_2~src2\_d
             FIELDS cte\_2~\*
             ORDER BY cte\_2~cds\_d,
                      cte\_2~src1\_d,
                      cte\_2~src1\_e,
                      cte\_2~src1\_f,
                      cte\_2~src2\_d,
                      cte\_2~src2\_e,
                      cte\_2~src2\_f
             INTO TABLE @DATA(join\_resultb).
    ASSERT join\_resultb = resultb.
    "Show results of CTEs
    SELECT FROM demo\_cds\_expose\_assoc\_1 AS cds
                         INNER JOIN  demo\_join2 AS src1
                           ON cds~d = src1~d
                             CROSS JOIN demo\_join2 AS src2
           FIELDS cds~d  AS cds\_d,
                  src1~d AS src1\_d,
                  src1~e AS src1\_e,
                  src1~f AS src1\_f,
                  src2~d AS src2\_d,
                  src2~e AS src2\_e,
                  src2~f AS src2\_f
           WHERE cds~d = @selection
           INTO TABLE @DATA(ctea).
    DATA itab\_resulta LIKE resulta.
    itab\_resulta = VALUE #(
      FOR wa2 IN ctea
      FOR wa1 IN ctea WHERE ( src1\_d = wa2-src1\_d )
        ( cds\_d  = wa1-cds\_d
          src1\_d = wa1-src1\_d
          src1\_e = wa1-src1\_e
          src1\_f = wa1-src1\_f
          src2\_d = wa1-src2\_d
          src2\_e = wa1-src2\_e
          src2\_f = wa1-src2\_f ) ).
    SORT itab\_resulta BY table\_line.
    ASSERT itab\_resulta = resulta.
    SELECT FROM demo\_cds\_expose\_assoc\_1 AS cds
                         INNER JOIN  demo\_join2 AS src1
                           ON cds~d = src1~d
                             CROSS JOIN demo\_join2 AS src2
           FIELDS cds~d  AS cds\_d,
                  src1~d AS src1\_d,
                  src1~e AS src1\_e,
                  src1~f AS src1\_f,
                  src2~d AS src2\_d,
                  src2~e AS src2\_e,
                  src2~f AS src2\_f
           WHERE cds~d = @selection
           INTO TABLE @DATA(cteb).
    DATA itab\_resultb LIKE resultb.
    itab\_resultb = VALUE #(
      FOR wb2 IN cteb
      FOR wb1 IN cteb WHERE ( src2\_d = wb2-src1\_d )
        ( cds\_d  = wb1-cds\_d
          src1\_d = wb1-src1\_d
          src1\_e = wb1-src1\_e
          src1\_f = wb1-src1\_f
          src2\_d = wb1-src2\_d
          src2\_e = wb1-src2\_e
          src2\_f = wb1-src2\_f ) ).
    SORT itab\_resultb BY table\_line.
    ASSERT itab\_resultb = resultb.
    cl\_demo\_output=>new(
      )->write( resulta
      )->write\_text( 'comes from'
      )->write( data = ctea name = '+cte1'
      )->write( 'INNER JOIN'
      )->write( data = ctea name = '+cte2'
      )->write( 'ON +cte1~cds\_d = +cte2~src1\_d'
      )->line(
      )->write( resultb
      )->write\_text( 'comes from'
      )->write( data = cteb name = '+cte1'
      )->write( 'INNER JOIN'
      )->write( data = cteb name = '+cte2'
      )->write( 'ON +cte1~cds\_d = +cte2~src2\_d'
      )->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    DELETE FROM demo\_join1.
    INSERT demo\_join1 FROM TABLE @( VALUE #(
      ( a = 'a1' b = 'b1' c = 'c1' d = 'uu' )
      ( a = 'a2' b = 'b2' c = 'c2' d = 'uu' )
      ( a = 'a3' b = 'b3' c = 'c3' d = 'vv' )
      ( a = 'a4' b = 'b4' c = 'c4' d = 'ww' )
      ( a = 'a5' b = 'b5' c = 'c5' d = 'xx' ) ) ).
    DELETE FROM demo\_join2.
    INSERT demo\_join2 FROM TABLE @( VALUE #(
      ( d = 'uu' e = 'e1' f = 'f1' g = 'g1'  h = 'h1' )
      ( d = 'ww' e = 'e2' f = 'f2' g = 'g2'  h = 'h2' )
      ( d = 'xx' e = 'e3' f = 'f3' g = 'g3'  h = 'h3' ) ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

As in the example [Exposing Association with a Redirect](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwith_assocs_redirect_abexa.htm), a common table expression +cte accesses the CDS view DEMO\_CDS\_EXPOSE\_ASSOC\_1 and exposes its CDS association \_demo\_join2. Here, however, the redirect is made to the current common table expression and not to a preceding common table expression. This expression specifies the [association target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_target_glosry.htm "Glossary Entry") demo\_join2 of the exposed CDS association twice as an additional data source under the names src1 and src2.

-   In the first WITH statement, the data source is specified using src1.

-   In the second WITH statement, the data source is specified using src2.

The results of the two reads are different from each other. The following reads again demonstrate which join instances are created. The different results originate from the different ON conditions, where the column of src1 and the column of src2 are both evaluated once.