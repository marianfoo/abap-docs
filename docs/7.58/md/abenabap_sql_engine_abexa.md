  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Overview](javascript:call_link\('abenabap_sql_oview.htm'\)) →  [ABAP SQL - ABAP SQL Engine](javascript:call_link\('abenabap_sql_engine.htm'\)) →  [ABAP SQL Engine, Examples](javascript:call_link\('abenabap_sql_engine_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20Engine%2C%20Multiple%20Internal%20Tables%2C%20ABENABAP_SQL_ENGINE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20imp
rovement:)

ABAP SQL Engine, Multiple Internal Tables

This example demonstrates the access to multiple internal tables with the ABAP SQL engine.

Source Code   

\* Public class definition
CLASS cl\_demo\_abap\_sql\_engine DEFINITION
  PUBLIC
  INHERITING FROM cl\_demo\_classrun
  CREATE PUBLIC .
  PUBLIC SECTION.
    METHODS main
      REDEFINITION .
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_abap\_sql\_engine IMPLEMENTATION.
  METHOD main.
    SELECT \* FROM scarr   INTO TABLE @FINAL(scarr\_tab).
    SELECT \* FROM spfli   INTO TABLE @FINAL(spfli\_tab).
    WITH
      +cte AS ( SELECT
                  FROM scarr
                  FIELDS carrid )
    SELECT
      FROM +cte AS scarr
        INNER JOIN spfli
          ON scarr~carrid = spfli~carrid
      FIELDS
        scarr~carrid,
        spfli~connid
      ORDER BY scarr~carrid, spfli~connid
      INTO TABLE @FINAL(result1).
    WITH
      +cte AS ( SELECT
                  FROM @scarr\_tab AS scarr
                  FIELDS carrid )
      SELECT
        FROM +cte AS scarr
        INNER JOIN @spfli\_tab AS spfli
          ON scarr~carrid = spfli~carrid
      FIELDS
        scarr~carrid,
        spfli~connid
      ORDER BY scarr~carrid, spfli~connid
      INTO TABLE @FINAL(result2).
    ASSERT result1 = result2.
    out->write( 'Success' ).
  ENDMETHOD.
ENDCLASS.

Description   

The example shows that reading from database tables and reading from internal tables with the same content yield the same results. While the database tables are accessed on the database, the WITH statement for the internal tables can be processed on the AS ABAP since none of the restrictions listed under [ABAP SQL Engine, Restrictions](javascript:call_link\('abensql_engine_restr.htm'\)) occur.