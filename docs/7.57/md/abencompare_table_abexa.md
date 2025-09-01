---
title: "Comparing Internal Tables"
description: |
  This example demonstrates how internal tables are compared. Source Code REPORT demo_int_tables_compare . CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. TYPES: BEGIN OF line, col1 TYPE i, col2 TYPE i, END OF line. DATA: itab TYPE TABLE
version: "7.57"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencompare_table_abexa.htm"
abapFile: "abencompare_table_abexa.htm"
keywords: ["select", "do", "if", "method", "class", "data", "types", "internal-table", "abencompare", "table", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogical_expr_func.htm) →  [Logical Expressions (log\_exp)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp.htm) →  [Comparison Expressions (rel\_exp)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_comp.htm) →  [rel\_exp - Comparison Rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_rules.htm) →  [rel\_exp - Comparing Internal Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_rules_operands_itab.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Comparing Internal Tables, ABENCOMPARE_TABLE_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

Comparing Internal Tables

This example demonstrates how internal tables are compared.

Source Code   

REPORT demo\_int\_tables\_compare .
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES: BEGIN OF line,
             col1 TYPE i,
             col2 TYPE i,
           END OF line.
    DATA: itab TYPE TABLE OF line WITH EMPTY KEY,
          jtab TYPE TABLE OF line WITH EMPTY KEY.
    FINAL(out) = cl\_demo\_output=>new( ).
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
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

Two standard tables, itab and jtab, are created. itab is filled with three lines and assigned to jtab. An additional line is added to itab and the first relational expression returns the result that itab is greater than jtab. After the same line was added to itab, the second relational expression shows that both tables are the same. Another line is appended to itab and the third relational expression indicates the result that jtab is less than or equal to itab. Next, a further line is added to jtab, the content of which is different from the final line of itab. The next relational expression returns the result that itab is not equal to jtab. The first table field whose content is different for itab and jtab is col1 in the last line of the table, namely 30 for itab and 50 for jtab. In the last relational expression, itab is therefore less than jtab.