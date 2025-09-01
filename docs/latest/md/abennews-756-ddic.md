  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) →  [News for ABAP Release 7.5x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-75.htm) →  [News for ABAP Release 7.56](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-756.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Dictionary%20in%20ABAP%20Release%207.56%2C%20ABENNEWS-756-DDIC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Dictionary in ABAP Release 7.56

[1\. Extension for Load Unit](#!ABAP_MODIFICATION_1@1@)
[2\. C0 Developer Extensibility for DDIC Objects](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Extension for Load Unit

In ABAP Dictionary, the [load unit](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_load_unit.htm) has been extended. There are now the following settings available:

-   Column Preferred
-   Page Preferred
-   Column Enforced
-   Page Enforced

Modification 2   

C0 Developer Extensibility for DDIC Objects

The following new [extensibility annotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_ext_annos.htm) are available for [dictionary objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_object_glosry.htm "Glossary Entry"). They are required for [C0 release](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_contract_glosry.htm "Glossary Entry") of a DDIC object, which is a prerequisite for [developer extensibility](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendev_extensibility_glosry.htm "Glossary Entry").

-   [@AbapCatalog.enhancement.fieldSuffix](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_ext_annos.htm)
-   [@AbapCatalog.enhancement.quotaMaximumFields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_ext_annos.htm)
-   [@AbapCatalog.enhancement.quotaMaximumBytes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_ext_annos.htm)
-   [@AbapCatalog.enhancement.quotaShareCustomer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_ext_annos.htm)
-   [@AbapCatalog.enhancement.quotaSharePartner](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_ext_annos.htm)