# ABAP Keyword Documentation / ABAP - Dictionary / Classic Objects in ABAP Dictionary / Database Tables / Technical Attributes of Database Tables

Included pages: 11


### abenddic_database_tables_tech.htm

---
title: "Technical Attributes of Database Tables"
description: |
  The technical attributes of a database table include the attributes of its structure and attributes specific to the table. -   Technical attributes of the structure of a database table(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_techstruc.htm) -   Specific
version: "7.53"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_tech.htm"
abapFile: "abenddic_database_tables_tech.htm"
keywords: ["do", "if", "class", "data", "abenddic", "database", "tables", "tech"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_classical_objects.htm) →  [Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables.htm) → 

Technical Attributes of Database Tables

The technical attributes of a database table include the attributes of its structure and attributes specific to the table.

-   [Technical attributes of the structure of a database table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_techstruc.htm)

-   [Specific technical attributes of a database table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_techspec.htm)

Continue
[Structure-Specific Technical Attributes of Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_techstruc.htm)
[Table-Specific Technical Attributes of Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_techspec.htm)


### abenddic_database_tables_techstruc.htm

---
title: "Structure-Specific Technical Attributes of Database Tables"
description: |
  The following technical attributes are mostly the same as those of a structure(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_structures_tech.htm) in ABAP Dictionary: -   Table fields (columns) A table field is a component of the structure of the database table and describes t
version: "7.53"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_techstruc.htm"
abapFile: "abenddic_database_tables_techstruc.htm"
keywords: ["insert", "delete", "do", "if", "case", "try", "class", "data", "types", "abenddic", "database", "tables", "techstruc"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_classical_objects.htm) →  [Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables.htm) →  [Technical Attributes of Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_tech.htm) → 

Structure-Specific Technical Attributes of Database Tables

The following technical attributes are mostly the same as those of a [structure](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_structures_tech.htm) in ABAP Dictionary:

-   Table fields (columns)

A table field is a component of the structure of the database table and describes the name, the data type, and any semantic attributes of a field of a database table. A table field is a component of the structured data type of the table and the associated [rules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_structures_tech.htm) apply to the component name and component type, with the following restrictions:

-   The name of a table field cannot be a reserved name. The reserved names that cannot be used are specified in the database table TRESE. This is also important when using [include structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_include_structure.htm).

-   A table field always has one elementary data type. Reference types, substructures, and table types are not possible. The elementary data type is specified directly for the table field or by using a data element and is always based on a [built-in type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) in ABAP Dictionary. A table field has a platform-specific type in the physical database table. For each platform, there is a mapping between the elementary types in ABAP Dictionary and the platform-specific types. If only [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_glosry.htm "Glossary Entry") is used, this mapping is transparent for ABAP programmers and only the built-in types in ABAP Dictionary and their ABAP types are relevant for the ABAP program.

-   Fields with the type CHAR can have a maximum of 1333 characters.

-   Fields with the type LRAW or LCHR must be at the end of the table. Only one such field is allowed per table. Furthermore, a field with the type INT2 or INT4 (for the maximum length of the field) must be located directly in front of this field.

-   Fields of the obsolete types DF16\_SCL and DF34\_SCL must be followed directly by a field of type INT2 for scaling.

-   Include structures

Structures (but not database tables or views) can be included in a database table as [include structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_include_structure.htm). A structure can only be included in a table if its components meet the table field prerequisites above. In particular, an included structure cannot contain any substructures. Any naming conflicts must be bypassed by defining suffixes. As in regular structures, the include can be assigned the name of a group.

When a structure is included, all its fields can be flagged as [key fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_key.htm). The include structure must then be inserted in the existing key fields or directly after them. Individual fields of an included structure cannot themselves be key fields.

When an include structure is included, the flag for initial values can be set for the entire structure. In this case, those fields in the include structure for which this attribute is set also keep their attribute. If the flag for initial values is not set for the included include structure, none of its fields have this attribute.

The fields of an included include structure are still part of the structure. They can only be edited using the structure and any changes made to the structure are applied to all including database tables. The fields of an included include structure can also be transformed to direct fields of the database table that are no longer associated with the originally included structure.

-   Enhancement category

The same applies to the enhancement category of database tables as to the [enhancement category of structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_structures_enh_cat.htm).

The following applies with respect to the number of fields and length of the structure of a database table:

-   Number of fields

-   A table in the software component SAP\_BASIS can contain a maximum of 749 fields.

