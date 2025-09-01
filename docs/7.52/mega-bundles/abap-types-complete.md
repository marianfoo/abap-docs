# ABAP TYPES - Complete Reference (7.52)

**Generated**: 2025-09-01T11:14:58.764Z
**Bundles Combined**: 3
**Category**: types

---


## ABAP - Keyword Documentation / ABAP - Dictionary / Predefined Data Types in ABAP Dictionary / Attributes of the Predefined Dictionary Types

**Files**: 13 | **Difficulty**: intermediate

# ABAP - Keyword Documentation / ABAP - Dictionary / Predefined Data Types in ABAP Dictionary / Attributes of the Predefined Dictionary Types

Included pages: 13


### abenddic_builtin_types_prop.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Predefined Data Types in ABAP Dictionary](javascript:call_link\('abenddic_builtin_types_intro.htm'\)) → 

Attributes of the Predefined Dictionary Types

-   [General dictionary types](javascript:call_link\('abenddic_builtin_types_general.htm'\))

-   [Special dictionary types](javascript:call_link\('abenddic_builtin_types_special.htm'\))

-   [Obsolete dictionary types](javascript:call_link\('abenddic_obsolete_types.htm'\))

Continue
[General Dictionary Types](javascript:call_link\('abenddic_builtin_types_general.htm'\))
[Special Dictionary Types](javascript:call_link\('abenddic_builtin_types_special.htm'\))
[Obsolete Dictionary Types](javascript:call_link\('abenddic_obsolete_types.htm'\))


### abenddic_builtin_types_general.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Predefined Data Types in ABAP Dictionary](javascript:call_link\('abenddic_builtin_types_intro.htm'\)) →  [Attributes of the Predefined Dictionary Types](javascript:call_link\('abenddic_builtin_types_prop.htm'\)) → 

General Dictionary Types

-   [Integers, packed numbers, binary floating point numbers](javascript:call_link\('abenddic_builtin_types_int_pack.htm'\))

-   [Decimal floating point numbers](javascript:call_link\('abenddic_decimal_floating_point.htm'\))

-   [Character-like and byte-like types](javascript:call_link\('abenddic_character_byte_types.htm'\))

Continue
[Integers, Packed Numbers, Binary Floating Point Numbers](javascript:call_link\('abenddic_builtin_types_int_pack.htm'\))
[Decimal Floating Point Numbers](javascript:call_link\('abenddic_decimal_floating_point.htm'\))
[Character-Like Types and Byte-Like Types](javascript:call_link\('abenddic_character_byte_types.htm'\))


### abenddic_builtin_types_int_pack.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Predefined Data Types in ABAP Dictionary](javascript:call_link\('abenddic_builtin_types_intro.htm'\)) →  [Attributes of the Predefined Dictionary Types](javascript:call_link\('abenddic_builtin_types_prop.htm'\)) →  [General Dictionary Types](javascript:call_link\('abenddic_builtin_types_general.htm'\)) → 

Integers, Packed Numbers, Binary Floating Point Numbers

The following types are used for general descriptions of the numeric types (except for decimal floating point numbers):

-   [INT1](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT8](javascript:call_link\('abenddic_builtin_types.htm'\)) for [integer numbers](javascript:call_link\('abeninteger_glosry.htm'\) "Glossary Entry")

These types describe general 1-byte, 2-byte, 4-byte, and 8-byte integers. The ABAP types [b](javascript:call_link\('abenbuiltin_types_numeric.htm'\)) and [s](javascript:call_link\('abenbuiltin_types_numeric.htm'\)), assigned to the types INT1 and INT2, cannot be specified either statically or dynamically in ABAP statements. These types only occur in ABAP programs, by reference to the types INT1 and INT2 from ABAP Dictionary.

-   [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) for [packed numbers](javascript:call_link\('abenpacked_number_glosry.htm'\) "Glossary Entry")

This type describes general packed numbers in [BCD format](javascript:call_link\('abenbcd_glosry.htm'\) "Glossary Entry"). When used, a length and the number of decimal places must be added to the type. The number of decimal places must be less than or equal to the length and cannot exceed 14.

-   [FLTP](javascript:call_link\('abenddic_builtin_types.htm'\)) for [binary floating point numbers](javascript:call_link\('abenbinfloat_glosry.htm'\) "Glossary Entry")

This type describes general binary floating point numbers. Table fields of this type cannot be used as [key fields](javascript:call_link\('abenddic_database_tables_key.htm'\)) of database tables.

Notes

-   An odd number of places should be used in the definition of data types based on the built-in type DEC. These values are stored in [BCD](javascript:call_link\('abenbcd_glosry.htm'\) "Glossary Entry") format, for which in ABAP (data type p), only an odd number of digits is possible, since a half byte is used for the sign. If a data type DEC has an even number of characters, however, the length of the associated ABAP type p is rounded up and hence contains the next highest odd number of places. This can cause overflows, for example, and then exceptions when writing to database tables. The same applies to the built-in types CURR, DF34\_DEC, DF16\_DEC, and QUAN, which are handled technically like the type DEC.

-   If the built-in types INT1, INT2, INT4, and INT8 are [used](javascript:call_link\('abenddic_builtin_type_usage.htm'\)) to specify types, the number of places must usually be specified as 2, 5, 10, and 19. If the type FLTP is used, 16 places and the same number of decimal places must be specified. The specified number of places is generally ignored by the data types. By default, they describe platform-specific integers or binary floating point numbers and occupy 1, 2, 4, or 8 bytes.

-   In the case of integer types, the specified places express the possible decimal places without sign.

-   In the case of binary floating point numbers, 16 expresses the approximate precision of the IEEE-754 (double precision) standard.

The specified places are saved in the metadata of a self-defined type and are evaluated, if necessary, by special frameworks.

-   The output formats for fields on dynpros and Web Dynpros and in the statements [WRITE](javascript:call_link\('abapwrite-.htm'\)) or [WRITE TO](javascript:call_link\('abapwrite_to.htm'\)) can be predefined for the numeric types specific to each user in the [user master record](javascript:call_link\('abenuser_master_record_glosry.htm'\) "Glossary Entry"). The output length required for formatted output is usually greater than the number of places in ABAP Dictionary. If the output length is too short, any formatting characters are suppressed.

