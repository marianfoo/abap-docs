  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [Native SQL](javascript:call_link\('abennative_sql.htm'\)) →  [ABAP Database Connectivity (ADBC)](javascript:call_link\('abenadbc.htm'\)) →  [ADBC - CL\_SQL\_STATEMENT](javascript:call_link\('abencl_sql_statement.htm'\)) → 

ADBC - Stored Procedures

[Stored procedures](javascript:call_link\('abenstored_procedure_glosry.htm'\) "Glossary Entry") can be executed using the following instance method of the class CL\_SQL\_STATEMENT

-   EXECUTE\_PROCEDURE

The method has a mandatory input parameter PROC\_NAME of type string to which the name of an existing stored procedure must be passed. Similar to [DML statements](javascript:call_link\('abenadbc_ddl_dml.htm'\)), it is possible to bind ABAP data objects as actual parameters to the formal parameters of the stored procedure using the method SET\_PARAM. The type of parameter must be determined using the additional parameter INOUT. Possible values are defined in the constants C\_PARAM\_IN, C\_PARAM\_OUT, and C\_PARAM\_INOUT of the class CL\_SQL\_STATEMENT. C\_PARAM\_IN is the default value. The order of the calls determines the assignment to the formal parameters from left to right.

Hints

-   The methods SET\_PARAM\_STRUCT and SET\_PARAM\_TABLE cannot be used. This means that structures and internal tables cannot be bound to actual parameters. On databases where this is allowed, a stored procedure can also be called using the method [EXECUTE\_QUERY](javascript:call_link\('abenadbc_query.htm'\)). This method makes it possible to bind internal tables to the result set. See the example below.
-   On the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"), the stored procedures are [database procedures](javascript:call_link\('abendatabase_procedure_glosry.htm'\) "Glossary Entry") written in [SQLScript](javascript:call_link\('abensql_script_glosry.htm'\) "Glossary Entry"). In ABAP, the [ABAP Managed Database Procedures (AMDP)](javascript:call_link\('abenamdp.htm'\)) are available for managing and calling these stored procedures. The special statement [CALL DATABASE PROCEDURE](javascript:call_link\('abapcall_database_procedure.htm'\)) makes it possible to access them using a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry").
-   EXECUTE\_PROCEDURE can be used to call procedures with input and output parameters but cannot be used to call functions with return values. In SQL, functions are used directly in suitable operand positions.
-   When parameters are passed, [mapping](javascript:call_link\('abennative_sql_type_mapping.htm'\)) takes place between the ABAP types and the database types. The ABAP types should match the database types. If they do not match, conversions must be made in the Native SQL interface. These conversions are platform-dependent and can raise exceptions.

Example

Use of ADBC to call an [SQLScript procedure](javascript:call_link\('abensql_script_procedure_glosry.htm'\) "Glossary Entry") in the SAP HANA database managed using [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry"). Before the ADBC call, a method of the class CL\_AMDP\_RUNTIME\_SERVICES must be used to ensure that the procedure exists on the database. This would not be necessary if the associated [AMDP](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") method were used for the call.

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

Call of a stored procedure of the SAP HANA database using the method [EXECUTE\_QUERY](javascript:call_link\('abenadbc_query.htm'\)). The stored procedure is an [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry")\-managed [SQLScript procedure](javascript:call_link\('abensql_script_procedure_glosry.htm'\) "Glossary Entry") with a tabular output parameter. The null value is bound to the output parameter to [create a temporary table](https://help.sap.com/viewer/4fe29514fd584807ac9f2a04f6754767/2.0.04/en-US/b4b0eec1968f41a099c828a4a6c8ca0f.html) for this parameter on the database. This table then can be linked to an internal table result using SET\_PARAM\_TABLE.

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

[ADBC, Stored Procedure](javascript:call_link\('abenadbc_procedure_abexa.htm'\))