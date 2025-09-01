---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_loop_grp_by_packages DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. METHODS constructor. PRIVATE SECTION. DATA itab TYPE TABLE OF decfloat34 WITH EMPTY KEY. ENDCLASS.  Public class impleme
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_group_by_packages_abexa.htm"
abapFile: "abenloop_group_by_packages_abexa.htm"
keywords: ["loop", "do", "if", "try", "method", "class", "data", "internal-table", "abenloop", "group", "packages", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_processing_statements.htm) →  [LOOP AT itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_variants.htm) →  [LOOP AT itab, GROUP BY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_group_by.htm) →  [Examples of Grouping with LOOP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_group_by_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Grouping%20with%20LOOP%20in%20Packages%2C%20ABENLOOP_GROUP_BY_PACKAGES_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20
improvement:)

itab - Grouping with LOOP in Packages

This example demonstrates a construction of the [group key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengroup_key_glosry.htm "Glossary Entry") that does not depend on the line content.

Source Code   

\* Public class definition
CLASS cl\_demo\_loop\_grp\_by\_packages DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    DATA
      itab TYPE TABLE OF decfloat34 WITH EMPTY KEY.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_loop\_grp\_by\_packages IMPLEMENTATION.
  METHOD main.
    DATA(n) = 10.
    cl\_demo\_input=>new(
     )->request( EXPORTING text  = \`Package size\`
                 CHANGING  field = n ).
    IF n <= 0.
      RETURN.
    ENDIF.
    out->begin\_section( |Packages of { n }| ).
    DATA group LIKE itab.
    LOOP AT itab INTO FINAL(wa)
         GROUP BY ( sy-tabix - 1 ) DIV n + 1.
      CLEAR group.
      LOOP AT GROUP wa ASSIGNING FIELD-SYMBOL(<wa>).
        group = VALUE #( BASE group ( <wa> ) ).
      ENDLOOP.
      out->write( group ).
    ENDLOOP.
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    itab = VALUE #( FOR j = 1 UNTIL j > 100 ( 1 / j ) ).
  ENDMETHOD.
ENDCLASS.

Description   

[Grouping](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_group_by.htm) of an internal table text with [representative binding](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_group_by_binding.htm). The [group key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_group_by_key.htm) of the [group loop](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengroup_loop_glosry.htm "Glossary Entry") is constructed as a value of the type i, which is calculated from the line index of the current line in sy-tabix. This creates groups of lines with the same definable size.

In the group loop, the lines of each group are placed in an internal table group in a [member loop](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmember_loop_glosry.htm "Glossary Entry") using the [value operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_operator_glosry.htm "Glossary Entry") with the addition [BASE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_constructor_params_itab.htm). This table is also displayed. Here, the group is addressed using the work area wa of the original output behavior of the LOOP due to the representative binding.

group could also be filled by the evaluation of a table comprehension using [FOR ... IN GROUP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfor_in_group.htm), instead of in a [member loop](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmember_loop_glosry.htm "Glossary Entry") [LOOP AT GROUP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_group.htm):

group = VALUE #( FOR <wa> IN GROUP wa ( <wa> ) ).

The executable example for [grouping with FOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfor_group_by_packages_abexa.htm) demonstrates how the entire group loop can be implemented using expressions.