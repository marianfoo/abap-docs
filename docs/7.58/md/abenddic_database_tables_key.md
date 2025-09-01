  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables.htm) →  [DDIC - Semantic Properties of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_sema.htm) →  [DDIC - Table-Specific Semantic Properties of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_semasspec.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Key%20Fields%20of%20Database%20Tables%2C%20ABENDDIC_DATABASE_TABLES_KEY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impro
vement:)

DDIC - Key Fields of Database Tables

At least one table field must be flagged as a [key field](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenkey_field_glosry.htm "Glossary Entry") in the structure of a DDIC database table. The table fields flagged as key fields become the [primary key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprimary_key_glosry.htm "Glossary Entry") of the table. The key fields of a table must be located together at the beginning of the table, which means that no non-key fields are allowed between two key fields. The primary key formed by the key fields is a unique identification for a table row. If other combinations of table rows identify a table row uniquely, they are called key candidates. The [primary index](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprimary_index_glosry.htm "Glossary Entry") is created for the primary key of the table. This index provides optimized key access to the table rows when values are specified for the key fields.

There can be a maximum of 16 key fields in each table. The total number of bytes in all key fields on the database cannot exceed 900. If the number is greater than 120, however, the following restrictions apply:

-   Table content cannot be transported by specifying the complete key values. Instead, the generic key values must be specified with a maximum total of 120 bytes or characters.
-   The table cannot be used as the base table of a [lock object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlock_object_glosry.htm "Glossary Entry").

The following [built-in data types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) are not allowed for key fields: DF16\_SCL and DF34\_SCL (both obsolete) plus FLTP, STRING, RAWSTRING, LCHR, LRAW, and GEOM\_EWKB. A key field with the type RAW must not be longer than 69 bytes.

Hints

-   The [flag for initial values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_init.htm) is always set automatically for key fields.
-   No [null values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennull_value_glosry.htm "Glossary Entry") can be inserted in key fields. Any attempts to do this raise an exception on the database.
-   The limit in the number of key fields is defined in such a way that the requirements of all supported database platforms are met. Internally at SAP, tables can be flagged to allow these restrictions to be exceeded in extensions. When tables flagged in this way are accessed using ABAP SQL, a syntax warning from the [extended program check](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenextended_program_check_glosry.htm "Glossary Entry") occurs. The warning indicates that a platform-independent replacement implementation may be necessary. The class [CL\_ABAP\_DBFEATURES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_dbfeatures.htm) can be used to identify which limits are supported by the current database system.