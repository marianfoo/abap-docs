---
title: "Inverse Reads on Internal Table without STEP"
description: |
  This example demonstrates a table reduction(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_reduction_glosry.htm 'Glossary Entry') implemented by a conditional iteration. Source Code REPORT demo_for_reverse_iteration. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS mai
version: "7.57"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninverse_itab_for_abexa.htm"
abapFile: "abeninverse_itab_for_abexa.htm"
keywords: ["select", "do", "while", "if", "try", "method", "class", "data", "internal-table", "abeninverse", "itab", "for", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_flow_logic.htm) →  [Iteration Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeniteration_expressions.htm) →  [FOR, Iteration Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfor.htm) →  [Examples of Iteration Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeniteration_expressions_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Inverse Reads on Internal Table without STEP, ABENINVERSE_ITAB_FOR_ABEXA, 757%0D%0A%0
D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Inverse Reads on Internal Table without STEP

This example demonstrates a [table reduction](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_reduction_glosry.htm "Glossary Entry") implemented by a conditional iteration.

Source Code   

REPORT demo\_for\_reverse\_iteration.
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
    FINAL(output) =
      REDUCE string(
        INIT o = \`\`
        FOR  i = lines( itab ) THEN i - 1 WHILE i > 0
        NEXT o &&= COND #( LET r = itab\[ KEY sort\_key INDEX i \] IN
                           WHEN r > 2 THEN r && \` \` ) ).
    cl\_demo\_output=>display( output ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The example shows how an inverse [table iteration](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfor_itab.htm) could be performed by an iteration expression accessing a table expression before the addition [STEP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfor_cond.htm) was introduced for direct table iterations.