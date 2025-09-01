  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Built-In Data Types in ABAP Dictionary](javascript:call_link\('abenddic_builtin_types_intro.htm'\)) →  [Attributes of the Built-In Dictionary Types](javascript:call_link\('abenddic_builtin_types_prop.htm'\)) →  [General Dictionary Types](javascript:call_link\('abenddic_builtin_types_general.htm'\)) → 

Character-Like Types and Byte-Like Types

-   [Character Strings](#abenddic-character-byte-types-1--------byte-chains---@ITOC@@ABENDDIC_CHARACTER_BYTE_TYPES_2)

-   [Notes on Strings](#abenddic-character-byte-types-3--------use-in-abap-sql---@ITOC@@ABENDDIC_CHARACTER_BYTE_TYPES_4)

-   [Handling in Dynpros](#@@ITOC@@ABENDDIC_CHARACTER_BYTE_TYPES_5)

Character Strings

The following built-in data types in ABAP Dictionary are available for general character strings:

-   [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) for text fields

The built-in type CHAR, mapped to the ABAP type c, is used to describe general text fields with a maximum length of 30000 characters (only 1333 characters for table fields).

-   [LCHR](javascript:call_link\('abenddic_builtin_types.htm'\)) for long text fields

The built-in type LCHR, also mapped to the ABAP type c, is used to describe general text fields with lengths between 256 and 32000 characters. In database tables, the maximum length must be specified as the value of a preceding INT2 or INT4 field. There can only be one table field of type LCHR or LRAW. It must not be a key field and it must be the last table field. It cannot be used in all positions of ABAP SQL statements.

-   [SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)) for short text strings

The built-in type SSTRING is mapped to the ABAP type string, but handled like the type CHAR or VARCHAR in ABAP Dictionary and by database tables. The length is restricted to a maximum of 1333, but table fields of this type can also be used as [key fields](javascript:call_link\('abenddic_database_tables_key.htm'\)) by database tables and used by ABAP SQL statements in almost all positions where text fields are possible.

-   [STRING](javascript:call_link\('abenddic_builtin_types.htm'\)) for text strings

The built-in type STRING is mapped to the ABAP type string and also handled like a text string ([CLOB](javascript:call_link\('abenclob_glosry.htm'\) "Glossary Entry")) in ABAP Dictionary and by database tables. Table fields of this type cannot be used as [key fields](javascript:call_link\('abenddic_database_tables_key.htm'\)) or [index fields](javascript:call_link\('abenddic_database_tables_index.htm'\)) in database tables or in any positions in ABAP SQL statements. The possible length of a text string is unrestricted, but a maximum length of 256 can be specified to restrict its length when used for a table field of a database table, which is relevant for ABAP SQL access (see below).

Notes

-   In general [structures](javascript:call_link\('abenddic_structures.htm'\)), the length of a component of type CHAR is not restricted to 1333.

-   In database tables, there can be only one table field of the type LCHR and it must be the last table field. This means that the type LRAW cannot be used simultaneously in the same database table. If the statement [SELECT](javascript:call_link\('abapselect.htm'\)) is used to read an LCHR field, the preceding length field must also be read. In [writes](javascript:call_link\('abenopen_sql_writing.htm'\)) using ABAP SQL, the length field must be given the correct value or data may be lost.

-   LCHR is no longer recommended for new developments. The type STRING is recommended instead, however it is also not suitable for [key fields](javascript:call_link\('abenddic_database_tables_key.htm'\)) of database tables or for unrestricted use in ABAP SQL. Where possible, SSTRING can be used here instead.

-   Switching existing dictionary objects from LCHR to STRING or SSTRING, on the other hand, can be critical, since all ABAP types and ABAP objects that reference dictionary objects like this are then given a [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data type. A switch from a [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") data type to a [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data type usually constitutes an incompatible change and can produce syntax errors in ABAP programs.

Byte Chains

The following built-in data types in ABAP Dictionary are available for general byte chains:

-   [RAW](javascript:call_link\('abenddic_builtin_types.htm'\)) for byte fields

The built-in type RAW, mapped to the ABAP type x, is used to describe byte fields with a maximum length of 32000 characters (only 255 characters for table fields).

-   [LRAW](javascript:call_link\('abenddic_builtin_types.htm'\)) for long byte fields

The built-in type LRAW, also mapped to the ABAP type x, is used to describe byte fields with lengths between 256 and 32000 characters. In database tables, the maximum length must be specified as the value of a preceding INT2 or INT4 field. There can only be one table field of type LRAW or LCHR. It must not be a key field and it must be the last table field. It cannot be used in all positions of ABAP SQL statements.

-   [RAWSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)) for byte strings

The built-in type RAWSTRING is mapped to the ABAP type xstring and also handled like a byte string ([BLOB](javascript:call_link\('abenblob_glosry.htm'\) "Glossary Entry")) in ABAP Dictionary and by database tables. Table fields of this type cannot be used as [key fields](javascript:call_link\('abenddic_database_tables_key.htm'\)) or [index fields](javascript:call_link\('abenddic_database_tables_index.htm'\)) in database tables or in any positions in ABAP SQL statements. The possible length of a byte string is unrestricted, but a maximum length of 256 can be specified to restrict its length when used for a table field of a database table, which is relevant for ABAP SQL access (see below).

Notes

-   In general [structures](javascript:call_link\('abenddic_structures.htm'\)), the length of a component of type RAW is not restricted to 255.

-   In database tables, there can be only one table field of the type LRAW and it must be the last table field. This means that the type LCHR cannot be used simultaneously in the same database table. If the statement [SELECT](javascript:call_link\('abapselect.htm'\)) is used to read an LRAW field, the preceding length field must also be read. In [writes](javascript:call_link\('abenopen_sql_writing.htm'\)) using ABAP SQL, the length field must be given the correct value or data may be lost.

-   LRAW is no longer recommended for new developments. The type RAWSTRING is recommended instead, however it is also not suitable for [key fields](javascript:call_link\('abenddic_database_tables_key.htm'\)) of database tables or for unrestricted use in ABAP SQL.

-   Switching existing dictionary objects from LRAW to RAWSTRING, on the other hand, can be critical, since all ABAP types and ABAP objects that reference dictionary objects like this are then given a [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data type. A switch from a [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") data type to a [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data type usually constitutes an incompatible change and can produce syntax errors in ABAP programs.

Notes on Strings

The following points must be remembered when using built-in data types for text strings or byte strings:

-   The types STRING and RAWSTRING for [LOBs](javascript:call_link\('abenlob_glosry.htm'\) "Glossary Entry") have a variable length. A maximum length can be specified, but there is no upper limit. If a maximum length is specified, this represents the actual restriction if used for a table field of a database table.

-   The type SSTRING also has a variable length, but this is restricted upwards by the maximum length that can be specified. The greatest maximum length is 1333. The benefit of using SSTRING, and not CHAR, is that it is assigned to the ABAP type string. Its advantage over STRING is that it can also be used for key fields in databases and in any places in ABAP SQL in which the type CHAR is also possible.

-   The maximum possible length for the types STRING and RAWSTRING and the mandatory maximum length for SSTRING must not be exceeded in [writes](javascript:call_link\('abenopen_sql_writing.htm'\)) performed on database fields of these types using ABAP SQL. If it is exceeded, an exception of the class CX\_SY\_OPEN\_SQL\_DB is raised. Truncations of strings when read to a target field, however, are ignored.

-   In ABAP programs, maximum lengths defined in ABAP Dictionary for the types STRING, RAWSTRING, and SSTRING are ignored by the assigned ABAP types string and xstring. As a result, writing a string that is too long to a database can raise an exception. If required, the ABAP program itself must handle the length restrictions on strings.

-   The maximum length of data types based on STRING, RAWSTRING, and SSTRING can be identified in an ABAP program using the built-in function [dbmaxlen](javascript:call_link\('abenlength_functions.htm'\)).

-   Trailing blanks are saved in table fields of the type STRING but not in table fields of the type SSTRING. This is particularly significant when short strings are used as key fields of database fields, since trailing blanks cannot be used as distinguishing characteristics here.

-   [LOBs](javascript:call_link\('abenlob_glosry.htm'\) "Glossary Entry") of the types STRING and RAWSTRING are usually handled as [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data objects in which only one LOB locator is saved within the data record. This locator references the actual string data. Database fields of the type SSTRING are usually saved as [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") fields. An empty long string can also be saved using the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"). The actual handling, however, depends on the individual database system and is not important for ABAP programs.

-   If a [work area](javascript:call_link\('abenopen_sql_wa.htm'\)) or an internal table is used to access table fields of the types SSTRING, STRING, or RAWSTRING in ABAP SQL, the work area or the row type of the internal table must be compatible with the database structure.

-   If structures, database tables, or views that have strings as components are used for typings in ABAP, it must be remembered that these objects are [deep structures](javascript:call_link\('abendeep_structure_glosry.htm'\) "Glossary Entry"). This means, for example, that they cannot be used in the [TABLES](javascript:call_link\('abaptables.htm'\)) statement (obsolete for database accesses) or for typing the obsolete [table parameters](javascript:call_link\('abentable_parameter_glosry.htm'\) "Glossary Entry") of procedures.

-   Access may be slower for long strings (LOBs) in database tables than for other data types. If not all data is needed at once (and to bypass any memory limits on the AS Instance), [streaming](javascript:call_link\('abenopen_sql_streaming.htm'\)) and [locators](javascript:call_link\('abenlocators.htm'\)) can be used to access long strings.

Use in ABAP SQL

The following restrictions apply when accessing database fields with character-like and byte-like types in ABAP SQL:

-   There are no access restrictions to database fields with the data types CHAR and RAW in ABAP SQL.

-   Database fields with the data types STRING and RAWSTRING plus LCHR and LRAW cannot be used in the following operand positions:

-   As arguments of [aggregate functions](javascript:call_link\('abapselect_aggregate.htm'\)) and [SQL expressions](javascript:call_link\('abapsql_expr.htm'\))

-   In the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) when the addition [DISTINCT](javascript:call_link\('abapselect_clause.htm'\)) is used

-   In the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) when the addition [FOR ALL ENTRIES](javascript:call_link\('abenwhere_logexp_itab.htm'\)) is used In the [strict mode from Release 7.40, SP05](javascript:call_link\('abenopensql_strict_mode_740_sp05.htm'\)), this produces a syntax error. Otherwise, the extended program check produces a syntax warning that can be hidden by a pragma.

-   In [SQL conditions](javascript:call_link\('abenwhere_logexp.htm'\))

-   In the [GROUP BY clause](javascript:call_link\('abapgroupby_clause.htm'\))

-   In the [ORDER BY clause](javascript:call_link\('abaporderby_clause.htm'\))

-   The data type SSTRING can be used without restrictions, except in the [coalesce](javascript:call_link\('abensql_coalesce.htm'\)) function and in [CASE](javascript:call_link\('abensql_case.htm'\)) expressions.

Note

The same restrictions apply to the obsolete data type VARC as to STRING and RAWSTRING plus LCHR and LRAW.

Handling in Dynpros

When a field with character-like dictionary type is used from a [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry"), lowercase letters are transformed to uppercase letters by default. This behavior can be overridden in Screen Painter. Furthermore, [lowercase letters](javascript:call_link\('abenddic_domains_sema.htm'\)) can be preserved for data elements in the semantic attributes of a domain.