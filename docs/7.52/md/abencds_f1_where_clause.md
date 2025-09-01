---
title: "ABAP CDS - SELECT, WHERE"
description: |
  Syntax ... WHERE cond_expr(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conditional_expression.htm) ... Effect Defines a WHERE condition for the results set of a CDS view(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm 'Glossary Entry'
version: "7.52"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_where_clause.htm"
abapFile: "abencds_f1_where_clause.htm"
keywords: ["select", "do", "if", "try", "data", "abencds", "where", "clause"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - DEFINE VIEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_view.htm) →  [ABAP CDS - SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm) →  [ABAP CDS- SELECT, clauses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_select_clauses.htm) → 

ABAP CDS - SELECT, WHERE

Syntax

... WHERE [cond\_expr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conditional_expression.htm) ...

Effect

Defines a WHERE condition for the results set of a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry"). When the CDS view is accessed, the results set contains only the data from the data source [data\_source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_data_source.htm) that meets the condition [cond\_expr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conditional_expression.htm) specified after WHERE.

The fields evaluated in the condition do not need to be defined as elements of the CDS view in the [SELECT list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_list.htm). Special [rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_where.htm) apply when specifying the condition.

Note

Unlike in the [HAVING condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_having_clause.htm), [aggregate expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_aggregate_functions.htm) cannot be specified in the WHERE condition.

Example

When the CDS view sales\_order is accessed, the results set contains only orders where the company name of the business partner starts with "S" and that were created between January and March 2013.

@AbapCatalog.sqlViewName: 'SALES\_ORDER\_VW'
define view sales\_order as
  select from snwd\_so
         association to snwd\_bpa as \_partner
                     on snwd\_so.buyer\_guid = \_partner.node\_key
         { key   so\_id,
                 snwd\_so.buyer\_guid,
                 \_partner.company\_name,
                 snwd\_so.created\_at,
               @Semantics.currencyCode
                 currency\_code,
               @Semantics.amount.currencyCode: 'currency\_code'
                 gross\_amount
         }
         where \_partner.company\_name like 'S%' and
                       created\_at between 2013010100000.0
                                     and 20130401000000.0; //Jan-March