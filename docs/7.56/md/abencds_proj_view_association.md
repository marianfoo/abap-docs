  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity.htm) →  [ABAP CDS - Projection Views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_views.htm) →  [CDS DDL - CDS Projection View, Transactional Queries](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_pv_transactional_query.htm) → 

CDS DDL - ASSOCIATION, transactional query

Syntax

... ASSOCIATION *\[* \[min..max\] *\]* TO target *\[*AS \_assoc*\]* ON [cds\_cond](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_conditional_expression_v2.htm)
                *\[* WITH DEFAULT FILTER [cds\_cond](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_conditional_expression_v2.htm) *\]* ...

Effect

Defines a [CDS association](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_association_glosry.htm "Glossary Entry") with the name \_assoc in a [CDS projection view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_projection_view_glosry.htm "Glossary Entry"). The same rules apply as for [associations in CDS view entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_association_v2.htm), but there are further restrictions. The main difference is that the newly defined associations can only be exposed, but they cannot be used in [path expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpath_expression_glosry.htm "Glossary Entry") to include elements from the [association target](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenassociation_target_glosry.htm "Glossary Entry"). The purpose of defining new associations is to model new relationships which can be interpreted by consumer frameworks, such as the [RAP query engine](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_query_engine_glosry.htm "Glossary Entry"). However, no additional [joins](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenjoin_glosry.htm "Glossary Entry") should be generated on CDS level by denormalizing fields from new association targets into the CDS projection view. Only "simple" associations can be defined in a CDS projection view. Specialized associations of type [composition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_composition_glosry.htm "Glossary Entry") or [to-parent](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abento_parent_association_glosry.htm "Glossary Entry") are not supported.

The target of the locally defined association target can be any other [CDS entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_glosry.htm "Glossary Entry"), a [DDIC database table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_db_table_glosry.htm "Glossary Entry"), or a [DDIC database view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_view_glosry.htm "Glossary Entry").

All elements included in the ON clause of an exposed [CDS association](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_association_glosry.htm "Glossary Entry") must also be included in the projection list of the CDS projection view.

Syntax rules

-   New associations in CDS projection views are defined in exactly the same way as associations in CDS view entities. The same rules apply to the additions \[min..max\], AS \_assoc, WITH DEFAULT FILTER, and the ON condition. See topic [CDS DDL - CDS View Entity, ASSOCIATION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_simple_association_v2.htm).

Exposure in the projection list

-   The newly defined association can be exposed, but exposure is not obligatory, as it can also be done in [CDS view entity extensions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity_extend_glosry.htm "Glossary Entry") later on.
-   An alias name alias can be assigned to the exposed association.
-   It is possible to enhance a locally defined association with an additional filter when exposing it in the projection list. Two kinds of attributes can be added in square brackets as filter: [cardinality](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencardinality_glosry.htm "Glossary Entry") and [filter condition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfilter_condition_glosry.htm "Glossary Entry"). It is not possible to specify [join type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenjoin_type_glosry.htm "Glossary Entry") characteristics in the filter. The details are described in topic [CDS DDL - CDS Projection View, filter](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_pv_assoc_modified.htm).
    
    When exposing a CDS association with a filter, an alternative element name alias using AS is mandatory.
    
    Here's an example: \_toAssoc\[1:field='1'\] as filteredAssoc
    
-   A CDS association can be exposed multiple times with various alternative element names. This makes it possible to use different filter conditions.
-   An exposed CDS association is part of the projection list. It is not, however, part of the result set, nor a component of the type defined in ABAP with respect to the CDS projection view.

Usage

-   No fields must be selected from locally defined associations. [Path expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpath_expression_glosry.htm "Glossary Entry") are not supported.

Client dependency

-   A CDS projection view that is based on a client-independent CDS view must not contain an association to a client-dependent target view. Client dependency must not be changed by introducing a new association. This also applies to [CDS view extensions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_extend_glosry.htm "Glossary Entry") later on, as this may lead to incompatibilities.

Hint

Redirection of a newly defined association with the keyword [REDIRECTED TO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_view_expose_assoc.htm) is not possible.

Example

The following CDS projection view DEMO\_SALES\_PV\_SO\_ASSOC is a projection of the CDS view entity DEMO\_SALES\_CDS\_SO. It defines associations to a [CDS custom entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_custom_entity_glosry.htm "Glossary Entry") and a CDS DDIC-based view. These associations are exposed in the element list, but no fields are picked from the associations via a path expression.

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