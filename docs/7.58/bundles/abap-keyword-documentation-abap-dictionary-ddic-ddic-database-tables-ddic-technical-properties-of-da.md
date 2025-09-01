# ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Database Tables / DDIC - Technical Properties of Database Tables

Included pages: 12


### abenddic_database_tables_tech.htm

---
title: "DDIC - Technical Properties of Database Tables"
description: |
  The technical properties of a DDIC database table include the properties that are specific for its structure and properties that are specific for the table itself. -   DDIC - Structure-Specific Technical Properties of Database Tables(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abend
version: "7.58"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_tech.htm"
abapFile: "abenddic_database_tables_tech.htm"
keywords: ["do", "if", "data", "abenddic", "database", "tables", "tech"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Technical%20Properties%20of%20Database%20Tables%2C%20ABENDDIC_DATABASE_TABLES_TECH%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20
for%20improvement:)

DDIC - Technical Properties of Database Tables

The technical properties of a DDIC database table include the properties that are specific for its structure and properties that are specific for the table itself.

-   [DDIC - Structure-Specific Technical Properties of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_techstruc.htm)
-   [DDIC - Table-Specific Technical Properties of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_techspec.htm)

Continue
[DDIC - Structure-Specific Technical Properties of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_techstruc.htm)
[DDIC - Table-Specific Technical Properties of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_techspec.htm)


### abenddic_database_tables_techstruc.htm

---
title: "DDIC - Structure-Specific Technical Properties of Database Tables"
description: |
  The following technical properties are mostly the same as those of a DDIC structure(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_structures_tech.htm) in ABAP Dictionary: -   Table fields (columns) A table field is a component of the structure of the DDIC database table and d
version: "7.58"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_techstruc.htm"
abapFile: "abenddic_database_tables_techstruc.htm"
keywords: ["insert", "delete", "do", "if", "case", "try", "class", "data", "types", "abenddic", "database", "tables", "techstruc"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables.htm) →  [DDIC - Technical Properties of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_tech.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Structure-Specific%20Technical%20Properties%20of%20Database%20Tables%2C%20ABENDDIC_DATABASE_TABLES_TECHSTRUC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0
A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Structure-Specific Technical Properties of Database Tables

The following technical properties are mostly the same as those of a [DDIC structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_structures_tech.htm) in ABAP Dictionary:

-   Table fields (columns)
    
    A table field is a component of the structure of the DDIC database table and describes the name, the data type, and any semantic properties of a field of a DDIC database table. A table field is a component of the structured data type of the table and the corresponding [rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_structures_tech.htm) apply to the component name and component type, with the following restrictions:
    
    -   The name of a table field cannot be a reserved name. The reserved names that cannot be used are specified in the DDIC database table TRESE. This is also important when using [include structures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_include_structure.htm).
    -   A table field always has one elementary data type. Reference types, substructures, and table types are not possible. The elementary data type is specified directly for the table field or by using a data element and is always based on a [built-in dictionary type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm). A table field has a platform-dependent type in the physical database table. For each platform, there is a mapping between the elementary types in the ABAP Dictionary and the platform-dependent types. If only [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_glosry.htm "Glossary Entry") is used, this mapping is transparent for ABAP programmers and only the built-in types in the ABAP Dictionary and their ABAP types are relevant for the ABAP program.
    -   Fields with the type CHAR can have a maximum of 1333 characters.
    -   Fields with the type LRAW or LCHR must be at the end of the table. Only one such field is allowed per table. Directly in front of a field with the type LRAW or LCHR, there must be a field with the type INT2 or INT4 that defines the maximum length of the field.
    -   Fields of the obsolete types DF16\_SCL and DF34\_SCL must be followed directly by a field of type INT2 for scaling.
-   Include structures
    
    DDIC structures, but not DDIC database tables or DDIC views, can be included in a DDIC database table as [include structures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_include_structure.htm). A structure can only be included in a table if its components meet the table field prerequisites above. In particular, an included structure cannot contain any substructures. Any naming conflicts must be bypassed by defining suffixes. As in regular structures, the include can be assigned a group name.
    
    -   When a structure is included, all its fields can be flagged as [key fields](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_key.htm). The include structure must then be inserted between the existing key fields or directly after them. The key properties of the individual fields of an included structure do not have any effect. Either all fields are included as key fields or none.
    -   When an include structure is included, the [flag for initial values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_init.htm) can be set for the entire include structure. In this case, the fields in the include structure for which this property is set keep their property, but if this property is not set, it is also not switched on. If the flag for initial values is not set for the included include structure, this property is removed for all its fields.
    
    The fields of an included include structure are still part of the structure. They can only be edited via the structure and any changes made to the structure affect all including database tables. The fields of an included include structure can also be transformed to direct fields of the DDIC database table that are no longer linked with the originally included structure.
    
-   Enhancement category
    
    The same applies to the enhancement category of DDIC database tables as to the [enhancement category of structures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_structures_enh_cat.htm).
    

The following applies with respect to the number of fields and length of the structure of a DDIC database table:

-   Number of fields
    -   A table in the software component SAP\_BASIS can contain a maximum of 750 fields.
    -   A table in a software component other than SAP\_BASIS can contain 1000 fields if the [storage type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_storage.htm) is Row Store and 1500 fields if the storage type is Column Store.
-   The total of all field lengths is limited. The following applies with respect to the total of the number of bytes of the non-character-like fields and the number of characters of the flat character-like fields:
    
    -   In a table in the software component SAP\_BASIS, the total cannot be greater than 4030.
    -   In the ABAP Dictionary, no limit applies to tables in software components other than SAP\_BASIS. The limit defined in the current database platform applies (in the [SAP HANA database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_database_glosry.htm "Glossary Entry") this is 512 KB).
    
    In the case of deep fields such as STRING, RAWSTRING, LRAW, LCHR, and GEOM\_EWKB, only the bytes of the references are counted and not the actual content.
    

Hints

-   A DDIC database table cannot be defined using a nested structure, since nested structures are not possible in every supported database.
-   If the prerequisites above are met, an existing DDIC structure can be transformed to a DDIC database table. Conversely, a DDIC database table can also be transformed to a DDIC structure, whereby the database object is deleted.
-   Renaming of fields that already contain data is not supported. If the name of an existing field is changed in a DDIC database table, an [adjustment](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_adj.htm) takes place, where the field with the old name is deleted in the physical database table and a field with the new name is appended. All data in the column with the old name are lost.
-   The limit on the number of fields and the length of the structure for tables in the software component SAP\_BASIS is chosen deliberately so that the requirements of any supported database platform can be met. At SAP, tables can be flagged to allow this limit to be exceeded if extensions are used. When tables flagged in this way are accessed using ABAP SQL, a syntax warning from the [extended program check](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenextended_program_check_glosry.htm "Glossary Entry") occurs. The warning indicates that a platform-independent replacement implementation may be necessary. The class [CL\_ABAP\_DBFEATURES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_dbfeatures.htm) can be used to identify which limit is supported by a particular database system. The limits applied to tables in other software components for [SAP S/4HANA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensap_s4hana_glosry.htm "Glossary Entry") is defined by the [SAP HANA database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_database_glosry.htm "Glossary Entry").


### abenddic_database_tables_techspec.htm

---
title: "DDIC - Table-Specific Technical Properties of Database Tables"
description: |
  The following technical properties are provided specifically for DDIC database tables. They define properties of the physical database table and access via the database interface. Apart from the table category and activation type, these technical settings constitute a standalone object and can be ac
version: "7.58"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_techspec.htm"
abapFile: "abenddic_database_tables_techspec.htm"
keywords: ["do", "if", "try", "class", "data", "abenddic", "database", "tables", "techspec"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables.htm) →  [DDIC - Technical Properties of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_tech.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Table-Specific%20Technical%20Properties%20of%20Database%20Tables%2C%20ABENDDIC_DATABASE_TABLES_TECHSPEC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%
0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Table-Specific Technical Properties of Database Tables

The following technical properties are provided specifically for DDIC database tables. They define properties of the physical database table and access via the database interface. Apart from the table category and activation type, these technical settings constitute a standalone object and can be activated and transported separately from the table.

-   [Table category](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_tab_cat.htm)
-   [Data class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_dat_type.htm)
-   [Size category](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_siz_cat.htm)
-   [Logging](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_protocol.htm)
-   [Table buffering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_buffer.htm)
-   [Storage type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_storage.htm)
-   [Load unit](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_load_unit.htm)
-   [Activation type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_act_type.htm)

Hint

Certain combinations of technical properties are not useful. There are [ABAP Test Cockpit (ATC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_test_cockpit_glosry.htm "Glossary Entry") tests that report such combinations as errors.

Continue
[DDIC - Table Category of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_tab_cat.htm)
[DDIC - Data Class of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_dat_type.htm)
[DDIC - Size Category of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_siz_cat.htm)
[DDIC - Table Buffering of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_buffer.htm)
[DDIC - Logging Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_protocol.htm)
[DDIC - Storage Type of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_storage.htm)
[DDIC - Load Unit of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_load_unit.htm)
[DDIC - Activation Type of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_act_type.htm)


### abenddic_database_tables_tab_cat.htm

---
title: "DDIC - Table Category of Database Tables"
description: |
  -   Transparent Tables(#abenddic-database-tables-tab-cat-1-------global-temporary-tables---@ITOC@@ABENDDIC_DATABASE_TABLES_TAB_CAT_2) Transparent Tables The default table category is the transparent table. In transparent tables, the database object has the same name and the same columns as the def
version: "7.58"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_tab_cat.htm"
abapFile: "abenddic_database_tables_tab_cat.htm"
keywords: ["do", "if", "try", "method", "data", "abenddic", "database", "tables", "tab", "cat"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables.htm) →  [DDIC - Technical Properties of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_tech.htm) →  [DDIC - Table-Specific Technical Properties of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_techspec.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Table%20Category%20of%20Database%20Tables%2C%20ABENDDIC_DATABASE_TABLES_TAB_CAT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for
%20improvement:)

DDIC - Table Category of Database Tables

-   [Transparent Tables](#abenddic-database-tables-tab-cat-1-------global-temporary-tables---@ITOC@@ABENDDIC_DATABASE_TABLES_TAB_CAT_2)

Transparent Tables   

The default table category is the transparent table. In transparent tables, the database object has the same name and the same columns as the definition in ABAP Dictionary. The fields of transparent tables can be processed not only using [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_glosry.htm "Glossary Entry"), but also using [Native SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennative_sql_glosry.htm "Glossary Entry") or [AMDP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_glosry.htm "Glossary Entry"). Outside AS ABAP, they can be processed using the programming interface of the database. The latter method is, however, [not recommended](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_access_recomm.htm).

Global Temporary Tables   

[Global temporary tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_gtt.htm) are another category of tables. A global temporary table (GTT) is a special transparent table used exclusively as a repository of temporary data during a [database LUW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_luw_glosry.htm "Glossary Entry").

Hint

The ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_tools.htm) of the ABAP Workbench makes it possible to transform DDIC database tables from one category to another. To create a different table category as a transparent table, a transparent table must be created first and then transformed into a different table category. In [Dictionary DDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendictionary_ddl_glosry.htm "Glossary Entry"), the table category is defined using the annotation [@AbapCatalog.tableCategory](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_define_table_props.htm).


### abenddic_database_tables_dat_type.htm

---
title: "DDIC - Data Class of Database Tables"
description: |
  For the database platform Oracle, the data class determines the physical area (tablespace) of the database in which a DDIC database table is created. For other database platforms, the data class does not have any effect and is ignored. The most important data classes for application data are: -   AP
version: "7.58"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_dat_type.htm"
abapFile: "abenddic_database_tables_dat_type.htm"
keywords: ["do", "if", "try", "class", "data", "abenddic", "database", "tables", "dat", "type"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables.htm) →  [DDIC - Technical Properties of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_tech.htm) →  [DDIC - Table-Specific Technical Properties of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_techspec.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Data%20Class%20of%20Database%20Tables%2C%20ABENDDIC_DATABASE_TABLES_DAT_TYPE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20
improvement:)

DDIC - Data Class of Database Tables

For the database platform Oracle, the data class determines the physical area (tablespace) of the database in which a DDIC database table is created. For other database platforms, the data class does not have any effect and is ignored. The most important data classes for application data are:

-   APPL0 (master data)
    
    Data that is rarely changed. One example of master data is data in a table of addresses, such as names, postal addresses, and telephone numbers.
    
-   APPL1 (transaction data)
    
    Data that is frequently changed. One example of transaction data is warehouse stock that changes each time an order is placed.
    
-   APPL2 (organizational data)
    
    Customizing data specified when the system is configured and then changed only rarely. One example is the table T005 that contains the country codes.
    
-   USR and USR1 (customer data)
    
    DDIC database tables for customer developments in a separate tablespace.
    

There are further data classes for system tables used internally by runtime frameworks, such as SDIC for ABAP Dictionary tables.


### abenddic_database_tables_siz_cat.htm

---
title: "DDIC - Size Category of Database Tables"
description: |
  The size category affects the size of the initial memory area reserved for the table on the database. Values between 0 and 9 can be specified and intervals of expected rows are assigned to these values. The interval limits assigned to each size category depend on the structure of the DDIC database t
version: "7.58"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_siz_cat.htm"
abapFile: "abenddic_database_tables_siz_cat.htm"
keywords: ["do", "if", "try", "data", "abenddic", "database", "tables", "siz", "cat"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables.htm) →  [DDIC - Technical Properties of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_tech.htm) →  [DDIC - Table-Specific Technical Properties of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_techspec.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Size%20Category%20of%20Database%20Tables%2C%20ABENDDIC_DATABASE_TABLES_SIZ_CAT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%
20improvement:)

DDIC - Size Category of Database Tables

The size category affects the size of the initial memory area reserved for the table on the database. Values between 0 and 9 can be specified and intervals of expected rows are assigned to these values. The interval limits assigned to each size category depend on the structure of the DDIC database table. The range can extend from approximately 1000 rows in size category 0 to several million rows in size category 9. If the initial space reserved is exceeded, a new memory area is added implicitly in accordance with the chosen size category.

Hints

-   An appropriate size category should be chosen, to prevent too many small memory areas or a memory area that is too big.
-   In transaction SE11, the [input help](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninput_help_glosry.htm "Glossary Entry") for Size Category in technical settings shows the interval limits valid for the current DDIC database table.

Example

The following table shows the interval limits assigned to each size category for the DDIC database table SPFLI.

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
title: "DDIC - Table Buffering of Database Tables"
description: |
  It is possible to define whether and how table buffering(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_buffering_glosry.htm 'Glossary Entry') of a DDIC database table is allowed in the table buffer(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_buffer
version: "7.58"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_buffer.htm"
abapFile: "abenddic_database_tables_buffer.htm"
keywords: ["do", "if", "try", "class", "data", "types", "abenddic", "database", "tables", "buffer"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables.htm) →  [DDIC - Technical Properties of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_tech.htm) →  [DDIC - Table-Specific Technical Properties of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_techspec.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Table%20Buffering%20of%20Database%20Tables%2C%20ABENDDIC_DATABASE_TABLES_BUFFER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for
%20improvement:)

DDIC - Table Buffering of Database Tables

It is possible to define whether and how [table buffering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_buffering_glosry.htm "Glossary Entry") of a DDIC database table is allowed in the [table buffer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_buffer_glosry.htm "Glossary Entry") of an AS instance.

-   [Buffering Permission](#abenddic-database-tables-buffer-1-------buffering-type---@ITOC@@ABENDDIC_DATABASE_TABLES_BUFFER_2)

The table buffer is managed by the [database interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_interface_glosry.htm "Glossary Entry"). When tables with active buffering are accessed using [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_glosry.htm "Glossary Entry") or from classic [dynpros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_glosry.htm "Glossary Entry"), the table buffer is used implicitly.

Buffering Permission   

Table buffering can be configured for a DDIC database table as follows:

-   Buffering not allowed
    
    The table is not buffered. The database interface always passes the accesses to the DDIC database table and the current data is used directly. This setting also specifies that table buffering should not be activated for this table in any other systems due to the way the table is used.
    
-   Buffering allowed, but switched off
    
    The table is not buffered when delivered. This setting indicates, however, that buffering is possible in principle and can be activated in other systems depending on how the table is used.
    
-   Buffering switched on
    
    The table is buffered. The database interface redirects any reads to the [table buffer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_buffer_glosry.htm "Glossary Entry") in the [shared memory](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshared_memory_glosry.htm "Glossary Entry") of the current AS instance, if possible.
    

Hint

Certain [prerequisites](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuffer_restrictions.htm), some of which depend on the buffering type, must be met before ABAP SQL can access the table buffer instead of accessing the DDIC database table directly.

Buffering Type   

The buffering type determines which data is loaded from the table to the table buffer when a table entry is accessed and buffering is switched on. The possible buffering types are:

-   [Single record buffering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuffer_single_buffering.htm)
-   [Generic buffering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuffer_generic_buffering.htm)
-   [Full buffering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuffer_complete_buffering.htm)


### abenddic_database_tables_protocol.htm

---
title: "DDIC - Logging Database Tables"
description: |
  If logging is activated, any changes to table entries done in ABAP SQL(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_glosry.htm 'Glossary Entry') are logged in the log table DBTABLOG. As a prerequisite, the profile parameter rec/client must be set accordingly. This profil
version: "7.58"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_protocol.htm"
abapFile: "abenddic_database_tables_protocol.htm"
keywords: ["insert", "update", "do", "if", "try", "method", "class", "data", "types", "abenddic", "database", "tables", "protocol"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables.htm) →  [DDIC - Technical Properties of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_tech.htm) →  [DDIC - Table-Specific Technical Properties of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_techspec.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Logging%20Database%20Tables%2C%20ABENDDIC_DATABASE_TABLES_PROTOCOL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvemen
t:)

DDIC - Logging Database Tables

If logging is activated, any changes to table entries done in [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_glosry.htm "Glossary Entry") are logged in the log table DBTABLOG. As a prerequisite, the profile parameter rec/client must be set accordingly. This profile parameter can have the following values:

-   ALL
    
    Logging is client-independent.
    
-   clnt1, clnt2, ...
    
    Changes are logged only in the specified clients clnt1, clnt2, ...
    
-   OFF
    
    No logging.
    

The logs can be evaluated using the transaction Table History (transaction code SCU3). Logging is independent of updates.

If a table row has more than 16000 bytes, logging is not possible for the table. The lengths of fields with the built-in types STRING, RAWSTRING, LCHR, LRAW, and GEOM\_EWKB are counted completely here.

Hints

-   If logging is activated, access to the DDIC database table slows down accordingly. If logging is activated for many DDIC database tables, lock situations can occur for the log table.
-   No data can be written to a DDIC database table with enabled logging using the statement [INSERT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinsert_dbtab.htm) with [subquery](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinsert_source.htm).
-   The documented method IS\_LOGGING\_ON of the system class CL\_DBI\_UTILITIES can be used to check whether logging is currently switched on for a DDIC database table.


### abenddic_database_tables_storage.htm

---
title: "DDIC - Storage Type of Database Tables"
description: |
  The storage type has an effect only if the current database is an SAP HANA(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_database_glosry.htm 'Glossary Entry') database. The specified storage type is ignored by other database systems and the platform-dependent storage type is
version: "7.58"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_storage.htm"
abapFile: "abenddic_database_tables_storage.htm"
keywords: ["do", "if", "case", "try", "data", "types", "abenddic", "database", "tables", "storage"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables.htm) →  [DDIC - Technical Properties of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_tech.htm) →  [DDIC - Table-Specific Technical Properties of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_techspec.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Storage%20Type%20of%20Database%20Tables%2C%20ABENDDIC_DATABASE_TABLES_STORAGE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%2
0improvement:)

DDIC - Storage Type of Database Tables

The storage type has an effect only if the current database is an [SAP HANA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_database_glosry.htm "Glossary Entry") database. The specified storage type is ignored by other database systems and the platform-dependent storage type is used instead. The following settings can be defined for the SAP HANA database:

-   Column store
    
    This setting should be used in the following cases:
    
    -   The DDIC database table is designed for application data analyzed in [SAP HANA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensap_hana_glosry.htm "Glossary Entry").
    -   The DDIC database table contains a very large number of rows since the storage type Column Store provides better compression.
    -   The DDIC database table has a [full text index](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfull_text_index_glosry.htm "Glossary Entry").
    -   The DDIC database table contains table fields with HANA data types that are supported only by the storage type column store.
-   Row store
    
    This setting should only be used in SAP HANA databases if the database table is used mainly for frequent single row accesses. For [global temporary tables (GTTs)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_gtt.htm), it is the only possible setting.
    

Hint

For more information about the differences between row store and column store on the SAP HANA database, see the SAP HANA documentation.


### abenddic_database_tables_load_unit.htm

---
title: "DDIC - Load Unit of Database Tables"
description: |
  The load unit of a table specifies how the data of the table is loaded into the main memory of the SAP HANA database. The SAP HANA database offers the following settings: -   Column Loadable The complete table is considered as in-memory. The table data is loaded upon system start in a column-oriente
version: "7.58"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_load_unit.htm"
abapFile: "abenddic_database_tables_load_unit.htm"
keywords: ["do", "while", "if", "try", "data", "abenddic", "database", "tables", "load", "unit"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables.htm) →  [DDIC - Technical Properties of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_tech.htm) →  [DDIC - Table-Specific Technical Properties of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_techspec.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Load%20Unit%20of%20Database%20Tables%2C%20ABENDDIC_DATABASE_TABLES_LOAD_UNIT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20
improvement:)

DDIC - Load Unit of Database Tables

The load unit of a table specifies how the data of the table is loaded into the main memory of the SAP HANA database. The SAP HANA database offers the following settings:

-   Column Loadable
    
    The complete table is considered as in-memory. The table data is loaded upon system start in a column-oriented format into the main memory of the SAP HANA database. This is the default behavior.
    
-   Page Loadable
    
    By using a feature of the SAP HANA database called Native Storage Extension (NSE), table data is stored on disk in pages rather than in columns. These pages are loaded only on request into a special buffer in the HANA main memory. Unused data in the buffer can be paged out.
    

Typically, Page Loadable is used for large tables with less frequent accesses. While the SAP HANA database offers the load unit attribute also for single columns and partitions of a table, in the ABAP Dictionary this setting always affects the complete table and its indexes.

The ABAP Dictionary provides this setting in two flavors:

-   Column Preferred or Page Preferred
    -   Column Preferred is the default behavior.
    -   The load unit is only specified upon creation of the table.
    -   Changing from one preferred load unit to another does not change the load unit on the database.
    -   The ABAP DDIC consistency check does not consider the load unit. It is accepted if the load unit on the database differs from the values specified in the DDIC.
-   Column Enforced or Page Enforced
    -   The load unit is specified upon creation of the table. Furthermore, changes to the load unit in the ABAP DDIC result in corresponding changes on the database.
    -   Changing the enforced load unit results in a corresponding change on the database.
    -   The ABAP Dictionary consistency check respects the load unit. Different values for the load unit in the ABAP Dictionary and on the database result in tables that are inconsistent from the DDIC point of view.

The Column Preferred and Page Preferred settings for the load unit setting in the ABAP Dictionary offer the possibility for a database administrator or a tool like the SAP HANA NSE Advisor to overwrite the DDIC settings without making the table inconsistent. In general, most of the tables should use one of the Preferred settings for the load unit. Only if you are sure that the table should keep a specific load unit in all relevant scenarios (on premise, cloud, ...), you should use the Enforced load unit settings.

The load unit setting is completely transparent to applications.

Limitations:

-   Page Loadable cannot be used for database tables with [storage type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_storage.htm) Row store.
-   Page Loadable cannot be used for [global temporary tables (GTTs)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_gtt.htm).
-   Page Loadable cannot be set for tables that have [data aging](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_aging_glosry.htm "Glossary Entry") enabled.

Hint

For more information about the Native Storage Extension on the SAP HANA database, see the [SAP HANA documentation](https://help.sap.com/docs/SAP_HANA_PLATFORM/6b94445c94ae495c83a19646e7c3fd56/4efaa94f8057425c8c7021da6fc2ddf5).


### abenddic_database_tables_act_type.htm

---
title: "DDIC - Activation Type of Database Tables"
description: |
  The activation type defines whether a DDIC database table can be activated in an ABAP Dictionary tool(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_tools.htm) or whether it must be controlled using the ABAP runtime framework environment. This setting is not relevant for DDIC
version: "7.58"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_act_type.htm"
abapFile: "abenddic_database_tables_act_type.htm"
keywords: ["do", "if", "try", "data", "abenddic", "database", "tables", "act", "type"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables.htm) →  [DDIC - Technical Properties of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_tech.htm) →  [DDIC - Table-Specific Technical Properties of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_techspec.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Activation%20Type%20of%20Database%20Tables%2C%20ABENDDIC_DATABASE_TABLES_ACT_TYPE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20f
or%20improvement:)

DDIC - Activation Type of Database Tables

The activation type defines whether a DDIC database table can be activated in an ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_tools.htm) or whether it must be controlled using the ABAP runtime framework environment. This setting is not relevant for DDIC database tables in application programming. In these tables, the default value 00 should be preserved. The following settings are possible:

-   Activation type 00
    
    The default setting in which a DDIC database table can be activated in an ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_tools.htm). DDIC database tables in application programming should always have this activation type.
    
-   The following values for the activation type only apply to those DDIC database tables required by the ABAP runtime framework itself and hence only to internal SAP developments:
    -   Activation type 01
        
        The [DDIC runtime object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_runtime_object_glosry.htm "Glossary Entry") of the database table must be created using an [ABAP kernel](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenkernel_glosry.htm "Glossary Entry") program before the table is activated in an ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_tools.htm). This makes it impossible to modify and activate important system tables directly.
        
    -   Activation type 02
        
        The DDIC database table is used in the [ABAP kernel](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenkernel_glosry.htm "Glossary Entry"), but the [DDIC runtime object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_runtime_object_glosry.htm "Glossary Entry") can be activated (and hence created) in an ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_tools.htm). It may be necessary to adjust the consumer programs of the kernel. This is indicated by a note in the activation log.
        
    -   Activation type 10
        
        The DDIC database table is required before other objects are modified as part of a transport.


### abenddic_database_tables_techspec.htm

---
title: "DDIC - Table-Specific Technical Properties of Database Tables"
description: |
  The following technical properties are provided specifically for DDIC database tables. They define properties of the physical database table and access via the database interface. Apart from the table category and activation type, these technical settings constitute a standalone object and can be ac
version: "7.58"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_techspec.htm"
abapFile: "abenddic_database_tables_techspec.htm"
keywords: ["do", "if", "try", "class", "data", "abenddic", "database", "tables", "techspec"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables.htm) →  [DDIC - Technical Properties of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_tech.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Table-Specific%20Technical%20Properties%20of%20Database%20Tables%2C%20ABENDDIC_DATABASE_TABLES_TECHSPEC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%
0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Table-Specific Technical Properties of Database Tables

The following technical properties are provided specifically for DDIC database tables. They define properties of the physical database table and access via the database interface. Apart from the table category and activation type, these technical settings constitute a standalone object and can be activated and transported separately from the table.

-   [Table category](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_tab_cat.htm)
-   [Data class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_dat_type.htm)
-   [Size category](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_siz_cat.htm)
-   [Logging](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_protocol.htm)
-   [Table buffering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_buffer.htm)
-   [Storage type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_storage.htm)
-   [Load unit](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_load_unit.htm)
-   [Activation type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_act_type.htm)

Hint

Certain combinations of technical properties are not useful. There are [ABAP Test Cockpit (ATC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_test_cockpit_glosry.htm "Glossary Entry") tests that report such combinations as errors.

Continue
[DDIC - Table Category of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_tab_cat.htm)
[DDIC - Data Class of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_dat_type.htm)
[DDIC - Size Category of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_siz_cat.htm)
[DDIC - Table Buffering of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_buffer.htm)
[DDIC - Logging Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_protocol.htm)
[DDIC - Storage Type of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_storage.htm)
[DDIC - Load Unit of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_load_unit.htm)
[DDIC - Activation Type of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_act_type.htm)
