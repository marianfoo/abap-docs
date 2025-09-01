---
title: "ABAP CDS - SELECT, GROUP BY"
description: |
  Syntax ... GROUP BY field1, field2, ... path_expr1(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_case_expression.htm), path_expr2(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_case_expression.htm), ... Effect Groups those rows in the results set
version: "7.54"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_group_by.htm"
abapFile: "abencds_f1_group_by.htm"
keywords: ["select", "do", "if", "case", "try", "data", "types", "abencds", "group"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - DEFINE VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_view.htm) →  [ABAP CDS - SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_statement.htm) →  [ABAP CDS - SELECT, clauses](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_select_clauses.htm) → 

ABAP CDS - SELECT, GROUP BY

Syntax

... GROUP BY field1, field2, ...
             [path\_expr1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_case_expression.htm), [path\_expr2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_case_expression.htm), ...

Effect

Groups those rows in the results set of a [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry") in that have the same content in the elements specified by the fields field1, field2, ... or [path expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_case_expression.htm) path\_expr1, path\_expr2 ... as a single row. The fields must be specified using the same names as the fields in the data source [data\_source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_data_source.htm). The current CDS view cannot be specified using alternative element names, which are defined with [AS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_list_entry.htm).

Any elements of the CDS view that are not specified after GROUP BY must be defined in the [SELECT list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_list.htm) using [aggregate expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_aggregate_functions.htm). Conversely, GROUP BY must be used if aggregate expressions are contained in the SELECT list and all elements not defined using aggregate expressions must be specified after GROUP BY. Literals and other expressions cannot be specified after GROUP BY. If expressions or calls of built-in functions are specified as elements of the SELECT list using aggregate expressions, all the fields used must be specified in the GROUP BY clause.

When the CDS view is accessed, the results of the aggregate expressions are calculated from the values of the corresponding fields of the combined rows and the results are placed in the element of the resulting row in the results set.

The fields specified after GROUP BY cannot be of the [type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) LCHR, LRAW, STRING, RAWSTRING, or GEOM\_EWKB.

Note

A [WHERE condition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_where_clause.htm) is evaluated before the rows are combined using GROUP BY.

Example

When a CDS view is accessed, the view returns sales\_order for every role of a business partner and returns the number of business partners and the total of all gross amounts for every currency.

@AbapCatalog.sqlViewName: 'SALES\_ORDER\_VW'
define view sales\_order as
  select from snwd\_so
    inner join
      snwd\_bpa on buyer\_guid = snwd\_bpa.node\_key
      { bp\_role as role, //e.g. customer or supplier
        count(distinct buyer\_guid) as partners\_count,
        @Semantics.currencyCode snwd\_so.currency\_code,
        @Semantics.amount.currencyCode: 'currency\_code'
          sum(snwd\_so.gross\_amount) as sum\_gross\_amount }
      group by bp\_role, snwd\_so.currency\_code;