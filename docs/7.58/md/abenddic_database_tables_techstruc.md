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