  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [ABAP CDS - Managed and Unmanaged Behavior Definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) →  [CDS BDL - CDS Behavior Definition Header](javascript:call_link\('abenbdl_bdef_header.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - extensible, ABENBDL_EXTENSIBLE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%
0ASuggestion for improvement:)

CDS BDL - extensible

Syntax

...
extensible *\[*{
  *\[*with validations on save;*\]*
  *\[*with determinations on save;*\]*
  *\[*with determinations on modify;*\]*
  *\[*with additional save;*\]*
}*\]*
...

Effect

The addition extensible can be used to allow [BDEF extensions](javascript:call_link\('abenbdl_extension.htm'\)). If it is not specified, then extensions are not allowed. As a prerequisite, [BDEF strict mode](javascript:call_link\('abenbdl_strict.htm'\)) must be switched on.

The keyword extensible must be specified in two places:

-   It must be declared in the [BDEF header](javascript:call_link\('abencds_bdef_header_glosry.htm'\) "Glossary Entry")
-   It must be declared in the [entity behavior characteristics](javascript:call_link\('abencds_entity_properties_glosry.htm'\) "Glossary Entry") for each individual entity that allows BDEF extensions.

In the header declaration, the following optional additions are available:

-   with validations on save
-   with determinations on save
-   with determinations on modify
-   with additional save

These additions explicitly allow the kinds of [validations](javascript:call_link\('abenbdl_validations.htm'\)), [determinations](javascript:call_link\('abenbdl_determinations.htm'\)), or a [RAP additional save](javascript:call_link\('abenrap_add_save_glosry.htm'\) "Glossary Entry") in a [RAP entity behavior extension](javascript:call_link\('abenrap_behavior_extension_glosry.htm'\) "Glossary Entry"). If not declared explicitly, the respective type of determination, validation, and the additional save must not be defined in an extension to an existing RAP BO entity.

Note: This declaration refers only to extensions of existing RAP BO entities. In extension nodes, validations, determinations, and an additional save are always possible and no explicit permission is required.

Currently, the keyword extensible is available for [managed RAP BOs](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry"), for [projection BDEFs](javascript:call_link\('abenrap_projection_bo_glosry.htm'\) "Glossary Entry"), and for [interface BDEFs](javascript:call_link\('abencds_interface_bdef_glosry.htm'\) "Glossary Entry"). In projection and interface BDEFs, only the keyword extensible is possible, without any further additions. In interface BDEFs, extensible can be specified only in the BDEF header and strict mode is not available. See topics [CDS BDL - CDS Behavior Definition Header, Projection BDEF](javascript:call_link\('abenbdl_bdef_projection_header.htm'\)) and [CDS BDL - CDS Behavior Definition Header, Interface BDEF](javascript:call_link\('abenbdl_bo_interface_header.htm'\)).

Further Information

A complete overview of extension points and extensibility enabling for behavior definitions is described in section [Extensibility Enabling](javascript:call_link\('abenbdl_extensibility_enabling.htm'\)).

Example

The CDS behavior definition for DEMO\_RAP\_EXTENSIBLE enables BDEF extensions by specifying multiple extension points.

managed implementation in class bp\_demo\_rap\_extensible unique;
strict(2);
with draft;
extensible
{
  with validations on save;
  with determinations on save;
  with determinations on modify;
  with additional save;
}
define behavior for DEMO\_RAP\_EXTENSIBLE
persistent table demo\_dbtab\_root
draft table demo\_dbtab\_draf1
lock master
total etag Timestamp
authorization master ( global )
extensible
{
  create;
  update;
  delete;
  draft action Edit;
  draft action Activate;
  draft action Discard;
  draft action Resume;
  draft determine action Prepare extensible;
  determination setID on save { create; }
  determine action trigger\_all extensible
  {
    determination ( always ) setID;
  }
  mapping for demo\_dbtab\_root corresponding extensible
  {
    KeyField = key\_field;
    DataField = data\_field;
    Timestamp = crea\_date\_time;
  }
}

The extension DEMO\_RAP\_EXTEND1 extends the CDS behavior definition DEMO\_RAP\_EXTENSIBLE.

extension implementation in class bp\_demo\_rap\_extend1 unique;
extend behavior for DEMO\_RAP\_EXTENSIBLE {
determination MyDet1 on save { create; update; }
extend determine action trigger\_all {determination MyDet1; }
}