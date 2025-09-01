---
title: "ADBC - Stored Procedures"
description: |
  Stored procedures(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstored_procedure_glosry.htm 'Glossary Entry') can be executed using the following instance method of the class CL_SQL_STATEMENT -   EXECUTE_PROCEDURE The method has an mandatory input parameter PROC_NAME of type s
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenadbc_procedure.htm"
abapFile: "abenadbc_procedure.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "types", "internal-table", "abenadbc", "procedure"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [Native SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennative_sql.htm) →  [ADBC - ABAP Database Connectivity](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenadbc.htm) →  [ADBC - CL\_SQL\_STATEMENT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencl_sql_statement.htm) → 

ADBC - Stored Procedures

[Stored procedures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstored_procedure_glosry.htm "Glossary Entry") can be executed using the following instance method of the class CL\_SQL\_STATEMENT

-   EXECUTE\_PROCEDURE

The method has an mandatory input parameter PROC\_NAME of type string, which must be passed the name of an existing stored procedure. In the same way as in [DML statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenadbc_ddl_dml.htm), it is possible to bind ABAP data objects as actual parameters to the formal parameters of the stored procedure using the method SET\_PARAM. The type of parameter must be specified using the additional parameter INOUT. Possible values are defined in the constants C\_PARAM\_IN, C\_PARAM\_OUT, and C\_PARAM\_INOUT of the class CL\_SQL\_STATEMENT. C\_PARAM\_IN is the default value. The order of the calls determines the assignment to the formal parameters from left to right.

Notes

-   The methods SET\_PARAM\_STRUCT and SET\_PARAM\_TABLE cannot be used. This means that structures and internal tables cannot be bound to actual parameters. On databases where this is allowed, a stored procedure can also be called using the method [EXECUTE\_QUERY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenadbc_query.htm). This method makes it possible to bind internal tables to the results set. See the example below.

-   On the [SAP HANA database](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhana_database_glosry.htm "Glossary Entry"), the stored procedures are [database procedures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_procedure_glosry.htm "Glossary Entry") written in [SQLScript](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_script_glosry.htm "Glossary Entry"). In ABAP, the [ABAP Managed Database Procedures (AMDP)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp.htm) are available for managing and calling these stored procedures. The special statement [CALL DATABASE PROCEDURE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_database_procedure.htm) makes it possible to access them using a [secondary connection](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry").

-   EXECUTE\_PROCEDURE can be used to call procedures with input and output parameters but cannot be used to call functions with return values. In SQL, functions are used directly in suitable operand positions.

-   When parameters are submitted, [mapping](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennative_sql_type_mapping.htm) takes place between the ABAP types and the database types. The ABAP types must match the database types. If they do not match, conversions must be made in the Native SQL interface. These conversions are platform-dependent and can raise exceptions.

Example

Uses ADBC to call an [SQLScript procedure](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_script_procedure_glosry.htm "Glossary Entry") in the SAP HANA database managed using [AMDP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_glosry.htm "Glossary Entry"). Before the ADBC call, a method of the class CL\_AMDP\_RUNTIME\_SERVICES must be applied to ensure that the procedure exists on the database. This would not be necessary if the associated [AMDP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_method_glosry.htm "Glossary Entry") method were used for the call.

IF cl\_db\_sys=>is\_in\_memory\_db = abap\_false.
  RETURN.
ENDIF.
TRY.
    cl\_amdp\_runtime\_services=>prepare\_method\_for\_call(
      \`CL\_DEMO\_AMDP=>INCREASE\_PRICE\` ).
  CATCH cx\_amdp\_runtime\_services.
    RETURN.
ENDTRY.
DATA incprice TYPE sflight-price VALUE '0.5'.
TRY.
    DATA(sql) = NEW cl\_sql\_statement( ).
    sql->set\_param( data\_ref = REF #( sy-mandt )
                    inout    = cl\_sql\_statement=>c\_param\_in ).
    sql->set\_param( data\_ref = REF #( incprice )
                    inout    = cl\_sql\_statement=>c\_param\_in ).
    sql->execute\_procedure(
      proc\_name = '"CL\_DEMO\_AMDP=>INCREASE\_PRICE"' ).
    cl\_demo\_output=>display( \`Price increased successfully\` ).
  CATCH cx\_sql\_exception INTO DATA(exc).
    cl\_demo\_output=>display( exc->get\_text( ) ).
ENDTRY.

Example

Calls a stored procedure of the SAP HANA database using the method [EXECUTE\_QUERY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenadbc_query.htm). The stored procedure is an [AMDP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_glosry.htm "Glossary Entry")\-managed [SQLScript procedure](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_script_procedure_glosry.htm "Glossary Entry") with a tabular output parameter. The null value is bound to the output parameter to [create a temporary table](https://help.sap.com/viewer/4fe29514fd584807ac9f2a04f6754767/2.0.00/en-us) for this parameter on the database. This table then can be joined to an internal table result using SET\_PARAM\_TABLE.

IF cl\_db\_sys=>is\_in\_memory\_db = abap\_false.
  RETURN.
ENDIF.
TRY.
    cl\_amdp\_runtime\_services=>prepare\_method\_for\_call(
      \`CL\_DEMO\_AMDP\_SCARR=>SELECT\_SCARR\` ).
  CATCH cx\_amdp\_runtime\_services.
    RETURN.
ENDTRY.
DATA result TYPE cl\_demo\_amdp\_scarr=>scarr\_tab.
TRY.
    DATA(query\_result) = NEW cl\_sql\_statement(
       )->execute\_query( statement =
        \`CALL "CL\_DEMO\_AMDP\_SCARR=>SELECT\_SCARR"( '\` &&
         sy-mandt && \`', NULL )\` ).
    query\_result->set\_param\_table( itab\_ref = REF #( result ) ).
    query\_result->next\_package( ).
    cl\_demo\_output=>display( result ).
  CATCH cx\_sql\_exception INTO DATA(exc).
    cl\_demo\_output=>display( |Exception\\n{ exc->get\_text( )
                                      }\\n{ exc->sql\_message }| ).
    RETURN.
ENDTRY.

Executable Example

[ADBC, Stored Procedure](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenadbc_procedure_abexa.htm)