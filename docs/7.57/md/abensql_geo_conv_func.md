  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsql_expr.htm) →  [sql\_exp - sql\_func](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_builtin_func.htm) →  [ABAP SQL - Built-In Functions sql\_func](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_builtin_functions.htm) →  [sql\_func - Special Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_special_functions.htm) →  [sql\_func - Conversion Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_conversion_functions.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: sql_func - Geometry Conversion Function, ABENSQL_GEO_CONV_FUNC, 757%0D%0A%0D%0AError:
%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

sql\_func - Geometry Conversion Function

Syntax

... AS\_GEO\_JSON( geom ) ...

Effect

The function AS\_GEO\_JSON reads geometry input in the [Extended Well-Known Binary (EWKB) representation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_geo_data.htm) and returns a geometry object in [JSON](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenjson_glosry.htm "Glossary Entry") format. geom must be a table column of type [GEOM\_EWKB](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) containing a valid geometry. The result is a geometry object in [JSON](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenjson_glosry.htm "Glossary Entry") format with data type [STRING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm).

If geom is null, then null is returned.

Hints

-   The geodata type [GEOM\_EWKB](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_geo_data.htm) is mapped to the ABAP type [xstring](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm). During the conversion to [JSON](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenjson_glosry.htm "Glossary Entry") format, a type conversion to the ABAP type [string](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) is carried out.
-   AS\_GEO\_JSON enforces the [strict mode from Release 7.55](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_strictmode_755.htm).

Example

A geometry is inserted into the DDIC database table DEMO\_GEOM\_EWKB with the space reference 4326. Within the SELECT statement, the column is read with the built-in function AS\_GEO\_JSON. The data type is converted from [xstring](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) to [string](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) and the coordinates of a polygon in [JSON](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenjson_glosry.htm "Glossary Entry") format are returned as output.

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
       INTO (@FINAL(geo\_json)).
cl\_demo\_output=>display\_json( geo\_json ).