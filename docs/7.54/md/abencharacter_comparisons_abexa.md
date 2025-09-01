  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [log\_exp - Logical Expressions](javascript:call_link\('abenlogexp.htm'\)) →  [rel\_exp - Comparison Expressions](javascript:call_link\('abenlogexp_comp.htm'\)) →  [rel\_exp - Relational Operators](javascript:call_link\('abenlogexp_op.htm'\)) →  [rel\_exp - Relational Operators for Character-Like Data Types](javascript:call_link\('abenlogexp_strings.htm'\)) → 

Relational Operators for Character-Like Data Types

This example demonstrates the [relational operators for character-like data types](javascript:call_link\('abenlogexp_strings.htm'\)).

Source Code

REPORT demo\_character\_comparison.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES:
      BEGIN OF result,
        operand TYPE string,
        result  TYPE string,
        fdpos   TYPE sy-fdpos,
      END OF result.
    DATA results TYPE STANDARD TABLE OF result WITH EMPTY KEY.
    DATA: f1 TYPE c LENGTH 5 VALUE 'BD   ',
          f2 TYPE c LENGTH 5 VALUE 'ABCDE'.
    cl\_demo\_input=>new(
      )->add\_field( CHANGING field = f1
      )->add\_field( CHANGING field = f2 )->request( ).
    results = VALUE #( BASE results
     ( operand = 'CO'
       result     = COND #( WHEN f1 CO f2 THEN abap\_true )
       fdpos      = sy-fdpos ) ).
    results = VALUE #( BASE results
     ( operand = 'CN'
       result     = COND #( WHEN f1 CN f2 THEN abap\_true )
       fdpos      = sy-fdpos ) ).
    results = VALUE #( BASE results
     ( operand = 'CA'
       result     = COND #( WHEN f1 CA f2 THEN abap\_true )
       fdpos      = sy-fdpos ) ).
    results = VALUE #( BASE results
     ( operand = 'NA'
       result     = COND #( WHEN f1 NA f2 THEN abap\_true )
       fdpos      = sy-fdpos ) ).
    results = VALUE #( BASE results
     ( operand = 'CS'
       result     = COND #( WHEN f1 CS f2 THEN abap\_true )
       fdpos      = sy-fdpos ) ).
    results = VALUE #( BASE results
     ( operand = 'NS'
       result     = COND #( WHEN f1 NS f2 THEN abap\_true )
       fdpos      = sy-fdpos ) ).
    results = VALUE #( BASE results
     ( operand = 'CP'
       result     = COND #( WHEN f1 CP f2 THEN abap\_true )
       fdpos      = sy-fdpos ) ).
    results = VALUE #( BASE results
     ( operand = 'NP'
       result     = COND #( WHEN f1 NP f2 THEN abap\_true )
       fdpos      = sy-fdpos ) ).
    cl\_demo\_output=>new(
      )->write( |'{ f1 WIDTH = 5 }' operand '{ f2 WIDTH = 5 }'|
      )->display( results ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Text fields with length 5 can be given different content and compared with each other using the available relational operators.