  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [CDS BDL - BDEF Extension](javascript:call_link\('abenbdl_extension.htm'\)) →  [CDS BDL - Base BDEF Extension](javascript:call_link\('abenbdl_extensibility_managed_unm.htm'\)) →  [CDS BDL - extension](javascript:call_link\('abenbdl_extension_syntax.htm'\)) →  [CDS BDL - BDEF Extension Header](javascript:call_link\('abenbdl_extension_header.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - with privileged mode, Extension, ABENBDL_PRIVILEGED_MODE_EXTENSION, 757%0D%
0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - with privileged mode, Extension

Syntax

...
with privileged mode disabling ContextName;
...

Effect

Enables [BDEF privileged mode](javascript:call_link\('abenrap_privileged_mode_glosry.htm'\) "Glossary Entry") for an extended RAP BO. BDEF privileged mode is a prerequisite for using the addition [PRIVILEGED](javascript:call_link\('abapeml_privileged.htm'\)) in [ABAP EML](javascript:call_link\('abenabap_eml_glosry.htm'\) "Glossary Entry") when consuming the extended RAP BO.

ContextName must be an [authorization context](javascript:call_link\('abencds_auth_context_glosry.htm'\) "Glossary Entry") that is specified in the same BDEF extension. Only one authorization context can be specified after with privileged mode disabling.

The effect is that the [authorization context](javascript:call_link\('abencds_auth_context_glosry.htm'\) "Glossary Entry") ContextName is automatically disabled when a [RAP BO consumer](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry") uses [privileged access](javascript:call_link\('abapeml_privileged.htm'\)) to the extended RAP BO in question.

Privileged access with [ABAP EML](javascript:call_link\('abenabap_eml_glosry.htm'\) "Glossary Entry") is possible as soon as either the original BDEF or one of its extensions has specified privileged mode. For the original BDEF and all the extensions, a context consisting of a union of all contexts specified after with privileged mode disabling is applied.

For further details, see

-   [CDS BDL - with privileged mode](javascript:call_link\('abenbdl_privileged_mode.htm'\)).
-   [ABAP EML - PRIVILEGED](javascript:call_link\('abapeml_privileged.htm'\)).

Example

The following source code shows BDEF extension DEMO\_RAP\_EXTENSION\_2. It extends BDEF DEMO\_RAP\_EXTENSIBLE\_ROOT. The extension defines an authorization context Context02, which is disabled in privileged mode.

extension;
with privileged mode disabling Context02;
extend behavior for Root
{
}
define authorization context Context02
{
  'AUTHOBJ8';
}