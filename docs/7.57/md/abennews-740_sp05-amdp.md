  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.40 and its SPs](javascript:call_link\('abennews-740.htm'\)) →  [News for Release 7.40, SP05](javascript:call_link\('abennews-740_sp05.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP Managed Database Procedures in Release 7.40, SP05, ABENNEWS-740_SP05-AMDP, 757%0
D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP Managed Database Procedures in Release 7.40, SP05

[1\. Tag Interface for AMDP Classes](#!ABAP_MODIFICATION_1@1@)
[2\. Implementation of AMDP Methods](#!ABAP_MODIFICATION_2@2@)

[ABAP Managed Database Procedures (AMDP)](javascript:call_link\('abenabap_managed_db_proc_glosry.htm'\) "Glossary Entry") is a framework that was introduced in Release 7.40, SP05 that makes it possible to manage and call [stored procedures](javascript:call_link\('abenstored_procedure_glosry.htm'\) "Glossary Entry") or [database procedures](javascript:call_link\('abendatabase_procedure_glosry.htm'\) "Glossary Entry") as [AMDP](javascript:call_link\('abenamdp_procedure_glosry.htm'\) "Glossary Entry") procedures. In the first phase, database procedures programmed in [SQLScript](javascript:call_link\('abensql_script_glosry.htm'\) "Glossary Entry") are supported in the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry").

Modification 1   

Tag Interface for AMDP Classes

The new tag interface IF\_AMDP\_MARKER\_HDB flags a class as an [AMDP class](javascript:call_link\('abenamdp_class_glosry.htm'\) "Glossary Entry"), which can contain AMDP methods for SAP HANA database.

Modification 2   

Implementation of AMDP Methods

The new addition [BY DATABASE PROCEDURE FOR HDB LANGUAGE SQLSCRIPT](javascript:call_link\('abapmethod_by_db_proc.htm'\)) for the statement METHOD turns a method of an [AMDP](javascript:call_link\('abenamdp_class_glosry.htm'\) "Glossary Entry") class into an [AMDP procedure implementation](javascript:call_link\('abenamdp_procedure_method_glosry.htm'\) "Glossary Entry"). This is implemented in the SQLScript language of the SAP HANA database and not in ABAP. The ABAP runtime framework creates a corresponding database procedure in SAP HANA database. This procedure is executed when the AMDP method is called.