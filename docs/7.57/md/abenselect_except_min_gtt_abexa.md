---
title: "SELECT, Difference with Global Temporary Table"
description: |
  This example demonstrates a difference across a table and a global temporary table (GTT). Source Code REPORT demo_select_except_min_gtt. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA carrid TYPE sflight-carrid VALUE 'AA'. cl_de
version: "7.57"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_except_min_gtt_abexa.htm"
abapFile: "abenselect_except_min_gtt_abexa.htm"
keywords: ["select", "insert", "delete", "do", "if", "try", "method", "class", "data", "abenselect", "except", "min", "gtt", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_reading.htm) →  [UNION, INTERSECT, EXCEPT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapunion.htm) →  [EXCEPT, Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexcept_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SELECT, Difference with Global Temporary Table, ABENSELECT_EXCEPT_MIN_GTT_ABEXA, 757%
0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

SELECT, Difference with Global Temporary Table

This example demonstrates a difference across a table and a global temporary table (GTT).

Source Code   

REPORT demo\_select\_except\_min\_gtt.
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
           MIN( seatsocc ) AS seatsocc
           FROM sflight
           WHERE carrid = @( to\_upper( carrid ) )
           GROUP BY carrid, connid ).
    SELECT carrid, connid, seatsocc
           FROM sflight
           WHERE carrid = @( to\_upper( carrid ) )
           EXCEPT SELECT carrid, connid, seatsocc
                         FROM demo\_sflight\_agg
           ORDER BY carrid, connid, seatsocc
           INTO TABLE @FINAL(result).
    DELETE FROM demo\_sflight\_agg.
    cl\_demo\_output=>display( result ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

This example has the same result as the executable example for a [difference with aggregate expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_except_min_abexa.htm). Here, however, the SELECT statement is split into two ABAP SQL statements for demonstration purposes:

-   The aggregation is performed in the [subquery](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensubquery_glosry.htm "Glossary Entry") of an [INSERT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_dbtab.htm) statement whose result set is written to a [global temporary table (GTT)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_gtt.htm).
-   [EXCEPT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapunion.htm) is used to create the difference of the result set of a SELECT statement on the table SFLIGHT and a SELECT statement on the GTT.

The GTT must be cleared explicitly before the end of the program to prevent the runtime error COMMIT\_GTT\_ERROR in the next implicit database commit.