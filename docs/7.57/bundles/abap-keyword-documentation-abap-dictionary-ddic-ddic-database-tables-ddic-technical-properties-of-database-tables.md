# ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Database Tables / DDIC - Technical Properties of Database Tables

Included pages: 12



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenddic_database_tables_tech.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_tech.htm)
- [abenddic_database_tables_techstruc.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_techstruc.htm)
- [abenddic_database_tables_techspec.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_techspec.htm)
- [abenddic_database_tables_tab_cat.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_tab_cat.htm)
- [abenddic_database_tables_dat_type.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_dat_type.htm)
- [abenddic_database_tables_siz_cat.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_siz_cat.htm)
- [abenddic_database_tables_buffer.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_buffer.htm)
- [abenddic_database_tables_protocol.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_protocol.htm)
- [abenddic_database_tables_storage.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_storage.htm)
- [abenddic_database_tables_load_unit.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_load_unit.htm)
- [abenddic_database_tables_act_type.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_act_type.htm)

**Bundle Contains**: 11 documentation pages
**Version**: ABAP 7.57
**Generated**: 2025-09-01T11:25:45.212Z

---

### abenddic_database_tables_tech.htm

> **📖 Official SAP Documentation**: [abenddic_database_tables_tech.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_tech.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Technical Properties of Database Tables, ABENDDIC_DATABASE_TABLES_TECH, 757%0D
%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Technical Properties of Database Tables

The technical properties of a DDIC database table include the properties that are specific for its structure and properties that are specific for the table itself.

-   [DDIC - Structure-Specific Technical Properties of Database Tables](javascript:call_link\('abenddic_database_tables_techstruc.htm'\))
-   [DDIC - Table-Specific Technical Properties of Database Tables](javascript:call_link\('abenddic_database_tables_techspec.htm'\))

Continue
[DDIC - Structure-Specific Technical Properties of Database Tables](javascript:call_link\('abenddic_database_tables_techstruc.htm'\))
[DDIC - Table-Specific Technical Properties of Database Tables](javascript:call_link\('abenddic_database_tables_techspec.htm'\))



**📖 Source**: [abenddic_database_tables_tech.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_tech.htm)

### abenddic_database_tables_techstruc.htm

> **📖 Official SAP Documentation**: [abenddic_database_tables_techstruc.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_techstruc.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Technical Properties of Database Tables](javascript:call_link\('abenddic_database_tables_tech.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Structure-Specific Technical Properties of Database Tables, ABENDDIC_DATABASE_
TABLES_TECHSTRUC, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Structure-Specific Technical Properties of Database Tables

The following technical properties are mostly the same as those of a [DDIC structure](javascript:call_link\('abenddic_structures_tech.htm'\)) in ABAP Dictionary:

-   Table fields (columns)
    
    A table field is a component of the structure of the DDIC database table and describes the name, the data type, and any semantic properties of a field of a DDIC database table. A table field is a component of the structured data type of the table and the corresponding [rules](javascript:call_link\('abenddic_structures_tech.htm'\)) apply to the component name and component type, with the following restrictions:
    
    -   The name of a table field cannot be a reserved name. The reserved names that cannot be used are specified in the DDIC database table TRESE. This is also important when using [include structures](javascript:call_link\('abenddic_include_structure.htm'\)).
    -   A table field always has one elementary data type. Reference types, substructures, and table types are not possible. The elementary data type is specified directly for the table field or by using a data element and is always based on a [built-in type](javascript:call_link\('abenddic_builtin_types.htm'\)) in the ABAP Dictionary. A table field has a platform-dependent type in the physical database table. For each platform, there is a mapping between the elementary types in the ABAP Dictionary and the platform-dependent types. If only [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") is used, this mapping is transparent for ABAP programmers and only the built-in types in the ABAP Dictionary and their ABAP types are relevant for the ABAP program.
    -   Fields with the type CHAR can have a maximum of 1333 characters.
    -   Fields with the type LRAW or LCHR must be at the end of the table. Only one such field is allowed per table. Furthermore, a field with the type INT2 or INT4 (for the maximum length of the field) must be located directly in front of this field.
    -   Fields of the obsolete types DF16\_SCL and DF34\_SCL must be followed directly by a field of type INT2 for scaling.
-   Include structures
    
    DDIC structures, but not DDIC database tables or DDIC views, can be included in a DDIC database table as [include structures](javascript:call_link\('abenddic_include_structure.htm'\)). A structure can only be included in a table if its components meet the table field prerequisites above. In particular, an included structure cannot contain any substructures. Any naming conflicts must be bypassed by defining suffixes. As in regular structures, the include can be assigned the name of a group.
    
    -   When a structure is included, all its fields can be flagged as [key fields](javascript:call_link\('abenddic_database_tables_key.htm'\)). The include structure must then be inserted between the existing key fields or directly after them. The corresponding properties of the individual fields of an included structure do not have any effect. Either all fields are included as key fields or none.
    -   When an include structure is included, the [flag for initial values](javascript:call_link\('abenddic_database_tables_init.htm'\)) can be set for the entire include structure. In this case, the fields in the include structure for which this property is set also keep their property, but it is not switched on for fields where the property is not set. If the flag for initial values is not set for the included include structure, this property is removed for all its fields.
    
    The fields of an included include structure are still part of the structure. They can only be edited via the structure and any changes made to the structure are affect all including database tables. The fields of an included include structure can also be transformed to direct fields of the DDIC database table that are no longer linked with the originally included structure.
    
-   Enhancement category
    
    The same applies to the enhancement category of DDIC database tables as to the [enhancement category of structures](javascript:call_link\('abenddic_structures_enh_cat.htm'\)).
    

The following applies with respect to the number of fields and length of the structure of a DDIC database table:

-   Number of fields
    -   A table in the software component SAP\_BASIS can contain a maximum of 749 fields.
    -   A table in a software component other than SAP\_BASIS can contain 1000 fields if the [storage type](javascript:call_link\('abenddic_database_tables_storage.htm'\)) is Row Store and 1500 fields if the storage type is Column Store.
-   The total of all field lengths is limited. The following applies with respect to the total of the number of bytes of the non-character-like fields and the number of characters of the flat character-like fields:
    
    -   In a table in the software component SAP\_BASIS, the total cannot be greater than 4030.
    -   In the ABAP Dictionary, no limit applies to tables in software components other than SAP\_BASIS. The limit defined in the current database platform applies (in the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") this is 512 KB).
    
    In the case of deep fields such as STRING, RAWSTRING, LRAW, LCHR, and GEOM\_EWKB, only the bytes of the references are counted and not the actual content.
    

Hints

-   Nested structures cannot be used to write to DDIC database tables because these structures are not possible in every supported database.
-   If it meets the prerequisites above, an existing DDIC structure can be transformed to a DDIC database table. Conversely, a database structure can also be transformed to a regular structure, whereby the database object is deleted.
-   The limit on the number of fields and the length of the structure for tables in the software component SAP\_BASIS is chosen deliberately so that the requirements of any supported database platform can be met. At SAP, tables can be flagged to allow this limit to be exceeded if enhancements are used. When tables flagged in this way are accessed using ABAP SQL, a syntax warning from the [extended program check](javascript:call_link\('abenextended_program_check_glosry.htm'\) "Glossary Entry") occurs. The warning indicates that a platform-independent replacement implementation may be necessary. The class [CL\_ABAP\_DBFEATURES](javascript:call_link\('abencl_abap_dbfeatures.htm'\)) can be used to identify which limit is supported by a particular database system. The limits applied to tables in other software components for [SAP S/4HANA](javascript:call_link\('abensap_s4hana_glosry.htm'\) "Glossary Entry") is only defined by the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry").
-   Renaming of fields that already contain data is not supported. If the name of an existing field is changed in the DDIC database table, an [adjustment](javascript:call_link\('abenddic_database_tables_adj.htm'\)) takes place, where the field with the old name is deleted in the physical database table database and a field with the new name is appended and all data in the column with the old name are lost.



**📖 Source**: [abenddic_database_tables_techstruc.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_techstruc.htm)

### abenddic_database_tables_techspec.htm

> **📖 Official SAP Documentation**: [abenddic_database_tables_techspec.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_techspec.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Technical Properties of Database Tables](javascript:call_link\('abenddic_database_tables_tech.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Table-Specific Technical Properties of Database Tables, ABENDDIC_DATABASE_TABL
ES_TECHSPEC, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Table-Specific Technical Properties of Database Tables

The following technical properties are provided specifically for DDIC database tables. They define properties of the physical database table and how the database interface is used for access. Apart from the table category and activation type, these technical settings constitute a standalone object and can be activated and transported separately from the table.

-   [Table category](javascript:call_link\('abenddic_database_tables_tab_cat.htm'\))
-   [Data class](javascript:call_link\('abenddic_database_tables_dat_type.htm'\))
-   [Size category](javascript:call_link\('abenddic_database_tables_siz_cat.htm'\))
-   [Logging](javascript:call_link\('abenddic_database_tables_protocol.htm'\))
-   [Table buffering](javascript:call_link\('abenddic_database_tables_buffer.htm'\))
-   [Storage type](javascript:call_link\('abenddic_database_tables_storage.htm'\))
-   [Load unit](javascript:call_link\('abenddic_database_tables_load_unit.htm'\))
-   [Activation type](javascript:call_link\('abenddic_database_tables_act_type.htm'\))

Hint

Certain combinations of technical properties are not useful. There are [ABAP Test Cockpit (ATC)](javascript:call_link\('abenabap_test_cockpit_glosry.htm'\) "Glossary Entry") tests that report such combinations as errors.

Continue
[DDIC - Table Category of Database Tables](javascript:call_link\('abenddic_database_tables_tab_cat.htm'\))
[DDIC - Data Class of Database Tables](javascript:call_link\('abenddic_database_tables_dat_type.htm'\))
[DDIC - Size Category of Database Tables](javascript:call_link\('abenddic_database_tables_siz_cat.htm'\))
[DDIC - Table Buffering of Database Tables](javascript:call_link\('abenddic_database_tables_buffer.htm'\))
[DDIC - Logging Database Tables](javascript:call_link\('abenddic_database_tables_protocol.htm'\))
[DDIC - Storage Type of Database Tables](javascript:call_link\('abenddic_database_tables_storage.htm'\))
[DDIC - Load Unit of Database Tables](javascript:call_link\('abenddic_database_tables_load_unit.htm'\))
[DDIC - Activation Type of Database Tables](javascript:call_link\('abenddic_database_tables_act_type.htm'\))



**📖 Source**: [abenddic_database_tables_techspec.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_techspec.htm)

### abenddic_database_tables_tab_cat.htm

> **📖 Official SAP Documentation**: [abenddic_database_tables_tab_cat.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_tab_cat.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Technical Properties of Database Tables](javascript:call_link\('abenddic_database_tables_tech.htm'\)) →  [DDIC - Table-Specific Technical Properties of Database Tables](javascript:call_link\('abenddic_database_tables_techspec.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Table Category of Database Tables, ABENDDIC_DATABASE_TABLES_TAB_CAT, 757%0D%0A
%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Table Category of Database Tables

-   [Transparent Tables](#abenddic-database-tables-tab-cat-1-------global-temporary-tables---@ITOC@@ABENDDIC_DATABASE_TABLES_TAB_CAT_2)

Transparent Tables   

The default table category is the transparent table. In transparent tables, the database object has an identically named variant with the same columns as in the definition in the ABAP Dictionary. The fields of transparent tables can be processed using [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") or [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry") as well as using [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"). Outside AS ABAP, they can be processed using the programming interface of the database. The latter method is, however, [not recommended](javascript:call_link\('abendatabase_access_recomm.htm'\)).

Global Temporary Tables   

[Global temporary tables](javascript:call_link\('abenddic_database_tables_gtt.htm'\)) are another category of tables. A global temporary table (GTT) is a special transparent table used exclusively as a repository of temporary data during a [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry").

Hint

The ABAP Dictionary [tool](javascript:call_link\('abenddic_tools.htm'\)) of the ABAP Workbench makes it possible to transform DDIC database tables from one category to another. To create a different table category as a transparent table, a transparent table must be created first and then transformed into a different table category. In [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry"), the table category is defined using the annotation [@AbapCatalog.tableCategory](javascript:call_link\('abenddicddl_define_table_props.htm'\)).



**📖 Source**: [abenddic_database_tables_tab_cat.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_tab_cat.htm)

### abenddic_database_tables_dat_type.htm

> **📖 Official SAP Documentation**: [abenddic_database_tables_dat_type.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_dat_type.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Technical Properties of Database Tables](javascript:call_link\('abenddic_database_tables_tech.htm'\)) →  [DDIC - Table-Specific Technical Properties of Database Tables](javascript:call_link\('abenddic_database_tables_techspec.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Data Class of Database Tables, ABENDDIC_DATABASE_TABLES_DAT_TYPE, 757%0D%0A%0D
%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Data Class of Database Tables

For the database platform Oracle, the data class determines the physical area (tablespace) of the database in which a DDIC database table is created and is otherwise ignored. The most important data classes for application data are:

-   APPL0 (master data)
    
    Data that is rarely changed. One example of master data is data in a table of addresses, such as names, postal addresses, and telephone numbers.
    
-   APPL1 (transaction data)
    
    Data that is frequently changed. One example of transaction data is warehouse stock that changes each time an order is placed.
    
-   APPL2 (organizational data)
    
    Customizing data specified when the system is configured and then changed only rarely. One example is the table T005 that contains the country codes.
    
-   USR and USR1 (customer data)\>
    
    DDIC database tables for customer developments in a separate tablespace.
    

There are also other data classes for system tables used internally by the runtime framework, such as SDIC for ABAP Dictionary tables.



**📖 Source**: [abenddic_database_tables_dat_type.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_dat_type.htm)

### abenddic_database_tables_siz_cat.htm

> **📖 Official SAP Documentation**: [abenddic_database_tables_siz_cat.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_siz_cat.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Technical Properties of Database Tables](javascript:call_link\('abenddic_database_tables_tech.htm'\)) →  [DDIC - Table-Specific Technical Properties of Database Tables](javascript:call_link\('abenddic_database_tables_techspec.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Size Category of Database Tables, ABENDDIC_DATABASE_TABLES_SIZ_CAT, 757%0D%0A%
0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Size Category of Database Tables

The size category affects the size of the initial memory area reserved for the table on the database. Values between 0 and 9 can be specified and intervals of expected rows are assigned to these values. The interval limits assigned to each size category depend on the structure of the DDIC database table. The range can extend from approximately 1000 rows in size category 0 to several million rows in size category 9. If the initial space reserved is exceeded, a new memory area is added implicitly in accordance with the chosen size category.

Hints

-   In transaction SE11, the [input help](javascript:call_link\('abeninput_help_glosry.htm'\) "Glossary Entry") for Size Category in technical settings shows the interval limits valid for the current DDIC database table.
-   A size category must be chosen that does not create too many small memory areas and no memory areas that are too big.

Example

The following table shows the interval limits of the DDIC database table SPFLI assigned to each size category

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



**📖 Source**: [abenddic_database_tables_siz_cat.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_siz_cat.htm)

### abenddic_database_tables_buffer.htm

> **📖 Official SAP Documentation**: [abenddic_database_tables_buffer.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_buffer.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Technical Properties of Database Tables](javascript:call_link\('abenddic_database_tables_tech.htm'\)) →  [DDIC - Table-Specific Technical Properties of Database Tables](javascript:call_link\('abenddic_database_tables_techspec.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Table Buffering of Database Tables, ABENDDIC_DATABASE_TABLES_BUFFER, 757%0D%0A
%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Table Buffering of Database Tables

It is possible to define whether and how [table buffering](javascript:call_link\('abentable_buffering_glosry.htm'\) "Glossary Entry") is allowed in the [table buffer](javascript:call_link\('abentable_buffer_glosry.htm'\) "Glossary Entry") of an AS instance is allowed for a DDIC database table.

-   [Buffering Permission](#abenddic-database-tables-buffer-1-------buffering-type---@ITOC@@ABENDDIC_DATABASE_TABLES_BUFFER_2)

The table buffer is managed by the [database interface](javascript:call_link\('abendatabase_interface_glosry.htm'\) "Glossary Entry"). When [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") reads are made on tables with activated buffering or if these tables are accessed from classic [dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry"), the table buffer is used implicitly.

Buffering Permission   

Table buffering can be allowed for a DDIC database table as follows:

-   Buffering not allowed
    
    Table buffering is not performed for the table. The database interface always passes the accesses to the DDIC database table, where they can use the current data directly. This setting also specifies that table buffering should not be activated for this table in any other systems due to the way the table is used.
    
-   Buffering allowed, but switched off
    
    Table buffering is not performed for the table when delivered. This setting indicates, however, that buffering is possible in principle and can be activated in other systems depending on how the table is used.
    
-   Buffering switched on
    
    Table buffering is performed for the table. If possible, the database interface redirects any reads to the [table buffer](javascript:call_link\('abentable_buffer_glosry.htm'\) "Glossary Entry") in the [shared memory](javascript:call_link\('abenshared_memory_glosry.htm'\) "Glossary Entry") of the current AS instance.
    

Hint

Certain [prerequisites](javascript:call_link\('abenbuffer_restrictions.htm'\)), some of which depend on the buffering type, must be met before ABAP SQL can access the table buffer instead of accessing the DDIC database table directly.

Buffering Type   

The buffering type determines which data is loaded from the table to the table buffer when a table entry is accessed and buffering is switched on. The possible buffering types are:

-   [Single record buffering](javascript:call_link\('abenbuffer_single_buffering.htm'\))
-   [Generic buffering](javascript:call_link\('abenbuffer_generic_buffering.htm'\))
-   [Full buffering](javascript:call_link\('abenbuffer_complete_buffering.htm'\))



**📖 Source**: [abenddic_database_tables_buffer.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_buffer.htm)

### abenddic_database_tables_protocol.htm

> **📖 Official SAP Documentation**: [abenddic_database_tables_protocol.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_protocol.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Technical Properties of Database Tables](javascript:call_link\('abenddic_database_tables_tech.htm'\)) →  [DDIC - Table-Specific Technical Properties of Database Tables](javascript:call_link\('abenddic_database_tables_techspec.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Logging Database Tables, ABENDDIC_DATABASE_TABLES_PROTOCOL, 757%0D%0A%0D%0AErr
or:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Logging Database Tables

If logging is activated, any changes to table entries in [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") are logged in the log table DBTABLOG. This also requires the profile parameter rec/client to be set accordingly. This profile parameter can have the following values:

-   ALL
    
    Logging is client-independent.
    
-   clnt1, clnt2, ...
    
    Changes are logged only in the specified clients clnt1, clnt2, ...
    
-   OFF
    
    No logging.
    

The logs can be evaluated using the transaction Table History (transaction SCU3). Logging is independent of updates.

If a table row has more than 16000 bytes, logging is not possible for the table. The lengths of fields with the built-in types STRING, RAWSTRING, LCHR, LRAW, and GEOM\_EWKB are counted completely here.

Hints

-   If logging is activated, access to the DDIC database table slows down accordingly. If logging is activated for many DDIC database tables, lock situations can occur for the log table.
-   No data can be written to a DDIC database table with enabled logging using the statement [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)) with [subquery](javascript:call_link\('abapinsert_source.htm'\)).
-   The documented method IS\_LOGGING\_ON of the system class CL\_DBI\_UTILITIES can be used to check whether logging is currently switched on for a DDIC database table.



**📖 Source**: [abenddic_database_tables_protocol.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_protocol.htm)

### abenddic_database_tables_storage.htm

> **📖 Official SAP Documentation**: [abenddic_database_tables_storage.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_storage.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Technical Properties of Database Tables](javascript:call_link\('abenddic_database_tables_tech.htm'\)) →  [DDIC - Table-Specific Technical Properties of Database Tables](javascript:call_link\('abenddic_database_tables_techspec.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Storage Type of Database Tables, ABENDDIC_DATABASE_TABLES_STORAGE, 757%0D%0A%0
D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Storage Type of Database Tables

The storage type only applies if the current database is an [SAP HANA](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") database. The specified storage type is ignored by other database systems and the platform-dependent storage type is used instead. The following settings can be defined for the SAP HANA database:

-   Column store
    
    This setting should be used in the following cases:
    
    -   The DDIC database table is designed for application data analyzed in [SAP HANA](javascript:call_link\('abensap_hana_glosry.htm'\) "Glossary Entry").
    -   The DDIC database table contains a very large number of rows and the storage type column store provides better compression.
    -   The DDIC database table has a [full text index](javascript:call_link\('abenfull_text_index_glosry.htm'\) "Glossary Entry").
    -   The DDIC database table contains table fields with HANA data types that are supported only by the storage type column store.
-   Row store
    
    This setting should only be used in SAP HANA databases if the database table is used mainly for frequent single row accesses. This is the only possible setting for [global temporary tables (GTTs)](javascript:call_link\('abenddic_database_tables_gtt.htm'\)).
    

Hint

For more information about the differences between row store and column store on the SAP HANA database, see the SAP HANA documentation.



**📖 Source**: [abenddic_database_tables_storage.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_storage.htm)

### abenddic_database_tables_load_unit.htm

> **📖 Official SAP Documentation**: [abenddic_database_tables_load_unit.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_load_unit.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Technical Properties of Database Tables](javascript:call_link\('abenddic_database_tables_tech.htm'\)) →  [DDIC - Table-Specific Technical Properties of Database Tables](javascript:call_link\('abenddic_database_tables_techspec.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Load Unit of Database Tables, ABENDDIC_DATABASE_TABLES_LOAD_UNIT, 757%0D%0A%0D
%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Load Unit of Database Tables

The load unit of a table specifies how the data of the table is loaded into the main memory of the SAP HANA database. The SAP HANA database offers the following settings:

-   Column Loadable
    
    The complete table is considered as in-memory. The table data is loaded upon system start in a column-oriented format into the main memory of the SAP HANA database. This is the default behavior.
    
-   Page Loadable
    
    By using a feature of the SAP HANA database called Native Storage Extension (NSE), table data is stored on disk in pages rather than in columns. These pages are loaded only on request into a special buffer in the HANA main memory. Unused data in the buffer can be paged out.
    

Typically, you use Page Loadable for large tables with less frequent accesses. While the SAP HANA database offers the load unit attribute also for single columns and partitions of a table, in the ABAP DDIC this settings always affects the complete table and its indexes.

The ABAP DDIC provides these settings in two flavors:

-   Column Preferred or Page Preferred
    -   Column Preferred is the default behavior.
    -   The load unit is only specified upon creation of the table.
    -   Changing from one preferred load unit to another does not change the load unit on the database.
    -   The ABAP DDIC consistency check does not consider the load unit. It is accepted if the load unit on the database differs from the values specified in the DDIC.
-   Column Enforced or Page Enforced
    -   The load unit is specified upon creation of the table. Furthermore, changes to the load unit in the ABAP DDIC result in corresponding changes on the database.
    -   Changing the enforced load unit results in a corresponding change on the database.
    -   The ABAP DDIC consistency check takes the load unit into account. Different values for the load unit in the DDIC and on the database result in tables that are inconsistent from the DDIC point of view.

The Column Preferred and Page Preferred settings for the load unit setting in the ABAP DDIC offer the possibility for a database administrator or a tool like the SAP HANA NSE Advisor to overwrite the DDIC settings without making the table inconsistent. In general, most of the tables should use one of the Preferred settings for the load unit. Only if you are sure that the table should keep a specific load unit in all relevant scenarios (on premise, cloud, ...), you should use the Enforced load unit settings.

The load unit setting is completely transparent to applications.

Limitations:

-   Page Loadable cannot be used for database tables with [storage type](javascript:call_link\('abenddic_database_tables_storage.htm'\)) Row store.
-   Page Loadable cannot be used for [global temporary tables (GTTs)](javascript:call_link\('abenddic_database_tables_gtt.htm'\)).
-   Page Loadable cannot be set for tables that have [data aging](javascript:call_link\('abendata_aging_glosry.htm'\) "Glossary Entry") enabled.

Hint

For more information about the Native Storage Extension on the SAP HANA database, see the SAP HANA documentation.



**📖 Source**: [abenddic_database_tables_load_unit.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_load_unit.htm)

### abenddic_database_tables_act_type.htm

> **📖 Official SAP Documentation**: [abenddic_database_tables_act_type.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_act_type.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Technical Properties of Database Tables](javascript:call_link\('abenddic_database_tables_tech.htm'\)) →  [DDIC - Table-Specific Technical Properties of Database Tables](javascript:call_link\('abenddic_database_tables_techspec.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Activation Type of Database Tables, ABENDDIC_DATABASE_TABLES_ACT_TYPE, 757%0D%
0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Activation Type of Database Tables

The activation type defines whether a DDIC database table can be activated interactively in an ABAP Dictionary [tool](javascript:call_link\('abenddic_tools.htm'\)) or whether it must be controlled using the ABAP runtime framework environment. This setting is not relevant for DDIC database tables in application programming. In these tables, the default value 00 should be preserved. The following settings are possible:

-   Activation type 00
    
    The default setting in which a DDIC database table can be activated interactively in an ABAP Dictionary [tool](javascript:call_link\('abenddic_tools.htm'\)). DDIC database tables in application programming should always have this activation type.
    
-   The following values for the activation type only apply to those DDIC database tables required by the ABAP runtime framework itself and hence only to internal SAP developments:
    -   Activation type 01
        
        The [DDIC runtime object](javascript:call_link\('abenddic_runtime_object_glosry.htm'\) "Glossary Entry") of the database table must be created using an [ABAP kernel](javascript:call_link\('abenkernel_glosry.htm'\) "Glossary Entry") program before the table is activated in an ABAP Dictionary [tool](javascript:call_link\('abenddic_tools.htm'\)). This may make it impossible to modify and activate important system tables directly.
        
    -   Activation type 02
        
        The DDIC database table is used in the [ABAP kernel](javascript:call_link\('abenkernel_glosry.htm'\) "Glossary Entry"), but the [DDIC runtime object](javascript:call_link\('abenddic_runtime_object_glosry.htm'\) "Glossary Entry") can be activated (and hence created) in an ABAP Dictionary [tool](javascript:call_link\('abenddic_tools.htm'\)). It may be necessary to adjust the consumer programs of the kernel. This is indicated by a note in the activation log.
        
    -   Activation type 10
        
        The DDIC database table is required before other objects are modified as part of a transport.



**📖 Source**: [abenddic_database_tables_act_type.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_act_type.htm)

### abenddic_database_tables_techspec.htm

> **📖 Official SAP Documentation**: [abenddic_database_tables_techspec.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_techspec.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenddic_database_tables_techspec.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_techspec.htm)


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Technical Properties of Database Tables](javascript:call_link\('abenddic_database_tables_tech.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Table-Specific Technical Properties of Database Tables, ABENDDIC_DATABASE_TABL
ES_TECHSPEC, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Table-Specific Technical Properties of Database Tables

The following technical properties are provided specifically for DDIC database tables. They define properties of the physical database table and how the database interface is used for access. Apart from the table category and activation type, these technical settings constitute a standalone object and can be activated and transported separately from the table.

-   [Table category](javascript:call_link\('abenddic_database_tables_tab_cat.htm'\))
-   [Data class](javascript:call_link\('abenddic_database_tables_dat_type.htm'\))
-   [Size category](javascript:call_link\('abenddic_database_tables_siz_cat.htm'\))
-   [Logging](javascript:call_link\('abenddic_database_tables_protocol.htm'\))
-   [Table buffering](javascript:call_link\('abenddic_database_tables_buffer.htm'\))
-   [Storage type](javascript:call_link\('abenddic_database_tables_storage.htm'\))
-   [Load unit](javascript:call_link\('abenddic_database_tables_load_unit.htm'\))
-   [Activation type](javascript:call_link\('abenddic_database_tables_act_type.htm'\))

Hint

Certain combinations of technical properties are not useful. There are [ABAP Test Cockpit (ATC)](javascript:call_link\('abenabap_test_cockpit_glosry.htm'\) "Glossary Entry") tests that report such combinations as errors.

Continue
[DDIC - Table Category of Database Tables](javascript:call_link\('abenddic_database_tables_tab_cat.htm'\))
[DDIC - Data Class of Database Tables](javascript:call_link\('abenddic_database_tables_dat_type.htm'\))
[DDIC - Size Category of Database Tables](javascript:call_link\('abenddic_database_tables_siz_cat.htm'\))
[DDIC - Table Buffering of Database Tables](javascript:call_link\('abenddic_database_tables_buffer.htm'\))
[DDIC - Logging Database Tables](javascript:call_link\('abenddic_database_tables_protocol.htm'\))
[DDIC - Storage Type of Database Tables](javascript:call_link\('abenddic_database_tables_storage.htm'\))
[DDIC - Load Unit of Database Tables](javascript:call_link\('abenddic_database_tables_load_unit.htm'\))
[DDIC - Activation Type of Database Tables](javascript:call_link\('abenddic_database_tables_act_type.htm'\))
