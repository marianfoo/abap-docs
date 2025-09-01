---
title: "Syntax"
description: |
  ... INNERLEFT OUTER ... Effect Defines the join type(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenjoin_type_glosry.htm 'Glossary Entry') with which the current CDS association is implemented: -   INNER determines an inner join(https://help.sap.com/doc/abapdocu_757_inde
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_path_expr_jointype_v2.htm"
abapFile: "abencds_path_expr_jointype_v2.htm"
keywords: ["select", "do", "if", "try", "data", "abencds", "path", "expr", "jointype"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_operands_and_expr_v2.htm) →  [CDS DDL - CDS View Entity, path\_expr](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_path_expression_v2.htm) →  [CDS DDL - CDS View Entity, path\_expr, attributes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_path_expr_attr_v2.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - CDS View Entity, path_expr, join_type, ABENCDS_PATH_EXPR_JOINTYPE_V2, 757%0
D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - CDS View Entity, path\_expr, join\_type

Syntax

... INNER*|**{*LEFT OUTER*}* ...

Effect

Defines the [join type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenjoin_type_glosry.htm "Glossary Entry") with which the current CDS association is implemented:

-   INNER determines an [inner join](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninner_join_glosry.htm "Glossary Entry")
-   LEFT OUTER determines a [left outer join](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenleft_outer_join_glosry.htm "Glossary Entry")

If the join type is not specified explicitly, the type depends on the place where the path expression is used:

-   After [FROM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_statement_v2.htm), it is an inner join
-   In all other locations, it is a left outer join

Hints

-   In the DDL Source Text Editor of the [ADT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadt_glosry.htm "Glossary Entry"), you can view the configuration of the join in the display of the generated SQL DDL statement.
-   For the last CDS association of a path expression, it is not allowed to specify a join type property. If a path expression consists of one single CDS association, then the join type cannot be specified.

Executable Example

[Joins of CDS Associations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_assoc_join_v2_abexa.htm)