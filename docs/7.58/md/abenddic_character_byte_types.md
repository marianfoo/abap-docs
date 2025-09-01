  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Built-In Data Types](javascript:call_link\('abenddic_builtin_types_intro.htm'\)) →  [DDIC - Properties of the Built-In Dictionary Types](javascript:call_link\('abenddic_builtin_types_prop.htm'\)) →  [DDIC - General Dictionary Types](javascript:call_link\('abenddic_builtin_types_general.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Character-Like%20Types%20and%20Byte-Like%20Types%2C%20ABENDDIC_CHARACTER_BYTE_TYPES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%2
0for%20improvement:)

DDIC - Character-Like Types and Byte-Like Types

-   [Character Strings](#abenddic-character-byte-types-1-------byte-chains---@ITOC@@ABENDDIC_CHARACTER_BYTE_TYPES_2)
-   [Notes on Strings](#abenddic-character-byte-types-3-------use-in-abap-cds---@ITOC@@ABENDDIC_CHARACTER_BYTE_TYPES_4)
-   [Use in ABAP SQL](#abenddic-character-byte-types-5-------handling-in-dynpros---@ITOC@@ABENDDIC_CHARACTER_BYTE_TYPES_6)

Character Strings   

The following built-in dictionary data types are available for general character strings:

-   [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) for text fields
    
    The built-in type CHAR, mapped to the ABAP type c, is used to describe general text fields with a maximum length of 30000 characters. For table fields, view fields, and fields of CDS entities, the maximum length is 1333 characters.
    
-   [LCHR](javascript:call_link\('abenddic_builtin_types.htm'\)) for long text fields
    
    The built-in type LCHR, also mapped to the ABAP type c, is used to describe general text fields with lengths between 256 and 32000 characters. In DDIC database tables, the maximum length must be specified as the value of a preceding INT2 or INT4 field. There can only be one table field of type LCHR or LRAW. It must not be a key field and it must be the last table field. It cannot be used in all positions of ABAP SQL statements.
    
-   [SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)) for short text strings
    
    The built-in type SSTRING is mapped to the ABAP type string. It is handled like the type CHAR or VARCHAR in ABAP Dictionary and by DDIC database tables. The length is restricted to a maximum of 1333. Table fields of this type can be used as [key fields](javascript:call_link\('abenddic_database_tables_key.htm'\)) by DDIC database tables and used by ABAP SQL statements in almost all positions where text fields are possible.
    
-   [STRING](javascript:call_link\('abenddic_builtin_types.htm'\)) for text strings
    
    The built-in dictionary type STRING is mapped to the ABAP type string. It is handled like a text string ([CLOB](javascript:call_link\('abenclob_glosry.htm'\) "Glossary Entry")) in ABAP Dictionary and by DDIC database tables. Table fields of this type cannot be used as [key fields](javascript:call_link\('abenddic_database_tables_key.htm'\)) or [index fields](javascript:call_link\('abenddic_database_tables_index.htm'\)) in DDIC database tables. They cannot be used in all positions in ABAP SQL statements. The possible length of a text string is unrestricted, but a maximum length of at least 256 can be specified to restrict its length when used for a table field of a DDIC database table, which is relevant for ABAP SQL access (see below).
    

Hints

-   In general [DDIC structures](javascript:call_link\('abenddic_structures.htm'\)), the length of a component of type CHAR is not restricted to 1333.
-   In DDIC database tables, there can be only one table field of the type LCHR and it must be the last table field. This means that the type LRAW cannot be used simultaneously in the same database table. If the statement [SELECT](javascript:call_link\('abapselect.htm'\)) is used to read an LCHR field, the preceding length field must also be read. In [writes](javascript:call_link\('abenabap_sql_writing.htm'\)) using ABAP SQL, the length field must be given the correct value or data may be lost.
-   LCHR is no longer recommended for new developments. The type STRING is recommended instead, however it is also not suitable for [key fields](javascript:call_link\('abenddic_database_tables_key.htm'\)) of DDIC database tables or for unrestricted use in ABAP SQL. Where possible, SSTRING can be used here instead.
-   Switching existing dictionary objects from LCHR to STRING or SSTRING can be critical, since all ABAP types and ABAP objects that reference dictionary objects like this are then given a [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data type. A switch from a [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") data type to a [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data type usually constitutes an incompatible change and can produce syntax errors in ABAP programs.

Byte Chains   

The following built-in data types in ABAP Dictionary are available for general byte chains:

-   [RAW](javascript:call_link\('abenddic_builtin_types.htm'\)) for byte fields
    
    The built-in type RAW, mapped to the ABAP type x, is used to describe byte fields with a maximum length of 32000 characters. For table fields, the maximum length is 255 characters.
    
-   [LRAW](javascript:call_link\('abenddic_builtin_types.htm'\)) for long byte fields
    
    The built-in type LRAW, also mapped to the ABAP type x, is used to describe byte fields with lengths between 256 and 32000 characters. In DDIC database tables, the maximum length must be specified as the value of a preceding INT2 or INT4 field. There can only be one table field of type LRAW or LCHR. It must not be a key field and it must be the last table field. It cannot be used in all positions of ABAP SQL statements.
    
-   [RAWSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)) for byte strings
    
    The built-in type RAWSTRING is mapped to the ABAP type xstring and it is handled like a byte string ([BLOB](javascript:call_link\('abenblob_glosry.htm'\) "Glossary Entry")) in ABAP Dictionary and by DDIC database tables. Table fields of this type cannot be used as [key fields](javascript:call_link\('abenddic_database_tables_key.htm'\)) or [index fields](javascript:call_link\('abenddic_database_tables_index.htm'\)) in DDIC database tables. They cannot be used in all positions in ABAP SQL statements. The possible length of a byte string is unrestricted, but a maximum length of at least 256 can be specified to restrict its length when used for a table field of a DDIC database table. This is relevant for ABAP SQL access (see below).
    

Hints

-   In general [DDIC structures](javascript:call_link\('abenddic_structures.htm'\)), the length of a component of type RAW is not restricted to 255.
-   In DDIC database tables, there can be only one table field of the type LRAW and it must be the last table field. This means that the type LCHR cannot be used simultaneously in the same database table. If the statement [SELECT](javascript:call_link\('abapselect.htm'\)) is used to read an LRAW field, the preceding length field must also be read. In [writes](javascript:call_link\('abenabap_sql_writing.htm'\)) using ABAP SQL, the length field must be given the correct value or data may be lost.
-   LRAW is no longer recommended for new developments. The type RAWSTRING is recommended instead. However, RAWSTRING is also not suitable for [key fields](javascript:call_link\('abenddic_database_tables_key.htm'\)) of DDIC database tables or for unrestricted use in ABAP SQL.
-   Switching existing dictionary objects from LRAW to RAWSTRING can be critical, since all ABAP types and ABAP objects that reference dictionary objects like this are then given a [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data type. A switch from a [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") data type to a [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data type usually constitutes an incompatible change and can produce syntax errors in ABAP programs.

Notes on Strings   

The following points must be remembered when using built-in dictionary data types for text strings or byte strings:

-   The types STRING and RAWSTRING for [LOBs](javascript:call_link\('abenlob_glosry.htm'\) "Glossary Entry") have a variable length. A maximum length can be specified, but there is no upper limit. If a maximum length is specified, this represents the actual restriction if used for a table field of a DDIC database table.
-   The type SSTRING also has a variable length, but this is restricted upwards by the maximum length that can be specified. The greatest maximum length is 1333. The benefit of using SSTRING, and not CHAR, is that it is assigned to the ABAP type string. Its advantage over STRING is that it can also be used for key fields in databases and in any places in ABAP SQL in which the type CHAR is also possible.
-   The maximum possible length for the types STRING and RAWSTRING and the mandatory maximum length for SSTRING must not be exceeded in [writes](javascript:call_link\('abenabap_sql_writing.htm'\)) performed on database fields of these types using ABAP SQL. If it is exceeded, an exception of the class CX\_SY\_OPEN\_SQL\_DB is raised. If a string is truncated when read to a target field, no exception is raised.
-   In ABAP programs, maximum lengths defined in ABAP Dictionary for the types STRING, RAWSTRING, and SSTRING are ignored by the assigned ABAP types string and xstring. As a result, writing a string that is too long to a database can raise an exception. If required, the ABAP program itself must handle the length restrictions on strings.
-   The maximum length of data types based on STRING, RAWSTRING, and SSTRING can be identified in an ABAP program using the built-in function [dbmaxlen](javascript:call_link\('abenlength_functions.htm'\)).
-   Trailing blanks are saved in table fields of the type STRING but not in table fields of the type SSTRING. This is particularly significant when short strings are used as key fields of database fields, since trailing blanks cannot be used as distinguishing characteristics here.
-   [LOBs](javascript:call_link\('abenlob_glosry.htm'\) "Glossary Entry") of the types STRING and RAWSTRING are usually handled as [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data objects in which only one LOB locator is saved within the data record. This locator references the actual string data. Database fields of the type SSTRING are usually saved as [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") fields. An empty long string can also be saved using the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"). The actual handling, however, depends on the individual database system and is not important for ABAP programs.
-   If a [work area](javascript:call_link\('abenabap_sql_wa.htm'\)) or an internal table is used to access table fields of the types SSTRING, STRING, or RAWSTRING in ABAP SQL, the work area or the line type of the internal table must be compatible with the database structure.
-   If DDIC structures, DDIC database tables, or DDIC views that have strings as components are used for typings in ABAP, it must be remembered that these objects are [deep structures](javascript:call_link\('abendeep_structure_glosry.htm'\) "Glossary Entry"). This means, for example, that they cannot be used in the [TABLES](javascript:call_link\('abaptables.htm'\)) statement (obsolete for database accesses) or for typing the obsolete [table parameters](javascript:call_link\('abentable_parameter_glosry.htm'\) "Glossary Entry") of procedures.
-   Access may be slower for long strings (LOBs) in DDIC database tables than for other data types. If not all data is needed at once, and to bypass any memory limits on the AS instance, [streaming](javascript:call_link\('abenabap_sql_streaming.htm'\)) and [locators](javascript:call_link\('abenlocators.htm'\)) can be used to access long strings.

Use in ABAP CDS   

The following restrictions apply in [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") with respect to character-like types and byte-like types:

-   The data types STRING and RAWSTRING plus LCHR and LRAW cannot be used in the following cases:
    -   In the SELECT list if the addition DISTINCT is specified ([CDS view entity](javascript:call_link\('abencds_select_statement_v2.htm'\)), [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_select_statement_v1.htm'\)))
    -   In CAST expressions ([CDS view entity](javascript:call_link\('abencds_cast_expression_v2.htm'\)), [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_cast_expression_v1.htm'\)))
    -   In comparison expressions cds\_cond ([CDS view entity](javascript:call_link\('abencds_conditional_expression_v2.htm'\)), [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_conditional_expression_v1.htm'\)))
    -   In string functions ([CDS view entity](javascript:call_link\('abencds_sql_functions_character_v2.htm'\)), [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_sql_functions_character_v1.htm'\)))
    -   In CASE expressions ([CDS view entity](javascript:call_link\('abencds_case_expression_v2.htm'\)), [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_case_expression_v1.htm'\)))
    -   In aggregate expressions ([CDS view entity](javascript:call_link\('abencds_aggregate_functions_v2.htm'\)), [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_aggregate_functions_v1.htm'\)))
    -   For columns merged using UNION:
        
        In [CDS DDIC-based views (obsolete)](javascript:call_link\('abencds_union_v1.htm'\)), these data types are generally not supported.
        
        In [CDS view entities](javascript:call_link\('abencds_union_v2.htm'\)), these data types are not supported if UNION is specified without the addition ALL. UNION ALL, by contrast, supports all data types without any restriction.
        
    -   After GROUP BY ([CDS view entity](javascript:call_link\('abencds_group_by_v2.htm'\)), [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_group_by_v1.htm'\)))
    -   After SIBLINGS ORDER BY in the statement [DEFINE HIERARCHY](javascript:call_link\('abencds_f1_define_hierarchy.htm'\))
-   The data types LCHR and LRAW cannot be used in the following case:
    -   For [typings](javascript:call_link\('abencds_typing.htm'\))
-   The data type RAW can only be used in a small number of operand positions, where this is documented.

Hint

The obsolete data type VARC cannot be used in ABAP CDS.

Use in ABAP SQL   

The following restrictions apply when accessing database fields with character-like and byte-like types in ABAP SQL:

-   There are no access restrictions to database fields with the data types CHAR and RAW in ABAP SQL.
-   Database fields with the data types STRING and RAWSTRING plus LCHR and LRAW cannot be used in the following operand positions:
    -   As arguments of [aggregate functions](javascript:call_link\('abapselect_aggregate.htm'\)) and [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)).
    -   In the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) when the addition [DISTINCT](javascript:call_link\('abapselect_clause.htm'\)) is used.
    -   In the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) when the addition [FOR ALL ENTRIES](javascript:call_link\('abenwhere_all_entries.htm'\)) is used. In the [strict mode from ABAP release 7.40, SP05](javascript:call_link\('abenabap_sql_strictmode_740_sp05.htm'\)), this produces a syntax error. Otherwise, the extended program check produces a syntax warning that can be hidden by a pragma.
    -   In [SQL conditions](javascript:call_link\('abenasql_cond.htm'\)) except [IS *\[*NOT*\]* NULL](javascript:call_link\('abenwhere_logexp_null.htm'\)).
    -   In the [GROUP BY clause](javascript:call_link\('abapgroupby_clause.htm'\)).
    -   In the [ORDER BY clause](javascript:call_link\('abaporderby_clause.htm'\)).
    -   After [SIBLINGS ORDER BY](javascript:call_link\('abenselect_hierarchy_generator.htm'\)) in the [hierarchy generator](javascript:call_link\('abenhierarchy_generator_glosry.htm'\) "Glossary Entry").
-   The data type SSTRING can be used without restrictions, except in the [coalesce](javascript:call_link\('abensql_coalesce.htm'\)) function and in [CASE](javascript:call_link\('abensql_case.htm'\)) expressions.

Hint

The same restrictions apply to the obsolete data type VARC as to STRING and RAWSTRING plus LCHR and LRAW.

Handling in Dynpros   

When a field with character-like dictionary type is used from a [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry"), lowercase letters are transformed to uppercase letters by default. This behavior can be overridden in Screen Painter. Furthermore, [lowercase letters](javascript:call_link\('abenddic_domains_sema.htm'\)) can be preserved for data elements in the semantic properties of a domain.