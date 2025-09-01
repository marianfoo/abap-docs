# ABAP Keyword Documentation / ABAP − Reference / ABAP Syntax / ABAP Statements / Operators and Expressions

Included pages: 8



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.54](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenoperators_expressions.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperators_expressions.htm)
- [abenoperators.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperators.htm)
- [abenexpressions.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexpressions.htm)
- [abenexpressions_abexas.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexpressions_abexas.htm)
- [abenjaw_breaker_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenjaw_breaker_abexa.htm)
- [abenmine_sweeper_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmine_sweeper_abexa.htm)
- [abengame_2048_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengame_2048_abexa.htm)

**Bundle Contains**: 7 documentation pages
**Version**: ABAP 7.54
**Generated**: 2025-09-01T11:25:45.932Z

---

### abenoperators_expressions.htm

> **📖 Official SAP Documentation**: [abenoperators_expressions.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperators_expressions.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) → 

Operators and Expressions

Normally an operater links two operands with an [expression](javascript:call_link\('abenexpressions.htm'\)) or forms an expression with an operand. During the execution of a statement containing such expressions, the result of the expression is determined (operation) and used in the statement. Operators are represented either by special characters or [reserved indicators](javascript:call_link\('abenabap_words.htm'\)).

-   [Operators](javascript:call_link\('abenoperators.htm'\))

-   [Expressions](javascript:call_link\('abenexpressions.htm'\))

Continue
[Operators](javascript:call_link\('abenoperators.htm'\))
[Expressions](javascript:call_link\('abenexpressions.htm'\))
[Examples of Expression-Oriented Programming](javascript:call_link\('abenexpressions_abexas.htm'\))



**📖 Source**: [abenoperators_expressions.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperators_expressions.htm)

### abenoperators.htm

> **📖 Official SAP Documentation**: [abenoperators.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperators.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operators and Expressions](javascript:call_link\('abenoperators_expressions.htm'\)) → 

Operators

ABAP contains the following operators:

-   Operators that perform special operations in operand positions:

-   [Declaration Operators](javascript:call_link\('abeninline_declarations.htm'\))
    The declaration operators DATA and FIELD-SYMBOL declare variables or field symbols in operand positions.

-   [Constructor Operators](javascript:call_link\('abenconstructor_expressions.htm'\))
    The constructor operators NEW, VALUE, CONV, CORRESPONDING, CAST, REF, EXACT, REDUCE, FILTER, COND, and SWITCH construct values for data objects of specific data types in constructor expressions.

-   Operators that join multiple operands in a single expression:

