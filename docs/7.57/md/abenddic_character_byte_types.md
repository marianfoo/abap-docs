---
title: "DDIC - Character-Like Types and Byte-Like Types"
description: |
  -   Character Strings(#abenddic-character-byte-types-1-------byte-chains---@ITOC@@ABENDDIC_CHARACTER_BYTE_TYPES_2) -   Notes on Strings(#abenddic-character-byte-types-3-------use-in-abap-cds---@ITOC@@ABENDDIC_CHARACTER_BYTE_TYPES_4) -   Use in ABAP SQL(#abenddic-character-byte-types-5-------ha
version: "7.57"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_character_byte_types.htm"
abapFile: "abenddic_character_byte_types.htm"
keywords: ["select", "do", "if", "case", "try", "class", "data", "types", "internal-table", "abenddic", "character", "byte"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary.htm) →  [DDIC - Built-In Data Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types_intro.htm) →  [DDIC - Properties of the Built-In Dictionary Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types_prop.htm) →  [DDIC - General Dictionary Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types_general.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Character-Like Types and Byte-Like Types, ABENDDIC_CHARACTER_BYTE_TYPES, 757%0
D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Character-Like Types and Byte-Like Types

-   [Character Strings](#abenddic-character-byte-types-1-------byte-chains---@ITOC@@ABENDDIC_CHARACTER_BYTE_TYPES_2)
-   [Notes on Strings](#abenddic-character-byte-types-3-------use-in-abap-cds---@ITOC@@ABENDDIC_CHARACTER_BYTE_TYPES_4)
-   [Use in ABAP SQL](#abenddic-character-byte-types-5-------handling-in-dynpros---@ITOC@@ABENDDIC_CHARACTER_BYTE_TYPES_6)

Character Strings   

The following built-in data types in ABAP Dictionary are available for general character strings:

-   [CHAR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) for text fields
    
    The built-in type CHAR, mapped to the ABAP type c, is used to describe general text fields with a maximum length of 30000 characters (only 1333 characters for table fields, view fields, and fields of CDS entities).
    
-   [LCHR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) for long text fields
    
    The built-in type LCHR, also mapped to the ABAP type c, is used to describe general text fields with lengths between 256 and 32000 characters. In DDIC database tables, the maximum length must be specified as the value of a preceding INT2 or INT4 field. There can only be one table field of type LCHR or LRAW. It must not be a key field and it must be the last table field. It cannot be used in all positions of ABAP SQL statements.
    
-   [SSTRING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) for short text strings
    
    The built-in type SSTRING is mapped to the ABAP type string, but handled like the type CHAR or VARCHAR in ABAP Dictionary and by DDIC database tables. The length is restricted to a maximum of 1333, but table fields of this type can also be used as [key fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_key.htm) by DDIC database tables and used by ABAP SQL statements in almost all positions where text fields are possible.
    
-   [STRING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) for text strings
    
    The built-in type STRING is mapped to the ABAP type string and also handled like a text string ([CLOB](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclob_glosry.htm "Glossary Entry")) in ABAP Dictionary and by DDIC database tables. Table fields of this type cannot be used as [key fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_key.htm) or [index fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_index.htm) in DDIC database tables or in any positions in ABAP SQL statements. The possible length of a text string is unrestricted, but a maximum length of at least 256 can be specified to restrict its length when used for a table field of a DDIC database table, which is relevant for ABAP SQL access (see below).
    

Hints

-   In general [DDIC structures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_structures.htm), the length of a component of type CHAR is not restricted to 1333.
-   In DDIC database tables, there can be only one table field of the type LCHR and it must be the last table field. This means that the type LRAW cannot be used simultaneously in the same database table. If the statement [SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect.htm) is used to read an LCHR field, the preceding length field must also be read. In [writes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_writing.htm) using ABAP SQL, the length field must be given the correct value or data may be lost.
-   LCHR is no longer recommended for new developments. The type STRING is recommended instead, however it is also not suitable for [key fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_key.htm) of DDIC database tables or for unrestricted use in ABAP SQL. Where possible, SSTRING can be used here instead.
-   Switching existing dictionary objects from LCHR to STRING or SSTRING, on the other hand, can be critical, since all ABAP types and ABAP objects that reference dictionary objects like this are then given a [deep](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeep_glosry.htm "Glossary Entry") data type. A switch from a [flat](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenflat_glosry.htm "Glossary Entry") data type to a [deep](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeep_glosry.htm "Glossary Entry") data type usually constitutes an incompatible change and can produce syntax errors in ABAP programs.

Byte Chains   

The following built-in data types in ABAP Dictionary are available for general byte chains:

-   [RAW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) for byte fields
    
    The built-in type RAW, mapped to the ABAP type x, is used to describe byte fields with a maximum length of 32000 characters (only 255 characters for table fields).
    
-   [LRAW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) for long byte fields
    
    The built-in type LRAW, also mapped to the ABAP type x, is used to describe byte fields with lengths between 256 and 32000 characters. In DDIC database tables, the maximum length must be specified as the value of a preceding INT2 or INT4 field. There can only be one table field of type LRAW or LCHR. It must not be a key field and it must be the last table field. It cannot be used in all positions of ABAP SQL statements.
    
-   [RAWSTRING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) for byte strings
    
    The built-in type RAWSTRING is mapped to the ABAP type xstring and also handled like a byte string ([BLOB](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenblob_glosry.htm "Glossary Entry")) in ABAP Dictionary and by DDIC database tables. Table fields of this type cannot be used as [key fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_key.htm) or [index fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_index.htm) in DDIC database tables or in any positions in ABAP SQL statements. The possible length of a byte string is unrestricted, but a maximum length of 256 can be specified to restrict its length when used for a table field of a DDIC database table, which is relevant for ABAP SQL access (see below).
    

Hints

-   In general [DDIC structures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_structures.htm), the length of a component of type RAW is not restricted to 255.
-   In DDIC database tables, there can be only one table field of the type LRAW and it must be the last table field. This means that the type LCHR cannot be used simultaneously in the same database table. If the statement [SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect.htm) is used to read an LRAW field, the preceding length field must also be read. In [writes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_writing.htm) using ABAP SQL, the length field must be given the correct value or data may be lost.
-   LRAW is no longer recommended for new developments. The type RAWSTRING is recommended instead, however it is also not suitable for [key fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_key.htm) of DDIC database tables or for unrestricted use in ABAP SQL.
-   Switching existing dictionary objects from LRAW to RAWSTRING, on the other hand, can be critical, since all ABAP types and ABAP objects that reference dictionary objects like this are then given a [deep](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeep_glosry.htm "Glossary Entry") data type. A switch from a [flat](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenflat_glosry.htm "Glossary Entry") data type to a [deep](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeep_glosry.htm "Glossary Entry") data type usually constitutes an incompatible change and can produce syntax errors in ABAP programs.

Notes on Strings   

The following points must be remembered when using built-in data types for text strings or byte strings:

-   The types STRING and RAWSTRING for [LOBs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlob_glosry.htm "Glossary Entry") have a variable length. A maximum length can be specified, but there is no upper limit. If a maximum length is specified, this represents the actual restriction if used for a table field of a DDIC database table.
-   The type SSTRING also has a variable length, but this is restricted upwards by the maximum length that can be specified. The greatest maximum length is 1333. The benefit of using SSTRING, and not CHAR, is that it is assigned to the ABAP type string. Its advantage over STRING is that it can also be used for key fields in databases and in any places in ABAP SQL in which the type CHAR is also possible.
-   The maximum possible length for the types STRING and RAWSTRING and the mandatory maximum length for SSTRING must not be exceeded in [writes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_writing.htm) performed on database fields of these types using ABAP SQL. If it is exceeded, an exception of the class CX\_SY\_OPEN\_SQL\_DB is raised. Truncations of strings when read to a target field, however, are ignored.
-   In ABAP programs, maximum lengths defined in ABAP Dictionary for the types STRING, RAWSTRING, and SSTRING are ignored by the assigned ABAP types string and xstring. As a result, writing a string that is too long to a database can raise an exception. If required, the ABAP program itself must handle the length restrictions on strings.
-   The maximum length of data types based on STRING, RAWSTRING, and SSTRING can be identified in an ABAP program using the built-in function [dbmaxlen](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlength_functions.htm).
-   Trailing blanks are saved in table fields of the type STRING but not in table fields of the type SSTRING. This is particularly significant when short strings are used as key fields of database fields, since trailing blanks cannot be used as distinguishing characteristics here.
-   [LOBs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlob_glosry.htm "Glossary Entry") of the types STRING and RAWSTRING are usually handled as [deep](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeep_glosry.htm "Glossary Entry") data objects in which only one LOB locator is saved within the data record. This locator references the actual string data. Database fields of the type SSTRING are usually saved as [flat](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenflat_glosry.htm "Glossary Entry") fields. An empty long string can also be saved using the [null value](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennull_value_glosry.htm "Glossary Entry"). The actual handling, however, depends on the individual database system and is not important for ABAP programs.
-   If a [work area](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_wa.htm) or an internal table is used to access table fields of the types SSTRING, STRING, or RAWSTRING in ABAP SQL, the work area or the line type of the internal table must be compatible with the database structure.
-   If DDIC structures, DDIC database tables, or DDIC views that have strings as components are used for typings in ABAP, it must be remembered that these objects are [deep structures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeep_structure_glosry.htm "Glossary Entry"). This means, for example, that they cannot be used in the [TABLES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptables.htm) statement (obsolete for database accesses) or for typing the obsolete [table parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_parameter_glosry.htm "Glossary Entry") of procedures.
-   Access may be slower for long strings (LOBs) in DDIC database tables than for other data types. If not all data is needed at once (and to bypass any memory limits on the AS instance), [streaming](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_streaming.htm) and [locators](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlocators.htm) can be used to access long strings.

Use in ABAP CDS   

The following restrictions apply in [CDS DDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_ddl_glosry.htm "Glossary Entry") with respect to character-like types and byte-like types:

-   The data types STRING and RAWSTRING plus LCHR and LRAW cannot be used in the following cases:
    -   In the SELECT list if the addition DISTINCT is specified ([CDS view entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_statement_v2.htm), [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_statement_v1.htm))
    -   In CAST expressions ([CDS view entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cast_expression_v2.htm), [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cast_expression_v1.htm))
    -   In comparison expressions cds\_cond ( [CDS view entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conditional_expression_v2.htm), [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conditional_expression_v1.htm))
    -   In string functions ([CDS view entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm), [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v1.htm))
    -   In CASE expressions ([CDS view entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_case_expression_v2.htm), [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_case_expression_v1.htm))
    -   In aggregate expressions ([CDS view entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_aggregate_functions_v2.htm), [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_aggregate_functions_v1.htm))
    -   For columns merged using UNION (currently only available in [CDS DDIC-based views (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_union_v1.htm))
    -   After GROUP BY ([CDS view entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_group_by_v2.htm), [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_group_by_v1.htm))
    -   After SIBLINGS ORDER BY in the statement [DEFINE HIERARCHY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_hierarchy.htm)
-   The data types LCHR and LRAW cannot be used in the following case:
    -   For [typings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_typing.htm)
-   The data type RAW can only be used in a small number of operand positions.

Hint

The obsolete data type VARC cannot be used in ABAP CDS.

Use in ABAP SQL   

The following restrictions apply when accessing database fields with character-like and byte-like types in ABAP SQL:

-   There are no access restrictions to database fields with the data types CHAR and RAW in ABAP SQL.
-   Database fields with the data types STRING and RAWSTRING plus LCHR and LRAW cannot be used in the following operand positions:
    -   As arguments of [aggregate functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_aggregate.htm) and [SQL expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsql_expr.htm)
    -   In the [SELECT list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_list.htm) when the addition [DISTINCT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_clause.htm) is used
    -   In the [SELECT list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_list.htm) when the addition [FOR ALL ENTRIES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwhere_all_entries.htm) is used In the [strict mode from Release 7.40, SP05](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_strictmode_740_sp05.htm), this produces a syntax error. Otherwise, the extended program check produces a syntax warning that can be hidden by a pragma.
    -   In [SQL conditions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenasql_cond.htm) except [IS *\[*NOT*\]* NULL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwhere_logexp_null.htm).
    -   In the [GROUP BY clause](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapgroupby_clause.htm)
    -   In the [ORDER BY clause](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaporderby_clause.htm)
    -   After [SIBLINGS ORDER BY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_hierarchy_generator.htm) in the [hierarchy generator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhierarchy_generator_glosry.htm "Glossary Entry")
-   The data type SSTRING can be used without restrictions, except in the [coalesce](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_coalesce.htm) function and in [CASE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_case.htm) expressions.

Hint

The same restrictions apply to the obsolete data type VARC as to STRING and RAWSTRING plus LCHR and LRAW.

Handling in Dynpros   

When a field with character-like dictionary type is used from a [dynpro](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_glosry.htm "Glossary Entry"), lowercase letters are transformed to uppercase letters by default. This behavior can be overridden in Screen Painter. Furthermore, [lowercase letters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_domains_sema.htm) can be preserved for data elements in the semantic properties of a domain.