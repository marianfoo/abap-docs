  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Built-In Data Types in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types_intro.htm) →  [Attributes of the Predefined Dictionary Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types_prop.htm) →  [Special Dictionary Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types_special.htm) → 

Geodata Types

The [geodata type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengeo_data_type_glosry.htm "Glossary Entry") [GEOM\_EWKB](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) is a built-in data type in ABAP Dictionary that describes the geometric position in a given coordinate reference system.

It represents fields in the database that contain geometric data in the EWKB (Extended Well-Known Binary) format. This type is currently only supported on [SAP HANA databases](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhana_database_glosry.htm "Glossary Entry") and references the database type ST\_GEOMETRY.

The internal representation of the geodata type GEOM\_EWKB is a [BLOB](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenblob_glosry.htm "Glossary Entry") (Binary Large Object) and the same rules and restrictions largely apply as to the type [RAWSTRING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm). The type GEOM\_EWKB is mapped to the ABAP type [xstring](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuiltin_types_byte.htm).

There is no semantic representation for geometric data at the ABAP level and ABAP can merely manage the transfer of geometric data between the application and the SAP HANA database. The SAP HANA database functions for geometric data types can be implemented using [AMDP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp.htm).

The data type GEOM\_EWKB requires a coordinate reference system (a Spatial Reference System), namely a defined space in which geometric positions are described. Every spatial reference system has a unique spatial reference identifier (or SRID). This SRID is appended as an attribute of a table column with geometric data. The annotation @AbapCatalog.geo.spatialRefSystem and the corresponding SRID can be used to assign every coordinate reference system available in the specified SAP HANA database to a GEOM\_EWKB column.

If the SRID is not assigned to a GEOM\_EWKB column as an attribute, the system assigns the default value "0”to the annotation @AbapCatalog.geo.spatialRefSystem, which represents a Cartesian coordinate system.

Once a table is activated, however, the coordinate reference system of a geodata type cannot be changed.

Notes

-   Columns of the data type GEOM\_EWKB are not supported as [BLOBs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenblob_glosry.htm "Glossary Entry") in [streaming and locators in ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstreams_locators.htm).

-   [NOT NULL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_init.htm) cannot be set for a column of the type GEOM\_EWKB.

-   Coordinate reference system information provided by a given SAP HANA database is saved in the SAP HANA system view ST\_SPATIAL\_REFERENCE\_SYSTEMS. In the class CL\_DD\_DATATYPE, ABAP Dictionary provides the method get\_spatial\_reference\_systems for extracting information about available coordinate reference systems.