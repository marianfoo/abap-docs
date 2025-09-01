# ABAP - Keyword Documentation / ABAP - Programming Language / ABAP Syntax / ABAP Statements / Operators and Expressions

Included pages: 8


### abenoperators_expressions.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_statements.htm) → 

Operators and Expressions

An operator usually links two operands to an [expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexpressions.htm) or is used together with an operand to construct an expression. When a statement containing such an expression is executed, the result of the expression is determined (operation) and is used in the statement. Operators are represented either by special characters or [reserved names](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_words.htm).

-   [Operators](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoperators.htm)

-   [Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexpressions.htm)

Continue
[Operators](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoperators.htm)
[Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexpressions.htm)
[Examples of Expression-Oriented Programming](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexpressions_abexas.htm)


### abenoperators.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_statements.htm) →  [Operators and Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoperators_expressions.htm) → 

Operators

ABAP contains the following operators:

-   Operators that perform special operations in operand positions:

-   [Declaration Operators](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninline_declarations.htm)
    The declaration operators DATA and FIELD-SYMBOL declare variables or field symbols in operand positions.

-   [Constructor Operators](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expressions.htm)
    The constructor operators NEW, VALUE, CONV, CORRESPONDING, CAST, REF, EXACT, REDUCE, FILTER, COND, and SWITCH construct values for data objects of specific data types in constructor expressions.

-   Operators that link multiple operands to a single expression:

-   [Assignment Operators](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenequals_operator.htm)
    The assignment operator \= links the source field and target field of an assignment. The special [casting operator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencasting_operator_glosry.htm "Glossary Entry") ?= performs a [down cast](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendown_cast_glosry.htm "Glossary Entry") during the assignment. The [addition assignment operator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadd_assignment_op_glosry.htm "Glossary Entry") ([+=](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencalculation_assignments.htm)), [subtraction assignment operator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensub_assignment_op_glosry.htm "Glossary Entry") ([\-=](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencalculation_assignments.htm)), [multiplication assignment operator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmult_assignment_op_glosry.htm "Glossary Entry") ([\*=](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencalculation_assignments.htm)), [division assignment operator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendiv_assignment_op_glosry.htm "Glossary Entry") ([/=](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencalculation_assignments.htm)), or [concatenation assignment operator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconcat_assignment_op_glosry.htm "Glossary Entry") ([\*\*=](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencalculation_assignment_string.htm)) performs a [calculation assignment](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencalculation_assignment_glosry.htm "Glossary Entry"). Furthermore, the operator \= binds actual parameters to formal parameters, for example in procedure calls or when working with [data clusters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_cluster_glosry.htm "Glossary Entry").

-   [Arithmetic Operators](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcompute_arith.htm)
    The arithmetic operators +, \-, \*, /, DIV, MOD, and \*\* link two or more numeric operands to an arithmetic expression. In addition, the characters + and \- act as algebraic signs in arithmetic expressions.

-   [Bit Operators](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcompute_bit.htm)
    The bit operators BIT-AND, BIT-OR, and BIT-XOR link two or more byte-like operands to a bit expression. The bit operator BIT-NOT negates a byte-like operand.

-   [String Operators](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcompute_string.htm)
    The string operator && concatenates two character-like operands to a string expression.

-   [Relational Operators](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp.htm)
    Relational operators occur in relational expressions, which in turn are components of logical expressions. The [comparison operators](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencomp_operator_glosry.htm "Glossary Entry") \=, <>, <, \>, <=,\>=, BETWEEN, and so on link two or more operands of any data type to a comparison expression. There are additional relational operators for specific data types. The [predicate operator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpredicate_operator_glosry.htm "Glossary Entry") IS makes a statement about an operand.

-   [Boolean Operators](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_boole.htm)
    The Boolean operators AND, OR, and EQUIV link the results of individual logical expressions to one logical expression. The result of a logical expression is either true or false. The Boolean operator NOT negates the result of a logical expression.

-   Operator that links two operands in compilations:

