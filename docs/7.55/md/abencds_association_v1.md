---
title: "CDS DDL - DDIC-based View, SELECT, Associations"
description: |
  CDS associations(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_glosry.htm 'Glossary Entry') offer an advanced modelling capability for CDS data models. A CDS association defines a relationship between two CDS entities(https://help.sap.com/doc/abapdocu_755_index_h
version: "7.55"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_v1.htm"
abapFile: "abencds_association_v1.htm"
keywords: ["select", "do", "if", "case", "try", "data", "types", "abencds", "association"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_entity.htm) →  [ABAP CDS - DDIC-Based Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-based View, SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v1.htm) → 

CDS DDL - DDIC-based View, SELECT, Associations

[CDS associations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_glosry.htm "Glossary Entry") offer an advanced modelling capability for CDS data models. A CDS association defines a relationship between two [CDS entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry"). A CDS association can be used to include fields from the [association target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_target_glosry.htm "Glossary Entry") in the current view, and/or it can be published for usage in other CDS entities or in ABAP SQL.

As soon as an association is used in a [path expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpath_expression_glosry.htm "Glossary Entry"), for example, to specify a field from the [association target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_target_glosry.htm "Glossary Entry") in the element list of a view, it is internally transformed into a [join](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenjoin_glosry.htm "Glossary Entry"). So technically, a CDS association is instantiated as join. The benefit of a CDS association compared to a join is that it can be reused in different positions and that it renders the task of coding complex [join expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenjoin_expression_glosry.htm "Glossary Entry") superfluous. Further details about the use cases of CDS associations and by which join type they are represented are explained below in section CDS associations and joins.

[Compositions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_composition_glosry.htm "Glossary Entry") and [to-parent associations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abento_parent_association_glosry.htm "Glossary Entry") are special kinds of CDS associations. They define an existential dependency of the composition child to its composition parent. For example, a sales order item (composition child) always belongs to a sales order header (composition parent).

For further details, read the following sections:

-   [Details on CDS associations: use cases and join types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_assoc_join_v1.htm)

-   [Association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_simple_association_v1.htm)

-   [Composition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_composition_v1.htm)

-   [To-parent association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_to_parent_assoc_v1.htm)

Continue
[CDS DDL - DDIC-based View, Associations and Joins](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_assoc_join_v1.htm)
[CDS DDL - DDIC-based View, ASSOCIATION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_simple_association_v1.htm)
[CDS DDL - DDIC-based View, COMPOSITION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_composition_v1.htm)
[CDS DDL - DDIC-based View, ASSOCIATION TO PARENT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_to_parent_assoc_v1.htm)
[CDS DDL - DDIC-based View, cds\_cond, ON, CDS Association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cond_expr_on_assoc_v1.htm)