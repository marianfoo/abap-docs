  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Rules for ABAP Cloud](javascript:call_link\('abenabap_strict_rules.htm'\)) →  [Contract Rules for ABAP Released APIs](javascript:call_link\('abenrestricted_apis.htm'\)) →  [C0 Contract Rules](javascript:call_link\('abenc0_contract_rules.htm'\)) →  [C0 Contract Rules for DDIC Objects](javascript:call_link\('abenc0_contract_rules_ddic.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20C0%20Contract%20Rules%20for%20Consumers%20of%20DDIC%20Objects%2C%20ABENC0_CONSUMER_RULES_DDIC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20
for%20improvement:)

C0 Contract Rules for Consumers of DDIC Objects

The [provider rules](javascript:call_link\('abenc0_provider_rules_ddic.htm'\)) for objects with the C0 contract ensure that released objects are changed only in a very restricted way and help to avoid errors and interruptions after an SAP upgrade. Nevertheless, the rules do not prescribe full downward compatibility and leave some room for necessary enhancements to [released APIs](javascript:call_link\('abenreleased_api_glosry.htm'\) "Glossary Entry"). Therefore, the users of released APIs still have to consider the allowed compatible changes and access the APIs in such a way that the following errors and interruptions are avoided:

-   Problems during an upgrade.
-   Syntax errors after an upgrade.
-   Runtime errors after an upgrade.
-   Wrong behavior after an upgrade.

The following sections list rules for extensions to released APIs that must be considered when creating an extension.

-   [Naming Rules](#abenc0-consumer-rules-ddic-1-------rules-for-extensions---@ITOC@@ABENC0_CONSUMER_RULES_DDIC_2)
-   [Rules for Using Released DDIC Objects](#abenc0-consumer-rules-ddic-3-------restrictions---@ITOC@@ABENC0_CONSUMER_RULES_DDIC_4)

Naming Rules   

-   All extension field names must start with the correct [namespace prefix](javascript:call_link\('abennames_repos_obj_guidl.htm'\) "Guideline").
-   All extension fields must have the element suffix that is defined in the released API by means of the annotation [@AbapCatalog.enhancement.fieldSuffix](javascript:call_link\('abenddicddl_define_ext_annos.htm'\)).

Rules for Extensions   

-   Only [DDIC database tables](javascript:call_link\('abenddic_db_table_glosry.htm'\) "Glossary Entry") and [DDIC structures](javascript:call_link\('abenddic_structure_glosry.htm'\) "Glossary Entry") are available for [C0 developer extensibility](javascript:call_link\('abendev_extensibility_glosry.htm'\) "Glossary Entry") from a [restricted ABAP language version](javascript:call_link\('abenrestricted_version_glosry.htm'\) "Glossary Entry").
-   The DDIC object must be released under the C0 contract for the corresponding language version ([ABAP for Cloud Development](javascript:call_link\('abenabap_for_cloud_dev_glosry.htm'\) "Glossary Entry") or [ABAP for Key Users](javascript:call_link\('abenabap_for_key_users_glosry.htm'\) "Glossary Entry")).
-   All extension fields must be typed with a [DDIC data element](javascript:call_link\('abendata_element_glosry.htm'\) "Glossary Entry") or with a built-in data type from the ABAP Dictionary using the syntax abap.type*\[*(n)*|*(n,m)*\]*. Typing with other structures or [DDIC table types](javascript:call_link\('abenddic_table_type_glosry.htm'\) "Glossary Entry") is not possible.
-   The extension must fit the quota definition and quota distribution defined in the extended object by means of the annotations [@AbapCatalog.enhancement.quotaMaximumFields](javascript:call_link\('abenddicddl_define_ext_annos.htm'\)), [@AbapCatalog.enhancement.quotaMaximumBytes](javascript:call_link\('abenddicddl_define_ext_annos.htm'\)), [@AbapCatalog.enhancement.quotaShareCustomer](javascript:call_link\('abenddicddl_define_ext_annos.htm'\)), and [@AbapCatalog.enhancement.quotaSharePartner](javascript:call_link\('abenddicddl_define_ext_annos.htm'\)).

Rules for Using Released DDIC Objects   

-   When using a C0 released structure as [include structure](javascript:call_link\('abenddic_include_structure.htm'\)) of another dictionary object, the addition WITH SUFFIX suffix must not be used.
-   When using a C0 released structure as [include structure](javascript:call_link\('abenddic_include_structure.htm'\)), this include structure must not be defined as a key using the addition [KEY](javascript:call_link\('abenddicddl_define_table_incl.htm'\)).
-   C0 released structures must not be used as [include structure](javascript:call_link\('abenddic_include_structure.htm'\)) in any [DDIC view](javascript:call_link\('abenddic_view_glosry.htm'\) "Glossary Entry").
-   When using a C0 released structure as [include structure](javascript:call_link\('abenddic_include_structure.htm'\)) of another dictionary object, the value of the annotation @AbapCatalog.enhancement.category of the enclosing object must be greater than or equal to the enhancement category of the included structure. #EXTENSIBLE\_ANY is greater than #EXTENSIBLE\_CHARACTER\_NUMERIC.
-   If a C0 released structure is included in any other DDIC object as [include structure](javascript:call_link\('abenddic_include_structure.htm'\)) (syntax statement include), this inclusion must not be removed. The inclusion of a C0 released structure must remain stable. Otherwise, an [ATC](javascript:call_link\('abenatc_glosry.htm'\) "Glossary Entry") error occurs.

Restrictions   

-   An extension must not define any element as a key field.
-   The following data types are not supported in extensions to released APIs: [LCHR](javascript:call_link\('abenddic_builtin_types.htm'\)), [LRAW](javascript:call_link\('abenddic_builtin_types.htm'\)), [STRING](javascript:call_link\('abenddic_builtin_types.htm'\)), [PREC](javascript:call_link\('abenddic_builtin_types.htm'\)), [RAWSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)), [GEOM\_EWKB](javascript:call_link\('abenddic_builtin_types.htm'\)), [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) with length > 1333, [RAW](javascript:call_link\('abenddic_builtin_types.htm'\)) with length > 255.