  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - View Entities](javascript:call_link\('abencds_v2_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)) →  [CDS DDL - CDS View Entity, SELECT](javascript:call_link\('abencds_select_statement_v2.htm'\)) → 

CDS DDL - CDS View Entity, SELECT, Associations

[CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") offer an advanced modelling capability for CDS data models. A CDS association defines a relationship between two [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"). A CDS association can be used to include fields from the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") in the current view, and/or it can be published for usage in other CDS entities or in ABAP SQL.

As soon as an association is used in a [path expression](javascript:call_link\('abenpath_expression_glosry.htm'\) "Glossary Entry"), for example, to specify a field from the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") in the element list of a view, it is internally transformed into a [join](javascript:call_link\('abenjoin_glosry.htm'\) "Glossary Entry"). So technically, a CDS association is instantiated as join. The benefit of a CDS association compared to a join is that it can be reused in different positions and that it renders the task of coding complex [join expressions](javascript:call_link\('abenjoin_expression_glosry.htm'\) "Glossary Entry") superfluous. Further details about the use cases of CDS associations and by which join type they are represented are explained below in section CDS associations and joins.

[Compositions](javascript:call_link\('abencds_composition_glosry.htm'\) "Glossary Entry") and [to-parent associations](javascript:call_link\('abento_parent_association_glosry.htm'\) "Glossary Entry") are special kinds of CDS associations. They define an existential dependency of the composition child to its composition parent. For example, a sales order item (composition child) always belongs to a sales order header (composition parent).

Example

The CDS view entity DEMO\_SALES\_CDS\_SO\_I\_VE shown below returns information about sales order items. It defines three associations:

-   a to-parent association \_SalesOrder: A sales order item must always belong to a sales order, so there is an existential dependency.

-   a composition \_ScheduleLine: each sales order item can have one or several schedule lines, so the CDS view entity that contains information about schedule lines is defined as composition child.

-   a simple association \_Material: with this association, a sales order item can be enriched with information about the material.

In the SELECT list, \_SalesOrder and \_ScheduleLine are exposed. They can be accessed externally, but the current view doesn't use any data from them and no join is generated. From the association \_Material, the field material is included in the view. So this association is instantiated as join. Since it is not published, it cannot be used in other CDS view entities or in ABAP SQL.

![Figure](abdoc_assoc_expl.png)

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_SALES\_CDS\_SO\_I\_VE
  as select from demo\_sales\_so\_i
  association        to parent DEMO\_SALES\_CDS\_SO\_VE as \_SalesOrder
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

For further details, read the following sections:

-   [Details on CDS associations: use cases and join types](javascript:call_link\('abencds_assoc_join_v2.htm'\))

-   [Association](javascript:call_link\('abencds_simple_association_v2.htm'\))

-   [Composition](javascript:call_link\('abencds_composition_v2.htm'\))

-   [To-parent association](javascript:call_link\('abencds_to_parent_assoc_v2.htm'\))

Continue
[CDS DDL - CDS View Entity, Associations and Joins](javascript:call_link\('abencds_assoc_join_v2.htm'\))
[CDS DDL - CDS View Entity, ASSOCIATION](javascript:call_link\('abencds_simple_association_v2.htm'\))
[CDS DDL - CDS View Entity, COMPOSITION](javascript:call_link\('abencds_composition_v2.htm'\))
[CDS DDL - CDS View Entity, ASSOCIATION TO PARENT](javascript:call_link\('abencds_to_parent_assoc_v2.htm'\))