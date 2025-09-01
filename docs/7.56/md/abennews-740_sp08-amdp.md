  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.40 and Its SPs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-740.htm) →  [News for Release 7.40, SP08](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-740_sp08.htm) → 

ABAP CDS in Release 7.40, SP08

[1\. Tabular CHANGING Parameters for SQLScript Procedures](#!ABAP_MODIFICATION_1@1@)
[2\. Catchable Exceptions in AMDP Procedure Implementations](#!ABAP_MODIFICATION_2@2@)
[3\. AMDP BAdIs](#!ABAP_MODIFICATION_3@3@)
[4\. Service Connections](#!ABAP_MODIFICATION_4@4@)
[5\. Suppressing Syntax Error Messages](#!ABAP_MODIFICATION_5@5@)
[6\. Support for the Language L on SAP HANA](#!ABAP_MODIFICATION_6@6@)

Modification 1   

Tabular CHANGING Parameters for SQLScript Procedures

In Release 7.40, SP08, the restriction that [SQLScript procedures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_hdb_sqlscript.htm) managed using [AMDP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_glosry.htm "Glossary Entry") cannot have tabular input/output parameters is lifted. The technical restriction that SQLScript procedures do not support INOUT parameters is bypassed by generating a pair of IN and OUT parameters. Here, the OUT parameter is assigned the value of the IN parameter at the start of the procedure and hence can be used like an INOUT parameter.

Modification 2   

Catchable Exceptions in AMDP Procedure Implementations

From Release 7.40, SP08, the exception classes specified under [AMDP - Exceptions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_exceptions.htm) can be declared in the interface of an [AMDP procedure implementation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_procedure_method_glosry.htm "Glossary Entry") using RAISING and handled when the method is called. Before Release 7.40, SP08, the exception situations in question raised an uncatchable exception and always produced a runtime error.

Modification 3   

AMDP BAdIs

From Release 7.40, SP08, special [AMDP BAdIs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_badi_glosry.htm "Glossary Entry") were introduced for [AMDP procedure implementations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_procedure_method_glosry.htm "Glossary Entry"). These apply the effect of the switches from [Switch Framework](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenswitch_framework_glosry.htm "Glossary Entry") to the implementation of database procedures in the current database. When an [AMDP procedure](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_procedure_glosry.htm "Glossary Entry") calls an AMDP procedure managed by an AMDP BAdI, the implementation is executed that matches the current switch setting.

Modification 4   

Service Connections

In Release 7.40, SP08, an input parameter with the previously invalid parameter name connection can be created for an [AMDP procedure implementation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_procedure_method_glosry.htm "Glossary Entry") to create a [database connection](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_connection_glosry.htm "Glossary Entry") explicitly. Only the standard connection or service connections R/3\*name to the [standard database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_db_glosry.htm "Glossary Entry") can be used.

Modification 5   

Suppressing Syntax Error Messages

When an AMDP method is implemented after the addition OPTIONS of the statement [METHOD](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethod_by_db_proc.htm), the new option SUPPRESS SYNTAX ERRORS can be specified (for internal use at SAP only). This suppresses any syntax errors caused by database objects addressed in the AMDP procedure but that do not yet exist in the syntax check.

Modification 6   

Support for the Language L on SAP HANA

For internal use at SAP only, [AMDP procedure implementations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_procedure_method_glosry.htm "Glossary Entry") can be implemented in SAP's own low-level programming language [L](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenllang_glosry.htm "Glossary Entry"). See [AMDP - L for the SAP HANA Database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_hdb_l_internal.htm).