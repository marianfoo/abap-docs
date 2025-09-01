  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [ABAP and SAP HANA](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_hana.htm) →  [Access to Objects in SAP HANA XS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensap_hana_access.htm) →  [Access to SAP HANA XSC Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensap_hana_access_xsc.htm) →  [Database Procedure Proxies for SQLScript Procedures in the SAP HANA Repository](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_script.htm) →  [CALL DATABASE PROCEDURE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_database_procedure.htm) → 

CALL DATABASE PROCEDURE, parameter\_table

Syntax

... PARAMETER-TABLE ptab

Effect

The addition PARAMETER-TABLE uses a hashed table ptab to assign actual parameters to the input and output parameters defined in the database procedure. This method of passing parameters can be used in dynamic calls only.

The internal table ptab must have the type abap\_parmbind\_tab from the [type pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentype_pool_glosry.htm "Glossary Entry") ABAP and the same applies to passing parameters as in [dynamic method calls](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_method_parameter_tables.htm).

The column NAME must contain the names of the proxy parameters. Here, the column KIND can only contain the values of the constants EXPORTING and IMPORTING of the class CL\_ABAP\_OBJECTDESCR.