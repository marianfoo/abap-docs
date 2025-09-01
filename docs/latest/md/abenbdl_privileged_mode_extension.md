  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [RAP - BDEF Extension](javascript:call_link\('abenbdl_extension.htm'\)) →  [RAP - Base BDEF Extension](javascript:call_link\('abenbdl_extensibility_managed_unm.htm'\)) →  [RAP - extension](javascript:call_link\('abenbdl_extension_syntax.htm'\)) →  [RAP - BDEF Extension Header](javascript:call_link\('abenbdl_extension_header.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20with%20privileged%20mode%2C%20Extension%2C%20ABENBDL_PRIVILEGED_MODE_EXTENSION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%2
0improvement:)

RAP - with privileged mode, Extension

Syntax

...
with privileged mode disabling ContextName;
...

Effect

Enables [BDEF privileged mode](javascript:call_link\('abenrap_privileged_mode_glosry.htm'\) "Glossary Entry") for an extended RAP BO. BDEF privileged mode is a prerequisite for using the addition [PRIVILEGED](javascript:call_link\('abapeml_privileged.htm'\)) in [ABAP EML](javascript:call_link\('abenabap_eml_glosry.htm'\) "Glossary Entry") when consuming the extended RAP BO.

ContextName must be an [authorization context for disable](javascript:call_link\('abencds_auth_context_glosry.htm'\) "Glossary Entry") that is specified in the same BDEF extension. Only one authorization context for disable can be specified after with privileged mode disabling.

The effect is that the [authorization context](javascript:call_link\('abencds_auth_context_glosry.htm'\) "Glossary Entry") ContextName is automatically disabled when a [RAP BO consumer](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry") uses [privileged access](javascript:call_link\('abapeml_privileged.htm'\)) to the extended RAP BO in question.

Privileged access with [ABAP EML](javascript:call_link\('abenabap_eml_glosry.htm'\) "Glossary Entry") is possible as soon as either the original BDEF or one of its extensions specifies privileged mode. The following rules apply:

-   If the base BDEF specifies BDEF privileged mode, but the extension does not specify privileged mode, privileged EML access is allowed.
-   If the base BDEF does not specify BDEF privileged mode, but an extension specifies BDEF privileged mode, privileged EML access is allowed, but a syntax check warning occurs. This is because the base BDEF itself does not enable BDEF privileged mode, and privileged access depends on the extension. If the extension were deleted, the privileged call would get syntax check errors.

For further details, see

-   [RAP BDL - with privileged mode](javascript:call_link\('abenbdl_privileged_mode.htm'\)).
-   [ABAP EML - PRIVILEGED](javascript:call_link\('abapeml_privileged.htm'\)).

Example

The following source code shows BDEF extension DEMO\_RAP\_EXTENSION\_2. It extends BDEF DEMO\_RAP\_EXTENSIBLE\_ROOT. The extension defines an authorization context for disable Context02, which is disabled in privileged mode.

extension using interface demo\_rap\_ext\_using\_interface;
with privileged mode disabling Context02;
extend behavior for RootInterface
{
}
define authorization context Context02
{
  'AUTHOBJ8';
}