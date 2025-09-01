  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [RAP - Managed and Unmanaged Behavior Definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) →  [RAP - Behavior Definition Header](javascript:call_link\('abenbdl_bdef_header.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20extensible%2C%20ABENBDL_EXTENSIBLE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - extensible

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

Availability

Currently, the keyword extensible is available for

-   [managed RAP BOs](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry")
-   [projection BDEFs](javascript:call_link\('abenrap_projection_bo_glosry.htm'\) "Glossary Entry")
-   [interface BDEFs](javascript:call_link\('abencds_interface_bdef_glosry.htm'\) "Glossary Entry")
-   [abstract BDEFs](javascript:call_link\('abencds_abstract_bdef_glosry.htm'\) "Glossary Entry")

In projection BDEFs, interface BDEFs, and abstract BDEFs, only the keyword extensible is possible, without any further additions.

In interface BDEFs, extensible can be specified only in the BDEF header and strict mode is not available.

Further Information

A complete overview of extension points and extensibility enabling for behavior definitions is described in section [Extensibility Enabling](javascript:call_link\('abenbdl_extensibility_enabling.htm'\)).

Example

The RAP behavior definition for DEMO\_RAP\_EXTENSIBLE enables BDEF extensions by specifying multiple extension points.

Note: This example is intentionally kept short and simple and serves demonstration purposes only. For example, some [RAP handler methods](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry") of the [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") are not implemented here.

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
  draft action Activate optimized;
  draft action Discard;
  draft action Resume;
  draft determine action Prepare extensible;
  field(readonly:update) KeyField;
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

The extension DEMO\_RAP\_EXTEND1 extends the RAP behavior definition DEMO\_RAP\_EXTENSIBLE.

extension implementation in class bp\_demo\_rap\_extend1 unique;
extend behavior for DEMO\_RAP\_EXTENSIBLE {
determination MyDet1 on save { create; update; }
extend determine action trigger\_all {determination MyDet1; }
}