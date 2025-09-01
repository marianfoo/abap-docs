---
title: "AMDP - Use"
description: |
  An AMDP procedure implementation(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_procedure_methods.htm) is called from an ABAP program in the same way as any other ABAP Objects method. In an ABAP program, an AMDP function implementation(https://help.sap.com/doc/abapdocu_752_i
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_calls.htm"
abapFile: "abenamdp_calls.htm"
keywords: ["update", "do", "if", "case", "try", "method", "class", "data", "types", "abenamdp", "calls"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [AMDP - ABAP Managed Database Procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp.htm) → 

AMDP - Use

An [AMDP procedure implementation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_procedure_methods.htm) is called from an ABAP program in the same way as any other ABAP Objects method. In an ABAP program, an [AMDP function implementation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_function_methods.htm) is used by accessing an assigned [CDS table function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_table_function_glosry.htm "Glossary Entry") in an Open SQL read statement. In both cases, this requires that the [standard database](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_db_glosry.htm "Glossary Entry") of the current AS ABAP is managed by the database system for which the AMDP method is implemented. If not, a runtime error is produced.

Before the method is used for the first time, the ABAP runtime environment creates the procedure implemented in the AMDP method in the database system of the standard AS ABAP database or updates any existing database procedure or database function. Execution is performed in the database system and the interface parameters are passed from the [Native SQL interface](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennative_sql_interface_glosry.htm "Glossary Entry") to the database system or applied by the database system itself.

Once a database procedure or database function (managed using AMDP) has been created on the database, this procedure can be used in other database procedures or database functions using the database syntax (provided that this is permitted by the database). These can themselves be AMDP procedures or AMDP functions, or database procedures or database functions not managed by AMDP. If an AMDP procedure or function uses another AMDP procedure or function, this procedure must be specified after the addition [USING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethod_by_db_proc.htm) of the calling method.

Notes

-   It is recommended that AMDP procedure implementations that are not to be called from the AMDP methods of other classes are created as private methods of an AMDP class and that they are called in a regular method (specified by the standard AS ABAP database). In database systems that do not support AMDP, a regular method can be created using an alternative implementation in Open SQL or Native SQL.

-   For the calling program of an AMDP procedure implementation from ABAP, it is usually clear whether the method is an AMDP method and in which database system it is executed. For this reason, the implementation of the method must ensure that the interface parameters are returned in a format expected by the calling program. This is particularly important for ABAP types that do not have a corresponding type in the type system of the database system. These types must either be forbidden in the interface or an appropriate casting must take place in the procedure.

-   Generally, the database procedures and database functions managed using AMDP are called using AMDP methods from ABAP only or in Open SQL.

-   It is [not advisable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_access_recomm.htm) to make calls of AMDP-managed database procedures or database functions from non-AMDP-managed database objects. If, in exceptional cases, calls like this are necessary, all required database objects must exist. The public methods of the documented class CL\_AMDP\_RUNTIME\_SERVICES can be used to do this (see [ADBC, Stored Procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenadbc_procedure.htm)).

-   The constant CALL\_AMDP\_METHOD of the class [CL\_ABAP\_DBFEATURES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_dbfeatures.htm) can be used to query whether the current database supports AMDP procedures.