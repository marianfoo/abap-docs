  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Expressions and Functions for Internal Tables](javascript:call_link\('abentable_processing_expr_func.htm'\)) →  [table\_exp - Table Expressions](javascript:call_link\('abentable_expressions.htm'\)) →  [table\_exp - Chainings](javascript:call_link\('abentable_exp_chaining.htm'\)) → 

Table Expressions, Chainings

This example demonstrates how table expressions are chained.

Source Code

REPORT demo\_tab\_exp\_chaining.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS: main,
                   class\_constructor.
  PRIVATE SECTION.
    CLASS-DATA: langu TYPE sy-langu,
                index TYPE cl\_abap\_docu=>abap\_index\_tab.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    "Read a column of a nested table with table statements
    out->begin\_section( \`Table Statements\` ).
    READ TABLE index WITH KEY key1 = 'ASSIGNING'
                     ASSIGNING FIELD-SYMBOL(<wa1>).
    READ TABLE <wa1>-docu\_objects WITH KEY key2 = 'READ TABLE itab'
                                  ASSIGNING FIELD-SYMBOL(<wa2>).
    IF sy-subrc = 0.
      DATA(title1) =
        cl\_abap\_docu=>get\_title(
          langu  = langu
          object = <wa2>-docu\_name ).
      out->write\_data( title1 ).
    ELSE.
      out->write\_text( \`Nothing found\` ).
    ENDIF.
    "Read a column of a nested table with chained table expressions
    out->next\_section( \`Table Expressions\` ).
    TRY.
        DATA(title2) =
          cl\_abap\_docu=>get\_title(
            langu  = langu
            object = index\[ key1 = 'ASSIGNING'
                          \]-docu\_objects\[ key2 = 'READ TABLE itab'
                          \]-docu\_name ).
        out->write\_data( title2 ).
      CATCH cx\_sy\_itab\_line\_not\_found ##no\_handler.
        out->write\_text( \`Nothing found\` ).
    ENDTRY.
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    langu = sy-langu.
    IF langu <> 'D'.
      langu = 'E'.
    ENDIF.
    DATA(index) = cl\_abap\_docu=>get\_abap\_index( langu = langu ).
    demo=>index = index->\*.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The example shows a read performed on a nested internal table using the statement [READ TABLE](javascript:call_link\('abapread_table.htm'\)) and using a chained [table expression](javascript:call_link\('abentable_expressions.htm'\)).

-   Reads performed using statements require the statement READ TABLE to be used twice and two explicitly declared field symbols. The first field symbol, wa1, is used in the second READ statement and the second field symbol, wa2, is used to pass the result to a method.

-   When reads are performed using table expressions, the expressions can be chained and passed to the method directly. No explicitly declared field symbols are required.

The result of both reads is the same.