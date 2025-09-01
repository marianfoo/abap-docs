  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Rules for ABAP Cloud](javascript:call_link\('abenabap_strict_rules.htm'\)) →  [Contract Rules for ABAP Released APIs](javascript:call_link\('abenrestricted_apis.htm'\)) →  [C0 Contract Rules](javascript:call_link\('abenc0_contract_rules.htm'\)) →  [C0 Contract Rules for DDIC Objects](javascript:call_link\('abenc0_contract_rules_ddic.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20C0%20Contract%20Rules%20for%20Providers%20of%20DDIC%20Objects%2C%20ABENC0_PROVIDER_RULES_DDIC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20
for%20improvement:)

C0 Contract Rules for Providers of DDIC Objects

The following sections show the most important C0 contract rules for DDIC objects.

-   [Prerequisites for C0 Release](#abenc0-provider-rules-ddic-1-------stability-rules-after-release---@ITOC@@ABENC0_PROVIDER_RULES_DDIC_2)

Prerequisites for C0 Release   

-   The following DDIC objects can be released under the [C0 contract for extensibility](javascript:call_link\('abenc0_contract_glosry.htm'\) "Glossary Entry"): [DDIC structures](javascript:call_link\('abenddic_structure_glosry.htm'\) "Glossary Entry") and [DDIC database tables](javascript:call_link\('abenddic_db_table_glosry.htm'\) "Glossary Entry").
-   The [DDIC object](javascript:call_link\('abendictionary_object_glosry.htm'\) "Glossary Entry") must be marked as extensible by means of the annotation [@AbapCatalog.enhancement.category](javascript:call_link\('abenddicddl_define_struct_props.htm'\)). The following annotation values are possible for this annotation for C0 release: #EXTENSIBLE\_CHARACTER\_NUMERIC and #EXTENSIBLE\_ANY.
-   The DDIC object must define a 3-character long element suffix using the annotation [@AbapCatalog.enhancement.fieldSuffix](javascript:call_link\('abenddicddl_define_ext_annos.htm'\)).
    
    Caution: Multiple objects with identical field suffixes can never be included as [include structure](javascript:call_link\('abenddic_include_structure.htm'\)) in the same object.
    
-   The DDIC object must define a quota that preserves capacity for extension content. Both annotations [@AbapCatalog.enhancement.quotaMaximumFields](javascript:call_link\('abenddicddl_define_ext_annos.htm'\)) and [@AbapCatalog.enhancement.quotaMaximumBytes](javascript:call_link\('abenddicddl_define_ext_annos.htm'\)) are mandatory. The maximum number of fields should be an integer between 100 and 560 and the maximum number of bytes should be set to a value between 1000 and 56.000.
-   The DDIC object must define a quota share that distributes the field count and byte count between customer and partner extensions. Both annotations [@AbapCatalog.enhancement.quotaShareCustomer](javascript:call_link\('abenddicddl_define_ext_annos.htm'\)) and [@AbapCatalog.enhancement.quotaSharePartner](javascript:call_link\('abenddicddl_define_ext_annos.htm'\)) are mandatory. Currently, the value of both annotations must be set to 50.

Stability Rules After Release   

-   The object in question must not be deleted and the release contract must not be removed.
-   The type of dictionary object must not be changed after a C0 release. That means a database table must not be changed into a structure and vice versa.
-   The [storage type](javascript:call_link\('abenddic_database_tables_storage.htm'\)) must not be changed from Columns Store to Row Store after C0 release.
-   The [extensibility annotations](javascript:call_link\('abenddicddl_define_ext_annos.htm'\)) must not be removed after a C0 release. Changes are allowed within strict limits:
    -   @AbapCatalog.enhancement.category must not be removed and its value must not be reduced. This means its value must not be changed from #EXTENSIBLE\_ANY to #EXTENSIBLE\_CHARACTER\_NUMERIC. The reverse way is possible, though.
    -   The maximum field and byte capacity defined in @AbapCatalog.enhancement.quotaMaximumFields and @AbapCatalog.enhancement.quotaMaximumBytes must not be reduced.
    -   The element suffix defined with @AbapCatalog.enhancement.fieldSuffix must not be changed.
    -   The quota share values defined in @AbapCatalog.enhancement.quotaShareCustomer and @AbapCatalog.enhancement.quotaSharePartner must not be changed.