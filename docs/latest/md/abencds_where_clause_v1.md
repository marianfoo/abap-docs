---
title: "CDS DDL - DDIC-Based View, SELECT, WHERE"
description: |
  Syntax ... WHERE cds_cond(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conditional_expression_v1.htm) ... Effect Defines a WHERE condition for the result set of a CDS DDIC-based view (obsolete)(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1
version: "latest"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_where_clause_v1.htm"
abapFile: "abencds_where_clause_v1.htm"
keywords: ["select", "do", "if", "try", "data", "abencds", "where", "clause"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [Obsolete CDS Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_obsolete.htm) →  [Obsolete CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entities_obsolete.htm) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views (Obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT, clauses](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_clauses_v1.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DDIC-Based%20View%2C%20SELECT%2C%20WHERE%2C%20ABENCDS_WHERE_CLAUSE_V1%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20im
provement:)

CDS DDL - DDIC-Based View, SELECT, WHERE

Syntax

... WHERE [cds\_cond](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conditional_expression_v1.htm) ...

Effect

Defines a WHERE condition for the result set of a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_view_glosry.htm "Glossary Entry"). When the CDS view is accessed, the result set contains only the data from the data source [data\_source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_data_source_v1.htm) that meets the condition [cds\_cond](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conditional_expression_v1.htm) specified after WHERE.

The fields evaluated in the condition do not need to be defined as elements of the CDS view in the [SELECT list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_list_v1.htm). For the operands, [general](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cond_expr_operands_v1.htm) and [special rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cond_expr_where_v1.htm) apply when specifying the condition.

Hint

Unlike in the [HAVING condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_having_clause_v1.htm), [aggregate expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_aggregate_functions_v1.htm) cannot be specified in the WHERE condition.

Example

When the CDS view demo\_sales\_order\_old4 is accessed, the result set contains only orders where the company name of the business partner starts with S and that were created between January and March 2013.

@AbapCatalog.sqlViewName: 'DEMO\_SO\_VW4'
define view DEMO\_SALES\_ORDER\_OLD4
  as select from snwd\_so
  association to snwd\_bpa as \_partner
    on snwd\_so.buyer\_guid = \_partner.node\_key
{
  key   so\_id,
        snwd\_so.buyer\_guid,
        \_partner.company\_name,
        snwd\_so.created\_at,
        @Semantics.currencyCode
        currency\_code,
        @Semantics.amount.currencyCode: 'currency\_code'
        gross\_amount
}
where
      \_partner.company\_name like    'S%'
  and created\_at            between 2013010100000.0
      and 20130401000000.0; //Jan-March

Continue
[CDS DDL - DDIC-Based View, cds\_cond, WHERE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cond_expr_where_v1.htm)