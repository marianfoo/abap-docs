  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [RAP - BDEF Extension](javascript:call_link\('abenbdl_extension.htm'\)) →  [RAP - Base BDEF Extension](javascript:call_link\('abenbdl_extensibility_managed_unm.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20extension%2C%20ABENBDL_EXTENSION_SYNTAX%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - extension

Syntax

extension *\[*[using interface InterfaceBdef](javascript:call_link\('abenbdl_using_interface.htm'\))*\]**\[*;*\]*
  *\[*[extension\_header](javascript:call_link\('abenbdl_extension_header.htm'\))*\]*
  *\[*[foreign entity](javascript:call_link\('abenbdl_foreign.htm'\))*\]*
  *\[*[entity\_behavior\_extension](javascript:call_link\('abenbdl_extend_beh.htm'\))*\]*
  *\[*[extension\_entity\_behavior](javascript:call_link\('abenbdl_define_beh_extend.htm'\))*\]*
  *\[*[extend own authorization context](javascript:call_link\('abenbdl_extend_own_auth_context.htm'\))*\]*
  *\[*[define authorization context](javascript:call_link\('abenbdl_def_auth_context.htm'\))*\]*
...

Effect

Extends an existing [RAP behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") of type [managed](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry") or [unmanaged](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry") using a [BDEF extension](javascript:call_link\('abenrap_extension_glosry.htm'\) "Glossary Entry") in the [RAP BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry"). An existing RAP behavior definition can have one or more BDEF extensions. The number of extensions is not limited. A BDEF extension itself cannot be further extended.

Naming: BDEF extensions themselves and each single extension element should use a separate [namespace](javascript:call_link\('abennamespace_glosry.htm'\) "Glossary Entry") to avoid naming conflicts with the original BDEF and its elements. BDEF extensions created in non-SAP and non-partner development systems should use the [customer namespace](javascript:call_link\('abencustomer_namespace_glosry.htm'\) "Glossary Entry") prefix Z or ZZ.

A BDEF extension can have the following components:

-   [using interface](javascript:call_link\('abenbdl_using_interface.htm'\)): It is strongly recommended that a RAP BO is extended via an interface layer. For details, see topic [RAP BDL using interface, Extension](javascript:call_link\('abenbdl_using_interface.htm'\)).
-   [extension\_header](javascript:call_link\('abenbdl_extension_header.htm'\)): Mandatory component of a BDEF extension. Similar to the [RAP behavior definition header](javascript:call_link\('abencds_bdef_header_glosry.htm'\) "Glossary Entry") but offers fewer options.
    
    The semicolon after the keyword extension is either mandatory or not allowed, depending on the components of the extension\_header. See examples.
    
-   [foreign entity](javascript:call_link\('abenbdl_foreign.htm'\)): Defines a [RAP BO entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry") which is not part of the [CDS composition tree](javascript:call_link\('abencds_composition_tree_glosry.htm'\) "Glossary Entry") of the current RAP BO as part of the response structures. A foreign entity can be defined before, after, or between the other components. Only entities that belong to the same software component can be added as [RAP foreign entity](javascript:call_link\('abenrap_foreign_entity_glosry.htm'\) "Glossary Entry") to a BDEF extension.
-   [entity\_behavior\_extension](javascript:call_link\('abenbdl_extend_beh.htm'\)): behavior extension of an existing RAP BO entity.
-   [extension\_entity\_behavior](javascript:call_link\('abenbdl_define_beh_extend.htm'\)): defines the behavior for an extension node.
-   [extend own authorization context](javascript:call_link\('abenbdl_extend_own_auth_context.htm'\)): if the extended BO defines a [full authorization context](javascript:call_link\('abencds_own_ac_glosry.htm'\) "Glossary Entry"), this context can be extended. If the extended BO does not define an own authorization context, it must not be added via an extension.
-   [define authorization context](javascript:call_link\('abenbdl_def_auth_context.htm'\)): a new [authorization context for disable](javascript:call_link\('abencds_auth_context_glosry.htm'\) "Glossary Entry") can be defined in a BDEF extension. The syntax is similar to the syntax for RAP BOs with the following difference: The addition for disable is not supported. For details, see topic [RAP - define authorization context](javascript:call_link\('abenbdl_def_auth_context.htm'\)).

Example

The following source code shows BDEF extension DEMO\_RAP\_EXTENSION\_1. It extends BDEF DEMO\_RAP\_EXTENSIBLE\_ROOT. The extension contains the following components:

-   BDEF extension header
-   Entity behavior extension
-   Extension entity behavior
    
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
    

Continue
[RAP - using interface, Extension](javascript:call_link\('abenbdl_using_interface.htm'\))
[RAP - BDEF Extension Header](javascript:call_link\('abenbdl_extension_header.htm'\))
[RAP - Entity Behavior Extension](javascript:call_link\('abenbdl_extend_beh.htm'\))
[RAP - Extension Entity Behavior Definition](javascript:call_link\('abenbdl_define_beh_extend.htm'\))
[RAP - extend own authorization context](javascript:call_link\('abenbdl_extend_own_auth_context.htm'\))