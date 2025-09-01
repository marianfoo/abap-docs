  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_reading.htm) →  [UNION, INTERSECT, EXCEPT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapunion.htm) →  [UNION, Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenunion_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECT%2C%20Union%20with%20Global%20Temporary%20Table%2C%20ABENSELECT_UNION_SUM_GTT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%
20improvement:)

SELECT, Union with Global Temporary Table

This example demonstrates a union across a table and a global temporary table (GTT).

Source Code   

\* Public class definition
CLASS cl\_demo\_select\_union\_sum\_gtt DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_select\_union\_sum\_gtt IMPLEMENTATION.
  METHOD main.
    DATA carrid TYPE sflight-carrid VALUE 'AA'.
    cl\_demo\_input=>new( )->request( CHANGING field = carrid ).
    INSERT demo\_sflight\_agg FROM (
    SELECT carrid,
           connid,
           CAST( '00000000' AS DATS ) AS fldate,
           SUM( seatsocc ) AS seatsocc
           FROM sflight
           WHERE carrid = @( to\_upper( carrid ) )
           GROUP BY carrid, connid ).
    SELECT ' ' AS mark, carrid, connid, fldate, seatsocc
           FROM sflight
           WHERE carrid = @( to\_upper( carrid ) )
           UNION SELECT 'X' AS mark,
                        carrid, connid, fldate, seatsocc
                        FROM demo\_sflight\_agg
           ORDER BY carrid, connid, mark, fldate, seatsocc
           INTO TABLE @FINAL(result).
    DELETE FROM demo\_sflight\_agg.
    out->write( result ).
  ENDMETHOD.
ENDCLASS.

Description   

This example has the same result as the executable example for a [union with aggregate expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_union_sum_abexa.htm). Here, however, the SELECT statement is split into two ABAP SQL statements for demonstration purposes:

-   The aggregation is performed in the [subquery](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensubquery_glosry.htm "Glossary Entry") of an [INSERT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinsert_dbtab.htm) statement whose result set is written to a [global temporary table (GTT)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_gtt.htm).
-   [UNION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapunion.htm) is used to create the union of the result set of a SELECT statement on the table SFLIGHT and a SELECT statement on the GTT.

The GTT must be cleared explicitly before the end of the execution to prevent the runtime error COMMIT\_GTT\_ERROR in the next implicit database commit.

Hint

See also the corresponding executable [example](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwith_agg_union_abexa.htm) for [common table expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencommon_table_expression_glosry.htm "Glossary Entry").