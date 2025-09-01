  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [Logical Expressions (log\_exp)](javascript:call_link\('abenlogexp.htm'\)) →  [Comparison Expressions (rel\_exp)](javascript:call_link\('abenlogexp_comp.htm'\)) →  [rel\_exp - Comparison Operators](javascript:call_link\('abenlogexp_op.htm'\)) →  [rel\_exp - Comparison Operators for All Data Types](javascript:call_link\('abenlogexp_compare_all.htm'\)) →  [rel\_exp - Tabular Comparison Operator IN](javascript:call_link\('abenlogexp_select_option.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20rel_exp%20-%20Comparison%20with%20Ranges%20Table%2C%20ABENLOGEXP_IN_RANGES_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improve
ment:)

rel\_exp - Comparison with Ranges Table

This example demonstrates the evaluation of ranges tables in a comparison expression.

Source Code   

\* Public class definition
CLASS cl\_demo\_logexp\_in DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_logexp\_in IMPLEMENTATION.
  METHOD main.
    DATA letter TYPE c LENGTH 1 VALUE 'F'.
    cl\_demo\_input=>new( )->request( CHANGING field = letter ).
    DATA rtab LIKE RANGE OF letter.
    rtab = VALUE #(
      ( sign = 'I' option = 'EQ' low = 'A' )
      ( sign = 'I' option = 'BT' low = 'H' high = 'K' )
      ( sign = 'E' option = 'EQ' low = 'M' )
      ( sign = 'E' option = 'BT' low = 'X' high = 'Z' ) ).
    out->write( rtab ).
    IF letter IN rtab.
      out->write( |{ letter } in rtab| ).
    ELSE.
      out->write( |{ letter } not in rtab| ).
    ENDIF.
  ENDMETHOD.
ENDCLASS.

Description   

The example constructs a [ranges table](javascript:call_link\('abenranges_table_glosry.htm'\) "Glossary Entry") and compares input values with this table using the [IN](javascript:call_link\('abenlogexp_select_option.htm'\)) operator.