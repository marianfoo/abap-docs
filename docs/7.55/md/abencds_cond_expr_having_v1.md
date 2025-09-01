---
title: "cds_cond_expr_having_v1"
description: |
  cds_cond_expr_having_v1 - ABAP 7.55 language reference documentation
version: "7.55"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cond_expr_having_v1.htm"
abapFile: "abencds_cond_expr_having_v1.htm"
keywords: ["select", "do", "if", "try", "data", "abencds", "cond", "expr", "having"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_entity.htm) →  [ABAP CDS - DDIC-Based Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-based View, SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v1.htm) →  [CDS DDL - DDIC-based View, SELECT, clauses](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_clauses_v1.htm) →  [CDS DDL - DDIC-based View, SELECT, HAVING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_having_clause_v1.htm) → 

CDS DDL - DDIC-based View, cds\_cond, HAVING

Rules for conditions [cds\_cond](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conditional_expression_v1.htm) in a [HAVING condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_having_clause_v1.htm) of a [CDS DDIC-based view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v1_view_glosry.htm "Glossary Entry"):

-   The relational operator BETWEEN is not allowed. All other relational operators are allowed.

-   A [field](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_field_v1.htm) of a data source [data\_source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_data_source_v1.htm) or an [aggregate expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_aggregate_functions_v1.htm) for this kind of field can be specified for lhs.

-   An [element](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_entry_v1.htm) of the [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_v1.htm), an [aggregate expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_aggregate_functions_v1.htm), a [literal](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_literal_v1.htm) with an optional domain prefix, or a [parameter](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_parameter_v1.htm) can be specified for rhs (with the exception of the operator [LIKE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cond_expr_like_v1.htm)). If lhs is an [aggregate expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_aggregate_functions_v1.htm), a [literal](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_literal_v1.htm) must be specified.

-   A field of a data source can be specified using a path expression [path\_expr](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expression_v1.htm).element, as long as the CDS associations of the expression do not have any abstract [association targets](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_target_glosry.htm "Glossary Entry") and the expression is unique:

-   The [cardinality](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencardinality_glosry.htm "Glossary Entry") of the contained [CDS associations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_glosry.htm "Glossary Entry") is to-one.

-   The path expression only contains

-   [filter conditions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expression_filter_v1.htm) with addition 1:.

element can be used to specify an element of the [association target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_target_glosry.htm "Glossary Entry") of the last CDS association of the path.

-   Other expressions and function calls are not allowed.