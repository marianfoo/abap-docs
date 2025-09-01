  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Semantic Attributes of Database Tables](javascript:call_link\('abenddic_database_tables_sema.htm'\)) →  [DDIC - Table-Specific Semantic Attributes of Database Tables](javascript:call_link\('abenddic_database_tables_semasspec.htm'\)) → 

DDIC - Key Fields of Database Tables

At least one table field must be flagged as a [key field](javascript:call_link\('abenkey_field_glosry.htm'\) "Glossary Entry") in the structure of a DDIC database table. The table fields flagged as the key field become the [primary key](javascript:call_link\('abenprimary_key_glosry.htm'\) "Glossary Entry") of the table. The key fields of a table must be located together at the beginning of the table, which means that no non-key fields are allowed between two key fields. The primary key comprising the key fields is a unique identification for a table row. If other combinations of table rows identify a table row uniquely, they are called key candidates. The [primary index](javascript:call_link\('abenprimary_index_glosry.htm'\) "Glossary Entry") is created for the primary key of the table. This index provides optimized key access to the table rows when values are specified for the key fields.

There can be a maximum of 16 key fields in each table. The total number of bytes in all key fields on the database cannot exceed 900. If the number is greater than 120, however, the following restrictions apply:

-   Table content cannot be transported by specifying the complete key values. Instead, the generic key values must be specified with a maximum total of 120 bytes or characters.

-   The table cannot be used as the basis table of a [lock object](javascript:call_link\('abenlock_object_glosry.htm'\) "Glossary Entry").

The following [built-in data types](javascript:call_link\('abenddic_builtin_types.htm'\)) are not allowed for key fields: DF16\_SCL and DF34\_SCL (both obsolete) plus FLTP, STRING, RAWSTRING, LCHR, LRAW, and GEOM\_EWKB. A key field with the type RAW must not be longer than 69 bytes.

Hints

-   The key fields are restricted in such a way that the requirements of all supported database platforms are met. At SAP, tables can be flagged to allow these restrictions to be exceeded in the case of features. When tables flagged in this way are accessed using ABAP SQL, a syntax warning from the [extended program check](javascript:call_link\('abenextended_program_check_glosry.htm'\) "Glossary Entry") occurs. The warning indicates that a cross-platform replacement implementation may be necessary. The class [CL\_ABAP\_DBFEATURES](javascript:call_link\('abencl_abap_dbfeatures.htm'\)) can be used to identify which restrictions are supported by the current database system.

-   In the case of key fields, the [flag for initial values](javascript:call_link\('abenddic_database_tables_init.htm'\)) is always set automatically.

-   No [null values](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry") can be inserted in key fields. Any attempts to do this raise an exception on the database.