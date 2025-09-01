  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_classical_objects.htm) →  [Database Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables.htm) →  [Semantic Attributes of Database Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_sema.htm) →  [Table-Specific Semantic Attributes of Database Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_semasspec.htm) → 

Indexes in Database Tables

An index in a database table helps to speed up the selection of rows. An index is a sorted copy of selected database table fields. An additional field contains a pointer to the actual table rows. Sorting enables faster access to the rows in the table, for example in binary searches. A database table has at least one [primary index](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprimary_index_glosry.htm "Glossary Entry") defined by its key fields. It can also have one or more optional [secondary indexes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_index_glosry.htm "Glossary Entry").

-   [Primary Index](#@@ITOC@@ABENDDIC_DATABASE_TABLES_INDEX_1)

-   [Secondary Indexes](#@@ITOC@@ABENDDIC_DATABASE_TABLES_INDEX_2)

-   [Full Text Index](#@@ITOC@@ABENDDIC_DATABASE_TABLES_INDEX_3)

Primary Index

The primary index is a unique index constructed from the [key fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_key.htm) of the primary key. It is always created automatically in AS ABAP. A maximum of one record exists in the table for each combination of index fields. If the primary index cannot be used to identify the results set, for example because no field from the primary index was selected, the table is scanned in full or an attempt is made to use a suitable secondary index (if one exists).

Secondary Indexes

Alongside the primary index defined using the primary key, both unique and non-unique secondary indexes can be created for a database table. Creating secondary indexes usually improves the performance of database reads that evaluate the indexes of the database.

The secondary indexes of a database table consist of a series of table fields and are identified by an alphanumeric index ID with a maximum of three characters (letters or digits). The ID 0 is reserved for the primary index. Table fields with the built-in data types [STRING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) and [RAWSTRING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) must not be index fields. It is recommended that table fields with the data type [FLTP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) are not index fields.

The secondary indexes defined for a database table are created when the table itself is created in the database system. Furthermore, new secondary indexes can be added later in the same system. When further secondary indexes are added in other systems without making modifications, they are created as extension indexes. The following are recommended as namespaces for indexes added at a later time:

-   The IDs of indexes added to delivered tables by customers start with "Y" or "Z".

-   The IDs of indexes added to delivered tables by partners start with "J". There can be conflicts between the index names of different partners in follow-on systems.

-   The IDs of indexes added to other tables can have any names, but cannot start with "Y", "Z", or "J".

The name of an index on the database usually has the form DBTAB~ID, where DBTAB is the name of the database table and ID is the three-character ID. Other names can occur, however, and blanks can be padded using underscores.

Unlike the primary index, a secondary index does not have to be unique. In the case of unique indexes, the database table cannot contain multiple rows with the same values in the index fields. Any attempts to insert a row like this cancel processing in the database and raise an appropriate exception in ABAP. A unique index of a client-specific table must always contain the client field.

When the database is accessed, the optimizer of the database system checks whether a suitable index exists and uses it if appropriate. The index selected depends on the platform, which means it is possible in ABAP Dictionary to define to which database systems a non-unique secondary index is applied or not:

-   Index in all database systems

The index is created on every database.

-   In selected database systems

The database systems can be defined using a selection list or an exclusion list with up to four entries each.

-   No database index

The index is not created on any database. This setting makes it possible to delete existing secondary indexes from the database.

Unique secondary indexes are always created and can then no longer be deleted from the database. The [SQL Trace](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_trace_glosry.htm "Glossary Entry") function in the [Performance Trace](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenperformance_trace_glosry.htm "Glossary Entry") tool (transaction ST05) can be used to determine which index is being used by the database system to access data.

The value of an index for selecting data from a table depends on how well the data set selectable using the index represents the final set selected. Only those fields are useful in an index that make a significant restriction on the results set of a selection. If an index is constructed from multiple fields, it can also be used if only a few of these fields are specified in a selection condition. Here, the order of the fields in the index is an important factor in how quickly they can be accessed. The first fields must be those filled with constant values in a large number of selections. In selections, an index is useful only up until the first field not specified in the selection condition. Alternatively, an index field is generally used only when all index fields located in front of it are specified in the selection condition. The speed at which a field is accessed is not affected by whether or not an index is defined as unique.

Creating secondary indexes is beneficial in the following cases:

-   If table entries are to be selected based on fields that are not contained in an index, and the response times are very slow, a suitable secondary index should be created.

-   The field or fields of a secondary index are so selective that each index entry corresponds to a maximum of 5% of the total number of table entries.

-   The database table is accessed mainly to read entries. When accessing a table to modify entries, each additional index must also be updated.

-   If only those fields are read that also exist in the index, the data does not need to be accessed a second time after the index access. If only a very small number of fields are selected, there can be significant efficiency gains if these fields are included in an index in their entirety.

Secondary indexes can also place a load on the system, since they need to be adjusted each time the table content is modified. Each additional index slows down the insertion of rows in the table. Tables where new rows are often created should only have a small number of indexes. Too many indexes can also cause the database system optimizer to select the wrong index. To prevent this, the indexes in a table must be as disjoint as possible (meaning that they share as few fields as possible).

An index should only consist of a few fields; as a rule, no more than four. This is because the index has to be updated each time its fields are updated in a database operation. Fields that are suitable for indexes are:

-   Fields that are selected often and that have a high level of selectivity. The most selective fields should be placed at the beginning of the index.

-   A field should not be included in an index if its value is initial for most of the table entries.

-   If more than one index is used for a database table, they should not overlap.

No more than five indexes should be created for any one table because

-   Each index produces additional update costs.

-   The amount of data increases.

-   The optimizer of the database system is given too many selection options and becomes more error-prone.

An index can only support those selection conditions that describe the search value positively, such as \= or LIKE. The response times of conditions including <>, for example, are not improved by an index. The optimizer generally stops if the selection condition contains an OR. In other words, it does not evaluate the fields checked by OR when selecting and applying the index. An exception to this are OR relationships standing on their own. Therefore, conditions containing an OR join for one of the indexed fields should be reformulated if necessary.

Notes

-   The zero value in some database systems is ignored by the indexes, meaning that no index can be used when selecting by zero values.

-   If absolutely necessary, [database hints](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_hint_glosry.htm "Glossary Entry") can be specified in Open SQL using the addition [%\_HINTS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenosql_db_hints.htm) to adjust the database system optimizer when selecting a secondary index.

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

The [SAP HANA database](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhana_database_glosry.htm "Glossary Entry") supports a full text index as a secondary table index. A full text index is created as an additional invisible column on the database. The content of the column created for a full text index is saved to this additional column with appropriate formatting and is evaluated when the relevant data is accessed.

The following conditions apply:

-   A full text index can only be created for the SAP HANA database and for tables with the [storage type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_storage.htm) column store.

-   A full text index can only be created for precisely one column in a database table whose [built-in data type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) is CHAR, SHORTSTRING, STRING, or RAWSTRING.

-   The database table must have a column for the [text language](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_language_glosry.htm "Glossary Entry").

A full text index is always non-unique. Accesses that make use of the full text index are based on the SQL language element WHERE CONTAINS .... This is not yet supported by [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry"). [Native SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennative_sql_glosry.htm "Glossary Entry") or [AMDP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_glosry.htm "Glossary Entry") has to be used instead.

Note

For more information about the full text index, see the [SAP HANA Developer Guide](https://help.sap.com/viewer/4505d0bdaf4948449b7f7379d24d0f0d/2.0.00/en-us).