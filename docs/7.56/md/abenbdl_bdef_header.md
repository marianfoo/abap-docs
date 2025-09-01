  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl.htm) →  [ABAP CDS - managed and unmanaged behavior definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_rap_bo.htm) → 

CDS BDL - CDS behavior definition header

Syntax

[implementation\_type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_impl_type.htm)*\[*[saving options](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_saving.htm)*\]*
               *{**\[* [implementation in class ClassName unique](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_in_class_unique.htm)*\]**}*;
*\[*[strict](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_strict.htm);*\]*
*\[*[extensible](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_extensible.htm);*\]*
*\[*[with draft](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_with_draft.htm);*\]*
*\[* [with privileged mode disabling ContextName](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_privileged_mode.htm):*\]*
*\[*[foreign entity EntityName](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_foreign.htm);*\]*
*{* [entity behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_define_beh.htm) *|* [define authorization context](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_authorization_context.htm)*}*
...

Effect

Defines a CDS behavior definition in the [CDS BDL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdl_glosry.htm "Glossary Entry"). A CDS behavior definition consists of a [CDS behavior definition header](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdef_header_glosry.htm "Glossary Entry") and one or more [entity behavior definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_bdef_glosry.htm "Glossary Entry").

The header can define the following attributes for the entire business object. The implementation type is mandatory, all other attributes are optional.

-   [implementation type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_impl_type.htm): four different implementation types exist: managed, unmanaged, abstract, projection.
-   [saving options](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_saving.htm):
    -   The default [save sequence](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_save_seq_glosry.htm "Glossary Entry") can either be enhanced or switched off and overwritten with a self-defined saving strategy.
    -   Can be defined either in the [BDEF header](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdef_header_glosry.htm "Glossary Entry") and then applies to all entities of the business object. It is also possible to define saving options as an [entity behavior characteristic / entity behavior characteristics](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_character.htm).
    -   If specified, an implementation in the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is required.
    -   Only available for [managed implementation scenarios](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry").
-   [implementation in class ClassName unique](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_in_class_unique.htm): specifies one or more classes which allow the behavior implementation of a business object. In a managed scenario, this is optional and required only if unmanaged components are added to the managed implementation.
-   [strict](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_strict.htm): switches on [BDEF strict mode](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_strict_mode_glosry.htm "Glossary Entry"). Handled by the [RAP framework](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_framework_glosry.htm "Glossary Entry").
-   [extensible](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_extensible.htm): if specified, [BDEF extensions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_extension.htm) are allowed. Handled by the [RAP framework](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_framework_glosry.htm "Glossary Entry"). Currently, only available for managed implementation scenarios.
-   [with draft](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_with_draft.htm): enables the draft concept for a business object. This allows users to save their changes as draft and resume editing at a later point in time. Handled by the [RAP framework](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_framework_glosry.htm "Glossary Entry").
-   [with privileged mode disabling ContextName](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_privileged_mode.htm): Enables BDEF privileged mode. The effect is that the [authorization context](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_auth_context_glosry.htm "Glossary Entry") ContextName is automatically disabled when a RAP BO consumer accesses the business object in question with a [privileged EML call](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_privileged.htm).
-   [foreign entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_foreign.htm): Defines an entity which is not part of the BO structure as component for the response structures, thus enabling message mapping for other BOs.

The behavior definition header is followed by

-   either an [entity behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_define_beh.htm) that starts with define behavior for
-   or by the definition of an [authorization context](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_auth_context_glosry.htm "Glossary Entry") that starts with [define authorization context](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_authorization_context.htm).

Example

The following example shows a managed BDEF based on the CDS root view entity DEMO\_SALES\_CDS\_BUPA\_2. The BDEF header consists only of the implementation type, in this case, managed.

managed;
define behavior for DEMO\_SALES\_CDS\_BUPA\_2
persistent table demo\_sales\_bupa
lock master
{
  create;
  update;
  delete;
  association \_BuPa {create; }
}
define behavior for DEMO\_SALES\_CDS\_BUPA\_ADDRESS
persistent table demo\_sales\_bupa1
lock dependent by \_Address
{
  field ( readonly ) Id;
  update;
  delete;
association \_Address { }
}

Continue
[CDS BDL - implementation type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_impl_type.htm)
[CDS BDL - implementation in class unique](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_in_class_unique.htm)
[CDS BDL - strict](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_strict.htm)
[CDS BDL - extensible](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_extensible.htm)
[CDS BDL - with draft](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_with_draft.htm)
[CDS BDL - with privileged mode disabling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_privileged_mode.htm)
[CDS BDL - foreign entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_foreign.htm)