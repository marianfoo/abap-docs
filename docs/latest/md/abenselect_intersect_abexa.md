  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_reading.htm) →  [UNION, INTERSECT, EXCEPT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapunion.htm) →  [INTERSECT, Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenintersect_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECT%2C%20Intersection%20of%20Multiple%20Tables%2C%20ABENSELECT_INTERSECT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

SELECT, Intersection of Multiple Tables

This example demonstrates how an intersection is created across multiple tables.

Source Code   

\* Public class definition
CLASS cl\_demo\_select\_intrsct DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_select\_intrsct IMPLEMENTATION.
  METHOD main.
    SELECT a AS c1, b AS c2, c AS c3, d AS c4
           FROM demo\_join1
    INTERSECT
    SELECT d AS c1, e AS c2, f AS c3, g AS c4
          FROM demo\_join2
    INTERSECT DISTINCT
    SELECT i AS c1, j AS c2, k AS c3, l AS c4
           FROM demo\_join3
           INTO TABLE @FINAL(result).
    out->write( result ).
    SELECT a AS c1, b AS c2, c AS c3, d AS c4
           FROM demo\_join1
    INTERSECT
    SELECT d AS c1, e AS c2, f AS c3, g AS c4
          FROM demo\_join2
    UNION
    SELECT i AS c1, j AS c2, k AS c3, l AS c4
           FROM demo\_join3
           INTO TABLE @FINAL(result\_with\_union).
    out->write( result\_with\_union ).
    SELECT a AS c1, b AS c2, c AS c3, d AS c4
           FROM demo\_join1
    INTERSECT
    ( SELECT d AS c1, e AS c2, f AS c3, g AS c4
            FROM demo\_join2
      UNION
      SELECT i AS c1, j AS c2, k AS c3, l AS c4
            FROM demo\_join3 )
            INTO TABLE @FINAL(result\_with\_union2).
    out->write( result\_with\_union2 ).
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    DELETE FROM demo\_join1.
    DELETE FROM demo\_join2.
    DELETE FROM demo\_join3.
    INSERT demo\_join1 FROM TABLE @( VALUE #(
      ( a = 'a1' b = 'b1' c = 'c1' d = 'd1' )
      ( a = 'a2' b = 'b2' c = 'c2' d = 'd2' )
      ( a = 'a3' b = 'b3' c = 'c3' d = 'd3' ) ) ).
    INSERT demo\_join2 FROM TABLE @( VALUE #(
      ( d = 'a1' e = 'b1' f = 'c1' g = 'd1' )
      ( d = 'a2' e = 'b2' f = 'c2' g = 'd2' )
      ( d = 'a3' e = 'b3' f = 'c3' g = 'd3' ) ) ).
    INSERT demo\_join3 FROM TABLE @( VALUE #(
      ( i = 'a1' j = 'b1' k = 'c1' l = 'd1' )
      ( i = 'i1' j = 'j1' k = 'k1' l = 'l1' )
      ( i = 'i2' j = 'j2' k = 'k2' l = 'l2' ) ) ).
  ENDMETHOD.
ENDCLASS.

Description   

Four columns of the same type from result sets from three database tables DEMO\_JOIN1, DEMO\_JOIN2 and DEMO\_JOIN3 are combined to different SELECT statements using [INTERSECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapunion.htm). The DDIC database tables are filled in the static constructor.

-   The first statement shows the default behavior with addition DISTINCT in the second INTERSECT and without addition DISTINCT in the first INTERSECT. No rows are inserted from DDIC database table DEMO\_JOIN2 and no rows are inserted from DDIC database table DEMO\_JOIN3 because these rows either already exist or do not match the first result set. The non-matching rows between the first result set and DEMO\_JOIN3 are removed from DEMO\_JOIN1.
-   The second statement shows the behavior of INTERSECT together with UNION. INTERSECT inserts no rows from DDIC database table DEMO\_JOIN2 and UNION inserts two rows from DDIC database table DEMO\_JOIN3. The result is the same as using only UNION DISTINCT.
-   The third statement is the same as the second, except that parentheses have been inserted here. First, the parentheses are evaluated. UNION inserts two rows from DDIC database table DEMO\_JOIN3. Afterwards, the result set of the parentheses is completely inserted into the result set of DEMO\_JOIN1 and removes the two rows that were inserted before.