---
title: "WITH, Common Table Expressions"
description: |
  This example demonstrates how common table expressions are used in the statement WITH(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwith.htm). Source Code REPORT demo_cte. CLASS demo DEFINITION. PUBLIC SECTION. TYPES: BEGIN OF struct, carrname TYPE scarr-carrname, connid   TYPE s
version: "7.55"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwith_cte_abexa.htm"
abapFile: "abenwith_cte_abexa.htm"
keywords: ["select", "do", "method", "class", "data", "types", "abenwith", "cte", "abexa"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_reading.htm) →  [WITH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwith.htm) →  [WITH, Examples](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwith_abexas.htm) → 

WITH, Common Table Expressions

This example demonstrates how common table expressions are used in the statement [WITH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwith.htm).

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

A common table expression +conns creates a table of flight connections. A further expression, +cnts, determines the number of entries in the result set of +conns. The closing main query combines the result sets of both common table expressions using a [cross join](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_join.htm). This makes available the number of entries in every line of the result set of the WITH statement. The common table expression +conns is used twice in the WITH statement.