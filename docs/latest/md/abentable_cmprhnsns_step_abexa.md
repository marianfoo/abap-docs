---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_table_comprh_step DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Public class implementation CLASS cl_demo_table_comprh_step IMPLEMENTATION. METHOD main. TYPES: BEGIN OF line
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_cmprhnsns_step_abexa.htm"
abapFile: "abentable_cmprhnsns_step_abexa.htm"
keywords: ["loop", "do", "if", "try", "method", "class", "data", "types", "internal-table", "abentable", "cmprhnsns", "step", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_processing_expr_func.htm) →  [FOR, Table Iterations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfor_itab.htm) →  [itab - Examples of Table Comprehensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_comprehensions_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Table%20Comprehensions%2C%20Use%20of%20Step%20Size%2C%20ABENTABLE_CMPRHNSNS_STEP_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestio
n%20for%20improvement:)

itab - Table Comprehensions, Use of Step Size

This example demonstrates how the step size and the processing order are used in [table comprehensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_comprehension_glosry.htm "Glossary Entry").

Source Code   

\* Public class definition
CLASS cl\_demo\_table\_comprh\_step DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_table\_comprh\_step IMPLEMENTATION.
  METHOD main.
    TYPES: BEGIN OF line,
             tabix TYPE sy-tabix,
             value TYPE i,
           END OF line.
    DATA output TYPE TABLE OF line WITH EMPTY KEY.
    out->write\_doc(
      \`An internal table itab is declared and filled as follows:\`
      )->begin\_code( \`itab\` ).
    DATA itab TYPE STANDARD TABLE OF i
         WITH EMPTY KEY
         WITH UNIQUE SORTED KEY sortkey COMPONENTS table\_line.
    itab = VALUE #( FOR i = 1 UNTIL i > 20 ( i ) ).
    out->end\_code( \`itab\` ).
    SORT itab BY table\_line DESCENDING.
    output = VALUE #( FOR <fs> IN itab INDEX INTO tabix FROM 4 TO 16
      STEP 2 ( tabix = tabix value = <fs> ) ).
    out->next\_section( \`FOR STEP 2\` )->write( output ).
    CLEAR output.
    output = VALUE #( FOR <fs> IN itab INDEX INTO tabix
      USING KEY sortkey FROM 4 TO 16 STEP 2
            ( tabix = tabix value = <fs> ) ).
    out->next\_section( \`FOR STEP 2 USING KEY sortkey\`
      )->write( output ).
    CLEAR output.
    output = VALUE #( FOR <fs> IN itab INDEX INTO tabix
      USING KEY sortkey FROM 16 TO 4 STEP -2
            ( tabix = tabix value = <fs> ) ).
    out->next\_section( \`FOR STEP -2 USING KEY sortkey\`
      )->write( output ).
    CLEAR output.
    output = VALUE #( FOR <fs> IN itab INDEX INTO tabix FROM 16 TO 4
      STEP -2 ( tabix = tabix value = <fs> ) ).
    out->next\_section( \`FOR STEP -2\` )->write( output ).
    CLEAR output.
  ENDMETHOD.
ENDCLASS.

Description   

The content of an internal table itab is defined by using the additions STEP and USING KEY.

1.  Every second table line is read in descending order based on the STEP statement, starting at the fourth table line from last because of the FROM addition.
2.  Every second table line is read in ascending order based on the USING KEY and STEP statement, starting at the fourth first table line because of the FROM addition.
3.  Every second table line is read in descending order based on the USING KEY and STEP statement, starting at the fifth table line from last because of the FROM addition.
4.  Every second table line is read in ascending order based on the STEP statement, starting at the fifth first table line because of the FROM addition.

See also the [executable example](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_at_itab_step_abexa.htm) for the LOOP statement using the addition STEP.