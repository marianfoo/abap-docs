---
title: "RAP - Extension Entity Behavior Definition"
description: |
  Syntax ... define behavior for ExtNode using(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_define_beh.htm) ... Prerequisite As a prerequisite, the extended RAP behavior definition(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_behavior_d
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_define_beh_extend.htm"
abapFile: "abenbdl_define_beh_extend.htm"
keywords: ["update", "delete", "do", "if", "try", "class", "data", "abenbdl", "define", "beh", "extend"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl.htm) →  [RAP - BDEF Extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extension.htm) →  [RAP - Base BDEF Extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extensibility_managed_unm.htm) →  [RAP - extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extension_syntax.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Extension%20Entity%20Behavior%20Definition%2C%20ABENBDL_DEFINE_BEH_EXTEND%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impr
ovement:)

RAP - Extension Entity Behavior Definition

Syntax

... [define behavior for ExtNode *\[*using*\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_define_beh.htm) ...

Prerequisite

As a prerequisite, the extended [RAP behavior definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") must explicitly allow BDEF extensions as described in topic [RAP BDL - Extensibility Enabling for Base BOs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extensibility_enabling_m_u.htm).

Effect

Defines the behavior for an [extension node](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_ext_entity_behavior_glosry.htm "Glossary Entry") in a BDEF extension using the statement define behavior for. As a prerequisite, the node must be added to the RAP data model via [RAP data model extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_data_model_ext_glosry.htm "Glossary Entry"). The BDEF extension can add behavior for this extension node.

The behavior for the extension node is defined in the same way as for RAP BOs, see section [Entity Behavior Definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_define_beh.htm), with the following differences:

-   A [CDS transactional interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_trans_interface_glosry.htm "Glossary Entry") can be specified with the syntax addition [using](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_using_interface.htm) (instead of [using interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_using_interface.htm), which is used for RAP BO extensions).
-   No explicit pointing to a [RAP authorization master entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_auth_ma_ent_glosry.htm "Glossary Entry").
    
    Use authorization dependent instead of [authorization dependent by \_Assoc](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_authorization.htm).
    
-   No explicit pointing to a [RAP lock master entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_lock_ma_ent_glosry.htm "Glossary Entry").
    
    Use lock dependent instead of [lock dependent by \_Assoc](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_locking.htm).
    
-   No explicit pointing to a [RAP ETag master entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_etag_ma_ent_glosry.htm "Glossary Entry").
    
    Use etag dependent instead of [etag dependent by \_Assoc](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_etag.htm).
    
    Note: As a best practice, SAP recommends that an ETag master field is defined for each individual entity. As a consequence, the syntax etag dependent should not be used at all.
    
-   Declare [ancestor associations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_ancestor_ext.htm), so that the path to the authorization master, lock master, and ETag master entities can be derived.

If an ABAP behavior pool is specified, the rules for extension ABPs apply. See topic [RAP BDL - implementation in class unique, Extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_in_class_unique_ext.htm).

Hints

-   A short syntax form is available: ( lock, authorization, etag ) dependent. Each of the three components lock, authorization, and etag is optional but at least one of them must be specified within the parentheses.
-   Currently, only root entities can be defined as authorization master and lock master entity. An extension node can therefore not be specified as authorization master or as lock master entity.
-   Currently, [RAP business events](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_entity_event_glosry.htm "Glossary Entry") can only be defined in [RAP BO root entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_root_entity_glosry.htm "Glossary Entry"). Since extension nodes are usually below the root node, they cannot define any new RAP business events.

Example

The BDEF extension DEMO\_RAP\_EXTENSION\_1 extends the RAP behavior definition DEMO\_RAP\_EXTENSIBLE\_ROOT. It behavior-enables an extension node using the syntax define behavior for. It defines behavior and multiple ancestor associations. Lock, authorization, and ETag master are not specified explicitly, but derived implicitly.

extension using interface demo\_rap\_ext\_using\_interface;
foreign entity demo\_rap\_factory\_ACTION;
extend behavior for GrandChildInterface
{
  association \_Children4Ext { create; with draft; }
}
define behavior for DEMO\_RAP\_EXTENSIBLE\_EXT alias ExtNode
  using DEMO\_RAP\_EXT\_USING\_INT\_EXT
persistent table demo\_ggchl\_ex\_ba
draft table demo\_ggrch\_ext
etag master Timestamp
( lock, authorization ) dependent
{
  update;
  delete;
  field ( readonly )
  KeyField, KeyFieldchild, Keyfieldgrchld;
  field ( readonly : update ) Keyfieldggchld;
  association \_parent { with draft; }
  association \_Sibling4 { with draft; }
  ancestor association \_GrandParent2 { with draft; }
  ancestor association \_GreatGrandParent1 { with draft; }
  mapping for demo\_ggchl\_ex\_ba
  {
    Keyfield = key\_field;
    Keyfieldchild = key\_field\_child;
    Keyfieldgrchld = key\_field\_grchld;
    Keyfieldggchld = key\_field\_ggchld;
    Datafield = data\_field;
    Charfield = char\_field;
  }
}

Executable Example

The executable example [Node extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_assoc_ext_abexa.htm) explains the example above in detail.

Continue
[RAP - ancestor association](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_ancestor_ext.htm)