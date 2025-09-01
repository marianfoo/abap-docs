  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for ABAP Release 7.56](javascript:call_link\('abennews-756.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Dictionary%20in%20ABAP%20Release%207.56%2C%20ABENNEWS-756-DDIC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Dictionary in ABAP Release 7.56

[1\. Extension for Load Unit](#!ABAP_MODIFICATION_1@1@)
[2\. C0 Developer Extensibility for DDIC Objects](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Extension for Load Unit

In ABAP Dictionary, the [load unit](javascript:call_link\('abenddic_database_tables_load_unit.htm'\)) has been extended. There are now the following settings available:

-   Column Preferred
-   Page Preferred
-   Column Enforced
-   Page Enforced

Modification 2   

C0 Developer Extensibility for DDIC Objects

The following new [extensibility annotations](javascript:call_link\('abenddicddl_define_ext_annos.htm'\)) are available for [dictionary objects](javascript:call_link\('abendictionary_object_glosry.htm'\) "Glossary Entry"). They are required for [C0 release](javascript:call_link\('abenc0_contract_glosry.htm'\) "Glossary Entry") of a DDIC object, which is a prerequisite for [developer extensibility](javascript:call_link\('abendev_extensibility_glosry.htm'\) "Glossary Entry").

-   [@AbapCatalog.enhancement.fieldSuffix](javascript:call_link\('abenddicddl_define_ext_annos.htm'\))
-   [@AbapCatalog.enhancement.quotaMaximumFields](javascript:call_link\('abenddicddl_define_ext_annos.htm'\))
-   [@AbapCatalog.enhancement.quotaMaximumBytes](javascript:call_link\('abenddicddl_define_ext_annos.htm'\))
-   [@AbapCatalog.enhancement.quotaShareCustomer](javascript:call_link\('abenddicddl_define_ext_annos.htm'\))
-   [@AbapCatalog.enhancement.quotaSharePartner](javascript:call_link\('abenddicddl_define_ext_annos.htm'\))