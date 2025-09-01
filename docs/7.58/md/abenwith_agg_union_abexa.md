---
title: "WITH, Aggregation for Join Set"
description: |
  This example demonstrates how to use WITH(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwith.htm) for an aggregation. Source Code  Public class definition CLASS cl_demo_select_union_sum_cte DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION.
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwith_agg_union_abexa.htm"
abapFile: "abenwith_agg_union_abexa.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "abenwith", "agg", "union", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_reading.htm) →  [WITH](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwith.htm) →  [WITH, Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwith_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20WITH%2C%20Aggregation%20for%20Join%20Set%2C%20ABENWITH_AGG_UNION_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

WITH, Aggregation for Join Set

This example demonstrates how to use [WITH](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwith.htm) for an aggregation.

Source Code   

\* Public class definition
CLASS cl\_demo\_select\_union\_sum\_cte DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_select\_union\_sum\_cte IMPLEMENTATION.
  METHOD main.
    DATA carrid TYPE sflight-carrid VALUE 'AA'.
    cl\_demo\_input=>new( )->request( CHANGING field = carrid ).
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
             INTO TABLE @FINAL(result).
    out->write( result ).
  ENDMETHOD.
ENDCLASS.

Description   

This example has the same result as the executable example for a [union with a global temporary table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_union_sum_gtt_abexa.htm). The source code is almost identical. Here the global temporary table demo\_sflight\_agg has been replaced by a [common table expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencommon_table_expression_glosry.htm "Glossary Entry") +agg and both SELECT statements are part of a WITH statement.