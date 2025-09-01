  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Obsolete Database Access](javascript:call_link\('abendatabase_access_obsolete.htm'\)) →  [Obsolete ABAP SQL](javascript:call_link\('abenabap_sql_obsolete.htm'\)) →  [Obsolete Syntax in ABAP SQL](javascript:call_link\('abenabap_sql_syntax_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Obsolete%20Host%20Variables%2C%20ABENABAP_SQL_HOSTVAR_OBSOLETE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Obsolete Host Variables

The [host variables](javascript:call_link\('abenabap_sql_host_variables.htm'\)) of an ABAP SQL statement can still be specified without the escape character @, unless one of the [strict modes](javascript:call_link\('abenabap_sql_strict_modes.htm'\)) of the syntax check from ABAP release 7.40, SP05 is in effect. This specification is obsolete. The escape character @ must always be specified to distinguish ABAP data objects clearly from names in the database.

Example

SELECT statement without an escape character in front of named ABAP data objects.

SELECT \*
       FROM spfli
       INTO TABLE itab
       WHERE carrid = carrid AND
             connid = connid.

Recommended spelling with an escape character in front of named ABAP data objects.

SELECT \*
       FROM spfli
       WHERE carrid = @carrid AND
             connid = @connid
       INTO TABLE @itab.