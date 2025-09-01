---
title: "CDS BDL - BDEF Extension, Extensibility Enabling"
description: |
  CDS behavior definitions must be explicitly enabled to allow for behavior extensibility. They must fulfill technical requirements and explicitly allow extensions. Otherwise, their behavior must not be extended. The following sections describe how to enable CDS behavior definitions of type managed(
version: "7.57"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extensibility_enabling.htm"
abapFile: "abenbdl_extensibility_enabling.htm"
keywords: ["do", "if", "try", "data", "abenbdl", "extensibility", "enabling"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl.htm) →  [CDS BDL - BDEF Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extension.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - BDEF Extension, Extensibility Enabling, ABENBDL_EXTENSIBILITY_ENABLING, 757
%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - BDEF Extension, Extensibility Enabling

CDS behavior definitions must be explicitly enabled to allow for behavior extensibility. They must fulfill technical requirements and explicitly allow extensions. Otherwise, their behavior must not be extended. The following sections describe how to enable CDS behavior definitions of type [managed](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry"), [unmanaged](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry"), and [projection](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry") for behavior extensibility.

-   [CDS BDL - Extensibility Enabling for Base BOs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extensibility_enabling_m_u.htm)
-   [CDS BDL - Extensibility Enabling for CDS Projection BDEFs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_ext_enabling_projection.htm)

Hint

For field and node extensibility, the RAP data model must be enabled for extensibility. This is described in the following sections:

-   [DDIC - Extensions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_enhancements.htm)
-   [ABAP CDS - CDS Entity Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_extension.htm)

Continue
[CDS BDL - Extensibility Enabling for Base BOs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extensibility_enabling_m_u.htm)
[CDS BDL - Extensibility Enabling for CDS Projection BDEFs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_ext_enabling_projection.htm)