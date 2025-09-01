---
title: "Structure-Specific Technical Attributes of Database Tables"
description: |
  The following technical attributes are mostly the same as those of a structure(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_structures_tech.htm) in ABAP Dictionary: -   Table fields (columns) A table field is a component of the structure of the database table and describes t
version: "7.52"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_techstruc.htm"
abapFile: "abenddic_database_tables_techstruc.htm"
keywords: ["insert", "delete", "do", "if", "case", "try", "class", "data", "types", "abenddic", "database", "tables", "techstruc"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_classical_objects.htm) →  [Database Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables.htm) →  [Technical Attributes of Database Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_tech.htm) → 

Structure-Specific Technical Attributes of Database Tables

The following technical attributes are mostly the same as those of a [structure](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_structures_tech.htm) in ABAP Dictionary:

-   Table fields (columns)

A table field is a component of the structure of the database table and describes the name, the data type, and any semantic attributes of a field of a database table. A table field is a component of the structured data type of the table and the associated [rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_structures_tech.htm) apply to the component name and component type, with the following restrictions:

-   The name of a table field cannot be a reserved name. The reserved names that cannot be used are specified in the database table TRESE. This is also important when using [include structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_include_structure.htm).

-   A table field always has one elementary data type. Reference types, substructures, and table types are not possible. The elementary data type is specified directly for the table field or by using a data element and is always based on a [built-in type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) in ABAP Dictionary. In the physical database table, a table field has a platform-specific type. For each platform there is a mapping between the elementary types of the ABAP Dictionary and the platform-specific types. If only [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry") is used, this mapping is transparent for ABAP programmers and only the built-in types in ABAP Dictionary and their ABAP types are relevant for the ABAP program.

-   A table can have a maximum of 749 fields. The total of all field lengths is restricted. The total of the number of bytes of the non-character-like fields and the number of characters of the flat character-like fields must not exceed 4030. In the case of deep fields such as STRING, RAWSTRING, LRAW, and LCHR, only the bytes of the references are counted and not the actual content.

-   Fields with the type CHAR can have a maximum of 1333 characters.

-   Fields with the type LRAW or LCHR must be at the end of the table. Only one such field is allowed per table. Furthermore, a field with the type INT2 or INT4 (for the maximum length of the field) must be located directly in front of this field.

-   Fields of the obsolete types DF16\_SCL and DF34\_SCL must be followed directly by a field of type INT2 for scaling.

-   Other rules apply to the fields in [pooled tables and cluster tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_poolclu.htm).

-   Include structures

Structures (but not database tables or views) can be included in a database table as [include structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_include_structure.htm). A structure can only be included in a table if its components meet the table field prerequisites above. In particular, an included structure cannot contain any substructures. Any naming conflicts must be bypassed by defining suffixes. As in regular structures, the include can be assigned the name of a group.

When a structure is included, all its fields can be flagged as [key fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_key.htm). The include structure must then be inserted in the existing key fields or directly after them. Individual fields of an included structure cannot themselves be key fields.

When an include structure is included, the flag for initial values can be set for the entire structure. In this case, those fields in the include structure for which this attribute is set also keep their attribute. If the flag for initial values is not set for the included include structure, none of its fields have this attribute.

The fields of an included include structure are still part of the structure. They can only be edited using the structure and any changes made to the structure are applied to all including database tables. The fields of an included include structure can also be transformed to direct fields of the database table that are no longer associated with the originally included structure.

-   Enhancement category

The same applies to the enhancement category of database tables as to the [enhancement category of structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_structures_enh_cat.htm).

Notes

-   Nested structures cannot be used to write to database tables because these structures are not possible in every supported database.

-   If it meets the prerequisites above, an existing structure can be transformed to a database table. Conversely, a database structure can also be transformed to a regular structure (this deletes the database object).

-   The length of the structure is restricted in such a way that the requirements of all supported database platforms are met. At SAP, tables can be flagged to allow this restriction to be exceeded if enhancements are used. When tables flagged in this way are accessed using Open SQL, a syntax check warning occurs. The warning indicates that a cross-platform replacement implementation must be made. The class [CL\_ABAP\_DBFEATURES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_dbfeatures.htm) can be used to identify which restriction is supported by the current database system.