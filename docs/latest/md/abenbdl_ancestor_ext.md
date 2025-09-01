  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl.htm) →  [RAP - BDEF Extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extension.htm) →  [RAP - Base BDEF Extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extensibility_managed_unm.htm) →  [RAP - extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extension_syntax.htm) →  [RAP - Extension Entity Behavior Definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_define_beh_extend.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20ancestor%20association%2C%20ABENBDL_ANCESTOR_EXT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - ancestor association

Syntax

...  ancestor association \_Assoc*\[*;*\]*
             *\[*abbreviation \_newName*\]*
             *\[*without response*\]*
             *\[*{*\[*with draft;*\]*}*\]*

Effect

Declares an [association](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_association_glosry.htm "Glossary Entry") as an ancestor association. The following rules apply to ancestor associations:

-   Each association that points to an entity between the current node and the root node should be marked as ancestor, except for the direct parent entity. That means that an entity can have multiple ancestor associations.
    
    The following associations must not be declared as ancestor:
    
    -   Sibling entities on the same hierarchy level must not be marked as ancestor.
    -   The direct parent entity must not be marked as ancestor, since it can be clearly identified as ancestor by its CDS definition.
    -   If there are multiple associations with the same association target, at most one of them can be declared as ancestor.
    
    All other associations should be marked as ancestor.
    
-   An ancestor association must have a [cardinality](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencardinality_glosry.htm "Glossary Entry") of 1.
-   The key fields of all ancestor associations must be marked as readonly.

The purpose of ancestor associations is to guarantee the stability of extensions even if the extended RAP BO is modified. Via ancestor associations, the path to the [RAP authorization master entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_auth_ma_ent_glosry.htm "Glossary Entry"), [RAP lock master entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_lock_ma_ent_glosry.htm "Glossary Entry"), and [RAP ETag master entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_etag_ma_ent_glosry.htm "Glossary Entry") can be derived and need not be specified explicitly. Therefore, the syntax ancestor association makes the direct pointing to a authorization master, lock master, and ETag master obsolete:

-   Syntax to specify a [RAP lock dependent entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_lock_dep_ent_glosry.htm "Glossary Entry"): lock dependent instead of lock dependent by \_Assoc
-   Syntax to specify a [RAP authorization dependent entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_auth_dep_ent_glosry.htm "Glossary Entry"): authorization dependent instead of authorization dependent by \_Assoc
-   Syntax to specify a [RAP ETag dependent entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_etag_dep_ent_glosry.htm "Glossary Entry"): etag dependent instead of etag dependent by \_Assoc

A short syntax form is available: ( lock, authorization, etag ) dependent. Each of the three components lock, authorization, and etag is optional but at least one of them must be specified within the brackets.

Additions:

-   abbreviation \_newName: Defines an alternative name for an association. The abbreviation \_newName can have a maximum of 16 characters. Associations are in the namespace of their root entity and can have up to 30 characters. This is under certain circumstances too long to be processed in [ABAP RAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap_glosry.htm "Glossary Entry"). Whenever a shorter name is required, you are prompted to assign an abbreviation for the association with no more than 16 characters.
-   without response The optional addition without response is for cross-BO associations that have an association target from another BO. With such a cross-BO association, the association target entity is automatically included in the response types as [foreign entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_foreign.htm). In this way, problems with the target entity can become part of the response types during read-by-association or create-by-association operations. without response prevents the default behavior of the [foreign entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_foreign_entity_glosry.htm "Glossary Entry") being included in the response types.
-   with draft: [Draft-enables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_draft_handling_glosry.htm "Glossary Entry") an association. A draft-enabled association retrieves active data if it is followed from an [active instance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_active_instance_glosry.htm "Glossary Entry") and draft data if it is followed from a [draft instance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_draft_instance_glosry.htm "Glossary Entry") (for details about RAP draft handling, see [RAP BDL - managed, with draft](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_with_draft.htm)).
    
    If a [BO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbusiness_object_glosry.htm "Glossary Entry") is draft-enabled, then all associations should be draft-enabled, so that the associations always lead to the target instance with the same state (draft or active). As soon as you draft-enable a BO by adding with draft, all BO-internal associations are automatically draft-enabled. To make this behavior explicit, the behavior prompts you to specify the compositions within a draft BO with with draft.
    

Example

The BDEF extension DEMO\_RAP\_EXTENSION\_1 extends the RAP behavior definition DEMO\_RAP\_EXTENSIBLE\_ROOT. It behavior-enables an extension node and defines the associations to its sibling, grandparent, and great-grandparent as ancestor associations. Lock, authorization, and ETag master are not specified explicitly, but derived implicitly via ancestor associations.

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

The executable example [Node Extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_assoc_ext_abexa.htm) explains the example above in detail.

Continue
![Example](exa.gif "Example") [RAP - Node Extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_assoc_ext_abexa.htm)