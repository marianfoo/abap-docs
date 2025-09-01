  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP and SAP HANA](javascript:call_link\('abenabap_hana.htm'\)) →  [Access to Objects in SAP HANA XS](javascript:call_link\('abensap_hana_access.htm'\)) →  [Access to SAP HANA XSC Objects](javascript:call_link\('abensap_hana_access_xsc.htm'\)) →  [Database Procedure Proxies for SQLScript Procedures in the SAP HANA Repository](javascript:call_link\('abensql_script.htm'\)) →  [CALL DATABASE PROCEDURE](javascript:call_link\('abapcall_database_procedure.htm'\)) → 

CALL DATABASE PROCEDURE - parameter\_table

Syntax

... PARAMETER-TABLE ptab

Effect

The addition PARAMETER-TABLE uses a hashed table ptab to assign actual parameters to the input and output parameters defined in the database procedure. This method of passing parameters can be used in dynamic calls only.

The internal table ptab must have the type ABAP\_PARMBIND\_TAB from the [type group](javascript:call_link\('abentype_group_1_glosry.htm'\) "Glossary Entry") ABAP and the same applies to passing parameters as in [dynamic method calls](javascript:call_link\('abapcall_method_parameter_tables.htm'\)).

The column NAME must contain the names of the proxy parameters. Here, the column KIND can only contain the values of the constants EXPORTING and IMPORTING of the class CL\_ABAP\_OBJECTDESCR.