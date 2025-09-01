  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Semantic Attributes of Database Tables](javascript:call_link\('abenddic_database_tables_sema.htm'\)) →  [DDIC - Table-Specific Semantic Attributes of Database Tables](javascript:call_link\('abenddic_database_tables_semasspec.htm'\)) → 

DDIC - Spatial Reference System

A spatial reference system must be defined for table fields with the [geodata type](javascript:call_link\('abengeo_data_type_glosry.htm'\) "Glossary Entry") [GEOM\_EWKB](javascript:call_link\('abenddic_builtin_types.htm'\)). This property is not available for other data types.

A spatial reference system consists of various parameters that are used to represent a geometry, such as the name of the coordinate system from which the coordinates are derived. The specification of a spatial reference system is done by an integer identifier. The integer identifiers of spatial reference systems that are available in the current [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") are provided by the HANA-View ST\_SPATIAL\_REFERENCE\_SYSTEMS.

The default value for the identifier of the spatial reference system is 0 and denotes a Cartesian coordinate system. Once a table (or structure) is activated, the definition of the spatial reference system of a geodata type cannot be modified.

Spatial reference systems are not managed by ABAP. There is no guarantee that a that a spatial reference system which is available in one system is also available in a follow-up system. An application working with spatial reference systems must itself take care for providing spatial references in all systems in question by using native HANA functionality.

Hints

-   The instance method GET\_SPATIAL\_REFERENCE\_SYSTEMS of the class CL\_DD\_DATATYPE reads the possible identifiers for spatial reference systems from the SAP HANA view using [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry").

-   The program ABAP\_DOCU\_SHOW\_SPATIAL\_REF\_SYS shows the spatial reference systems, that are available in the current system.