-   A table in a software component other than SAP\_BASIS can contain 1000 fields if the [storage type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_storage.htm) is Row Store and 1500 fields if the storage type is Column Store.

-   The total of all field lengths is restricted. The following applies with respect to the total of the number of bytes of the non-character-like fields plus the number of characters of the flat character-like fields:

-   In a table in the software component SAP\_BASIS, the total cannot be greater than 4030.

-   In ABAP Dictionary, no limit applies to tables in software components other than SAP\_BASIS. The limit defined in the current database platform applies (in the [SAP HANA database](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhana_database_glosry.htm "Glossary Entry") this is 512 KB).

In the case of deep fields such as STRING, RAWSTRING, LRAW, and LCHR, only the bytes of the references are counted and not the actual content.

Notes

-   Nested structures cannot be used to write to database tables because these structures are not possible in every supported database.

-   If it meets the prerequisites above, an existing structure can be transformed to a database table. Conversely, a database structure can also be transformed to a regular structure (this deletes the database object).

-   The limit on the number of fields and the length of the structure for tables in the software component SAP\_BASIS is chosen deliberately so that the requirements of any supported database platform can be met. At SAP, tables can be flagged to allow this restriction to be exceeded if enhancements are used. When tables flagged in this way are accessed using ABAP SQL, a syntax warning from the [extended program check](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextended_program_check_glosry.htm "Glossary Entry") occurs. The warning indicates that a cross-platform replacement implementation may be necessary. The class [CL\_ABAP\_DBFEATURES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencl_abap_dbfeatures.htm) can be used to identify which limit is supported by a particular database system. The limits applied to tables in other software components for S/4 HANA is only defined by the [SAP HANA database](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhana_database_glosry.htm "Glossary Entry").


### abenddic_database_tables_techspec.htm

---
title: "Table-Specific Technical Attributes of Database Tables"
description: |
  The following technical attributes are provided specifically for database tables. They define attributes of the physical database table and how the database interface is used for access. With the exception of the table category and activation type, these technical settings constitute a standalone ob
version: "7.53"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_techspec.htm"
abapFile: "abenddic_database_tables_techspec.htm"
keywords: ["do", "if", "class", "data", "abenddic", "database", "tables", "techspec"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_classical_objects.htm) →  [Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables.htm) →  [Technical Attributes of Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_tech.htm) → 

Table-Specific Technical Attributes of Database Tables

The following technical attributes are provided specifically for database tables. They define attributes of the physical database table and how the database interface is used for access. With the exception of the table category and activation type, these technical settings constitute a standalone object and can be activated and transported separately from the table.

-   [Table category](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_tab_type.htm)

-   [Data class](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_dat_type.htm)

-   [Size category](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_siz_cat.htm)

-   [Logging](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_protocol.htm)

-   [Table buffering](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_buffer.htm)

-   [Storage type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_storage.htm)

-   [Activation type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_act_type.htm)

Continue
[Table Category of Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_tab_type.htm)
[Data Class of Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_dat_type.htm)
[Size Category of Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_siz_cat.htm)
[Table Buffering of Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_buffer.htm)
[Logging Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_protocol.htm)
[Storage Type of Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_storage.htm)
[Activation Type of Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_act_type.htm)


### abenddic_database_tables_tab_type.htm

