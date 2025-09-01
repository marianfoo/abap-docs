  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Rules for Strict ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_strict_rules.htm) →  [Contract Rules for Released APIs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrestricted_apis.htm) →  [C0 Contract Rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc0_contract_rules.htm) →  [C0 Contract Rules for CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc0_contract_rules_cds.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Example: C0 Node Extensibility, ABENC0_NODE_EXT_DEMO, 757%0D%0A%0D%0AError:%0D%0A%0D%
0A%0D%0A%0D%0ASuggestion for improvement:)

Example: C0 Node Extensibility

This topic provides an example for the node extensibility of a C0 released CDS view entity. It shows how to prepare a CDS view entity for node extensibility and how to add an extension node to a released API from the [restricted ABAP language version](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrestricted_version_glosry.htm "Glossary Entry") [ABAP for Cloud Development](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_sap_cloud_glosry.htm "Glossary Entry").

CDS view entity as C0 released API

The following CDS view entity DEMO\_CDS\_PRODUCTTP fulfills all requirements for C0 node extensibility. It defines the necessary extensibility annotations, including @AbapCatalog.extensibility.allowNewCompositions: true.

Note: This CDS view entity demonstrates the design of a released API, but it is not actually released for C0, since it is not intended to serve as released API.

@EndUserText.label: 'Demo for released API, select from v2'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'EMO',
  allowNewDatasources: false,
  dataSources: \['\_Extension'\],
  quota: {
    maximumFields: 250,
    maximumBytes: 2500
  },
  allowNewCompositions: true
}
define root view entity DEMO\_CDS\_PRODUCTTP  
as select from DEMO\_CDS\_PRODUCT as Product
association \[0..1\] to DEMO\_CDS\_PRODUCTTP\_E as \_Extension  
    on $projection.ProductId = \_Extension.product\_id
  
{
  key ProductId,
      ProductTitle,
//
      @Semantics.amount.currencyCode: 'Currency'
      Amount,
      Currency,
      
      CreatedBy,
      CreatedOn,
      CreatedAt,
      LastChangedBy,
      LastChangedOn,
      LastChangedAt
}

CDS view entity extension to a C0 released API

The following CDS view entity extension DEMO\_C0\_NODE\_EXT extends the view entity displayed above. It adds a CDS composition to an extension node.

Note: The prefix ii is representative. It is meant as reminder to use the correct namespace prefix. In customer systems, the namespace prefix yy or zz must be used.

extend view entity DEMO\_CDS\_PRODUCTTP with  
composition \[1..\*\] of DEMO\_C0\_EXTENSION\_NODE as ii\_comp\_emo
{
  ii\_comp\_emo
}

Extension node

The following CDS view entity is added to the data model as extension node:

@AbapCatalog.viewEnhancementCategory: \[#NONE\]
@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, C0 extension node'
@Metadata.ignorePropagatedAnnotations: true
define view entity DEMO\_C0\_EXTENSION\_NODE  
as select from demo\_tab\_ext
association to parent DEMO\_CDS\_PRODUCTTP as \_parent
  on $projection.ProductId = \_parent.ProductId  
{
key ingredient\_id          as IngredientId,
      product\_id             as ProductId,
      ingredient\_title       as IngredientTitle,
      ingredient\_description as IngredientDescription,
      \_parent
}