-   [Assignment Operators](javascript:call_link\('abenequals_operator.htm'\))
    The assignment operator \= joins the source field and target field of an assignment. In the case of assignments, the special [casting operator](javascript:call_link\('abencasting_operator_glosry.htm'\) "Glossary Entry") ?= performs a [down cast](javascript:call_link\('abendown_cast_glosry.htm'\) "Glossary Entry"). The [addition assignment operator](javascript:call_link\('abenadd_assignment_op_glosry.htm'\) "Glossary Entry") ([+=](javascript:call_link\('abencalculation_assignments.htm'\))), [subtraction assignment operator](javascript:call_link\('abensub_assignment_op_glosry.htm'\) "Glossary Entry") ([\-=](javascript:call_link\('abencalculation_assignments.htm'\))), [multiplication assignment operator](javascript:call_link\('abenmult_assignment_op_glosry.htm'\) "Glossary Entry") ([\*=](javascript:call_link\('abencalculation_assignments.htm'\))), [division assignment operator](javascript:call_link\('abendiv_assignment_op_glosry.htm'\) "Glossary Entry") ([/=](javascript:call_link\('abencalculation_assignments.htm'\))), or [concatenation assignment operator](javascript:call_link\('abenconcat_assignment_op_glosry.htm'\) "Glossary Entry") ([\*\*=](javascript:call_link\('abencalculation_assignment_string.htm'\))) performs a [calculation assignment](javascript:call_link\('abencalculation_assignment_glosry.htm'\) "Glossary Entry"). The operator \= also joins actual parameters with formal parameters, for example in procedure calls or when working with [data clusters](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry").

-   [Arithmetic Operators](javascript:call_link\('abapcompute_arith.htm'\))
    The arithmetic operators +, \-, \*, /, DIV, MOD, and \*\* join two or more numeric operands with an arithmetic expression. In addition, the characters + and \- act as signs in arithmetic expressions.

-   [Bit Operators](javascript:call_link\('abapcompute_bit.htm'\))
    The bit operators BIT-AND, BIT-OR, and BIT-XOR join two or more byte-like operands with a bit expression. The bit operator BIT-NOT negates a byte-like operand.

-   [String Operators](javascript:call_link\('abapcompute_string.htm'\))
    The string operator && chains two character-like operands to a string expression.

-   [Relational Operators](javascript:call_link\('abenlogexp.htm'\))
    Relational operators occur in relational expressions, which themselves are components of logical expressions. The [relational operators](javascript:call_link\('abenrelational_operator_glosry.htm'\) "Glossary Entry") \=, <>, <, \>, <=,\>=, BETWEEN, and so on join two or more operands of any data type as a comparison expression. There are additional relational operators for specific data types. The [predicate operator](javascript:call_link\('abenpredicate_operator_glosry.htm'\) "Glossary Entry") IS qualifies an operand.

-   [Boolean Operators](javascript:call_link\('abenlogexp_boole.htm'\))
    The Boolean operators AND, OR, and EQUIV join the results of individual logical expressions with a logical expression. The result of a logical expression is either true or false. The Boolean operator NOT negates the result of a logical expression.

-   Operator that joins two operands in compilations:

-   [Literal Operator](javascript:call_link\('abenliteral_operator.htm'\))
    The literal operator & joins two literals or two string templates with a literal or a string template.



**📖 Source**: [abenoperators.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperators.htm)

### abenexpressions.htm

> **📖 Official SAP Documentation**: [abenexpressions.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexpressions.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operators and Expressions](javascript:call_link\('abenoperators_expressions.htm'\)) → 

Expressions

The following expressions can be constructed in certain [operand positions](javascript:call_link\('abenexpression_positions.htm'\)):

-   Writer positions

-   [Declaration expressions](javascript:call_link\('abeninline_declarations.htm'\))

-   Certain [constructor expressions](javascript:call_link\('abenconstructor_expressions.htm'\))

-   Certain [table expressions](javascript:call_link\('abentable_expressions.htm'\))

-   Reader positions

-   [Logical expressions](javascript:call_link\('abenlogexp.htm'\))

-   [Constructor expressions](javascript:call_link\('abenconstructor_expressions.htm'\))

-   [Table expressions](javascript:call_link\('abentable_expressions.htm'\)) and [mesh path expressions](javascript:call_link\('abenmesh_path_expression.htm'\))

-   [Arithmetic expressions](javascript:call_link\('abapcompute_arith.htm'\))

-   [String expressions](javascript:call_link\('abapcompute_string.htm'\))

-   [Bit expressions](javascript:call_link\('abapcompute_bit.htm'\))

An expression in a [writer position](javascript:call_link\('abenwriting_position_glosry.htm'\) "Glossary Entry") produces a result to which a value is assigned.

An expression in a [reader position](javascript:call_link\('abenreading_position_glosry.htm'\) "Glossary Entry") produces a result that is used as an operand in the statement. Logical expressions can contain [calculation expressions](javascript:call_link\('abencalculation_expression_glosry.htm'\) "Glossary Entry") (arithmetic expressions, string expressions, and bit expressions) as relational expressions. The three different calculation expression types cannot currently be mixed in a single calculation expression.

Notes

-   Although the calculation expression types cannot be mixed directly, a different type of expression can be used as an argument of a permitted function in another expression. In the same way, logical expressions can be used as arguments of [Boolean functions](javascript:call_link\('abenboole_function_glosry.htm'\) "Glossary Entry") in calculation expressions.

-   In [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry"), three other kinds of expressions are possible:

-   [SQL expressions](javascript:call_link\('abensql_expression_glosry.htm'\) "Glossary Entry")

-   [Aggregate expressions](javascript:call_link\('abenaggregate_expression_glosry.htm'\) "Glossary Entry")

-   [SQL path expressions](javascript:call_link\('abencds_path_expression_glosry.htm'\) "Glossary Entry")

The ABAP expressions above can be used as [host expressions](javascript:call_link\('abenhost_expression_glosry.htm'\) "Glossary Entry") in ABAP SQL.



**📖 Source**: [abenexpressions.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexpressions.htm)

### abenexpressions_abexas.htm

> **📖 Official SAP Documentation**: [abenexpressions_abexas.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexpressions_abexas.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operators and Expressions](javascript:call_link\('abenoperators_expressions.htm'\)) → 

Examples of Expression-Oriented Programming

Continue
![Example](exa.gif "Example") [Jawbreaker](javascript:call_link\('abenjaw_breaker_abexa.htm'\))
![Example](exa.gif "Example") [Minesweeper](javascript:call_link\('abenmine_sweeper_abexa.htm'\))
![Example](exa.gif "Example") [2048 Game](javascript:call_link\('abengame_2048_abexa.htm'\))



**📖 Source**: [abenexpressions_abexas.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexpressions_abexas.htm)

### abenjaw_breaker_abexa.htm

> **📖 Official SAP Documentation**: [abenjaw_breaker_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenjaw_breaker_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operators and Expressions](javascript:call_link\('abenoperators_expressions.htm'\)) →  [Examples of Expression-Oriented Programming](javascript:call_link\('abenexpressions_abexas.htm'\)) → 

Jawbreaker

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
        NEXT  h = h && \`<tr>\` &&
         REDUCE string( INIT k = \`\`
          FOR  x = 1  UNTIL x > n
          LET  c = field\[ x \]\[ y \] IN
          NEXT k = k &&
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

This example uses the implementation of a Jawbreaker game to demonstrate expression-oriented ABAP programming (as introduced in Release 7.40). As a comparison, the program DEMO\_JAWBREAKER\_HTML\_700 shows the same function implemented without expressions, mainly using language elements from Release 7.00 only.

To play the game, use the left mouse button to remove adjacent blocks with the same color.



**📖 Source**: [abenjaw_breaker_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenjaw_breaker_abexa.htm)

### abenmine_sweeper_abexa.htm

> **📖 Official SAP Documentation**: [abenmine_sweeper_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmine_sweeper_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operators and Expressions](javascript:call_link\('abenoperators_expressions.htm'\)) →  [Examples of Expression-Oriented Programming](javascript:call_link\('abenexpressions_abexas.htm'\)) → 

Minesweeper

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
        NEXT  h = h && |<tr{ COND #( WHEN over <> '' THEN
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
          NEXT k = |{ k }<td class={ style }| &&
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
       && \`</body></html>\` ).
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

This example uses the implementation of a Minesweeper game to demonstrate expression-oriented ABAP programming (as introduced in Release 7.40). As a comparison, the program DEMO\_MINESWEEPER\_700 shows the same function implemented without expressions, mainly using language elements from Release 7.00 only.

To play the game, use the left and right mouse buttons to enter or select fields.



**📖 Source**: [abenmine_sweeper_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmine_sweeper_abexa.htm)

### abengame_2048_abexa.htm

> **📖 Official SAP Documentation**: [abengame_2048_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengame_2048_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operators and Expressions](javascript:call_link\('abenoperators_expressions.htm'\)) →  [Examples of Expression-Oriented Programming](javascript:call_link\('abenexpressions_abexas.htm'\)) → 

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



**📖 Source**: [abengame_2048_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengame_2048_abexa.htm)

### abenexpressions_abexas.htm

> **📖 Official SAP Documentation**: [abenexpressions_abexas.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexpressions_abexas.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenexpressions_abexas.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexpressions_abexas.htm)


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operators and Expressions](javascript:call_link\('abenoperators_expressions.htm'\)) → 

Examples of Expression-Oriented Programming

Continue
![Example](exa.gif "Example") [Jawbreaker](javascript:call_link\('abenjaw_breaker_abexa.htm'\))
![Example](exa.gif "Example") [Minesweeper](javascript:call_link\('abenmine_sweeper_abexa.htm'\))
![Example](exa.gif "Example") [2048 Game](javascript:call_link\('abengame_2048_abexa.htm'\))
