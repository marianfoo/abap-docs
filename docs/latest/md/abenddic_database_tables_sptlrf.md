  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Semantic Properties of Database Tables](javascript:call_link\('abenddic_database_tables_sema.htm'\)) →  [DDIC - Table-Specific Semantic Properties of Database Tables](javascript:call_link\('abenddic_database_tables_semasspec.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Spatial%20Reference%20System%2C%20ABENDDIC_DATABASE_TABLES_SPTLRF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement
:)

DDIC - Spatial Reference System

The definition of a spatial reference system is mandatory for table fields with the [geodata type](javascript:call_link\('abengeo_data_type_glosry.htm'\) "Glossary Entry") [GEOM\_EWKB](abenddic_builtin_types.htm#@@ITOC@@ABENDDIC_BUILTIN_TYPES_9). For other data types, this property is not available.

A spatial reference system consists of various parameters that are used to represent a geometry, such as the name of the coordinate system from which the coordinates are derived. The specification of a spatial reference system is done by an integer identifier. The integer identifiers of spatial reference systems that are available in the current [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") are provided by the HANA-View ST\_SPATIAL\_REFERENCE\_SYSTEMS.

The default value for the identifier of the spatial reference system is 0 and indicates a Cartesian coordinate system. Once a table (or structure) is activated, the definition of the spatial reference system of a geodata type must not be modified.

Spatial reference systems are not managed by ABAP. There is no guarantee that a spatial reference system which is available in one system is also available in a follow-on system. An application that works with spatial reference systems is responsible for providing spatial references in all affected systems by using native HANA functions.

Hints

-   The program ABAP\_DOCU\_SHOW\_SPATIAL\_REF\_SYS shows the spatial reference systems that are available in the current system.
-   The instance method GET\_SPATIAL\_REFERENCE\_SYSTEMS of the class CL\_DD\_DATATYPE reads the possible identifiers for spatial reference systems from the SAP HANA view using [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry").