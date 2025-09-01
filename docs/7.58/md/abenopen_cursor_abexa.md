---
title: "OPEN CURSOR, Read Data Using Cursor"
description: |
  The example shows how to read data using the cursor. Source Code  Public class definition CLASS cl_demo_select_cursor DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Public class implementation CLASS cl_demo_select_c
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenopen_cursor_abexa.htm"
abapFile: "abenopen_cursor_abexa.htm"
keywords: ["select", "loop", "do", "if", "method", "class", "data", "abenopen", "cursor", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_reading.htm) →  [OPEN CURSOR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapopen_cursor.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20OPEN%20CURSOR%2C%20Read%20Data%20Using%20Cursor%2C%20ABENOPEN_CURSOR_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

OPEN CURSOR, Read Data Using Cursor

The example shows how to read data using the cursor.

Source Code   

\* Public class definition
CLASS cl\_demo\_select\_cursor DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_select\_cursor IMPLEMENTATION.
  METHOD main.
    DATA: wa\_spfli        TYPE spfli,
          wa\_sflight      TYPE sflight,
          wa\_sflight\_back TYPE sflight.
    DATA: c1 TYPE cursor,
          c2 TYPE cursor.
    OPEN CURSOR @c1 FOR
      SELECT \*
        FROM spfli
        WHERE carrid = 'LH'
        ORDER BY PRIMARY KEY
        UP TO 3 ROWS.
    OPEN CURSOR @c2 FOR
      SELECT \*
             FROM sflight
             WHERE carrid = 'LH'
             ORDER BY PRIMARY KEY.
    DO.
      FETCH NEXT CURSOR @c1 INTO @wa\_spfli.
      IF sy-subrc NE 0.
        EXIT.
      ENDIF.
      out->begin\_section(
        |{ wa\_spfli-carrid } { wa\_spfli-connid }| ).
      DO.
        IF NOT wa\_sflight\_back IS INITIAL.
          wa\_sflight = wa\_sflight\_back.
          CLEAR wa\_sflight\_back.
        ELSE.
          FETCH NEXT CURSOR @c2 INTO @wa\_sflight.
          IF  sy-subrc <> 0.
            EXIT.
          ELSEIF wa\_sflight-carrid <> wa\_spfli-carrid
              OR wa\_sflight-connid <> wa\_spfli-connid.
            wa\_sflight\_back = wa\_sflight.
            EXIT.
          ENDIF.
        ENDIF.
        out->write(
         |{ wa\_sflight-carrid } {
            wa\_sflight-connid } {
            wa\_sflight-fldate }| ).
      ENDDO.
      out->end\_section( ).
    ENDDO.
    CLOSE CURSOR: @c1, @c2.
  ENDMETHOD.
ENDCLASS.

Description   

Opens two cursors for the tables SPFLI and SFLIGHT. Since both tables are associated using a foreign key dependency, a nested loop can be defined across the tables by sorting the selection by the primary key. The system then reads the data of the inner loop depending on the data of the outer loop. This way of programming is more efficient than using nested SELECT loops, since the cursor for the inner loop does not need to be reset again and again. In a group level change in the inner loop, the system buffers the data read until the next loop pass since it is not possible to reset the cursor.