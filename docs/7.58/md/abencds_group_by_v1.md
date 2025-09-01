---
title: "CDS DDL - DDIC-Based View, SELECT, GROUP BY"
description: |
  Syntax ... GROUP BY field1, field2, ... path_expr1(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_case_expression_v1.htm), path_expr2(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_case_expression_v1.htm), ... Effect Groups those rows in the result set o
version: "7.58"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_group_by_v1.htm"
abapFile: "abencds_group_by_v1.htm"
keywords: ["select", "do", "if", "case", "try", "data", "types", "abencds", "group"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [Obsolete CDS Language Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_obsolete.htm) →  [Obsolete CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities_obsolete.htm) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views (Obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_statement_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT, clauses](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_clauses_v1.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DDIC-Based%20View%2C%20SELECT%2C%20GROUP%20BY%2C%20ABENCDS_GROUP_BY_V1%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20i
mprovement:)

CDS DDL - DDIC-Based View, SELECT, GROUP BY

Syntax

... GROUP BY field1, field2, ...
             [path\_expr1](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_case_expression_v1.htm), [path\_expr2](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_case_expression_v1.htm), ...

Effect

Groups those rows in the result set of a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_view_glosry.htm "Glossary Entry") that have the same content in the elements specified by the fields field1, field2, ... or [path expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_case_expression_v1.htm) path\_expr1, path\_expr2 ... as a single row. The fields must be specified using the same names as the fields in the data source [data\_source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_data_source_v1.htm). It is not allowed to use the alias names defined in the current CDS view using with [AS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_list_entry_v1.htm).

The GROUP BY clause is mandatory if the SELECT list contains any aggregate expressions. All elements that are not defined using an aggregate expression must be listed after GROUP BY. Literals and other expressions cannot be specified after GROUP BY.

When the CDS view is accessed, the results of the aggregate expressions are calculated from the values of the corresponding fields of the combined rows and the results are placed in the element of the resulting row in the result set.

The fields specified after GROUP BY cannot be of the [type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) LCHR, LRAW, STRING, RAWSTRING, or GEOM\_EWKB.

Hint

A [WHERE condition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_where_clause_v1.htm) is evaluated before the rows are combined using GROUP BY.

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