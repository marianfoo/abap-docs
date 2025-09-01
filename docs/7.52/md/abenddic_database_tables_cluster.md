  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_classical_objects.htm) →  [Database Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables.htm) →  [Pooled Tables and Cluster Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_poolclu.htm) → 

Cluster Tables in Table Clusters

Cluster tables are a special category of database table in ABAP Dictionary. They are defined by being saved in table clusters rather than being defined as cluster tables on the database.

-   [Table Cluster](#@@ITOC@@ABENDDIC_DATABASE_TABLES_CLUSTER_1)

-   [Cluster Tables](#@@ITOC@@ABENDDIC_DATABASE_TABLES_CLUSTER_2)

Table Cluster

A table cluster is defined as a database table in the database. It contains all rows of the cluster tables assigned to it. Here, multiple rows from various cluster tables are grouped in a byte string. There is one row and (potentially) multiple continuation rows for this byte string. A table cluster has the following table fields for this:

-   Custom key fields CLKEY1, CLKEY2, ... with any name and any type permitted for [key fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_key.htm) except decimal floating point numbers.

-   Key field PAGENO with the type INT2 for indicating continuation rows.

-   TIMESTMP with the type CHAR of the length 14.

-   PAGELG with the type INT2 for the length of the byte string in VARDATA.

-   VARDATA with the type RAW for the rows (compressed in a byte string) of the assigned cluster tables determined using the key fields CLKEY1, CLKEY2, ... Alongside the actual values, the byte string contains information about the structure of the data and from which cluster table it comes. If the byte string is longer than the maximum length of the VARDATA field, a continuation row is written using the same key values. The continuation rows of a key are distinguished by their values in the field PAGENO. The actual length of the byte string is saved in the field PAGELG.

The name of a table cluster can have a maximum of ten characters. The configurable technical attributes of a database table are the [size category](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_siz_cat.htm) and the [activation type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_act_type.htm). All other technical attributes are fixed.

Once it is activated in ABAP Dictionary, a table cluster must be created explicitly on the database using the Database Utility tool. A table cluster that already contains data can no longer be modified or deleted.

Note

Table clusters and cluster tables should not be confused with export/import tables used to add [data clusters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_cluster_glosry.htm "Glossary Entry").

Example

In systems where no transformation to transparent tables has taken place, the table cluster DOKCLU contains the cluster table DOKTL. The key fields ID, OBJECT, LANGU, TYP, and DOKVERSION cover a part of the table key DOKTL.

Cluster Tables

The intersection of the [key fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_key.htm) of the cluster tables constructs the primary key of the table cluster. The table key of a cluster table must contain the key of the assigned table cluster as its initial part. The key fields of a cluster table cannot have any built-in types for decimal floating point numbers. A cluster table cannot have any data fields of the obsolete built-in types DF16\_SCL and DF34\_SCL. The name of a table field can have a maximum of 10 characters, which is also important when including structures as [include structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_include_structure.htm).

Before a cluster table is created, a suitable transparent table with a suitable [delivery class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_delivery.htm) must be created and transformed to a cluster table. This assigns the cluster table to a table cluster.

No secondary indexes can be created for a cluster table. The same [technical settings](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_tech.htm) can be made as in a transparent table, but these are ignored (they are defaults for the [transformation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_poclutr.htm) to a transparent table).

Note

Table clusters and cluster tables should not be confused with [export/import tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexport_import_table_glosry.htm "Glossary Entry") tables used to add [data clusters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_cluster_glosry.htm "Glossary Entry").

Example

The cluster table DOKTL, which contains all documentation created in the transaction SE61, is a part of the table cluster DOKCLU in systems where no transformation to transparent tables has yet taken place.