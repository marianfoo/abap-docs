# ABAP - Keyword Documentation / ABAP - Programming Language / Operands / Functions and Expressions in Operand Positions / Examples of Expression-Oriented Programming

Included pages: 4


### abenexpressions_abexas.htm

---
title: "Examples of Expression-Oriented Programming"
description: |
  -   Expression-Orientation - Jawbreaker Game(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenjaw_breaker_abexa.htm) -   Expression-Orientation - Minesweeper Game(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmine_sweeper_abexa.htm) -   Expression-Orientation - 20
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexpressions_abexas.htm"
abapFile: "abenexpressions_abexas.htm"
keywords: ["do", "if", "abenexpressions", "abexas"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Operands](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoperands.htm) →  [Functions and Expressions in Operand Positions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoperands_expressions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Examples%20of%20Expression-Oriented%20Programming%2C%20ABENEXPRESSIONS_ABEXAS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvemen
t:)

Examples of Expression-Oriented Programming

-   [Expression-Orientation - Jawbreaker Game](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenjaw_breaker_abexa.htm)
-   [Expression-Orientation - Minesweeper Game](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmine_sweeper_abexa.htm)
-   [Expression-Orientation - 2048 Game](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengame_2048_abexa.htm)

Continue
![Example](exa.gif "Example") [Expression-Orientation - Jawbreaker Game](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenjaw_breaker_abexa.htm)
![Example](exa.gif "Example") [Expression-Orientation - Minesweeper Game](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmine_sweeper_abexa.htm)
![Example](exa.gif "Example") [Expression-Orientation - 2048 Game](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengame_2048_abexa.htm)


### abenjaw_breaker_abexa.htm

