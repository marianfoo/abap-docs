---
title: "SELECT, Union with Aggregate Expression"
description: |
  This example demonstrates how a union is created across a table using an aggregate expression. Source Code REPORT demo_select_union_sum. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA carrid TYPE sflight-carrid VALUE 'AA'. cl_dem
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_union_sum_abexa.htm"
abapFile: "abenselect_union_sum_abexa.htm"
keywords: ["select", "insert", "do", "case", "method", "class", "data", "abenselect", "union", "sum", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Reads](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_reading.htm) →  [UNION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapunion.htm) →  [UNION Examples](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenunion_abexas.htm) → 

SELECT, Union with Aggregate Expression

This example demonstrates how a union is created across a table using an aggregate expression.

Source Code

REPORT demo\_select\_union\_sum.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA carrid TYPE sflight-carrid VALUE 'AA'.
    cl\_demo\_input=>request( CHANGING field = carrid ).
    SELECT ' ' AS mark, carrid, connid, fldate, seatsocc
           FROM sflight
           WHERE carrid = @( to\_upper( carrid ) )
           UNION SELECT 'X' AS mark,
                        carrid,
                        connid,
                        "@( CONV d( '00000000' ) ) AS fldate,
                        CAST( '00000000' AS DATS ) AS fldate,
                        SUM( seatsocc ) AS seatsocc
                        FROM sflight
                        WHERE carrid = @( to\_upper( carrid ) )
                        GROUP BY carrid, connid
           ORDER BY carrid, connid, mark, fldate, seatsocc
           INTO TABLE @DATA(result).
    cl\_demo\_output=>display( result ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

[UNION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapunion.htm) is used to create the union of the results sets of two SELECT statements for the same database table. The first SELECT statement reads all flights for a carrier and the second SELECT statement aggregates the flights by connection (adding the number of occupied seats). A [CAST expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_cast.htm) is used to insert a column for the flight date fldate (from the first results set) with a suitable data type in the second results set. A comment indicates how this is also possible using a [host expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_host_expressions.htm) in this case. A further column mark is filled with literals to make realistic sorts possible. The full result contains the aggregated rows under the associated rows of the first results set and are flagged with "X".