-   If a [dynpro field](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry") has one of the built-in numeric types, the output of a sign must be defined in a [domain](javascript:call_link\('abenddic_domains.htm'\)) so that negative values can be represented.


### abenddic_decimal_floating_point.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Predefined Data Types in ABAP Dictionary](javascript:call_link\('abenddic_builtin_types_intro.htm'\)) →  [Attributes of the Predefined Dictionary Types](javascript:call_link\('abenddic_builtin_types_prop.htm'\)) →  [General Dictionary Types](javascript:call_link\('abenddic_builtin_types_general.htm'\)) → 

Decimal Floating Point Numbers

In [decimal floating point numbers](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry"), a maximum of 16 or 34 places exactly are returned in the mantissa depending on the data type.

-   [Handling in ABAP Dictionary](#abenddic-decimal-floating-point-1--------handling-in-dynpros---output-length-and-output-style---@ITOC@@ABENDDIC_DECIMAL_FLOATING_POINT_2)

-   [Handling in ABAP Programs](#abenddic-decimal-floating-point-3---handling-in-abap-dictionary--in-abap-dictionary--the-following-data-types-are-available-for-decimal-floating-numbers--------df16--dec--javascript-call-link---abenddic-builtin-types-htm-----and--df16--raw--javascript-call-link---abenddic-builtin-types-htm-----for-16-digit-numbers--------df34--dec--javascript-call-link---abenddic-builtin-types-htm-----and--df34--raw--javascript-call-link---abenddic-builtin-types-htm-----for-34-digit-numbers---these-data-types-are-a-replacement-for-real-decimal-floating-point-types--real-decimal-floating-point-types-can-be-used-without-restrictions-in-the-database-as-numeric-data-types-in-relevant-expressions-and-functions--but-are-not-yet-supported-by-all-database-systems-------df16--dec-and-df34--dec-----in-database-fields-of-this-type--decimal-floating-point-numbers-are-stored-as-a-packed-number--format--dec--javascript-call-link---abenddic-builtin-types-int-pack-htm-------the-length-and-the-number-of-decimal-places-must-be-specified-when-defining-a-data-type-in-abap-dictionary--calculations--select-with-appropriate--sql-expressions--javascript-call-link---abapsql-expr-htm-----or-with-the-aggregate-functions--sum-and-avg--javascript-call-link---abapselect-aggregate-htm------update-with--set----and-----javascript-call-link---abapupdate-set-expression-htm------can-be-performed-on-the-database-for-this-type--when-there-is-a-write-to-the-database--the-system-implicitly-rounds-off-to-the-number-of-decimal-places-and-decimal-overflows-can-occur--database-fields-with-these-types-can-be-edited-in--native-sql--javascript-call-link---abennative-sql-glosry-htm-----glossary-entry---or--amdp--javascript-call-link---abenamdp-glosry-htm-----glossary-entry---------df16--raw-and-df34--raw-----in-database-fields-of-this-type--decimal-floating-point-numbers-are-stored-as-binary--in-raw-format---the-length-is-set-to-16-or-34-places--values-can-be-sorted--compared--and-used-in-indexes--for-this-type--no-calculations-can-be-performed-on-the-database--this-is-an-sap-specific-format--which-means-that-the-corresponding-fields-also-cannot-be-edited-in--native-sql--javascript-call-link---abennative-sql-glosry-htm-----glossary-entry---or--amdp--javascript-call-link---abenamdp-glosry-htm-----glossary-entry----the-scaling-is-lost-when-writing-to-the-database---notes------the-actual-built-in-data-type-from-abap-dictionary-used-for-decimal-point-numbers-depends-on-their-purpose-------the-types-df16--dec-and-df34--dec-can-be-used-for-calculations-on-the-database--but-their-value-ranges-are-smaller-than-those-of-real-decimal-floating-point-numbers-------the-types-df16--raw-and-df34--raw-cover-the-whole-value-range--but-are-not-recognized-as-numbers-by-the-databases-------as-in-the--general-packed-numbers--javascript-call-link---abenddic-builtin-types-int-pack-htm------the-number-of-places-in-the-types-df16--dec-and-df34--dec-should-be-odd-------in-the--abap-cds--javascript-call-link---abencds-htm-----it-is-not-usually-possible-to-execute-expressions-or-functions-for-decimal-floating-point-numbers-------as-well-as-the-types-above--there-are-also-the--obsolete--javascript-call-link---abenddic-obsolete-types-htm-----built-in-data-types-df16--scl-and-df34--scl-for-decimal-floating-point-numbers-with--scaling--javascript-call-link---abenscale-glosry-htm-----glossary-entry---------in-database-fields-of-this-type--decimal-floating-point-numbers-are-stored-in-the-same-way-as-df16--raw-or-df34--raw--length-16-or-34-places--and-the-same-restrictions-apply---the-scaling-must-be-specified-in-a-direct-successor-database-field-with-type-int2--when-a-decimal-floating-point-number-is-written--this-field-is-filled-automatically-with-the-scaling-and-the-scaling-is-taken-from-it-in-reads-------it-is-strongly-advised-not-to-use-the-types-df16--scl-and-df34--scl--their-functions-are-rarely-needed-and-the-additional-column-for-scaling-makes-them-too-complicated-and-error-prone-to-use-correctly---handling-in-dynpros---output-length-and-output-style--the-maximum-output-length-that-can-be-specified-in-a--domain--javascript-call-link---abenddic-domains-htm-----for-a-16-character-decimal-floating-point-number-is-24--for-a-34-character-number--46-is-the-maximum-output-length--these-are-also-the-default-values---in-a-domain--or-directly-in-a-structure-component-created-using-one-of-the-types-for-decimal-floating-numbers--but-not-in-data-elements-with-directly-specified-technical-attributes---one-of-the-following-output-styles-is-always-defined--the-output-style-defines-how-a-dynpro-field-defined-with-reference-to-this-domain--or-a-corresponding-abap-field-in-the-case-of-list-output--is-formatted-------simple--mathematical-or-scientific-notation--depending-on-space-------leading-sign-to-the-right--commercial-notation--canceled-if-not-enough-space--instead-of-implicit-transformation-to-scientific-notation-------scale-preserving--format-with-preservation-of-scaling--including-trailing-zeroes-in-the-decimal-places------scientific--scientific-notation------scientific-with-leading-zero--scientific-notation-with-a-0-as-an-integer-digit------scale-preserving-scientific--scientific-notation-including-trailing-zeroes-in-the-mantissa-------technical--scientific-notation-where-the-exponent-is-always-an-integer-and-a-multiple-of-3--the-value-range-of-the-integer-digits-is-between-1-and-999--except-if-the-source-field-has-the-value-0----for-dynpro-fields-whose-data-type-is-not-defined-in-abap-dictionary--the-output-style-can-also-be-determined-in--screen-painter--javascript-call-link---abenscreen-painter-glosry-htm-----glossary-entry----in-the-case-of-formatting-with-the-statements--write--javascript-call-link---abapwrite--htm-----or--write-to--javascript-call-link---abapwrite-to-htm------the-addition--style--javascript-call-link---abapwrite-ext-options-htm-----is-available--as-for-the--string-templates--javascript-call-link---abapcompute-string-format-options-htm--------notes------if-scientific-notation-is-used--a-limited-number-of-displayed-places-in-the-mantissa-is-recommended--this-can-be-specified-using-the-built-in-function--rescale--javascript-call-link---abendec-floating-point-functions-htm-----------the--scale-preserving--style-ensures-that-the-scaling-is-restored-in-conversions-from-dynpro-fields-to-abap--and-not-just-the-original-value-------if-vertically-aligned-decimal-separators-and-exponents-are-needed-on-uis--the-scale-preserving-scientific-notation-can-be-used---handling-in-abap-programs--the-abap-types-that-correspond-to-the-16-or-34-figure-decimal-floating-numbers-in-abap-dictionary-are-decfloat16-and-decfloat34--which-are-handled-internally-according-to-the-ieee-754-2008-standard--and-are-supported-by-all-abap-operations--in--arithmetic-sql-expressions--javascript-call-link---abensql-arith-htm------decimal-floating-point-numbers-are-not-supported---the-addition--style--javascript-call-link---abapwrite-to-options-htm-----after--write-----to------javascript-call-link---abapwrite-to-htm-----and-the-formatting-option--style--javascript-call-link---abapcompute-string-format-options-htm-----in--embedded-expressions--javascript-call-link---abenstring-templates-expressions-htm-----are-available-for-the-formatting-of-decimal-floating-numbers-in-programs--these-overwrite-the-output-style-defined-in-abap-dictionary--------abenddic-character-byte-types-htm-------------sap-netweaver-as-abap-release-752---copyright-2017-sap-ag--all-rights-reserved----abap---keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------predefined-data-types-in-abap-dictionary--javascript-call-link---abenddic-builtin-types-intro-htm---------attributes-of-the-predefined-dictionary-types--javascript-call-link---abenddic-builtin-types-prop-htm---------general-dictionary-types--javascript-call-link---abenddic-builtin-types-general-htm---------character-like-types-and-byte-like-types-------character-strings---@ITOC@@ABENDDIC_CHARACTER_BYTE_TYPES_1)

-   [Byte Chains](#abenddic-character-byte-types-2--------notes-on-strings---@ITOC@@ABENDDIC_CHARACTER_BYTE_TYPES_3)

-   [Use in Open SQL](#abenddic-character-byte-types-4--------handling-in-dynpros---@ITOC@@ABENDDIC_CHARACTER_BYTE_TYPES_5)

Character Strings

The following built-in data types in ABAP Dictionary are available for general character strings:

-   [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) for text fields

The built-in type CHAR, mapped to the ABAP type c, is used to describe general text fields with a maximum length of 30000 characters (only 1333 characters for table fields).

-   [LCHR](javascript:call_link\('abenddic_builtin_types.htm'\)) for long text fields

The built-in type LCHR, also mapped to the ABAP type c, is used to describe general text fields with lengths between 256 and 32000 characters. In database tables, the maximum length must be specified as the value of a preceding INT2 or INT4 field. Table fields of this type cannot be used as [key fields](javascript:call_link\('abenddic_database_tables_key.htm'\)) of database tables or in any positions in Open SQL statements.

-   [SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)) for short text strings

The built-in type SSTRING is mapped to the ABAP type string, but handled like the type CHAR or VARCHAR in ABAP Dictionary and by database tables. The length is restricted to a maximum of 1333, but table fields of this type can also be used as [key fields](javascript:call_link\('abenddic_database_tables_key.htm'\)) by database tables and used by Open SQL statements in almost all positions where text fields are possible.

-   [STRING](javascript:call_link\('abenddic_builtin_types.htm'\)) for text strings

The built-in type STRING is mapped to the ABAP type string and also handled like a text string ([CLOB](javascript:call_link\('abenclob_glosry.htm'\) "Glossary Entry")) in ABAP Dictionary and by database tables. Table fields of this type cannot be used as [key fields](javascript:call_link\('abenddic_database_tables_key.htm'\)) or [index fields](javascript:call_link\('abenddic_database_tables_index.htm'\)) in database tables or in any positions in Open SQL statements.

Notes

-   In general [structures](javascript:call_link\('abenddic_structures.htm'\)), the length of a component of type CHAR is not restricted to 1333.

-   In database tables, there can be only one table field of the type LCHR and it must be the last table field. This means that the type LRAW cannot be used simultaneously in the same database table. If the statement [SELECT](javascript:call_link\('abapselect.htm'\)) is used to read an LCHR field, the preceding length field must also be read. In [writes](javascript:call_link\('abenopen_sql_writing.htm'\)) using Open SQL, the length field must be given the correct value or data may be lost.

-   LCHR is no longer recommended for new developments. The type STRING is recommended instead, however it is also not suitable for [key fields](javascript:call_link\('abenddic_database_tables_key.htm'\)) of database tables or for unrestricted use in Open SQL. Where possible, SSTRING can be used here instead.

-   Switching existing dictionary objects from LCHR to STRING or SSTRING, on the other hand, can be critical, since all ABAP types and ABAP objects that reference dictionary objects like this are then given a [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data type. A switch from a [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") data type to a [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data type usually constitutes an incompatible change and can produce syntax errors in ABAP programs.

Byte Chains

The following built-in data types in ABAP Dictionary are available for general byte chains:

-   [RAW](javascript:call_link\('abenddic_builtin_types.htm'\)) for byte fields

The built-in type RAW, mapped to the ABAP type x, is used to describe byte fields with a maximum length of 32000 characters (only 255 characters for table fields).

-   [LRAW](javascript:call_link\('abenddic_builtin_types.htm'\)) for long byte fields

The built-in type LRAW, also mapped to the ABAP type x, is used to describe byte fields with lengths between 256 and 32000 characters. In database tables, the maximum length must be specified as the value of a preceding INT2 or INT4 field. Table fields of this type cannot be used as [key fields](javascript:call_link\('abenddic_database_tables_key.htm'\)) of database tables or in any positions in Open SQL statements.

-   [RAWSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)) for byte strings

The built-in type RAWSTRING is mapped to the ABAP type xstring and also handled like a byte string ([BLOB](javascript:call_link\('abenblob_glosry.htm'\) "Glossary Entry")) in ABAP Dictionary and by database tables. Table fields of this type cannot be used as [key fields](javascript:call_link\('abenddic_database_tables_key.htm'\)) or [index fields](javascript:call_link\('abenddic_database_tables_index.htm'\)) in database tables or in any positions in Open SQL statements.

Notes

-   In general [structures](javascript:call_link\('abenddic_structures.htm'\)), the length of a component of type RAW is not restricted to 255.

-   In database tables, there can be only one table field of the type LRAW and it must be the last table field. This means that the type LCHR cannot be used simultaneously in the same database table. If the statement [SELECT](javascript:call_link\('abapselect.htm'\)) is used to read an LRAW field, the preceding length field must also be read. In [writes](javascript:call_link\('abenopen_sql_writing.htm'\)) using Open SQL, the length field must be given the correct value or data may be lost.

-   LRAW is no longer recommended for new developments. The type RAWSTRING is recommended instead, however it is also not suitable for [key fields](javascript:call_link\('abenddic_database_tables_key.htm'\)) of database tables or for unrestricted use in Open SQL.

-   Switching existing dictionary objects from LRAW to RAWSTRING, on the other hand, can be critical, since all ABAP types and ABAP objects that reference dictionary objects like this are then given a [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data type. A switch from a [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") data type to a [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data type usually constitutes an incompatible change and can produce syntax errors in ABAP programs.

Notes on Strings

The following points must be remembered when using built-in data types for text strings or byte strings:

-   The types STRING and RAWSTRING for [LOBs](javascript:call_link\('abenlob_glosry.htm'\) "Glossary Entry") have a variable length. A maximum length can be specified, but there is no upper limit.

-   The type SSTRING also has a variable length, but this is restricted upwards by the maximum length that can be specified. The greatest maximum length is 1333. The benefit of using SSTRING, and not CHAR, is that it is assigned to the ABAP type string. Its advantage over STRING is that it can also be used for key fields in databases and in any places in Open SQL in which the type CHAR is also possible.

-   The maximum possible length for the types STRING and RAWSTRING and the mandatory maximum length for SSTRING must not be exceeded in [writes](javascript:call_link\('abenopen_sql_writing.htm'\)) performed on database fields of these types using Open SQL. If it is exceeded, an exception of the class CX\_SY\_OPEN\_SQL\_DB is raised. Truncations of strings when read to a target field, however, are ignored.

-   In ABAP programs, maximum lengths defined in ABAP Dictionary for the types STRING, RAWSTRING, and SSTRING are ignored by the assigned ABAP types string and xstring. As a result, writing a string that is too long to a database can raise an exception. If required, the ABAP program itself must handle the length restrictions on strings.

-   The maximum length of data types based on STRING, RAWSTRING, and SSTRING can be identified in an ABAP program using the built-in function [dbmaxlen](javascript:call_link\('abenlength_functions.htm'\)).

-   Trailing blanks are saved in table fields of the type STRING but not in table fields of the type SSTRING. This is particularly significant when short strings are used as key fields of database fields, since trailing blanks cannot be used as distinguishing characteristics here.

-   [LOBs](javascript:call_link\('abenlob_glosry.htm'\) "Glossary Entry") of the types STRING and RAWSTRING are usually handled as [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data objects in which only one LOB locator is saved within the data record. This locator references the actual string data. Database fields of the type SSTRING are usually saved as [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") fields. An empty long string can also be saved using the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"). The actual handling, however, depends on the individual database system and is not important for ABAP programs.

-   If a [work area](javascript:call_link\('abenopen_sql_wa.htm'\)) or an internal table is used to access table fields of the types SSTRING, STRING, or RAWSTRING in Open SQL, the work area or the row type of the internal table must be compatible with the database structure.

-   If structures, database tables, or views that have strings as components are used for typings in ABAP, it must be remembered that these objects are [deep structures](javascript:call_link\('abendeep_structure_glosry.htm'\) "Glossary Entry"). This means, for example, that they cannot be used in the [TABLES](javascript:call_link\('abaptables.htm'\)) statement (obsolete for database accesses) or for typing the obsolete [table parameters](javascript:call_link\('abentable_parameter_glosry.htm'\) "Glossary Entry") of procedures.

-   Access may be slower for long strings (LOBs) in database tables than for other data types. If not all data is needed at once (and to bypass any memory limits on the application server), [streaming](javascript:call_link\('abenopen_sql_streaming.htm'\)) and [locators](javascript:call_link\('abenlocators.htm'\)) can be used to access long strings.

Use in Open SQL

The following restrictions apply when accessing database fields with character-like and byte-like types in Open SQL:

-   There are no access restrictions to database fields with the data types CHAR and RAW in Open SQL.

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


### abenddic_builtin_types_general.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Predefined Data Types in ABAP Dictionary](javascript:call_link\('abenddic_builtin_types_intro.htm'\)) →  [Attributes of the Predefined Dictionary Types](javascript:call_link\('abenddic_builtin_types_prop.htm'\)) → 

General Dictionary Types

-   [Integers, packed numbers, binary floating point numbers](javascript:call_link\('abenddic_builtin_types_int_pack.htm'\))

-   [Decimal floating point numbers](javascript:call_link\('abenddic_decimal_floating_point.htm'\))

-   [Character-like and byte-like types](javascript:call_link\('abenddic_character_byte_types.htm'\))

Continue
[Integers, Packed Numbers, Binary Floating Point Numbers](javascript:call_link\('abenddic_builtin_types_int_pack.htm'\))
[Decimal Floating Point Numbers](javascript:call_link\('abenddic_decimal_floating_point.htm'\))
[Character-Like Types and Byte-Like Types](javascript:call_link\('abenddic_character_byte_types.htm'\))


### abenddic_builtin_types_special.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Predefined Data Types in ABAP Dictionary](javascript:call_link\('abenddic_builtin_types_intro.htm'\)) →  [Attributes of the Predefined Dictionary Types](javascript:call_link\('abenddic_builtin_types_prop.htm'\)) → 

Special Dictionary Types

-   [Date types and time types](javascript:call_link\('abenddic_date_time_types.htm'\))

-   [Special character-like types](javascript:call_link\('abenddic_special_character_types.htm'\))

-   [Currency fields](javascript:call_link\('abenddic_currency_field.htm'\))

-   [Quantity fields](javascript:call_link\('abenddic_quantity_field.htm'\))

Continue
[Date Types and Time Types](javascript:call_link\('abenddic_date_time_types.htm'\))
[Special Character-Like Types](javascript:call_link\('abenddic_special_character_types.htm'\))
[Currency Fields](javascript:call_link\('abenddic_currency_field.htm'\))
[Quantity Fields](javascript:call_link\('abenddic_quantity_field.htm'\))


### abenddic_date_time_types.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Predefined Data Types in ABAP Dictionary](javascript:call_link\('abenddic_builtin_types_intro.htm'\)) →  [Attributes of the Predefined Dictionary Types](javascript:call_link\('abenddic_builtin_types_prop.htm'\)) →  [Special Dictionary Types](javascript:call_link\('abenddic_builtin_types_special.htm'\)) → 

Date Types and Time Types

The following character-like data types in ABAP Dictionary describe date fields and time fields:

-   [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)) or [date fields](javascript:call_link\('abendate_field_glosry.htm'\) "Glossary Entry")

From a technical perspective, the predefined data type DATS describes objects of the type CHAR with a length of 8 characters. It is designed for [calendar dates](javascript:call_link\('abencalendar_date_glosry.htm'\) "Glossary Entry") in the format YYYYMMDD, but this is not checked when performing writes and reads on database fields with this type. Automatic checks are only made for dynpro fields typed with reference to DATS. In ABAP, DATS is assigned to the special type [d](javascript:call_link\('abenbuiltin_types_date_time.htm'\)) and the associated rules apply.

-   [TIMS](javascript:call_link\('abenddic_builtin_types.htm'\)) for [time fields](javascript:call_link\('abendate_field_glosry.htm'\) "Glossary Entry")

From a technical perspective, the predefined data type TIMS describes objects of the type CHAR with a length of 6 characters. It is designed for [times](javascript:call_link\('abenday_time_glosry.htm'\) "Glossary Entry") in the format HHMMSS, but this is not checked when performing writes and reads on database fields with this type. Automatic checks are only made for dynpro fields typed with reference to TIMS. In ABAP, TIMS is assigned to the special type [t](javascript:call_link\('abenbuiltin_types_date_time.htm'\)) and the associated rules apply.

-   [ACCP](javascript:call_link\('abenddic_builtin_types.htm'\)) for posting periods

From a technical perspective, the predefined data type ACCP describes objects of the type CHAR with a length of 6 characters. It is designed for posting periods in the format YYYYMM, but this is not checked when performing writes and reads on database fields with this type. Automatic checks are only made for dynpro fields typed with reference to ACCP.

Notes

-   The output formats for fields on dynpros and Web Dynpros and in the statements [WRITE](javascript:call_link\('abapwrite-.htm'\)) or [WRITE TO](javascript:call_link\('abapwrite_to.htm'\)) can be predefined for the types DATS and TIMS specific to each user in the [user master record](javascript:call_link\('abenuser_master_record_glosry.htm'\) "Glossary Entry"). The output length required for formatted output is usually greater than the number of places in ABAP Dictionary. If the output length is too short, any formatting characters are suppressed.

-   When a [dynpro field](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry") is represented with reference to the type ACCP (but not in the statements [WRITE](javascript:call_link\('abapwrite-.htm'\)) or [WRITE TO](javascript:call_link\('abapwrite_to.htm'\))) and there is enough output length, a point is inserted between the year YYYY and the month MM.


### abenddic_special_character_types.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Predefined Data Types in ABAP Dictionary](javascript:call_link\('abenddic_builtin_types_intro.htm'\)) →  [Attributes of the Predefined Dictionary Types](javascript:call_link\('abenddic_builtin_types_prop.htm'\)) →  [Special Dictionary Types](javascript:call_link\('abenddic_builtin_types_special.htm'\)) → 

Special Character-Like Types

The following character-like data types in ABAP Dictionary have a special semantic meaning:

-   [NUMC](javascript:call_link\('abenddic_builtin_types.htm'\)) for [numeric texts](javascript:call_link\('abennumeric_text_glosry.htm'\) "Glossary Entry")

From a technical perspective, the built-in data type NUMC describes objects of the type CHAR with a maximum length of 255 characters. It is intended for numerical texts. This is not checked however when writing to or reading from database fields of this type. Automatic checks are only made for dynpro fields typed with reference to NUMC. In ABAP, NUMC is assigned to the special type [n](javascript:call_link\('abenbuiltin_types_character.htm'\)) and the associated rules apply.

-   [CLNT](javascript:call_link\('abenddic_builtin_types.htm'\)) for [client columns](javascript:call_link\('abenclient_column_glosry.htm'\) "Glossary Entry")

From a technical perspective, the data type CLNT describes objects of the type CHAR with length 3. If the data type CLNT is used for the first key field of a database table, this makes the database table [client-specific](javascript:call_link\('abenddic_database_tables_client.htm'\)).

-   [LANG](javascript:call_link\('abenddic_builtin_types.htm'\)) for [text language](javascript:call_link\('abentext_language_glosry.htm'\) "Glossary Entry")

From a technical perspective, the predefined data type LANG describes objects of the type CHAR with length 1. It is intended specifically for language keys. A component of structures or database tables that has the data type LANG can be identified as text language. The text language is used to convert character-like components of the structure when importing data from [data clusters](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry") and in the binary [RFC protocol](javascript:call_link\('abenrfc_protocol.htm'\)) for passing TABLES parameters between [MDMP systems](javascript:call_link\('abenmdmp-system_glosry.htm'\) "Glossary Entry") and [Unicode systems](javascript:call_link\('abenunicode_system_glosry.htm'\) "Glossary Entry"). The [primary key](javascript:call_link\('abenprimary_key_glosry.htm'\) "Glossary Entry") of a [text table](javascript:call_link\('abentext_table_glosry.htm'\) "Glossary Entry") is still made up of the [foreign key](javascript:call_link\('abenforeign_key_glosry.htm'\) "Glossary Entry") and a field of type LANG.

Note

When the statements [WRITE](javascript:call_link\('abapwrite-.htm'\)) or [WRITE TO](javascript:call_link\('abapwrite_to.htm'\)) are used to represent a [dynpro field](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry") with the type LANG (and when a field that references this type is formatted), this field has an output length of 2 and is converted automatically from the single-character internal language ID to the matching two-character ISO ID using the [conversion routine](javascript:call_link\('abenconversion_routine_glosry.htm'\) "Glossary Entry") ISOLA (and back).


### abenddic_currency_field.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Predefined Data Types in ABAP Dictionary](javascript:call_link\('abenddic_builtin_types_intro.htm'\)) →  [Attributes of the Predefined Dictionary Types](javascript:call_link\('abenddic_builtin_types_prop.htm'\)) →  [Special Dictionary Types](javascript:call_link\('abenddic_builtin_types_special.htm'\)) → 

Currency Fields

A currency field is a component of a structure, database table, or view defined in ABAP Dictionary of type [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)) and used to record an amount in a specific currency. The amount is specified as a whole number in the smallest unit of the currency. A currency field must be associated with a currency key of a structure, database table, or view that specifies the currency and the number of decimal places. A currency key is a component of a structure, database table, or view defined in ABAP Dictionary, has the type CUKY, and can contain a [currency ID](javascript:call_link\('abencurrency_id_glosry.htm'\) "Glossary Entry") from the database table TCURC.

By default, the number of decimal places for a currency is always two. Currencies with a different number of decimal places must also be entered in the table TCURX, where the number of decimal places can be defined explicitly.

-   [Handling in ABAP Dictionary](#abenddic-currency-field-1--------handling-in-dynpros---@ITOC@@ABENDDIC_CURRENCY_FIELD_2)

-   [Handling in ABAP Programs](#abenddic-currency-field-3---notes------currencies-are-handled-as-specified-by-the-data-saved-in-the-database-tables-tcur----of-the-package-sfib--the-exchange-rates-and-other-settings-can-be-edited-in-transaction-ob08-------currency-fields-are-defined-as-elements-of--cds-entities--javascript-call-link---abencds-entity-glosry-htm-----glossary-entry---using--semantics-annotations--javascript-call-link---abencds-f1-element-annotation-htm-------handling-in-abap-dictionary--a-data-element-of-data-type--curr--javascript-call-link---abenddic-builtin-types-htm-----is-handled-as-a-field-of-data-type--dec--javascript-call-link---abenddic-builtin-types-int-pack-htm-----and-is-stored-in-database-tables-in-the--bcd--javascript-call-link---abenbcd-glosry-htm-----glossary-entry---format--when-creating-a-data-element-or-a-structure-component-of-the-data-type-curr-in-an-abap-dictionary--tool--javascript-call-link---abenddic-tools-htm------a-number-of-decimal-places-other-than-zero-must-be-defined--the-standard-value-is-two-fractional-digits---for-every-structure-component-of-data-type-curr--a-component-of-the-same-structure-or-of-a-different-structure--database-table--or-view-must-be-specified-when-editing-the-individual-component-as-a--reference-field--javascript-call-link---abenddic-structures-sema-htm-----with-the-data-type--cuky--javascript-call-link---abenddic-builtin-types-htm------this-field-is-the--currency-key--javascript-call-link---abencurrency-key-glosry-htm-----glossary-entry---that-defines-the-actual-currency--from-a-technical-perspective--the-data-type-cuky-is-handled-like-a-type-char-with-length-5---notes------the-number-of-decimal-places-for-the-currency-defined-by-the-currency-key-of-type-cuky-only-determines-the-formatting-and-checking-of-a-currency-field-on-a-dynpro--in-principal--it-is-independent-of-the-number-given-for-the-currency-field-of-type-curr--the-default-value-of-two-decimal-places-for-currency-fields-in-abap-dictionary-is-chosen-because-most-of-the-currencies-in-the-database-table-tcurc-have-two-decimal-places-and-are-not-entered-in-the-database-table-tcurx--it-is-not-advisable-to-use-any-other-value--since-in-this-case-any-unforeseen-operations-with-currency-keys-in-abap-programs-are-largely-ignored-------the-conversion-function--currency--conversion--javascript-call-link---abencds-f1-conversion-functions-htm-----in--abap-cds--javascript-call-link---abenabap-cds-glosry-htm-----glossary-entry---also-assumes-two-decimal-places-for-currency-fields--if-the-function-for-currency-fields-is-used-with-other-amounts-of-decimal-places--unexpected-behaviour-may-arise-------as-in--general-packed-numbers--javascript-call-link---abenddic-builtin-types-int-pack-htm------the-number-of-places-in-type-curr-should-be-odd---handling-in-dynpros--for-the-display-of-an-input-output-field-of-type-curr-on-a--dynpro--javascript-call-link---abendynpro-glosry-htm-----glossary-entry----the-content-is-displayed-as-character-like-content-and-in-accordance-with-a-type-dependent-mask--as-for-all--dynpro-fields--javascript-call-link---abendynpro-field-glosry-htm-----glossary-entry----here--the-positioning-of-the-decimal-point-for-a-currency-field-of-type-curr-on-a-dynpro-is-completely-independent-of-the-number-of-decimal-places-specified-by-the-data-element-in-abap-dictionary--greater-than-or-equal-to-one--the-default-value-is-two---the-number-of-decimal-places-on-a-dynpro-is-defined-as-follows-------when-displaying-a-dynpro-field-of-type-curr--the-reference-field-for-the-currency-key-is-searched-for-in-the-global-data-of-the-current-abap-program--the-content-of-this-field-must-be-a-valid--currency-id--javascript-call-link---abencurrency-id-glosry-htm-----glossary-entry---from-the-database-table-tcurc--if-the-reference-field-is-not-found-or-there-is-no-entry-in-the-database-table-tcurx-with-the-content-of-the-field--the-currency-field-is-displayed-with-two-fractional-digits-by-default------the-reference-field-is-either-defined-in-the-relevant-structure-in-abap-dictionary-or-was-defined-using-screen-painter-for-the-attributes-of-the-dynpro-field--it-does-not-have-to-be-present-on-the-dynpro-itself-------if-the-currency-id-for-the-reference-field-is-found-in-the-database-table-tcurx--the-currency-field-is-displayed-with-the-decimal-places-specified-there--this-also-applies-to-initial-reference-fields---note--a-dynpro-therefore-only-uses-the-string-of-digits-of-a-currency-field-from-the-abap-program--or-a--conversion-routine--javascript-call-link---abenconversion-routine-glosry-htm-----glossary-entry---in-between--or-just-sends-this-string--any-information-about-currency-keys-and-decimal-places-is-not-passed-automatically--it-must-be-ensured-that-the-reference-field-for-pbo-is-filled-with-the-appropriate-value--for-pai--the-correct-currency-key-plays-a-part-in-the-automatic-format-check--especially-on-dynpros-in-which-currency-fields-are-displayed-in-differing-currencies--it-must-be-ensured-that-the-reference-field-is-transported-before-the-currency-by-using-the-statements--chain--javascript-call-link---dynpchain-htm-----and--field--javascript-call-link---dynpfield-htm-------handling-in-abap-programs--the-abap-type-that-corresponds-to-the-curr-data-type-is-p--an-abap-data-object-declared-with-reference-to-a-dictionary-type-of-type-curr-has-the-number-of-decimal-places-defined-there--greater-than-or-equal-to-one-and-the-default-is-two---these-decimal-places-are-respected-for-all-operations-and-calculations--as-for-all-packed-numbers--the-only-exceptions-are-the-programs-for-which-the-program-property--fixed-point-arithmetic--javascript-call-link---abenfixed-point-arithmetic-glosry-htm-----glossary-entry---was-not-set---to-work-correctly-with-a-currency-field--all-digits-in-the-number-must-be-recorded-as-currency-amounts-in-the-smallest-possible-currency-units--regardless-of-the-number-of-decimal-places--this-occurs-automatically-sometimes--for-example--if--currency--javascript-call-link---abapwrite-to-options-htm-----is-used-after--write---to----javascript-call-link---abapwrite-to-htm-----or-the-formatting-option--currency--javascript-call-link---abapcompute-string-format-options-htm-----in-an--embedded-expression--javascript-call-link---abenstring-templates-expressions-htm-----of-a--character-string-template--javascript-call-link---abenstring-templates-htm------for-other-operations--the-following-restrictions-apply-------comparison--addition--subtraction--and-division-of-two-currency-fields-with-the-same-number-of-fractional-digits-are-not-critical-------multiplication-with-and-division-by-a-non-currency-dependent-number-is-not-critical-------all-other-operations-are-critical--for-example-------multiplication-of-two-currency-fields-------operations-between-two-fields-with-different-currencies-that-include-assignments-------assignments-of-non-currency-dependent-numbers-to-currency-fields---accurate-results-should-not-be-expected-when-performing-critical-operations-if-the-number-of-decimal-places-in-the-program-does-not-match-the-number-in-the-currency---note--for-currencies--one-of-the-data-types-for--decimal-floating-point-numbers--javascript-call-link---abenddic-decimal-floating-point-htm-----is-recommended-rather-than-the-data-type-curr--the-currency-compliant-formatting-is-supported-on-dynpros-by-output-styles-and-by-style-compatible-formatting-in-abap-programs--see-the--executable-example--javascript-call-link---abenwrite-style-abexa-htm------------abenddic-quantity-field-htm-------------sap-netweaver-as-abap-release-752---copyright-2017-sap-ag--all-rights-reserved----abap---keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------predefined-data-types-in-abap-dictionary--javascript-call-link---abenddic-builtin-types-intro-htm---------attributes-of-the-predefined-dictionary-types--javascript-call-link---abenddic-builtin-types-prop-htm---------special-dictionary-types--javascript-call-link---abenddic-builtin-types-special-htm---------quantity-fields--a-quantity-field-is-a-component-of-a-structure--database-table--or-view-of-type--quan--javascript-call-link---abenddic-builtin-types-htm-----defined-in-abap-dictionary-and-used-to-record-a-quantity-in-a-specific-unit--a-quantity-field-must-be-associated-with-a-unit-key-of-a-structure--database-table--or-view-that-defines-the-unit-and-the-number-of-decimal-places--a-unit-key-is-a-component-of-a-structure--database-table--or-view-of-type-unit-defined-in-abap-dictionary-and-can-contain-a--unit-id--javascript-call-link---abenunit-id-glosry-htm-----glossary-entry---from-the-database-table-t006--------handling-in-abap-dictionary---@ITOC@@ABENDDIC_QUANTITY_FIELD_1)

-   [Handling in Dynpros](#abenddic-quantity-field-2--------handling-in-abap-programs---@ITOC@@ABENDDIC_QUANTITY_FIELD_3)

Notes

-   Quantities and units are handled as specified by the data saved in the database tables T006... in the package SZME. This data can be edited using the transaction CUNI.

-   Quantity fields are defined as elements of [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") using [semantics annotations](javascript:call_link\('abencds_f1_element_annotation.htm'\)).

Handling in ABAP Dictionary

A data element of data type [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)) is handled as a field of data type [DEC](javascript:call_link\('abenddic_builtin_types_int_pack.htm'\)) and is stored in database tables in the [BCD](javascript:call_link\('abenbcd_glosry.htm'\) "Glossary Entry") format. When creating a data element or a structure component of the data type QUAN in an ABAP Dictionary [tool](javascript:call_link\('abenddic_tools.htm'\)), any number of decimal places can be defined. The default value is no decimal places.

For every structure component of data type QUAN, a component of the same structure or of a different structure, database table, or view must be specified when editing the individual component as a [reference field](javascript:call_link\('abenddic_structures_sema.htm'\)) with the data type [UNIT](javascript:call_link\('abenddic_builtin_types.htm'\)). This field is the [unit key](javascript:call_link\('abenunit_glosry.htm'\) "Glossary Entry") that defines the unit of the quantity. From a technical perspective, the data type UNIT is handled like a type CHAR with length 2.

Notes

-   The number of decimal places for the unit defined using the unit key of type UNIT only influences the formatting of a quantity field on a dynpro. In principal, it is independent of the number given for the quantity field of type QUAN.

-   As in [general packed numbers](javascript:call_link\('abenddic_builtin_types_int_pack.htm'\)), the number of places in type QUAN should be odd.

Handling in Dynpros

For the display of an input/output field of type QUAN on a [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry"), the content is displayed as character-like content and in accordance with a type-dependent mask, as for all [dynpro fields](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry"). The system tries to create a display which suits the unit of the quantity field.

To determine the unit, the global data of the current ABAP program is searched for the reference field associated with the field for the unit key. The content of this field must be a valid [unit ID](javascript:call_link\('abenunit_id_glosry.htm'\) "Glossary Entry") from the database table T006. If the reference field is not found or if there is no entry in the database table T006 with the content of the field, the quantity field is displayed as a regular field of type DEC.

The reference field is either defined in the relevant structure in ABAP Dictionary or was defined using Screen Painter for the attributes of the dynpro field. It does not have to be present on the dynpro itself.

If the unit ID of the reference field is found in the column MSEHI of the database table T006 and the quantity field does not have any decimal places with a value other than 0 outside the accuracy defined in the column DECAN, the quantity field is displayed with this accuracy. For a unit without decimal places, the decimal separator is suppressed. If the quantity field has decimal places with a value other than 0 outside of its accuracy, however, it is displayed as a regular field of type DEC.

Note

A display that matches the accuracy of a quantity field is only then possible if no information is lost. This makes it possible, for example, for average values (else integer units) to be displayed in a relevant quantity field.

Handling in ABAP Programs

The ABAP type that corresponds to the data type QUAN is p. An ABAP data object declared with reference to a dictionary type of type QUAN has the number of decimal places defined there. These decimal places are respected for all operations and calculations, as for all packed numbers.

The unit defined for a quantity field only plays a part in ABAP programs if it is specified after the addition [UNIT](javascript:call_link\('abapwrite_to_options.htm'\)) of the statement [WRITE *\[*TO*\]*](javascript:call_link\('abapwrite_to.htm'\)).


### abenddic_builtin_types_special.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Predefined Data Types in ABAP Dictionary](javascript:call_link\('abenddic_builtin_types_intro.htm'\)) →  [Attributes of the Predefined Dictionary Types](javascript:call_link\('abenddic_builtin_types_prop.htm'\)) → 

Special Dictionary Types

-   [Date types and time types](javascript:call_link\('abenddic_date_time_types.htm'\))

-   [Special character-like types](javascript:call_link\('abenddic_special_character_types.htm'\))

-   [Currency fields](javascript:call_link\('abenddic_currency_field.htm'\))

-   [Quantity fields](javascript:call_link\('abenddic_quantity_field.htm'\))

Continue
[Date Types and Time Types](javascript:call_link\('abenddic_date_time_types.htm'\))
[Special Character-Like Types](javascript:call_link\('abenddic_special_character_types.htm'\))
[Currency Fields](javascript:call_link\('abenddic_currency_field.htm'\))
[Quantity Fields](javascript:call_link\('abenddic_quantity_field.htm'\))


### abenddic_obsolete_types.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Predefined Data Types in ABAP Dictionary](javascript:call_link\('abenddic_builtin_types_intro.htm'\)) →  [Attributes of the Predefined Dictionary Types](javascript:call_link\('abenddic_builtin_types_prop.htm'\)) → 

Obsolete Dictionary Types

The following predefined data types in ABAP Dictionary are obsolete and should no longer be used:

-   The data types [DF16\_SCL](javascript:call_link\('abenddic_builtin_types.htm'\)) and [DF34\_SCL](javascript:call_link\('abenddic_builtin_types.htm'\)) for [decimal floating point numbers](javascript:call_link\('abenddic_decimal_floating_point.htm'\)) with scaling are obsolete and their use is strongly discouraged.

-   The data type [PREC](javascript:call_link\('abenddic_builtin_types.htm'\)) is obsolete and should no longer be used. In ABAP Dictionary and in ABAP programs, it is handled like INT2 despite the predefined length, 2. The length 2 is relevant only for dynpro fields of the type PREC, which can have two-character positive values at most. The property sign cannot be set for a domain of the type PREC

-   The data type [VARC](javascript:call_link\('abenddic_builtin_types.htm'\)) is obsolete and cannot be used for new definitions. It was previously used for character strings with variable lengths. Existing data types with this predefined type can still be used. When table fields with this type are used in Open SQL, the same [restrictions](javascript:call_link\('abenddic_character_byte_types.htm'\)) apply as to fields with the types STRING and RAWSTRING plus LCHR and LRAW.


---


## ABAP - Keyword Documentation / ABAP - Reference / Program Flow Logic / Expressions and Functions for Conditions / log_exp - Logical Expressions / rel_exp - Comparison Expressions / rel_exp - Comparison Rules / rel_exp - Comparing Elementary Data Types / rel_exp - Comparison Type of Calculation Expressions

**Files**: 4 | **Difficulty**: intermediate

# ABAP - Keyword Documentation / ABAP - Reference / Program Flow Logic / Expressions and Functions for Conditions / Logical Functions

Included pages: 2


### abenlogic_functions.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) → 

Logical Functions

Logical functions belong to the [predefined functions](javascript:call_link\('abenbuilt_in_functions.htm'\)). They are divided into:

-   [Boolean functions](javascript:call_link\('abenboole_functions.htm'\))

-   [Predicate functions](javascript:call_link\('abenpredicate_functions.htm'\))

Note

The program DEMO\_EXPRESSIONS shows you examples of how to use logical functions.

Continue
[boolc, boolx, xsdbool - Boolean Functions](javascript:call_link\('abenboole_functions.htm'\))


### abenboole_functions.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [Logical Functions](javascript:call_link\('abenlogic_functions.htm'\)) → 

boolc, boolx, xsdbool - Boolean Functions

Variants:

[1\. ... boolc( log\_exp ) ...](#!ABAP_VARIANT_1@1@)
[2\. ... boolx( bool = log\_exp bit = bit ) ...](#!ABAP_VARIANT_2@2@)
[3\. ... xsdbool( log\_exp ) ...](#!ABAP_VARIANT_3@3@)

Effect

The Boolean functions determine the [truth value](javascript:call_link\('abenlogical_value_glosry.htm'\) "Glossary Entry") of a logical expression [log\_exp](javascript:call_link\('abenlogexp.htm'\)) specified as an argument. For log\_exp, any logical expression can be specified in accordance with the applicable rules. The return value of a Boolean function has a data type determined by the function and expresses the truth value of the logical expression using a value of this type.

Note

These functions can be viewed as a partial replacement for the Boolean data type for truth values not available in ABAP. In particular, xsdbool and (with restrictions) boolc can be used in many operand positions where input parameters of the type abap\_bool of the type group ABAP are expected.

Variant 1

... boolc( log\_exp ) ...

Effect

The function boolc returns a single-character character string of the type string. If the logical expression is true, "X" is returned. If the logical expression is false, a blank is returned. In principle, boolc is one of the [processing functions with character-like results](javascript:call_link\('abenprocess_functions.htm'\)) and can be specified in [general expression positions](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry") and in [character-like expression positions](javascript:call_link\('abencharlike_expr_position_glosry.htm'\) "Glossary Entry").

Notes

-   If boolc requires return values other than "X" or " " (for example, "Y" and "N" or "1" and "0"), the result of boolc can be edited directly using the function [translate](javascript:call_link\('abentranslate_functions.htm'\)) or another suitable [processing function](javascript:call_link\('abenprocess_functions.htm'\)).

-   The result of boolc must not be compared with the constants abap\_true and abap\_false in relational expressions, since the comparison converts the latter from c to string and ignores any blanks. Comparisons of this type are not usually necessary. If a comparison of this type is required anyway, the function xsdbool can be used instead of boolc. The result of this function has the same ABAP type as abap\_bool.

-   If the logical expression is false, the result of boolc does not meet the condition [IS INITIAL](javascript:call_link\('abenlogexp_initial.htm'\)), since a blank is returned (not an empty string). If this is the required behavior, the function xsdbool can be used instead of boolc.

-   If boolc is used in inappropriate places (as specified in the points above), a syntax warning is produced (which can be hidden using a pragma).

Example

The value 0, 1, or 2 is assigned to the variable bool\_value, depending on the result of the logical expressions log\_exp1 and log\_exp2.

DATA bool\_value TYPE i.
bool\_value = strlen( condense( val = boolc( log\_exp1 ) ) ) +
             strlen( condense( val = boolc( log\_exp2 ) ) ).

Example

Calls a method, where the input parameter no\_dialog is supplied with the character-like representation of the results of a predicate expression.

PARAMETERS word TYPE c length 30.
DATA result\_tab TYPE cl\_abap\_docu=>search\_results.
cl\_abap\_docu=>start(
  EXPORTING word           = word
            no\_dialog      = boolc( sy-batch IS NOT INITIAL )
  IMPORTING search\_results = result\_tab ).

Variant 2

... boolx( bool = log\_exp bit = bit ) ...

Effect

The function boolx returns a byte chain of the type xstring. If the logical expression is true, the byte chain is filled as if the function [bit-set( bit )](javascript:call_link\('abenbit_functions.htm'\)) were being executed. If the logical expression is false, the byte chain is filled as if the function [bit-set( 0 )](javascript:call_link\('abenbit_functions.htm'\)) were being executed. bit expects a data object of the type i. In principle, boolx is one of the [bit functions](javascript:call_link\('abenbit_functions.htm'\)) and can be used in all positions where a [bit expression](javascript:call_link\('abenbit_expression_glosry.htm'\) "Glossary Entry") is also allowed.

Note

The function boolx can be used for efficient saving of sequences of truth values.

Example

The result of the following [bit expression](javascript:call_link\('abenbit_expression_glosry.htm'\) "Glossary Entry") is hexadecimal 55, the same as the calculated bit string 01010101.

DATA(result) = boolx( bool = 2 > 1 bit = 8 )
        BIT-OR boolx( bool = 2 < 1 bit = 7 )
        BIT-OR boolx( bool = 2 > 1 bit = 6 )
        BIT-OR boolx( bool = 2 < 1 bit = 5 )
        BIT-OR boolx( bool = 2 > 1 bit = 4 )
        BIT-OR boolx( bool = 2 < 1 bit = 3 )
        BIT-OR boolx( bool = 2 > 1 bit = 2 )
        BIT-OR boolx( bool = 2 < 1 bit = 1 ).

The bit expression above can be expressed using the following iteration with the operator [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)).

DATA(result) =
  REDUCE xstring( INIT x TYPE xstring
                  FOR j = 4 THEN j - 1 UNTIL j < 1
                  LET b1 = 2 \* j b2 = 2 \* j - 2 IN
                  NEXT x = x BIT-OR boolx( bool = 2 > 1  bit = b1 )
                             BIT-OR boolx( bool = 2 < 1  bit = b2 ) ).

Variant 3

... xsdbool( log\_exp ) ...

Effect

Like boolc, the function xsdbool returns the value "X" for true and a blank for false. The data type of the return value, however, has the type c of the length 1 here.

The return value references the type XSDBOOLEAN from ABAP Dictionary. This type (which references the identically named domain with the type CHAR and length 1) is handled like a real Boolean type in serializations and deserializations to or from [asXML](javascript:call_link\('abenabap_xslt_asxml_schema.htm'\)) and [asJSON](javascript:call_link\('abenabap_asjson_schema.htm'\)) using [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)). The XML or JSON values true and false are assigned to the values "X" and " " of this type.

xsdbool can be specified in [general](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry") and [character-like expression positions](javascript:call_link\('abencharlike_expr_position_glosry.htm'\) "Glossary Entry").

Notes

-   The result of xsdbool can be used like a value of the type abap\_bool and compared with the constants abap\_true and abap\_false.

-   If the logical expression is false, the result of boolc meets the condition [IS INITIAL](javascript:call_link\('abenlogexp_initial.htm'\)), since the returned blank is the type-dependent initial value too.

-   The result of xsdbool cannot usually be implemented directly using a [processing function](javascript:call_link\('abenprocess_functions.htm'\)) such as [translate](javascript:call_link\('abentranslate_functions.htm'\)), since the trailing blanks here are ignored in text fields with the type c. The result of a false logical expression would be ignored. The result of the function boolc with the type string is better suited to transformations of this type.

-   The abbreviation xsd stands for [XML schema data types](http://www.w3.org/tr/xmlschema-2/).

Example

This example sets the type and the value of the variable gui\_flag declared inline using the Boolean function xsdbool. A [predicative method call](javascript:call_link\('abenpredicative_method_call_glosry.htm'\) "Glossary Entry") is specified as the argument of this function. The variable is then serialized to [asXML](javascript:call_link\('abenasxml_glosry.htm'\) "Glossary Entry") and [asJSON](javascript:call_link\('abenasjson_glosry.htm'\) "Glossary Entry") using the predefined [identity transformation](javascript:call_link\('abenid_trafo_glosry.htm'\) "Glossary Entry") [ID](javascript:call_link\('abenabap_xslt_id.htm'\)). This produces the value true or false. After being compared with the identically typed constant abap\_false, the result of the serializations is either read or displayed.

The result would be very different if boolc were used instead of xsdbool. Firstly, the transformations would have a different result (since the values "X" and " " are not transformed to true or false); secondly, the logical expression gui\_flag = abap\_false would always be false (since abap\_false loses its blank when converted to the type string).

DATA(gui\_flag) = xsdbool( cl\_demo\_sap\_gui=>check( ) ).
CALL TRANSFORMATION id SOURCE gui\_flag = gui\_flag
                       RESULT XML DATA(xml).
DATA(writer) =
  cl\_sxml\_string\_writer=>create( type = if\_sxml=>co\_xt\_json ).
CALL TRANSFORMATION id SOURCE gui\_flag = gui\_flag
                       RESULT XML writer.
DATA(json) = writer->get\_output( ).
cl\_demo\_output=>write\_xml( xml ).
cl\_demo\_output=>write\_json( json ).
IF gui\_flag = abap\_false.
  cl\_demo\_output=>get( ).
ELSE.
  cl\_demo\_output=>display( ).
ENDIF.


---


## ABAP - Keyword Documentation / ABAP - Reference / Obsolete Language Elements / Obsolete Type Reference

**Files**: 2 | **Difficulty**: intermediate

# ABAP - Keyword Documentation / ABAP - Reference / Obsolete Language Elements / Obsolete Type Reference

Included pages: 2


### abenobsolete_typing.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) → 

Obsolete Type Reference

-   [Obsolete use of LIKE](javascript:call_link\('abenlike_obsolete.htm'\))

Continue
[LIKE - obsolete](javascript:call_link\('abenlike_obsolete.htm'\))


### abenlike_obsolete.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Type Reference](javascript:call_link\('abenobsolete_typing.htm'\)) → 

LIKE - obsolete

Obsolete Syntax

... LIKE dtype ...

Effect

Outside of classes, the addition LIKE can also be used to refer to [flat structures](javascript:call_link\('abenflat_structure_glosry.htm'\) "Glossary Entry"), [database tables](javascript:call_link\('abendatabase_table_glosry.htm'\) "Glossary Entry"), or [classic views](javascript:call_link\('abenclassical_view_glosry.htm'\) "Glossary Entry") in ABAP Dictionary, as well as to their components. A LIKE reference to the flat components of a deep dictionary structure is not possible. This affects the following ways of using LIKE:

-   in the declarative statements [TYPES](javascript:call_link\('abaptypes.htm'\)), [DATA](javascript:call_link\('abapdata.htm'\)), and so on.

-   in [complete typings](javascript:call_link\('abentyping_complete.htm'\))

-   in the statement [PARAMETERS](javascript:call_link\('abapparameters_type.htm'\))

If there is a data object called dtype in a local context, then this object obscures the data type from ABAP Dictionary.

Notes

-   Use the addition LIKE only to refer to data objects.

-   It is not possible to make a LIKE reference to a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"). It is possible, however, to make a LIKE reference to a [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry").

-   Always use the addition TYPE to refer to data types.

Bad Example

DATA wa LIKE scarr.

Good Example

DATA wa TYPE scarr.


---
