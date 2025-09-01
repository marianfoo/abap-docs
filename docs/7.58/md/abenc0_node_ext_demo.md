  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Rules for ABAP Cloud](javascript:call_link\('abenabap_strict_rules.htm'\)) →  [Contract Rules for ABAP Released APIs](javascript:call_link\('abenrestricted_apis.htm'\)) →  [C0 Contract Rules](javascript:call_link\('abenc0_contract_rules.htm'\)) →  [C0 Contract Rules for CDS Entities](javascript:call_link\('abenc0_contract_rules_cds.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Example%3A%20C0%20Node%20Extensibility%2C%20ABENC0_NODE_EXT_DEMO%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Example: C0 Node Extensibility

This topic provides an example for the node extensibility of a C0 released CDS view entity. It shows how to prepare a CDS view entity for node extensibility and how to add an extension node to a released API from the [restricted ABAP language version](javascript:call_link\('abenrestricted_version_glosry.htm'\) "Glossary Entry") [ABAP for Cloud Development](javascript:call_link\('abenabap_for_cloud_dev_glosry.htm'\) "Glossary Entry").

CDS view entity as C0 released API

The following CDS view entity DEMO\_CDS\_PRODUCTTP fulfills all requirements for C0 node extensibility. It defines the necessary extensibility annotations, including @AbapCatalog.extensibility.allowNewCompositions: true.

Note: This CDS view entity shows how to create a released API. It meets all the requirements for C0 release. However, it is not released under the C0 contract for extensibility, because it is not intended to be used as an API.

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

The following CDS view entity extension DEMO\_C0\_NODE\_EXT extends the view entity displayed above. It adds a to-child association to an extension node.

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