-   [Literal Operator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenliteral_operator.htm)
    The literal operator & links two literals or two string templates to form one literal or string template.


### abenexpressions.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_statements.htm) →  [Operators and Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoperators_expressions.htm) → 

Expressions

The following expressions can be constructed in certain [operand positions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexpression_positions.htm):

-   Write positions

-   [Declaration expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninline_declarations.htm)

-   Certain [constructor expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expressions.htm)

-   Certain [table expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_expressions.htm)

-   Read positions

-   [Logical expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp.htm)

-   [Constructor expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expressions.htm)

-   [Table expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_expressions.htm) and [mesh path expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_path_expression.htm)

-   [Arithmetic expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcompute_arith.htm)

-   [String expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcompute_string.htm)

-   [Bit expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcompute_bit.htm)

An expression in a [write position](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwriting_position_glosry.htm "Glossary Entry") has a result that is assigned a value.

An expression in a [read position](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenreading_position_glosry.htm "Glossary Entry") has a result that is used as an operand in the statement. Logical expressions can contain [calculation expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencalculation_expression_glosry.htm "Glossary Entry"), that is, arithmetic expressions, string expressions, and bit expressions as operands of relational expressions. The three different calculation expression types cannot currently be mixed within a calculation expression.

Hints

-   Although the calculation expression types cannot be mixed directly, a different type of expression can be used as an argument of a allowed function in another expression. In the same way, logical expressions can occur as arguments of [Boolean functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenboole_function_glosry.htm "Glossary Entry") in calculation expressions.

-   In [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_glosry.htm "Glossary Entry"), three other kinds of expressions are possible:

-   [SQL expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_expression_glosry.htm "Glossary Entry")

-   [Aggregate expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenaggregate_expression_glosry.htm "Glossary Entry")

-   [SQL path expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_path_expression_glosry.htm "Glossary Entry")

The ABAP expressions above can be used as [host expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhost_expression_glosry.htm "Glossary Entry") in ABAP SQL.


### abenexpressions_abexas.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_statements.htm) →  [Operators and Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoperators_expressions.htm) → 

Examples of Expression-Oriented Programming

Continue
![Example](exa.gif "Example") [Expression-Orientation - Jawbreaker Game](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenjaw_breaker_abexa.htm)
![Example](exa.gif "Example") [Expression-Orientation - Minesweeper Game](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmine_sweeper_abexa.htm)
![Example](exa.gif "Example") [Expression-Orientation - 2048 Game](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abengame_2048_abexa.htm)


### abenjaw_breaker_abexa.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_statements.htm) →  [Operators and Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoperators_expressions.htm) →  [Examples of Expression-Oriented Programming](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexpressions_abexas.htm) → 

Expression-Orientation - Jawbreaker Game

Expression-oriented implementation of a Jawbreaker game.

Source Code

PROGRAM demo\_jawbreaker\_html\_740.
CLASS game DEFINITION.
  PUBLIC SECTION.
    METHODS:
      constructor,
      display.
  PRIVATE SECTION.
    TYPES:
      t\_vector TYPE STANDARD TABLE OF i WITH EMPTY KEY,
      t\_matrix TYPE STANDARD TABLE OF t\_vector WITH EMPTY KEY,
      BEGIN OF coord,
        x TYPE i,
        y TYPE i,
      END OF coord.
    DATA:
      n      TYPE i,
      field  TYPE t\_matrix,
      moves  TYPE i,
      filled TYPE i,
      colors TYPE TABLE OF string WITH EMPTY KEY,
      header TYPE string.
    METHODS:
      at\_click FOR EVENT sapevent OF cl\_abap\_browser IMPORTING action,
      delete IMPORTING VALUE(cursor) TYPE coord
                       VALUE(color) TYPE i OPTIONAL,
      slide.
