  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Obsolete Database Access](javascript:call_link\('abendatabase_access_obsolete.htm'\)) →  [Obsolete ABAP SQL](javascript:call_link\('abenabap_sql_obsolete.htm'\)) →  [Obsolete Syntax in ABAP SQL](javascript:call_link\('abenopen_sql_syntax_obsolete.htm'\)) → 

Obsolete Host Variables

The [host variables](javascript:call_link\('abenopen_sql_host_variables.htm'\)) of an ABAP SQL statement can still be specified without the escape character @, unless one of the [strict modes](javascript:call_link\('abenopensql_strict_modes.htm'\)) of the syntax check from Release 7.40, SP05 is used. This format is obsolete. The escape character @ must always be specified to distinguish ABAP data objects clearly from names in the database.

Example

SELECT statement without escape character in front of named ABAP data objects.

SELECT \*
       FROM spfli
       INTO TABLE itab
       WHERE carrid = carrid AND
             connid = connid.

Recommended spelling with escape character in front of named ABAP data objects.

SELECT \*
       FROM spfli
       WHERE carrid = @carrid AND
             connid = @connid
       INTO TABLE @itab.