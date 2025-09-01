---
title: "RAP - using interface, Extension"
description: |
  Syntax Forms General Specification on Header Level ... using interface InterfaceBdef; Specification for Extension Nodes on Entity Level ... using CDSInterface; Variants: 1. ... using interface InterfaceBdef;(#!ABAP_VARIANT_1@1@) 2. ... using CDSInterface;(#!ABAP_VARIANT_2@2@) Effect RAP busin
version: "7.58"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_using_interface.htm"
abapFile: "abenbdl_using_interface.htm"
keywords: ["select", "update", "delete", "do", "if", "case", "try", "class", "data", "types", "abenbdl", "using", "interface"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl.htm) →  [RAP - BDEF Extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_extension.htm) →  [RAP - Base BDEF Extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_extensibility_managed_unm.htm) →  [RAP - extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_extension_syntax.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20using%20interface%2C%20Extension%2C%20ABENBDL_USING_INTERFACE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - using interface, Extension

Syntax Forms

General Specification on Header Level

... using interface InterfaceBdef;

Specification for Extension Nodes on Entity Level

... using CDSInterface;

Variants:

[1\. ... using interface InterfaceBdef;](#!ABAP_VARIANT_1@1@)
[2\. ... using CDSInterface;](#!ABAP_VARIANT_2@2@)

Effect

[RAP business objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_glosry.htm "Glossary Entry") can be extended via [RAP BO interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_interface_glosry.htm "Glossary Entry") using the optional addition using *\[*interface*\]*. A RAP BO interface is a layer on top of the base BO that is an interface for stable consumption and is usually [released as API](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreleased_api_glosry.htm "Glossary Entry"). In a [BDEF extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_extension_glosry.htm "Glossary Entry") with the addition using interface, only entities that are part of the RAP BO interface can be extended.

-   In general, the RAP BO interface is specified in the [BDEF extension header](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bdef_ext_header_glosry.htm "Glossary Entry"), directly after the keyword extension, using the syntax addition using interface. All entities that are part of the RAP BO interface can be extended then. Further details are provided under Variant 1.
-   In a node extensibility scenario, the extension node is not part of the RAP BO interface. An interface for the extension node can be specified using the keyword using in the [RAP extension entity behavior](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_ext_entity_behavior_glosry.htm "Glossary Entry") on entity level. Further details are provided under Variant 2.

Extensions can be created directly for managed or unmanaged RAP BOs. However, SAP recommends that you always extend a RAP BO via an interface and to always use the addition using interface. In case of [C0](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc0_contract_glosry.htm "Glossary Entry") [developer extensibility](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendev_extensibility_glosry.htm "Glossary Entry"), an interface is mandatory. In some other scenarios, using interface is mandatory and this is enforced by a syntax check error.

Further Information

-   Topic [RAP - Interface Behavior Definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_rap_bo_interface.htm).
-   Development guide for the ABAP RESTful Application Programming Model, topic [Business Object Interface](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/7caa146ddc4b4f24a58efd33f0f789b4?version=sap_cross_product_abap).
-   Topic [C0 Contract Rules for RAP Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc0_contract_rules_bdef.htm)

Example

The following example shows two BDEF extensions:

-   The first one directly extends the base BDEF, without interface.
-   The second one extends the base BDEF via a BDEF interface.

The base BDEF is the managed BDEF DEMO\_RAP\_EXTENSIBLE\_ROOT.

BDEF extension DEMO\_RAP\_EXT\_WO\_INT without an interface:

extension;
extend behavior for Root
{
event myEvent;
}

BDEF extension DEMO\_RAP\_EXT\_USING\_INTERF using an interface.

extension using interface DEMO\_RAP\_EXT\_USING\_INTERFACE
implementation in class bp\_demo\_rap\_ext\_using\_interf unique;
extend behavior for RootInterface {
action (authorization : instance) SetValue\_ext;
}
extend behavior for ChildInterface {
}
extend behavior for GrandChildInterface {
}
extend behavior for GreatGrandChildInterface {
}

Variant 1   

... using interface InterfaceBdef

Prerequisite

As a prerequisite for using interface, the [RAP interface behavior definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_interface_bdef_glosry.htm "Glossary Entry") InterfaceBdef must explicitly allow extensions. It must be declared as extensible in the [behavior definition header](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef_header_glosry.htm "Glossary Entry") as described in topic [RAP - Behavior Definition Header, Interface BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_bo_interface_header.htm).

Effect

Using the optional addition using interface, a [RAP business object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_glosry.htm "Glossary Entry") is extended via a [RAP BO interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_interface_glosry.htm "Glossary Entry"). A RAP BO interface is a layer on top of the base BO that is an interface for stable consumption and is usually [released as API](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreleased_api_glosry.htm "Glossary Entry"). In a [BDEF extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_extension_glosry.htm "Glossary Entry") with the addition using interface, only entities that are part of the RAP BO interface can be extended.

An extension using interface produces simultaneous extensions of the base RAP BO and of the interface. For example, an extension action is part of the [BDEF derived types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") of the base RAP BO and of the interface RAP BO.

The extension BDEF must reference [RAP BO entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_entity_glosry.htm "Glossary Entry"), [RAP BO fields](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_field_glosry.htm "Glossary Entry"), and other elements by their interface names, not by their base names (which may be different). The only exceptions are elements which are not reflected in the interface, such as determinations and validations.

In its implementation in the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"), the extension may use any released interface existing for the base RAP BO to perform [ABAP EML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_eml_glosry.htm "Glossary Entry") operations. It is an EML consumer like any other and there might be multiple released interfaces for a RAP BO. But it is most common that it uses the very same interface which it extends.

Hint

An extension using interface is created for a BDEF of type managed or unmanaged. It is not created directly for the interface. In [ABAP development tools for Eclipse](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadt_glosry.htm "Glossary Entry"), you select the base BDEF as basis for an extension.

Example

Base BDEF: RAP BO with four nodes.

managed implementation in class bp\_demo\_rap\_extensible\_root unique;
strict(2);
extensible
{ with determinations on modify;
  with determinations on save;
  with validations on save; }
with draft;
define behavior for DEMO\_RAP\_EXTENSIBLE\_ROOT alias Root
persistent table demo\_dbtab\_root
draft table demo\_dbtab\_exdrf
lock master
total etag Timestamp
authorization master ( instance )
extensible
etag master LastChangedAt
{
  create;
  update;
  delete;
  association \_child { create; with draft; }
  draft action ( authorization : none ) Edit;
  draft action Activate optimized;
  draft action Discard;
  draft action Resume;
  draft determine action Prepare extensible;
  field(readonly:update) KeyField;
  mapping for demo\_dbtab\_root
  {
    KeyField = key\_field;
    DataField = data\_field;
    CharField = char\_field;
    CharField2 = char\_field\_2;
    DecField = dec\_field;
    Timestamp = crea\_date\_time;
    LastChangedAt = lchg\_date\_time;
  }
}
define behavior for DEMO\_RAP\_EXTENSIBLE\_CHILD alias Child
persistent table demo\_dbtab\_child
draft table demo\_dbtab\_exchl
(lock, etag, authorization) dependent by \_parent
extensible
{
  update;
  delete;
  field ( readonly ) KeyField;
  association \_parent { with draft; }
  association \_grchld { create; with draft; }
  field(readonly:update) KeyFieldChild;
  mapping for demo\_dbtab\_child
  {
    KeyField = key\_field;
    KeyFieldChild = key\_field\_child;
    DataField = data\_field;
    CharField = char\_field;
  }
}
define behavior for DEMO\_RAP\_EXTENSIBLE\_GRCHLD alias GrandChild
persistent table demo\_dbtab\_grchl
draft table demo\_dbtab\_grch
(lock,authorization,etag) dependent by \_GrandParent
extensible
{
  update;
  delete;
  field ( readonly ) KeyField, KeyFieldChild;
  association \_GrandParent { with draft; }
  association \_parent { with draft; }
  association \_child { create; with draft; }
  field(readonly:update) KeyFieldGrchld;
  mapping for demo\_dbtab\_grchl
  {
    KeyField = key\_field;
    KeyFieldChild = key\_field\_child;
    KeyFieldGrchld = key\_field\_grchld;
    DataField = data\_field;
    CharField = char\_field;
  }
}
define behavior for DEMO\_RAP\_EXTENSIBLE\_GGCHLD alias GreatGrandChild
persistent table demo\_dbtab\_ggchl
draft table demo\_dbtab\_ggrch
(lock, authorization, etag) dependent by \_GreatGrandParent
extensible
{
  update;
  delete;
  field ( readonly ) KeyField, KeyFieldChild, KeyFieldGrChld;
  association \_GrandParent { with draft; }
  association \_parent { with draft; }
  association \_GreatGrandParent { with draft; }
  field(readonly:update) KeyFieldGgchld;
  mapping for demo\_dbtab\_ggchl
  {
    KeyField = key\_field;
    KeyFieldChild = key\_field\_child;
    KeyFieldGrchld = key\_field\_grchld;
    KeyFieldGgchld = key\_field\_ggchld;
    DataField = data\_field;
    CharField = char\_field;
  }
}

Interface BDEF: renames the RAP BO entities.

interface;
use draft;
extensible;
define behavior for DEMO\_RAP\_EXT\_USING\_INTERFACE alias RootInterface
{
  use create;
  use update;
  use delete;
  use action Edit;
  use action Activate;
  use action Discard;
  use action Resume;
  use action Prepare;
  use association \_child { create; with draft; }
}
define behavior for DEMO\_RAP\_EXT\_USING\_INT\_CHILD alias ChildInterface
{
  use update;
  use delete;
  use association \_parent { with draft; }
  use association \_grchld { create; with draft; }
}
define behavior for DEMO\_RAP\_EXT\_USING\_INT\_GRCHLD alias GrandChildInterface
{
  use update;
  use delete;
  use association \_GrandParent { with draft; }
  use association \_parent { with draft; }
  use association \_child { create; with draft; }
}
define behavior for DEMO\_RAP\_EXT\_USING\_INT\_GGCHLD alias GreatGrandChildInterface
{
  use update;
  use delete;
  use association \_GrandParent { with draft; }
  use association \_parent { with draft; }
  use association \_GreatGrandParent { with draft; }
}

Extension using interface: Extends the root node, which it refers to by its interface name.

extension using interface DEMO\_RAP\_EXT\_USING\_INTERFACE
implementation in class bp\_demo\_rap\_ext\_using\_interf unique;
extend behavior for RootInterface {
action (authorization : instance) SetValue\_ext;
}
extend behavior for ChildInterface {
}
extend behavior for GrandChildInterface {
}
extend behavior for GreatGrandChildInterface {
}

Executable Example

The executable example [RAP BO Extension Using Interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_using_interface_abexa.htm) explains the example above in detail.

Variant 2   

... using CDSInterface

Effect

In a node extensibility scenario, an interface for the extension node can be specified using the keyword using in the [RAP extension entity behavior](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_ext_entity_behavior_glosry.htm "Glossary Entry") on entity level. CDSInterface is the name of a [CDS transactional interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_trans_interface_glosry.htm "Glossary Entry") that projects the extension node.

Example

The following BDEF extension DEMO\_RAP\_EXTENSION\_1 adds an extension node to an existing RAP business object. It uses the RAP BO interface DEMO\_RAP\_EXT\_USING\_INTERFACE and the [CDS transactional interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_trans_interface_glosry.htm "Glossary Entry") DEMO\_RAP\_EXT\_USING\_INT\_EXT.

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
![Example](exa.gif "Example") [RAP - RAP BO Extension Using Interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_using_interface_abexa.htm)