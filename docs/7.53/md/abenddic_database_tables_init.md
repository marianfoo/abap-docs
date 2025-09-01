  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_classical_objects.htm) →  [Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables.htm) →  [Semantic Attributes of Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_sema.htm) →  [Table-Specific Semantic Attributes of Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_semasspec.htm) → 

Flag for Initial Values in Database Tables

Table fields of database tables can be given a flag for initial values. On the database, this flag is set to NOT NULL. When a new field is inserted into an existing database table, this flag can be used (on any platform) to assign the [type-dependent initial value](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) to this field in all rows. The flag is always set automatically for [key fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_key.htm).

If a new table field without the property NOT NULL is inserted in an existing table, the field is given a [null value](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennull_value_glosry.htm "Glossary Entry") in all rows. There is no counterpart to the null value in ABAP. It can only be queried in [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_glosry.htm "Glossary Entry") using the special WHERE condition [IS *\[*NOT*\]* NULL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_null.htm).

Generally, table fields on most database platforms are created as NOT NULL, even if the flag for the initial value is not set in ABAP Dictionary. Furthermore, all fields are given the property NOT NULL:

-   When a new table is created

-   When a table is [updated](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_conv.htm)

With the exception of key fields on some database platforms, new fields are not created as NOT NULL only if they can be appended or inserted using ALTER TABLE without an [update](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_conv.htm) (if the flag is not set in ABAP Dictionary). The NOT NULL definition of a database field can be seen in ABAP Dictionary by displaying the database object.

If the flag is set for an entire include structure, it only applies to those structure components where the flag is also set and not to all components. If the flag is not set for an include structure, all flags set in the included structure are ignored.

Notes

-   The flag cannot be set for data types without an [initial value](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm), namely LCHR, LRAW, RAW, and the obsolete VARC plus NUMC with a length of 70 or greater.

-   This flag is only needed when inserting new fields and the initial value is always set. This is of particular importance when tables are [updated](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_conv.htm).

-   In tables with many rows, it can take a long time to set the type-dependent initial value and the initial value flag should only be used if absolutely necessary or if the table has a small number of entries.