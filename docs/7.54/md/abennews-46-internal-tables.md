  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews.htm) →  [Changes in Releases 4.xx](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-4.htm) →  [Changes in Release 4.6A](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-46a.htm) → 

Internal Tables in Release 4.6A

In Release 4.6A, the following new features have been introduced in internal tables:

[1\. New keys specified in unstructured internal tables](#!ABAP_MODIFICATION_1@1@)

[2\. References as table keys](#!ABAP_MODIFICATION_2@2@)

[3\. Strings as table keys](#!ABAP_MODIFICATION_3@3@)

[4\. Key definition for tables in ABAP Dictionary](#!ABAP_MODIFICATION_4@4@)

[5\. Keys of unstructured tables](#!ABAP_MODIFICATION_5@5@)

[6\. Changes to the internal structure](#!ABAP_MODIFICATION_6@6@)

[7\. Sorting without sort key specified](#!ABAP_MODIFICATION_7@7@)

[8\. Access to read-only tables](#!ABAP_MODIFICATION_8@8@)

[9\. Index ranges in table extensions](#!ABAP_MODIFICATION_9@9@)

[10\. IS REQUESTED with TABLES parameter](#!ABAP_MODIFICATION_10@10@)

[11\. Tables as attributes of objects](#!ABAP_MODIFICATION_11@11@)

[12\. References as row type](#!ABAP_MODIFICATION_12@12@)

[13\. Multiple identical keys specified](#!ABAP_MODIFICATION_13@13@)

Modification 1

New keys specified in unstructured internal tables

If the row type of an internal table does not have a structure, the [pseudo component](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpseudo_component_glosry.htm "Glossary Entry") table\_line can be used to specify or address the entire table row as the key. The previous form TABLE LINE is now obsolete. If a [structure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_struc.htm) contains a component called table\_line, this produces a warning in the syntax check.

Modification 2

References as table keys

References are now allowed as the key of an internal table.

Modification 3

Strings as table keys

[Strings](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring.htm) are now allowed as the key of an internal table. This applies to all categories of tables.

Modification 4

Key definition for tables in ABAP Dictionary

It is now possible to specify the table key explicitly for internal tables defined in ABAP Dictionary.

Modification 5

Default key of unstructured tables

The default key of an internal table without a row structure always consists of the whole row. An exception are tables of tables for which an empty key is defined.

Modification 6

Changes to the internal structure

Previously, internal tables were represented at runtime using a structure 256 bytes long. This has now been replaced by a reference that is only 8 bytes long. This means that structures that contain tables as components or tables that include other tables can now be save much more efficiently. This is because tables without content now need only 8 bytes instead of 256 bytes. The benefits are particularly clear in thinly populated structures. Furthermore, the header of a filled table now only requires approximately half of the 256 bytes previously required (the actual figure depends on the platform).

In ABAP Dictionary, all structures containing a field of length 256 bytes intended to include a table header must be modified accordingly.

Modification 7

Sorting without sort key specified

Sorting an internal table with type [STANDARD](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_tabkind.htm) or [HASHED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_tabkind.htm) using the statement [SORT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsort_itab.htm) now returns a correct result, even if the sort key is not specified in the addition BY.

Modification 8

Access to read-only tables

If the statements [DELETE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdelete_itab.htm), [INSERT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_itab.htm), and [MODIFY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_itab.htm) are applied to read-only tables (for example, IMPORTING-REFERENCE parameters in function modules or READ-ONLY attributes of classes), the system returns a syntax error. This error used to produce a runtime error.

Modification 9

Index ranges in table extensions

The statements [INSERT LINES OF itab ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_itab.htm) and [APPEND LINES OF  itab ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapappend.htm) return syntax errors if the source table has the type HASHED or ANY and the additions FROM and TO are used to specify an index range. This error used to produce a runtime error.

Modification 10

IS REQUESTED with TABLES parameter

If the relational operator [IS REQUESTED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_requested.htm) is used with [TABLES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction.htm) parameters in update modules, the syntax check produces a [warning](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwarning_glosry.htm "Glossary Entry"). These parameters are always supplied.

Modification 11

Tables as attributes of objects

The statements [LOOP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab.htm), [READ](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_table.htm), [SORT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsort_itab.htm), [DELETE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdelete_itab.htm), and [MODIFY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_itab.htm) now support access to the attributes of objects as the keys of internal tables.

If the row type of an internal table contains object reference variables from [ABAP Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_objects_oview.htm) as components comp, the attributes attr of the object to which the reference points can be used as key values when reading, sorting, and changing the table. This is possible in the following statements:

LOOP AT itab ... WHERE comp->attr ...

READ TABLE itab ... WITH *\[*TABLE*\]* KEY comp->attr = ...

SORT itab BY comp->attr ...

DELETE itab WHERE comp->attr ...

MODIFY itab ... TRANSPORTING ... WHERE comp->attr ...

Modification 12

References as row type

In the declarative statements [DATA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdata_itab.htm), [STATICS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapstatics.htm), and [TYPES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_itab.htm), object references and data references can be used as the row type of an internal table.

Modification 13

Multiple identical keys specified

Identical keys specified more than once in the statement [READ](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_table.htm) produce a [warning](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwarning_glosry.htm "Glossary Entry").