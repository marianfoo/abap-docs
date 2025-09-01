---
title: "CDS DDL - WHERE, Analytical Query"
description: |
  Syntax ... WHERE cds_cond(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_conditional_expression_v2.htm) ... Effect Defines a WHERE condition for the result set of a CDS analytical projection view(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_analytical_p
version: "7.58"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_where_apv.htm"
abapFile: "abencds_where_apv.htm"
keywords: ["do", "if", "try", "data", "abencds", "where", "apv"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_entity.htm) →  [ABAP CDS - Projection Views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_proj_views.htm) →  [CDS DDL - CDS Projection View, Analytical Queries](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_analytical_query_apv.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20WHERE%2C%20Analytical%20Query%2C%20ABENCDS_WHERE_APV%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CDS DDL - WHERE, Analytical Query

Syntax

... WHERE [cds\_cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_conditional_expression_v2.htm) ...

Effect

Defines a WHERE condition for the result set of a [CDS analytical projection view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_analytical_pv_glosry.htm "Glossary Entry"). When the CDS projection view is accessed, the result set contains only the data from the [projected entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_pv_projected_entity_glosry.htm "Glossary Entry") cds\_entity that meets the condition [cds\_cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_conditional_expression_v2.htm) specified after WHERE.

The condition is either a single [relational expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrelational_expression_glosry.htm "Glossary Entry") rel\_expr or an expression constructed from the [Boolean operators](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenboolean_operator_glosry.htm "Glossary Entry") AND, OR, and NOT.

In CDS analytical projection views, the following rules apply to the operands and syntax of the WHERE condition:

-   [Comparison operators](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cond_expr_comp_v2.htm) are allowed.
-   [BETWEEN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cond_expr_betw_v2.htm), [LIKE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cond_expr_like_v2.htm), and [INITIAL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cond_expr_initial_v2.htm) are allowed as relational operators.
-   The Boolean operators AND, OR, and NOT are supported. Identical fields must be combined with OR and different fields must be combined with AND.
    
    Note: A filter condition does not support nested negations. The following is not supported: AND NOT field\_a <> 'B. The reason is that NOT and <> are both negations.
    
-   lhs must be a field of the projected entity specified as [analytical dimension field](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_dimension_glosry.htm "Glossary Entry").
-   rhs can be an [untyped literal](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_untyped_literal_v2.htm), a session variable (currently, only $session.system\_date and $session.user\_date are supported), or a parameter. When using the operator LIKE, rhs must be a character literal.
    
    Note: [typed literals](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_typed_literal_v2.htm) are currently not supported in this position.
    
-   [Path expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_path_expr_apv.htm) path\_expr are not allowed as operands in a WHERE condition.