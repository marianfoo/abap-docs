  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews.htm) →  [News for ABAP Release 4.xx](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-4.htm) →  [News for ABAP Release 4.6A](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-46a.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Internal%20Tables%20in%20ABAP%20Release%204.6A%2C%20ABENNEWS-46-INTERNAL-TABLES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

Internal Tables in ABAP Release 4.6A

In Release 4.6A, the following new features have been introduced in internal tables:

[1\. New Keys Specified in Unstructured Internal Tables](#!ABAP_MODIFICATION_1@1@)
[2\. References as Table Keys](#!ABAP_MODIFICATION_2@2@)
[3\. Strings as Table Keys](#!ABAP_MODIFICATION_3@3@)
[4\. Key Definition for Tables in ABAP Dictionary](#!ABAP_MODIFICATION_4@4@)
[5\. Default Key of Unstructured Tables](#!ABAP_MODIFICATION_5@5@)
[6\. Changes to the Internal Structure](#!ABAP_MODIFICATION_6@6@)
[7\. Sorting without Sort Key Specified](#!ABAP_MODIFICATION_7@7@)
[8\. Access to Read-Only Tables](#!ABAP_MODIFICATION_8@8@)
[9\. Index Ranges in Table Extensions](#!ABAP_MODIFICATION_9@9@)
[10\. IS REQUESTED with TABLES Parameter](#!ABAP_MODIFICATION_10@10@)
[11\. Tables as Attributes of Objects](#!ABAP_MODIFICATION_11@11@)
[12\. References as Line Type](#!ABAP_MODIFICATION_12@12@)
[13\. Multiple Identical Keys Specified](#!ABAP_MODIFICATION_13@13@)

Modification 1   

New Keys Specified in Unstructured Internal Tables

If the line type of an internal table does not have a structure, the [pseudo component](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpseudo_component_glosry.htm "Glossary Entry") table\_line can be used to specify or address the entire table line as the key. The previous form TABLE LINE is now obsolete. If a [structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_struc.htm) contains a component called table\_line, this produces a warning in the syntax check.

Modification 2   

References as Table Keys

References are now allowed as the key of an internal table.

Modification 3   

Strings as Table Keys

[Strings](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring.htm) are now allowed as the key of an internal table. This applies to all categories of tables.

Modification 4   

Key Definition for Tables in ABAP Dictionary

It is now possible to specify the table key explicitly for internal tables defined in ABAP Dictionary.

Modification 5   

Default Key of Unstructured Tables

The default key of an internal table without a line structure always consists of the whole line. An exception are tables of tables for which an empty key is defined.

Modification 6   

Changes to the Internal Structure

Previously, internal tables were represented at runtime using a structure 256 bytes long. This has now been replaced by a reference that is only 8 bytes long. This means that structures that contain tables as components or tables that include other tables can now be save much more efficiently. This is because tables without content now need only 8 bytes instead of 256 bytes. The benefits are particularly clear in thinly populated structures. Furthermore, the header of a filled table now only requires approximately half of the 256 bytes previously required (the actual figure depends on the platform).

In ABAP Dictionary, all structures containing a field of length 256 bytes intended to include a table header must be modified accordingly.

Modification 7   

Sorting without Sort Key Specified

Sorting an internal table with type >[STANDARD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_tabcat.htm) or [HASHED](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_tabcat.htm) using the statement [SORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsort_itab.htm) now returns a correct result, even if the sort key is not specified in the addition BY.

Modification 8   

Access to Read-Only Tables

If the statements [DELETE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_itab.htm), [INSERT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinsert_itab.htm), and [MODIFY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_itab.htm) are applied to read-only tables (for example, IMPORTING-REFERENCE parameters in function modules or READ-ONLY attributes of classes), the system returns a syntax error. This error used to produce a runtime error.

Modification 9   

Index Ranges in Table Extensions

The statements [INSERT LINES OF itab ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinsert_itab.htm) and [APPEND LINES OF  itab ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapappend.htm) return syntax errors if the source table has the type HASHED or ANY and the additions FROM and TO are used to specify an index range. This error used to produce a runtime error.

Modification 10   

IS REQUESTED with TABLES Parameter

If the predicate operator [IS REQUESTED](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogexp_requested.htm) is used with [TABLES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunction.htm) parameters in update modules, the syntax check produces a [warning](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwarning_glosry.htm "Glossary Entry"). These parameters are always supplied.

Modification 11   

Tables as Attributes of Objects

The statements [LOOP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab.htm), [READ](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table.htm), [SORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsort_itab.htm), [DELETE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_itab.htm), and [MODIFY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_itab.htm) now support access to the attributes of objects as the keys of internal tables.

If the line type of an internal table contains object reference variables from [ABAP Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_objects.htm) as components comp, the attributes attr of the object to which the reference points can be used as key values when reading, sorting, and changing the table. This is possible in the following statements:

LOOP AT itab ... WHERE comp->attr ...

READ TABLE itab ... WITH *\[*TABLE*\]* KEY comp->attr = ...

SORT itab BY comp->attr ...

DELETE itab WHERE comp->attr ...

MODIFY itab ... TRANSPORTING ... WHERE comp->attr ...

Modification 12   

References as Line Type

In the declarative statements [DATA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_itab.htm), [STATICS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapstatics.htm), and [TYPES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_itab.htm), object references and data references can be used as the line type of an internal table.

Modification 13   

Multiple Identical Keys Specified

Identical keys specified more than once in the statement [READ](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table.htm) produce a [warning](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwarning_glosry.htm "Glossary Entry").