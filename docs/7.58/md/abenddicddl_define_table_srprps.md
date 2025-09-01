  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables.htm) →  [DDIC - Dictionary DDL for Defining Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_define_table.htm) →  [DDIC DDL - DEFINE TABLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_define_table.htm) →  [DDIC DDL - DEFINE TABLE, field](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_define_table_comps.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20DDL%20-%20DEFINE%20TABLE%2C%20geo_annos%2C%20ABENDDICDDL_DEFINE_TABLE_SRPRPS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impr
ovement:)

DDIC DDL - DEFINE TABLE, geo\_annos

Syntax

@AbapCatalog.geo.spatialRefSystem : 'id'

Effect

Specifies a property for table fields with the [geodata type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengeo_data_type_glosry.htm "Glossary Entry") GEOM\_EWKB.

Currently, the annotation @AbapCatalog.geo.spatialRefSystem is available. This annotation is used to specify the ID id of a [spatial reference system](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_sptlrf.htm) as an integer value in quotation marks. If the annotation is not specified, the default value 0 is used implicitly and the annotation inserted accordingly. The spatial reference system can no longer be modified after activation.

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