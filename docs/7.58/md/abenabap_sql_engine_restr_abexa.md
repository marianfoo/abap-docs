---
title: "ABAP SQL Engine, Restrictions"
description: |
  This example demonstrates the access to internal tables in the statement WITH(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwith.htm). Source Code  Public class definition CLASS cl_demo_abap_sql_with_itab DEFINITION PUBLIC INHERITING FROM cl_demo_classrun CREATE PUBLIC .
version: "7.58"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_engine_restr_abexa.htm"
abapFile: "abenabap_sql_engine_restr_abexa.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "internal-table", "abenabap", "sql", "engine", "restr", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Overview](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_oview.htm) →  [ABAP SQL - ABAP SQL Engine](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_engine.htm) →  [ABAP SQL Engine, Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_engine_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20Engine%2C%20Restrictions%2C%20ABENABAP_SQL_ENGINE_RESTR_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP SQL Engine, Restrictions

This example demonstrates the access to internal tables in the statement [WITH](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwith.htm).

Source Code   

\* Public class definition
CLASS cl\_demo\_abap\_sql\_with\_itab DEFINITION
  PUBLIC
  INHERITING FROM cl\_demo\_classrun
  CREATE PUBLIC .
  PUBLIC SECTION.
    METHODS main
      REDEFINITION .
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_abap\_sql\_with\_itab IMPLEMENTATION.
  METHOD main.
    DATA:
      from\_id TYPE spfli-carrid VALUE 'AA',
      to\_id   TYPE spfli-carrid VALUE 'UA'.
    SELECT \* FROM spfli   INTO TABLE @FINAL(spfli\_tab).
    SELECT \* FROM scarr   INTO TABLE @FINAL(scarr\_tab).
    SELECT \* FROM sflight INTO TABLE @FINAL(sflight\_tab).
    "Access to database tables
    WITH
      +connections AS (
        SELECT spfli~carrid, carrname, connid, cityfrom, cityto
               FROM spfli
               INNER JOIN scarr
                 ON scarr~carrid = spfli~carrid
               WHERE spfli~carrid BETWEEN @from\_id AND @to\_id ),
      +sum\_seats AS (
        SELECT carrid, connid, SUM( seatsocc ) AS sum\_seats
               FROM sflight
               WHERE carrid BETWEEN @from\_id AND @to\_id
               GROUP BY carrid, connid ),
      +result( name, connection, departure, arrival, occupied ) AS (
        SELECT carrname, c~connid, cityfrom, cityto, sum\_seats
               FROM +connections AS c
                 INNER JOIN +sum\_seats AS s
                   ON c~carrid = s~carrid AND
                      c~connid = s~connid )
      SELECT \*
             FROM +result
             ORDER BY name, connection
             INTO TABLE @FINAL(result1).
    "The following accesses must be processed on the database
    "because of subqueries and aggregate function SUM.
    "Only one internal table can be accessed and transported to the DB.
    WITH
      +connections AS (
        SELECT spfli~carrid, carrname, connid, cityfrom, cityto
               FROM @spfli\_tab AS spfli  "<--- internal table
               INNER JOIN scarr
                 ON scarr~carrid = spfli~carrid
               WHERE spfli~carrid BETWEEN @from\_id AND @to\_id ),
      +sum\_seats AS (
        SELECT carrid, connid, SUM( seatsocc ) AS sum\_seats
               FROM sflight
               WHERE carrid BETWEEN @from\_id AND @to\_id
               GROUP BY carrid, connid ),
      +result( name, connection, departure, arrival, occupied ) AS (
        SELECT carrname, c~connid, cityfrom, cityto, sum\_seats
               FROM +connections AS c
                 INNER JOIN +sum\_seats AS s
                   ON c~carrid = s~carrid AND
                      c~connid = s~connid )
      SELECT \*
             FROM +result
             ORDER BY name, connection
             INTO TABLE @FINAL(result2).
    ASSERT result2 = result1.
    WITH
      +connections AS (
        SELECT spfli~carrid, carrname, connid, cityfrom, cityto
               FROM spfli
               INNER JOIN @scarr\_tab AS scarr "<--- internal table
                 ON scarr~carrid = spfli~carrid
               WHERE spfli~carrid BETWEEN @from\_id AND @to\_id ),
      +sum\_seats AS (
        SELECT carrid, connid, SUM( seatsocc ) AS sum\_seats
               FROM sflight
               WHERE carrid BETWEEN @from\_id AND @to\_id
               GROUP BY carrid, connid ),
      +result( name, connection, departure, arrival, occupied ) AS (
        SELECT carrname, c~connid, cityfrom, cityto, sum\_seats
               FROM +connections AS c
                 INNER JOIN +sum\_seats AS s
                   ON c~carrid = s~carrid AND
                      c~connid = s~connid )
      SELECT \*
             FROM +result
             ORDER BY name, connection
             INTO TABLE @FINAL(result3).
    ASSERT result3 = result1.
    WITH
      +connections AS (
        SELECT spfli~carrid, carrname, connid, cityfrom, cityto
               FROM spfli
               INNER JOIN scarr
                 ON scarr~carrid = spfli~carrid
               WHERE spfli~carrid BETWEEN @from\_id AND @to\_id ),
      +sum\_seats AS (
        SELECT carrid, connid, SUM( seatsocc ) AS sum\_seats
               FROM @sflight\_tab AS sflight "<--- internal table
               WHERE carrid BETWEEN @from\_id AND @to\_id
               GROUP BY carrid, connid ),
      +result( name, connection, departure, arrival, occupied ) AS (
        SELECT carrname, c~connid, cityfrom, cityto, sum\_seats
               FROM +connections AS c
                 INNER JOIN +sum\_seats AS s
                   ON c~carrid = s~carrid AND
                      c~connid = s~connid )
      SELECT \*
             FROM +result
             ORDER BY name, connection
             INTO TABLE @FINAL(result4).
    ASSERT result4 = result1.
