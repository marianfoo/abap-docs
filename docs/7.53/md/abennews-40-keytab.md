  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 4.xx](javascript:call_link\('abennews-4.htm'\)) →  [Changes in Release 4.0](javascript:call_link\('abennews-40.htm'\)) → 

Internal Tables and Key Tables in Release 4.0

The following features of internal tables have been improved considerably in Release 4.0:

-   Performance improvements, particularly for large tables. This has been achieved by introducing [hashed tables](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry"), whose access time is constant, mostly regardless of the number of table entries.
    

-   Introduction of sorted tables. This has removed the need for complex program code, whose tasks are now performed in the kernel.
    

-   Support for generic programming by introducing generic table types.

The term [standard key](javascript:call_link\('abenstandard_key_glosry.htm'\) "Glossary Entry") has been expanded to include a user-defined key. In addition to the previous form of internal tables (standard tables), SAP has introduced new table types for [sorted](javascript:call_link\('abensorted_table_glosry.htm'\) "Glossary Entry") and hashed tables. The key of these tables is an integral part of the type definition. For this reason, tables with these types are also generically known as key tables. For further information, see [internal tables](javascript:call_link\('abenitab.htm'\)).

New Table Types: STANDARD TABLE, SORTED TABLE, and HASHED TABLE

Internal tables in their old form are now known as standard tables. The old type TABLE has now been replaced by STANDARD TABLE. The new types SORTED TABLE and HASHED TABLE have been introduced.
Sorted tables are always stored sorted by their table key in ascending order. The access time is logarithmically related to the number of table entries.
[Hashed tables](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry") are managed internally using a hash procedure. The access time to a single table entry is essentially constant, that is, the access time is independent of the number of entries.
This means that a complete table type is defined as follows:
1\. Table category (STANDARD TABLE, SORTED TABLE, HASHED TABLE)
2\. Row type
3\. Key (the order is part of the type definition)
4\. Uniqueness attribute (UNIQUE, NON-UNIQUE)
For further information about defining table types and objects, see the documentation for the statements [TYPES](javascript:call_link\('abaptypes_itab.htm'\)) and [DATA](javascript:call_link\('abapdata_itab.htm'\)).

Generic Table Types: INDEX TABLE and ANY TABLE

To allow generic programming, there is a [hierarchy](javascript:call_link\('abaptypes_tabkind.htm'\)) based on the basic internal table types listed above. The generic type INDEX TABLE includes standard and sorted tables. The type ANY TABLE can be used for any table.
Furthermore, further generic types can be defined by omitting the row type, key, or uniqueness attribute of a table (see [TYPES](javascript:call_link\('abaptypes_itab.htm'\))). This enables the types of parameters to be defined in generic [procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry").

Typing of Procedure Parameters

Since the old internal table type corresponds to the new standard table, only standard tables can be passed to a TABLES parameter. The new tables types can be passed to [FORM](javascript:call_link\('abapform.htm'\)) and [FUNCTION](javascript:call_link\('abapfunction.htm'\)) parameters using the additions USING or CHANGING or the additions IMPORTING, EXPORTING, and CHANGING.

New Table Operations

Entries in key tables are located using their key. This means that it must also be possible to add, modify, and delete table entries using the appropriate table key. The following new table operations have therefore been introduced:

-   [INSERT](javascript:call_link\('abapinsert_itab.htm'\)) ... INTO TABLE ...

-   [MODIFY](javascript:call_link\('abapmodify_itab.htm'\)) TABLE ...

-   [READ](javascript:call_link\('abapread_table.htm'\))   TABLE ... *\[*FROM ... *|*WITH TABLEKEY ...*\]*

-   [DELETE](javascript:call_link\('abapdelete_itab.htm'\)) TABLE ... *\[*FROM ... *|*WITH TABLE KEY ...*\]*

The new operations are valid for all table categories and are, in this respect, generic (for details of the semantics, refer to the corresponding keyword documentation). In each of the statements, the key can be specified using a work area, either explicit or implicit (table with [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry")). The key values are then taken from the work area. In the statements READ and DELETE, the key can be specified explicitly in the form
... WITH TABLE KEY k1 = v1 ... kn = vn
Unlike the previous form of the READ statement, "WITH KEY k1 = v1 ... kn = vn", the new form must specify the key in full. This is tested within the syntax check.
The syntax of the new operations has been modeled as far as possible on the existing statements for reading, inserting, modifying and deleting table entries. Note the following rules of thumb:

-   In the new operations, the word TABLE comes directly before the table name itself

-   Use the addition WITH TABLE KEY to specify the key explicitly

Integration of the New Table Types

The new table types can be used both in the new table operations listed above and in existing ABAP statements. This means that the following statements can also be used on key tables:

-   [LOOP](javascript:call_link\('abaploop_at_itab.htm'\))

-   [AT](javascript:call_link\('abapat_itab.htm'\))

-   [COLLECT](javascript:call_link\('abapcollect.htm'\))

-   [EXPORT](javascript:call_link\('abapexport_data_cluster.htm'\))

-   [IF](javascript:call_link\('abapif.htm'\))

-   [IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\))

-   [destination = source](javascript:call_link\('abapmove.htm'\))

-   [SELECT](javascript:call_link\('abapselect.htm'\))

-   [SORT](javascript:call_link\('abapsort_itab.htm'\))