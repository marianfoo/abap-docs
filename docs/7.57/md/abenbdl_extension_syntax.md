  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl.htm) →  [CDS BDL - BDEF Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extension.htm) →  [CDS BDL - Base BDEF Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extensibility_managed_unm.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - extension, ABENBDL_EXTENSION_SYNTAX, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0
A%0D%0ASuggestion for improvement:)

CDS BDL - extension

Syntax

extension *\[*[using interface InterfaceBdef](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_using_interface.htm)*\]**\[*;*\]*
  *\[*[extension\_header](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extension_header.htm)*\]*
  *\[*[foreign entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_foreign.htm)*\]*
  *\[*[entity\_behavior\_extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extend_beh.htm)*\]*
  *\[*[extension\_entity\_behavior](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_define_beh_extend.htm)*\]*
  *\[*[extend own authorization context](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extend_own_auth_context.htm)*\]*
  *\[*[define authorization context](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_def_auth_context.htm)*\]*
...

Effect

Extends an existing [CDS behavior definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") of type [managed](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry") or [unmanaged](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry") using a [BDEF extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_extension_glosry.htm "Glossary Entry") in the [CDS BDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdl_glosry.htm "Glossary Entry"). An existing CDS behavior definition can have one or more BDEF extensions. The number of extensions is not limited. A BDEF extension itself cannot be further extended.

Naming: BDEF extensions themselves and each single extension element should use a separate [namespace](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennamespace_glosry.htm "Glossary Entry") to avoid naming conflicts with the original BDEF and its elements. BDEF extensions created in non-SAP and non-partner development systems should use the [customer namespace](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencustomer_namespace_glosry.htm "Glossary Entry") prefix Z or ZZ.

A BDEF extension can have the following components:

-   [using interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_using_interface.htm): It is strongly recommended that a RAP BO is extended via an interface layer. For details, see topic [CDS BDL using interface, Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_using_interface.htm).
-   [extension\_header](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extension_header.htm): Mandatory component of a BDEF extension. Similar to the [CDS behavior definition header](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdef_header_glosry.htm "Glossary Entry") but offers fewer options.
    
    The semicolon after the keyword extension is either mandatory or not allowed, depending on the components of the extension\_header. See examples.
    
-   [foreign entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_foreign.htm): Defines a [RAP BO entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_entity_glosry.htm "Glossary Entry") which is not part of the [CDS composition tree](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_composition_tree_glosry.htm "Glossary Entry") of the current RAP BO as part of the response structures. A foreign entity can be defined before, after, or between the other components. Only entities that belong to the same software component can be added as [RAP foreign entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_foreign_entity_glosry.htm "Glossary Entry") to a BDEF extension.
-   [entity\_behavior\_extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extend_beh.htm): behavior extension of an existing RAP BO entity.
-   [extension\_entity\_behavior](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_define_beh_extend.htm): defines the behavior for an extension node.
-   [extend own authorization context](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extend_own_auth_context.htm): if the extended BO defines an [own authorization context](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_own_ac_glosry.htm "Glossary Entry"), this context can be extended. If the extended BO does not define an own authorization context, it must not be added via an extension.
-   [define authorization context](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_def_auth_context.htm): a new [authorization context](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_auth_context_glosry.htm "Glossary Entry") can be defined in a BDEF extension. The syntax is similar to the syntax for RAP BOs with the following difference: The addition for disable is not supported. For details, see topic [CDS BDL - define authorization context](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_def_auth_context.htm).

Example

The following source code shows BDEF extension DEMO\_RAP\_EXTENSION\_1. It extends BDEF DEMO\_RAP\_EXTENSIBLE\_ROOT. The extension contains the following components:

-   BDEF extension header
-   Entity behavior extension
-   Authorization context
-   Extension entity behavior
    
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
    

Continue
[CDS BDL - using interface, Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_using_interface.htm)
[CDS BDL - BDEF Extension Header](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extension_header.htm)
[CDS BDL - Entity Behavior Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extend_beh.htm)
[CDS BDL - Extension Entity Behavior Definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_define_beh_extend.htm)
[CDS BDL - extend own authorization context](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extend_own_auth_context.htm)