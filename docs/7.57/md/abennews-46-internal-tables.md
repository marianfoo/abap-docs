  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 4.xx](javascript:call_link\('abennews-4.htm'\)) →  [News for Release 4.6A](javascript:call_link\('abennews-46a.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Internal Tables in Release 4.6A, ABENNEWS-46-INTERNAL-TABLES, 757%0D%0A%0D%0AError:%0
D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Internal Tables in Release 4.6A

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

If the line type of an internal table does not have a structure, the [pseudo component](javascript:call_link\('abenpseudo_component_glosry.htm'\) "Glossary Entry") table\_line can be used to specify or address the entire table line as the key. The previous form TABLE LINE is now obsolete. If a [structure](javascript:call_link\('abaptypes_struc.htm'\)) contains a component called table\_line, this produces a warning in the syntax check.

Modification 2   

References as Table Keys

References are now allowed as the key of an internal table.

Modification 3   

Strings as Table Keys

[Strings](javascript:call_link\('abenstring.htm'\)) are now allowed as the key of an internal table. This applies to all categories of tables.

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

Sorting an internal table with type >[STANDARD](javascript:call_link\('abaptypes_tabcat.htm'\)) or [HASHED](javascript:call_link\('abaptypes_tabcat.htm'\)) using the statement [SORT](javascript:call_link\('abapsort_itab.htm'\)) now returns a correct result, even if the sort key is not specified in the addition BY.

Modification 8   

Access to Read-Only Tables

If the statements [DELETE](javascript:call_link\('abapdelete_itab.htm'\)), [INSERT](javascript:call_link\('abapinsert_itab.htm'\)), and [MODIFY](javascript:call_link\('abapmodify_itab.htm'\)) are applied to read-only tables (for example, IMPORTING-REFERENCE parameters in function modules or READ-ONLY attributes of classes), the system returns a syntax error. This error used to produce a runtime error.

Modification 9   

Index Ranges in Table Extensions

The statements [INSERT LINES OF itab ...](javascript:call_link\('abapinsert_itab.htm'\)) and [APPEND LINES OF  itab ...](javascript:call_link\('abapappend.htm'\)) return syntax errors if the source table has the type HASHED or ANY and the additions FROM and TO are used to specify an index range. This error used to produce a runtime error.

Modification 10   

IS REQUESTED with TABLES Parameter

If the predicate operator [IS REQUESTED](javascript:call_link\('abenlogexp_requested.htm'\)) is used with [TABLES](javascript:call_link\('abenfunction.htm'\)) parameters in update modules, the syntax check produces a [warning](javascript:call_link\('abenwarning_glosry.htm'\) "Glossary Entry"). These parameters are always supplied.

Modification 11   

Tables as Attributes of Objects

The statements [LOOP](javascript:call_link\('abaploop_at_itab.htm'\)), [READ](javascript:call_link\('abapread_table.htm'\)), [SORT](javascript:call_link\('abapsort_itab.htm'\)), [DELETE](javascript:call_link\('abapdelete_itab.htm'\)), and [MODIFY](javascript:call_link\('abapmodify_itab.htm'\)) now support access to the attributes of objects as the keys of internal tables.

If the line type of an internal table contains object reference variables from [ABAP Objects](javascript:call_link\('abenabap_objects_oview.htm'\)) as components comp, the attributes attr of the object to which the reference points can be used as key values when reading, sorting, and changing the table. This is possible in the following statements:

LOOP AT itab ... WHERE comp->attr ...

READ TABLE itab ... WITH *\[*TABLE*\]* KEY comp->attr = ...

SORT itab BY comp->attr ...

DELETE itab WHERE comp->attr ...

MODIFY itab ... TRANSPORTING ... WHERE comp->attr ...

Modification 12   

References as Line Type

In the declarative statements [DATA](javascript:call_link\('abapdata_itab.htm'\)), [STATICS](javascript:call_link\('abapstatics.htm'\)), and [TYPES](javascript:call_link\('abaptypes_itab.htm'\)), object references and data references can be used as the line type of an internal table.

Modification 13   

Multiple Identical Keys Specified

Identical keys specified more than once in the statement [READ](javascript:call_link\('abapread_table.htm'\)) produce a [warning](javascript:call_link\('abenwarning_glosry.htm'\) "Glossary Entry").