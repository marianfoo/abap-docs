  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Typing](javascript:call_link\('abentyping.htm'\)) → 

Generic Typing and Full Typing

This example demonstrates how generically and fully typed formal parameters are accessed.

Source Code

REPORT demo\_typing.
CLASS demo\_typing DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS start.
  PRIVATE SECTION.
    TYPES: BEGIN OF struc1,
             cola TYPE i,
             colb TYPE i,
           END OF struc1,
           BEGIN OF struc2,
             colb TYPE i,
             cola TYPE i,
           END OF struc2,
           itab1g TYPE STANDARD TABLE OF struc1,
           itab2g TYPE STANDARD TABLE OF struc2,
           itab2c TYPE STANDARD TABLE OF struc2
                       WITH NON-UNIQUE DEFAULT KEY.
    CLASS-METHODS sort\_itab IMPORTING VALUE(pg) TYPE itab2g
                                      VALUE(pc) TYPE itab2c.
ENDCLASS.
CLASS demo\_typing IMPLEMENTATION.
  METHOD start.
    DATA: tab TYPE itab1g,
          wa  LIKE LINE OF tab.
    tab = VALUE #(
      FOR j = 1 UNTIL j > 5
        ( cola = j colb = 6 - j ) ).
    sort\_itab( pg = tab
               pc = tab ).
  ENDMETHOD.
  METHOD sort\_itab.
    DATA(out) = cl\_demo\_output=>new( ).
    SORT pg BY cola.
    out->write\_data( pg ).
    SORT pg BY ('COLA').
    out->write\_data( pg ).
    SORT pc BY cola.
    out->write\_data( pc ).
    SORT pc BY ('COLA').
    out->write\_data( pc ).
    out->display( ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo\_typing=>start( ).

Description

Three table types are declared in the class demo\_typing:

-   itab1g has the row type struc1 with the components cola and colb. It is generic since the primary table key is not specified.

-   itab2g has the row type struc2 with the components colb and cola. It is generic since the primary table key is not specified.

-   itab2c has the row type struc2 with the components cola and colb. It is full since the primary table key is specified.

The method sort\_itab has two formal parameters:

-   pg is typed generically with itab2g.

-   pc is typed fully with itab2c.

In the method start, an internal table tab is declared with reference to itab1g. The key is specified implicitly. This table is filled and passed to the formal parameters of sort\_itab.

In sort\_itab, both formal parameters are sorted twice. In the first sort, the column cola is specified statically as a sort criterion and in the second sort it is specified dynamically. The behavior is as follows:

-   The first SORT statement accesses the generically typed formal parameter pg statically. In this case, the typing with itab2g takes priority, where cola is the second column.

-   The second SORT statement accesses the generically typed formal parameter pg dynamically. In this case, the type of the actual parameter itab1g takes priority, where cola is the first column.

-   The third and fourth SORT statements access the fully typed formal parameter pc dynamically or statically. In these cases, the typing with itab2c takes priority, where cola is the second column.

If components of generically typed formal parameters are accessed dynamically, a runtime error may occur if the components do not exist in the actual parameter.