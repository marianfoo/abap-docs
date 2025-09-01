  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_entity.htm) →  [ABAP CDS - Projection Views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_proj_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY AS PROJECTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_as_projection.htm) →  [CDS DDL - projection\_view, element\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_proj_view_element_list.htm) →  [CDS DDL - projection\_view, expose\_assoc](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_proj_view_expose_assoc.htm) → 

CDS DDL - projection\_view, REDIRECTED TO

Syntax

... *{*association*\[* \[[filter](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_pv_assoc_modified.htm)\]*\]* *\[*AS alias*\]*: REDIRECTED TO projection\_view*}*
  *|* *{*composition*\[* \[[filter](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_pv_assoc_modified.htm)\]*\]* *\[*AS alias*\]*: REDIRECTED TO COMPOSITION CHILD projection view*}*
  *|* *{*to-parent association*\[* \[[filter](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_pv_assoc_modified.htm)\]*\]* *\[*AS alias*\]*: REDIRECTED TO PARENT projection view*}*

Variants:

[1\. ... REDIRECTED TO projection\_view](#!ABAP_VARIANT_1@1@)
[2\. ... REDIRECTED TO COMPOSITION CHILD projection view](#!ABAP_VARIANT_2@2@)
[3\. ... REDIRECTED TO PARENT projection view](#!ABAP_VARIANT_3@3@)

Effect

It is possible to expose a [CDS association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_glosry.htm "Glossary Entry"), a [CDS composition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_composition_glosry.htm "Glossary Entry"), or a [CDS to-parent association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abento_parent_association_glosry.htm "Glossary Entry") of the [projected entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_pv_projected_entity_glosry.htm "Glossary Entry") in a [CDS projection view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_projection_view_glosry.htm "Glossary Entry"). If the target of the association does not change in the projection layer, the associations can be exposed directly. If the target entity is also projected, the association can be redirected to the target projection view.

With redirection, a specialized CDS association can lose its specialization and become a simple CDS association. Concretely, this means that you can redirect a CDS composition or a CDS to-parent association with the keyword REDIRECTED TO and then it is exposed as a simple CDS association. The other way around is not possible - a simple CDS association cannot be specialized. Thus, you cannot use the addition REDIRECTED TO COMPOSITION CHILD or REDIRECTED TO PARENT to redirect a simple CDS association.

Example

The projection view DEMO\_SALES\_PV\_SO is based on the CDS view DEMO\_SALES\_CDS\_SO. It replaces the [association targets](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_target_glosry.htm "Glossary Entry") of the associations with other CDS projection views where required.

@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Projection View SO'
@Metadata.allowExtensions: true
define root view entity DEMO\_SALES\_PV\_SO  
  as projection on DEMO\_SALES\_CDS\_SO
{                      
  key so\_key                                as SalesOrderKey,
      id                                    as SalesOrderExternalId,    
      lifecycle\_status                      as LifecycleStatus,      
      
      @ObjectModel.text.element: \['BuyerDescription'\]
      buyer\_id                              as BuyerId,  
      \_Buyer.family\_name                    as BuyerDescription,  
            
      created\_by                            as CreatedBy,
      last\_changed\_by                       as LastChangedBy,
      @ObjectModel.virtualElementCalculatedBy:  
                  'ABAP:CL\_DEMO\_SALES\_VIRT\_ELEM\_EXIT'
      virtual ValidToDate : abap.dats(8),
        
      \_Buyer    : redirected to DEMO\_SALES\_PV\_BUPA,
      \_ShipTo                               as \_ShipToPartner  
                : redirected to DEMO\_SALES\_PV\_BUPA,
      DEMO\_SALES\_CDS\_SO.ship\_to\_id          as ShipToPartner,
            
      \_Items    : redirected to composition child DEMO\_SALES\_PV\_SO\_I,
      \_Items\[\*:posnr <= 3\]                  as \_TopItems  
                : redirected to DEMO\_SALES\_PV\_SO\_I      
}

Variant 1

... REDIRECTED TO projection\_view

Effect

Redirects a [CDS association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_glosry.htm "Glossary Entry") to a new [association target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_target_glosry.htm "Glossary Entry").

The following applies to the redirection of a CDS association:

-   The target of the redirection projection\_view must be a projection view based on the original target of the association.

-   The target of the redirection projection\_view can be the CDS projection view projection\_view itself only if the projected CDS association is a [self association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenself_association_glosry.htm "Glossary Entry").

-   The target of the redirection REDIRECTED TO cannot be specified using a path expression.

-   The CDS projection view projection\_view can be used multiple times as the redirection target of the projected CDS associations in the CDS projection view projection\_view. The following syntax is valid:

\_Assoc1: REDIRECTED TO projection\_view,
\_Assoc2: REDIRECTED TO projection\_view

Hints

-   When the keyword REDIRECTED TO is used on specialized CDS associations (such as [CDS compositions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_composition_glosry.htm "Glossary Entry") and [CDS to-parent associations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abento_parent_association_glosry.htm "Glossary Entry")), they become non-specialized and are handled as CDS associations. Compositions and to-parent associations which are projected in this way never define compositions and to-parent associations in the projection view.
    

Variant 2

... REDIRECTED TO COMPOSITION CHILD projection\_view

Effect

Redirects a [CDS composition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_composition_glosry.htm "Glossary Entry") to a new [association target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_target_glosry.htm "Glossary Entry"). If the addition COMPOSITION CHILD is omitted, then the composition loses its specialization and is projected as a normal CDS association.

The following applies to the redirection of a CDS composition:

-   The CDS association redirected using the addition REDIRECTED TO COMPOSITION CHILD must be a CDS composition.

-   The target of the redirection REDIRECTED TO COMPOSITION CHILD must be the projection of the original target of the association. Therefore, the target cannot be a root projection view.

-   The target of the redirection REDIRECTED TO COMPOSITION CHILD cannot be specified using a path expression.

-   The target of REDIRECTED TO COMPOSITION CHILD cannot be the CDS projection view projection\_view itself. A [self association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenself_association_glosry.htm "Glossary Entry") is not possible.

-   The redirection target projection\_view must project exactly one to-parent association to its composition parent. This to-parent association must exist before the composition can be projected in the projection view.

-   The redirection target projection\_view can be used only once in a CDS composition and multiple times in CDS associations. This is demonstrated in the following simplified example:

-   This is valid

\_Assoc1: REDIRECTED TO COMPOSITION CHILD projection\_view,
\_Assoc2: REDIRECTED TO projection\_view

-   This is not valid

\_Assoc1: REDIRECTED TO COMPOSITION CHILD projection\_view,
\_Assoc2: REDIRECTED TO PARENT*|**{*COMPOSITION CHILD*}* projection\_view

Variant 3

... REDIRECTED TO PARENT projection\_view

Effect

Redirects a [to-parent association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abento_parent_association_glosry.htm "Glossary Entry") to a new [association target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_target_glosry.htm "Glossary Entry"). If the addition PARENT is omitted, then the to-parent association loses its specialization and is projected as a normal CDS association.

The following applies to the redirection of a CDS to-parent association:

-   The CDS association to\_parent\_assoc projected with this syntax must be defined as a CDS to-parent association in the underlying CDS view.

-   The target of the redirection REDIRECTED TO PARENT should be the projection of the original target of the to-parent association.

-   The target of the redirection REDIRECTED TO PARENT cannot be specified using a path expression.

-   The addition REDIRECTED TO PARENT can be used no more than once in the definition of a CDS projection view. This means that a CDS projection view can have no more than one parent entity.

-   The redirection target cannot be the CDS projection view projection\_view itself. A [self association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenself_association_glosry.htm "Glossary Entry") is not possible.

-   The redirection target projection\_view can be used only once in a CDS to-parent association and multiple times in CDS associations. This is demonstrated in the following simplified example:

-   This is valid

\_Assoc1: REDIRECTED TO PARENT projection\_view,
\_Assoc2: REDIRECTED TO projection\_view

-   This is not valid

\_Assoc1: REDIRECTED TO PARENT projection\_view,
\_Assoc2: REDIRECTED TO PARENT*|**{*COMPOSITION CHILD*}* projection\_view