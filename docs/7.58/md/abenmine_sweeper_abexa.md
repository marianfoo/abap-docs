  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Functions and Expressions in Operand Positions](javascript:call_link\('abenoperands_expressions.htm'\)) →  [Examples of Expression-Oriented Programming](javascript:call_link\('abenexpressions_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Expression-Orientation%20-%20Minesweeper%20Game%2C%20ABENMINE_SWEEPER_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

Expression-Orientation - Minesweeper Game

Expression-oriented implementation of a Minesweeper game.

Source Code   

\* Public class definition
CLASS cl\_demo\_minesweeper\_740 DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC FINAL.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* CCIMP
CLASS game DEFINITION.
  PUBLIC SECTION.
    METHODS:
    constructor,
    board.
  PRIVATE SECTION.
    TYPES:
    BEGIN OF t\_cell,
    bomb TYPE abap\_bool, " cell contains bomb y/n
    bombs TYPE i, " # of neighboring bombs
    state TYPE char1, " \[h\]idden, \[v\]isible, \[f\]lagged
    END OF t\_cell,
    t\_cells TYPE STANDARD TABLE OF t\_cell WITH EMPTY KEY,
    t\_field TYPE STANDARD TABLE OF t\_cells WITH EMPTY KEY.
    DATA:
    field TYPE t\_field,
    n TYPE i, " dimension of field
    bombs TYPE i, " # of existing bombs
    hidden TYPE i, " # of hidden cells
    flags TYPE i, " # of flagged cells
    moves TYPE i, " # of moves
    over TYPE char1, " game over: \[w\]in, \[d\]ead
    header TYPE string. " HTML header string
    METHODS:
    at\_click FOR EVENT sapevent OF cl\_abap\_browser IMPORTING action,
    at\_close FOR EVENT closed OF cl\_abap\_browser,
    detect IMPORTING VALUE(x) TYPE i VALUE(y) TYPE i.
ENDCLASS.
CLASS game IMPLEMENTATION.
  METHOD constructor.
    FINAL(wh) = \`width:13px;height:18px\`.
    header = replace(
    occ = 0 sub = \`@\` with = \`background-color:\` val =
    \`<html><head><style type="text/css">\` &&
    \`.bx{text-decoration:none;cursor:hand;\` &&
    wh && \`} a{\` && wh && \`}\` &&
    \`.hid{@#404080} .flg{@red} .bmb{@black}\` &&
    \`.b0{@#e0e0e0} .b1{@lightblue} .b2{@lightgreen} .b3{@orange}\` &&
    \`</style>\` &&
    \`<script>function setloc(e){window.location=e;}</script>\` &&
    \`</head><body scroll="no"><table border="0">\` ) ##NO\_TEXT.
    DATA(size) = 10.
    DATA(level) = 3.
    cl\_demo\_input=>new(
    )->add\_field( CHANGING field = size
    )->request( CHANGING field = level ).
    " size: 2..32
    n = nmax( val1 = 2 val2 = nmin( val1 = size val2 = 32 ) ).
    " level: 1..5
    level = nmax( val1 = 1 val2 = nmin( val1 = level val2 = 5 ) ).
    FINAL(threshold) = 100 - level \* 10.
    " place hidden bombs randomly
    field = VALUE #(
    LET r = cl\_abap\_random\_int=>create( seed = CONV i( sy-uzeit )
    min = 0
    max = 99 ) IN
    FOR i = 1 UNTIL i > n
    ( VALUE #( FOR j = 1 UNTIL j > n
    ( state = 'h'
    bomb = COND #( WHEN r->get\_next( ) > threshold
    THEN 'X' ) ) ) ) ).
    " compute neighboring-bombs count for each cell, and overall count
    LOOP AT field ASSIGNING FIELD-SYMBOL(<cells>).
      FINAL(y) = sy-tabix.
      LOOP AT <cells> ASSIGNING FIELD-SYMBOL(<cell>).
        IF <cell>-bomb = 'X'.
          bombs += 1.
        ELSE.
          FINAL(x) = sy-tabix.
          <cell>-bombs = REDUCE i(
          INIT b = 0
          FOR i = nmax( val1 = 1 val2 = y - 1 )
          WHILE i <= nmin( val1 = y + 1 val2 = n )
          FOR j = nmax( val1 = 1 val2 = x - 1 )
          WHILE j <= nmin( val1 = x + 1 val2 = n )
          LET <f> = field\[ i \]\[ j \] IN
          NEXT b = COND #( WHEN <f>-bomb = 'X' THEN b + 1 ELSE b ) ).
        ENDIF.
      ENDLOOP.
    ENDLOOP.
    hidden = n \* n.
    SET HANDLER at\_click.
    SET HANDLER at\_close.
  ENDMETHOD.
  METHOD board.
    cl\_abap\_browser=>show\_html(
    title = CONV cl\_abap\_browser=>title( sy-title )
    size = COND #( WHEN n < 20 THEN cl\_abap\_browser=>small
    ELSE cl\_abap\_browser=>medium )
    format = cl\_abap\_browser=>portrait
    context\_menu = ' '
    html\_string =
    REDUCE string(
    INIT h = header
    FOR y = 1 UNTIL y > n
    NEXT h &&= |<tr{ COND #( WHEN over <> '' THEN
    \` onclick="setloc('sapevent:ovr');"\` ) }>| &&
    REDUCE string(
    INIT k = \`\`
    FOR x = 1 UNTIL x > n
    LET c = field\[ y \]\[ x \]
    " CSS style (hid,flg,b0,...,b3) of cell
    style = COND string(
    WHEN over <> '' AND
    c-bomb = 'X' " bomb
    THEN \`bmb\`
    WHEN c-state = 'f' " flagged
    THEN \`flg\`
    WHEN c-state = 'v' " visible
    THEN |b{ nmin( val1 = c-bombs val2 = 3 ) }|
    WHEN over <> '' " empty
    THEN \`b0\`
    ELSE \`hid\` ) " hidden
    pos = |x{ x WIDTH = 2 ALIGN = RIGHT PAD = '0' }| &
    |y{ y WIDTH = 2 ALIGN = RIGHT PAD = '0' }|
    IN
    NEXT k &&= |<td class={ style }| &&
    COND #( WHEN c-state = 'v'
    THEN |><a>{ c-bombs }</a>| " bombs value
    ELSE " HTML events on cell (left: try; right: flag)
    | oncontextmenu="setloc('sapevent:flg{ pos }');| &
    |return false;"><a href="sapevent:try{ pos }">| &
    |<div class="bx"></div></a>| )
    && \`</td>\` )
    && \`</tr>\` )
    && \`</table><br>\`
    && COND #(
    WHEN over = 'd' THEN \`\*\*\* Bomb - Game over \*\*\*\`
    WHEN over = 'w' THEN |Finished in { moves } moves!| )
    && \`</body></html>\` ) ##NO\_TEXT.
  ENDMETHOD.
  METHOD at\_click.
    IF over <> ''. " game is over, final click
      cl\_abap\_browser=>close\_browser( ).
      LEAVE PROGRAM.
    ENDIF.
    moves += 1.
    FINAL(x) = CONV i( action+4(2) ).
    FINAL(y) = CONV i( action+7(2) ).
    ASSIGN field\[ y \]\[ x \] TO FIELD-SYMBOL(<cell>).
    IF action(3) = 'try'.
      IF <cell>-bomb = 'X'.
        over = 'd'. " hit bomb -> game over
      ELSE.
        detect( x = x y = y ).
      ENDIF.
    ELSE. " action(3) = 'flg'
      IF <cell>-state = 'h'.
        <cell>-state = 'f'. flags += 1. hidden -= 1.
      ELSE.
        <cell>-state = 'h'. flags -= 1. hidden += 1.
      ENDIF.
    ENDIF.
    IF hidden = 0 AND flags = bombs .
      over = 'w'. " all cells opened, all bombs found -> win
    ENDIF.
    board( ).
  ENDMETHOD.
  METHOD detect.
    CHECK x >= 1 AND x <= n AND y >= 1 AND y <= n.
    ASSIGN field\[ y \]\[ x \] TO FIELD-SYMBOL(<cell>).
    CASE <cell>-state.
      WHEN 'v'. RETURN.
      WHEN 'h'. hidden = hidden - 1.
      WHEN 'f'. flags = flags - 1.
    ENDCASE.
    <cell>-state = 'v'.
    CHECK <cell>-bombs = 0.
    FINAL(u) = y - 1.
    FINAL(d) = y + 1.
    FINAL(l) = x - 1.
    FINAL(r) = x + 1.
    detect( y = u x = l ).
    detect( y = u x = x ).
    detect( y = u x = r ).
    detect( y = y x = l ).
    detect( y = y x = r ).
    detect( y = d x = l ).
    detect( y = d x = x ).
    detect( y = d x = r ).
  ENDMETHOD.
  METHOD at\_close.
    SET HANDLER at\_click ACTIVATION ' '.
    cl\_abap\_browser=>close\_browser( ).
  ENDMETHOD.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_minesweeper\_740 IMPLEMENTATION.
  METHOD main.
    NEW game( )->board( ).
  ENDMETHOD.
ENDCLASS.

Description   

This example uses the implementation of a Minesweeper game to demonstrate the expression-oriented ABAP programming as introduced in ABAP release 7.40. As a comparison, the program DEMO\_MINESWEEPER\_700 shows a functionally identical implementation without expressions, which is restricted to mainly using language elements of ABAP release 7.00.

To play the game, use the left and right mouse buttons to enter or select fields.