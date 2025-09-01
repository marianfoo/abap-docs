---
title: "Syntax"
description: |
  ... ASSOCIATION  min..max  TO target AS _assoc ON cds_cond(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conditional_expression_v2.htm)  WITH DEFAULT FILTER cds_cond(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conditional_exp
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_proj_view_association.htm"
abapFile: "abencds_proj_view_association.htm"
keywords: ["select", "do", "if", "case", "try", "data", "abencds", "proj", "view", "association"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_entity.htm) →  [ABAP CDS - Projection Views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_proj_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY AS PROJECTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_as_projection.htm) → 

CDS DDL - projection\_view, ASSOCIATION

Syntax

... ASSOCIATION *\[* \[min..max\] *\]* TO target *\[*AS \_assoc*\]* ON [cds\_cond](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conditional_expression_v2.htm)
                *\[* WITH DEFAULT FILTER [cds\_cond](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conditional_expression_v2.htm) *\]* ...

Effect

You can define new [associations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_glosry.htm "Glossary Entry") to external data sources in [CDS projection views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_projection_view_glosry.htm "Glossary Entry"). The same rules apply as for [associations in CDS view entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_v2.htm), but there are further restrictions. The main difference is that the newly defined associations can only be exposed, but they cannot be used in [path expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpath_expression_glosry.htm "Glossary Entry") to pick elements from the [association target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_target_glosry.htm "Glossary Entry"). The purpose of defining new associations is to model new relationships which can be interpreted by consumer frameworks, such as [SADL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensadl_glosry.htm "Glossary Entry"). However, no additional [joins](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenjoin_glosry.htm "Glossary Entry") should be generated on CDS level by denormalizing fields from new association targets into the CDS projection view.

The target of the locally defined association target can be a [CDS view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_glosry.htm "Glossary Entry"), a [CDS view entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), a [CDS projection view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_projection_view_glosry.htm "Glossary Entry"), or a [CDS entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry").

For new, local associations in CDS projection views, the same rules apply as for [associations in CDS view entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_v2.htm). On top of that, the following additional rules apply:

-   Association type

-   Only "simple" associations can be defined in a CDS projection view. Specialized associations of type [composition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_composition_glosry.htm "Glossary Entry") or [to-parent](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abento_parent_association_glosry.htm "Glossary Entry") are not supported.

-   Association alias

-   An association [alias](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenalias_glosry.htm "Glossary Entry") is obligatory if the association is defined locally and if the same association is enhanced by an additional [filter condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfilter_condition_glosry.htm "Glossary Entry") when exposed in the element list. In all other cases, an alias is optional.

-   Exposure in the element list

-   The newly defined association can be exposed, but exposure is not obligatory, as it can also be done in [CDS view extensions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_extend_glosry.htm "Glossary Entry") later on. In certain extensibility use cases, the new association must not be exposed.

-   No fields must be selected from locally defined associations. [Path expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpath_expression_glosry.htm "Glossary Entry") are not supported.

-   Redirection of a newly defined association with the keyword [REDIRECTED TO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_proj_view_expose_assoc.htm) is not possible.

-   It is possible to enhance a locally defined association with an additional filter when exposing it in the element list. Two kinds of attributes can be added in square brackets as filter: [cardinality](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencardinality_glosry.htm "Glossary Entry") and [filter condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfilter_condition_glosry.htm "Glossary Entry"). It is not possible to specify [join type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenjoin_type_glosry.htm "Glossary Entry") characteristics in the filter. The details are described in topic [CDS DDL - path\_expr, attributes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expr_attr_v2.htm).
    Here's an example: \_toAssoc\[1:field='1'\]

-   Client dependency

-   Client dependency must not be changed by introducing a new association. This also applies to [CDS view extensions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_extend_glosry.htm "Glossary Entry") later on, as this may lead to incompatibilities. For example, a CDS projection view that is based on a client-independent CDS view must not contain an association to a client-dependent target view. Breaking this rule leads to a syntax error.

-   Filter

-   The addition [WITH DEFAULT FILTER](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_v2.htm) is supported after the definition of the ON condition of a local association.

-   ON condition
    For the ON condition of a local association in a CDS projection view, the same rules apply as for the ON condition of a normal CDS association: see [CDS DDL - ASSOCIATION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_simple_association_v2.htm). On top of that, the following restrictions apply for local associations in CDS projection views:

-   Fields from the [element list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_proj_view_element_list.htm) of the [association source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_source_glosry.htm "Glossary Entry") which are used in the ON condition of locally defined associations must be included in the [projected entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_pv_projected_entity_glosry.htm "Glossary Entry").

-   Expressions cannot be used in the ON condition. In particular, functions, calculated fields, arithmetic functions, parameters, and path expressions are explicitly not supported. These expressions are also not supported if they are implicitly used, by defining them in the projection list and referencing the corresponding alias in the ON condition.

-   [Path expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpath_expression_glosry.htm "Glossary Entry") that generate a [join](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenjoin_glosry.htm "Glossary Entry") are not allowed in the ON condition.

-   The prefixes $projection, [association source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_source_glosry.htm "Glossary Entry") name, or [association source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_source_glosry.htm "Glossary Entry") alias must be used for fields used in the ON condition of a locally defined association, if they refer to a field from the element list of the [association source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_source_glosry.htm "Glossary Entry").
    

Example

The following CDS projection view DEMO\_SALES\_PV\_SO\_ASSOC is a projection of the CDS view DEMO\_SALES\_CDS\_SO. It defines associations to external data sources, namely a custom entity and a CDS DDIC-based view. These associations are exposed in the element list, but no fields are picked from the associations via a path expression.

@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Projection View SO'
define root view entity DEMO\_SALES\_PV\_SO\_ASSOC
  as projection on DEMO\_SALES\_CDS\_SO
  association \[0..1\] to demo\_sales\_so\_custom\_analytics  
                        as \_SalesOrderCustomData
    on \_SalesOrderCustomData.SalesOrderKey = $projection.SalesOrderKey
  association \[0..1\] to DEMO\_SALES\_CDS\_VIEW\_ANALYTICS  
                        as \_SalesOrderAnalyticData
    on \_SalesOrderAnalyticData.SalesOrderKey =  
       $projection.SalesOrderKey
  {
    key so\_key             as SalesOrderKey,
        id                 as SalesOrderExternalId,
        lifecycle\_status   as LifecycleStatus,
        buyer\_id           as BuyerId,
        \_Buyer.family\_name as BuyerDescription,
        created\_by         as CreatedBy,
        last\_changed\_by    as LastChangedBy,
        \_SalesOrderAnalyticData,
        \_SalesOrderCustomData
  }