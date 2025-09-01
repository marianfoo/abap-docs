  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_reading.htm) →  [UNION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapunion.htm) →  [UNION, Examples](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenunion_abexas.htm) → 

SELECT, Union with Global Temporary Table

This example demonstrates a union across a table and a global temporary table (GTT).

Source Code

REPORT demo\_select\_union\_sum\_gtt.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA carrid TYPE sflight-carrid VALUE 'AA'.
    cl\_demo\_input=>request( CHANGING field = carrid ).
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
           INTO TABLE @DATA(result).
    DELETE FROM demo\_sflight\_agg.
    cl\_demo\_output=>display( result ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example has the same result as the executable example for a [union with aggregate expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_union_sum_abexa.htm). Here, however, the SELECT statement is split into two ABAP SQL statements for demonstration purposes:

-   The aggregation is performed in the [subquery](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensubquery_glosry.htm "Glossary Entry") of an [INSERT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinsert_dbtab.htm) statement whose result set is written to a [global temporary table (GTT)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_gtt.htm).

-   [UNION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapunion.htm) is used to create the union of the result set of a SELECT statement on the table SFLIGHT and a SELECT statement on the GTT.

The GTT must be cleared explicitly before the end of the program to prevent the runtime error COMMIT\_GTT\_ERROR in the next implicit database commit.

Hint

See also the corresponding executable [example](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwith_agg_union_abexa.htm) for [common table expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencommon_table_expression_glosry.htm "Glossary Entry").