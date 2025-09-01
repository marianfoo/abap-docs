  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [ABAP SQL - Conditions sql\_cond](javascript:call_link\('abenopen_sql_cond.htm'\)) →  [sql\_cond - rel\_exp for Statements](javascript:call_link\('abenwhere_logexp.htm'\)) →  [sql\_cond - subquery\_clauses](javascript:call_link\('abenwhere_logexp_subquery.htm'\)) → 

Subquery in WHERE Condition

This example demonstrates a [subquery](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry") in a [WHERE](javascript:call_link\('abapwhere.htm'\)) condition.

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
           INTO TABLE @DATA(flights).
    DATA(out) = cl\_demo\_output=>new( ).
    LOOP AT flights INTO DATA(wa).
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
             INTO (@DATA(plane), @DATA(seats)).
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

For each flight, all alternative plane types are displayed that meet a connection and the current booking status but that have fewer seats than the current plane type.