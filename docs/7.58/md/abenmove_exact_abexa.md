  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalue_assignments.htm) →  [Lossless Assignments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlossless_move.htm) →  [Lossless Assignments, Rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmove_exact.htm) →  [Checking Elementary Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmove_exact_elementary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Lossless%20Assignment%2C%20ABENMOVE_EXACT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Lossless Assignment

This example demonstrates how the operator [EXACT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_exact.htm) is used to make lossless assignments.

Source Code   

\* Public class definition
CLASS cl\_demo\_move\_exact DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_move\_exact IMPLEMENTATION.
  METHOD main.
    DATA: text     TYPE string VALUE \`4 Apples + 2 Oranges\`,
          num\_text TYPE n LENGTH 8.
    out->begin\_section( text
      )->begin\_section( \`Not really exact:\` ).
    num\_text = text.
    out->write\_data( num\_text
      )->next\_section( \`Try to be exact:\` ).
    TRY.
        num\_text = EXACT #( text ).
        out->write\_data( num\_text ).
      CATCH cx\_sy\_conversion\_error INTO FINAL(exc).
        out->write\_text( exc->get\_text( ) ).
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

Description   

Without the operator EXACT, text is assigned to num\_text without the check for validity of the assigned value against the associated [conversion rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_type_string.htm), which produces a value that is not very intuitive, 00000042.

Using the operator EXACT, the value that is passed is checked and an exception is raised in the case in question.