  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_entity.htm) →  [ABAP CDS - Projection Views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_proj_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY AS PROJECTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_as_projection.htm) →  [CDS DDL - projection\_view, element\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_proj_view_element_list.htm) →  [CDS DDL - projection\_view, expose\_assoc](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_proj_view_expose_assoc.htm) → 

CDS DDL - projection\_view, modified association

Syntax

... \_association*\[*\[filter\]*\]* AS \_newAlias *\[*: REDIRECTED TO projection\_view*\]*

Additions:

[1\. ... filter](#!ABAP_ADDITION_1@1@)
[2\. ... AS alias](#!ABAP_ADDITION_2@2@)
[3\. ... REDIRECTED TO proj\_view](#!ABAP_ADDITION_3@3@)

Effect

It is possible to modify existing associations in a [CDS projection view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_projection_view_glosry.htm "Glossary Entry"). That means that additional [filter conditions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfilter_condition_glosry.htm "Glossary Entry") can be added to an association which is already exposed by the [projected entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_pv_projected_entity_glosry.htm "Glossary Entry"). In this way, the [cardinality](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencardinality_glosry.htm "Glossary Entry") of an association can be changed implicitly. The modified association can then be given a new [alias name](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenalias_glosry.htm "Glossary Entry"). Redirection to a new [association target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_target_glosry.htm "Glossary Entry") is possible if the target of the association is also projected.

You can also pick fields from a modified association in the element list of a CDS projection view using a [path expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpath_expression_glosry.htm "Glossary Entry"). [Path expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpath_expression_glosry.htm "Glossary Entry") for modified associations can be constructed as explained in topic [CDS DDL - path\_expr](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expression_v2.htm). The following rules and restrictions apply in addition to the general rules for CDS path expressions:

-   The result set of the CDS projection view must be the same as the result set of the [projected entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_pv_projected_entity_glosry.htm "Glossary Entry"). Therefore, the target cardinality of each traversed association must be 1. This can also be achieved by using a [filter condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfilter_condition_glosry.htm "Glossary Entry").

-   Association chaining is allowed for field selection, as long as all associations traversed have a target cardinality of 1.

-   The keyword [LOCALIZED](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_proj_view_element.htm) can be used to display text elements in the user's logon language. All previous association paths must be filtered to 1.

-   It is possible to pass parameters in association paths.

Hint

A CDS association can be exposed multiple times with various alternative element names. This makes it possible to use different filter conditions [cds\_cond](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_proj_view_cond_expr.htm).

Example

The following CDS projection view DEMO\_SALES\_PV\_SO\_MODIFY is a projection of the CDS view DEMO\_SALES\_CDS\_SO. It exposes the association \_Items twice. The first time, all original properties are kept. The second time, the association is modified with a filter. The new alias name \_TopItems is assigned and by using the keyword REDIRECTED TO, the specialization as composition child is lost and the association is projected as a simple CDS association.

@AccessControl.authorizationCheck: #CHECK
define root view entity DEMO\_SALES\_PV\_SO\_MODIFY
  as projection on DEMO\_SALES\_CDS\_SO    
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

Addition 1

\[filter\]

Effect

An association in a CDS projection view can be modified by adding a filter filter in square brackets \[ \] when the association is exposed in the element list. The filter can consist of two attributes, namely cardinality and [filter condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfilter_condition_glosry.htm "Glossary Entry"). Here are the rules for filters for modified association in CDS projection views:

-   A filter can consist of two attributes: cardinality and [filter condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfilter_condition_glosry.htm "Glossary Entry"). The filter is specified in the following way:
    \[*\[*cardinality:*\]* cds\_cond \]
    Example: \_Assoc\[1:field1 = 5\].

-   The prefix $projection. can be used within a filter to access an element from the projection list
    Example: \_Assoc\[1:field1 = $projection.field1\] as \_alias

-   For the [filter condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfilter_condition_glosry.htm "Glossary Entry"), the rules for conditions in a filter condition of a path expression of a CDS view apply. See topic [CDS DDL - View Entity, path\_expr, filter](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expression_filter_v2.htm).

-   The cardinality of an association might implicitly be changed when a filter is added. If this is the case, and only in this case, the new cardinality can be specified in square brackets. A filter can never consist of a new cardinality alone.

-   The max cardinality of a filtered association must be lower than or equal to the max cardinality of the original association.

-   It is not possible to specify [join type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenjoin_type_glosry.htm "Glossary Entry") characteristics in the filter.
    

Addition 2

... AS \_newAlias

Effect

Defines the name \_newAlias as new alias name for a modified association upon exposure. The name \_newAlias must comply with the naming rules for [names](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_general_syntax_rules.htm).

Addition 3

REDIRECTED TO proj\_view

Effect

If the target of a modified association is also projected, the association can be redirected to the target projection view. The general rules for redirection are explained in topic [CDS DDL - projection\_view expose\_assoc](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_proj_view_expose_assoc.htm). In addition, the following rules and restrictions apply to modified associations in CDS projection views:

-   It is possible to redirect modified associations using the keyword [REDIRECTED TO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_proj_view_expose_assoc.htm).

-   The additions REDIRECTED TO COMPOSITION CHILD and REDIRECTED TO PARENT are not allowed. [To-parent associations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abento_parent_association_glosry.htm "Glossary Entry") and [compositions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_composition_glosry.htm "Glossary Entry") can be redirected as simple [CDS associations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_glosry.htm "Glossary Entry").

-   Redirected associations can be enhanced by an [alias name](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenalias_glosry.htm "Glossary Entry").

-   Associations exposed via association chains must not be redirected.