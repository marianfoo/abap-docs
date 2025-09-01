---
title: "Internal Tables, Grouping with FOR in Packages"
description: |
  This example demonstrates a construction of the group key(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengroup_key_glosry.htm 'Glossary Entry') that does not depend on the row content. Source Code REPORT demo_for_groups_by_packages. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-
version: "7.54"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfor_group_by_packages_abexa.htm"
abapFile: "abenfor_group_by_packages_abexa.htm"
keywords: ["select", "loop", "do", "if", "case", "try", "method", "class", "data", "types", "internal-table", "abenfor", "group", "packages", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab.htm) →  [Expressions and Functions for Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_processing_expr_func.htm) →  [FOR - Table Iterations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfor_itab.htm) →  [Examples of Grouping with FOR](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfor_grouping_abexas.htm) → 

Internal Tables, Grouping with FOR in Packages

This example demonstrates a construction of the [group key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengroup_key_glosry.htm "Glossary Entry") that does not depend on the row content.

Source Code

REPORT demo\_for\_groups\_by\_packages.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      class\_constructor.
  PRIVATE SECTION.
    TYPES
      i\_tab TYPE STANDARD TABLE OF decfloat34 WITH EMPTY KEY.
    CLASS-DATA:
      itab TYPE i\_tab,
      n    TYPE i VALUE 10,
      idx  TYPE i.
    CLASS-METHODS
      group RETURNING VALUE(group\_key) TYPE i.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA out TYPE REF TO if\_demo\_output.
    cl\_demo\_input=>request( EXPORTING text  = \`Package size\`
                            CHANGING  field = n ).
    IF n <= 0.
      RETURN.
    ENDIF.
    out = REDUCE #(
      INIT o = cl\_demo\_output=>new(
                 )->begin\_section( |Packages of { n }| )
      FOR GROUPS OF wa IN itab GROUP BY group( )
      LET group = VALUE i\_tab( FOR <wa> IN GROUP wa ( <wa> ) ) IN
      NEXT o = o->write( group ) ).
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    itab = VALUE #( FOR j = 1 UNTIL j > 100 ( 1 / j ) ).
  ENDMETHOD.
  METHOD group.
    idx += 1.
    group\_key = ( idx - 1 ) DIV n + 1.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example works in the same way as the corresponding [executable example](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenloop_group_by_packages_abexa.htm) for [LOOP AT ... GROUP BY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_group_by.htm), but uses the expression [FOR GROUPS ... OF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfor_groups_of.htm) for a [table reduction](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_reduction_glosry.htm "Glossary Entry") with [REDUCE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_reduce.htm) instead of the [group loop](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengroup_loop_glosry.htm "Glossary Entry"). The [group key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengroup_key_glosry.htm "Glossary Entry") after GROUP BY cannot be constructed in the same way in this case, since the system field sy-tabix is not available during grouping in expressions. The addition INDEX INTO cannot be used either, since it sets a value for each group but not for each evaluated row. This is why a self-defined method, group, is called here to count the rows.

The result of the table reduction is a reference to an object of the class CL\_DEMO\_OUTPUT to which the results of the grouping are written. The group members are written to a local auxiliary table members using a [table comprehension](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_comprehension_glosry.htm "Glossary Entry") with [VALUE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_constructor_params_itab.htm). This table comprehension could also be used in the [executable example](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenloop_group_by_overlap_abexa.htm) for LOOP AT ... GROUP BY instead of the [member loop](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmember_loop_glosry.htm "Glossary Entry").