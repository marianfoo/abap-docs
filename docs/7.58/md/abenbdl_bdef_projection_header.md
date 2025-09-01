  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [RAP - Projection Behavior Definitions](javascript:call_link\('abenbdl_projection_bo.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Behavior%20Definition%20Header%2C%20Projection%20BDEF%2C%20ABENBDL_BDEF_PROJECTION_HEADER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggest
ion%20for%20improvement:)

RAP - Behavior Definition Header, Projection BDEF

Syntax

[implementation type](javascript:call_link\('abenbdl_impl_type.htm'\));
*{**\[* [implementation in class ClassName unique](javascript:call_link\('abenbdl_in_class_unique.htm'\))*\]**}*;
*\[*[strict*\[*(version)*\]*;](javascript:call_link\('abenbdl_strict.htm'\))*\]*
*\[*[extensible;](javascript:call_link\('abenbdl_extensible.htm'\))*\]*
*\[* [with managed instance filter;](javascript:call_link\('abenbdl_mngd_instance_check_proj.htm'\))*\]*
*\[*[use draft;](javascript:call_link\('abenbdl_use_projection.htm'\))*\]*
*\[* [use side effects;](javascript:call_link\('abenbdl_use_projection.htm'\))*\]*
*\[* [with privileged mode disabling base context;](javascript:call_link\('abenbdl_privileged_mode.htm'\))*\]*
*\[*[foreign entity EntityName](javascript:call_link\('abenbdl_foreign.htm'\));*\]*
*{* [entity behavior definition](javascript:call_link\('abenbdl_define_beh_projection.htm'\)) *|* [define *\[*own*\]* authorization context](javascript:call_link\('abenbdl_authorization_context.htm'\)) *}*
...

Effect

The [RAP behavior definition header](javascript:call_link\('abencds_bdef_header_glosry.htm'\) "Glossary Entry") of a [projection BDEF](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry") is similar to the header of a managed or unmanaged BDEF. It can project certain elements from its base BO. Some elements are also newly defined. All possible elements are listed below. The implementation type is mandatory and all other attributes are optional.

-   [implementation type](javascript:call_link\('abenbdl_impl_type.htm'\)): a projection BDEF must start with the keyword projection and it must be based on a [CDS projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry").
-   [implementation in class ClassName unique](javascript:call_link\('abenbdl_in_class_unique.htm'\)): in a projection behavior definition, an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") is not compulsory but possible:
    -   Functionality that is reused from the [projected BO](javascript:call_link\('abenrap_projection_bo_glosry.htm'\) "Glossary Entry") does not require its own implementation. The implementation from the projected BO is reused.
    -   If the projection BDEF defines [new actions or functions](javascript:call_link\('abenbdl_nonstandard_projection.htm'\)), an ABAP behavior pool is required.
-   [strict*\[*(version)*\]*](javascript:call_link\('abenbdl_strict.htm'\)): [BDEF strict mode](javascript:call_link\('abenrap_strict_mode_glosry.htm'\) "Glossary Entry") can be used. As a prerequisite, it must be specified in the projected BO. The projected BO and the projection must use the same version of strict mode.
-   [extensible](javascript:call_link\('abenbdl_extensible.htm'\)): if specified, [BDEF extensions](javascript:call_link\('abenbdl_extension.htm'\)) are allowed. As a prerequisite, [BDEF strict mode](javascript:call_link\('abenbdl_strict.htm'\)) must be switched on. In projection BDEFs, only the keyword extensible is possible, without the additions described in topic [extensible](javascript:call_link\('abenbdl_extensible.htm'\)).
-   [use draft](javascript:call_link\('abenbdl_use_projection.htm'\)): the [draft concept](javascript:call_link\('abenbdl_with_draft.htm'\)) can be reused from the base BO.
    -   For details on the draft concept, see topic [RAP - with draft](javascript:call_link\('abenbdl_with_draft.htm'\)).
    -   For details on the reuse, see topic [RAP - use, Projection BDEF](javascript:call_link\('abenbdl_use_projection.htm'\)).
-   [with managed instance filter](javascript:call_link\('abenbdl_mngd_instance_check_proj.htm'\)): Optional addition for [projection BDEFs](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry") and [interface BDEFs](javascript:call_link\('abencds_interface_bdef_glosry.htm'\) "Glossary Entry"). If specified, the WHERE condition of the underlying [CDS transactional query](javascript:call_link\('abencds_transactional_pv_glosry.htm'\) "Glossary Entry") or [CDS transactional interface](javascript:call_link\('abencds_trans_interface_glosry.htm'\) "Glossary Entry") is evaluated when the BDEF is accessed with [ABAP EML](javascript:call_link\('abenabap_eml_glosry.htm'\) "Glossary Entry") or [OData](javascript:call_link\('abenodata_glosry.htm'\) "Glossary Entry") requests from Web clients. If this addition is not specified, the WHERE clause is ignored. For further details, see topic [RAP - with managed instance filter](javascript:call_link\('abenbdl_mngd_instance_check_proj.htm'\)).
-   [use side effects](javascript:call_link\('abenbdl_use_projection.htm'\)): [RAP side effects](javascript:call_link\('abenrap_side_effects_glosry.htm'\) "Glossary Entry") can be reused from the base BO.
    -   For details on RAP side effects, see topic [RAP - side effects](javascript:call_link\('abenbdl_side_effects.htm'\)).
    -   For details on the reuse, see topic [RAP - use, Projection BDEF](javascript:call_link\('abenbdl_use_projection.htm'\)).
-   [with privileged mode disabling base context](javascript:call_link\('abenbdl_privileged_mode.htm'\)): BDEF privileged mode can be used. As a prerequisite, it must be specified in the projected BO. For details, see topic [RAP - with privileged mode](javascript:call_link\('abenbdl_privileged_mode.htm'\)).
-   [foreign entity](javascript:call_link\('abenbdl_foreign.htm'\)): Defines an entity which is not part of the BO structure as component for the response structures, thus enabling message mapping for other BOs.

The behavior definition header is followed by

-   either the [entity behavior definition](javascript:call_link\('abenbdl_define_beh_projection.htm'\)) that starts with define behavior for
-   or by the definition of an [authorization context](javascript:call_link\('abencds_auth_context_glosry.htm'\) "Glossary Entry") that starts with [define *\[*own*\]* authorization context](javascript:call_link\('abenbdl_authorization_context.htm'\)).

Example

The following example shows a projection BDEF based on the projected BO DEMO\_SALES\_CDS\_BUPA\_2. It defines the managed BDEF DEMO\_CDS\_VALIDATION as foreign entity and exposes the standard operations and associations of the underlying BO.

Note: This example does not fully meet the requirements of the [RAP BO contract](javascript:call_link\('abenrap_bo_contract_glosry.htm'\) "Glossary Entry"). It is intentionally kept short and simple and serves demonstration purposes only. See more information on the RAP BO contract in the [Development guide for the ABAP RESTful Application Programming Model](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

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
Continue
[RAP - with managed instance filter](javascript:call_link\('abenbdl_mngd_instance_check_proj.htm'\))