  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [RAP - Managed and Unmanaged Behavior Definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Behavior%20Definition%20Header%2C%20ABENBDL_BDEF_HEADER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - Behavior Definition Header

Syntax

[implementation\_type](javascript:call_link\('abenbdl_impl_type.htm'\))*\[*[saving options](javascript:call_link\('abenbdl_saving.htm'\))*\]*
               *{**\[* [implementation in class ClassName unique](javascript:call_link\('abenbdl_in_class_unique.htm'\))*\]**}*;
*\[*[strict*\[*(version)*\]*](javascript:call_link\('abenbdl_strict.htm'\));*\]*
*\[*[extensible](javascript:call_link\('abenbdl_extensible.htm'\));*\]*
*\[*[with draft](javascript:call_link\('abenbdl_with_draft.htm'\));*\]*
*\[*[with privileged mode disabling ContextName](javascript:call_link\('abenbdl_privileged_mode.htm'\)):*\]*
*\[*[foreign entity EntityName](javascript:call_link\('abenbdl_foreign.htm'\));*\]*
*{* [entity behavior definition](javascript:call_link\('abenbdl_define_beh.htm'\)) *|* [define *\[*own*\]* authorization context](javascript:call_link\('abenbdl_authorization_context.htm'\))*}*
...

Effect

Defines a RAP behavior definition in the [RAP BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry"). A RAP behavior definition consists of a [RAP behavior definition header](javascript:call_link\('abencds_bdef_header_glosry.htm'\) "Glossary Entry") and one or more [entity behavior definitions](javascript:call_link\('abencds_entity_bdef_glosry.htm'\) "Glossary Entry").

The header can define the following attributes for the entire business object. The implementation type is mandatory, all other attributes are optional.

-   [implementation type](javascript:call_link\('abenbdl_impl_type.htm'\)): four different implementation types exist: managed, unmanaged, abstract, projection.
-   [saving options](javascript:call_link\('abenbdl_saving.htm'\)):
    -   The default [save sequence](javascript:call_link\('abenrap_save_seq_glosry.htm'\) "Glossary Entry") can either be enhanced or switched off and overwritten with a user-defined saving strategy.
    -   Can be defined either in the [BDEF header](javascript:call_link\('abencds_bdef_header_glosry.htm'\) "Glossary Entry") and then applies to all entities of the business object. It is also possible to define saving options as an [entity behavior characteristic / entity behavior characteristics](javascript:call_link\('abenbdl_character.htm'\)).
    -   If specified, an implementation in the [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") is required.
    -   Only available for [managed implementation scenarios](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry").
-   [implementation in class ClassName unique](javascript:call_link\('abenbdl_in_class_unique.htm'\)): specifies one or more classes which allow the behavior implementation of a business object. In a managed scenario, this is optional and required only if unmanaged components are added to the managed implementation.
-   [strict*\[*(version)*\]*](javascript:call_link\('abenbdl_strict.htm'\)): switches on [BDEF strict mode](javascript:call_link\('abenrap_strict_mode_glosry.htm'\) "Glossary Entry"). Handled by the [RAP framework](javascript:call_link\('abenrap_framework_glosry.htm'\) "Glossary Entry").
-   [extensible](javascript:call_link\('abenbdl_extensible.htm'\)): if specified, [BDEF extensions](javascript:call_link\('abenbdl_extension.htm'\)) are allowed. Handled by the [RAP framework](javascript:call_link\('abenrap_framework_glosry.htm'\) "Glossary Entry"). Currently, only available for managed implementation scenarios.
-   [with draft](javascript:call_link\('abenbdl_with_draft.htm'\)): enables the draft concept for a business object. This allows users to save their changes as draft and resume editing at a later point in time. Handled by the [RAP framework](javascript:call_link\('abenrap_framework_glosry.htm'\) "Glossary Entry").
-   [with privileged mode disabling ContextName](javascript:call_link\('abenbdl_privileged_mode.htm'\)): Enables BDEF privileged mode. The effect is that the [authorization context](javascript:call_link\('abencds_auth_context_glosry.htm'\) "Glossary Entry") ContextName is automatically disabled when a RAP BO consumer accesses the business object in question with a [privileged EML call](javascript:call_link\('abapeml_privileged.htm'\)).
-   [foreign entity](javascript:call_link\('abenbdl_foreign.htm'\)): Defines an entity which is not part of the BO structure as component for the response structures, thus enabling message mapping for other BOs.

The behavior definition header is followed by

-   either an [entity behavior definition](javascript:call_link\('abenbdl_define_beh.htm'\)) that starts with define behavior for
-   or by the definition of an [authorization context](javascript:call_link\('abencds_auth_con_glosry.htm'\) "Glossary Entry") that starts with [define *\[*own*\]* authorization context](javascript:call_link\('abenbdl_authorization_context.htm'\)).

Example

The following example shows a managed BDEF based on the CDS root view entity DEMO\_SALES\_CDS\_BUPA\_2. The BDEF header consists only of the implementation type, in this case, managed.

Note: This example does not fully meet the requirements of the [RAP BO contract](javascript:call_link\('abenrap_bo_contract_glosry.htm'\) "Glossary Entry"). It is intentionally kept short and simple and serves demonstration purposes only. See more information on the RAP BO contract in the [Development guide for the ABAP RESTful Application Programming Model](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

managed;
define behavior for DEMO\_SALES\_CDS\_BUPA\_2
persistent table demo\_sales\_bupa
lock master
{
  create;
  update;
  delete;
  field (readonly:update) id;
  association \_BuPa {create; }
}
define behavior for DEMO\_SALES\_CDS\_BUPA\_ADDRESS
persistent table demo\_sales\_bupa1
lock dependent by \_Address
{
  field ( readonly:update ) Id, child\_key;
  update;
  delete;
association \_Address { }
}

Continue
[RAP - Implementation Type](javascript:call_link\('abenbdl_impl_type.htm'\))
[RAP - implementation in class unique](javascript:call_link\('abenbdl_in_class_unique.htm'\))
[RAP - BDEF Strict Mode](javascript:call_link\('abenbdl_strict.htm'\))
[RAP - extensible](javascript:call_link\('abenbdl_extensible.htm'\))
[RAP - with draft](javascript:call_link\('abenbdl_with_draft.htm'\))
[RAP - with privileged mode](javascript:call_link\('abenbdl_privileged_mode.htm'\))
[RAP - foreign entity](javascript:call_link\('abenbdl_foreign.htm'\))