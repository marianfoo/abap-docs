---
title: "Source Code"
description: |
  REPORT demo_select_subquery. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. SELECT carrid, connid, planetype, seatsmax, MAX( seatsocc ) AS seatsocc FROM  sflight GROUP BY carrid, connid, planetype, seatsmax ORDER BY carrid, connid INTO
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_subquery_abexa.htm"
abapFile: "abenselect_subquery_abexa.htm"
keywords: ["select", "loop", "do", "if", "try", "method", "class", "data", "types", "abenselect", "subquery", "abexa"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_operands.htm) →  [ABAP SQL - SQL Conditions sql\_cond](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenasql_cond.htm) →  [sql\_cond - rel\_exp for Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenosql_stmt_logexp.htm) →  [sql\_cond - subquery\_clauses](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwhere_logexp_subquery.htm) → 

sql\_cond - Subquery in WHERE Condition

This example demonstrates a [subquery](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensubquery_glosry.htm "Glossary Entry") in a [WHERE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwhere.htm) condition.

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

For each flight, all alternative plane types, if available, are displayed that meet a connection and the current booking status but that have fewer seats than the current plane type.