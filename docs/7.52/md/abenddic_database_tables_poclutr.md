  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_classical_objects.htm) →  [Database Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables.htm) →  [Pooled Tables and Cluster Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_poolclu.htm) → 

Transforming Pooled Tables and Cluster Tables

Any existing pooled tables and cluster tables should be transformed to transparent tables. In particular, if a [SAP HANA database](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhana_database_glosry.htm "Glossary Entry") is used as the [standard AS ABAP database](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_db_glosry.htm "Glossary Entry"), only transparent tables should be used, since the architecture of SAP HANA databases does not provide optimum support for pooled tables and cluster tables.

The tables can be transformed in ABAP Dictionary for the current system. By default, the table is then also transformed when migrated to another database in follow-on systems. If the transformation in follow-on systems is restricted only to specific database systems in exceptional cases, this can be specified using the Transparent on following DBs flag in the original system. If this is the case, any pooled tables or cluster tables transformed to transparent tables in one system, are transformed in follow-on systems only if migrated to the specified databases. They are kept as pooled tables or cluster tables for all other databases. Currently, only SAP HANA databases can be specified as database systems where this transformation can take place.

Once a table is transformed to a transparent database table, the Transparent on following DBs flag is kept and defines the transformation in further follow-on systems. If a transformed transparent table is migrated to a follow-on system, the pooled tables or cluster tables are only transformed to transparent tables if the flag is not set or if the flag is set and the target database system matches.

In addition, this flag specifies that tables on each database where they were once transparent are no longer transformed to a pooled table or cluster table, even if a transport with the corresponding table definition is imported or an attempt is made to perform the transformation in ABAP Dictionary. Before this can happen, the flag must be removed explicitly.