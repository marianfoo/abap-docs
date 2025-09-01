---
title: "c0_demo_rap_bo"
description: |
  c0_demo_rap_bo - ABAP latest language reference documentation
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_demo_rap_bo.htm"
abapFile: "abenc0_demo_rap_bo.htm"
keywords: ["update", "delete", "do", "if", "try", "class", "abenc0", "demo", "rap"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Rules for ABAP Cloud](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_strict_rules.htm) →  [Contract Rules for ABAP Released APIs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrestricted_apis.htm) →  [C0 Contract Rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_contract_rules.htm) →  [C0 Contract Rules for RAP Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_contract_rules_bdef.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Example%3A%20C0%20Released%20RAP%20BO%2C%20Design%20and%20Consumption%2C%20ABENC0_DEMO_RAP_BO%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20
for%20improvement:)

Example: C0 Released RAP BO, Design and Consumption

This topic provides an example for the design of a C0 released RAP BO. It also shows an example for an extension to this released API from the [restricted ABAP language version](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrestricted_version_glosry.htm "Glossary Entry") [ABAP for Cloud Development](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_cloud_dev_glosry.htm "Glossary Entry").

Managed BDEF as C0 released API

The following BDEF DEMO\_RAP\_BASE\_DET\_VAL is based on the CDS view entity DEMO\_RAP\_BASE\_DET\_VAL and it fulfills all requirements for a C0 release:

-   It uses BDEF strict mode, version 2.
-   It is enabled for RAP extensibility.

Note: This BDEF shows how to create a released API. It meets all the requirements for a C0 release. However, it is not released under the C0 contract, extend, because it is not intended to be used as an API.

managed implementation in class bp\_demo\_rap\_base\_det\_val unique;
strict(2);
extensible
{ with determinations on modify;
  with determinations on save;
  with validations on save; }
define behavior for DEMO\_RAP\_BASE\_DET\_VAL
persistent table DEMO\_DBTAB\_ROOT
lock master
authorization master ( instance )
extensible
{
  create;
  update;
  delete;
  field(readonly:update) key\_field;
}

BDEF extension to a C0 released API

The following BDEF extension DEMO\_RAP\_EXT\_DET\_VAL extends the RAP BO displayed above and it obeys the naming rules.

extension using interface DEMO\_RAP\_INT\_DET\_VAL
implementation in class bp\_demo\_rap\_ext\_det\_val unique;
extend behavior for RootInterface
{
  determination setStatus on save { create; }
}