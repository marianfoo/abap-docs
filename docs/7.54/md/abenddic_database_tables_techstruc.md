---
title: "Structure-Specific Technical Attributes of Database Tables"
description: |
  The following technical attributes are mostly the same as those of a structure(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_structures_tech.htm) in ABAP Dictionary: -   Table fields (columns) A table field is a component of the structure of the database table and describes t
version: "7.54"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_techstruc.htm"
abapFile: "abenddic_database_tables_techstruc.htm"
keywords: ["insert", "delete", "do", "if", "case", "try", "class", "data", "types", "abenddic", "database", "tables", "techstruc"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_classical_objects.htm) →  [Database Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables.htm) →  [Technical Attributes of Database Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_tech.htm) → 

Structure-Specific Technical Attributes of Database Tables

The following technical attributes are mostly the same as those of a [structure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_structures_tech.htm) in ABAP Dictionary:

-   Table fields (columns)

A table field is a component of the structure of the database table and describes the name, the data type, and any semantic attributes of a field of a database table. A table field is a component of the structured data type of the table and the associated [rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_structures_tech.htm) apply to the component name and component type, with the following restrictions:

-   The name of a table field cannot be a reserved name. The reserved names that cannot be used are specified in the database table TRESE. This is also important when using [include structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_include_structure.htm).

-   A table field always has one elementary data type. Reference types, substructures, and table types are not possible. The elementary data type is specified directly for the table field or by using a data element and is always based on a [built-in type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) in ABAP Dictionary. A table field has a platform-specific type in the physical database table. For each platform, there is a mapping between the elementary types in ABAP Dictionary and the platform-specific types. If only [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry") is used, this mapping is transparent for ABAP programmers and only the built-in types in ABAP Dictionary and their ABAP types are relevant for the ABAP program.

-   Fields with the type CHAR can have a maximum of 1333 characters.

-   Fields with the type LRAW or LCHR must be at the end of the table. Only one such field is allowed per table. Furthermore, a field with the type INT2 or INT4 (for the maximum length of the field) must be located directly in front of this field.

-   Fields of the obsolete types DF16\_SCL and DF34\_SCL must be followed directly by a field of type INT2 for scaling.

-   Include structures

Structures (but not database tables or views) can be included in a database table as [include structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_include_structure.htm). A structure can only be included in a table if its components meet the table field prerequisites above. In particular, an included structure cannot contain any substructures. Any naming conflicts must be bypassed by defining suffixes. As in regular structures, the include can be assigned the name of a group.

When a structure is included, all its fields can be flagged as [key fields](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_key.htm). The include structure must then be inserted in the existing key fields or directly after them. Individual fields of an included structure cannot themselves be key fields.

When an include structure is included, the flag for initial values can be set for the entire structure. In this case, those fields in the include structure for which this attribute is set also keep their attribute. If the flag for initial values is not set for the included include structure, none of its fields have this attribute.

The fields of an included include structure are still part of the structure. They can only be edited using the structure and any changes made to the structure are applied to all including database tables. The fields of an included include structure can also be transformed to direct fields of the database table that are no longer associated with the originally included structure.

-   Enhancement category

The same applies to the enhancement category of database tables as to the [enhancement category of structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_structures_enh_cat.htm).

The following applies with respect to the number of fields and length of the structure of a database table:

-   Number of fields

-   A table in the software component SAP\_BASIS can contain a maximum of 749 fields.

-   A table in a software component other than SAP\_BASIS can contain 1000 fields if the [storage type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_storage.htm) is Row Store and 1500 fields if the storage type is Column Store.

-   The total of all field lengths is restricted. The following applies with respect to the total of the number of bytes of the non-character-like fields plus the number of characters of the flat character-like fields:

-   In a table in the software component SAP\_BASIS, the total cannot be greater than 4030.

-   In ABAP Dictionary, no limit applies to tables in software components other than SAP\_BASIS. The limit defined in the current database platform applies (in the [SAP HANA database](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhana_database_glosry.htm "Glossary Entry") this is 512 KB).

In the case of deep fields such as STRING, RAWSTRING, LRAW, LCHR, and GEOM\_EWKB, only the bytes of the references are counted and not the actual content.

Notes

-   Nested structures cannot be used to write to database tables because these structures are not possible in every supported database.

-   If it meets the prerequisites above, an existing structure can be transformed to a database table. Conversely, a database structure can also be transformed to a regular structure (this deletes the database object).

-   The limit on the number of fields and the length of the structure for tables in the software component SAP\_BASIS is chosen deliberately so that the requirements of any supported database platform can be met. At SAP, tables can be flagged to allow this restriction to be exceeded if enhancements are used. When tables flagged in this way are accessed using ABAP SQL, a syntax warning from the [extended program check](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenextended_program_check_glosry.htm "Glossary Entry") occurs. The warning indicates that a cross-platform replacement implementation may be necessary. The class [CL\_ABAP\_DBFEATURES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencl_abap_dbfeatures.htm) can be used to identify which limit is supported by a particular database system. The limits applied to tables in other software components for S/4 HANA is only defined by the [SAP HANA database](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhana_database_glosry.htm "Glossary Entry").