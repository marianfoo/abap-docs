  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Rules for Strict ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_strict_rules.htm) →  [Contract Rules for Released APIs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrestricted_apis.htm) →  [C0 Contract Rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc0_contract_rules.htm) →  [C0 Contract Rules for CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc0_contract_rules_cds.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Example: C0 Released CDS View Entity, Design and Consumption, ABENC0_DEMO, 757%0D%0A%
0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Example: C0 Released CDS View Entity, Design and Consumption

This topic provides an example for the design of a C0 released CDS view entity. It also shows an example for an extension to this released API from the [restricted ABAP language version](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrestricted_version_glosry.htm "Glossary Entry") [ABAP for Cloud Development](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_sap_cloud_glosry.htm "Glossary Entry").

CDS view entity as C0 released API

The following CDS view entity DEMO\_CDS\_PRODUCTTP\_E is based on the DDIC database table DEMO\_PRODUCT and it fulfills all requirements for C0 release:

-   It defines the necessary extensibility annotations.
-   It is part of a transactional RAP application (indicated by the ROOT characteristic).
-   It defines the stable data source Persistence which fulfills all requirements necessary for C0 release.

Note: This CDS view entity demonstrates the design of a released API, but it is not actually released for C0, since it is not intended to serve as released API.

@EndUserText.label: 'Demo for C0 released API'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'EMO',
  allowNewDatasources: false,
  dataSources: \['Persistence'\],
  quota: {
    maximumFields: 250,
    maximumBytes: 2500
  }
}
define view entity DEMO\_CDS\_PRODUCTTP\_E
  as select from demo\_product as Persistence
{
  key product\_id
}

CDS view entity extension to a C0 released API

The following CDS view entity extension DEMO\_CDS\_EXTEND extends the view entity displayed above and it fulfills all requirements for consuming a C0 released API from the restricted ABAP language version ABAP for Cloud Development:

-   The extension fields are derived from the stable data source Persistence and use the alias name of the stable data source as prefix.
-   The newly defined association \_ii\_ToUnit\_EMO uses the mandatory element suffix EMO.
-   The association target DEMO\_CDS\_UNIT of the newly defined association \_ii\_ToUnit\_EMO is C1 released.

Note: The prefix ii is representative. It is meant as reminder to use the correct namespace prefix. In customer systems, the namespace prefix yy or zz must be used.

extend view entity DEMO\_CDS\_PRODUCTTP\_E with
association \[0..1\] to DEMO\_CDS\_UNIT as \_ii\_ToUnitEMO  
  on $projection.ii\_unit\_emo = \_ii\_ToUnitEMO.UnitOfMeasure
{
  @Semantics.quantity.unitOfMeasure: 'ii\_unit\_emo'
  Persistence.ii\_quantity\_emo,
  Persistence.ii\_unit\_emo,
  \_ii\_ToUnitEMO
}

The program DEMO\_CDS\_RELEASED\_API\_VE provides type information of the enhanced CDS view entity. It also includes the view fields added by the extension.