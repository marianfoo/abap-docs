---
title: "Inverse Reads on Internal Table with FOR"
description: |
  This example demonstrates how sequential inverse reads are performed on an internal table. Source Code REPORT demo_value_cond_iteration. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA itab TYPE STANDARD TABLE OF i WITH EMPTY KEY W
version: "7.54"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninverse_itab_for_abexa.htm"
abapFile: "abeninverse_itab_for_abexa.htm"
keywords: ["select", "do", "while", "method", "class", "data", "internal-table", "abeninverse", "itab", "for", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_flow_logic.htm) →  [Iteration Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeniteration_expressions.htm) →  [FOR - Iteration Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfor.htm) →  [Examples of Iteration Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeniteration_expressions_abexas.htm) → 

Inverse Reads on Internal Table with FOR

This example demonstrates how sequential inverse reads are performed on an internal table.

Source Code

REPORT demo\_value\_cond\_iteration.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA
      itab TYPE STANDARD TABLE OF i
           WITH EMPTY KEY
           WITH NON-UNIQUE SORTED KEY sort\_key COMPONENTS table\_line.
    itab = VALUE #( ( 2 ) ( 5 ) ( 1 ) ( 3 ) ( 4 ) ).
    DATA(output) =
      REDUCE string(
        INIT o = \`\`
        FOR  i = lines( itab ) THEN i - 1 WHILE i > 0
        NEXT o = o && COND #( LET r = itab\[ KEY sort\_key INDEX i \] IN
                              WHEN r > 2 THEN r && \` \` ) ).
    cl\_demo\_output=>display( output ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

In a conditional iteration, an internal table is read using WHILE and a table expression. The table expression uses the secondary table key sort\_key and the result is created in a conditional expression using cond. The example shows how to bypass the restriction that inverse [table iterations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfor_itab.htm) cannot be performed.