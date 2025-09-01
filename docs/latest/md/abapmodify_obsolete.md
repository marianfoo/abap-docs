  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Obsolete Database Access](javascript:call_link\('abendatabase_access_obsolete.htm'\)) →  [Obsolete ABAP SQL](javascript:call_link\('abenabap_sql_obsolete.htm'\)) →  [Obsolete Short Forms in ABAP SQL](javascript:call_link\('abenabap_sql_short_forms_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20MODIFY%20dbtab%2C%20Short%20Form%2C%20ABAPMODIFY_OBSOLETE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

MODIFY dbtab, Short Form

[Short Reference](javascript:call_link\('abapmodify_dbtab_shortref.htm'\))

Obsolete Syntax

MODIFY *{* dbtab *|* \*dbtab *}* ...

Effect

This statement is a short form of the following [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") statement for accessing an individual database table dbtab:

[MODIFY](javascript:call_link\('abapmodify_dbtab.htm'\)) dbtab FROM *{* dbtab *|* \*dbtab *}* ... .

The explicit specification of a work area is missing in the short form. A [table work area](javascript:call_link\('abentable_work_area_glosry.htm'\) "Glossary Entry") dbtab or \*dbtab is used implicitly as the work area. The table work area must be declared using [TABLES](javascript:call_link\('abaptables.htm'\)). If the name \*dbtab is used instead of the name of the database table dbtab, dbtab is accessed, but the [additional table work area](javascript:call_link\('abaptables_asterisk.htm'\)) is used.

Hint

This short form is forbidden in classes and in the [strict mode of the syntax check from ABAP release 7.40, SP05](javascript:call_link\('abenabap_sql_strictmode_740_sp05.htm'\)). An explicit work area must be used instead.