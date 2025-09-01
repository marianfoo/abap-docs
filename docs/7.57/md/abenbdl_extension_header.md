  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [CDS BDL - BDEF Extension](javascript:call_link\('abenbdl_extension.htm'\)) →  [CDS BDL - Base BDEF Extension](javascript:call_link\('abenbdl_extensibility_managed_unm.htm'\)) →  [CDS BDL - extension](javascript:call_link\('abenbdl_extension_syntax.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - BDEF Extension Header, ABENBDL_EXTENSION_HEADER, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - BDEF Extension Header

Syntax

...
*\[*[implementation in class ClassName unique](javascript:call_link\('abenbdl_in_class_unique_ext.htm'\));*\]*
*\[*[with privileged mode disabling ContextName](javascript:call_link\('abenbdl_privileged_mode_extension.htm'\));*\]*
...

Effect

The following elements are supported in a [BDEF extension header](javascript:call_link\('abenrap_bdef_ext_header_glosry.htm'\) "Glossary Entry"):

-   [implementation in class ClassName unique](javascript:call_link\('abenbdl_in_class_unique_ext.htm'\)): specifies an [extension](javascript:call_link\('abenrap_prefix_extension_glosry.htm'\) "Glossary Entry") [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") for the extension behavior implementation of a [BDEF extension](javascript:call_link\('abenrap_extension_glosry.htm'\) "Glossary Entry"). Optional and only required if the [BDEF extension](javascript:call_link\('abenrap_extension_glosry.htm'\) "Glossary Entry") defines implementation-relevant components.
-   [with privileged mode disabling AuthContext](javascript:call_link\('abenbdl_privileged_mode_extension.htm'\)): Enables [BDEF privileged mode](javascript:call_link\('abenrap_privileged_mode_glosry.htm'\) "Glossary Entry"). The effect is that the [authorization context](javascript:call_link\('abencds_auth_context_glosry.htm'\) "Glossary Entry") ContextName is automatically disabled when a [RAP BO consumer](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry") accesses the business object in question with a [privileged EML call](javascript:call_link\('abapeml_privileged.htm'\)).

Continue
[CDS BDL - implementation in class unique, Extension](javascript:call_link\('abenbdl_in_class_unique_ext.htm'\))
[CDS BDL - with privileged mode, Extension](javascript:call_link\('abenbdl_privileged_mode_extension.htm'\))