  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP and SAP HANA](javascript:call_link\('abenabap_hana.htm'\)) →  [Access to Objects in SAP HANA XS](javascript:call_link\('abensap_hana_access.htm'\)) →  [Access to SAP HANA XSC Objects](javascript:call_link\('abensap_hana_access_xsc.htm'\)) →  [Database Procedure Proxies for SQLScript Procedures in the SAP HANA Repository](javascript:call_link\('abensql_script.htm'\)) →  [CALL DATABASE PROCEDURE](javascript:call_link\('abapcall_database_procedure.htm'\)) → 

CALL DATABASE PROCEDURE - parameter\_list

Syntax

... *\[*EXPORTING  p1 = a1 p2 = a2 ...*\]*
    *\[*IMPORTING  p1 = a1 p2 = a2 ...*\]*.

Effect

The additions EXPORTING and IMPORTING assign the actual parameters a1, a2 to the input and output parameters defined in the database procedure. This method of passing parameters can be used in both static and dynamic calls.

The proxy parameters p1, p2, ... are specified behind the additions; these are assigned the actual procedure parameters in the mapping of the [database procedure proxies](javascript:call_link\('abendatabase_proc_proxy_glosry.htm'\) "Glossary Entry"). The data types of the actual parameters can be determined by referencing the type declarations of the associated [database procedure interfaces](javascript:call_link\('abendatabase_proc_intf_glosry.htm'\) "Glossary Entry"). The reading positions are [general expression positions](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry").