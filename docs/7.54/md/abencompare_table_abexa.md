---
title: "Comparing Internal Tables"
description: |
  This example demonstrates how internal tables are compared. Source Code REPORT demo_int_tables_compare . CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. TYPES: BEGIN OF line, col1 TYPE i, col2 TYPE i, END OF line. DATA: itab TYPE TABLE
version: "7.54"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencompare_table_abexa.htm"
abapFile: "abencompare_table_abexa.htm"
keywords: ["select", "do", "if", "method", "class", "data", "types", "internal-table", "abencompare", "table", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogical_expr_func.htm) →  [log\_exp - Logical Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp.htm) →  [rel\_exp - Comparison Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_comp.htm) →  [rel\_exp - Comparison Rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_rules.htm) →  [rel\_exp - Comparing Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_rules_operands_itab.htm) → 

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
    DATA(out) = cl\_demo\_output=>new( ).
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

Two standard tables, itab and jtab, are created. itab is filled with three rows and assigned to jtab. A further row is added to itab and the first relational expression returns the result that itab is greater than jtab. After the same row is added to jtab, the second relational expression returns the result that both tables are the same. Another row is added to itab and the third relational expression returns the result that jtab is less than or equal to itab. Next, a further row is added to jtab, the content of which is different from the final row of itab. The next relational expression returns the result that itab is not equal to jtab. The first table field where the content of itab and jtab differs is col1 in the last row of the table, namely 30 for itab and 50 for jtab. In the last relational expression, itab is therefore less than jtab.