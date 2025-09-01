  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Lossless Assignments](javascript:call_link\('abenlossless_move.htm'\)) →  [Lossless Assignments - Rules](javascript:call_link\('abapmove_exact.htm'\)) →  [Checking Elementary Data Objects](javascript:call_link\('abenmove_exact_elementary.htm'\)) → 

Lossless Assignment

This example demonstrates how the operator [EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\)) is used to make lossless assignments.

Source Code

REPORT demo\_move\_exact.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: text     TYPE string VALUE \`4 Apples + 2 Oranges\`,
          num\_text TYPE n LENGTH 8.
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( text
      )->begin\_section( \`Not really exact:\` ).
    num\_text = text.
    out->write\_data( num\_text
      )->next\_section( \`Try to be exact:\` ).
    TRY.
        num\_text = EXACT #( text ).
        out->write\_data( num\_text ).
      CATCH cx\_sy\_conversion\_error INTO DATA(exc).
        out->write\_text( exc->get\_text( ) ).
    ENDTRY.
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Without the operator EXACT, text is assigned to num\_text without the validity of the assigned value being checked against the associated [conversion rules](javascript:call_link\('abenconversion_type_string.htm'\)). This produces a value that is not very intuitive, "00000042".

Using the operator EXACT, the value that is passed is checked and an exception is raised in the case in question.