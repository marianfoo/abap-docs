---
title: "Syntax"
description: |
  ...  1:(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_path_expr_card_v1.htm) INNERLEFT OUTER(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_path_expr_jointype_v1.htm) WHERE cds_cond(https://help.sap.com/d
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_path_expr_attr_v1.htm"
abapFile: "abencds_path_expr_attr_v1.htm"
keywords: ["select", "do", "if", "try", "data", "abencds", "path", "expr", "attr"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity.htm) →  [ABAP CDS - DDIC-Based Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-based View, SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v1.htm) →  [CDS DDL - DDIC-based View, SELECT, Operands and Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_operands_and_expr_v1.htm) →  [CDS DDL - DDIC-based View, path\_expr](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_path_expression_v1.htm) → 

CDS DDL - DDIC-based View, path\_expr, attributes

Syntax

... \[ [*\[*1*|*\*:*\]*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_path_expr_card_v1.htm) [*\[*INNER*|**{*LEFT OUTER*}**\]*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_path_expr_jointype_v1.htm) [*\[*WHERE*\]* *\[*cds\_cond*\]*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_path_expression_filter_v1.htm) \] ...

Effect

For every CDS association [\_assoc](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_association_v1.htm) of a [path expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_path_expression_v1.htm) of a [CDS DDIC-based view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_view_glosry.htm "Glossary Entry"), attributes for this part of the path expression can be defined in square brackets \[ \]. The following attributes can be specified:

-   With [1*|*\*:](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_path_expr_card_v1.htm), the [cardinality](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencardinality_glosry.htm "Glossary Entry") of the section can be specified.
-   With [INNER*|**{*LEFT OUTER*}*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_path_expr_jointype_v1.htm) the [join type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenjoin_type_glosry.htm "Glossary Entry") can be specified.
-   With [*\[*WHERE*\]* cds\_cond](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_path_expression_filter_v1.htm) a filter condition cds\_cond can be specified.

Continue
[CDS DDL - DDIC-based View, path\_expr, cardinality](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_path_expr_card_v1.htm)
[CDS DDL - DDIC-based View, path\_expr, join\_type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_path_expr_jointype_v1.htm)
[CDS DDL - DDIC-based View, path\_expr, filter](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_path_expression_filter_v1.htm)