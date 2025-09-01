  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_reading.htm) →  [UNION, INTERSECT, EXCEPT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapunion.htm) →  [EXCEPT, Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexcept_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECT%2C%20Difference%20of%20Multiple%20Tables%2C%20ABENSELECT_EXCEPT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement
:)

SELECT, Difference of Multiple Tables

This example demonstrates how a difference is created across multiple tables.

Source Code   

\* Public class definition
CLASS cl\_demo\_select\_except DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_select\_except IMPLEMENTATION.
  METHOD main.
    SELECT a AS c1, b AS c2, c AS c3, d AS c4
           FROM demo\_join1
    EXCEPT
    SELECT d AS c1, e AS c2, f AS c3, g AS c4
           FROM demo\_join2
    EXCEPT DISTINCT
    SELECT i AS c1, j AS c2, k AS c3, l AS c4
           FROM demo\_join3
           INTO TABLE @FINAL(result).
    out->write( result ).
    SELECT a AS c1, b AS c2, c AS c3, d AS c4
           FROM demo\_join1
    INTERSECT
    SELECT d AS c1, e AS c2, f AS c3, g AS c4
           FROM demo\_join2
    EXCEPT
    SELECT i AS c1, j AS c2, k AS c3, l AS c4
           FROM demo\_join3
           INTO TABLE @FINAL(result\_with\_intersect).
    out->write( result\_with\_intersect ).
    SELECT a AS c1, b AS c2, c AS c3, d AS c4
           FROM demo\_join1
    INTERSECT
    ( SELECT d AS c1, e AS c2, f AS c3, g AS c4
             FROM demo\_join2
      EXCEPT
      SELECT i AS c1, j AS c2, k AS c3, l AS c4
             FROM demo\_join3 )
            INTO TABLE @FINAL(result\_with\_intersect2).
    out->write( result\_with\_intersect2 ).
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

Four columns of the same type from result sets from three database tables DEMO\_JOIN1, DEMO\_JOIN2 and DEMO\_JOIN3 are combined to different SELECT statements using [EXCEPT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapunion.htm). The DDIC database tables are filled in the static constructor.

-   The first statement shows the default behavior with addition DISTINCT in the second EXCEPT and without addition DISTINCT in the first EXCEPT. The first EXCEPT already removes all rows from the result set because there is no row in DDIC database table DEMO\_JOIN1 that is not in DDIC database table DEMO\_JOIN2. With the second EXCEPT the result set remains empty.
-   The second statement shows the behavior of EXCEPT together with INTERSECT. INTERSECT inserts no rows from DDIC database table DEMO\_JOIN2 and EXCEPT inserts no rows from DDIC database table DEMO\_JOIN3 but removes one row from the result set.
-   The third statement is the same as the second, except that parentheses have been inserted here. First, the parentheses are evaluated. EXCEPT inserts no rows from DDIC database table DEMO\_JOIN3 and removes one row from DEMO\_JOIN2. Afterwards, the result set of the parentheses is completely inserted into the result set of DEMO\_JOIN1 but without inserting a row.