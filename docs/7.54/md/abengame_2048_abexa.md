---
title: "Source Code"
description: |
  PROGRAM demo_game_2048_740. CLASS game DEFINITION. PUBLIC SECTION. METHODS: constructor, display. PRIVATE SECTION. TYPES: BEGIN OF t_cell, value TYPE i, id    TYPE string, born  TYPE i, END OF t_cell, t_cells  TYPE STANDARD TABLE OF t_cell  WITH EMPTY KEY, t_field  TYPE STANDARD TABLE OF t_
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengame_2048_abexa.htm"
abapFile: "abengame_2048_abexa.htm"
keywords: ["select", "loop", "do", "while", "if", "try", "method", "class", "data", "types", "abengame", "2048", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_statements.htm) →  [Operators and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperators_expressions.htm) →  [Examples of Expression-Oriented Programming](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexpressions_abexas.htm) → 

2048 Game

Expression-oriented implementation of a 2048 game.

Source Code

PROGRAM demo\_game\_2048\_740.
CLASS game DEFINITION.
  PUBLIC SECTION.
    METHODS:
      constructor,
      display.
  PRIVATE SECTION.
    TYPES:
      BEGIN OF t\_cell,
        value TYPE i,
        id    TYPE string,
        born  TYPE i,
      END OF t\_cell,
      t\_cells  TYPE STANDARD TABLE OF t\_cell  WITH EMPTY KEY,
      t\_field  TYPE STANDARD TABLE OF t\_cells WITH EMPTY KEY,
      t\_ref    TYPE REF TO t\_cell,
      t\_refs   TYPE STANDARD TABLE OF t\_ref WITH EMPTY KEY.
    CONSTANTS tile\_colors TYPE string VALUE
      \`eee4da ede0c8 f2b179 f59563 f67c5f f65e3b \` &
      \`edcf72 f67c5f edc850 edc53f edc22e\` ##NO\_TEXT.
    DATA:
      mark\_new\_tiles TYPE abap\_bool,
      rnd     TYPE REF TO cl\_abap\_random\_int,
      field   TYPE t\_field,
      n       TYPE i,             " dimension of field
      nsq     TYPE i,             " n \* n
      target  TYPE i VALUE 2048,  " target value
      score   TYPE i,             " current score
      moves   TYPE i,             " # of moves
      header  TYPE string,        " HTML header string
      over    TYPE string,        " game-over message
      line    TYPE t\_refs.
    METHODS:
      at\_click FOR EVENT sapevent OF cl\_abap\_browser IMPORTING action,
      build\_line IMPORTING VALUE(direction) TYPE char1 VALUE(i) TYPE i,
      move\_lines IMPORTING VALUE(direction) TYPE char1
                 RETURNING VALUE(valid) TYPE abap\_bool,
      move\_line  RETURNING VALUE(valid) TYPE abap\_bool,
      new\_tiles  IMPORTING VALUE(factor) TYPE i DEFAULT 1,
      check\_game.
ENDCLASS.
CLASS game IMPLEMENTATION.
  METHOD constructor.
    DATA(size) = 4.
    cl\_demo\_input=>add\_field( CHANGING field = size ).
    cl\_demo\_input=>add\_field( CHANGING field = target ).
    cl\_demo\_input=>add\_field( EXPORTING text = 'Mark new tiles'
      as\_checkbox = 'X'  CHANGING field = mark\_new\_tiles ) ##NO\_TEXT.
    cl\_demo\_input=>request( ).
    n      = nmax( val1 = 3 val2 = nmin( val1 = size val2 = 8 ) ).
    nsq    = n \* n.
    " target tile value must be a power of 2, at least 8
    target = nmax( val1 = 8 val2 = target ).
    target = ipow( base = 2 exp = ceil( log( target ) / log( 2 ) ) ).
    rnd = cl\_abap\_random\_int=>create( seed = CONV i( sy-uzeit )
                                      min = 0  max = nsq - 1 ).
    field = VALUE #( FOR i = 1 UNTIL i > n
                     ( VALUE #( FOR j = 1 UNTIL j > n
                                ( id = |{ i }{ j }| born = -1 ) ) ) ).
    new\_tiles( 2 ).  " place initial tiles in field
    " build header with styles for tiles; cell/font sizes depend on n
    header = REDUCE string( ##NO\_TEXT
      LET  w = 360 / n IN
      INIT h =
        \`<html><head><style type="text/css">\` &
        \`.t0{background-color:#cbbdb0}\` &
        \`td{border:1px solid bbada0;color:#776e65\` &
        \`;text-align:center;vertical-align:center\` &
        \`;font-family:'Century Gothic',sans-serif;font-weight:bold\` &&
        |;width:{ w }px;height:{ w }px;font-size:{ w / 2 }px\\}|
      FOR i = 1 UNTIL i > 11
      NEXT h =
        |{ h }.t{ ipow( base = 2 exp = i ) }\\{| &
        |background-color:#{ segment( val   = tile\_colors
                                      index = i ) }| &
        |{ COND #( WHEN i >= 3  THEN \`;color:#f9f6f2\` ) }| &
        |{ COND #( WHEN i >= 10 THEN |;font-size:{ w / 4 }px|
                   WHEN i >= 7  THEN |;font-size:{ w / 3 }px| ) }\\}| ).
    header = header && ##NO\_TEXT
     \`div{text-align:center}</style><script type="text/javascript">\` &
     \`function okd(e)\` &
     \`{c=window.event.keyCode;window.location='sapevent:'+c;}\` &
     \`document.onkeydown = okd;</script></head> <body scroll=no \` &
     \`style="background-color:#bbada0;color:white;font-size:20pt">\`.
    SET HANDLER at\_click.
  ENDMETHOD.
  METHOD display.
    cl\_abap\_browser=>show\_html(
     title        = |Join the numbers and get to the { target } tile!|
     size         = cl\_abap\_browser=>small
     format       = cl\_abap\_browser=>portrait
     context\_menu = 'X'
     html\_string  =
       REDUCE string(
        INIT h = |{ header }<p align=right>Score { score }</p>| &
                 |<table align=center>|
        FOR  <cells> IN field
        NEXT h = h && |<tr>| &&
         REDUCE string(
          INIT k = \`\`
          FOR  <c> IN <cells>
          NEXT k = |{ k }<td class=t{ <c>-value }| &
                   |{ COND #( WHEN <c>-born = moves
                              THEN \` style="border-color:red"\` ) }| &
                   |>{ COND #( WHEN <c>-value = 0 THEN \`&nbsp;\`
                               ELSE <c>-value ) }</td>| )
         && \`</tr>\` )
       && \`</table>\` &&
       COND #( WHEN over = \`\`
                 THEN \`<div>Use arrow keys to join tiles</div>\`
                 ELSE |<br>{ over }| )
       && \`</body></html>\` ).
  ENDMETHOD.
  METHOD at\_click.
    DATA(direction) = SWITCH #( action  WHEN 37 THEN 'L'
                                        WHEN 38 THEN 'U'
                                        WHEN 39 THEN 'R'
                                        WHEN 40 THEN 'D' ).
    IF over <> \`\`.  " game is over; leave game with any non-arrow key
      IF direction IS INITIAL.
        cl\_abap\_browser=>close\_browser( ).
        LEAVE PROGRAM.
      ENDIF.
      RETURN.
    ENDIF.
    IF move\_lines( direction ).
       moves = moves + 1.
       new\_tiles( ).
       check\_game( ).
       display( ).
    ENDIF.
  ENDMETHOD.
  METHOD check\_game.
    CONSTANTS dirs TYPE char4 VALUE 'LRUD'.
    " find highest tile value and check if an empty cell exists
    DATA(fill) = REDUCE t\_cell(
      INIT m = VALUE #( )
      FOR  <cells> IN field
      FOR  <c>     IN <cells>
      NEXT m-value = nmax( val1 = m-value val2 = <c>-value )
           m-id    = COND #( WHEN <c>-value = 0 THEN \`!\` ELSE m-id ) ).
    " game is won if target value is reached
    IF fill-value >= target.
      over = |<div>Finished in { moves } moves!</div>|.
    ELSEIF fill-id <> \`!\`.
      " no empty cell -> check if stuck: try move in all 4 directions
      DO 4 TIMES.
        DATA(off) = sy-index - 1.
        DO n TIMES.
          build\_line( direction = dirs+off(1) i = sy-index ).
          LOOP AT line FROM 2 ASSIGNING FIELD-SYMBOL(<curr>).
            IF <curr>->value = line\[ sy-tabix - 1 \]->value.
              RETURN.  " found a possible move; game not over
            ENDIF.
          ENDLOOP.
        ENDDO.
      ENDDO.
      over = \`<div>\*\*\* Stuck  -  Game over \*\*\*</div>\`.
    ENDIF.
  ENDMETHOD.
  METHOD move\_lines.
    CHECK direction IS NOT INITIAL.
    DO n TIMES.
      build\_line( direction = direction i = sy-index ).
      valid = cmax( val1 = move\_line( ) val2 = valid ).
    ENDDO.
    CLEAR line.
  ENDMETHOD.
  METHOD build\_line.
    " build cell references to line i, starting at end (wrt direction)
    line = VALUE #(
      FOR j = n THEN j - 1 UNTIL j = 0  " j = n...1
      LET y = SWITCH i( direction
                WHEN 'L' OR 'R' THEN i
                WHEN 'D'        THEN j
                WHEN 'U'        THEN n + 1 - j )
          x = SWITCH i( direction
                WHEN 'U' OR 'D' THEN i
                WHEN 'R'        THEN j
                WHEN 'L'        THEN n + 1 - j )
      IN ( REF #( field\[ y \]\[ x \] ) ) ).
  ENDMETHOD.
  METHOD move\_line.
    DATA: idx TYPE i VALUE 1, next\_idx TYPE i VALUE 2.
    DATA(curr) = line\[ 1 \].
    WHILE next\_idx <= n.
      DATA(next) = line\[ next\_idx \].
      IF curr->value > 0.
        IF curr->value = next->value.
          curr->value = curr->value \* 2.  " join tiles
          next->value = 0.
          valid = abap\_true.
          score = score + curr->value.
          idx = idx + 1.  curr = line\[ idx \].  " proceed
        ELSEIF next->value > 0 OR next\_idx = n.
          idx = idx + 1.  curr = line\[ idx \].  " proceed
          next\_idx = idx.
        ENDIF.
      ELSEIF next->value <> 0.
        curr->value = next->value.  " shift tile to empty cell
        next->value = 0.
        valid = abap\_true.
      ENDIF.
      next\_idx = next\_idx + 1.
    ENDWHILE.
  ENDMETHOD.
  METHOD new\_tiles.
    " place 1 or more (for n>4) new tiles (\* 2 at start of game)
    DO nmax( val1 = n - 3 val2 = 1 ) \* factor TIMES.
      DATA(pos) = rnd->get\_next( ).
      DATA(attempts) = nsq.
      DO. " try to place new tile at this or next free position
        ASSIGN field\[ 1 + pos DIV n \]\[ 1 + pos MOD n \]
          TO FIELD-SYMBOL(<cell>).
        IF <cell>-value = 0.
          " free position found - tile value: 2 (likelihood 75%) or 4
          <cell>-value = COND #( WHEN rnd->get\_next( ) > nsq / 4
                                 THEN 2 ELSE 4 ).
          " remember when tile was born, to display it as 'new'
          <cell>-born = COND #( WHEN moves > 0 AND
                                     mark\_new\_tiles = abap\_true
                                THEN moves ELSE -1 ).
          EXIT.
        ENDIF.
        pos = ( pos + 1 ) MOD nsq.
        attempts = attempts - 1.
        IF attempts = 0.
          RETURN.
        ENDIF.
      ENDDO.
    ENDDO.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  NEW game( )->display( ).

Description

This example uses the implementation of a 2048 game to demonstrate expression-oriented ABAP programming (as introduced in Release 7.40). As a comparison, the program DEMO\_GAME\_2048\_700 shows the same function implemented without expressions, mainly using language elements from Release 7.00 only.

To play the game, use the arrow keys on the keyboard to move all tiles in one of the four directions.