  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Conditions sql\_cond](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenasql_cond.htm) →  [sql\_cond - rel\_exp for Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_stmt_logexp.htm) →  [sql\_cond - subquery\_clauses](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwhere_logexp_subquery.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: sql_cond - Subquery in WHERE Condition, ABENSELECT_SUBQUERY_ABEXA, 757%0D%0A%0D%0AErr
or:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

sql\_cond - Subquery in WHERE Condition

This example demonstrates a [subquery](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensubquery_glosry.htm "Glossary Entry") in a [WHERE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwhere.htm) condition.

Source Code   

REPORT demo\_select\_subquery.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    SELECT carrid, connid, planetype, seatsmax,
           MAX( seatsocc ) AS seatsocc
           FROM  sflight
           GROUP BY carrid, connid, planetype, seatsmax
           ORDER BY carrid, connid
           INTO TABLE @FINAL(flights).
    FINAL(out) = cl\_demo\_output=>new( ).
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
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

For each flight, all alternative plane types, if available, are displayed that meet a connection and the current booking status but that have fewer seats than the current plane type.