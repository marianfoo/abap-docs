---
title: "CDS BDL - Extending Elements"
description: |
  Syntax ... extend determine action(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_determine_action_ext.htm)  extend draft determine action Prepare(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_draft_action_ext.htm)  extend mapping for PartnerType(
version: "7.57"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_ext_elem_ext.htm"
abapFile: "abenbdl_ext_elem_ext.htm"
keywords: ["do", "if", "try", "data", "abenbdl", "ext", "elem"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl.htm) →  [CDS BDL - BDEF Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extension.htm) →  [CDS BDL - Base BDEF Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extensibility_managed_unm.htm) →  [CDS BDL - extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extension_syntax.htm) →  [CDS BDL - Entity Behavior Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extend_beh.htm) →  [CDS BDL - extension\_body](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_entity_beh_extension.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - Extending Elements, ABENBDL_EXT_ELEM_EXT, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - Extending Elements

Syntax

...
    [extend determine action](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_determine_action_ext.htm)
  *|* [extend draft determine action Prepare](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_draft_action_ext.htm)
  *|* [extend mapping for PartnerType](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_type_mapping_ext.htm)
  ...

Effect

Extends existing components of an existing RAP BO entity in the [CDS BDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdl_glosry.htm "Glossary Entry"). As a prerequisite, the respective components must be marked as extensible in the extended BDEF as described in topic [Extensibility Enabling for Managed and Unmanaged BDEFs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extensibility_enabling_m_u.htm). If explicitly enabled for extensibility, the following components can be extended:

-   [extend determine action](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_determine_action_ext.htm): [Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_prefix_extension_glosry.htm "Glossary Entry") [determinations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_determination_glosry.htm "Glossary Entry") and extension [validations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_validation_glosry.htm "Glossary Entry") can be added to an existing [determine action](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_det_action_glosry.htm "Glossary Entry").
-   [extend draft determine action Prepare](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_draft_action_ext.htm): Extension determinations and extension validations can be added to an existing draft determine action.
-   [extend mapping for PartnerType](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_type_mapping_ext.htm): An existing [RAP type mapping](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_type_mapping_glosry.htm "Glossary Entry") can be extended with extension fields.

Continue
[CDS BDL - extend determine action](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_determine_action_ext.htm)
[CDS BDL - extend draft determine action Prepare](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_draft_action_ext.htm)
[CDS BDL - extend mapping](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_type_mapping_ext.htm)