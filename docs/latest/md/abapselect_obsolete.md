  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Obsolete Database Access](javascript:call_link\('abendatabase_access_obsolete.htm'\)) →  [Obsolete ABAP SQL](javascript:call_link\('abenabap_sql_obsolete.htm'\)) →  [Obsolete Short Forms in ABAP SQL](javascript:call_link\('abenabap_sql_short_forms_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECT%2C%20Short%20Form%2C%20ABAPSELECT_OBSOLETE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SELECT, Short Form

[Short Reference](javascript:call_link\('abapselect_shortref.htm'\))

Obsolete Syntax

SELECT *\[*SINGLE*\]* \* FROM *{* dbtab *|* \*dbtab *}* ...
  ...
ENDSELECT.

Effect

This statement is a short form of the following [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") statement for accessing an individual DDIC database table dbtab:

[SELECT](javascript:call_link\('abapselect.htm'\)) *\[* [SINGLE](javascript:call_link\('abapselect_single.htm'\))*\]* [\*](javascript:call_link\('abapselect_list.htm'\))  [FROM](javascript:call_link\('abapfrom_clause.htm'\)) dbtab [INTO](javascript:call_link\('abapinto_clause.htm'\)) *{* dbtab *|* \*dbtab *}* ...
  ...
[ENDSELECT](javascript:call_link\('abapendselect.htm'\)).

The explicit specification of a work area in an [INTO](javascript:call_link\('abapinto_clause.htm'\)) clause is not required in the short form. A [table work area](javascript:call_link\('abentable_work_area_glosry.htm'\) "Glossary Entry") dbtab or \*dbtab is used implicitly as the work area. The table work area must be declared using [TABLES](javascript:call_link\('abaptables.htm'\)). If the name \*dbtab is used instead of the name of the DDIC database table dbtab, dbtab is accessed, but the [additional table work area](javascript:call_link\('abaptables_asterisk.htm'\)) is used.

The short form can only be used to read all columns of a database table if \* is specified in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)). When individual columns or aggregate functions are read, the work area must always be specified explicitly. The only exception is when count( \* ) is used to specify nothing, if no alias name is defined for it and no GROUP BY clause is specified.

Hint

This short form is forbidden in classes and in the [strict mode of the syntax check from ABAP release 7.40, SP05](javascript:call_link\('abenabap_sql_strictmode_740_sp05.htm'\)). An explicit work area must be used instead.

Bad Example

TABLES scarr.
SELECT \*
       FROM scarr.
  ...
ENDSELECT.

Good Example

DATA wa TYPE scarr.
SELECT \*
       FROM scarr
       INTO @wa.
  ...
ENDSELECT.

Good Example

SELECT \*
       FROM scarr
       INTO @FINAL(wa).
  ...
ENDSELECT.