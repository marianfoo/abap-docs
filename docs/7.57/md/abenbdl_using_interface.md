---
title: "CDS BDL - using interface, Extension"
description: |
  Syntax ... using interface InterfaceBdef; Prerequisite As a prerequisite for using interface, the CDS interface behavior definition(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_interface_bdef_glosry.htm 'Glossary Entry') InterfaceBdef must explicitly allow extensions. It must
version: "7.57"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_using_interface.htm"
abapFile: "abenbdl_using_interface.htm"
keywords: ["select", "update", "delete", "do", "if", "try", "class", "data", "types", "abenbdl", "using", "interface"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl.htm) →  [CDS BDL - BDEF Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extension.htm) →  [CDS BDL - Base BDEF Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extensibility_managed_unm.htm) →  [CDS BDL - extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extension_syntax.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - using interface, Extension, ABENBDL_USING_INTERFACE, 757%0D%0A%0D%0AError:%
0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - using interface, Extension

Syntax

... using interface InterfaceBdef;

Prerequisite

As a prerequisite for using interface, the [CDS interface behavior definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_interface_bdef_glosry.htm "Glossary Entry") InterfaceBdef must explicitly allow extensions. It must be declared as extensible in the [behavior definition header](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdef_header_glosry.htm "Glossary Entry") as described in topic [CDS BDL - CDS Behavior Definition Header, Interface BDEF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_bo_interface_header.htm).

Effect

Using the optional addition using interface, an original [RAP business object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_glosry.htm "Glossary Entry") is extended via a [RAP BO interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_interface_glosry.htm "Glossary Entry"). A RAP BO interface is a layer on top of the original BO that is as interface for stable consumption and is usually [released as API](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreleased_api_glosry.htm "Glossary Entry"). In a [BDEF extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_extension_glosry.htm "Glossary Entry") with the addition using interface, only entities that are part of the RAP BO interface can be extended.

An extension using interface produces simultaneous extensions of the original RAP BO and of the interface. For example, an extension action is part of the [BDEF derived types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") of the original RAP BO and of the interface RAP BO.

The extension BDEF must reference [RAP BO entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_entity_glosry.htm "Glossary Entry"), [RAP BO fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_field_glosry.htm "Glossary Entry"), and other elements by their interface names, not by their original names (which may be different). The only exceptions are elements which are not reflected in the interface, such as determinations and validations.

In its implementation in the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"), the extension may use any released interface existing for the original RAP BO to perform [ABAP EML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_eml_glosry.htm "Glossary Entry") operations. It is an EML consumer like any other and there might be multiple released interfaces for a RAP BO. But it is most common that it uses the very same interface which it extends.

Hint

An extension using interface is created for a BDEF of type managed or unmanaged. It is not created directly for the interface. In [ABAP Development Tools](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadt_glosry.htm "Glossary Entry"), you select the original BDEF as basis for an extension.

Caution

SAP recommends that you always extend a RAP BO via an interface and to always use the addition using interface. In some scenarios, using interface is mandatory and this is enforced by a syntax check error.

Further Information

-   [CDS Interface Behavior Definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_rap_bo_interface.htm).
-   Development guide for the ABAP RESTful Application Programming Model, topic Business Object Interface.

Example

Original BDEF: RAP BO with four nodes.

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
  draft action Activate;
  draft action Discard;
  draft action Resume;
  draft determine action Prepare extensible;
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
action SetValue\_ext;
}
extend behavior for ChildInterface {
}
extend behavior for GrandChildInterface {
}
extend behavior for GreatGrandChildInterface {
}

Executable Example

The executable example [RAP BO Extension Using Interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_using_interface_abexa.htm) explains the example above in detail.

Continue
![Example](exa.gif "Example") [CDS BDL - RAP BO Extension Using Interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_using_interface_abexa.htm)