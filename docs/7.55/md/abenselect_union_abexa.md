  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_reading.htm) →  [UNION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapunion.htm) →  [UNION, Examples](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenunion_abexas.htm) → 

SELECT, Union of Multiple Tables

This example demonstrates how a union is created across multiple tables.

Source Code

REPORT demo\_select\_union.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      class\_constructor.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    SELECT a AS c1, b AS c2, c AS c3, d AS c4
           FROM demo\_join1
    UNION DISTINCT
    SELECT d AS c1, e AS c2, f AS c3, g AS c4
          FROM demo\_join2
    UNION DISTINCT
    SELECT i AS c1, j AS c2, k AS c3, l AS c4
           FROM demo\_join3
           INTO TABLE @DATA(result\_distinct).
    out->write( result\_distinct ).
    SELECT a AS c1, b AS c2, c AS c3, d AS c4
           FROM demo\_join1
    UNION ALL
    SELECT d AS c1, e AS c2, f AS c3, g AS c4
          FROM demo\_join2
    UNION ALL
    SELECT i AS c1, j AS c2, k AS c3, l AS c4
           FROM demo\_join3
           INTO TABLE @DATA(result\_all).
    out->write( result\_all ).
    SELECT a AS c1, b AS c2, c AS c3, d AS c4
           FROM demo\_join1
    UNION ALL
    SELECT d AS c1, e AS c2, f AS c3, g AS c4
          FROM demo\_join2
    UNION DISTINCT
    SELECT i AS c1, j AS c2, k AS c3, l AS c4
           FROM demo\_join3
           INTO TABLE @DATA(result\_all\_distinct1).
    out->write( result\_all\_distinct1 ).
    SELECT a AS c1, b AS c2, c AS c3, d AS c4
           FROM demo\_join1
    UNION ALL
    ( SELECT d AS c1, e AS c2, f AS c3, g AS c4
             FROM demo\_join2
      UNION DISTINCT
      SELECT i AS c1, j AS c2, k AS c3, l AS c4
            FROM demo\_join3 )
            INTO TABLE @DATA(result\_all\_distinct2).
    out->write( result\_all\_distinct2 ).
    SELECT a AS c1, b AS c2, c AS c3, d AS c4
           FROM demo\_join1
    UNION DISTINCT
    SELECT d AS c1, e AS c2, f AS c3, g AS c4
          FROM demo\_join2
    UNION ALL
    SELECT i AS c1, j AS c2, k AS c3, l AS c4
           FROM demo\_join3
           INTO TABLE @DATA(result\_distinct\_all1).
    out->write( result\_distinct\_all1 ).
    SELECT a AS c1, b AS c2, c AS c3, d AS c4
           FROM demo\_join1
    UNION DISTINCT
    ( SELECT d AS c1, e AS c2, f AS c3, g AS c4
            FROM demo\_join2
    UNION ALL
    SELECT i AS c1, j AS c2, k AS c3, l AS c4
          FROM demo\_join3 )
          INTO TABLE @DATA(result\_distinct\_all2).
    out->write( result\_distinct\_all2 ).
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
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
START-OF-SELECTION.
  demo=>main( ).

Description

Four columns of the same type from result sets from three database tables DEMO\_JOIN1, DEMO\_JOIN2 and DEMO\_JOIN3 are combined to make multiple SELECT statements using [UNION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapunion.htm). The DDIC database tables are filled in the static constructor.

-   The first statement shows the default behavior with addition DISTINCT. No rows are inserted from DDIC database table DEMO\_JOIN2 and one row is not inserted from DDIC database table DEMO\_JOIN3 because these rows already exist.

-   The second statement shows the behavior with addition ALL. All the rows from the three result sets are combined into one result set without removing any rows.

-   The third statement contains addition ALL in the first UNION and contains DISTINCT in the second union. Addition DISTINCT deletes all duplicate rows, including the rows created using addition ALL. Therefore the result is the same as in the first statement.

-   The fourth statement is the same as the third - except that parentheses have been inserted here. First, the parentheses are evaluated. Addition DISTINCT now takes effect in the parentheses and removes the first row from DEMO\_JOIN3. Afterwards the result set of the parentheses is completely inserted into the result set of DEMO\_JOIN1.

-   The fifth statement contains addition DISTINCT in the first UNION and contains ALL in the second union. In the first union, no rows are taken from DEMO\_JOIN2 because all the rows already exist. Next, all the rows are inserted from DEMO\_JOIN3.

-   The sixth statement is the same as the fifth - except that parentheses have been inserted here. Once the parentheses have been evaluated, the corresponding result set contains all rows from DEMO\_JOIN2 and DEMO\_JOIN3. In the union with rows from DEMO\_JOIN1, all duplicate rows are removed using DISTINCT; the result is the same as with the first statement.