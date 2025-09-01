  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Obsolete Database Access](javascript:call_link\('abendatabase_access_obsolete.htm'\)) →  [Obsolete Access to Objects in HANA XS](javascript:call_link\('abenhana_xsc_obsolete.htm'\)) →  [Access to SAP HANA XSC Objects (Obsolete)](javascript:call_link\('abensap_hana_access_xsc.htm'\)) →  [Database Procedure Proxies for SQLScript Procedures in the SAP HANA Repository (Obsolete)](javascript:call_link\('abensql_script.htm'\)) →  [CALL DATABASE PROCEDURE](javascript:call_link\('abapcall_database_procedure.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CALL DATABASE PROCEDURE, parameter_table, ABAPCALL_DB_PROC_PARAMETER_TABLES, 757%0D%0
A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CALL DATABASE PROCEDURE, parameter\_table

Syntax

... PARAMETER-TABLE ptab

Effect

The addition PARAMETER-TABLE uses a hashed table ptab to assign actual parameters to the input and output parameters defined in the database procedure. This method of passing parameters can be used in dynamic calls only.

The internal table ptab must have the type abap\_parmbind\_tab from the [type pool](javascript:call_link\('abentype_pool_glosry.htm'\) "Glossary Entry") ABAP and the same applies to passing parameters as in [dynamic method calls](javascript:call_link\('abapcall_method_parameter_tables.htm'\)).

The column NAME must contain the names of the proxy parameters. Here, the column KIND can only contain the values of the constants EXPORTING and IMPORTING of the class CL\_ABAP\_OBJECTDESCR.