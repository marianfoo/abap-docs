  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [Changes in Release 7.53](javascript:call_link\('abennews-753.htm'\)) → 

ABAP Dictionary in Release 7.53

[1\. Dependency rules](#!ABAP_MODIFICATION_1@1@)
[2\. Pooled tables and cluster tables obsolete](#!ABAP_MODIFICATION_2@2@)
[3\. Expanded limits](#!ABAP_MODIFICATION_3@3@)

Modification 1

Dependency Rules

In ABAP Dictionary, the [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") can be used to define [dependency rules](javascript:call_link\('abenddic_dependency_rules.htm'\)) in the SAP HANA database. A dependency rule makes it possible to derive additional selection conditions from existing conditions when a database table is accessed. In the [data aging](javascript:call_link\('abendata_aging_glosry.htm'\) "Glossary Entry") concept, for example, dependency rules are used in the [optimization of access to old data](javascript:call_link\('abenhana_data_aging_druls.htm'\)).

Modification 2

Pooled Tables and Cluster Tables Obsolete

All support for [pooled tables](javascript:call_link\('abenpooled_table_glosry.htm'\) "Glossary Entry") and [cluster tables](javascript:call_link\('abencluster_table_glosry.htm'\) "Glossary Entry") has been dropped. Any existing pooled tables and cluster tables are transformed to [transparent tables](javascript:call_link\('abentransparent_table_glosry.htm'\) "Glossary Entry"). Any existing [table pools](javascript:call_link\('abentable_pool_glosry.htm'\) "Glossary Entry") and [table clusters](javascript:call_link\('abentable_cluster_glosry.htm'\) "Glossary Entry") are removed. All restrictions that applied when accessing pooled tables and cluster tables hence no longer apply.

Modification 3

Expanded Limits

The following limits now apply to the number of fields and the length of the structure of a [database table](javascript:call_link\('abendatabase_table_glosry.htm'\) "Glossary Entry"), of a [database view](javascript:call_link\('abendatabase_view_glosry.htm'\) "Glossary Entry"), and of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"):

-   Database tables

-   A database table that is not part of the software component SAP\_BASIS can now contain 1000 fields for the storage type Row Store and 1500 fields for the storage type Column Store. The total of all field lengths is no longer checked in ABAP Dictionary.

-   A database table that is part of the software component SAP\_BASIS can contain a maximum of 749 fields (as before) and the total of the field lengths in ABAP Dictionary is still restricted to 4030.

-   Database views and CDS views

-   A view that is not part of the software component SAP\_BASIS can contain 1500 view fields. The total of all field lengths is no longer checked in ABAP Dictionary.

-   A view that is part of the software component SAP\_BASIS can contain a maximum of 749 fields (as before) and the total of the field lengths in ABAP Dictionary is still restricted to 4096.