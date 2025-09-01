  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Obsolete Database Access](javascript:call_link\('abendatabase_access_obsolete.htm'\)) →  [Obsolete Access to Objects in HANA XS](javascript:call_link\('abenhana_xsc_obsolete.htm'\)) →  [Access to SAP HANA XSC Objects (Obsolete)](javascript:call_link\('abensap_hana_access_xsc.htm'\)) →  [Database Procedure Proxies for SQLScript Procedures in the SAP HANA Repository (Obsolete)](javascript:call_link\('abensql_script.htm'\)) →  [CALL DATABASE PROCEDURE](javascript:call_link\('abapcall_database_procedure.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CALL%20DATABASE%20PROCEDURE%2C%20parameter_list%2C%20ABAPCALL_DB_PROC_PARAMETERS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improve
ment:)

CALL DATABASE PROCEDURE, parameter\_list

Syntax

... *\[*EXPORTING  p1 = a1 p2 = a2 ...*\]*
    *\[*IMPORTING  p1 = a1 p2 = a2 ...*\]*.

Effect

The additions EXPORTING and IMPORTING assign the actual parameters a1, a2 to the input and output parameters defined in the database procedure. This method of passing parameters can be used in both static and dynamic calls.

The proxy parameters p1, p2, ... to which the actual procedure parameters are assigned in the mapping of the [database procedure proxies](javascript:call_link\('abendatabase_proc_proxy_glosry.htm'\) "Glossary Entry") are specified after the additions. The data types of the actual parameters can be determined by referencing the type declarations of the associated [database procedure interfaces](javascript:call_link\('abendatabase_proc_intf_glosry.htm'\) "Glossary Entry"). The read positions are [general expression positions](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry").