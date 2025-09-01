  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [RAP - BDEF Extension](javascript:call_link\('abenbdl_extension.htm'\)) →  [RAP - Base BDEF Extension](javascript:call_link\('abenbdl_extensibility_managed_unm.htm'\)) →  [RAP - extension](javascript:call_link\('abenbdl_extension_syntax.htm'\)) →  [RAP - Entity Behavior Extension](javascript:call_link\('abenbdl_extend_beh.htm'\)) →  [RAP - extension\_body](javascript:call_link\('abenbdl_entity_beh_extension.htm'\)) →  [RAP - Extending Elements](javascript:call_link\('abenbdl_ext_elem_ext.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20extend%20draft%20determine%20action%20Prepare%2C%20ABENBDL_DRAFT_ACTION_EXT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20im
provement:)

RAP - extend draft determine action Prepare

Syntax

extend draft determine action Prepare
             {
             *\[* [determination](javascript:call_link\('abenbdl_determinations.htm'\)) *\[*(always)*\]* DetName;*\]*
             *\[* [validation](javascript:call_link\('abenbdl_validations.htm'\)) *\[*(always)*\]* ValName;*\]*
             *\[* [determination](javascript:call_link\('abenbdl_determinations.htm'\)) *\[*(always)*\]* Child~ChildDetermination;*\]*
             *\[* [validation](javascript:call_link\('abenbdl_validations.htm'\)) *\[*(always)*\]* Child~ChildValidation;*\]*
             ...
              }

Prerequisites

-   The respective draft determine action must be enabled for extensions in the extended BDEF as described in topic [RAP BDL - Extensibility Enabling for Managed and Unmanaged BDEFs](javascript:call_link\('abenbdl_extensibility_enabling_m_u.htm'\)).

Effect

Extends an existing [draft determine action Prepare](javascript:call_link\('abenrap_bo_draft_action_glosry.htm'\) "Glossary Entry") with extension [determinations](javascript:call_link\('abenrap_determination_glosry.htm'\) "Glossary Entry") and extension [validations](javascript:call_link\('abenrap_validation_glosry.htm'\) "Glossary Entry"). At least one extension determination or extension validation must be specified within curly brackets. The optional addition [(always)](javascript:call_link\('abenbdl_determine_action.htm'\)) can be used. Determinations and validations of child entities can be included.

Hint

An [internal](javascript:call_link\('abenbdl_internal.htm'\)) draft determine action Prepare cannot be extended.

Related Information

-   [RAP BDL - draft action](javascript:call_link\('abenbdl_draft_action.htm'\)).

Example

The following source code shows BDEF extension DEMO\_RAP\_PREPARE\_EXT. It extends the base BDEF DEMO\_RAP\_EXTENSIBILITY\_DET\_ACT by adding one further determination myDet to the draft determine action Prepare.

The base BDEF is draft-enabled and explicitly allows extensions to the draft determine action Prepare:

managed implementation in class bp\_demo\_rap\_extensibility\_det\_ unique;
strict(2);
extensible
{ with determinations on modify;
  with determinations on save;
  with validations on save; }
with draft;
define behavior for DEMO\_RAP\_EXTENSIBILITY\_DET\_ACT alias Root
persistent table demo\_sales\_order
draft table demo\_sales\_draft
lock master
total etag LastChangedAt
authorization master ( instance )
extensible
{
  create;
  update;
  delete;
  association \_child { create; with draft; }
  field(readonly:update) SoKey;
  draft action Activate optimized;
  draft action Discard;
  draft action Edit;
  draft action Resume;
  draft determine action Prepare extensible
  { determination (always) setID; }
  determination setID on save { create; }
determine action trigger\_all extensible
  {
    determination ( always ) setID;
    determination ( always ) Child ~ TotalPrice;
  }
  mapping for DEMO\_SALES\_ORDER
  {
    SoKey = so\_key;
    SalesOrderId = id;
    BuyerId = buyer\_id;
    Status = lifecycle\_status;
    ShipToId = ship\_to\_id;
    QuantitySum = quantity\_sum;
    UomSum = uom\_sum;
    AmountSum = amount\_sum;
    CurrencySum = currency\_sum;
    CompanyCode = company\_code;
  }
}
define behavior for DEMO\_RAP\_EXT\_DET\_ACT\_CHILD alias Child
persistent table demo\_sales\_so\_i
draft table sales\_i\_draft
lock dependent by \_parent
authorization dependent by \_parent
{
  update;
  delete;
  field ( readonly : update ) ParentKey, SoItemKey;
  determination TotalPrice on save { create; }
  association \_parent { with draft; }
  mapping for DEMO\_SALES\_SO\_I corresponding
  {
    SoItemKey = so\_item\_key;
    ParentKey = parent\_key;
    GrossAmount = gross\_amount;
  }
}

The BDEF extension adds one further determination to the draft determine action Prepare:

extension using interface DEMO\_RAP\_EXT\_DET\_ACT\_INT
implementation in class bp\_demo\_rap\_prepare\_ext unique;
extend behavior for Root
{
  determination myDet on save { create; }
  extend draft determine action Prepare
  {
    determination ( always ) myDet;
  }
}