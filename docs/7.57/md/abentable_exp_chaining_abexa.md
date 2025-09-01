---
title: "Source Code"
description: |
  REPORT demo_tab_exp_chaining. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS: main, class_constructor. PRIVATE SECTION. CLASS-DATA: langu TYPE sy-langu, index TYPE if_abap_docu=>abap_index_tab. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. FINAL(out) = cl_demo_output=>new( ). 'Re
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_exp_chaining_abexa.htm"
abapFile: "abentable_exp_chaining_abexa.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "internal-table", "field-symbol", "abentable", "exp", "chaining", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_processing_expr_func.htm) →  [itab - Table Expressions (table\_exp)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_expressions.htm) →  [table\_exp - Chainings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_exp_chaining.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: table_exp - Chainings, ABENTABLE_EXP_CHAINING_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0
A%0D%0A%0D%0ASuggestion for improvement:)

table\_exp - Chainings

This example demonstrates how table expressions are chained.

Source Code   

REPORT demo\_tab\_exp\_chaining.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS: main,
                   class\_constructor.
  PRIVATE SECTION.
    CLASS-DATA: langu TYPE sy-langu,
                index TYPE if\_abap\_docu=>abap\_index\_tab.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    FINAL(out) = cl\_demo\_output=>new( ).
    "Read a column of a nested table with table statements
    out->begin\_section( \`Table Statements\` ).
    READ TABLE index WITH KEY key1 = 'ASSIGNING'
                     ASSIGNING FIELD-SYMBOL(<wa1>).
    READ TABLE <wa1>-docu\_objects WITH KEY key2 = 'READ TABLE itab'
                                  ASSIGNING FIELD-SYMBOL(<wa2>).
    IF sy-subrc = 0.
      FINAL(title1) =
        cl\_abap\_docu=>get\_title(
          langu   = langu
          object  = <wa2>-docu\_name
          version = if\_abap\_docu=>union ).
      out->write\_data( title1 ).
    ELSE.
      out->write\_text( \`Nothing found\` ).
    ENDIF.
    "Read a column of a nested table with chained table expressions
    out->next\_section( \`Table Expressions\` ).
    TRY.
        FINAL(title2) =
          cl\_abap\_docu=>get\_title(
            langu   = langu
            object  = index\[ key1 = 'ASSIGNING'
                           \]-docu\_objects\[ key2 = 'READ TABLE itab'
                           \]-docu\_name
            version = if\_abap\_docu=>union  ).
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
    FINAL(index) = cl\_abap\_docu=>get\_abap\_index(
                    langu   = langu
                    version = if\_abap\_docu=>unicode ).
    demo=>index = index->\*.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The example shows how a nested internal table is read using the statement [READ TABLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_table.htm) and using a chained [table expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_expressions.htm).

-   Reads using statements require the statement READ TABLE to be used twice and two explicitly declared field symbols. The first field symbol wa1 is used in the second READ statement and the second field symbol wa2 is used to pass the result to a method.
-   When reads are performed using table expressions, they can be chained and passed to the method directly. No explicitly declared field symbols are required.

The result of both reads is the same.