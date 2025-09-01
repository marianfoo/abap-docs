  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.40 and Its SPs](javascript:call_link\('abennews-740.htm'\)) →  [Changes in Release 7.40, SP08](javascript:call_link\('abennews-740_sp08.htm'\)) → 

AMDP in Release 7.40, SP08

[1\. Tabular CHANGING parameters for SQLScript procedures](#!ABAP_MODIFICATION_1@1@)

[2\. Handleable exceptions in AMDP procedure implementations](#!ABAP_MODIFICATION_2@2@)

[3\. AMDP BAdIs](#!ABAP_MODIFICATION_3@3@)

[4\. Service connections](#!ABAP_MODIFICATION_4@4@)

[5\. Suppressing syntax error messages](#!ABAP_MODIFICATION_5@5@)

[6\. Support for the language L on SAP HANA](#!ABAP_MODIFICATION_6@6@)

Modification 1

Tabular CHANGING Parameters for SQLScript Procedures

In Release 7.40, SP08, the restriction that [SQLScript procedures](javascript:call_link\('abenamdp_hdb_sqlscript.htm'\)) managed using [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry") cannot have tabular input/output parameters is lifted. The technical restriction that SQLScript procedures do not support INOUT parameters is bypassed by generating a pair of IN and OUT parameters. Here, the OUT parameter is assigned the value of the IN parameter at the start of the procedure and hence can be used like an INOUT parameter.

Modification 2

Handleable Exceptions in AMDP Procedure Implementations

From Release 7.40, SP08, the exception classes specified under [AMDP - Exceptions](javascript:call_link\('abenamdp_exceptions.htm'\)) can be declared in the interface of an [AMDP procedure implementation](javascript:call_link\('abenamdp_procedure_method_glosry.htm'\) "Glossary Entry") using RAISING and handled when the method is called. Before Release 7.40, SP08, the exception situations in question raised a non-handleable exception and always produced a runtime error.

Modification 3

AMDP BAdIs

From Release 7.40, SP08, special [AMDP BAdIs](javascript:call_link\('abenamdp_badi_glosry.htm'\) "Glossary Entry") were introduced for [AMDP procedure implementations](javascript:call_link\('abenamdp_procedure_method_glosry.htm'\) "Glossary Entry"). These apply the effect of the switches from [Switch Framework](javascript:call_link\('abenswitch_framework_glosry.htm'\) "Glossary Entry") to the implementation of database procedures in the current database. When an [AMDP procedure](javascript:call_link\('abenamdp_procedure_glosry.htm'\) "Glossary Entry") calls an AMDP procedure managed by an AMDP BAdI, the implementation is executed that matches the current switch setting.

Modification 4

Service Connections

In Release 7.40, SP08, an input parameter with the previously invalid parameter name connection can be created for an [AMDP procedure implementation](javascript:call_link\('abenamdp_procedure_method_glosry.htm'\) "Glossary Entry") to create a [database connection](javascript:call_link\('abendatabase_connection_glosry.htm'\) "Glossary Entry") explicitly. Only the standard connection or service connections R/3\*name to the [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry") can be used.

Modification 5

Suppressing Syntax Error Messages

When an AMDP method is implemented after the addition OPTIONS of the statement [METHOD](javascript:call_link\('abapmethod_by_db_proc.htm'\)), the new option SUPPRESS SYNTAX ERRORS can be specified (for internal use at SAP only). This suppresses any syntax errors caused by database objects addressed in the AMDP procedure but that do not yet exist in the syntax check.

Modification 6

Support for the Language L on SAP HANA

For internal use at SAP only, [AMDP procedure implementations](javascript:call_link\('abenamdp_procedure_method_glosry.htm'\) "Glossary Entry") can be implemented in SAP's own low-level programming language [L](javascript:call_link\('abenllang_glosry.htm'\) "Glossary Entry"). See [AMDP - L for the SAP HANA Database](javascript:call_link\('abenamdp_hdb_l_internal.htm'\)).