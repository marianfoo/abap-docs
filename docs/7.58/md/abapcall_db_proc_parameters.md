---
title: "Syntax"
description: |
  ... EXPORTING  p1 = a1 p2 = a2 ... IMPORTING  p1 = a1 p2 = a2 .... Effect The additions EXPORTING and IMPORTING assign the actual parameters a1, a2 to the input and output parameters defined in the database procedure. This method of passing parameters can be used in both static and d
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_db_proc_parameters.htm"
abapFile: "abapcall_db_proc_parameters.htm"
keywords: ["do", "if", "try", "method", "data", "types", "abapcall", "proc", "parameters"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_storage_obsolete.htm) →  [Obsolete Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_access_obsolete.htm) →  [Obsolete Access to Objects in HANA XS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_xsc_obsolete.htm) →  [Access to SAP HANA XSC Objects (Obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensap_hana_access_xsc.htm) →  [Database Procedure Proxies for SQLScript Procedures in the SAP HANA Repository (Obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_script.htm) →  [CALL DATABASE PROCEDURE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_database_procedure.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CALL%20DATABASE%20PROCEDURE%2C%20parameter_list%2C%20ABAPCALL_DB_PROC_PARAMETERS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improve
ment:)

CALL DATABASE PROCEDURE, parameter\_list

Syntax

... *\[*EXPORTING  p1 = a1 p2 = a2 ...*\]*
    *\[*IMPORTING  p1 = a1 p2 = a2 ...*\]*.

Effect

The additions EXPORTING and IMPORTING assign the actual parameters a1, a2 to the input and output parameters defined in the database procedure. This method of passing parameters can be used in both static and dynamic calls.

The proxy parameters p1, p2, ... to which the actual procedure parameters are assigned in the mapping of the [database procedure proxies](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_proc_proxy_glosry.htm "Glossary Entry") are specified after the additions. The data types of the actual parameters can be determined by referencing the type declarations of the associated [database procedure interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_proc_intf_glosry.htm "Glossary Entry"). The read positions are [general expression positions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry").