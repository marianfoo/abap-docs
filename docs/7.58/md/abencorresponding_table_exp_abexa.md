---
title: "Component Operator for Table Expression"
description: |
  This example demonstrates the component operator(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expr_corresponding.htm) for a table expression. Source Code  Public class definition CLASS cl_demo_crrspndng_table_exp DEFINITION INHERITING FROM cl_demo_classrun PUB
version: "7.58"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencorresponding_table_exp_abexa.htm"
abapFile: "abencorresponding_table_exp_abexa.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "internal-table", "abencorresponding", "table", "exp", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalue_assignments.htm) →  [Assigning Structure Components](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencorresponding.htm) →  [Assigning Components, Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencorresponding_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Component%20Operator%20for%20Table%20Expression%2C%20ABENCORRESPONDING_TABLE_EXP_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20i
mprovement:)

Component Operator for Table Expression

This example demonstrates the [component operator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expr_corresponding.htm) for a table expression.

Source Code   

\* Public class definition
CLASS cl\_demo\_crrspndng\_table\_exp DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    DATA:
      itab TYPE HASHED TABLE OF spfli WITH UNIQUE KEY carrid connid,
      BEGIN OF struct,
        carrid   TYPE spfli-carrid,
        connid   TYPE spfli-connid,
        cityfrom TYPE spfli-cityfrom,
        cityto   TYPE spfli-cityto,
      END OF struct,
      carrid TYPE spfli-carrid VALUE 'LH',
      connid TYPE spfli-connid VALUE '0400'.
    METHODS
      input.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_crrspndng\_table\_exp IMPLEMENTATION.
  METHOD main.
    input( ).
    TRY.
        struct =
          CORRESPONDING #( itab\[ carrid = carrid connid = connid \] ).
        out->write( struct ).
      CATCH cx\_sy\_itab\_line\_not\_found.
        out->write( 'Nothing found' ).
    ENDTRY.
  ENDMETHOD.
  METHOD input.
    cl\_demo\_input=>new(
      )->add\_field( CHANGING field = carrid
      )->add\_field( CHANGING field = connid
      )->request( ).
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    SELECT \*
           FROM spfli
           INTO TABLE @itab.
  ENDMETHOD.
ENDCLASS.

Description   

This example shows a [table expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_expressions.htm) that reads a line of an internal table as a parameter of a constructor expression with the component operator CORRESPONDING. After the assignment, the components of the target structure struct contain the values of the identically named column of the line read by the table expression.