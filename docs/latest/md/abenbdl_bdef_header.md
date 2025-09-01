  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl.htm) →  [RAP - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_rap_bo.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Behavior%20Definition%20Header%2C%20ABENBDL_BDEF_HEADER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - Behavior Definition Header

Syntax

[implementation\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_impl_type.htm)*\[*[saving options](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_saving.htm)*\]*
               *{**\[* [implementation in class ClassName unique](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_in_class_unique.htm)*\]**}*;
*\[*[strict*\[*(version)*\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_strict.htm);*\]*
*\[*[extensible](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extensible.htm);*\]*
*\[*[with draft](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_with_draft.htm);*\]*
*\[*[with privileged mode disabling ContextName](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_privileged_mode.htm):*\]*
*\[*[foreign entity EntityName](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_foreign.htm);*\]*
*{* [entity behavior definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_define_beh.htm) *|* [define *\[*own*\]* authorization context](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_authorization_context.htm)*}*
...

Effect

Defines a RAP behavior definition in the [RAP BDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdl_glosry.htm "Glossary Entry"). A RAP behavior definition consists of a [RAP behavior definition header](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef_header_glosry.htm "Glossary Entry") and one or more [entity behavior definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_bdef_glosry.htm "Glossary Entry").

The header can define the following attributes for the entire business object. The implementation type is mandatory, all other attributes are optional.

-   [implementation type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_impl_type.htm): four different implementation types exist: managed, unmanaged, abstract, projection.
-   [saving options](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_saving.htm):
    -   The default [save sequence](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_save_seq_glosry.htm "Glossary Entry") can either be enhanced or switched off and overwritten with a user-defined saving strategy.
    -   Can be defined either in the [BDEF header](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef_header_glosry.htm "Glossary Entry") and then applies to all entities of the business object. It is also possible to define saving options as an [entity behavior characteristic / entity behavior characteristics](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_character.htm).
    -   If specified, an implementation in the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is required.
    -   Only available for [managed implementation scenarios](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry").
-   [implementation in class ClassName unique](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_in_class_unique.htm): specifies one or more classes which allow the behavior implementation of a business object. In a managed scenario, this is optional and required only if unmanaged components are added to the managed implementation.
-   [strict*\[*(version)*\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_strict.htm): switches on [BDEF strict mode](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_strict_mode_glosry.htm "Glossary Entry"). Handled by the [RAP framework](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_framework_glosry.htm "Glossary Entry").
-   [extensible](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extensible.htm): if specified, [BDEF extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extension.htm) are allowed. Handled by the [RAP framework](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_framework_glosry.htm "Glossary Entry"). Currently, only available for managed implementation scenarios.
-   [with draft](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_with_draft.htm): enables the draft concept for a business object. This allows users to save their changes as draft and resume editing at a later point in time. Handled by the [RAP framework](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_framework_glosry.htm "Glossary Entry").
-   [with privileged mode disabling ContextName](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_privileged_mode.htm): Enables BDEF privileged mode. The effect is that the [authorization context](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_auth_context_glosry.htm "Glossary Entry") ContextName is automatically disabled when a RAP BO consumer accesses the business object in question with a [privileged EML call](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_privileged.htm).
-   [foreign entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_foreign.htm): Defines an entity which is not part of the BO structure as component for the response structures, thus enabling message mapping for other BOs.

The behavior definition header is followed by

-   either an [entity behavior definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_define_beh.htm) that starts with define behavior for
-   or by the definition of an [authorization context](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_auth_con_glosry.htm "Glossary Entry") that starts with [define *\[*own*\]* authorization context](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_authorization_context.htm).

Example

The following example shows a managed BDEF based on the CDS root view entity DEMO\_SALES\_CDS\_BUPA\_2. The BDEF header consists only of the implementation type, in this case, managed.

Note: This example does not fully meet the requirements of the [RAP BO contract](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_contract_glosry.htm "Glossary Entry"). It is intentionally kept short and simple and serves demonstration purposes only. See more information on the RAP BO contract in the [Development guide for the ABAP RESTful Application Programming Model](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

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
[RAP - Implementation Type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_impl_type.htm)
[RAP - implementation in class unique](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_in_class_unique.htm)
[RAP - BDEF Strict Mode](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_strict.htm)
[RAP - extensible](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extensible.htm)
[RAP - with draft](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_with_draft.htm)
[RAP - with privileged mode](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_privileged_mode.htm)
[RAP - foreign entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_foreign.htm)