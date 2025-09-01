  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [CDS BDL - BDEF Extension](javascript:call_link\('abenbdl_extension.htm'\)) →  [CDS BDL - Base BDEF Extension](javascript:call_link\('abenbdl_extensibility_managed_unm.htm'\)) →  [CDS BDL - extension](javascript:call_link\('abenbdl_extension_syntax.htm'\)) →  [CDS BDL - Entity Behavior Extension](javascript:call_link\('abenbdl_extend_beh.htm'\)) →  [CDS BDL - extension\_body](javascript:call_link\('abenbdl_entity_beh_extension.htm'\)) →  [CDS BDL - Extending Elements](javascript:call_link\('abenbdl_ext_elem_ext.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - extend determine action, ABENBDL_DETERMINE_ACTION_EXT, 757%0D%0A%0D%0AError
:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - extend determine action

Syntax

extend determine action DetermineActionName
          {
           [determination](javascript:call_link\('abenbdl_determinations.htm'\)) *\[*(always)*\]* MyDetermination1;
           [determination](javascript:call_link\('abenbdl_determinations.htm'\)) *\[*(always)*\]* MyDetermination2;
           [validation](javascript:call_link\('abenbdl_validations.htm'\)) *\[*(always)*\]* MyValidation1;
           [validation](javascript:call_link\('abenbdl_validations.htm'\)) *\[*(always)*\]* MyValidation2;
           [determination](javascript:call_link\('abenbdl_determinations.htm'\)) *\[*(always)*\]* Child~ChildDetermination;
           [validation](javascript:call_link\('abenbdl_validations.htm'\)) *\[*(always)*\]* Child~ChildValidation;
           ...
          }

Prerequisites

-   The respective determine action must be enabled for extensions in the original BDEF as described in topic [CDS BDL - Extensibility Enabling for Managed and Unmanaged BDEFs](javascript:call_link\('abenbdl_extensibility_enabling_m_u.htm'\)).
-   The extended BDEF must be [draft-enabled](javascript:call_link\('abenrap_draft_handling_glosry.htm'\) "Glossary Entry"). Determine actions can currently only be extended in draft-enabled RAP BOs.

Effect

Extends an existing [determine action](javascript:call_link\('abenrap_bo_det_action_glosry.htm'\) "Glossary Entry") DetermineActionName with extension [determinations](javascript:call_link\('abenrap_determination_glosry.htm'\) "Glossary Entry") and extension [validations](javascript:call_link\('abenrap_validation_glosry.htm'\) "Glossary Entry"). At least one extension determination or extension validation must be specified within curly brackets.

If the optional addition always is used, then all determinations and validations that are part of the determine action are executed regardless of their trigger conditions. After a determination with the flag always has been executed, it can be triggered again by other determinations belonging to the same determine action.

Determinations and validations of [child entities](javascript:call_link\('abenchild_entity_glosry.htm'\) "Glossary Entry") can be included using the syntax child~childDetermination or child~childValidation, as long as these validations and determinations do not include the trigger operation delete.

Execution order: Determinations are executed first, validations afterwards. The execution order among determinations or validations themselves is defined by the [RAP framework](javascript:call_link\('abenrap_framework_glosry.htm'\) "Glossary Entry") and is independent of the specified order within the determine action.

[RAP authorization control](javascript:call_link\('abenrap_auth_control_glosry.htm'\) "Glossary Entry") from the original BDEF is reused, if specified.

Hint

-   [Internal](javascript:call_link\('abenbdl_internal.htm'\)) determine actions cannot be extended.

Related Information

-   [CDS BDL - determine action](javascript:call_link\('abenbdl_determine_action.htm'\)).

Example

The following source code shows BDEF extension DEMO\_RAP\_DET\_ACT\_EXT. It extends BDEF DEMO\_RAP\_EXTENSIBILITY\_DET\_ACT by adding one further determination setStatustoNew to the determine action trigger\_all.

The original BDEF explicitly allows extensions to the determine action trigger\_all:

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
  draft action Activate;
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
  field ( readonly : update ) ParentKey;
  determination TotalPrice on save { create; }
  association \_parent { with draft; }
  mapping for DEMO\_SALES\_SO\_I corresponding
  {
    SoItemKey = so\_item\_key;
    ParentKey = parent\_key;
    GrossAmount = gross\_amount;
  }
}

The extension adds one further determination setStatustoNew to the determine action trigger\_all:

extension implementation in class bp\_demo\_rap\_det\_act\_ext unique;
extend behavior for Root
{
  determination setStatustoNew on save { create; }
  extend determine action trigger\_all
  {
    determination (always) setStatustoNew;
  }
}

The ABAP program DEMO\_CDS\_EXT\_DET\_ACT uses [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") to access to [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry"). It executes the determine action trigger\_all.

The RAP framework executes the implementations in the original and extension ABAP behavior pools in the following order:

-   get\_instance\_authorizations: check whether the operation on the root node is authorized.
-   setID, a determination from the root node of the original BDEF.
-   setStatustoNew, a determination from the root node extension.
-   get\_instance\_authorizations: check whether the operation on the child node is authorized.
-   TotalPrice, a determination from the child node of the original BDEF.

Executable Example

The example above is explained in detail in the executable example [CDS BDL - extend determine action](javascript:call_link\('abenbdl_det_action_ext_abexa.htm'\)).

Continue
![Example](exa.gif "Example") [CDS BDL - Extend Determine Action](javascript:call_link\('abenbdl_det_action_ext_abexa.htm'\))