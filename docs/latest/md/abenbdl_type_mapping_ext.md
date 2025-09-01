---
title: "RAP - extend mapping"
description: |
  Syntax ... extend mapping for PartnerType    control ControlType corresponding except Comp1,Comp2, ...  EntityComp1      = PartnerComp1 control ControlComp; EntityComp2      = PartnerComp2 control ControlComp; parameter Param1 = PartnerComp;
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_type_mapping_ext.htm"
abapFile: "abenbdl_type_mapping_ext.htm"
keywords: ["do", "if", "try", "abenbdl", "type", "mapping", "ext"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl.htm) →  [RAP - BDEF Extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extension.htm) →  [RAP - Base BDEF Extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extensibility_managed_unm.htm) →  [RAP - extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extension_syntax.htm) →  [RAP - Entity Behavior Extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extend_beh.htm) →  [RAP - extension\_body](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_entity_beh_extension.htm) →  [RAP - Extending Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_ext_elem_ext.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20extend%20mapping%2C%20ABENBDL_TYPE_MAPPING_EXT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - extend mapping

Syntax

... extend mapping for PartnerType    *\[*control ControlType*\]*
                                      *{**\[*corresponding *\[*except Comp1,Comp2, ...*\]**\]**}*
    {
      EntityComp1      = PartnerComp1 *\[*control ControlComp*\]*;
     *\[*EntityComp2      = PartnerComp2 *\[*control ControlComp*\]*;*\]*
     *\[*parameter Param1 = PartnerComp;*\]*
     *\[*... ;*\]*
    }
  *|* mapping for PartnerType           *\[*control ControlComp*\]*
                                       corresponding *\[*except Comp1,Comp2, ...*\]*;
...

Effect

Extends an existing [RAP type mapping](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_type_mapping_glosry.htm "Glossary Entry") with extension fields. The syntax is similar to the syntax for RAP type mapping RAP BOs, see topic [RAP - Type Mapping](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_type_mapping.htm). As a prerequisite, the respective type mapping must be explicitly defined as extensible as described in topic [RAP - Extensibility Enabling for Base BOs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extensibility_enabling_m_u.htm).