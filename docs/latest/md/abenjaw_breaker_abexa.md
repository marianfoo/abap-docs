  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Operands](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoperands.htm) →  [Functions and Expressions in Operand Positions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoperands_expressions.htm) →  [Examples of Expression-Oriented Programming](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexpressions_abexas.htm) → 

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