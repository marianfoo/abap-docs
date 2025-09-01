  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Projection Views](javascript:call_link\('abencds_proj_views.htm'\)) →  [CDS DDL - CDS Projection View, Transactional Queries](javascript:call_link\('abencds_pv_transactional_query.htm'\)) →  [CDS DDL - projection\_list, transactional query](javascript:call_link\('abencds_proj_view_element_list.htm'\)) →  [CDS DDL - proj\_element, transactional query](javascript:call_link\('abencds_proj_view_element.htm'\)) →  [CDS DDL - expose\_assoc](javascript:call_link\('abencds_proj_view_expose_assoc.htm'\)) → 

CDS DDL - filter

Syntax

... \[*\[*cardinality:*\]* cds\_cond \] ...

Effect

Specifies a filter for an association from the projected entity that is exposed or redefined in a CDS projection view. The filter is specified in square brackets \[ \] when the association is exposed in the projection list. The filter can consist of two attributes, namely cardinality and [filter condition](javascript:call_link\('abenfilter_condition_glosry.htm'\) "Glossary Entry").

Example: \_Assoc\[1:field1 = 5\].

The following rules apply to the cardinality cardinality:

-   The cardinality can be 1 or \*. The association is declared as unique or non-unique.
-   A filter can never consist of a new cardinality alone. It must always be combined with a filter condition.
-   The cardinality of an association might implicitly be changed when a filter is added. If this is the case, and only in this case, the new cardinality can be specified in square brackets.
-   The max cardinality of a filtered association must be lower than or equal to the max cardinality of the original association.

The following rules apply to the filter condition cds\_cond:

-   The rules described in topic [CDS DDL - View Entity, path\_expr, filter](javascript:call_link\('abencds_path_expression_filter_v2.htm'\)) apply with one exception: no [join type](javascript:call_link\('abenjoin_type_glosry.htm'\) "Glossary Entry") can be specified for a filter of an exposed association in a CDS projection view.
-   The prefix $projection. can be used within a filter to access an element from the projection list
    
    Example: \_Assoc\[1:field1 = $projection.field1\] as \_alias
    

Example

The following CDS projection view DEMO\_SALES\_PV\_SO\_MODIFY is a projection of the CDS view DEMO\_SALES\_CDS\_SO. It exposes the association \_Items twice. The first time, all original properties are kept. The second time, the association is modified with a filter. The new alias name \_TopItems is assigned and by using the keyword REDIRECTED TO, the specialization as composition child is lost and the association is projected as a simple CDS association.

@AccessControl.authorizationCheck: #CHECK
define root view entity DEMO\_SALES\_PV\_SO\_MODIFY
  as projection on
    DEMO\_SALES\_CDS\_SO
    {
      key so\_key               as SalesOrderKey,
          id                   as SalesOrderExternalId,
          lifecycle\_status     as LifecycleStatus,
          buyer\_id             as BuyerId,
          \_Buyer.family\_name   as BuyerDescription,
          created\_by           as CreatedBy,
          last\_changed\_by      as LastChangedBy,
          \_Items:                            
              redirected to composition child DEMO\_SALES\_PV\_MODIFY\_1,
          \_Items\[\*:posnr <= 3\] as \_TopItems:  
              redirected to DEMO\_SALES\_PV\_MODIFY\_1
    }

Example

The following CDS projection view DEMO\_SALES\_PV\_SO\_PARAM is a projection of the CDS view DEMO\_SALES\_CDS\_SO. It exposes the parameter my\_parameter that is included in the associated CDS view DEMO\_SALES\_CDS\_SO\_PARAM. The parameter has to be filled upon exposure.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'Projection View SO'
@Metadata.allowExtensions: true
define root view entity DEMO\_SALES\_PV\_SO\_PARAM
  as projection on
    DEMO\_SALES\_CDS\_SO
    {
      key so\_key                               as SalesOrderKey,
          id                                   as SalesOrderExternalId,
          lifecycle\_status                     as LifecycleStatus,
          buyer\_id                             as BuyerId,
          created\_by                           as CreatedBy,
          last\_changed\_by                      as LastChangedBy,
          \_Param(P\_MyParameter: 'A').my\_parameter  
                                               as MyParameter
    }