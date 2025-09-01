---
title: "RAP - Implementation Grouping, Extension"
description: |
  Syntax ... group Group1 implementation in class Class1 unique(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_in_class_unique_ext.htm)  // implementation-relevant content  group Group2 implementation in class Class2 unique(https://help.sap.com/doc/abapdocu_latest_index_
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_group_extension.htm"
abapFile: "abenbdl_group_extension.htm"
keywords: ["update", "delete", "do", "if", "try", "class", "data", "abenbdl", "group", "extension"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl.htm) →  [RAP - BDEF Extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extension.htm) →  [RAP - Base BDEF Extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extensibility_managed_unm.htm) →  [RAP - extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extension_syntax.htm) →  [RAP - Entity Behavior Extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extend_beh.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Implementation%20Grouping%2C%20Extension%2C%20ABENBDL_GROUP_EXTENSION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

RAP - Implementation Grouping, Extension

Syntax

...
group Group1 [implementation in class Class1 unique](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_in_class_unique_ext.htm)
{
  // implementation-relevant content
}
group Group2 [implementation in class Class2 unique](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_in_class_unique_ext.htm)
{
  //implementation-relevant content
}
*\[*group Group3 ...*\]*
...

Effect

Grouping divides the implementation-relevant parts of a [business object's](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_glosry.htm "Glossary Entry") business logic into multiple groups for behavior implementation. Each group is assigned to a separate [implementation class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_in_class_unique_ext.htm). This works for BDEF extensions in the same way as for RAP BOs, see topic [RAP - Implementation Grouping](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_grouping.htm).

The original BDEF may divide the implementation into multiple groups, and the extension can add further groups. An individual group from the original BDEF cannot be extended.

Example

The BDEF extension DEMO\_RAP\_EXTENSION\_GROUP extends the RAP behavior definition DEMO\_RAP\_BASE\_GROUP. It divides the implementation-relevant content into two groups.

Original BDEF: explicitly allows extensions

managed implementation in class bp\_demo\_rap\_base\_group unique;
strict ( 2 );
extensible
{ with determinations on modify;
  with determinations on save;
  with validations on save; }
define behavior for DEMO\_RAP\_BASE\_GROUP
persistent table demo\_dbtab\_root
lock master
authorization master ( instance )
extensible
{
  field ( readonly : update ) key\_field;
  group demo\_a implementation in class cl\_group\_demo\_a unique
  {
    create;
    update;
    delete;
  }
  group demo\_b implementation in class cl\_group\_demo\_b unique
  {
    field ( features : instance ) char\_field;
  }
  group demo\_c implementation in class cl\_group\_demo\_c unique
  {
    determination DemoDet on save { create; }
  }
}

BDEF interface:

interface;
extensible;
define behavior for DEMO\_RAP\_I\_GROUP alias Root
{
  use create;
  use update;
  use delete;
}

Extension BDEF: defines two groups with separate ABPs.

extension using interface DEMO\_RAP\_I\_GROUP
  implementation in class bp\_demo\_rap\_extension\_group unique;
extend behavior for Root
{
  group demo\_ext\_a implementation in class cl\_demo\_ext\_a unique
  {
    validation DemoValidation on save { field data\_field; }
    action (authorization:none) DemoAction result \[1\] $self;
    action ( features : instance, authorization:none )
    DemoAction1 result \[1\] $self;
  }
  group demo\_ext\_b implementation in class cl\_demo\_ext\_b unique
  {
    validation DemoValidation2 on save { field dec\_field; }
    action (authorization:none) DemoAction2 result \[1\] $self;
    action ( features : instance, authorization:none )
    DemoAction1b result \[1\] $self;
  }
}