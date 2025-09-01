  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) →  [ABAP SQL - Overview](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_oview.htm) →  [ABAP SQL - ABAP SQL Engine](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_engine.htm) →  [ABAP SQL Engine, Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_engine_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20Engine%2C%20Restriction%20to%20One%20Internal%20Table%2C%20ABENABAP_SQL_ENGINE_ITAB_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugg
estion%20for%20improvement:)

ABAP SQL Engine, Restriction to One Internal Table

This example demonstrates the access to one internal table in the statement [WITH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwith.htm).

Source Code   

\* Public class definition
CLASS cl\_demo\_abap\_sql\_with\_one\_itab DEFINITION
  PUBLIC
  INHERITING FROM cl\_demo\_classrun
  CREATE PUBLIC .
  PUBLIC SECTION.
    METHODS main
      REDEFINITION .
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_abap\_sql\_with\_one\_itab IMPLEMENTATION.
  METHOD main.
    DATA carrid TYPE spfli-carrid VALUE 'LH'.
    SELECT \* FROM spfli INTO TABLE @FINAL(spfli\_tab).
    WITH
      +cities AS (
        SELECT cityfrom AS city
               FROM spfli
               WHERE carrid = @carrid
        UNION DISTINCT
        SELECT cityto AS city
               FROM spfli
               WHERE carrid = @carrid )
      SELECT \*
             FROM sgeocity
             WHERE city IN ( SELECT city
                                    FROM +cities )
             INTO TABLE @FINAL(result1).
    "Error: Even the same internal table cam be accessed only once
\*    WITH
\*      +cities AS (
\*        SELECT cityfrom AS city
\*               FROM @spfli\_tab AS spfli  "<-- internal table
\*               WHERE carrid = @carrid
\*        UNION DISTINCT
\*        SELECT cityto AS city
\*               FROM @spfli\_tab AS spfli  "<-- internal table
\*               WHERE carrid = @carrid )
\*      SELECT \*
\*             FROM sgeocity
\*             WHERE city IN ( SELECT city
\*                                    FROM +cities )
\*             INTO TABLE @FINAL(result2).
\*
\*    ASSERT result2 = result1.
    "Workaround: Only one access to internal table in additional CTE
    WITH
     +spfli\_gtt AS ( SELECT carrid, cityfrom, cityto
                            FROM @spfli\_tab AS spfli "<-- internal table
                            WHERE carrid = @carrid ),
      +cities AS (
        SELECT cityfrom AS city
               FROM +spfli\_gtt AS spfli
        UNION DISTINCT
        SELECT cityto AS city
               FROM +spfli\_gtt AS spfli )
      SELECT \*
             FROM sgeocity
             WHERE city IN ( SELECT city
                                    FROM +cities )
             INTO TABLE @FINAL(result2).
    ASSERT result2 = result1.
    out->write(  'Success' ).
  ENDMETHOD.
ENDCLASS.

Description   

Because of the usage of UNION, the ABAP SQL statement [WITH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwith.htm) can be processed on the database only and it is not possible to address more than on internal table within the statement, even if it is the same statement: The second WITH statement gives a syntax error. As a workaround, the internal table is addressed only once in an additional [common table expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencommon_table_expression_glosry.htm "Glossary Entry") which than is used two times in the following CTE.