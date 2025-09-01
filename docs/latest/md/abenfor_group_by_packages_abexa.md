---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_for_grps_by_packages DEFINITION PUBLIC INHERITING FROM cl_demo_classrun CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. METHODS constructor. PRIVATE SECTION. TYPES i_tab TYPE STANDARD TABLE OF decfloat34 WITH EMPTY KEY. DATA: itab TYPE i_ta
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfor_group_by_packages_abexa.htm"
abapFile: "abenfor_group_by_packages_abexa.htm"
keywords: ["loop", "do", "if", "case", "try", "method", "class", "data", "types", "internal-table", "abenfor", "group", "packages", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_processing_expr_func.htm) →  [FOR, Table Iterations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfor_itab.htm) →  [itab - Examples of Grouping with FOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfor_grouping_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Grouping%20with%20FOR%20in%20Packages%2C%20ABENFOR_GROUP_BY_PACKAGES_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20im
provement:)

itab - Grouping with FOR in Packages

This example demonstrates a construction of the [group key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengroup_key_glosry.htm "Glossary Entry") that does not depend on the line content.

Source Code   

\* Public class definition
CLASS cl\_demo\_for\_grps\_by\_packages DEFINITION
  PUBLIC
  INHERITING FROM cl\_demo\_classrun
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    TYPES
      i\_tab TYPE STANDARD TABLE OF decfloat34 WITH EMPTY KEY.
    DATA:
      itab TYPE i\_tab,
      n    TYPE i VALUE 10,
      idx  TYPE i.
    METHODS
      group RETURNING VALUE(group\_key) TYPE i.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_for\_grps\_by\_packages IMPLEMENTATION.
  METHOD main.
    TYPES ot TYPE REF TO if\_demo\_output.
    cl\_demo\_input=>new(
      )->request( EXPORTING text  = \`Package size\`
                  CHANGING  field = n ).
    IF n <= 0.
      RETURN.
    ENDIF.
    out->begin\_section( |Packages of { n }| ).
    out = REDUCE #(
      INIT ol TYPE ot
      FOR GROUPS OF wa IN itab GROUP BY group( )
      LET group = VALUE i\_tab( FOR <wa> IN GROUP wa ( <wa> ) ) IN
      NEXT ol = out->write( group ) ).
  ENDMETHOD.
  METHOD group.
    idx += 1.
    group\_key = ( idx - 1 ) DIV n + 1.
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    itab = VALUE #( FOR j = 1 UNTIL j > 100 ( 1 / j ) ).
  ENDMETHOD.
ENDCLASS.

Description   

This example works in the same way as the corresponding [executable example](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_group_by_packages_abexa.htm) for [LOOP AT ... GROUP BY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_group_by.htm), but uses the expression [FOR GROUPS ... OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfor_groups_of.htm) for a [table reduction](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_reduction_glosry.htm "Glossary Entry") with [REDUCE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_reduce.htm) instead of the [group loop](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengroup_loop_glosry.htm "Glossary Entry"). The [group key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengroup_key_glosry.htm "Glossary Entry") after GROUP BY cannot be constructed in the same way in this case, since the system field sy-tabix is not available during grouping in expressions. The addition INDEX INTO cannot be used either, since it sets a value for each group but not for each evaluated line. This is why a user-defined method, group, is called here to count the lines.

The result of the table reduction is a reference to an object of the class CL\_DEMO\_OUTPUT to which the results of the grouping are written. The group members are written to a local auxiliary table members using a [table comprehension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_comprehension_glosry.htm "Glossary Entry") with [VALUE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_constructor_params_itab.htm). This table comprehension could also be used in the [executable example](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_group_by_overlap_abexa.htm) for LOOP AT ... GROUP BY instead of the [member loop](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmember_loop_glosry.htm "Glossary Entry").