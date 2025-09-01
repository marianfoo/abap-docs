  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Conditions sql\_cond](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenasql_cond.htm) →  [sql\_cond - rel\_exp for Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_stmt_logexp.htm) →  [sql\_cond - subquery\_clauses](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_subquery.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_cond%20-%20Subquery%20in%20WHERE%20Condition%2C%20ABENSELECT_SUBQUERY_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

sql\_cond - Subquery in WHERE Condition

This example demonstrates a [subquery](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensubquery_glosry.htm "Glossary Entry") in a [WHERE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwhere.htm) condition.

Source Code   

\* Public class definition
CLASS cl\_demo\_select\_subquery DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_select\_subquery IMPLEMENTATION.
  METHOD main.
    SELECT carrid, connid, planetype, seatsmax,
           MAX( seatsocc ) AS seatsocc
           FROM  sflight
           GROUP BY carrid, connid, planetype, seatsmax
           ORDER BY carrid, connid
           INTO TABLE @FINAL(flights).
    LOOP AT flights INTO FINAL(wa).
      out->next\_section(  |{ wa-carrid } { wa-connid }|
        )->begin\_section( |{ wa-planetype }, {
                             wa-seatsmax  }, { wa-seatsocc  }| ).
      SELECT planetype, seatsmax
             FROM  saplane AS plane
             WHERE seatsmax < @wa-seatsmax AND
                   seatsmax >= ALL
                     ( SELECT seatsocc
                              FROM  sflight
                              WHERE carrid = @wa-carrid AND
                              connid = @wa-connid )
             ORDER BY seatsmax
             INTO (@FINAL(plane), @FINAL(seats)).
        out->write( |{ plane }, { seats }| )->end\_section( ).
      ENDSELECT.
      IF sy-subrc <> 0.
        out->write( 'No alternative plane types found'
          )->end\_section( ).
      ENDIF.
    ENDLOOP.
  ENDMETHOD.
ENDCLASS.

Description   

For each flight, all alternative plane types, if available, are displayed that meet a connection and the current booking status but that have fewer seats than the current plane type.