  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Open SQL](javascript:call_link\('abenopensql.htm'\)) → 

Open SQL - Performance Notes

The performance of a program is often determined by the efficiency of its database reads. In a client/server environment, each database read places a load on both the database system and the connection between the database system and the application server. This load must be kept as low as possible if programs are to demonstrate a good level of performance.

Generally speaking, the following rules must be followed. The overall performance of a program is related to the data being edited, any evaluations required, and the database system itself, which means that a different combination of rules and priorities can apply from case to case.

-   Keep the number of hits low

The set of rows selected should be kept as small as possible by using specific conditions to restrict the set to those rows actually needed. Superfluous rows should never be transported from the database system to the application server and then evaluated there.

-   Keep the data volume low

The volume of data transported should always be restricted to the columns required. The columns can be specified explicitly or an appropriate view can be used. Furthermore, [aggregate expressions](javascript:call_link\('abenaggregate_expression_glosry.htm'\) "Glossary Entry") can be combined with appropriately grouped data or [SQL expressions](javascript:call_link\('abensql_expression_glosry.htm'\) "Glossary Entry") to reduce the volume of data, since here the data is aggregated before the transport in the database system.

-   Keep the number of reads low

To keep the number of database reads low, mass operations should always be used instead of single operations. More specifically, Open SQL statements should not be used within loops. Instead, joins, views, or subqueries can be used when reading multiple database tables.

-   Use local buffers

The same data should be not be read more than once. Saving database tables to the local buffer in [table buffering](javascript:call_link\('abensap_buffering_glosry.htm'\) "Glossary Entry") (and also saving prepared data in [Shared Objects](javascript:call_link\('abenshared_objects_glosry.htm'\) "Glossary Entry")) can produce significant time savings, since it takes much longer for the application server to read the database system than a locally buffered table. Database tables should always be buffered if they are read frequently and modified rarely. If the same data is to be sorted multiple times in different orders, the data should be sorted in the ABAP program.

-   Efficient search using indexes

In all cases where [secondary indexes](javascript:call_link\('abenddic_database_tables_index.htm'\)) of database tables improve selection performance, these indexes should be created and used.

Bad Example

This example uses a SELECT statement in a SELECT loop to add values from a different database table to the work area here. An internal table is filled with the work area, row by row.

SELECT carrid, CAST( ' ' AS CHAR( 20 ) ) AS carrname,
       connid, cityfrom, cityto
       FROM spfli
       ORDER BY carrid, connid, cityfrom, cityto
       INTO @DATA(wa).
  SELECT SINGLE carrname
         FROM scarr
         WHERE carrid = @wa-carrid
         INTO (@wa-carrname).
  DATA itab LIKE TABLE OF wa WITH EMPTY KEY.
  itab = VALUE #( BASE itab ( wa ) ).
ENDSELECT.

Good Example

This example uses a join expression to fill an internal table directly. The result is the same as in the previous example. The program DEMO\_OPEN\_SQL\_PERFO compares the runtimes of both access methods. The "good" example is generally far quicker than the "bad" example.

SELECT p~carrid, c~carrname, p~connid, p~cityfrom, p~cityto
       FROM spfli AS p
          LEFT OUTER JOIN scarr AS c
            ON p~carrid = c~carrid
       ORDER BY p~carrid, p~connid, p~cityfrom, p~cityto
       INTO TABLE @DATA(itab).