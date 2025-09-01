  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl.htm) →  [CDS BDL - BDEF Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extension.htm) →  [CDS BDL - Base BDEF Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extensibility_managed_unm.htm) →  [CDS BDL - extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extension_syntax.htm) →  [CDS BDL - Entity Behavior Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extend_beh.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - Implementation Grouping, Extension, ABENBDL_GROUP_EXTENSION, 757%0D%0A%0D%0
AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - Implementation Grouping, Extension

Syntax

...
group Group1 [implementation in class Class1 unique](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_in_class_unique_ext.htm)
{
  // implementation-relevant content
}
group Group2 [implementation in class Class2 unique](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_in_class_unique_ext.htm)
{
  //implementation-relevant content
}
*\[*group Group3 ...*\]*
...

Effect

Grouping divides the implementation-relevant parts of a [business object's](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_glosry.htm "Glossary Entry") business logic into multiple groups for behavior implementation. Each group is assigned to a separate [implementation class](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_in_class_unique_ext.htm). This works for BDEF extensions in the same way as for RAP BOs, see topic [CDS BDL - Implementation Grouping](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_grouping.htm).

The original BDEF may divide the implementation into multiple groups, and the extension can add further groups. An individual group from the original BDEF cannot be extended.

Example

The BDEF extension DEMO\_RAP\_EXTENSION\_GROUP extends the CDS behavior definition DEMO\_RAP\_BASE\_GROUP. It divides the implementation-relevant content into two groups.

Original BDEF: explicitly allows extensions

managed implementation in class bp\_demo\_rap\_base\_group unique;
strict(2);
extensible
{with determinations on modify;
with determinations on save;
with validations on save; }
define behavior for DEMO\_RAP\_BASE\_GROUP
persistent table demo\_dbtab\_root
lock master
authorization master ( instance )
extensible
{
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

Extension BDEF: defines two groups with separate ABPs.

extension implementation in class bp\_demo\_rap\_extension\_group unique;
extend behavior for DEMO\_RAP\_BASE\_GROUP
{
  group demo\_ext\_a implementation in class cl\_demo\_ext\_a unique
  {
    validation DemoValidation on save { field data\_field; }
    action DemoAction result \[1\] $self;
    action ( features : instance ) DemoAction1 result \[1\] $self;
  }
  group demo\_ext\_b implementation in class cl\_demo\_ext\_b unique
  {
    validation DemoValidation2 on save { field dec\_field; }
    action DemoAction2 result \[1\] $self;
    action ( features : instance ) DemoAction1b result \[1\] $self;
  }
}