---
title: "WITH, Common Table Expressions"
description: |
  This example demonstrates how common table expressions are used in the statement WITH(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwith.htm). Source Code REPORT demo_cte. CLASS demo DEFINITION. PUBLIC SECTION. TYPES: BEGIN OF struct, carrname TYPE scarr-carrname, connid   TYPE s
version: "7.52"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwith_cte_abexa.htm"
abapFile: "abenwith_cte_abexa.htm"
keywords: ["select", "do", "method", "class", "data", "types", "abenwith", "cte", "abexa"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql.htm) →  [Open SQL - Reads](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_reading.htm) →  [WITH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwith.htm) →  [WITH Examples](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwith_abexas.htm) → 

WITH, Common Table Expressions

This example demonstrates how common table expressions are used in the statement [WITH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwith.htm).

Source Code

REPORT demo\_cte.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    TYPES: BEGIN OF struct,
             carrname TYPE scarr-carrname,
             connid   TYPE spfli-connid,
             cityfrom TYPE spfli-cityfrom,
             cityto   TYPE spfli-cityto,
             cnt      TYPE int8,
           END OF struct.
    CLASS-DATA itab TYPE TABLE OF struct WITH EMPTY KEY.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA carrid TYPE spfli-carrid VALUE 'LH'.
    cl\_demo\_input=>request( CHANGING field = carrid ).
    carrid = to\_upper( carrid ).
    WITH
      +conns AS (
        SELECT carrname, connid, cityfrom, cityto
              FROM spfli
                JOIN scarr ON spfli~carrid = scarr~carrid
              WHERE spfli~carrid = @carrid ),
      +cnts AS (
        SELECT COUNT(\*) AS cnt
               FROM +conns )
      SELECT \*
             FROM +cnts
               CROSS JOIN +conns
             ORDER BY carrname, connid
             INTO CORRESPONDING FIELDS of TABLE @itab.
    cl\_demo\_output=>display( itab ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

A common table expression +conns creates a table of flight connections. A further expression, +cnts, determines the number of entries in the results set of +conns. The closing main query combines the results sets of both common table expressions using a [cross join](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_join.htm). This makes available the number of entries in every row of the results set of the WITH statement. The common table expression +conns is used twice in the WITH statement.