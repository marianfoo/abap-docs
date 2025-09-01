  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [RAP - BDEF Extension](javascript:call_link\('abenbdl_extension.htm'\)) →  [RAP - Base BDEF Extension](javascript:call_link\('abenbdl_extensibility_managed_unm.htm'\)) →  [RAP - extension](javascript:call_link\('abenbdl_extension_syntax.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20BDEF%20Extension%20Header%2C%20ABENBDL_EXTENSION_HEADER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - BDEF Extension Header

Syntax

...
*\[*[implementation in class ClassName unique](javascript:call_link\('abenbdl_in_class_unique_ext.htm'\));*\]*
*\[*[with privileged mode disabling ContextName](javascript:call_link\('abenbdl_privileged_mode_extension.htm'\));*\]*
...

Effect

The following elements are supported in a [BDEF extension header](javascript:call_link\('abenrap_bdef_ext_header_glosry.htm'\) "Glossary Entry"):

-   [implementation in class ClassName unique](javascript:call_link\('abenbdl_in_class_unique_ext.htm'\)): specifies an [extension](javascript:call_link\('abenrap_prefix_extension_glosry.htm'\) "Glossary Entry") [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") for the extension behavior implementation of a [BDEF extension](javascript:call_link\('abenrap_extension_glosry.htm'\) "Glossary Entry"). Optional and only required if the [BDEF extension](javascript:call_link\('abenrap_extension_glosry.htm'\) "Glossary Entry") defines implementation-relevant components.
-   [with privileged mode disabling AuthContext](javascript:call_link\('abenbdl_privileged_mode_extension.htm'\)): Enables [BDEF privileged mode](javascript:call_link\('abenrap_privileged_mode_glosry.htm'\) "Glossary Entry"). The effect is that the [authorization context for disable](javascript:call_link\('abencds_auth_context_glosry.htm'\) "Glossary Entry")ContextName is automatically disabled when a [RAP BO consumer](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry") accesses the business object in question with a [privileged EML call](javascript:call_link\('abapeml_privileged.htm'\)).

Continue
[RAP - implementation in class unique, Extension](javascript:call_link\('abenbdl_in_class_unique_ext.htm'\))
[RAP - with privileged mode, Extension](javascript:call_link\('abenbdl_privileged_mode_extension.htm'\))