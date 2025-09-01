  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_clauses.htm) →  [SELECT, GROUP BY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapgroupby_clause.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECT%2C%20Grouping%20Sets%2C%20ABENSELECT_GROUPING_SETS_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SELECT, Grouping Sets

This example demonstrates the [GROUP BY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapgroupby_clause.htm) addition [GROUPING SETS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapgrouping_sets_clause.htm) of the statement [SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect.htm).

Source Code   

\* Public class definition
CLASS cl\_demo\_select\_grouping\_sets DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_select\_grouping\_sets IMPLEMENTATION.
  METHOD main.
    "Example for GROUPING SETS
    SELECT FROM sflight
           FIELDS carrid,
                  connid,
                  planetype,
                  SUM( seatsmax ) AS sum\_seatsmax
                  WHERE carrid = 'LH'
           GROUP BY GROUPING SETS ( ( carrid, planetype ),
                                    ( carrid, connid ) )
           ORDER BY connid, planetype
           INTO TABLE @FINAL(result\_grouping\_sets).
    "Example for UNION ALL
    SELECT FROM sflight
           FIELDS carrid,
                  @( VALUE sflight-connid( ) ) AS connid,
                  planetype,
                  SUM( seatsmax ) AS sum\_seatsmax
           WHERE carrid = 'LH'
           GROUP BY carrid, planetype
    UNION ALL
    SELECT FROM sflight
           FIELDS carrid,
                  connid,
                  @( VALUE sflight-planetype( ) ) AS planetype,
                  SUM( seatsmax ) AS sum\_seatsmax
           WHERE carrid = 'LH'
           GROUP BY carrid, connid
           ORDER BY carrid, connid, planetype, sum\_seatsmax
           INTO TABLE @FINAL(result\_union).
    ASSERT result\_union = result\_grouping\_sets.
    out->write( result\_grouping\_sets ).
  ENDMETHOD.
ENDCLASS.

Description   

For Lufthansa flights, this example calculates the sum of the maximum available seats depending on the plane type (column planetype) and the connection (column connid). Two grouping sets are defined, which contain either the plane type or the connection.

The example shows that SELECT statements that use [UNION ALL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapunion.htm) or GROUPING SETS are equivalent. The first [query](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenquery_glosry.htm "Glossary Entry") defines the grouping sets ( carrid, planetype ) and ( carrid, connid ) with a GROUP BY clause. The second query, on the other hand, specifies the same grouping sets using two GROUP BY clauses and merges them using UNION ALL.