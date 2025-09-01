  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Projection Views](javascript:call_link\('abencds_proj_views.htm'\)) →  [CDS DDL - CDS Projection View, Transactional Queries](javascript:call_link\('abencds_pv_transactional_query.htm'\)) → 

CDS DDL - ASSOCIATION, transactional query

Syntax

... ASSOCIATION *\[* \[min..max\] *\]* TO target *\[*AS \_assoc*\]* ON [cds\_cond](javascript:call_link\('abencds_conditional_expression_v2.htm'\))
                *\[* WITH DEFAULT FILTER [cds\_cond](javascript:call_link\('abencds_conditional_expression_v2.htm'\)) *\]* ...

Effect

Defines a [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") with the name \_assoc in a [CDS projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry"). The same rules apply as for [associations in CDS view entities](javascript:call_link\('abencds_association_v2.htm'\)), but there are further restrictions. The main difference is that the newly defined associations can only be exposed, but they cannot be used in [path expressions](javascript:call_link\('abenpath_expression_glosry.htm'\) "Glossary Entry") to include elements from the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry"). The purpose of defining new associations is to model new relationships which can be interpreted by consumer frameworks, such as the [RAP query engine](javascript:call_link\('abenrap_query_engine_glosry.htm'\) "Glossary Entry"). However, no additional [joins](javascript:call_link\('abenjoin_glosry.htm'\) "Glossary Entry") should be generated on CDS level by denormalizing fields from new association targets into the CDS projection view. Only "simple" associations can be defined in a CDS projection view. Specialized associations of type [composition](javascript:call_link\('abencds_composition_glosry.htm'\) "Glossary Entry") or [to-parent](javascript:call_link\('abento_parent_association_glosry.htm'\) "Glossary Entry") are not supported.

The target of the locally defined association target can be any other [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"), a [DDIC database table](javascript:call_link\('abenddic_db_table_glosry.htm'\) "Glossary Entry"), or a [DDIC database view](javascript:call_link\('abendatabase_view_glosry.htm'\) "Glossary Entry").

All elements included in the ON clause of an exposed [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") must also be included in the projection list of the CDS projection view.

Syntax rules

-   New associations in CDS projection views are defined in exactly the same way as associations in CDS view entities. The same rules apply to the additions \[min..max\], AS \_assoc, WITH DEFAULT FILTER, and the ON condition. See topic [CDS DDL - CDS View Entity, ASSOCIATION](javascript:call_link\('abencds_simple_association_v2.htm'\)).

Exposure in the projection list

-   The newly defined association can be exposed, but exposure is not obligatory, as it can also be done in [CDS view entity extensions](javascript:call_link\('abencds_view_entity_extend_glosry.htm'\) "Glossary Entry") later on.
-   An alias name alias can be assigned to the exposed association.
-   It is possible to enhance a locally defined association with an additional filter when exposing it in the projection list. Two kinds of attributes can be added in square brackets as filter: [cardinality](javascript:call_link\('abencardinality_glosry.htm'\) "Glossary Entry") and [filter condition](javascript:call_link\('abenfilter_condition_glosry.htm'\) "Glossary Entry"). It is not possible to specify [join type](javascript:call_link\('abenjoin_type_glosry.htm'\) "Glossary Entry") characteristics in the filter. The details are described in topic [CDS DDL - CDS Projection View, filter](javascript:call_link\('abencds_pv_assoc_modified.htm'\)).
    
    When exposing a CDS association with a filter, an alternative element name alias using AS is mandatory.
    
    Here's an example: \_toAssoc\[1:field='1'\] as filteredAssoc
    
-   A CDS association can be exposed multiple times with various alternative element names. This makes it possible to use different filter conditions.
-   An exposed CDS association is part of the projection list. It is not, however, part of the result set, nor a component of the type defined in ABAP with respect to the CDS projection view.

Usage

-   No fields must be selected from locally defined associations. [Path expressions](javascript:call_link\('abenpath_expression_glosry.htm'\) "Glossary Entry") are not supported.

Client dependency

-   A CDS projection view that is based on a client-independent CDS view must not contain an association to a client-dependent target view. Client dependency must not be changed by introducing a new association. This also applies to [CDS view extensions](javascript:call_link\('abencds_view_extend_glosry.htm'\) "Glossary Entry") later on, as this may lead to incompatibilities.

Hint

Redirection of a newly defined association with the keyword [REDIRECTED TO](javascript:call_link\('abencds_proj_view_expose_assoc.htm'\)) is not possible.

Example

The following CDS projection view DEMO\_SALES\_PV\_SO\_ASSOC is a projection of the CDS view entity DEMO\_SALES\_CDS\_SO. It defines associations to a [CDS custom entity](javascript:call_link\('abencds_custom_entity_glosry.htm'\) "Glossary Entry") and a CDS DDIC-based view. These associations are exposed in the element list, but no fields are picked from the associations via a path expression.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'Projection View SO'
define root view entity DEMO\_SALES\_PV\_SO\_ASSOC
  provider contract transactional\_query
  as projection on DEMO\_SALES\_CDS\_SO
  association \[0..1\] to DEMO\_SALES\_SO\_CUSTOM\_ANALYTICS  
    as \_SalesOrderCustomData    
    on \_SalesOrderCustomData.SalesOrderKey = $projection.SalesOrderKey
  association \[0..1\] to DEMO\_SALES\_CDS\_VIEW\_ANALYTICS  
    as \_SalesOrderAnalyticData  
    on \_SalesOrderAnalyticData.SalesOrderKey = $projection.SalesOrderKey
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