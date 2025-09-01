  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_clauses.htm) →  [SELECT, FROM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfrom_clause.htm) →  [SELECT, FROM JOIN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_join.htm) → 

SELECT, Multiple Joins

This example demonstrates chaining and parenthesizing of multiple [joins](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_join.htm) in the SELECT statement.

Source Code

REPORT demo\_join\_joins.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS: class\_constructor,
      main.
  PRIVATE SECTION.
    TYPES: wa1 TYPE demo\_join1,
           wa2 TYPE demo\_join2,
           wa3 TYPE demo\_join3,
           wa4 TYPE demo\_join4.
    TYPES BEGIN OF wa.
    INCLUDE TYPE wa1 AS wa1 RENAMING WITH SUFFIX 1.
    INCLUDE TYPE wa2 AS wa2 RENAMING WITH SUFFIX 2.
    INCLUDE TYPE wa3 AS wa3 RENAMING WITH SUFFIX 3.
    INCLUDE TYPE wa4 AS wa4 RENAMING WITH SUFFIX 4.
    TYPES END OF wa.
    CLASS-DATA out TYPE REF TO if\_demo\_output.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA itab TYPE TABLE OF wa WITH DEFAULT KEY.
    DATA jtab LIKE itab.
    out->begin\_section( \`Joins\` ).
    out->begin\_section( \`1. demo1 INNER JOIN demo2\` ).
    SELECT FROM
             demo\_join1 AS t1
               INNER JOIN
                 demo\_join2 AS t2 ON t2~d = t1~d
           FIELDS t1~a AS a1,
                  t1~b AS b1,
                  t1~c AS c1,
                  t1~d AS d1,
                  t2~d AS d2,
                  t2~e AS e2,
                  t2~f AS f2,
                  t2~g AS g2,
                  t2~h AS h2
           INTO CORRESPONDING FIELDS OF TABLE @itab.
    SORT itab.
    out->write( itab
      )->next\_section( \`2. demo3 INNER JOIN demo4 \` ).
    SELECT FROM
             demo\_join3 AS t3
               INNER JOIN
                 demo\_join4 AS t4 ON t4~l = t3~l
           FIELDS t3~i AS i3,
                  t3~j AS j3,
                  t3~k AS k3,
                  t3~l AS l3,
                  t4~l AS l4,
                  t4~m AS m4,
                  t4~n AS n4
           INTO CORRESPONDING FIELDS OF TABLE @itab.
    SORT itab.
    out->write( itab
      )->next\_section( \`3a. demo1 INNER JOIN demo2 \` &&
                       \`LEFT OUTER JOIN demo3\` ).
    SELECT FROM
             demo\_join1 AS t1
               INNER JOIN
                 demo\_join2 AS t2 ON t2~d = t1~d
                     LEFT OUTER JOIN
                       demo\_join3 AS t3 ON t3~l = t2~d
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
                  t3~l AS l3
           INTO CORRESPONDING FIELDS OF TABLE @itab.
    SORT itab.
    out->write( itab
      )->next\_section( \`3b. (demo1 INNER JOIN demo2) \` &&
                       \`LEFT OUTER JOIN demo3\` ).
    SELECT FROM
             ( demo\_join1 AS t1
                 INNER JOIN
                   demo\_join2 AS t2 ON t2~d = t1~d )
                     LEFT OUTER JOIN
                       demo\_join3 AS t3 ON t3~l = t2~d
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
                  t3~l AS l3
           INTO CORRESPONDING FIELDS OF TABLE @itab.
    SORT itab.
    out->write( itab
      )->next\_section( \`4a. demo1 INNER JOIN demo2 \` &&
                       \`LEFT OUTER JOIN demo3 INNER JOIN demo4\` ).
    SELECT FROM
             demo\_join1 AS t1
               INNER JOIN
                 demo\_join2 AS t2 ON t2~d = t1~d
                   LEFT OUTER JOIN
                     demo\_join3 AS t3 ON t3~l = t2~d
                       INNER JOIN
                         demo\_join4 AS t4 ON t4~l = t3~l
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
           INTO CORRESPONDING FIELDS OF TABLE @itab.
    SORT itab.
    out->write( itab
      )->next\_section( \`4b. ((demo1 INNER JOIN demo2) \` &&
                       \`LEFT OUTER JOIN demo3) INNER JOIN demo4\` ).
    SELECT FROM
             ( ( demo\_join1 AS t1
                   INNER JOIN
                     demo\_join2 AS t2 ON t2~d = t1~d )
                       LEFT OUTER JOIN
                         demo\_join3 AS t3 ON t3~l = t2~d )
                           INNER JOIN
                             demo\_join4 AS t4 ON t4~l = t3~l
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
           INTO CORRESPONDING FIELDS OF TABLE @itab.
    SORT itab.
    out->write( itab
      )->next\_section( \`5a. demo1 INNER JOIN demo2 \` &&
                       \`LEFT OUTER JOIN demo3 INNER JOIN demo4\` ).
    SELECT FROM
             demo\_join1 AS t1
               INNER JOIN
                 demo\_join2 AS t2 ON t2~d = t1~d
               LEFT OUTER JOIN
                 demo\_join3 AS t3
                   INNER JOIN
                     demo\_join4 AS t4 ON t4~l = t3~l ON t3~l = t2~d
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
           INTO CORRESPONDING FIELDS OF TABLE @itab.
    SORT itab.
    out->write( itab
      )->next\_section( \`5b. (demo1 INNER JOIN demo2) \` &&
                       \`LEFT OUTER JOIN (demo3 INNER JOIN demo4)\` ).
    SELECT FROM
             ( demo\_join1 AS t1
                 INNER JOIN
                   demo\_join2 AS t2 ON t2~d = t1~d )
               LEFT OUTER JOIN
                 ( demo\_join3 AS t3
                     INNER JOIN
                       demo\_join4 AS t4 ON t4~l = t3~l ) ON t3~l = t2~d
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
           INTO CORRESPONDING FIELDS OF TABLE @itab.
    SORT itab.
    out->write( itab
      )->next\_section( \`6a. demo1 CROSS JOIN demo2 \` &&
                       \`CROSS JOIN demo3\` ).
    SELECT FROM
             demo\_join1 AS t1
               CROSS JOIN
                 demo\_join2 AS t2
                     CROSS JOIN
                       demo\_join3 AS t3
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
                  t3~l AS l3
           INTO CORRESPONDING FIELDS OF TABLE @itab.
    SORT itab.
    jtab = itab.
    out->write( itab
      )->next\_section( \`6b. ( demo1 CROSS JOIN demo2 ) \` &&
                       \`CROSS JOIN demo3\` ).
    SELECT FROM
            ( demo\_join1 AS t1
               CROSS JOIN
                  demo\_join2 AS t2 )
                      CROSS JOIN
                        demo\_join3 AS t3
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
                  t3~l AS l3
           INTO CORRESPONDING FIELDS OF TABLE @itab.
    SORT itab.
    ASSERT itab = jtab.
    out->write( itab
      )->next\_section( \`6c. demo1 CROSS JOIN ( demo2 \` &&
                       \`CROSS JOIN demo3 )\` ).
    SELECT FROM
             demo\_join1 AS t1
               CROSS JOIN
                 ( demo\_join2 AS t2
                       CROSS JOIN
                         demo\_join3 AS t3 )
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
                  t3~l AS l3
           INTO CORRESPONDING FIELDS OF TABLE @itab.
    SORT itab.
    ASSERT jtab = itab.
    out->write( itab
      )->next\_section( \`7a. demo1 CROSS JOIN demo2 \` &&
                       \`RIGHT OUTER demo3\` ).
    SELECT FROM
             demo\_join1 AS t1
               CROSS JOIN
                 demo\_join2 AS t2
                     RIGHT OUTER JOIN
                       demo\_join3 AS t3 ON t3~l = t2~d
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
                  t3~l AS l3
           INTO CORRESPONDING FIELDS OF TABLE @itab.
    SORT itab.
    out->write( itab
      )->next\_section( \`7b. ( demo1 CROSS JOIN demo2 ) \` &&
                       \`RIGHT OUTER demo3\` ).
    SELECT FROM
             ( demo\_join1 AS t1
                 CROSS JOIN
                   demo\_join2 AS t2 )
                       RIGHT OUTER JOIN
                         demo\_join3 AS t3 ON t3~l = t2~d
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
                  t3~l AS l3
           INTO CORRESPONDING FIELDS OF TABLE @itab.
    SORT itab.
    out->write( itab
      )->next\_section( \`7c. demo1 CROSS JOIN ( demo2  \` &&
                       \`RIGHT OUTER demo3 )\` ).
    SELECT FROM
             demo\_join1 AS t1
               CROSS JOIN
                 ( demo\_join2 AS t2
                       RIGHT OUTER JOIN
                         demo\_join3 AS t3 ON t3~l = t2~d )
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
                  t3~l AS l3
           INTO CORRESPONDING FIELDS OF TABLE @itab.
    SELECT COUNT( \* ) FROM demo\_join1
                      INTO @DATA(left).
    SELECT COUNT( \* ) FROM demo\_join2 AS t2 RIGHT OUTER JOIN
                           demo\_join3 AS t3 ON t3~l = t2~d
                      INTO @DATA(right).
    ASSERT lines( itab ) = left \* right.
    SORT itab.
    out->display( itab ).  ENDMETHOD.
  METHOD class\_constructor.
    out = cl\_demo\_output=>new( )->begin\_section( \`Database Tables\` ).
    DELETE FROM demo\_join1.
    INSERT demo\_join1 FROM TABLE @( VALUE #(
      ( a = 'a1' b = 'b1' c = 'c1' d = 'uu' )
      ( a = 'a2' b = 'b2' c = 'c2' d = 'uu' )
      ( a = 'a3' b = 'b3' c = 'c3' d = 'vv' )
      ( a = 'a4' b = 'b4' c = 'c4' d = 'ww' ) ) ).
    SELECT \* FROM demo\_join1 INTO TABLE @DATA(itab1).
    DELETE FROM demo\_join2.
    INSERT demo\_join2 FROM TABLE @( VALUE #(
      ( d = 'uu' e = 'e1' f = 'f1' g = 'g1'  h = 'h1' )
      ( d = 'ww' e = 'e2' f = 'f2' g = 'g2'  h = 'h2' )
      ( d = 'xx' e = 'e3' f = 'f3' g = 'g3'  h = 'h3' ) ) ).
    SELECT \* FROM demo\_join2 INTO TABLE @DATA(itab2).
    DELETE FROM demo\_join3.
    INSERT demo\_join3 FROM TABLE @( VALUE #(
      ( i = 'i1' j = 'j1' k = 'k1' l = 'vv' )
      ( i = 'i2' j = 'j2' k = 'k2' l = 'vv' )
      ( i = 'i3' j = 'j3' k = 'k3' l = 'ww' ) ) ).
    SELECT \* FROM demo\_join3 INTO TABLE @DATA(itab3).
    DELETE FROM demo\_join4.
    INSERT demo\_join4 FROM TABLE @( VALUE #(
      ( l = 'uu' m = 'm1' n = 'n1' )
      ( l = 'vv' m = 'm2' n = 'n2' )
      ( l = 'ww' m = 'm3' n = 'n3' ) ) ).
    SELECT \* FROM demo\_join4 INTO TABLE @DATA(itab4).
    out->begin\_section( \`demo1\`
      )->write( itab1
      )->next\_section( \`demo2\`
      )->write( itab2
      )->next\_section( \`demo3\`
      )->write( itab3
      )->next\_section( \`demo4\`
      )->write( itab4
      )->end\_section(
      )->end\_section( ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Chaining of up to four DDIC database tables using inner, outer, and cross joins.

1.  Inner join between tables DEMO\_JOIN1 and DEMO\_JOIN2. The result set contains three rows, in which column D of DEMO\_JOIN1 has the same content as column D of DEMO\_JOIN2.
    
2.  Inner join between tables DEMO\_JOIN3 and DEMO\_JOIN4. The result set contains three rows, in which column L of DEMO\_JOIN3 has the same content as column L of DEMO\_JOIN4.
    
3.  Outer join between result set of point 1 and table DEMO\_JOIN3. The result set contains three rows. In addition to the row, in which column L of DEMO\_JOIN3 and column D of DEMO\_JOIN2 from the result set of point 1 have the same content, there are two rows, in which the columns of DEMO\_JOIN3 are filled with zero values, because they do not meet the join condition. In variant 3b, explicit parentheses are used to visualize the implicit parentheses in variant 3a.
    
4.  Inner join between result set of point 3 and table DEMO\_JOIN4. The result set contains a row, in which column L of DEMO\_JOIN4 has the same content as column L of DEMO\_JOIN3 from the result set of point 3. In variant 4b, explicit parentheses are used to visualize the implicit parentheses in variant 4a.
    
5.  Outer join between the result set of point 1 and result set of point 2. The result set contains three rows. In addition to the row, in which column L ofDEMO\_JOIN3 from the result set of point 2 and column D of DEMO\_JOIN2 from the result set of point 1 have the same content, there are two rows, in which the columns from the result set of point 2 are filled with zero values, because they do not meet the join condition. In variant 5b, explicit parentheses are used to visualize the implicit parentheses in variant 5a.
    
6.  Cross joins between the tables DEMO\_JOIN1, DEMO\_JOIN2, and DEMO\_JOIN3. The result set is not determined by the order of the evaluation defined by the parentheses. The number of rows is determined by 4 x 3 x 3 = 36.
    
7.  Combinations of a cross join with a right outer join executed in different orders.
    

-   The parenthesis in variant 7b matches the implicit order of variant 7a. The cross join is evaluated first and its result set is joined with the DDIC database table DEMO\_JOIN3 using the right outer join.

-   The parentheses in variant 7c produce a different result. A cross join is created between DEMO\_JOIN1 and the result set of the right outer join between DEMO\_JOIN2 and DEMO\_JOIN3. The number of rows is calculated from 4 x 3 x 12 = 36.