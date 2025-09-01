---
title: "Syntax"
description: |
  ... ALLOW_PRECISION_LOSS( SUM(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_agg_func.htm)( DISTINCT sql_exp(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsql_expr.htm) ) Effect The ALLOW_PRECISION_LOSS statement can improve the performance of an
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_allow_precision_loss.htm"
abapFile: "abapselect_allow_precision_loss.htm"
keywords: ["select", "do", "if", "try", "data", "abapselect", "allow", "precision", "loss"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsql_expr.htm) →  [sql\_exp - sql\_agg](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_aggregate.htm) →  [sql\_agg - agg\_func](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_agg_func.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_agg%20-%20ALLOW_PRECISION_LOSS%2C%20ABAPSELECT_ALLOW_PRECISION_LOSS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sql\_agg - ALLOW\_PRECISION\_LOSS

Syntax

... ALLOW\_PRECISION\_LOSS( [SUM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_agg_func.htm)( *\[*DISTINCT*\]* [sql\_exp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsql_expr.htm) )

Effect

The ALLOW\_PRECISION\_LOSS statement can improve the performance of an [aggregate expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenaggregate_expression_glosry.htm "Glossary Entry") [agg\_exp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_aggregate.htm) at the cost of accuracy of the result. This function should only be used on decimal values and when loss of precision is acceptable. Currently, [SUM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_agg_func.htm) is the only supported aggregate expression.

Hint

A different result is not necessarily obtained when using the ALLOW\_PRECISION\_LOSS statement to sum up decimal values. A different result and simultaneous improvement in performance is only obtained during certain complex operations. One example is when operations are carried out in a different order to reduce the total number of operations. See the executable example below for further details.

Executable Example

[Aggregate function, allow precision loss](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_expr_aggr_prec_loss_abexa.htm)