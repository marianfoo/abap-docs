---
title: "CDS DDL - redirection"
description: |
  Syntax ... REDIRECTED TO proj_view  REDIRECTED TO COMPOSITION CHILD proj_view  REDIRECTED TO PARENT proj_view Variants: 1. ... REDIRECTED TO proj_view(#!ABAP_VARIANT_1@1@) 2. ... REDIRECTED TO COMPOSITION CHILD proj view(#!ABAP_VARIANT_2@2@) 3. ... REDIRECTED TO PARENT proj view(#
version: "7.56"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_pv_assoc_redirected.htm"
abapFile: "abencds_pv_assoc_redirected.htm"
keywords: ["do", "if", "try", "data", "abencds", "assoc", "redirected"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity.htm) →  [ABAP CDS - Projection Views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_views.htm) →  [CDS DDL - CDS Projection View, Transactional Queries](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_pv_transactional_query.htm) →  [CDS DDL - projection\_list, transactional query](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_view_element_list.htm) →  [CDS DDL - proj\_element, transactional query](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_view_element.htm) →  [CDS DDL - expose\_assoc](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_view_expose_assoc.htm) → 

CDS DDL - redirection

Syntax

... REDIRECTED TO proj\_view
  *|* REDIRECTED TO COMPOSITION CHILD proj\_view
  *|* REDIRECTED TO PARENT proj\_view

Variants:

[1\. ... REDIRECTED TO proj\_view](#!ABAP_VARIANT_1@1@)
[2\. ... REDIRECTED TO COMPOSITION CHILD proj view](#!ABAP_VARIANT_2@2@)
[3\. ... REDIRECTED TO PARENT proj view](#!ABAP_VARIANT_3@3@)

Effect

Redirects a [CDS association](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_association_glosry.htm "Glossary Entry"), a [CDS composition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_composition_glosry.htm "Glossary Entry"), or a [CDS to-parent association](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abento_parent_association_glosry.htm "Glossary Entry") of the [projected entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_pv_projected_entity_glosry.htm "Glossary Entry") in a [CDS projection view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_projection_view_glosry.htm "Glossary Entry") to a new association target. As a prerequisite, the original association target must also have a CDS projection view. Redirection using the keyword REDIRECTED TO *\[*...*\]* means to direct an association to a new association target, which is also a CDS projection view, in this way moving the complete data model to the projection layer.

With redirection, a specialized CDS association can lose its specialization and become a simple CDS association. This means that you can redirect a CDS composition or a CDS to-parent association with the keyword REDIRECTED TO and then it is exposed as a simple CDS association. The other way around is not possible - a simple CDS association cannot be specialized. Thus, you cannot use the addition REDIRECTED TO COMPOSITION CHILD or REDIRECTED TO PARENT to redirect a simple CDS association.

Example

The projection view DEMO\_SALES\_PV\_SO is based on the CDS view DEMO\_SALES\_CDS\_SO. It replaces the [association targets](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenassociation_target_glosry.htm "Glossary Entry") of the associations with other CDS projection views where required.

@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Projection View SO'
@Metadata.allowExtensions: true
define root view entity DEMO\_SALES\_PV\_SO
provider contract transactional\_query
  as projection on
    DEMO\_SALES\_CDS\_SO
    {
      key     so\_key                           as SalesOrderKey,
              id                               as SalesOrderExternalId,
              lifecycle\_status                 as LifecycleStatus,
              @ObjectModel.text.element: \['BuyerDescription'\]
              buyer\_id                         as BuyerId,
              \_Buyer.family\_name               as BuyerDescription,
              created\_by                       as CreatedBy,
              last\_changed\_by                  as LastChangedBy,
              @ObjectModel.virtualElementCalculatedBy:
                          'ABAP:CL\_DEMO\_SALES\_VIRT\_ELEM\_EXIT'
      virtual ValidToDate : abap.dats(8),
              \_Buyer                                                  
                  : redirected to DEMO\_SALES\_PV\_BUPA,
              \_ShipTo                          as \_ShipToPartner  
                  : redirected to DEMO\_SALES\_PV\_BUPA,
              DEMO\_SALES\_CDS\_SO.ship\_to\_id     as ShipToPartner,
              \_Items                                                  
                  : redirected to composition child DEMO\_SALES\_PV\_SO\_I,
              \_Items\[\*:posnr <= 3\]             as \_TopItems      
                  : redirected to DEMO\_SALES\_PV\_SO\_I
    }

Executable Example

The executable example [Exposing Associations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenwith_associations_abexa.htm) accesses the CDS projection view shown above, reads all fields and returns the result.

Variant 1   

... REDIRECTED TO proj\_view

Effect

Redirects a [CDS association](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_association_glosry.htm "Glossary Entry") exposed in a CDS projection view to a new [association target](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenassociation_target_glosry.htm "Glossary Entry").

The following applies to the redirection of a CDS association:

-   Can be used to redirect simple CDS associations, CDS compositions, or to-parent associations.
    
    Note: When the keyword REDIRECTED TO is used on specialized CDS associations ([CDS compositions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_composition_glosry.htm "Glossary Entry") or [CDS to-parent associations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abento_parent_association_glosry.htm "Glossary Entry")), they become non-specialized and are handled as CDS associations. Compositions and to-parent associations which are projected in this way never define compositions and to-parent associations in the projection view.
    
-   The target of the redirection proj\_view must be a projection view based on the original target of the association.
-   The target of the redirection proj\_view can be the CDS projection view proj\_view itself only if the projected CDS association is a [self association](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenself_association_glosry.htm "Glossary Entry").
-   The target of the redirection REDIRECTED TO cannot be specified using a [path expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_view_path_expr.htm).
-   The CDS projection view proj\_view can be used multiple times as the redirection target of the projected CDS associations in the CDS projection view proj\_view. The following syntax is valid:
    
    \_Assoc1: REDIRECTED TO proj\_view,
    \_Assoc2: REDIRECTED TO proj\_view
    

Variant 2   

... REDIRECTED TO COMPOSITION CHILD proj\_view

Effect

Redirects a [CDS composition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_composition_glosry.htm "Glossary Entry") exposed in a CDS projection view to a new [association target](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenassociation_target_glosry.htm "Glossary Entry"). With the addition REDIRECTED TO COMPOSITION CHILD, the special characteristics of a CDS composition are kept.

The following applies to the redirection of a CDS composition:

-   The CDS association redirected using the addition REDIRECTED TO COMPOSITION CHILD must be a CDS composition.
-   The target of the redirection REDIRECTED TO COMPOSITION CHILD must be the projection of the original target of the association. Therefore, the target cannot be a root projection view.
-   The target of the redirection REDIRECTED TO COMPOSITION CHILD cannot be specified using a [path expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_view_path_expr.htm).
-   The target of REDIRECTED TO COMPOSITION CHILD cannot be the CDS projection view proj\_view itself. A [self association](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenself_association_glosry.htm "Glossary Entry") is not possible.
-   The redirection target proj\_view must project exactly one to-parent association to its composition parent. This to-parent association must exist before the composition can be projected in the projection view.
-   The redirection target proj\_view can be used only once in a CDS composition and multiple times in CDS associations. This is demonstrated in the following simplified example:
    
    -   This is valid
    
    \_Assoc1: REDIRECTED TO COMPOSITION CHILD proj\_view,
    \_Assoc2: REDIRECTED TO proj\_view
    
    -   This is not valid
    
    \_Assoc1: REDIRECTED TO COMPOSITION CHILD proj\_view,
    \_Assoc2: REDIRECTED TO PARENT*|**{*COMPOSITION CHILD*}* proj\_view
    

Variant 3   

... REDIRECTED TO PARENT proj\_view

Effect

Redirects a [to-parent association](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abento_parent_association_glosry.htm "Glossary Entry") in a CDS projection view to a new [association target](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenassociation_target_glosry.htm "Glossary Entry"). With the addition REDIRECTED TO PARENT, the special characteristics of a CDS to-parent association are kept.

The following applies to the redirection of a CDS to-parent association:

-   The CDS association to\_parent\_assoc projected with this syntax must be defined as a CDS to-parent association in the underlying CDS view.
-   The target of the redirection REDIRECTED TO PARENT should be the projection of the original target of the to-parent association.
-   The target of the redirection REDIRECTED TO PARENT cannot be specified using a [path expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_view_path_expr.htm).
-   The addition REDIRECTED TO PARENT can be used no more than once in the definition of a CDS projection view. This means that a CDS projection view can have no more than one parent entity.
-   The redirection target cannot be the CDS projection view proj\_view itself. A [self association](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenself_association_glosry.htm "Glossary Entry") is not possible.
-   The redirection target proj\_view can be used only once in a CDS to-parent association and multiple times in CDS associations. This is demonstrated in the following simplified example:
    
    -   This is valid
    
    \_Assoc1: REDIRECTED TO PARENT proj\_view,
    \_Assoc2: REDIRECTED TO proj\_view
    
    -   This is not valid
    
    \_Assoc1: REDIRECTED TO PARENT proj\_view,
    \_Assoc2: REDIRECTED TO PARENT*|**{*COMPOSITION CHILD*}* proj\_view
    

Continue
![Example](exa.gif "Example") [CDS DDL - CDS Projection View, expose associations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_view_assoc_abexa.htm)