---
title: "Expression-Orientation - Jawbreaker Game"
description: |
  Expression-oriented implementation of a Jawbreaker game. Source Code  Public class definition CLASS cl_demo_jawbreaker_html_740 DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC FINAL. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  CCIMP CLASS game DEFINITION. PUBLIC
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenjaw_breaker_abexa.htm"
abapFile: "abenjaw_breaker_abexa.htm"
keywords: ["delete", "do", "if", "method", "class", "data", "types", "abenjaw", "breaker", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Operands](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoperands.htm) →  [Functions and Expressions in Operand Positions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoperands_expressions.htm) →  [Examples of Expression-Oriented Programming](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexpressions_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Expression-Orientation%20-%20Jawbreaker%20Game%2C%20ABENJAW_BREAKER_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Expression-Orientation - Jawbreaker Game

Expression-oriented implementation of a Jawbreaker game.

Source Code   

\* Public class definition
CLASS cl\_demo\_jawbreaker\_html\_740 DEFINITION
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
    t\_vector TYPE STANDARD TABLE OF i WITH EMPTY KEY,
    t\_matrix TYPE STANDARD TABLE OF t\_vector WITH EMPTY KEY,
    BEGIN OF coord,
    x TYPE i,
    y TYPE i,
    END OF coord.
    DATA:
    n TYPE i,
    field TYPE t\_matrix,
    moves TYPE i,
    filled TYPE i,
    colors TYPE TABLE OF string WITH EMPTY KEY,
    header TYPE string.
    METHODS:
    at\_click FOR EVENT sapevent OF cl\_abap\_browser IMPORTING action,
    at\_close FOR EVENT closed OF cl\_abap\_browser,
    delete IMPORTING VALUE(cursor) TYPE coord
    VALUE(color) TYPE i OPTIONAL,
    slide.
ENDCLASS.
CLASS game IMPLEMENTATION.
  METHOD constructor.
    FINAL(wh) = \`width:18px;height:18px\`.
    colors = VALUE #( ( \`lightblue\` )
    ( \`cornflowerblue\` )
    ( \`darkblue\` )
    ( \`steelblue\` ) ).
    header = \`<html><head><style type="text/css">\` &
    \`.bx{text-decoration:none;cursor:hand;\` &&
    wh && \`} a{\` && wh && \`}\` &&
    REDUCE string(
    INIT s = \`\` FOR co IN colors INDEX INTO ci
    NEXT s = |{ s }.c{ ci }\\{background-color:{ co }\\}| ) &&
    \`</style></head><body leftmargin="35" \` &
    \`topmargin="60" scroll="no">\` &
    \`<table border="0">\`.
    DATA(size) = 5.
    cl\_demo\_input=>new( )->request( CHANGING field = size ).
    n = COND #( WHEN size < 2
    THEN 2
    WHEN size > 15
    THEN 15
    ELSE size ).
    field = VALUE #( LET r = cl\_abap\_random\_int=>create(
    seed = CONV i( sy-uzeit )
    min = 1
    max = lines( colors ) ) IN
    FOR i = 1 UNTIL i > n
    ( VALUE #( FOR j = 1 UNTIL j > n
    ( r->get\_next( ) ) ) ) ).
    filled = n \* n.
    SET HANDLER at\_click.
    SET HANDLER at\_close.
  ENDMETHOD.
  METHOD board.
    cl\_abap\_browser=>show\_html(
    title = CONV cl\_abap\_browser=>title( sy-title )
    size = cl\_abap\_browser=>small
    format = cl\_abap\_browser=>portrait
    context\_menu = ' '
    html\_string = COND #( WHEN filled > 0 THEN
    REDUCE string(
    INIT h = header
    FOR y = 1 UNTIL y > n
    NEXT h &&= \`<tr>\` &&
    REDUCE string( INIT k = \`\`
    FOR x = 1 UNTIL x > n
    LET c = field\[ x \]\[ y \] IN
    NEXT k &&=
    COND #( WHEN c = 0
    THEN \`<td><div class="bx"></div></td>\`
    ELSE |<td class=c{ c }>| &
    |<a href="sapevent:| &
    |x{ x WIDTH = 2
    ALIGN = RIGHT
    PAD = '0' }| &
    |y{ y WIDTH = 2
    ALIGN = RIGHT
    PAD = '0' }">| &
    |<div class="bx"></div></a></td>| ) )
    && \`</tr>\` )
    && \`</table></body></html>\`
    ELSE |Finished in { moves } moves!| )
    ).
  ENDMETHOD.
  METHOD at\_click.
    moves += 1.
    delete( VALUE #( x = CONV i( action+1(2) )
    y = CONV i( action+4(2) ) ) ).
    slide( ).
    board( ).
  ENDMETHOD.
  METHOD delete.
    CHECK cursor-x >= 1 AND cursor-x <= n AND
    cursor-y >= 1 AND cursor-y <= n.
    ASSIGN field\[ cursor-x \]\[ cursor-y \] TO FIELD-SYMBOL(<color>).
    IF color IS NOT SUPPLIED.
      color = <color>.
    ELSEIF <color> <> color OR color = 0.
      RETURN.
    ENDIF.
    <color> = 0.
    filled -= 1.
    delete( cursor = VALUE #( x = cursor-x - 1
    y = cursor-y ) color = color ). "left
    delete( cursor = VALUE #( x = cursor-x + 1
    y = cursor-y ) color = color ). "right
    delete( cursor = VALUE #( x = cursor-x
    y = cursor-y - 1 ) color = color ). "up
    delete( cursor = VALUE #( x = cursor-x
    y = cursor-y + 1 ) color = color ). "down
  ENDMETHOD.
  METHOD slide.
    field = VALUE #( LET fld = field IN
    FOR <column> IN fld
    LET rest = VALUE t\_vector(
    FOR j IN <column>
    WHERE ( table\_line <> 0 ) ( j ) )
    zeroed = n - lines( rest ) IN
    ( VALUE t\_vector( FOR k = 1 UNTIL k > n
    ( COND #( WHEN k <= zeroed THEN 0
    ELSE rest\[ k - zeroed \] ) ) ) ) ).
  ENDMETHOD.
  METHOD at\_close.
    SET HANDLER at\_click ACTIVATION ' '.
    cl\_abap\_browser=>close\_browser( ).
  ENDMETHOD.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_jawbreaker\_html\_740 IMPLEMENTATION.
  METHOD main.
    NEW game( )->board( ).
  ENDMETHOD.
ENDCLASS.

Description   

This example uses the implementation of a Jawbreaker game to demonstrate the expression-oriented ABAP programming as introduced in ABAP release 7.40. As a comparison, the program DEMO\_JAWBREAKER\_HTML\_700 shows a functionally identical implementation without expressions, which is restricted to mainly using language elements of ABAP release 7.00.

To play the game, use the left mouse button to remove related blocks with the same color.


### abenmine_sweeper_abexa.htm

---
title: "Expression-Orientation - Minesweeper Game"
description: |
  Expression-oriented implementation of a Minesweeper game. Source Code  Public class definition CLASS cl_demo_minesweeper_740 DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC FINAL. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  CCIMP CLASS game DEFINITION. PUBLIC SECT
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmine_sweeper_abexa.htm"
abapFile: "abenmine_sweeper_abexa.htm"
keywords: ["select", "loop", "do", "while", "if", "case", "try", "method", "class", "data", "types", "abenmine", "sweeper", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Operands](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoperands.htm) →  [Functions and Expressions in Operand Positions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoperands_expressions.htm) →  [Examples of Expression-Oriented Programming](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexpressions_abexas.htm) → 

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


### abengame_2048_abexa.htm

---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_game_2048_740 DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC FINAL. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  CCIMP CLASS game DEFINITION. PUBLIC SECTION. METHODS: constructor, board. PRIVATE SECTION. TYPES: BEGIN OF t_c
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengame_2048_abexa.htm"
abapFile: "abengame_2048_abexa.htm"
keywords: ["loop", "do", "while", "if", "try", "method", "class", "data", "types", "abengame", "2048", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Operands](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoperands.htm) →  [Functions and Expressions in Operand Positions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoperands_expressions.htm) →  [Examples of Expression-Oriented Programming](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexpressions_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Expression-Orientation%20-%202048%20Game%2C%20ABENGAME_2048_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Expression-Orientation - 2048 Game

Expression-oriented implementation of a 2048 game.

Source Code   

\* Public class definition
CLASS cl\_demo\_game\_2048\_740 DEFINITION
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
    value TYPE i,
    id TYPE string,
    born TYPE i,
    END OF t\_cell,
    t\_cells TYPE STANDARD TABLE OF t\_cell WITH EMPTY KEY,
    t\_field TYPE STANDARD TABLE OF t\_cells WITH EMPTY KEY,
    t\_ref TYPE REF TO t\_cell,
    t\_refs TYPE STANDARD TABLE OF t\_ref WITH EMPTY KEY.
    CONSTANTS tile\_colors TYPE string VALUE
    \`eee4da ede0c8 f2b179 f59563 f67c5f f65e3b \` &
    \`edcf72 f67c5f edc850 edc53f edc22e\` ##NO\_TEXT.
    DATA:
    mark\_new\_tiles TYPE abap\_bool,
    rnd TYPE REF TO cl\_abap\_random\_int,
    field TYPE t\_field,
    n TYPE i, " dimension of field
    nsq TYPE i, " n \* n
    target TYPE i VALUE 2048, " target value
    score TYPE i, " current score
    moves TYPE i, " # of moves
    header TYPE string, " HTML header string
    over TYPE string, " game-over message
    line TYPE t\_refs.
    METHODS:
    at\_click FOR EVENT sapevent OF cl\_abap\_browser IMPORTING action,
    at\_close FOR EVENT closed OF cl\_abap\_browser,
    build\_line IMPORTING VALUE(direction) TYPE char1 VALUE(i) TYPE i,
    move\_lines IMPORTING VALUE(direction) TYPE char1
    RETURNING VALUE(valid) TYPE abap\_bool,
    move\_line RETURNING VALUE(valid) TYPE abap\_bool,
    new\_tiles IMPORTING VALUE(factor) TYPE i DEFAULT 1,
    check\_game.
ENDCLASS.
CLASS game IMPLEMENTATION.
  METHOD constructor.
    DATA(size) = 4.
    cl\_demo\_input=>new(
    )->add\_field( CHANGING field = size
    )->add\_field( CHANGING field = target
    )->add\_field( EXPORTING text = 'Mark new tiles'
    as\_checkbox = 'X'
    CHANGING field = mark\_new\_tiles
    )->request( ) ##NO\_TEXT.
    n = nmax( val1 = 3 val2 = nmin( val1 = size val2 = 8 ) ).
    nsq = n \* n.
    " target tile value must be a power of 2, at least 8
    target = nmax( val1 = 8 val2 = target ).
    target = ipow( base = 2 exp = ceil( log( target ) / log( 2 ) ) ).
    rnd = cl\_abap\_random\_int=>create( seed = CONV i( sy-uzeit )
    min = 0 max = nsq - 1 ).
    field = VALUE #( FOR i = 1 UNTIL i > n
    ( VALUE #( FOR j = 1 UNTIL j > n
    ( id = |{ i }{ j }| born = -1 ) ) ) ).
    new\_tiles( 2 ). " place initial tiles in field
    " build header with styles for tiles; cell/font sizes depend on n
    header = REDUCE string( ##NO\_TEXT
    LET w = 360 / n IN
    INIT h =
    \`<html><head><style type="text/css">\` &
    \`.t0{background-color:#cbbdb0}\` &
    \`td{border:1px solid bbada0;color:#776e65\` &
    \`;text-align:center;vertical-align:center\` &
    \`;font-family:'Century Gothic',sans-serif;font-weight:bold\` &&
    |;width:{ w }px;height:{ w }px;font-size:{ w / 2 }px\\}|
    FOR i = 1 UNTIL i > 11
    NEXT h &&=
    |.t{ ipow( base = 2 exp = i ) }\\{| &
    |background-color:#{ segment( val = tile\_colors
    index = i ) }| &
    |{ COND #( WHEN i >= 3 THEN \`;color:#f9f6f2\` ) }| &
    |{ COND #( WHEN i >= 10 THEN |;font-size:{ w / 4 }px|
    WHEN i >= 7 THEN |;font-size:{ w / 3 }px| ) }\\}| ).
    header = header && ##NO\_TEXT
    \`div{text-align:center}</style><script type="text/javascript">\` &
    \`function okd(e)\` &
    \`{c=window.event.keyCode;window.location='sapevent:'+c;}\` &
    \`document.onkeydown = okd;</script></head> <body scroll=no \` &
    \`style="background-color:#bbada0;color:white;font-size:20pt">\`.
    SET HANDLER at\_click.
    SET HANDLER at\_close.
  ENDMETHOD.
  METHOD board.
    cl\_abap\_browser=>show\_html(
    title = |Join the numbers and get to the { target } tile!|
    size = cl\_abap\_browser=>small
    format = cl\_abap\_browser=>portrait
    context\_menu = 'X'
    html\_string =
    REDUCE string(
    INIT h = |{ header }<p align=right>Score { score }</p>| &
    |<table align=center>|
    FOR <cells> IN field
    NEXT h &&= |<tr>| &&
    REDUCE string(
    INIT k = \`\`
    FOR <c> IN <cells>
    NEXT k &&= |<td class=t{ <c>-value }| &
    |{ COND #( WHEN <c>-born = moves
    THEN \` style="border-color:red"\` ) }| &
    |>{ COND #( WHEN <c>-value = 0 THEN \`&nbsp;\`
    ELSE <c>-value ) }</td>| )
    && \`</tr>\` )
    && \`</table>\` &&
    COND #( WHEN over = \`\`
    THEN \`<div>Use arrow keys to join tiles</div>\`
    ELSE |<br>{ over }| )
    && \`</body></html>\` ) ##NO\_TEXT.
  ENDMETHOD.
  METHOD at\_click.
    FINAL(direction) = SWITCH #( action WHEN 37 THEN 'L'
    WHEN 38 THEN 'U'
    WHEN 39 THEN 'R'
    WHEN 40 THEN 'D' ).
    IF over <> \`\`. " game is over; leave game with any non-arrow key
      IF direction IS INITIAL.
        cl\_abap\_browser=>close\_browser( ).
        LEAVE PROGRAM.
      ENDIF.
      RETURN.
    ENDIF.
    IF move\_lines( direction ).
      moves += 1.
      new\_tiles( ).
      check\_game( ).
      board( ).
    ENDIF.
  ENDMETHOD.
  METHOD check\_game.
    CONSTANTS dirs TYPE char4 VALUE 'LRUD'.
    " find highest tile value and check if an empty cell exists
    FINAL(fill) = REDUCE t\_cell(
    INIT m = VALUE #( )
    FOR <cells> IN field
    FOR <c> IN <cells>
    NEXT m-value = nmax( val1 = m-value val2 = <c>-value )
    m-id = COND #( WHEN <c>-value = 0 THEN \`!\` ELSE m-id ) ).
    " game is won if target value is reached
    IF fill-value >= target.
      over = |<div>Finished in { moves } moves!</div>|.
    ELSEIF fill-id <> \`!\`.
      " no empty cell -> check if stuck: try move in all 4 directions
      DO 4 TIMES.
        FINAL(off) = sy-index - 1.
        DO n TIMES.
          build\_line( direction = dirs+off(1) i = sy-index ).
          LOOP AT line FROM 2 ASSIGNING FIELD-SYMBOL(<curr>).
            IF <curr>->value = line\[ sy-tabix - 1 \]->value.
              RETURN. " found a possible move; game not over
            ENDIF.
          ENDLOOP.
        ENDDO.
      ENDDO.
      over = \`<div>\*\*\* Stuck - Game over \*\*\*</div>\`.
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
    FOR j = n THEN j - 1 UNTIL j = 0 " j = n...1
    LET y = SWITCH i( direction
    WHEN 'L' OR 'R' THEN i
    WHEN 'D' THEN j
    WHEN 'U' THEN n + 1 - j )
    x = SWITCH i( direction
    WHEN 'U' OR 'D' THEN i
    WHEN 'R' THEN j
    WHEN 'L' THEN n + 1 - j )
    IN ( REF #( field\[ y \]\[ x \] ) ) ).
  ENDMETHOD.
  METHOD move\_line.
    DATA: idx TYPE i VALUE 1, next\_idx TYPE i VALUE 2.
    DATA(curr) = line\[ 1 \].
    WHILE next\_idx <= n.
      FINAL(next) = line\[ next\_idx \].
      IF curr->value > 0.
        IF curr->value = next->value.
          curr->value = curr->value \* 2. " join tiles
          next->value = 0.
          valid = abap\_true.
          score = score + curr->value.
          idx += 1. curr = line\[ idx \]. " proceed
        ELSEIF next->value > 0 OR next\_idx = n.
          idx += 1. curr = line\[ idx \]. " proceed
          next\_idx = idx.
        ENDIF.
      ELSEIF next->value <> 0.
        curr->value = next->value. " shift tile to empty cell
        next->value = 0.
        valid = abap\_true.
      ENDIF.
      next\_idx += 1.
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
  METHOD at\_close.
    SET HANDLER at\_click ACTIVATION ' '.
    cl\_abap\_browser=>close\_browser( ).
  ENDMETHOD.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_game\_2048\_740 IMPLEMENTATION.
  METHOD main.
    NEW game( )->board( ).
  ENDMETHOD.
ENDCLASS.

Description   

This example uses the implementation of a 2048 game to demonstrate the expression-oriented ABAP programming (as introduced in ABAP release 7.40. As a comparison, the program DEMO\_GAME\_2048\_700 shows a functionally identical implementation without expressions, which is restricted to mainly using language elements of ABAP release 7.00.

To play the game, use the arrow keys on the keyboard to move all tiles in one of the four directions.
