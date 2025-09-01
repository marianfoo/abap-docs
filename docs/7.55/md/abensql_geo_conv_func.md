  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [ABAP SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) →  [sql\_exp - sql\_func](javascript:call_link\('abensql_builtin_func.htm'\)) →  [ABAP SQL - Built-In Functions sql\_func](javascript:call_link\('abenopen_sql_builtin_functions.htm'\)) →  [sql\_func - Special Functions](javascript:call_link\('abenopen_sql_special_functions.htm'\)) →  [sql\_func - Conversion Functions](javascript:call_link\('abenopen_sql_conversion_functions.htm'\)) → 

sql\_func - Geometry Conversion Function

Syntax

... AS\_GEO\_JSON( geom ) ...

Effect

The function AS\_GEO\_JSON reads geometry input in the [extended well-known binary (EWKB) representation](javascript:call_link\('abenddic_geo_data.htm'\)) and returns a geometry object in [JSON](javascript:call_link\('abenjson_glosry.htm'\) "Glossary Entry") format. geom must be a table column of type [GEOM\_EWKB](javascript:call_link\('abenddic_builtin_types.htm'\)) containing a valid geometry. The result is a geometry object in [JSON](javascript:call_link\('abenjson_glosry.htm'\) "Glossary Entry") format with data type [STRING](javascript:call_link\('abenddic_builtin_types.htm'\)).

If geom is null, then null is returned.

Hints

-   The geodata type [GEOM\_EWKB](javascript:call_link\('abenddic_geo_data.htm'\)) is mapped to the ABAP type [xstring](javascript:call_link\('abenddic_builtin_types.htm'\)). During the conversion to [JSON](javascript:call_link\('abenjson_glosry.htm'\) "Glossary Entry") format, a type conversion to the ABAP type [string](javascript:call_link\('abenddic_builtin_types.htm'\)) is carried out.

-   AS\_GEO\_JSON enforces the [strict mode from Release 7.55](javascript:call_link\('abenopensql_strict_mode_755.htm'\)).

Example

A geometry is inserted into the DDIC database table DEMO\_GEOM\_EWKB with the space reference 4326. Within the SELECT statement, the column is read with the built-in function AS\_GEO\_JSON. The data type is converted from [xstring](javascript:call_link\('abenddic_builtin_types.htm'\)) to [string](javascript:call_link\('abenddic_builtin_types.htm'\)) and the coordinates of a polygon in [JSON](javascript:call_link\('abenjson_glosry.htm'\) "Glossary Entry") format are returned as output.

DELETE FROM demo\_geom\_ewkb.
INSERT demo\_geom\_ewkb FROM @( VALUE #(
  id = 'X'
  geom\_ewkb\_4326 =
    '0103000020E6100000010000000500000000000000000000000000000000000' &
    '0000000000000000000000000000000F03F000000000000F03F000000000000' &
    'F03F000000000000F03F0000000000000000000000000000000000000000000' &
    '00000' ) ).
SELECT SINGLE
       as\_geo\_json( geom\_ewkb\_4326 )
       FROM demo\_geom\_ewkb
       WHERE id = 'X'
       INTO (@DATA(geo\_json)).
cl\_demo\_output=>display\_json( geo\_json ).