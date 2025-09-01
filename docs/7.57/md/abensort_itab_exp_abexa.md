---
title: "Sorting Internal Tables Dynamically"
description: |
  This example demonstrates how internal tables are sorted dynamically using an expression. Source Code REPORT demo_sort_itab_exp. CLASS cx_illegal_direction DEFINITION INHERITING FROM cx_static_check. ENDCLASS. CLASS demo_sort DEFINITION. PUBLIC SECTION. CLASS-METHODS main. PRIVATE SECTION. C
version: "7.57"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensort_itab_exp_abexa.htm"
abapFile: "abensort_itab_exp_abexa.htm"
keywords: ["select", "do", "if", "case", "try", "catch", "method", "class", "data", "internal-table", "abensort", "itab", "exp", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_processing_statements.htm) →  [SORT itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsort_itab.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Sorting Internal Tables Dynamically, ABENSORT_ITAB_EXP_ABEXA, 757%0D%0A%0D%0AError:%0
D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Sorting Internal Tables Dynamically

This example demonstrates how internal tables are sorted dynamically using an expression.

Source Code   

REPORT demo\_sort\_itab\_exp.
CLASS cx\_illegal\_direction DEFINITION INHERITING FROM cx\_static\_check.
ENDCLASS.
CLASS demo\_sort DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-DATA itab TYPE TABLE OF string WITH EMPTY KEY.
    CLASS-METHODS sort\_itab
      IMPORTING direction TYPE string
      RETURNING VALUE(r) LIKE itab
      RAISING   cx\_illegal\_direction.
ENDCLASS.
CLASS demo\_sort IMPLEMENTATION.
  METHOD main.
    itab = VALUE #( ( \`b\` ) ( \`a\` ) ( \`c\` ) ).
    TRY.
        FINAL(out) = cl\_demo\_output=>new( ).
        out->write( sort\_itab( 'DOWN' )
          )->write( sort\_itab( 'UP' )
          )->display( ).
      CATCH cx\_illegal\_direction.
        RETURN.
    ENDTRY.
  ENDMETHOD.
  METHOD sort\_itab.
    SORT itab BY VALUE abap\_sortorder\_tab(
       ( name       = 'TABLE\_LINE'
         descending = SWITCH #( direction
                                WHEN 'UP'   THEN ' '
                                WHEN 'DOWN' THEN 'X'
                                ELSE THROW cx\_illegal\_direction( ) )
         astext     = 'X ' ) ).
    r = itab.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo\_sort=>main( ).

Description   

The method sort\_itab sorts an internal table using the statement [SORT itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsort_itab.htm), where the sort criteria are specified as a table of type abap\_sortorder\_tab constructed using the value operator [VALUE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_value.htm). The component descending of this table is set using a [conditional expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconditional_expression_glosry.htm "Glossary Entry") with the case distinction [SWITCH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconditional_expression_switch.htm), depending on the input parameter direction.