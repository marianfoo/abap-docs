---
title: "WITH, Publishing Associations with a Redirect"
description: |
  This example demonstrates the addition REDIRECT of WITH ASSOCIATIONS(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwith_associations.htm) for common table expressions(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencommon_table_expression_glosry.htm 'Glossary Entr
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwith_assocs_redirect_abexa.htm"
abapFile: "abenwith_assocs_redirect_abexa.htm"
keywords: ["select", "insert", "delete", "do", "if", "try", "method", "class", "data", "internal-table", "abenwith", "assocs", "redirect", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql.htm) →  [ABAP SQL - Reads](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_reading.htm) →  [WITH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwith.htm) →  [WITH Examples](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwith_abexas.htm) → 

WITH, Publishing Associations with a Redirect

This example demonstrates the addition REDIRECT of [WITH ASSOCIATIONS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwith_associations.htm) for [common table expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencommon_table_expression_glosry.htm "Glossary Entry").

Source Code

REPORT demo\_with\_associations\_redir.
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
      +cte1 AS ( SELECT d, e, f
                        FROM demo\_join2
                        WHERE d = @selection ),
      +cte2 AS ( SELECT demo\_cds\_publish\_assoc\_1~d
                        FROM  demo\_cds\_publish\_assoc\_1 )
            WITH ASSOCIATIONS
              ( demo\_cds\_publish\_assoc\_1~\\\_demo\_join2
                  REDIRECTED TO +cte1 VIA demo\_join2 )
      SELECT demo\_join2~\*
             FROM +cte2\\\_demo\_join2 AS demo\_join2
             ORDER BY d, e, f
             INTO TABLE @DATA(result1).
    WITH
      +cte1 AS ( SELECT FROM demo\_join2 AS src1
                          CROSS JOIN demo\_join2 AS src2
                        FIELDS src1~d AS src1\_d,
                               src1~e AS src1\_e,
                               src1~f AS src1\_f,
                               src2~d AS src2\_d,
                               src2~e AS src2\_e,
                               src2~f AS src2\_f
                        WHERE src1~d = @selection ),
      +cte2 AS ( SELECT demo\_cds\_publish\_assoc\_1~d
                        FROM  demo\_cds\_publish\_assoc\_1 )
            WITH ASSOCIATIONS
              ( demo\_cds\_publish\_assoc\_1~\\\_demo\_join2
                  REDIRECTED TO +cte1 VIA src1 )
      SELECT demo\_join2~\*
             FROM +cte2\\\_demo\_join2 AS demo\_join2
             ORDER BY src1\_d, src1\_e, src1\_f, src2\_d, src2\_e, src2\_f
             INTO TABLE @DATA(result2a).
    WITH
      +cte1 AS ( SELECT FROM demo\_join2 AS src1
                          CROSS JOIN demo\_join2 AS src2
                        FIELDS src1~d AS src1\_d,
                               src1~e AS src1\_e,
                               src1~f AS src1\_f,
                               src2~d AS src2\_d,
                               src2~e AS src2\_e,
                               src2~f AS src2\_f
                        WHERE src1~d = @selection ),
      +cte2 AS ( SELECT demo\_cds\_publish\_assoc\_1~d
                        FROM  demo\_cds\_publish\_assoc\_1 )
            WITH ASSOCIATIONS
              ( demo\_cds\_publish\_assoc\_1~\\\_demo\_join2
                  REDIRECTED TO +cte1 VIA src2 )
      SELECT demo\_join2~\*
             FROM +cte2\\\_demo\_join2 AS demo\_join2
             ORDER BY src1\_d, src1\_e, src1\_f, src2\_d, src2\_e, src2\_f
             INTO TABLE @DATA(result2b).
    WITH
      +cte1 AS ( SELECT FROM demo\_join2 AS src1
                          CROSS JOIN demo\_join2 AS src2
                        FIELDS src1~d AS src1\_d,
                               src1~e AS src1\_e,
                               src1~f AS src1\_f,
                               src2~d AS src2\_d,
                               src2~e AS src2\_e,
                               src2~f AS src2\_f
                        WHERE src2~d = @selection ),
      +cte2 AS ( SELECT demo\_cds\_publish\_assoc\_1~d
                        FROM  demo\_cds\_publish\_assoc\_1 )
            WITH ASSOCIATIONS
              ( demo\_cds\_publish\_assoc\_1~\\\_demo\_join2
                  REDIRECTED TO +cte1 VIA src1 )
      SELECT demo\_join2~\*
             FROM +cte2\\\_demo\_join2 AS demo\_join2
             ORDER BY src1\_d, src1\_e, src1\_f, src2\_d, src2\_e, src2\_f
             INTO TABLE @DATA(result3a).
    WITH
      +cte1 AS ( SELECT FROM demo\_join2 AS src1
                          CROSS JOIN demo\_join2 AS src2
                        FIELDS src1~d AS src1\_d,
                               src1~e AS src1\_e,
                               src1~f AS src1\_f,
                               src2~d AS src2\_d,
                               src2~e AS src2\_e,
                               src2~f AS src2\_f
                        WHERE src2~d = @selection ),
      +cte2 AS ( SELECT demo\_cds\_publish\_assoc\_1~d
                        FROM  demo\_cds\_publish\_assoc\_1 )
            WITH ASSOCIATIONS
              ( demo\_cds\_publish\_assoc\_1~\\\_demo\_join2
                  REDIRECTED TO +cte1 VIA src2 )
      SELECT demo\_join2~\*
             FROM +cte2\\\_demo\_join2 AS demo\_join2
             ORDER BY src1\_d, src1\_e, src1\_f, src2\_d, src2\_e, src2\_f
             INTO TABLE @DATA(result3b).
    IF NOT (
       result2a IS INITIAL AND
       result2b IS INITIAL AND
       result3a IS INITIAL AND
       result3b IS INITIAL ).
      ASSERT result2a <> result2b.
      ASSERT result2a <> result3a.
      ASSERT result2a <> result3b.
      ASSERT result2b <> result3a.
      ASSERT result2b <> result3b.
      ASSERT result3a <> result3b.
    ENDIF.
    "Explicite joins in main query
    WITH
      +cte1 AS ( SELECT d, e, f
                        FROM demo\_join2
                        WHERE d = @selection ),
      +cte2 AS ( SELECT demo\_cds\_publish\_assoc\_1~d
                        FROM  demo\_cds\_publish\_assoc\_1 )
      SELECT +cte1~d, +cte1~e, +cte1~f
             FROM +cte2
               INNER JOIN +cte1
                 ON +cte2~d = +cte1~d
             ORDER BY +cte1~d, +cte1~e, +cte1~f
             INTO TABLE @DATA(join\_result1).
    ASSERT join\_result1 = result1.
    WITH
      +cte1 AS ( SELECT FROM demo\_join2 AS src1
                          CROSS JOIN demo\_join2 AS src2
                        FIELDS src1~d AS src1\_d,
                               src1~e AS src1\_e,
                               src1~f AS src1\_f,
                               src2~d AS src2\_d,
                               src2~e AS src2\_e,
                               src2~f AS src2\_f
                        WHERE src1~d = @selection ),
      +cte2 AS ( SELECT demo\_cds\_publish\_assoc\_1~d
                        FROM  demo\_cds\_publish\_assoc\_1 )
      SELECT src1\_d, src1\_e, src1\_f, src2\_d, src2\_e, src2\_f
             FROM +cte2
               INNER JOIN +cte1
                 ON +cte2~d = +cte1~src1\_d
             ORDER BY src1\_d, src1\_e, src1\_f, src2\_d, src2\_e, src2\_f
             INTO TABLE @DATA(join\_result2a).
    ASSERT join\_result2a = result2a.
    WITH
      +cte1 AS ( SELECT FROM demo\_join2 AS src1
                          CROSS JOIN demo\_join2 AS src2
                        FIELDS src1~d AS src1\_d,
                               src1~e AS src1\_e,
                               src1~f AS src1\_f,
                               src2~d AS src2\_d,
                               src2~e AS src2\_e,
                               src2~f AS src2\_f
                        WHERE src1~d = @selection ),
      +cte2 AS ( SELECT demo\_cds\_publish\_assoc\_1~d
                        FROM  demo\_cds\_publish\_assoc\_1 )
      SELECT src1\_d, src1\_e, src1\_f, src2\_d, src2\_e, src2\_f
             FROM +cte2
               INNER JOIN +cte1
                 ON +cte2~d = +cte1~src2\_d
             ORDER BY src1\_d, src1\_e, src1\_f, src2\_d, src2\_e, src2\_f
             INTO TABLE @DATA(join\_result2b).
    ASSERT join\_result2b = result2b.
    WITH
      +cte1 AS ( SELECT FROM demo\_join2 AS src1
                          CROSS JOIN demo\_join2 AS src2
                        FIELDS src1~d AS src1\_d,
                               src1~e AS src1\_e,
                               src1~f AS src1\_f,
                               src2~d AS src2\_d,
                               src2~e AS src2\_e,
                               src2~f AS src2\_f
                        WHERE src2~d = @selection ),
      +cte2 AS ( SELECT demo\_cds\_publish\_assoc\_1~d
                        FROM  demo\_cds\_publish\_assoc\_1 )
      SELECT src1\_d, src1\_e, src1\_f, src2\_d, src2\_e, src2\_f
             FROM +cte2
               INNER JOIN +cte1
                 ON +cte2~d = +cte1~src1\_d
             ORDER BY src1\_d, src1\_e, src1\_f, src2\_d, src2\_e, src2\_f
             INTO TABLE @DATA(join\_result3a).
    ASSERT join\_result3a = result3a.
    WITH
      +cte1 AS ( SELECT FROM demo\_join2 AS src1
                          CROSS JOIN demo\_join2 AS src2
                        FIELDS src1~d AS src1\_d,
                               src1~e AS src1\_e,
                               src1~f AS src1\_f,
                               src2~d AS src2\_d,
                               src2~e AS src2\_e,
                               src2~f AS src2\_f
                        WHERE src2~d = @selection ),
      +cte2 AS ( SELECT demo\_cds\_publish\_assoc\_1~d
                        FROM  demo\_cds\_publish\_assoc\_1 )
      SELECT src1\_d, src1\_e, src1\_f, src2\_d, src2\_e, src2\_f
             FROM +cte2
               INNER JOIN +cte1
                 ON +cte2~d = +cte1~src2\_d
             ORDER BY src1\_d, src1\_e, src1\_f, src2\_d, src2\_e, src2\_f
             INTO TABLE @DATA(join\_result3b).
    ASSERT join\_result3b = result3b.
    "Replace CTEs with internal tables
    SELECT d, e, f
           FROM demo\_join2
           WHERE d = @selection
           INTO TABLE @DATA(cte1\_1).
    SELECT demo\_cds\_publish\_assoc\_1~d
           FROM  demo\_cds\_publish\_assoc\_1
           INTO TABLE @DATA(cte2\_1).
    DATA itab\_result1 LIKE result1.
    itab\_result1 = VALUE #(
      FOR wa2\_1 IN cte2\_1
      FOR wa1\_1 IN cte1\_1 WHERE ( d = wa2\_1-d )
        ( d = wa1\_1-d e = wa1\_1-e  f = wa1\_1-f ) ).
    SORT itab\_result1 BY table\_line.
    ASSERT itab\_result1 = result1.
    SELECT FROM demo\_join2 AS src1
             CROSS JOIN demo\_join2 AS src2
           FIELDS src1~d AS src1\_d,
                  src1~e AS src1\_e,
                  src1~f AS src1\_f,
                  src2~d AS src2\_d,
                  src2~e AS src2\_e,
                  src2~f AS src2\_f
           WHERE src1~d = @selection
           INTO TABLE @DATA(cte1\_2a).
    SELECT demo\_cds\_publish\_assoc\_1~d
           FROM  demo\_cds\_publish\_assoc\_1
           INTO TABLE @DATA(cte2\_2a).
    DATA itab\_result2a LIKE result2a.
    itab\_result2a = VALUE #(
      FOR wa2\_2a IN cte2\_2a
      FOR wa1\_2a IN cte1\_2a WHERE ( src1\_d = wa2\_2a-d )
        ( src1\_d = wa1\_2a-src1\_d
          src1\_e = wa1\_2a-src1\_e
          src1\_f = wa1\_2a-src1\_f
          src2\_d = wa1\_2a-src2\_d
          src2\_e = wa1\_2a-src2\_e
          src2\_f = wa1\_2a-src2\_f ) ).
    SORT itab\_result2a BY table\_line.
    ASSERT itab\_result2a = result2a.
    SELECT FROM demo\_join2 AS src1
             CROSS JOIN demo\_join2 AS src2
           FIELDS src1~d AS src1\_d,
                  src1~e AS src1\_e,
                  src1~f AS src1\_f,
                  src2~d AS src2\_d,
                  src2~e AS src2\_e,
                  src2~f AS src2\_f
           WHERE src1~d = @selection
           INTO TABLE @DATA(cte1\_2b).
    SELECT demo\_cds\_publish\_assoc\_1~d
           FROM  demo\_cds\_publish\_assoc\_1
           INTO TABLE @DATA(cte2\_2b).
    DATA itab\_result2b LIKE result2b.
    itab\_result2b = VALUE #(
      FOR wa2\_2b IN cte2\_2b
      FOR wa1\_2b IN cte1\_2b WHERE ( src2\_d = wa2\_2b-d )
        ( src1\_d = wa1\_2b-src1\_d
          src1\_e = wa1\_2b-src1\_e
          src1\_f = wa1\_2b-src1\_f
          src2\_d = wa1\_2b-src2\_d
          src2\_e = wa1\_2b-src2\_e
          src2\_f = wa1\_2b-src2\_f ) ).
    SORT itab\_result2b BY table\_line.
    ASSERT itab\_result2b = result2b.
    SELECT FROM demo\_join2 AS src1
             CROSS JOIN demo\_join2 AS src2
           FIELDS src1~d AS src1\_d,
                  src1~e AS src1\_e,
                  src1~f AS src1\_f,
                  src2~d AS src2\_d,
                  src2~e AS src2\_e,
                  src2~f AS src2\_f
           WHERE src2~d = @selection
           INTO TABLE @DATA(cte1\_3a).
    SELECT demo\_cds\_publish\_assoc\_1~d
           FROM  demo\_cds\_publish\_assoc\_1
           INTO TABLE @DATA(cte2\_3a).
    DATA itab\_result3a LIKE result3a.
    itab\_result3a = VALUE #(
      FOR wa2\_3a IN cte2\_3a
      FOR wa1\_3a IN cte1\_3a WHERE ( src1\_d = wa2\_3a-d )
        ( src1\_d = wa1\_3a-src1\_d
          src1\_e = wa1\_3a-src1\_e
          src1\_f = wa1\_3a-src1\_f
          src2\_d = wa1\_3a-src2\_d
          src2\_e = wa1\_3a-src2\_e
          src2\_f = wa1\_3a-src2\_f ) ).
    SORT itab\_result3a BY table\_line.
    ASSERT itab\_result3a = result3a.
    SELECT FROM demo\_join2 AS src1
             CROSS JOIN demo\_join2 AS src2
           FIELDS src1~d AS src1\_d,
                  src1~e AS src1\_e,
                  src1~f AS src1\_f,
                  src2~d AS src2\_d,
                  src2~e AS src2\_e,
                  src2~f AS src2\_f
           WHERE src2~d = @selection
           INTO TABLE @DATA(cte1\_3b).
    SELECT demo\_cds\_publish\_assoc\_1~d
           FROM  demo\_cds\_publish\_assoc\_1
           INTO TABLE @DATA(cte2\_3b).
    DATA itab\_result3b LIKE result3b.
    itab\_result3b = VALUE #(
      FOR wa2\_3b IN cte2\_3b
      FOR wa1\_3b IN cte1\_3b WHERE ( src2\_d = wa2\_3b-d )
        ( src1\_d = wa1\_3b-src1\_d
          src1\_e = wa1\_3b-src1\_e
          src1\_f = wa1\_3b-src1\_f
          src2\_d = wa1\_3b-src2\_d
          src2\_e = wa1\_3b-src2\_e
          src2\_f = wa1\_3b-src2\_f ) ).
    SORT itab\_result3b BY table\_line.
    ASSERT itab\_result3b = result3b.
    cl\_demo\_output=>new(
      )->write( result1
      )->write\_text( 'comes from'
      )->write( data = cte2\_1 name = '+cte2'
      )->write( 'INNER JOIN'
      )->write( data = cte1\_1 name = '+cte1'
      )->write( 'ON +cte2~d = +cte1~d'
      )->line(
      )->write( result2a
      )->write\_text( 'comes from'
      )->write( data = cte2\_2a name = '+cte2'
      )->write( 'INNER JOIN'
      )->write( data = cte1\_2a name = '+cte1'
      )->write( 'ON +cte2~d = +cte1~src1\_d'
      )->line(
      )->write( result2b
      )->write\_text( 'comes from'
      )->write( data = cte2\_2b name = '+cte2'
      )->write( 'INNER JOIN'
      )->write( data = cte1\_2b name = '+cte1'
      )->write( 'ON +cte2~d = +cte1~src2\_d'
      )->line(
      )->write( result3a
      )->write\_text( 'comes from'
      )->write( data = cte2\_3a name = '+cte2'
      )->write( 'INNER JOIN'
      )->write( data = cte1\_3a name = '+cte1'
      )->write( 'ON +cte2~d = +cte1~src1\_d'
      )->line(
      )->write( result3b
      )->write\_text( 'comes from'
      )->write( data = cte2\_3b name = '+cte2'
      )->write( 'INNER JOIN'
      )->write( data = cte1\_3b name = '+cte1'
      )->write( 'ON +cte2~d = +cte1~src2\_d'
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

The common table expression +cte2 accesses a CDS view using the following source code:

@AbapCatalog.sqlViewName: 'DEMOCDSPUBASSO1'
define view demo\_cds\_publish\_assoc\_1
  as select from
    demo\_join1
    association to demo\_join2 as \_demo\_join2 on
      \_demo\_join2.d = demo\_join1.d
    {
      \_demo\_join2,
      demo\_join1.d
    }

This example demonstrates various redirects of the target data source of the association demo\_cds\_publish\_assoc\_1~\\\_demo\_join2 published by +cte2 to a preceding common table expression +cte1:

-   The first WITH statement shows a simple example in which the target data source demo\_join2 of the association \_demo\_join2 published by +cte2 occurs once under its name in +cte1. Only demo\_join2 can be specified after VIA. When the path expression +cte2\\\_demo\_join2 is accessed, an instance of an inner join is created between the results sets of +cte2 and +cte1 whose ON condition compares the columns of the results sets defined by the association.

-   The next WITH statements show examples in which the target data source demo\_join2 of the association \_demo\_join2 published by +cte2 occurs twice as a data source in +cte1 under different names, src1 and src2.

-   src1 is specified after VIA in the redirect of the first WITH statement. The ON condition of the join instance created when the path expression is accessed uses the column of the results set determined bysrc1.

-   src2 is specified after VIA in the redirect of the second WITH statement. The ON condition of the join instance created when the path expression is accessed uses the column of the results set determined bysrc2.

-   The next two WITH statements repeat the preceding statements with a different WHERE condition in +cte1, which then produces different results.

The results of all reads are different from each other. The following reads demonstrate which join instances are created:

-   First, the same WITH statements are executed as above, but the association is not published. Instead, the inner join between the two common table expressions is shown explicitly. More specifically, the difference between the ON conditions +cte2~d = +cte1~src1\_d and cte2~d = +cte1~src2\_d should be noted, which demonstrates the effect of the data sources specified using VIA.

-   The subqueries of the WITH statements are then executed as separate SELECT statements to save their results in internal tables for display purposes. Joins are also realized from internal tables using the value operator VALUE.

The example ensures that the results of associated reads also match each other.