  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql.htm) →  [ABAP SQL - Reads](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_reading.htm) →  [SELECT clauses](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_clauses.htm) →  [SELECT - FROM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfrom_clause.htm) →  [SELECT - FROM JOIN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_join.htm) → 

Inner, Outer, and Cross Joins

This example demonstrates inner and outer [joins](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_join.htm) as well as [cross joins](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_join.htm) in the SELECT statement.

Source Code

REPORT demo\_joins NO STANDARD PAGE HEADING.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS: class\_constructor,
      main.
  PRIVATE SECTION.
    TYPES: wa1 TYPE demo\_join1,
           wa2 TYPE demo\_join2.
    TYPES BEGIN OF wa.
    INCLUDE TYPE wa1 AS wa1 RENAMING WITH SUFFIX 1.
    INCLUDE TYPE wa2 AS wa2 RENAMING WITH SUFFIX 2.
    TYPES END OF wa.
    CLASS-DATA out TYPE REF TO if\_demo\_output.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: itab  TYPE TABLE OF wa,
          itabi LIKE itab,
          itab1 LIKE itab,
          itab2 LIKE itab,
          itab3 LIKE itab.
    out->begin\_section( \`Inner Joins\`
      )->begin\_section( \`demo1 INNER JOIN demo2\` ).
    SELECT FROM demo\_join1 AS t1
             INNER JOIN demo\_join2 AS t2 ON t2~d = t1~d
           FIELDS t1~a AS a1,
                  t1~b AS b1,
                  t1~c AS c1,
                  t1~d AS d1,
                  t2~d AS d2,
                  t2~e AS e2,
                  t2~f AS f2,
                  t2~g AS g2,
                  t2~h AS h2
           ORDER BY t1~d
           INTO CORRESPONDING FIELDS OF TABLE @itab.
    itabi = itab.
    out->write( itab
      )->next\_section( \`demo2 INNER JOIN demo1\` ).
    SELECT FROM demo\_join2 AS t2
             INNER JOIN demo\_join1 AS t1 ON t1~d = t2~d
           FIELDS t1~a AS a1,
                  t1~b AS b1,
                  t1~c AS c1,
                  t1~d AS d1,
                  t2~d AS d2,
                  t2~e AS e2,
                  t2~f AS f2,
                  t2~g AS g2,
                  t2~h AS h2
           ORDER BY t1~d
           INTO CORRESPONDING FIELDS OF TABLE @itab.
    out->write( itab
      )->end\_section(
      )->next\_section( \`Outer Joins\`
      )->begin\_section( \`demo1 LEFT OUTER JOIN demo2\` ).
    SELECT FROM demo\_join1 AS t1
             LEFT OUTER JOIN demo\_join2 AS t2 ON t2~d = t1~d
           FIELDS t1~a AS a1,
                  t1~b AS b1,
                  t1~c AS c1,
                  t1~d AS d1,
                  t2~d AS d2,
                  t2~e AS e2,
                  t2~f AS f2,
                  t2~g AS g2,
                  t2~h AS h2
           ORDER BY t1~d
           INTO CORRESPONDING FIELDS OF TABLE @itab.
    out->write( itab
      )->next\_section( \`demo2 LEFT OUTER JOIN demo1\` ).
    SELECT FROM demo\_join2 AS t2
             LEFT OUTER JOIN demo\_join1 AS t1 ON t1~d = t2~d
           FIELDS t1~a AS a1,
                  t1~b AS b1,
                  t1~c AS c1,
                  t1~d AS d1,
                  t2~d AS d2,
                  t2~e AS e2,
                  t2~f AS f2,
                  t2~g AS g2,
                  t2~h AS h2
           ORDER BY t1~d
           INTO CORRESPONDING FIELDS OF TABLE @itab.
    out->write( itab
      )->end\_section(
      )->begin\_section( \`demo1 RIGHT OUTER JOIN demo2\` ).
    SELECT FROM demo\_join1 AS t1
             RIGHT OUTER JOIN demo\_join2 AS t2 ON t2~d = t1~d
           FIELDS t1~a AS a1,
                  t1~b AS b1,
                  t1~c AS c1,
                  t1~d AS d1,
                  t2~d AS d2,
                  t2~e AS e2,
                  t2~f AS f2,
                  t2~g AS g2,
                  t2~h AS h2
          ORDER BY t1~d
           INTO CORRESPONDING FIELDS OF TABLE @itab.
    out->write( itab
      )->next\_section( \`demo2 RIGHT OUTER JOIN demo1\` ).
    SELECT FROM demo\_join2 AS t2
             RIGHT OUTER JOIN demo\_join1 AS t1 ON t1~d = t2~d
           FIELDS t1~a AS a1,
                  t1~b AS b1,
                  t1~c AS c1,
                  t1~d AS d1,
                  t2~d AS d2,
                  t2~e AS e2,
                  t2~f AS f2,
                  t2~g AS g2,
                  t2~h AS h2
           ORDER BY t1~d
           INTO CORRESPONDING FIELDS OF TABLE @itab.
    out->write( itab
      )->end\_section(
      )->next\_section( \`Cross Joins\`
      )->begin\_section( \`demo2 CROSS JOIN demo1\` ).
    SELECT FROM demo\_join2 AS t2
             INNER JOIN demo\_join1 AS t1 ON 1 = 1
           FIELDS t1~a AS a1,
                  t1~b AS b1,
                  t1~c AS c1,
                  t1~d AS d1,
                  t2~d AS d2,
                  t2~e AS e2,
                  t2~f AS f2,
                  t2~g AS g2,
                  t2~h AS h2
           ORDER BY t1~a,
                    t1~b,
                    t1~c,
                    t1~d,
                    t2~d,
                    t2~e,
                    t2~f,
                    t2~g,
                    t2~h
           INTO CORRESPONDING FIELDS OF TABLE @itab1.
    SELECT FROM demo\_join2 AS t2
             LEFT OUTER JOIN demo\_join1 AS t1 ON 1 = 1
           FIELDS t1~a AS a1,
                  t1~b AS b1,
                  t1~c AS c1,
                  t1~d AS d1,
                  t2~d AS d2,
                  t2~e AS e2,
                  t2~f AS f2,
                  t2~g AS g2,
                  t2~h AS h2
           ORDER BY t1~a,
                    t1~b,
                    t1~c,
                    t1~d,
                    t2~d,
                    t2~e,
                    t2~f,
                    t2~g,
                    t2~h
           INTO CORRESPONDING FIELDS OF TABLE @itab2.
    SELECT FROM demo\_join2 AS t2
             RIGHT OUTER JOIN demo\_join1 AS t1 ON 1 = 1
           FIELDS t1~a AS a1,
                  t1~b AS b1,
                  t1~c AS c1,
                  t1~d AS d1,
                  t2~d AS d2,
                  t2~e AS e2,
                  t2~f AS f2,
                  t2~g AS g2,
                  t2~h AS h2
           ORDER BY t1~a,
                    t1~b,
                    t1~c,
                    t1~d,
                    t2~d,
                    t2~e,
                    t2~f,
                    t2~g,
                    t2~h
           INTO CORRESPONDING FIELDS OF TABLE @itab3.
    SELECT FROM demo\_join2 AS t2
             CROSS JOIN demo\_join1 AS t1
           FIELDS t1~a AS a1,
                  t1~b AS b1,
                  t1~c AS c1,
                  t1~d AS d1,
                  t2~d AS d2,
                  t2~e AS e2,
                  t2~f AS f2,
                  t2~g AS g2,
                  t2~h AS h2
           ORDER BY t1~a,
                    t1~b,
                    t1~c,
                    t1~d,
                    t2~d,
                    t2~e,
                    t2~f,
                    t2~g,
                    t2~h
           INTO CORRESPONDING FIELDS OF TABLE @itab.
    ASSERT itab = itab1.
    ASSERT itab = itab2.
    ASSERT itab = itab3.
    out->write( itab
      )->next\_section( \`demo1 CROSS JOIN demo2\` ).
    SELECT FROM demo\_join1 AS t1
             CROSS JOIN demo\_join2 AS t2
           FIELDS t1~a AS a1,
                  t1~b AS b1,
                  t1~c AS c1,
                  t1~d AS d1,
                  t2~d AS d2,
                  t2~e AS e2,
                  t2~f AS f2,
                  t2~g AS g2,
                  t2~h AS h2
           ORDER BY t1~a,
                    t1~b,
                    t1~c,
                    t1~d,
                    t2~d,
                    t2~e,
                    t2~f,
                    t2~g,
                    t2~h
           INTO CORRESPONDING FIELDS OF TABLE @itab.
    ASSERT itab = itab1.
    ASSERT itab = itab2.
    ASSERT itab = itab3.
    out->write( itab
      )->next\_section( \`demo1 CROSS JOIN demo2 WHERE ...\` ).
    SELECT FROM demo\_join1 AS t1
             CROSS JOIN demo\_join2 AS t2
           FIELDS t1~a AS a1,
                  t1~b AS b1,
                  t1~c AS c1,
                  t1~d AS d1,
                  t2~d AS d2,
                  t2~e AS e2,
                  t2~f AS f2,
                  t2~g AS g2,
                  t2~h AS h2
           WHERE t2~d = t1~d
           ORDER BY t1~d
           INTO CORRESPONDING FIELDS OF TABLE @itab.
    ASSERT itab = itabi.
    out->display( itab ).  ENDMETHOD.
  METHOD class\_constructor.
    out = cl\_demo\_output=>new( )->begin\_section( \`Database Tables\` ).
    DELETE FROM demo\_join1.
    INSERT demo\_join1 FROM TABLE @( VALUE #(
      ( a = 'a1' b = 'b1' c = 'c1'  d = 'uu' )
      ( a = 'a2' b = 'b2' c = 'c2'  d = 'uu' )
      ( a = 'a3' b = 'b3' c = 'c3'  d = 'vv' )
      ( a = 'a4' b = 'b4' c = 'c4'  d = 'ww' ) ) ).
    SELECT \* FROM demo\_join1 INTO TABLE @DATA(itab1).
    DELETE FROM demo\_join2.
    INSERT demo\_join2 FROM TABLE @( VALUE #(
      ( d = 'uu' e = 'e1' f = 'f1'  g = 'g1'  h = 'h1' )
      ( d = 'ww' e = 'e2' f = 'f2'  g = 'g2'  h = 'h2' )
      ( d = 'xx' e = 'e3' f = 'f3'  g = 'g3'  h = 'h3' ) ) ).
    SELECT \* FROM demo\_join2 INTO TABLE @DATA(itab2).
    out->begin\_section( \`demo1\`
      )->write( itab1
      )->next\_section( \`demo2\`
      )->write( itab2
      )->end\_section(
      )->end\_section( ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Inner and outer joins between two tables DEMO\_JOIN1 and DEMO\_JOIN2, for which the last column of DEMO\_JOIN1 matches the first column of DEMO\_JOIN2 in the join conditions.

-   Both inner joins between the tables produce the same results set, regardless of whether they are arranged on the left or the right. Three row combinations meet the join condition.

-   The results sets of the two left joins depends on the arrangement of the tables on the left and right side. Apart from the three rows already produced by the inner join, an empty row (with null values) is created on the right for each extra row on the left. The fact that the empty row is displayed on the left in the final result is due to the structure of the internal table in the INTO clause. Here, the columns of DEMO\_JOIN1 are always read from the left and those of DEMO\_JOIN2 are always read from the right. If \* was specified in the SELECT list, and CORRESPONDING FIELDS was not used in the INTO clause, the result would be arranged differently.

-   The results sets of both right outer joins exactly correspond to the result sets of both previous left outer joins (with the database tables specified in reverse order).

-   The results sets of both cross joins without a WHERE condition are identical to the result sets of the corresponding inner and outer joins whose ON condition is always true. It makes no difference which side the data sources are specified on in the cross join. The number of rows is determined by 4 x 3 = 12.

-   The results set of the cross join with a WHERE condition is identical to the results set of an inner join with a corresponding ON condition. Note that in a cross join, all rows are read first and then selected, whereas the inner join only reads the rows that meet the conditions.

See also the executable example [SQL Expressions, Coalesce Function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_expr_coalesce_abexa.htm), in which the default initial values set for the null values in the outer join are replaced by a different value.