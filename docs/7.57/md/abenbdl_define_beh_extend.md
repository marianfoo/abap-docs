  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [CDS BDL - BDEF Extension](javascript:call_link\('abenbdl_extension.htm'\)) →  [CDS BDL - Base BDEF Extension](javascript:call_link\('abenbdl_extensibility_managed_unm.htm'\)) →  [CDS BDL - extension](javascript:call_link\('abenbdl_extension_syntax.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - Extension Entity Behavior Definition, ABENBDL_DEFINE_BEH_EXTEND, 757%0D%0A%
0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - Extension Entity Behavior Definition

Syntax

... [define behavior for ExtNode](javascript:call_link\('abenbdl_define_beh.htm'\)) ...

Prerequisite

As a prerequisite, the extended [CDS behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") must explicitly allow BDEF extensions as described in topic [CDS BDL - Extensibility Enabling for RAP BOs](javascript:call_link\('abenbdl_extensibility_enabling_m_u.htm'\)).

Effect

Defines the behavior for an [extension node](javascript:call_link\('abenrap_ext_entity_behavior_glosry.htm'\) "Glossary Entry") in a BDEF extension using the statement define behavior for. As a prerequisite, the node must be added to the RAP data model via [RAP data model extensions](javascript:call_link\('abenrap_data_model_ext_glosry.htm'\) "Glossary Entry"). The BDEF extension can add behavior for this extension node.

The behavior for the extension node is defined in the same way as for RAP BOs, see section [Entity Behavior Definition](javascript:call_link\('abenbdl_define_beh.htm'\)), with the following differences:

-   No explicit pointing to a [RAP authorization master entity](javascript:call_link\('abenrap_auth_ma_ent_glosry.htm'\) "Glossary Entry").
    
    Use authorization dependent instead of [authorization dependent by \_Assoc](javascript:call_link\('abenbdl_authorization.htm'\)).
    
-   No explicit pointing to a [RAP lock master entity](javascript:call_link\('abenrap_lock_ma_ent_glosry.htm'\) "Glossary Entry").
    
    Use lock dependent instead of [lock dependent by \_Assoc](javascript:call_link\('abenbdl_locking.htm'\)).
    
-   No explicit pointing to a [RAP ETag master entity](javascript:call_link\('abenrap_etag_ma_ent_glosry.htm'\) "Glossary Entry").
    
    Use etag dependent instead of [etag dependent by \_Assoc](javascript:call_link\('abenbdl_etag.htm'\)).
    
    Note: As a best practice, SAP recommends that an ETag master field is defined for each individual entity. As a consequence, the syntax etag dependent should not be used at all.
    
-   Declare [ancestor associations](javascript:call_link\('abenbdl_ancestor_ext.htm'\)), so that the path to the authorization master, lock master, and ETag master entities can be derived.

If an ABAP behavior pool is specified, the rules for extension ABPs apply. See topic [CDS BDL - implementation in class unique, Extension](javascript:call_link\('abenbdl_in_class_unique_ext.htm'\)).

Hint

-   A short syntax form is available: ( lock, authorization, etag ) dependent. Each of the three components lock, authorization, and etag is optional but at least one of them must be specified within the parentheses.
-   Currently, only root entities can be defined as authorization master and lock master entity. An extension node can therefore not be specified as authorization master or as lock master entity.

Example

The BDEF extension DEMO\_RAP\_EXTENSION\_1 extends the CDS behavior definition DEMO\_RAP\_EXTENSIBLE\_ROOT. It behavior-enables an extension node using the syntax define behavior for. It defines behavior and multiple ancestor associations. Lock, authorization, and ETag master are not specified explicitly, but derived implicitly.

extension;
foreign entity demo\_rap\_factory\_ACTION;
extend behavior for GrandChild
{
  association \_Children4Ext { create; with draft; }
}
define behavior for DEMO\_RAP\_EXTENSIBLE\_EXT alias ExtNode
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

The executable example [Node extension](javascript:call_link\('abenbdl_assoc_ext_abexa.htm'\)) explains the example above in detail.

Continue
[CDS BDL - ancestor association](javascript:call_link\('abenbdl_ancestor_ext.htm'\))