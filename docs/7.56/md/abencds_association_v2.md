---
title: "CDS DDL - CDS View Entity, SELECT, Associations"
description: |
  CDS associations(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_association_glosry.htm 'Glossary Entry') offer an advanced modelling capability for CDS data models. A CDS association defines a relationship between two CDS entities(https://help.sap.com/doc/abapdocu_756_index_h
version: "7.56"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_association_v2.htm"
abapFile: "abencds_association_v2.htm"
keywords: ["select", "do", "if", "case", "try", "data", "types", "abencds", "association"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v2.htm) → 

CDS DDL - CDS View Entity, SELECT, Associations

[CDS associations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_association_glosry.htm "Glossary Entry") offer an advanced modelling capability for CDS data models. A CDS association defines a relationship between two [CDS entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_glosry.htm "Glossary Entry"). A CDS association can be used to include fields from the [association target](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenassociation_target_glosry.htm "Glossary Entry") in the current view, and/or it can be published for usage in other CDS entities or in ABAP SQL.

As soon as an association is used in a [path expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpath_expression_glosry.htm "Glossary Entry"), for example, to specify a field from the [association target](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenassociation_target_glosry.htm "Glossary Entry") in the element list of a view, it is internally transformed into a [join](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenjoin_glosry.htm "Glossary Entry"). So technically, a CDS association is instantiated as join. The benefit of a CDS association compared to a join is that it can be reused in different positions and that it renders the task of coding complex [join expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenjoin_expression_glosry.htm "Glossary Entry") superfluous. Further details about the use cases of CDS associations and by which join type they are represented are explained in the topic below about CDS associations and joins.

[Compositions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_composition_glosry.htm "Glossary Entry") and [to-parent associations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abento_parent_association_glosry.htm "Glossary Entry") are special kinds of CDS associations. They define an existential dependency of the composition child to its composition parent. For example, a sales order item (composition child) always belongs to a sales order header (composition parent).

Example

The CDS view entity DEMO\_SALES\_CDS\_SO\_I\_VE shown below returns information about sales order items. It defines three associations:

-   A to-parent association \_SalesOrder: A sales order item must always belong to a sales order, so there is an existential dependency.
-   A composition \_ScheduleLine: each sales order item can have one or more schedule lines, so the CDS view entity that contains information about schedule lines is defined as composition child.
-   A simple association \_Material: this association can be used to enrich a sales order item with information about the material.

In the SELECT list, \_SalesOrder and \_ScheduleLine are exposed. They can be accessed externally, but the current view does not use any data from them and no join is generated. From the association \_Material, the field material is included in the view. This means that this association is instantiated as join. Since it is not published, it cannot be used in other CDS view entities or in ABAP SQL.

![Figure](bdoc_assoc_expl.png)

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_SALES\_CDS\_SO\_I\_VE
  as select from
    demo\_sales\_so\_i
    association        to parent DEMO\_SALES\_CDS\_SO\_VE as \_SalesOrder
      on $projection.parent\_key = \_SalesOrder.so\_key
    composition \[0..\*\] of DEMO\_SALES\_CDS\_SO\_I\_SL\_VE   as \_ScheduleLine
    association \[0..1\] to DEMO\_SALES\_CDS\_MATERIAL\_VE  as \_Material
      on $projection.material = \_Material.material
    {
      key so\_item\_key,
          parent\_key,
          posnr,
          material,
          @Semantics.amount.currencyCode: 'currency'
          gross\_amount,
          currency,
          @Semantics.quantity.unitOfMeasure: 'unit'
          quantity,
          unit,
          \_SalesOrder,
          \_ScheduleLine,
          \_Material.material as mat
    }

For further details, see the following sections:

-   [Details on CDS Associations: Use Cases and Join Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_assoc_join_v2.htm)
-   [Association](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_simple_association_v2.htm)
-   [Composition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_composition_v2.htm)
-   [To-parent Association](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_to_parent_assoc_v2.htm)

Continue
[CDS DDL - CDS View Entity, Associations and Joins](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_assoc_join_v2.htm)
[CDS DDL - CDS View Entity, ASSOCIATION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_simple_association_v2.htm)
[CDS DDL - CDS View Entity, COMPOSITION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_composition_v2.htm)
[CDS DDL - CDS View Entity, ASSOCIATION TO PARENT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_to_parent_assoc_v2.htm)