---
title: "Table Category of Database Tables"
description: |
  -   Transparent tables(#abenddic-database-tables-tab-type-1--------global-temporary-tables---@ITOC@@ABENDDIC_DATABASE_TABLES_TAB_TYPE_2) Transparent tables The default table category is the transparent table. In transparent tables, the database object has an identically named variant with the same
version: "7.53"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_tab_type.htm"
abapFile: "abenddic_database_tables_tab_type.htm"
keywords: ["do", "if", "try", "method", "class", "data", "abenddic", "database", "tables", "tab", "type"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_classical_objects.htm) →  [Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables.htm) →  [Technical Attributes of Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_tech.htm) →  [Table-Specific Technical Attributes of Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_techspec.htm) → 

Table Category of Database Tables

-   [Transparent tables](#abenddic-database-tables-tab-type-1--------global-temporary-tables---@ITOC@@ABENDDIC_DATABASE_TABLES_TAB_TYPE_2)

Transparent tables

The default table category is the transparent table. In transparent tables, the database object has an identically named variant with the same columns as in the definition in ABAP Dictionary. The fields of transparent tables can be edited using [Native SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennative_sql_glosry.htm "Glossary Entry") or [AMDP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_glosry.htm "Glossary Entry") as well as using [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_glosry.htm "Glossary Entry"). Outside AS ABAP, they can be edited using the programming interface of the database. The latter method is, however, [not recommended](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_access_recomm.htm).

Global temporary tables

[Global temporary tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_gtt.htm) are a further category of table. A global temporary table (GTT) is a special transparent table used exclusively as a repository of temporary data during a [database LUW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_luw_glosry.htm "Glossary Entry").

Note

The ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_tools.htm) makes it possible to transform database tables from one category to another. To create a different table category as a transparent table, a transparent table must be created first and then transformed into a different table category. In [Dictionary DDL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendictionary_ddl_glosry.htm "Glossary Entry"), the table category is defined using the annotation [@AbapCatalog.tableCategory](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddicddl_define_table_props.htm).


### abenddic_database_tables_dat_type.htm

---
title: "Data Class of Database Tables"
description: |
  For the database platform Oracle, the data class determines the physical area (tablespace) of the database in which a database table is created (otherwise it is ignored). The most important data classes for application data are: -   APPL0 (master data) Data that is rarely changed. One example of mas
version: "7.53"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_dat_type.htm"
abapFile: "abenddic_database_tables_dat_type.htm"
keywords: ["do", "if", "try", "class", "data", "abenddic", "database", "tables", "dat", "type"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_classical_objects.htm) →  [Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables.htm) →  [Technical Attributes of Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_tech.htm) →  [Table-Specific Technical Attributes of Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_techspec.htm) → 

Data Class of Database Tables

For the database platform Oracle, the data class determines the physical area (tablespace) of the database in which a database table is created (otherwise it is ignored). The most important data classes for application data are:

-   APPL0 (master data)

Data that is rarely changed. One example of master data is data in a table of addresses, such as names, postal addresses, and telephone numbers.

-   APPL1 (transaction data)

Data that is changed a lot. One example of transaction data is warehouse stock that changes each time an order is placed.

-   APPL2 (organizational data)

Customizing data specified when the system is configured and then changed only rarely. One example is the table T005 that contains the country codes.

-   USR and USR1 (customer data)
    

Database tables for customer developments in a separate tablespace.

There are also other data classes for system tables used internally by the runtime environment, such as SDIC for ABAP Dictionary tables.


### abenddic_database_tables_siz_cat.htm

---
title: "Size Category of Database Tables"
description: |
  The size category determines the size of the initial memory reserved for the table on the database. Values between 0 and 9 can be specified and intervals of expected rows are assigned to these values. The interval limits assigned to each size category depend on the structure of the database table. T
version: "7.53"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_siz_cat.htm"
abapFile: "abenddic_database_tables_siz_cat.htm"
keywords: ["do", "if", "try", "class", "data", "abenddic", "database", "tables", "siz", "cat"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_classical_objects.htm) →  [Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables.htm) →  [Technical Attributes of Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_tech.htm) →  [Table-Specific Technical Attributes of Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_techspec.htm) → 

Size Category of Database Tables

The size category determines the size of the initial memory reserved for the table on the database. Values between 0 and 9 can be specified and intervals of expected rows are assigned to these values. The interval limits assigned to each size category depend on the structure of the database table. The range can extend from approximately 1000 rows in size category 0 to several million rows in size category 9. If the initial space reserved is exceeded, a new memory area is added implicitly in accordance with the chosen size category.

Notes

-   In transaction SE11, the [input help](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninput_help_glosry.htm "Glossary Entry") for Size Category in technical settings shows the interval limits valid for the current database table.

-   A size category must be chosen that does not create too many small memory areas and no memory areas that are too big.

Example

The following table shows the interval limits of the database table SPFLI assigned to each size category

Size Category

Expected Rows

0

0 to 3,600

1

3,600 to 14,000

2

14,000 to 58,000

3

58,000 to 230,000

4

230,000 to 930,000

5

930,000 to 1,800,000

6

1,800,000 to 3,700,000

7

3,700,000 to 7,400,000

8

7,400,000 to 14,000,000

9

14,000,000 to 590,000,000


### abenddic_database_tables_buffer.htm

---
title: "Table Buffering of Database Tables"
description: |
  It is possible to specify whether table buffering(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_buffering_glosry.htm 'Glossary Entry') in the table buffer(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_buffer_glosry.htm 'Glossary Entry') of an AS Instan
version: "7.53"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_buffer.htm"
abapFile: "abenddic_database_tables_buffer.htm"
keywords: ["do", "if", "try", "class", "data", "types", "abenddic", "database", "tables", "buffer"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_classical_objects.htm) →  [Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables.htm) →  [Technical Attributes of Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_tech.htm) →  [Table-Specific Technical Attributes of Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_techspec.htm) → 

Table Buffering of Database Tables

It is possible to specify whether [table buffering](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_buffering_glosry.htm "Glossary Entry") in the [table buffer](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_buffer_glosry.htm "Glossary Entry") of an AS Instance is allowed for a database table and also how it is performed.

-   [Buffering Permission](#abenddic-database-tables-buffer-1--------buffering-type---@ITOC@@ABENDDIC_DATABASE_TABLES_BUFFER_2)

The table buffer is managed by the [database interface](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_interface_glosry.htm "Glossary Entry"). When [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_glosry.htm "Glossary Entry") reads are made on tables with activated buffering or if these tables are accessed from classic [dynpros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_glosry.htm "Glossary Entry") , the table buffer is used implicitly.

Buffering Permission

Table buffering can be permitted for a database table as follows:

-   Buffering not allowed

Table buffering is not performed for the table. The database interface always passes the reads to the database table, where they can use the current data directly. This setting also dictates that table buffering not be activated for this table in any other systems due to the way the table is used.

-   Buffering allowed, but switched off

Table buffering is not performed for the table when delivered. This setting indicates, however, that buffering is possible in principle and can be activated in other systems depending on how the table is used.

-   Buffering switched on

Table buffering is performed for the table. If possible, the database interface redirects any reads to the [table buffer](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_buffer_glosry.htm "Glossary Entry") in the [shared memory](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshared_memory_glosry.htm "Glossary Entry") of the current AS Instance.

Note

Certain [prerequisites](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuffer_restrictions.htm), some dependent on the buffering type, must be met before ABAP SQL can access the table buffer instead of accessing the database table directly.

Buffering Type

The buffering type determines which data is loaded from the table to the table buffer when a table entry is accessed and buffering is switched on. The possible buffering types are:

-   [Single record buffering](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuffer_single_buffering.htm)

-   [Generic buffering](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuffer_generic_buffering.htm)

-   [Full buffering](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuffer_complete_buffering.htm)


### abenddic_database_tables_protocol.htm

---
title: "Logging Database Tables"
description: |
  If logging is activated, any changes to table entries in ABAP SQL(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_glosry.htm 'Glossary Entry') are logged in the log table DBTABLOG. This also requires the profile parameter rec/client to be set accordingly. This profile param
version: "7.53"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_protocol.htm"
abapFile: "abenddic_database_tables_protocol.htm"
keywords: ["insert", "update", "do", "if", "try", "method", "class", "data", "types", "abenddic", "database", "tables", "protocol"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_classical_objects.htm) →  [Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables.htm) →  [Technical Attributes of Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_tech.htm) →  [Table-Specific Technical Attributes of Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_techspec.htm) → 

Logging Database Tables

If logging is activated, any changes to table entries in [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_glosry.htm "Glossary Entry") are logged in the log table DBTABLOG. This also requires the profile parameter rec/client to be set accordingly. This profile parameter can have the following values:

-   ALL

Logging is cross-client.

-   clnt1, clnt2, ...

Changes are logged only in the specified clients clnt1, clnt2, ...

-   OFF

No logging.

The logs can be analyzed using the transaction "Table History" (transaction SCU3). Logging takes place independently of updates.

If a table line has more than 16000 bytes, logging is not possible for the table. The lengths of fields with the built-in types STRING, RAWSTRING, LCHR, and LRAW are counted in full here.

Notes

-   If logging is activated, access to the database table slows down accordingly. If logging is activated for many database tables, lock situations can arise for the log table.

-   No data can be written to a database table with enabled logging using the statement [INSERT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_dbtab.htm) with [subquery](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_source.htm).

-   The documented method IS\_LOGGING\_ON of the system class CL\_DBI\_UTILITIES can be used to verify whether logging is currently switched on for a database table.


### abenddic_database_tables_storage.htm

---
title: "Storage Type of Database Tables"
description: |
  The storage type only applies if the current database is an SAP HANA(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhana_database_glosry.htm 'Glossary Entry') database. The specified storage type is ignored by other database systems and the platform-specific storage type is used in
version: "7.53"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_storage.htm"
abapFile: "abenddic_database_tables_storage.htm"
keywords: ["do", "if", "case", "try", "class", "data", "types", "abenddic", "database", "tables", "storage"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_classical_objects.htm) →  [Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables.htm) →  [Technical Attributes of Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_tech.htm) →  [Table-Specific Technical Attributes of Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_techspec.htm) → 

Storage Type of Database Tables

The storage type only applies if the current database is an [SAP HANA](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhana_database_glosry.htm "Glossary Entry") database. The specified storage type is ignored by other database systems and the platform-specific storage type is used instead. The following settings can be defined for the SAP HANA database:

-   Column store

This setting should be used in the following cases:

-   The database table is designed for application data analyzed in [SAP HANA](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhana_glosry.htm "Glossary Entry").

-   The database table contains a very large number of rows and the storage type column store provides better compression.

-   The database table has a [full text index](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfull_text_index_glosry.htm "Glossary Entry").

-   The database table contains table fields with HANA data types that are supported only by the storage type column store.

-   Row store

This setting should only be used in SAP HANA databases if the database table is used mainly for frequent single row accesses. This is the only possible setting for [global temporary tables (GTTs)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_gtt.htm).

Note

For more information about the differences between row store and column store on the SAP HANA database, see the [SAP HANA Platform](https://help.sap.com/viewer/de2486ee947e43e684d39702027f8a94/2.0.00/en-us) documentation.


### abenddic_database_tables_act_type.htm

---
title: "Activation Type of Database Tables"
description: |
  The activation type defines whether a database table can be activated interactively in an ABAP Dictionary tool(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_tools.htm) or whether the ABAP runtime environment needs to be used instead. This setting is not relevant for database
version: "7.53"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_act_type.htm"
abapFile: "abenddic_database_tables_act_type.htm"
keywords: ["do", "if", "try", "class", "data", "abenddic", "database", "tables", "act", "type"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_classical_objects.htm) →  [Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables.htm) →  [Technical Attributes of Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_tech.htm) →  [Table-Specific Technical Attributes of Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_techspec.htm) → 

Activation Type of Database Tables

The activation type defines whether a database table can be activated interactively in an ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_tools.htm) or whether the ABAP runtime environment needs to be used instead. This setting is not relevant for database tables in application programming. In these tables, the default value 00 should be preserved. The following settings are possible:

-   Activation type 00

The default setting in which a database table can be activated interactively in an ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_tools.htm). Database tables in application programming should always have this activation type.

-   The following values for the activation type only apply to those database tables required by the ABAP runtime environment itself (and hence only to internal SAP developments):

-   Activation type 01
    The [runtime object](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenruntime_object_glosry.htm "Glossary Entry") of the database table must be created using an [ABAP kernel](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenkernel_glosry.htm "Glossary Entry") program before the table is activated in an ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_tools.htm). This may make it impossible to modify and activate important system tables directly.

