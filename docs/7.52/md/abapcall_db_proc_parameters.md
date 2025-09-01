  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [ABAP and SAP HANA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_hana.htm) →  [Access to Objects in SAP HANA XS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_hana_access.htm) →  [Access to SAP HANA XSC Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_hana_access_xsc.htm) →  [Database Procedure Proxies for SQLScript Procedures in XSC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_script.htm) →  [CALL DATABASE PROCEDURE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_database_procedure.htm) → 

CALL DATABASE PROCEDURE - parameter\_list

Syntax

... *\[*EXPORTING  p1 = a1 p2 = a2 ...*\]*
    *\[*IMPORTING  p1 = a1 p2 = a2 ...*\]*.

Effect

The additions EXPORTING and IMPORTING assign the actual parameters a1, a2 to the input and output parameters defined in the database procedure. This method of passing parameters can be used in both static and dynamic calls.

The proxy parameters p1, p2, ... are specified behind the additions; these are assigned the actual procedure parameters in the mapping of the [database procedure proxies](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_proc_proxy_glosry.htm "Glossary Entry"). The data types of the actual parameters can be determined by referencing the type declarations of the associated [database procedure interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_proc_intf_glosry.htm "Glossary Entry"). The reading positions are [general expression positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry").