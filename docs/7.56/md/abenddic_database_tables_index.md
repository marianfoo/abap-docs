---
title: "DDIC - Indexes in Database Tables"
description: |
  An index in a DDIC database table helps to speed up the selection of rows. An index is a sorted copy of selected DDIC database table fields. An additional field contains a pointer to the actual table lines. Sorting enables faster access to the lines in the table, for example in binary searches. A DD
version: "7.56"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_index.htm"
abapFile: "abenddic_database_tables_index.htm"
keywords: ["select", "insert", "update", "delete", "do", "if", "case", "try", "data", "types", "abenddic", "database", "tables", "index"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables.htm) →  [DDIC - Semantic Attributes of Database Tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_sema.htm) →  [DDIC - Table-Dependent Semantic Attributes of Database Tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_semasspec.htm) → 

DDIC - Indexes in Database Tables

An index in a DDIC database table helps to speed up the selection of rows. An index is a sorted copy of selected DDIC database table fields. An additional field contains a pointer to the actual table lines. Sorting enables faster access to the lines in the table, for example in binary searches. A DDIC database table has at least one [primary index](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprimary_index_glosry.htm "Glossary Entry") defined by its key fields. It can also have one or more optional [secondary indexes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensecondary_index_glosry.htm "Glossary Entry").

-   [Primary Index](#abenddic-database-tables-index-1-------secondary-indexes---@ITOC@@ABENDDIC_DATABASE_TABLES_INDEX_2)
-   [Full Text Index](#@@ITOC@@ABENDDIC_DATABASE_TABLES_INDEX_3)

Primary Index

The primary index is a unique index constructed from the [key fields](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_key.htm) of the primary key. It is always created automatically in AS ABAP. A maximum of one record exists in the table for each combination of index fields. If the primary index cannot be used to identify the result set, for example because no field from the primary index was selected, the table is scanned completely or an attempt is made to use a suitable secondary index (if one exists).

Secondary Indexes

In addition to the primary index defined using the primary key, both unique and non-unique secondary indexes can be created for a DDIC database table. Creating secondary indexes usually improves the performance of database reads that evaluate the indexes of the database.

The secondary indexes of a database table consist of a series of table fields and are identified by an alphanumeric index ID with a maximum of three characters (letters or digits). The ID 0 is reserved for the primary index. Table fields with the built-in data types [STRING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [RAWSTRING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), and GEOM\_EWKB must not be index fields. It is recommended that table fields with the data type [FLTP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm) are not index fields.

The secondary indexes defined for a DDIC database table are created when the table itself is created in the database system. Furthermore, new secondary indexes can be added later in the same system. When further secondary indexes are added in other systems without making modifications, they are created as extension indexes. The following are recommended as namespaces for subsequently added indexes.

-   The IDs of indexes added to delivered tables by customers start with "Y" or "Z".
-   The IDs of indexes added to delivered tables by partners start with "J". There can be conflicts between the index names of different partners in follow-on systems.
-   The IDs of indexes added to other tables can have any names, but cannot start with "Y", "Z", or "J".

The name of an index on the database usually has the form DBTAB~ID, where DBTAB is the name of the DDIC database table and ID is the three-character ID. Other names can occur, however, and blanks can be padded using underscores.

Unlike the primary index, a secondary index does not have to be unique. In the case of unique indexes, the DDIC database table cannot contain multiple rows with the same values in the index fields. Any attempts to insert a row like this terminate processing in the database and raise an appropriate exception in ABAP. A unique index of a client-dependent table must always contain the client field.

When the database is accessed, the optimizer of the database system checks whether a suitable index exists and uses it if necessary. The index selected is platform-dependent, which means it is possible in ABAP Dictionary to define to which database systems a non-unique secondary index is applied or not:

-   Index in all database systems
    
    The index is created on every database.
    
-   In selected database systems
    
    The database systems can be defined using a selection list or an exclusion list with up to four entries each.
    
-   No database index
    
    The index should not be created on any database. This setting makes it possible to delete existing secondary indexes from the database.
    

These settings are ignored by the evaluation of the secondary index in the [table buffer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_buffer_glosry.htm "Glossary Entry"). Secondary indexes defined in the ABAP Dictionary are always evaluated if the [buffering type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuffer_type.htm) is set accordingly.

Unique secondary indexes are always created and can then no longer be deleted from the database. The [SQL Trace](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_trace_glosry.htm "Glossary Entry") function in the [Performance Trace](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenperformance_trace_glosry.htm "Glossary Entry") tool (transaction ST05) can be used to determine which index is used by the database system to access data.

How well an index supports data selection from a table depends on the extent to which the data set is selectable using the index represents the final set selected. Only those fields are useful in an index that make a significant restriction on the result set of a selection. If an index is constructed of multiple fields, it can also be used if only a few of these fields are specified in a selection condition. Here, the order of the fields in the index is an important factor in how quickly they can be accessed. The first fields must be those filled with constant values for many selections. In selections, an index is useful only up to the first field not specified in the selection condition. Alternatively, an index field is generally used only when all index fields located in front of it are specified in the selection condition. The speed at which a field is accessed depends on whether an index is defined as unique or not.

Creating secondary indexes is beneficial in the following cases:

-   If table entries are to be selected based on fields that are not contained in an index, and the response times are very slow, a suitable secondary index should be created.
-   The field or fields of a secondary index should be so selective that each index entry corresponds to a maximum of 5% of the total number of table entries.
-   The DDIC database table is accessed mainly to read entries. When accessing a table to modify entries, each additional index must also be updated.
-   If only those fields are read that also exist in the index, the data does not need to be accessed a second time after the index access. If only a very small number of fields are selected, there can be significant efficiency gains if these fields are included completely in an index.

Secondary indexes can also place a load on the system, since they need to be adjusted each time the table content is modified. Each additional index slows down the insertion of rows in the table. Tables where new rows are often created should only have a small number of indexes. Too many indexes can also cause the database system optimizer to select the wrong index. To prevent this, the indexes in a table must be as disjoint as possible, that is, share as few fields as possible.

An index should only consist of a few fields, generally no more than four. This is because the index must be updated each time its fields are updated in a database operation. Fields that are suitable for indexes are:

-   Fields that are selected often and that have a high level of selectivity. The most selective fields should be placed at the beginning of the index.
-   An index should not be created for weakly populated fields whose field value is initial for most records of the table.
-   If more than one index is used for a DDIC database table, they should not overlap.

No more than five indexes should be created for any one table because

-   Each index produces additional update costs.
-   The amount of data increases.
-   The optimizer of the database system is given too many selection options and becomes more error-prone.

An index can only support conditions that describe the search value positively, such as \= or LIKE. The response times of conditions including <>, for example, are not improved by an index. The optimizer generally stops if the condition contains an OR. In other words, it does not evaluate the fields checked by OR when selecting and applying the index. An exception to this are OR relationships that are located on the outside. Therefore, conditions containing an OR join for one of the indexed fields should be reformulated if necessary.

Hints

-   The zero value in some database systems is ignored by the indexes, meaning that no index can be used when selecting by zero values.
-   If absolutely necessary, [database hints](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_hint_glosry.htm "Glossary Entry") can be specified in ABAP SQL using the addition [%\_HINTS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_db_hints.htm) to adjust the database system optimizer when selecting a secondary index.

Example

The optimizer stops working when it encounters OR in the following SELECT statement:

SELECT \* FROM spfli
         WHERE carrid = 'LH' AND
              ( CITYFROM = 'FRANKFURT' OR  cityfrom = 'NEW YORK' ).

When replaced by the equivalent statement (below), the entire condition can be optimized with respect to the existing indexes:

SELECT \*
       FROM spfli
       WHERE ( carrid = 'LH' AND cityfrom = 'FRANKFURT' ) OR
             ( carrid = 'LH' AND cityfrom = 'NEW YORK' ).

Full Text Index

The [SAP HANA database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhana_database_glosry.htm "Glossary Entry") supports a full text index as a secondary table index. A full text index is created as an additional invisible column on the database. The content of the column created for a full text index is saved to this additional column with appropriate formatting and is evaluated when the relevant data is accessed.

The following conditions apply:

-   A full text index can only be created for the SAP HANA database and for tables with the [storage type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_storage.htm) column store.
-   A full text index can only be created for exactly one column in a DDIC database table whose [built-in data type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm) is CHAR, SSTRING, STRING, or RAWSTRING.
-   The DDIC database table must have a column for the [text language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentext_language_glosry.htm "Glossary Entry").

A full text index is always non-unique. Accesses that make use of the full text index are based on the SQL language element WHERE CONTAINS .... This is not yet supported by [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_glosry.htm "Glossary Entry"). [Native SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennative_sql_glosry.htm "Glossary Entry") or [AMDP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_glosry.htm "Glossary Entry") must be used instead.

Hints

-   For more information about the full text index, see the [SAP HANA Developer Guide](https://help.sap.com/viewer/4505d0bdaf4948449b7f7379d24d0f0d/2.0.04/en-US/1547c14105be409ebfc3a9e9634a7188.html) .
-   A full text index is not possible in the [SAP HANA Cloud database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensap_hana_cloud_db_glosry.htm "Glossary Entry").