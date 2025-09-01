  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) →  [OPEN CURSOR](javascript:call_link\('abapopen_cursor.htm'\)) → 

OPEN CURSOR, Read Data Using Cursor

The example shows how to read data using the cursor.

Source Code

REPORT demo\_select\_cursor.
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
DATA(out) = cl\_demo\_output=>new( ).
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
out->display( ).

Description

Opens two cursors for the tables SPFLI and SFLIGHT. Since both tables are associated using a foreign key dependency, a nested loop can be defined across the tables by sorting the selection by the primary key. The system then reads the data of the inner loop depending on the data of the outer loop. This way of programming is more efficient than using nested SELECT loops, since the cursor for the inner loop does not need to be reset again and again. In a group level change in the inner loop, the system buffers the data read until the next loop pass since it is not possible to reset the cursor.