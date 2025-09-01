  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) → 

ABAP SQL - Work Areas in Statements

If the ABAP SQL statements

-   SELECT or FETCH without the addition CORRESPONDING FIELDS,

-   INSERT, UPDATE, MODIFY, or DELETE

Specify work areas wa or internal tables itab as the target or source areas, the following prerequisites apply to the work area or row type of the internal table; if the prerequisites are ignored, a syntax error occurs or an exception is raised.

-   [Regular Work Areas](#abenopen-sql-wa-1--------lob-handle-structures---@ITOC@@ABENOPEN_SQL_WA_2)

Regular Work Areas

The following rules apply to work areas that do not contain reference variables for [LOB Handles](javascript:call_link\('abenlob_handle_glosry.htm'\) "Glossary Entry") :

-   The data type of the work area or row type of the internal table must not be [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") or contain deep components. This excludes strings and special work areas for [streaming](javascript:call_link\('abenopen_sql_streaming.htm'\)) and [locators](javascript:call_link\('abenlocators.htm'\)).

-   The data type of the work area and the row type of the internal table must not contain any [enumerated types](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry").

-   The work area or row type of the internal table must be at least as long as the database structure and the [alignment](javascript:call_link\('abenalignment_glosry.htm'\) "Glossary Entry") must match. In the statement DELETE, this prerequisite must only be met in the length of the [primary key](javascript:call_link\('abenprimary_key_glosry.htm'\) "Glossary Entry").

-   If the work area or rows of the internal table are structured, the [fragment view](javascript:call_link\('abenunicode_fragment_view_glosry.htm'\) "Glossary Entry") of the database structure must match that of the work area or the internal table.

-   If the work area or rows of the internal table are elementary, they must be character-like and [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry"). The columns of the database structure must also be character-like and flat.

-   If the work area contains strings as components or is itself a string, or if columns of type [SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)), [STRING](javascript:call_link\('abenddic_builtin_types.htm'\)), [RAWSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)), or GEOM\_EWKB appear in the database structure, the work area must be compatible with the database structure.

-   If the column specification \* is used in the statement SELECT to access a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"), the work area is always checked as if it contained a string as a component.

-   For the modifying operations INSERT, UPDATE, and MODIFY, the passed values must match the value range of the columns of the database tables. Otherwise, corresponding exceptions are raised. This applies in particular to the following:

-   Columns with numeric data types.

-   Columns of the types SSTRING, STRING, RAWSTRING, or GEOM\_EWKB. The strings of the work area must not be longer than the maximum length of the columns in the database structure. This length can be determined using the built-in function [dbmaxlen](javascript:call_link\('abenlength_functions.htm'\)).

-   Columns of the types DATN, TIMN, and UTCLONG. Only valid dates, times, and time stamps can be passed.

Note

The work area or row structure of the internal table should always be built like the database structure. If a single data source is used in the ABAP SQL statement, a data object built in the same way can be declared with reference to the relevant structure in ABAP Dictionary. If more than one data source is used (in the statement SELECT), a data object built in the same way can be built as a nested structure, which contains, as substructures, the structures of the single data sources in the order specified in the statement. No structure should be used in which all components are on one level, because this ignores potential [alignment gaps](javascript:call_link\('abenalignment_gap_glosry.htm'\) "Glossary Entry") between the single data sources.

LOB Handle Structures

If a work area is an [LOB handle structure](javascript:call_link\('abenlob_handle_structure_glosry.htm'\) "Glossary Entry"), that is, it contains at least one reference variable for [LOB handles](javascript:call_link\('abenlob_handle_glosry.htm'\) "Glossary Entry"), it must be structured exactly like the structure of the data source and all components except for the [LOB handle components](javascript:call_link\('abenlob_handle_component_glosry.htm'\) "Glossary Entry") must be [compatible](javascript:call_link\('abencompatible_glosry.htm'\) "Glossary Entry") with the corresponding components of the data source. The static type of each LOB handle component must contain the IF\_ABAP\_DB\_LOB\_HANDLE interface and match both the current statement and the data type of the assigned LOB.

Note

In the statement FETCH, no LOB handle structures can currently be specified.