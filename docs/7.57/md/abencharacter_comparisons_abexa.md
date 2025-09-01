  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [Logical Expressions (log\_exp)](javascript:call_link\('abenlogexp.htm'\)) →  [Comparison Expressions (rel\_exp)](javascript:call_link\('abenlogexp_comp.htm'\)) →  [rel\_exp - Comparison Operators](javascript:call_link\('abenlogexp_op.htm'\)) →  [rel\_exp - Comparison Operators for Character-Like Data Types](javascript:call_link\('abenlogexp_strings.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: rel_exp - Comparison Operators for Character-Like Data Types, ABENCHARACTER_COMPARISO
NS_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

rel\_exp - Comparison Operators for Character-Like Data Types

This example demonstrates the [comparison operators for character-like data types](javascript:call_link\('abenlogexp_strings.htm'\)).

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

Text fields with length 5 can be supplied with different content and compared with each other using the available comparison operators.