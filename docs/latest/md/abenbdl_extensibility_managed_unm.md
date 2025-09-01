  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [RAP - BDEF Extension](javascript:call_link\('abenbdl_extension.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Base%20BDEF%20Extension%2C%20ABENBDL_EXTENSIBILITY_MANAGED_UNM%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - Base BDEF Extension

A [base BDEF extension](javascript:call_link\('abenrap_base_bdef_ext_glosry.htm'\) "Glossary Entry") is a repository object that extends a RAP behavior definition of type managed or unmanaged using the statement extension.

As a prerequisite, the respective BDEF must explicitly allow extensions as described in topic [Extensibility Enabling for RAP BOs](javascript:call_link\('abenbdl_extensibility_enabling_m_u.htm'\)).

The following image shows the possible components of a BDEF extension:

![Figure](bdef_extension_intro.jpg)

-   The [BDEF extension header](javascript:call_link\('abenrap_bdef_ext_header_glosry.htm'\) "Glossary Entry") is a mandatory component that starts with extension.
-   An [entity behavior extension](javascript:call_link\('abenrap_behavior_extension_glosry.htm'\) "Glossary Entry") is an optional component. It extends the behavior of an existing RAP BO entity. It starts with extend behavior for.
-   An [extension entity behavior](javascript:call_link\('abenrap_ext_entity_behavior_glosry.htm'\) "Glossary Entry") is an optional component that defines the behavior for an extension node. It starts with define behavior for.
-   An [authorization context for disable](javascript:call_link\('abencds_auth_context_glosry.htm'\) "Glossary Entry") can be added or a [full authorization context](javascript:call_link\('abencds_own_ac_glosry.htm'\) "Glossary Entry") may be extended.

Continue
[RAP - extension](javascript:call_link\('abenbdl_extension_syntax.htm'\))