-   Activation type 02
    The database table is used in the [ABAP kernel](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenkernel_glosry.htm "Glossary Entry"), but the [runtime object](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenruntime_object_glosry.htm "Glossary Entry") can be activated (and hence created) in an ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_tools.htm). It may be necessary to adjust the consumer programs of the kernel. This is indicated by a note in the activation log.

-   Activation type 10
    The database table is required before other objects are modified as part of a transport.


### abenddic_database_tables_techspec.htm

---
title: "Table-Specific Technical Attributes of Database Tables"
description: |
  The following technical attributes are provided specifically for database tables. They define attributes of the physical database table and how the database interface is used for access. With the exception of the table category and activation type, these technical settings constitute a standalone ob
version: "7.53"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_techspec.htm"
abapFile: "abenddic_database_tables_techspec.htm"
keywords: ["do", "if", "class", "data", "abenddic", "database", "tables", "techspec"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_classical_objects.htm) →  [Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables.htm) →  [Technical Attributes of Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_tech.htm) → 

Table-Specific Technical Attributes of Database Tables

The following technical attributes are provided specifically for database tables. They define attributes of the physical database table and how the database interface is used for access. With the exception of the table category and activation type, these technical settings constitute a standalone object and can be activated and transported separately from the table.

-   [Table category](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_tab_type.htm)

-   [Data class](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_dat_type.htm)

-   [Size category](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_siz_cat.htm)

-   [Logging](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_protocol.htm)

-   [Table buffering](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_buffer.htm)

-   [Storage type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_storage.htm)

-   [Activation type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_act_type.htm)

Continue
[Table Category of Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_tab_type.htm)
[Data Class of Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_dat_type.htm)
[Size Category of Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_siz_cat.htm)
[Table Buffering of Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_buffer.htm)
[Logging Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_protocol.htm)
[Storage Type of Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_storage.htm)
[Activation Type of Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_act_type.htm)
