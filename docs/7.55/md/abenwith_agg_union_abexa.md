---
title: "WITH, Aggregation for Join Set"
description: |
  This example demonstrates how to use WITH(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwith.htm) for an aggregation. Source Code REPORT demo_select_union_sum_cte. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwith_agg_union_abexa.htm"
abapFile: "abenwith_agg_union_abexa.htm"
keywords: ["select", "do", "try", "method", "class", "data", "abenwith", "agg", "union", "abexa"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_reading.htm) →  [WITH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwith.htm) →  [WITH, Examples](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwith_abexas.htm) → 

WITH, Aggregation for Join Set

This example demonstrates how to use [WITH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwith.htm) for an aggregation.

Source Code

REPORT demo\_select\_union\_sum\_cte.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA carrid TYPE sflight-carrid VALUE 'AA'.
    cl\_demo\_input=>request( CHANGING field = carrid ).
    WITH +agg AS (
      SELECT carrid,
             connid,
             CAST( '00000000' AS DATS ) AS fldate,
             SUM( seatsocc ) AS seatsocc
             FROM sflight
             WHERE carrid = @( to\_upper( carrid ) )
             GROUP BY carrid, connid )
      SELECT ' ' AS mark, carrid, connid, fldate, seatsocc
             FROM sflight
             WHERE carrid = @( to\_upper( carrid ) )
             UNION SELECT 'X' AS mark,
                          carrid, connid, fldate, seatsocc
                          FROM +agg
             ORDER BY carrid, connid, mark, fldate, seatsocc
             INTO TABLE @DATA(result).
    cl\_demo\_output=>display( result ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example has the same result as the executable example for a [union with a global temporary table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_union_sum_gtt_abexa.htm). The source code is almost identical. Here the global temporary table demo\_sflight\_agg has been replaced by a [common table expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencommon_table_expression_glosry.htm "Glossary Entry") +agg and both SELECT statements are part of a WITH statement.