  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Dictionary DDL for Defining Database Tables](javascript:call_link\('abenddic_define_table.htm'\)) →  [DDIC DDL - DEFINE TABLE](javascript:call_link\('abenddicddl_define_table.htm'\)) →  [DDIC DDL - DEFINE TABLE, field](javascript:call_link\('abenddicddl_define_table_comps.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC DDL - DEFINE TABLE, geo_annos, ABENDDICDDL_DEFINE_TABLE_SRPRPS, 757%0D%0A%0D%0AE
rror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC DDL - DEFINE TABLE, geo\_annos

Syntax

@AbapCatalog.geo.spatialRefSystem : 'id'

Effect

Specifies a special property for table fields with the [geodata type](javascript:call_link\('abengeo_data_type_glosry.htm'\) "Glossary Entry") GEOM\_EWKB.

Currently, the annotation @AbapCatalog.geo.spatialRefSystem is possible. This annotation is used to specify the ID id of a [spatial reference system](javascript:call_link\('abenddic_database_tables_sptlrf.htm'\)) as an integer value in quotation marks. If the annotation is not specified when the DDIC database table (or DDIC structure) is specified, the default value 0 is used implicitly and the annotation inserted accordingly. The spatial reference system can no longer be modified after activation.

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