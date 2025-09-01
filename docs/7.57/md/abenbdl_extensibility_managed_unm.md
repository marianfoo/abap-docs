  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [CDS BDL - BDEF Extension](javascript:call_link\('abenbdl_extension.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - Base BDEF Extension, ABENBDL_EXTENSIBILITY_MANAGED_UNM, 757%0D%0A%0D%0AErro
r:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - Base BDEF Extension

A [base BDEF extension](javascript:call_link\('abenrap_base_bdef_ext_glosry.htm'\) "Glossary Entry") is a repository object that extends a CDS behavior definition of type managed or unmanaged using the statement extension.

As a prerequisite, the respective BDEF must explicitly allow extensions as described in topic [Extensibility Enabling for RAP BOs](javascript:call_link\('abenbdl_extensibility_enabling_m_u.htm'\)).

The following image shows the possible components of a BDEF extension:

![Figure](bdef_extension_intro.jpg)

-   The [BDEF extension header](javascript:call_link\('abenrap_bdef_ext_header_glosry.htm'\) "Glossary Entry") is a mandatory component that starts with extension.
-   An [entity behavior extension](javascript:call_link\('abenrap_behavior_extension_glosry.htm'\) "Glossary Entry") is an optional component. It extends the behavior of an existing RAP BO entity. It starts with extend behavior for.
-   An [extension entity behavior](javascript:call_link\('abenrap_ext_entity_behavior_glosry.htm'\) "Glossary Entry") is an optional component that defines the behavior for an extension node. It starts with define behavior for.
-   An [authorization context](javascript:call_link\('abencds_auth_context_glosry.htm'\) "Glossary Entry") can be added or a [own authorization context](javascript:call_link\('abencds_own_ac_glosry.htm'\) "Glossary Entry") may be extended.

Continue
[CDS BDL - extension](javascript:call_link\('abenbdl_extension_syntax.htm'\))