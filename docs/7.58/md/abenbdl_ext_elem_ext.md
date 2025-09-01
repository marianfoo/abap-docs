  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [RAP - BDEF Extension](javascript:call_link\('abenbdl_extension.htm'\)) →  [RAP - Base BDEF Extension](javascript:call_link\('abenbdl_extensibility_managed_unm.htm'\)) →  [RAP - extension](javascript:call_link\('abenbdl_extension_syntax.htm'\)) →  [RAP - Entity Behavior Extension](javascript:call_link\('abenbdl_extend_beh.htm'\)) →  [RAP - extension\_body](javascript:call_link\('abenbdl_entity_beh_extension.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Extending%20Elements%2C%20ABENBDL_EXT_ELEM_EXT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - Extending Elements

Syntax

...
    [extend determine action](javascript:call_link\('abenbdl_determine_action_ext.htm'\))
  *|* [extend draft determine action Prepare](javascript:call_link\('abenbdl_draft_action_ext.htm'\))
  *|* [extend mapping for PartnerType](javascript:call_link\('abenbdl_type_mapping_ext.htm'\))
  ...

Effect

Extends existing components of an existing RAP BO entity in the [RAP BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry"). As a prerequisite, the respective components must be marked as extensible in the extended BDEF as described in topic [Extensibility Enabling for Managed and Unmanaged BDEFs](javascript:call_link\('abenbdl_extensibility_enabling_m_u.htm'\)). If explicitly enabled for extensibility, the following components can be extended:

-   [extend determine action](javascript:call_link\('abenbdl_determine_action_ext.htm'\)): [Extension](javascript:call_link\('abenrap_prefix_extension_glosry.htm'\) "Glossary Entry") [determinations](javascript:call_link\('abenrap_determination_glosry.htm'\) "Glossary Entry") and extension [validations](javascript:call_link\('abenrap_validation_glosry.htm'\) "Glossary Entry") can be added to an existing [determine action](javascript:call_link\('abenrap_bo_det_action_glosry.htm'\) "Glossary Entry").
-   [extend draft determine action Prepare](javascript:call_link\('abenbdl_draft_action_ext.htm'\)): Extension determinations and extension validations can be added to an existing draft determine action.
-   [extend mapping for PartnerType](javascript:call_link\('abenbdl_type_mapping_ext.htm'\)): An existing [RAP type mapping](javascript:call_link\('abenrap_type_mapping_glosry.htm'\) "Glossary Entry") can be extended with extension fields.

Continue
[RAP - extend determine action](javascript:call_link\('abenbdl_determine_action_ext.htm'\))
[RAP - extend draft determine action Prepare](javascript:call_link\('abenbdl_draft_action_ext.htm'\))
[RAP - extend mapping](javascript:call_link\('abenbdl_type_mapping_ext.htm'\))