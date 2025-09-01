---
title: "AMDP - Use"
description: |
  AMDP methods can be used in ABAP programs as follows: -   AMDP procedure implementations(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_procedure_methods.htm) An AMDP procedure implementation is called from an ABAP program in the same way as any other ABAP Objects method.
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_calls.htm"
abapFile: "abenamdp_calls.htm"
keywords: ["update", "do", "if", "case", "try", "method", "class", "data", "types", "abenamdp", "calls"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP Managed Database Procedures (AMDP)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20AMDP%20-%20Use%2C%20ABENAMDP_CALLS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

AMDP - Use

AMDP methods can be used in ABAP programs as follows:

-   [AMDP procedure implementations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_procedure_methods.htm)
    
    An AMDP procedure implementation is called from an ABAP program in the same way as any other ABAP Objects method.
    
-   [AMDP function implementations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_function_methods.htm)
    
    -   An AMDP function implementation for an [AMDP scalar function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_scalar_function_glosry.htm "Glossary Entry") is called in an ABAP program in the same way as any regular [functional method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunctional_method_glosry.htm "Glossary Entry").
    -   In an ABAP program, an AMDP function implementation for an [AMDP table function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_table_function_glosry.htm "Glossary Entry") is used by accessing an assigned [CDS table function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_table_function_glosry.htm "Glossary Entry") in an ABAP SQL read statement.
    
    A prerequisite is that the [standard database](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_db_glosry.htm "Glossary Entry") of the current AS ABAP is managed by the database system for which the AMDP method is implemented. If not, a runtime error is produced.
    

Before the method is used for the first time, the ABAP runtime framework creates the procedure or function implemented in the AMDP method in the database system of the standard AS ABAP database or, if necessary, updates any existing database procedure or database function. Execution takes place in the database system and the interface parameters are passed from the [Native SQL interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennative_sql_interface_glosry.htm "Glossary Entry") to the database system or adopted by the database system itself.

Once a database procedure or database function managed using AMDP has been created on the database, this procedure can be used in other database procedures or database functions using the database syntax if the database allows this type of access. The calls can take place from other AMDP procedures or AMDP functions and also database procedures or database functions not managed by AMDP. If an AMDP procedure or function uses a different AMDP procedure or function, this procedure must be specified after the addition [USING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethod_by_db_proc.htm) of the calling method.

Hints

-   For the caller of an AMDP procedure implementation from ABAP, it is usually transparent whether the method is an AMDP method and in which database system it is executed. For this reason, the implementation of the method must ensure that the interface parameters are returned in a format expected by the caller. This applies in particular to ABAP types for which there is no equivalent type in the type system of the database system. These types must either not be offered in the interface or an appropriate casting must take place in the procedure.
-   Generally, the database procedures and database functions managed using AMDP are called using AMDP methods from ABAP or in ABAP SQL.
-   It is recommended that AMDP procedure implementations that are not intended to be called from the AMDP methods of other classes are created as private methods of an AMDP class and that they are called in a regular method depending on the standard AS ABAP database.
-   In database systems that do not support AMDP, a regular method can be created using an alternative implementation in ABAP SQL or Native SQL.
-   It is [not advisable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_access_recomm.htm) to make calls of AMDP-managed database procedures or database functions from non-AMDP-managed database objects or by using Native SQL. If, in exceptional cases, calls like this are necessary, all required database objects must exist. The public methods of the documented class CL\_AMDP\_RUNTIME\_SERVICES can be used to do this (see [ADBC, Stored Procedures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadbc_procedure.htm)).
-   The constant CALL\_AMDP\_METHOD of the class [CL\_ABAP\_DBFEATURES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_dbfeatures.htm) can be used to query whether the current database supports AMDP procedures.