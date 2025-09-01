  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [Logical Expressions (log\_exp)](javascript:call_link\('abenlogexp.htm'\)) →  [Comparison Expressions (rel\_exp)](javascript:call_link\('abenlogexp_comp.htm'\)) →  [rel\_exp - Comparison Rules](javascript:call_link\('abenlogexp_rules.htm'\)) →  [rel\_exp - Comparing Internal Tables](javascript:call_link\('abenlogexp_rules_operands_itab.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Comparing%20Internal%20Tables%2C%20ABENCOMPARE_TABLE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Comparing Internal Tables

This example demonstrates how internal tables are compared.

Source Code   

\* Public class definition
CLASS cl\_demo\_int\_tbls\_compare DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_int\_tbls\_compare IMPLEMENTATION.
  METHOD main.
    TYPES: BEGIN OF line,
             col1 TYPE i,
             col2 TYPE i,
           END OF line.
    DATA: itab TYPE TABLE OF line WITH EMPTY KEY,
          jtab TYPE TABLE OF line WITH EMPTY KEY.
    itab = VALUE #( FOR j = 1 UNTIL j > 3
      ( col1 = j col2 = j \*\* 2 ) ).
    jtab = itab.
    itab = VALUE #( BASE itab
                    ( col1 = 10 col2 = 20 ) ).
    IF itab > jtab.
      out->write( 'ITAB >  JTAB' ).
    ENDIF.
    jtab = VALUE #( BASE jtab
                    ( col1 = 10 col2 = 20 ) ).
    IF itab = jtab.
      out->write( 'ITAB =  JTAB' ).
    ENDIF.
    itab = VALUE #( BASE itab
                    ( col1 = 30 col2 = 80 ) ).
    IF jtab <= itab.
      out->write( 'JTAB <= ITAB' ).
    ENDIF.
    jtab = VALUE #( BASE jtab
                    ( col1 = 50 col2 = 60 ) ).
    IF itab <> jtab.
      out->write( 'ITAB <> JTAB' ).
    ENDIF.
    IF itab < jtab.
      out->write( 'ITAB <  JTAB' ).
    ENDIF.
  ENDMETHOD.
ENDCLASS.

Description   

Two standard tables, itab and jtab, are created. itab is filled with three lines and assigned to jtab. An additional line is added to itab and the first relational expression returns the result that itab is greater than jtab. After the same line was added to itab, the second relational expression shows that both tables are the same. Another line is appended to itab and the third relational expression indicates the result that jtab is less than or equal to itab. Next, a further line is added to jtab, the content of which is different from the final line of itab. The next relational expression returns the result that itab is not equal to jtab. The first table field whose content is different for itab and jtab is col1 in the last line of the table, namely 30 for itab and 50 for jtab. In the last relational expression, itab is therefore less than jtab.