ENDCLASS.
CLASS game IMPLEMENTATION.
  METHOD constructor.
    DATA(wh) = \`width:18px;height:18px\`.
    colors = VALUE #( ( \`lightblue\`)
                      ( \`cornflowerblue\`)
                      ( \`darkblue\`)
                      ( \`steelblue\`) ).
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
    cl\_demo\_input=>request( CHANGING field = size ).
    n = COND #( WHEN size < 2
                  THEN 2
                WHEN size > 15
                  THEN 15
                  ELSE size ).
    field = VALUE #( LET r = cl\_abap\_random\_int=>create(
                               seed = CONV i( sy-uzeit )
                               min  = 1
                               max = lines( colors ) ) IN
                     FOR i = 1 UNTIL i > n
                     ( VALUE #( FOR j = 1 UNTIL j > n
                                ( r->get\_next( ) ) ) ) ).
    filled = n \* n.
    SET HANDLER at\_click.
  ENDMETHOD.
  METHOD display.
    cl\_abap\_browser=>show\_html(
     title        = CONV cl\_abap\_browser=>title( sy-title )
     size         = cl\_abap\_browser=>small
     format       = cl\_abap\_browser=>portrait
     context\_menu = ' '
     html\_string  = COND #( WHEN filled > 0 THEN
       REDUCE string(
        INIT  h = header
        FOR   y = 1  UNTIL y > n
        NEXT  h &&= \`<tr>\` &&
         REDUCE string( INIT k = \`\`
          FOR  x = 1  UNTIL x > n
          LET  c = field\[ x \]\[ y \] IN
          NEXT k &&=
                   COND #( WHEN c = 0
                             THEN \`<td><div class="bx"></div></td>\`
                             ELSE |<td class=c{ c }>| &
                                  |<a href="sapevent:| &
                                  |x{ x WIDTH = 2
                                        ALIGN = right
                                        PAD   = '0' }| &
                                  |y{ y WIDTH = 2
                                        ALIGN = right
                                        PAD    = '0' }">| &
                                  |<div class="bx"></div></a></td>| ) )
         && \`</tr>\` )
       && \`</table></body></html>\`
      ELSE |Finished in { moves } moves!| )
    ).
  ENDMETHOD.
  METHOD at\_click.
    moves = moves + 1.
    delete( VALUE #( x = CONV i( action+1(2) )
                     y = CONV i( action+4(2) ) ) ).
    slide( ).
    display( ).
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
    filled = filled - 1.
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
ENDCLASS.
START-OF-SELECTION.
  NEW game( )->display( ).

Description

This example uses the implementation of a Jawbreaker game to demonstrate the expression-oriented ABAP programming as introduced in Release 7.40. As a comparison, the program DEMO\_JAWBREAKER\_HTML\_700 shows a functionally identical implementation without expressions, which is restricted to mainly using language elements of Release 7.00.

To play the game, use the left mouse button to remove related blocks with the same color.


### abenmine_sweeper_abexa.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_statements.htm) →  [Operators and Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoperators_expressions.htm) →  [Examples of Expression-Oriented Programming](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexpressions_abexas.htm) → 

Expression-Orientation - Minesweeper Game

Expression-oriented implementation of a Minesweeper game.

Source Code

PROGRAM demo\_minesweeper\_740.
CLASS game DEFINITION.
  PUBLIC SECTION.
    METHODS:
      constructor,
      display.
  PRIVATE SECTION.
    TYPES:
      BEGIN OF t\_cell,
        bomb  TYPE abap\_bool,  " cell contains bomb y/n
        bombs TYPE i,          " # of neighboring bombs
        state TYPE char1,      " \[h\]idden, \[v\]isible, \[f\]lagged
      END OF t\_cell,
      t\_cells TYPE STANDARD TABLE OF t\_cell  WITH EMPTY KEY,
      t\_field TYPE STANDARD TABLE OF t\_cells WITH EMPTY KEY.
    DATA:
      field  TYPE t\_field,
      n      TYPE i,        " dimension of field
      bombs  TYPE i,        " # of existing bombs
      hidden TYPE i,        " # of hidden cells
      flags  TYPE i,        " # of flagged cells
      moves  TYPE i,        " # of moves
      over   TYPE char1,    " game over: \[w\]in, \[d\]ead
      header TYPE string.   " HTML header string
    METHODS:
      at\_click FOR EVENT sapevent OF cl\_abap\_browser IMPORTING action,
      detect IMPORTING VALUE(x) TYPE i VALUE(y) TYPE i.
ENDCLASS.
CLASS game IMPLEMENTATION.
  METHOD constructor.
    DATA(wh) = \`width:13px;height:18px\`.
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
    cl\_demo\_input=>add\_field( CHANGING field = size ).
    cl\_demo\_input=>request(   CHANGING field = level ).
    " size: 2..32
    n     = nmax( val1 = 2 val2 = nmin( val1 = size val2 = 32 ) ).
    " level: 1..5
    level = nmax( val1 = 1 val2 = nmin( val1 = level val2 = 5 ) ).
    DATA(threshold) = 100 - level \* 10.
    " place hidden bombs randomly
    field = VALUE #(
      LET r = cl\_abap\_random\_int=>create( seed = CONV i( sy-uzeit )
                                          min  = 0
                                          max  = 99 ) IN
      FOR i = 1 UNTIL i > n
      ( VALUE #( FOR j = 1 UNTIL j > n
                 ( state = 'h'
                   bomb = COND #( WHEN r->get\_next( ) > threshold
                                    THEN 'X' ) ) ) ) ).
    " compute neighboring-bombs count for each cell, and overall count
    LOOP AT field ASSIGNING FIELD-SYMBOL(<cells>).
      DATA(y) = sy-tabix.
      LOOP AT <cells> ASSIGNING FIELD-SYMBOL(<cell>).
        IF <cell>-bomb = 'X'.
          bombs = bombs + 1.
        ELSE.
          DATA(x) = sy-tabix.
          <cell>-bombs = REDUCE i(
            INIT b = 0
            FOR  i = nmax( val1 = 1 val2 = y - 1 )
            WHILE i <= nmin( val1 = y + 1 val2 = n )
            FOR  j = nmax( val1 = 1 val2 = x - 1 )
            WHILE j <= nmin( val1 = x + 1 val2 = n )
            LET <f> = field\[ i \]\[ j \] IN
            NEXT b = COND #( WHEN <f>-bomb = 'X' THEN b + 1 ELSE b ) ).
        ENDIF.
      ENDLOOP.
    ENDLOOP.
    hidden = n \* n.
    SET HANDLER at\_click.
  ENDMETHOD.
  METHOD display.
    cl\_abap\_browser=>show\_html(
     title        = CONV cl\_abap\_browser=>title( sy-title )
     size         = COND #( WHEN n < 20 THEN cl\_abap\_browser=>small
                                        ELSE cl\_abap\_browser=>medium )
     format       = cl\_abap\_browser=>portrait
     context\_menu = ' '
     html\_string  =
       REDUCE string(
        INIT  h = header
        FOR   y = 1 UNTIL y > n
        NEXT  h &&= |<tr{ COND #( WHEN over <> '' THEN
                        \` onclick="setloc('sapevent:ovr');"\` ) }>| &&
         REDUCE string(
          INIT k = \`\`
          FOR  x = 1  UNTIL x > n
          LET  c = field\[ y \]\[ x \]
               " CSS style (hid,flg,b0,...,b3) of cell
               style = COND string(
                         WHEN over <> '' AND
                              c-bomb = 'X'  " bomb
                           THEN \`bmb\`
                         WHEN c-state = 'f' " flagged
                           THEN \`flg\`
                         WHEN c-state = 'v' " visible
                           THEN |b{ nmin( val1 = c-bombs val2 = 3 ) }|
                         WHEN over <> ''    " empty
                           THEN \`b0\`
                         ELSE  \`hid\` ) " hidden
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
           WHEN over = 'd' THEN \`\*\*\* Bomb  -  Game over \*\*\*\`
           WHEN over = 'w' THEN |Finished in { moves } moves!| )
       && \`</body></html>\` ) ##NO\_TEXT.
  ENDMETHOD.
  METHOD at\_click.
    IF over <> ''.  " game is over, final click
      cl\_abap\_browser=>close\_browser( ).
      LEAVE PROGRAM.
    ENDIF.
    moves = moves + 1.
    DATA(x) = CONV i( action+4(2) ).
    DATA(y) = CONV i( action+7(2) ).
    ASSIGN field\[ y \]\[ x \] TO FIELD-SYMBOL(<cell>).
    IF action(3) = 'try'.
      IF <cell>-bomb = 'X'.
        over = 'd'.  " hit bomb -> game over
      ELSE.
        detect( x = x y = y ).
      ENDIF.
    ELSE.  " action(3) = 'flg'
      IF <cell>-state = 'h'.
        <cell>-state = 'f'.  flags = flags + 1.  hidden = hidden - 1.
      ELSE.
        <cell>-state = 'h'.  flags = flags - 1.  hidden = hidden + 1.
      ENDIF.
    ENDIF.
    IF hidden = 0 AND flags = bombs .
      over = 'w'.  " all cells opened, all bombs found -> win
    ENDIF.
    display( ).
  ENDMETHOD.
  METHOD detect.
    CHECK x >= 1 AND x <= n AND y >= 1 AND y <= n.
    ASSIGN field\[ y \]\[ x \] TO FIELD-SYMBOL(<cell>).
    CASE <cell>-state.
      WHEN 'v'.  RETURN.
      WHEN 'h'.  hidden = hidden - 1.
      WHEN 'f'.  flags = flags - 1.
    ENDCASE.
    <cell>-state = 'v'.
    CHECK <cell>-bombs = 0.
    DATA(u) = y - 1.
    DATA(d) = y + 1.
    DATA(l) = x - 1.
    DATA(r) = x + 1.
    detect( y = u x = l ).
    detect( y = u x = x ).
    detect( y = u x = r ).
    detect( y = y x = l ).
    detect( y = y x = r ).
    detect( y = d x = l ).
    detect( y = d x = x ).
    detect( y = d x = r ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  NEW game( )->display( ).

Description

This example uses the implementation of a Minesweeper game to demonstrate the expression-oriented ABAP programming (as introduced in Release 7.40). As a comparison, the program DEMO\_MINESWEEPER\_700 shows a functionally identical implementation without expressions, which is restricted to mainly using language elements of Release 7.00.

To play the game, use the left and right mouse buttons to enter or select fields.


### abengame_2048_abexa.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_statements.htm) →  [Operators and Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoperators_expressions.htm) →  [Examples of Expression-Oriented Programming](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexpressions_abexas.htm) → 

Expression-Orientation - 2048 Game

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
      NEXT h &&=
        |.t{ ipow( base = 2 exp = i ) }\\{| &
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
        NEXT h &&= |<tr>| &&
         REDUCE string(
          INIT k = \`\`
          FOR  <c> IN <cells>
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

This example uses the implementation of a 2048 game to demonstrate the expression-oriented ABAP programming (as introduced in Release 7.40). As a comparison, the program DEMO\_GAME\_2048\_700 shows a functionally identical implementation without expressions, which is restricted to mainly using language elements of Release 7.00.

To play the game, use the arrow keys on the keyboard to move all tiles in one of the four directions.


### abenexpressions_abexas.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_statements.htm) →  [Operators and Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoperators_expressions.htm) → 

Examples of Expression-Oriented Programming

Continue
![Example](exa.gif "Example") [Expression-Orientation - Jawbreaker Game](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenjaw_breaker_abexa.htm)
![Example](exa.gif "Example") [Expression-Orientation - Minesweeper Game](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmine_sweeper_abexa.htm)
![Example](exa.gif "Example") [Expression-Orientation - 2048 Game](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abengame_2048_abexa.htm)
