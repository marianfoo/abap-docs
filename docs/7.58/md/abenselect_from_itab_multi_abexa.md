---
title: "SELECT, Multiple Internal Tables as Data Sources of a Query"
description: |
  This example demonstrates a multiple join of internal tables. Source Code  Public class definition CLASS cl_demo_select_from_multi_itab DEFINITION PUBLIC INHERITING FROM cl_demo_classrun CREATE PUBLIC . PUBLIC SECTION. METHODS main REDEFINITION . ENDCLASS.  Public class implementation CLA
version: "7.58"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_from_itab_multi_abexa.htm"
abapFile: "abenselect_from_itab_multi_abexa.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "internal-table", "abenselect", "from", "itab", "multi", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_clauses.htm) →  [SELECT, FROM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfrom_clause.htm) →  [SELECT, FROM data\_source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_data_source.htm) →  [SELECT, FROM @itab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_itab.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECT%2C%20Multiple%20Internal%20Tables%20as%20Data%20Sources%20of%20a%20Query%2C%20ABENSELECT_FROM_ITAB_MULTI_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%
0D%0A%0D%0ASuggestion%20for%20improvement:)

SELECT, Multiple Internal Tables as Data Sources of a Query

This example demonstrates a multiple join of internal tables.

Source Code   

\* Public class definition
CLASS cl\_demo\_select\_from\_multi\_itab DEFINITION
  PUBLIC
  INHERITING FROM cl\_demo\_classrun
  CREATE PUBLIC .
  PUBLIC SECTION.
    METHODS main
      REDEFINITION .
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_select\_from\_multi\_itab IMPLEMENTATION.
  METHOD main.
    DATA:
      demo\_join1 TYPE HASHED TABLE OF demo\_join1 WITH UNIQUE KEY a,
      demo\_join2 TYPE HASHED TABLE OF demo\_join2 WITH UNIQUE KEY d,
      demo\_join3 TYPE HASHED TABLE OF demo\_join3 WITH UNIQUE KEY i,
      demo\_join4 TYPE HASHED TABLE OF demo\_join4 WITH UNIQUE KEY l.
    demo\_join1 = VALUE #(
           ( a = 'a1' b = 'b1' c = 'c1' d = 'uu' )
           ( a = 'a2' b = 'b2' c = 'c2' d = 'uu' )
           ( a = 'a3' b = 'b3' c = 'c3' d = 'vv' )
           ( a = 'a4' b = 'b4' c = 'c4' d = 'ww' ) ).
    demo\_join2 = VALUE #(
           ( d = 'uu' e = 'e1' f = 'f1' g = 'g1'  h = 'h1' )
           ( d = 'ww' e = 'e2' f = 'f2' g = 'g2'  h = 'h2' )
           ( d = 'xx' e = 'e3' f = 'f3' g = 'g3'  h = 'h3' ) ).
    demo\_join3 = VALUE #(
           ( i = 'i1' j = 'j1' k = 'k1' l = 'vv' )
           ( i = 'i2' j = 'j2' k = 'k2' l = 'vv' )
           ( i = 'i3' j = 'j3' k = 'k3' l = 'ww' ) ).
    demo\_join4 = VALUE #(
           ( l = 'uu' m = 'm1' n = 'n1' )
           ( l = 'vv' m = 'm2' n = 'n2' )
           ( l = 'ww' m = 'm3' n = 'n3' ) ).
    SELECT FROM
             ( ( @demo\_join1 AS t1
                   INNER JOIN
                     @demo\_join2 AS t2 ON t2~d = t1~d )
                       LEFT OUTER JOIN
                         @demo\_join3 AS t3 ON t3~l = t2~d )
                           INNER JOIN
                             @demo\_join4 AS t4 ON t4~l = t3~l
           FIELDS t1~a AS a1,
                  t1~b AS b1,
                  t1~c AS c1,
                  t1~d AS d1,
                  t2~d AS d2,
                  t2~e AS e2,
                  t2~f AS f2,
                  t2~g AS g2,
                  t2~h AS h2,
                  t3~i AS i3,
                  t3~j AS j3,
                  t3~k AS k3,
                  t3~l AS l3,
                  t4~l AS l4,
                  t4~m AS m4,
                  t4~n AS n4
           INTO TABLE @FINAL(result).
    out->write( result ).
  ENDMETHOD.
ENDCLASS.

Description   

The SELECT statement joins four internal tables. The result is the same as for the respective statement from [SELECT, Multiple Joins](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenjoin_joins_abexa.htm), where database tables of the same structure and content are joined.

The SELECT statements can be processed by the [ABAP SQL engine](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_engine_glosry.htm "Glossary Entry"), since only internal tables and no database tables are involved.