  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Projection Views](javascript:call_link\('abencds_proj_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY AS PROJECTION](javascript:call_link\('abencds_define_view_as_projection.htm'\)) → 

CDS DDL - projection\_view, ASSOCIATION

Syntax

... ASSOCIATION *\[* \[min..max\] *\]* TO target *\[*AS \_assoc*\]* ON [cds\_cond](javascript:call_link\('abencds_conditional_expression_v2.htm'\))
                *\[* WITH DEFAULT FILTER [cds\_cond](javascript:call_link\('abencds_conditional_expression_v2.htm'\)) *\]* ...

Effect

You can define new [associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") to external data sources in [CDS projection views](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry"). The same rules apply as for [associations in CDS view entities](javascript:call_link\('abencds_association_v2.htm'\)), but there are further restrictions. The main difference is that the newly defined associations can only be exposed, but they cannot be used in [path expressions](javascript:call_link\('abenpath_expression_glosry.htm'\) "Glossary Entry") to pick elements from the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry"). The purpose of defining new associations is to model new relationships which can be interpreted by consumer frameworks, such as [SADL](javascript:call_link\('abensadl_glosry.htm'\) "Glossary Entry"). However, no additional [joins](javascript:call_link\('abenjoin_glosry.htm'\) "Glossary Entry") should be generated on CDS level by denormalizing fields from new association targets into the CDS projection view.

The target of the locally defined association target can be a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"), a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"), a [CDS projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry"), or a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry").

For new, local associations in CDS projection views, the same rules apply as for [associations in CDS view entities](javascript:call_link\('abencds_association_v2.htm'\)). On top of that, the following additional rules apply:

-   Association type

-   Only "simple" associations can be defined in a CDS projection view. Specialized associations of type [composition](javascript:call_link\('abencds_composition_glosry.htm'\) "Glossary Entry") or [to-parent](javascript:call_link\('abento_parent_association_glosry.htm'\) "Glossary Entry") are not supported.

-   Association alias

-   An association [alias](javascript:call_link\('abenalias_glosry.htm'\) "Glossary Entry") is obligatory if the association is defined locally and if the same association is enhanced by an additional [filter condition](javascript:call_link\('abenfilter_condition_glosry.htm'\) "Glossary Entry") when exposed in the element list. In all other cases, an alias is optional.

-   Exposure in the element list

-   The newly defined association can be exposed, but exposure is not obligatory, as it can also be done in [CDS view extensions](javascript:call_link\('abencds_view_extend_glosry.htm'\) "Glossary Entry") later on. In certain extensibility use cases, the new association must not be exposed.

-   No fields must be selected from locally defined associations. [Path expressions](javascript:call_link\('abenpath_expression_glosry.htm'\) "Glossary Entry") are not supported.

-   Redirection of a newly defined association with the keyword [REDIRECTED TO](javascript:call_link\('abencds_proj_view_expose_assoc.htm'\)) is not possible.

-   It is possible to enhance a locally defined association with an additional filter when exposing it in the element list. Two kinds of attributes can be added in square brackets as filter: [cardinality](javascript:call_link\('abencardinality_glosry.htm'\) "Glossary Entry") and [filter condition](javascript:call_link\('abenfilter_condition_glosry.htm'\) "Glossary Entry"). It is not possible to specify [join type](javascript:call_link\('abenjoin_type_glosry.htm'\) "Glossary Entry") characteristics in the filter. The details are described in topic [CDS DDL - path\_expr, attributes](javascript:call_link\('abencds_path_expr_attr_v2.htm'\)).
    Here's an example: \_toAssoc\[1:field='1'\]

-   Client dependency

-   Client dependency must not be changed by introducing a new association. This also applies to [CDS view extensions](javascript:call_link\('abencds_view_extend_glosry.htm'\) "Glossary Entry") later on, as this may lead to incompatibilities. For example, a CDS projection view that is based on a client-independent CDS view must not contain an association to a client-dependent target view. Breaking this rule leads to a syntax error.

-   Filter

-   The addition [WITH DEFAULT FILTER](javascript:call_link\('abencds_association_v2.htm'\)) is supported after the definition of the ON condition of a local association.

-   ON condition
    For the ON condition of a local association in a CDS projection view, the same rules apply as for the ON condition of a normal CDS association: see [CDS DDL - ASSOCIATION](javascript:call_link\('abencds_simple_association_v2.htm'\)). On top of that, the following restrictions apply for local associations in CDS projection views:

-   Fields from the [element list](javascript:call_link\('abencds_proj_view_element_list.htm'\)) of the [association source](javascript:call_link\('abenassociation_source_glosry.htm'\) "Glossary Entry") which are used in the ON condition of locally defined associations must be included in the [projected entity](javascript:call_link\('abencds_pv_projected_entity_glosry.htm'\) "Glossary Entry").

-   Expressions cannot be used in the ON condition. In particular, functions, calculated fields, arithmetic functions, parameters, and path expressions are explicitly not supported. These expressions are also not supported if they are implicitly used, by defining them in the projection list and referencing the corresponding alias in the ON condition.

-   [Path expressions](javascript:call_link\('abenpath_expression_glosry.htm'\) "Glossary Entry") that generate a [join](javascript:call_link\('abenjoin_glosry.htm'\) "Glossary Entry") are not allowed in the ON condition.

-   The prefixes $projection, [association source](javascript:call_link\('abenassociation_source_glosry.htm'\) "Glossary Entry") name, or [association source](javascript:call_link\('abenassociation_source_glosry.htm'\) "Glossary Entry") alias must be used for fields used in the ON condition of a locally defined association, if they refer to a field from the element list of the [association source](javascript:call_link\('abenassociation_source_glosry.htm'\) "Glossary Entry").
    

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