---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_allow_precision_loss DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Public class implementation CLASS cl_demo_allow_precision_loss IMPLEMENTATION. METHOD main. TYPES result_
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_expr_aggr_prec_loss_abexa.htm"
abapFile: "abensql_expr_aggr_prec_loss_abexa.htm"
keywords: ["select", "insert", "delete", "do", "if", "method", "class", "data", "types", "abensql", "expr", "aggr", "prec", "loss", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm) →  [sql\_exp - sql\_agg](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_aggregate.htm) →  [sql\_agg - Examples of Aggregate Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_agg_expr_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_agg%20-%20Aggregate%20Function%20ALLOW_PRECISION_LOSS%2C%20ABENSQL_EXPR_AGGR_PREC_LOSS_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
%20for%20improvement:)

sql\_agg - Aggregate Function ALLOW\_PRECISION\_LOSS

This example demonstrates the [aggregate function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_agg_func.htm) ALLOW\_PRECISION\_LOSS.

Source Code   

\* Public class definition
CLASS cl\_demo\_allow\_precision\_loss DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_allow\_precision\_loss IMPLEMENTATION.
  METHOD main.
    TYPES result\_type TYPE p LENGTH 6 DECIMALS 2.
    DATA: allow\_precision\_loss\_result TYPE result\_type,
          normal\_sum\_result           TYPE result\_type.
    DELETE FROM demo\_expressions.
    INSERT demo\_expressions FROM TABLE @(
      VALUE #( ( id = 'X' dec2 = '2.119999' )
               ( id = 'Y' dec2 = '2.118888' )
               ( id = 'A' dec2 = '1.13999' )
               ( id = 'Z' dec2 = '2.668888' )
      ) ).
    SELECT SUM( CAST( dec2 AS DEC( 10,2 ) ) ) AS sum1
    FROM demo\_expressions INTO @normal\_sum\_result.
    SELECT allow\_precision\_loss( SUM( CAST( dec2 AS DEC( 10,2 ) ) ) )
           AS sum1
    FROM demo\_expressions INTO @allow\_precision\_loss\_result.
    out->write\_data( allow\_precision\_loss\_result ).
    out->write\_data( normal\_sum\_result ).
  ENDMETHOD.
ENDCLASS.

Description   

Sums up decimal values with five or more decimal places and converts them to a decimal number with two decimal places. The result of the aggregate expression differs when using ALLOW\_PRECISION\_LOSS.

In this example, ALLOW\_PRECISION\_LOSS first sums up all decimals and then converts them, which is why it performs fewer operations. Without ALLOW\_PRECISION\_LOSS, each decimal is converted individually and then added up.