---
title: "c0_demo_ddic"
description: |
  c0_demo_ddic - ABAP 7.58 language reference documentation
version: "7.58"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc0_demo_ddic.htm"
abapFile: "abenc0_demo_ddic.htm"
keywords: ["do", "if", "try", "class", "abenc0", "demo", "ddic"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Rules for ABAP Cloud](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_strict_rules.htm) →  [Contract Rules for ABAP Released APIs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrestricted_apis.htm) →  [C0 Contract Rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc0_contract_rules.htm) →  [C0 Contract Rules for DDIC Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc0_contract_rules_ddic.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Example%3A%20C0%20Released%20DDIC%20Structure%2C%20Design%20and%20Consumption%2C%20ABENC0_DEMO_DDIC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggest
ion%20for%20improvement:)

Example: C0 Released DDIC Structure, Design and Consumption

This topic provides an example for the design of a C0 released DDIC structure. It also shows an example for an extension to this released API from the [restricted ABAP language version](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrestricted_version_glosry.htm "Glossary Entry") [ABAP for Cloud Development](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_cloud_dev_glosry.htm "Glossary Entry").

DDIC structure as a C0 released API

The following DDIC structure DEMO\_RELEASED API defines all necessary extensibility annotations and can be released as a stable API under the C0 contract.

Note: This DDIC structure serves merely demonstration purposes. It meets all the requirements for C0 release. However, it is not released under the C0 contract because it is not intended to be used as an API.

@EndUserText.label : 'Used for demo of C0 Released API'
@AbapCatalog.enhancement.category : #EXTENSIBLE\_ANY
@AbapCatalog.enhancement.fieldSuffix : 'EMO'
@AbapCatalog.enhancement.quotaMaximumFields : 250
@AbapCatalog.enhancement.quotaMaximumBytes : 2500
@AbapCatalog.enhancement.quotaShareCustomer : 50
@AbapCatalog.enhancement.quotaSharePartner : 50
define structure demo\_released\_api {
  product\_title   : abap.char(30);
  @Semantics.amount.currencyCode : 'demo\_released\_api.currency'
  amount          : abap.curr(7,2);
  currency        : abap.cuky;
  @AbapCatalog.anonymizedWhenDelivered : true
  created\_by      : char12 not null;
  created\_on      : abap.dats not null;
  created\_at      : abap.tims not null;
  @AbapCatalog.anonymizedWhenDelivered : true
  last\_changed\_by : char12 not null;
  last\_changed\_on : abap.dats not null;
  last\_changed\_at : abap.tims not null;
}

Extending a C0 released API

The following [append structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenappend_structure_glosry.htm "Glossary Entry") DEMO\_STRUCTURE\_EXTEND extends the DDIC structure DEMO\_RELEASED\_API displayed above. It complies with the naming rules, using a namespace prefix and the mandatory field suffix EMO.

Note: The prefix ii is representative. It is meant as a reminder to use the correct namespace prefix. In customer systems, the namespace prefix yy or zz must be used.

@EndUserText.label : 'Demo of extension to C0 Released API'
@AbapCatalog.enhancement.category : #NOT\_EXTENSIBLE
extend type demo\_released\_api with demo\_structure\_extend {
  @Semantics.quantity.unitOfMeasure : 'demo\_structure\_extend.ii\_unit\_emo
  ii\_quantity\_emo : abap.quan(15,3);
  ii\_unit\_emo     : abap.unit(3);
}

The class CL\_DEMO\_DDIC\_RELEASED\_API provides type information of the extended DDIC structure. It also includes the extension fields.