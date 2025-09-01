  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Open SQL](javascript:call_link\('abenopensql.htm'\)) →  [Open SQL - Reads](javascript:call_link\('abenopen_sql_reading.htm'\)) →  [UNION](javascript:call_link\('abapunion.htm'\)) →  [UNION Examples](javascript:call_link\('abenunion_abexas.htm'\)) → 

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

This example has the same result as the executable example for a [union with aggregate expression](javascript:call_link\('abenselect_union_sum_abexa.htm'\)). Here, however, the SELECT statement is split into two Open SQL statements for demonstration purposes:

-   The aggregation is performed in the [subquery](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry") of an [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)) statement whose results set is written to a [global temporary table (GTT)](javascript:call_link\('abenddic_database_tables_gtt.htm'\)).

-   [UNION](javascript:call_link\('abapunion.htm'\)) is used to create the union of the results set of a SELECT statement on the table SFLIGHT and a SELECT statement on the GTT.

The GTT must be cleared explicitly before the end of the program to prevent the runtime error COMMIT\_GTT\_ERROR in the next implicit database commit.

Note

See also the corresponding executable [example](javascript:call_link\('abenwith_agg_union_abexa.htm'\)) for [common table expressions](javascript:call_link\('abencommon_table_expression_glosry.htm'\) "Glossary Entry").