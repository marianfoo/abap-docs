---
title: "DDIC - Geodata Types"
description: |
  The geodata type(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengeo_data_type_glosry.htm 'Glossary Entry') GEOM_EWKB(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) is a built-in data type in ABAP Dictionary that describes the geo
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_geo_data.htm"
abapFile: "abenddic_geo_data.htm"
keywords: ["do", "if", "try", "data", "types", "abenddic", "geo"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Built-In Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types_intro.htm) →  [DDIC - Properties of the Built-In Dictionary Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types_prop.htm) →  [DDIC - Special Dictionary Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types_special.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Geodata%20Types%2C%20ABENDDIC_GEO_DATA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Geodata Types

The [geodata type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengeo_data_type_glosry.htm "Glossary Entry") [GEOM\_EWKB](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) is a built-in data type in ABAP Dictionary that describes the geometric position in a given coordinate reference system.

It represents fields in the database that contain geometric data in the EWKB (Extended Well-Known Binary) format. This type is currently only supported on [SAP HANA databases](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhana_database_glosry.htm "Glossary Entry") and references the database type ST\_GEOMETRY.

The internal representation of the geodata type GEOM\_EWKB is a [BLOB](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenblob_glosry.htm "Glossary Entry") (Binary Large Object) and the same rules and restrictions apply as to the type [RAWSTRING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm). The type GEOM\_EWKB is mapped to the ABAP type [xstring](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_types_byte.htm).

At ABAP level, there is no semantic representation for geometric data. ABAP only allows geometric data to be passed between the application and the SAP HANA database. The SAP HANA database functions for geometric data types can be accessed using [AMDP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp.htm).

If the data type GEOM\_EWKB is used for a structure component or a table field of a DDIC database table, the type must be assigned a [spatial reference system](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_sptlrf.htm). This system cannot be changed once activated. The system has the ID 0 by default.

Hints

-   Columns of the data type GEOM\_EWKB are not supported as [BLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenblob_glosry.htm "Glossary Entry") in [streaming and locators in ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstreams_locators.htm). To use columns of the data type GEOM\_EWKB in streaming and locators, they have to be converted to [JSON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenjson_glosry.htm "Glossary Entry") format first. This can be done with the conversion function [AS\_GEO\_JSON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_geo_conv_func.htm).
-   [NOT NULL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_init.htm) cannot be set for a column of the type GEOM\_EWKB.