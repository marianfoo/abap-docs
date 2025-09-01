  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables.htm) →  [DDIC - Dictionary DDL for Defining Database Tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_define_table.htm) →  [DDIC DDL - DEFINE TABLE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_table.htm) →  [DDIC DDL - DEFINE TABLE, field](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_table_comps.htm) → 

DDIC DDL - DEFINE TABLE, geo\_annos

Syntax

@AbapCatalog.geo.spatialRefSystem : 'id'

Effect

Specifies a special property for table fields with the [geodata type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abengeo_data_type_glosry.htm "Glossary Entry") GEOM\_EWKB.

Currently, the annotation @AbapCatalog.geo.spatialRefSystem is possible. This annotation is used to specify the ID id of a [spatial reference system](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_sptlrf.htm) as an integer value in quotation marks. If the annotation is not specified when the DDIC database table (or DDIC structure) is specified, the default value 0 is used implicitly and the annotation inserted accordingly. The spatial reference system can no longer be modified after activation.

Hints

-   The program ABAP\_DOCU\_SHOW\_SPATIAL\_REF\_SYS shows the spatial reference systems that are available in the current system.

-   Spatial reference systems are not managed by ABAP. A spatial reference system that is available in one system is not necessarily available in a follow-up system.

Example

Annotation @AbapCatalog.geo.spatialRefSystem for a table field LOCATION of a DDIC database table.

...
define table ... {
  ...
  @AbapCatalog.geo.spatialRefSystem : '4326'
  location  : abap.geom\_ewkb;
  ...
}