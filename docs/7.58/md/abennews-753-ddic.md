  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews.htm) →  [News for ABAP Release 7.5x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-75.htm) →  [News for ABAP Release 7.53](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-753.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Dictionary%20in%20ABAP%20Release%207.53%2C%20ABENNEWS-753-DDIC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Dictionary in ABAP Release 7.53

[1\. Dependency Rules](#!ABAP_MODIFICATION_1@1@)
[2\. Pooled Tables and Cluster Tables Obsolete](#!ABAP_MODIFICATION_2@2@)
[3\. Expanded Limits](#!ABAP_MODIFICATION_3@3@)

Modification 1   

Dependency Rules

In ABAP Dictionary, the [Dictionary DDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") can be used to define [dependency rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_dependency_rules.htm) in the SAP HANA database. A dependency rule makes it possible to derive additional selection conditions from existing conditions when a database table is accessed. In the [data aging](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_aging_glosry.htm "Glossary Entry") concept, for example, dependency rules are used in the [optimization of access to old data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_data_aging_druls.htm).

Modification 2   

Pooled Tables and Cluster Tables Obsolete

All support for [pooled tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpooled_table_glosry.htm "Glossary Entry") and [cluster tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencluster_table_glosry.htm "Glossary Entry") has been dropped. Any existing pooled tables and cluster tables are transformed to [transparent tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentransparent_table_glosry.htm "Glossary Entry"). Any existing [table pools](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_pool_glosry.htm "Glossary Entry") and [table clusters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_cluster_glosry.htm "Glossary Entry") are removed. All restrictions that applied when accessing pooled tables and cluster tables hence no longer apply.

Modification 3   

Expanded Limits

The following limits now apply to the number of fields and the length of the structure of a [database table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_table_glosry.htm "Glossary Entry"), of a [database view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_view_glosry.htm "Glossary Entry"), and of a [CDS view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_glosry.htm "Glossary Entry"):

-   Database tables
    -   A database table that is not part of the software component SAP\_BASIS can now contain 1000 fields for the storage type Row Store and 1500 fields for the storage type Column Store. The total of all field lengths is no longer checked in ABAP Dictionary with regard to database limits.
        
        Note: The size limit for [structures in ABAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_objects_structure.htm) is still checked by ABAP Dictionary.
        
    -   A database table that is part of the software component SAP\_BASIS can contain a maximum of 749 fields (as before) and the total of the field lengths in ABAP Dictionary is still restricted to 4030.
-   Database views and CDS views
    -   A view that is not part of the software component SAP\_BASIS can contain 1500 view fields. The total of all field lengths is no longer checked in ABAP Dictionary.
    -   A view that is part of the software component SAP\_BASIS can contain a maximum of 749 fields (as before) and the total of the field lengths in ABAP Dictionary is still restricted to 4096.