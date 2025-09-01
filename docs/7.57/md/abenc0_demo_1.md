---
title: "ProductTitle,"
description: |
  Amount, Currency  CDS view entity extension to a C0 released API The following CDS view entity extension DEMO_CDS_EXTEND_1 extends the CDS projection view shown above and it fulfills all requirements for consuming a C0 released API from the restricted ABAP language version ABAP for Cloud Develop
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc0_demo_1.htm"
abapFile: "abenc0_demo_1.htm"
keywords: ["do", "if", "try", "data", "abenc0", "demo"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Rules for Strict ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_strict_rules.htm) →  [Contract Rules for Released APIs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrestricted_apis.htm) →  [C0 Contract Rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc0_contract_rules.htm) →  [C0 Contract Rules for CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc0_contract_rules_cds.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Example: C0 Released CDS Projection View, Design and Consumption, ABENC0_DEMO_1, 757%
0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Example: C0 Released CDS Projection View, Design and Consumption

This topic provides an example for the design of a C0 released CDS projection view. It also shows an example for an extension to this released API from the [restricted ABAP language version](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrestricted_version_glosry.htm "Glossary Entry") [ABAP for Cloud Development](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_sap_cloud_glosry.htm "Glossary Entry").

CDS projection view as C0 released API

The following CDS projection view DEMO\_CDS\_PRODUCTTP\_PV is based on the CDS view entity DEMO\_CDS\_PRODUCTTP and it fulfills all requirements for C0 release:

-   It defines the necessary extensibility annotations.
-   It is part of a transactional RAP application (indicated by the ROOT characteristic).
-   It defines the stable data source Product which fulfills all requirements necessary for C0 release.

Note: This CDS projection view demonstrates the design of a released API, but it is not actually released for C0, since it is not intended to serve as released API.

@EndUserText.label: 'Demo for released API, projection layer'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
@Metadata.allowExtensions: true
@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'EMO',
  allowNewDatasources: true,
  dataSources: \['Product'\],
  quota: {
    maximumFields: 250,
    maximumBytes: 2500
  }
}
define root view entity DEMO\_CDS\_PRODUCTTP\_PV  
provider contract transactional\_query
as projection on DEMO\_CDS\_PRODUCTTP as Product
{
  key ProductId,
  
      ProductTitle,
      
      Amount,
      Currency
      
}

CDS view entity extension to a C0 released API

The following CDS view entity extension DEMO\_CDS\_EXTEND\_1 extends the CDS projection view shown above and it fulfills all requirements for consuming a C0 released API from the restricted ABAP language version ABAP for Cloud Development:

-   The extension fields are derived from the stable data source Product and use the alias name of the stable data source as prefix.
-   The newly added element II\_UnitDescription\_EMO uses the mandatory element suffix EMO.
    
    Note: The prefix ii is representative. It is meant as reminder to use the correct namespace prefix. In customer systems, the namespace prefix yy or zz must be used.
    
-   The newly added element II\_UnitDescription\_EMO is a path expression with a path length of 3. This traversing along an association path is only allowed because the annotation @AbapCatalog.extensibility.allowNewDatasources is set to true.
    
    extend view entity DEMO\_CDS\_PRODUCTTP\_PV with {
    Product.ii\_quantity\_emo,
    Product.ii\_unit\_emo,
    Product.\_ii\_ToUnitEMO.\_Text.UnitOfMeasureLongName  
      as II\_UnitDescription\_EMO: localized
    }
    

The program DEMO\_CDS\_RELEASED\_API\_PV provides type information of the enhanced CDS projection view. It also includes the view fields added by the extension.