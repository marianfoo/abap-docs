  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [CDS BDL - CDS Interface Behavior Definition](javascript:call_link\('abenbdl_rap_bo_interface.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - CDS Behavior Definition Header, Interface BDEF, ABENBDL_BO_INTERFACE_HEADER
, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - CDS Behavior Definition Header, Interface BDEF

Syntax

[implementation type](javascript:call_link\('abenbdl_impl_type.htm'\));
*\[*extensible;*\]*
*\[*[use draft;](javascript:call_link\('abenbdl_use_projection.htm'\))*\]*
*\[* [with privileged mode;](javascript:call_link\('abenbdl_privileged_mode.htm'\))*\]*
*\[* [foreign entity EntityName](javascript:call_link\('abenbdl_foreign.htm'\));*\]*
*{* [entity behavior definition](javascript:call_link\('abenbdl_define_beh_interface.htm'\)) *}*
...

Effect

The [CDS behavior definition header](javascript:call_link\('abencds_bdef_header_glosry.htm'\) "Glossary Entry") of an [interface BDEF](javascript:call_link\('abencds_interface_bdef_glosry.htm'\) "Glossary Entry") can project certain elements from its base BO. Defining new elements is not possible. All possible elements are listed below. The implementation type is mandatory and all other attributes are optional.

-   [implementation type](javascript:call_link\('abenbdl_impl_type.htm'\)): an interface BDEF must start with the keyword interface and it must be based on a [CDS transactional interface](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry").
-   extensible: if specified, [BDEF extensions](javascript:call_link\('abenbdl_extension.htm'\)) are allowed. As a prerequisite, the projected BDEF must define at least one entity as [extensible](javascript:call_link\('abenbdl_extensible.htm'\)).
-   [use draft](javascript:call_link\('abenbdl_use_projection.htm'\)): the [draft concept](javascript:call_link\('abenbdl_with_draft.htm'\)) can be reused from the base BO.
    -   For details on the draft concept, see topic [CDS BDL - with draft](javascript:call_link\('abenbdl_with_draft.htm'\)).
    -   For details on the reuse, see topic [CDS BDL - use](javascript:call_link\('abenbdl_use_projection.htm'\)).
-   [with privileged mode](javascript:call_link\('abenbdl_privileged_mode.htm'\)): BDEF privileged mode can be used. As a prerequisite, it must be specified in the projected BO. For details, see topic [CDS BDL - with privileged mode](javascript:call_link\('abenbdl_privileged_mode.htm'\)).
-   [foreign entity](javascript:call_link\('abenbdl_foreign.htm'\)): Defines an entity which is not part of the BO structure as component for the response structures, thus enabling message mapping for other BOs.

The behavior definition header is followed by one or more [entity behavior definition(s)](javascript:call_link\('abenbdl_define_beh_interface.htm'\)) that start with define behavior for.

Restrictions

-   An [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") must not be specified. The syntax [implementation in class](javascript:call_link\('abenbdl_in_class_unique.htm'\)) is not supported. An interface BDEF is a BDEF type without runtime handler.
-   [BDEF strict mode](javascript:call_link\('abenrap_strict_mode_glosry.htm'\) "Glossary Entry") cannot be defined explicitly. Strict checks are automatically applied.

Example

The following example shows an interface BDEF. The projected BO is DEMO\_RAP\_UNMANAGED\_DRAFT\_ROOT. The interface BDEF reuses draft handling and standard operations from the underlying BO. It also defines a foreign entity and excludes two fields from the BDEF derived types.

interface;
use draft;
foreign entity demo\_cds\_validation;
define behavior for DEMO\_RAP\_INTERFACE\_DRAFT alias Root
use etag
{
  use create;
  use update;
  use delete;
  use action Activate;
  use action Discard;
  use action Edit;
  use action Resume;
  use action Prepare;
  field(suppress) DataFieldRoot;
}