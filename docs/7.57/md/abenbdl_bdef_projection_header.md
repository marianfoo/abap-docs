  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [CDS BDL - CDS Projection Behavior Definitions](javascript:call_link\('abenbdl_projection_bo.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - CDS Behavior Definition Header, Projection BDEF, ABENBDL_BDEF_PROJECTION_HE
ADER, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - CDS Behavior Definition Header, Projection BDEF

Syntax

[implementation type](javascript:call_link\('abenbdl_impl_type.htm'\));
*{**\[* [implementation in class ClassName unique](javascript:call_link\('abenbdl_in_class_unique.htm'\))*\]**}*;
*\[*[strict*\[*(version)*\]*;](javascript:call_link\('abenbdl_strict.htm'\))*\]*
*\[*[extensible;](javascript:call_link\('abenbdl_extensible.htm'\))*\]*
*\[*[use draft;](javascript:call_link\('abenbdl_use_projection.htm'\))*\]*
*\[*[with privileged mode disabling base context;](javascript:call_link\('abenbdl_privileged_mode.htm'\))*\]*
*\[*[foreign entity EntityName](javascript:call_link\('abenbdl_foreign.htm'\));*\]*
*{* [entity behavior definition](javascript:call_link\('abenbdl_define_beh_projection.htm'\)) *|* [define *\[*own*\]* authorization context](javascript:call_link\('abenbdl_authorization_context.htm'\)) *}*
...

Effect

The [CDS behavior definition header](javascript:call_link\('abencds_bdef_header_glosry.htm'\) "Glossary Entry") of a [projection BDEF](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry") is similar to the header of a managed or unmanaged BDEF. It can project certain elements from its base BO. Some elements are also newly defined. All possible elements are listed below. The implementation type is mandatory and all other attributes are optional.

-   [implementation type](javascript:call_link\('abenbdl_impl_type.htm'\)): a projection BDEF must start with the keyword projection and it must be based on a [CDS projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry").
-   [implementation in class ClassName unique](javascript:call_link\('abenbdl_in_class_unique.htm'\)): in a projection behavior definition, an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") is not compulsory but possible:
    -   Functionality that is reused from the [projected BO](javascript:call_link\('abenrap_projection_bo_glosry.htm'\) "Glossary Entry") does not require its own implementation. The implementation from the projected BO is reused.
    -   If the projection BDEF defines [new actions or functions](javascript:call_link\('abenbdl_nonstandard_projection.htm'\)), an ABAP behavior pool is required.
-   [strict*\[*(version)*\]*](javascript:call_link\('abenbdl_strict.htm'\)): [BDEF strict mode](javascript:call_link\('abenrap_strict_mode_glosry.htm'\) "Glossary Entry") can be used. As a prerequisite, it must be specified in the projected BO. The projected BO and the projection must use the same version of strict mode.
-   [extensible](javascript:call_link\('abenbdl_extensible.htm'\)): if specified, [BDEF extensions](javascript:call_link\('abenbdl_extension.htm'\)) are allowed. As a prerequisite, [BDEF strict mode](javascript:call_link\('abenbdl_strict.htm'\)) must be switched on. In projection BDEFs, only the keyword extensible is possible, without the additions described in topic [extensible](javascript:call_link\('abenbdl_extensible.htm'\)).
-   [use draft](javascript:call_link\('abenbdl_use_projection.htm'\)): the [draft concept](javascript:call_link\('abenbdl_with_draft.htm'\)) can be reused from the base BO.
    -   For details on the draft concept, see topic [CDS BDL - with draft](javascript:call_link\('abenbdl_with_draft.htm'\)).
    -   For details on the reuse, see topic [CDS BDL - use](javascript:call_link\('abenbdl_use_projection.htm'\)).
-   [with privileged mode disabling base context](javascript:call_link\('abenbdl_privileged_mode.htm'\)): BDEF privileged mode can be used. As a prerequisite, it must be specified in the projected BO. For details, see topic [CDS BDL - with privileged mode disabling](javascript:call_link\('abenbdl_privileged_mode.htm'\)).
-   [foreign entity](javascript:call_link\('abenbdl_foreign.htm'\)): Defines an entity which is not part of the BO structure as component for the response structures, thus enabling message mapping for other BOs.

The behavior definition header is followed by

-   either the [entity behavior definition](javascript:call_link\('abenbdl_define_beh_projection.htm'\)) that starts with define behavior for
-   or by the definition of an [authorization context](javascript:call_link\('abencds_auth_context_glosry.htm'\) "Glossary Entry") that starts with [define *\[*own*\]* authorization context](javascript:call_link\('abenbdl_authorization_context.htm'\)).

Example

The following example shows a projection BDEF based on the projected BO DEMO\_SALES\_CDS\_BUPA\_2. It defines the managed BDEF DEMO\_CDS\_VALIDATION as foreign entity and exposes the standard operations and associations of the underlying BO.

projection;
foreign entity demo\_cds\_validation;
define behavior for DEMO\_RAP\_PROJECTION\_1 alias Parent
{
  use create;
  use update;
  use delete;
  use association \_BuPa { create; }
}
define behavior for DEMO\_RAP\_PROJECTION\_1\_CHILD alias Child
{
  use update;
  use delete;
  use association \_Address;
}

Like in a RAP BO of type managed or unmanaged, the foreign entity is included in the reported structure:

![Figure](foreign_in_projection.jpg)