\*    Not possible, since multiple tables cannot be transported to DB
\*    WITH
\*      +connections AS (
\*        SELECT spfli~carrid, carrname, connid, cityfrom, cityto
\*               FROM @spfli\_tab as spfli
\*               INNER JOIN @scarr\_tab as scarr
\*                 ON scarr~carrid = spfli~carrid
\*               WHERE spfli~carrid BETWEEN @from\_id AND @to\_id ),
\*      +sum\_seats AS (
\*        SELECT carrid, connid, SUM( seatsocc ) AS sum\_seats
\*               FROM @sflight\_tab AS sflight
\*               WHERE carrid BETWEEN @from\_id AND @to\_id
\*               GROUP BY carrid, connid ),
\*      +result( name, connection, departure, arrival, occupied ) AS (
\*        SELECT carrname, c~connid, cityfrom, cityto, sum\_seats
\*               FROM +connections AS c
\*                 INNER JOIN +sum\_seats AS s
\*                   ON c~carrid = s~carrid AND
\*                      c~connid = s~connid )
\*      SELECT \*
\*             FROM +result
\*             ORDER BY name, connection
\*             INTO TABLE @FINAL(result5).
\*
\*    ASSERT result5 = result1.
    out->write(  'Success' ).
  ENDMETHOD.
ENDCLASS.

Description   

Behind [WITH](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwith.htm), [common table expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencommon_table_expression_glosry.htm "Glossary Entry") are defined, each accessing a different data source. Since the aggregate function SUM cannot be processed by the [ABAP SQL engine](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_engine_glosry.htm "Glossary Entry"), the WITH statement must be processed on the database. Since only one internal table can be transported to the database for each ABAP SQL statement, access to only one internal table is possible in each WITH statement. The last WITH statement accessing three internal tables is not allowed.