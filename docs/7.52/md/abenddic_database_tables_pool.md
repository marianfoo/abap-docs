  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_classical_objects.htm) →  [Database Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables.htm) →  [Pooled Tables and Cluster Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_poolclu.htm) → 

Pooled Tables in Table Pools

Pooled tables are a special category of database table in ABAP Dictionary. They are defined by being saved in table pools rather than being defined as pooled tables on the database.

-   [Table Pools](#@@ITOC@@ABENDDIC_DATABASE_TABLES_POOL_1)

-   [Pooled Tables](#@@ITOC@@ABENDDIC_DATABASE_TABLES_POOL_2)

Table Pools

A table pool is defined as a database table on the database. It contains all rows of the pooled tables assigned to it. A table pool has the following table fields for this:

-   Key field TABNAME with the type CHAR of length 10 for the name of a pooled table

-   Key field VARKEY with the type CHAR with a maximum length of 110 for the values (chained as a character string) of the key fields of a row of the pooled table specified in TABNAME

-   Field DATALN with the type INT2 for the length of the string in VARDATA

-   Field VARDATA with the type RAW for the non-key fields (compressed in a byte chain) of the row specified by the key in VARKEY of the pooled table specified in TABNAME

The name of a table pool can have a maximum of ten characters. The configurable technical attributes of a database table are the [size category](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_siz_cat.htm) and the [activation type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_act_type.htm). All other technical attributes are fixed.

Once it is activated in ABAP Dictionary, a table pool must be created explicitly on the database using the Database Utility tool. A table pool that already contains data can no longer be modified or deleted.

Example

In systems where no transformation to transparent tables has taken place, the table pool ATAB contains pooled tables from the ABAP runtime environment.

Pooled Tables

All key fields of a pooled table must have a flat character-like data type. The total length of all key fields or the total length of all non-key fields of a pooled table cannot be greater than the length of the VARKEY or VARDATA field of the associated table pool. A pooled table cannot have any fields of the obsolete built-in types DF16\_SCL and DF34\_SCL. The name of a table field can have a maximum of 10 characters, which is also important when including structures as [include structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_include_structure.htm).

Before a pooled table is created, a suitable transparent table with a suitable [delivery class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_delivery.htm) must be created and transformed to a pooled table. This assigns the pooled table to a table pool.

No secondary indexes can be created for a pooled table. The same [technical settings](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_tech.htm) can be made as in a transparent table, but these are ignored (they are defaults for the [transformation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_poclutr.htm) to a transparent table).

Note

A pooled table can be flagged as transparent in its technical settings, which is a simple way of transforming it to a transparent table.

Note

In systems where no transformation to transparent tables has taken place, the table PVERI\_CLNT is a pooled table in the table pool ATAB.