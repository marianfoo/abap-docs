  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews.htm) →  [News for ABAP Release 4.xx](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-4.htm) →  [News for ABAP Release 4.0](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-40.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Internal%20Tables%20in%20ABAP%20Release%204.0%2C%20ABENNEWS-40-KEYTAB%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Internal Tables in ABAP Release 4.0

The following features of internal tables have been improved considerably in ABAP release 4.0:

-   Performance improvements, particularly for large tables. This has been achieved by introducing [hashed tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhashed_table_glosry.htm "Glossary Entry"), whose access time is constant, mostly regardless of the number of table entries.
-   Introduction of [sorted tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensorted_table_glosry.htm "Glossary Entry"). This has removed the need for complex program code, whose tasks are now performed in the kernel.
-   Support for generic programming by introducing generic table types.

The term [standard key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstandard_key_glosry.htm "Glossary Entry") has been expanded to include a user-defined key. In addition to the previous form of internal tables (standard tables), SAP has introduced new table types for [sorted](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensorted_table_glosry.htm "Glossary Entry") and hashed tables. The key of these tables is an integral part of the type definition. For this reason, tables with these types are also generically known as key tables. For further information, see [internal tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab.htm).

[1\. New Table Types: STANDARD TABLE, SORTED TABLE, and HASHED TABLE](#!ABAP_MODIFICATION_1@1@)
[2\. Generic Table Types: INDEX TABLE and ANY TABLE](#!ABAP_MODIFICATION_2@2@)
[3\. Typing of Procedure Parameters](#!ABAP_MODIFICATION_3@3@)
[4\. New Table Operations](#!ABAP_MODIFICATION_4@4@)
[5\. Integration of the New Table Types](#!ABAP_MODIFICATION_5@5@)

Modification 1   

New Table Types: STANDARD TABLE, SORTED TABLE, and HASHED TABLE

Internal tables in their old form are now known as [standard tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstandard_table_glosry.htm "Glossary Entry"). The old type TABLE has now been replaced by STANDARD TABLE. The new types SORTED TABLE and HASHED TABLE have been introduced.

[Sorted tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensorted_table_glosry.htm "Glossary Entry") are always stored sorted by their table key in ascending order. The access time is logarithmically related to the number of table entries.

[Hashed tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhashed_table_glosry.htm "Glossary Entry") are managed internally using a hash procedure. The access time to a single table entry is essentially constant, that is, the access time is independent of the number of entries.

This means that a complete table type is defined as follows:

1.  Table category (STANDARD TABLE, SORTED TABLE, HASHED TABLE)
2.  Line type
3.  Key (the order is part of the type definition)
4.  Uniqueness attribute (UNIQUE, NON-UNIQUE)

For further information about defining table types and objects, see the documentation for the statements [TYPES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_itab.htm) and [DATA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_itab.htm).

Modification 2   

Generic Table Types: INDEX TABLE and ANY TABLE

To allow generic programming, there is a [hierarchy](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_tabcat.htm) based on the basic internal table types listed above. The generic type INDEX TABLE includes standard and sorted tables. The type ANY TABLE can be used for any table.

Further generic types can be defined by omitting the line type, key, or uniqueness attribute of a table (see [TYPES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_itab.htm)). This enables the types of parameters to be defined in generic [procedures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprocedure_glosry.htm "Glossary Entry").

Modification 3   

Typing of Procedure Parameters

Since the old internal table type corresponds to the new standard table, only standard tables can be passed to a TABLES parameter. The new tables types can be passed to [FORM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapform.htm) and [FUNCTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfunction.htm) parameters using the additions USING or CHANGING or the additions IMPORTING, EXPORTING, and CHANGING.

Modification 4   

New Table Operations

Entries in key tables are located using their key. This means that it must also be possible to add, modify, and delete table entries using the appropriate table key. The following new table operations have therefore been introduced:

-   [INSERT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinsert_itab.htm) ... INTO TABLE ...
-   [MODIFY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_itab.htm) TABLE ...
-   [READ](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table.htm)   TABLE ... *\[*FROM ... *|*WITH TABLEKEY ...*\]*
-   [DELETE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_itab.htm) TABLE ... *\[*FROM ... *|*WITH TABLE KEY ...*\]*

The new operations are valid for all table categories and are, in this respect, generic (for details of the semantics, refer to the corresponding keyword documentation). In each of the statements, the key can be specified using a work area, either explicit or implicit (table with [header line](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenheader_line_glosry.htm "Glossary Entry")). The key values are then taken from the work area. In the statements READ and DELETE, the key can be specified explicitly as follows:

... WITH TABLE KEY k1 = v1 ... kn = vn

Unlike the previous form of the READ statement, "WITH KEY k1 = v1 ... kn = vn", the new form must specify the key in full. This is tested within the syntax check.

The syntax of the new operations has been modeled as far as possible on the existing statements for reading, inserting, modifying and deleting table entries. Note the following rules of thumb:

-   In the new operations, the word TABLE comes directly before the table name itself
-   The addition WITH TABLE KEY is used to specify the key explicitly

Modification 5   

Integration of the New Table Types

The new table types can be used both in the new table operations listed above and in existing ABAP statements. This means that the following statements can also be used on key tables:

-   [LOOP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab.htm)
-   [AT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapat_itab.htm)
-   [COLLECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcollect.htm)
-   [EXPORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexport_data_cluster.htm)
-   [IF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapif.htm)
-   [IMPORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapimport_data_cluster.htm)
-   [destination = source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmove.htm)
-   [SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect.htm)
-   [SORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsort_itab.htm)