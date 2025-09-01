  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [Native SQL](javascript:call_link\('abennative_sql.htm'\)) →  [Embedded Native SQL (EXEC SQL)](javascript:call_link\('abennativesql.htm'\)) →  [EXEC SQL](javascript:call_link\('abapexec.htm'\)) → 

EXEC SQL - EXECUTE PROCEDURE

Syntax

EXEC SQL.
  EXECUTE PROCEDURE proc ( IN    p\_in1,    IN    p\_in2, ...
                           OUT   p\_out1,   OUT   p\_out2, ...
                           INOUT p\_inout1, INOUT p\_inout2, ... )
ENDEXEC.

Effect

In database systems, procedures can be defined as [stored procedures](javascript:call_link\('abenstored_procedure_glosry.htm'\) "Glossary Entry"). Since the syntax for calling this type of procedure and the associated parameter passing can vary widely for various database systems, a uniform statement exists in statically embedded [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry").

The statement EXECUTE PROCEDURE calls a procedure proc stored in the database. For all formal parameters of the procedure, actual parameters separated by commas must be specified. IN, OUT, or INOUT must be specified in front of every actual parameter, to indicate whether the parameter is an input, output, or input/output parameter. Literals or [host variables](javascript:call_link\('abapexec_host.htm'\)) indicated by colons (:) can be used for the actual parameters.

Hints

-   On the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"), the stored procedures are [database procedures](javascript:call_link\('abendatabase_procedure_glosry.htm'\) "Glossary Entry") written in [SQLScript](javascript:call_link\('abensql_script_glosry.htm'\) "Glossary Entry"). In ABAP, these procedures can be managed and called using [ABAP Managed Database Procedures (AMDP)](javascript:call_link\('abenamdp.htm'\)) and the special statement [CALL DATABASE PROCEDURE](javascript:call_link\('abapcall_database_procedure.htm'\)). This statement enables access using a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry").
-   EXECUTE PROCEDURE can be used to call procedures with input and output parameters but cannot be used to call functions with return values. In SQL, functions are used directly in suitable operand positions (see [Executable Example](javascript:call_link\('abenexec_sql_db_function_abexa.htm'\))).

Example

Definition of a procedure abap\_docu\_demo\_incprice using database-specific SQL statements and calling the procedure with the SAP-specific Native SQL statement EXECUTE PROCEDURE. The execution of the program section increases the price of every flight for the current client in the table SFLIGHT by a specific amount. See also the corresponding executable [example for ADBC](javascript:call_link\('abenadbc_procedure_abexa.htm'\)).

DATA incprice TYPE sflight-price VALUE '0.5'.
cl\_demo\_input=>request( CHANGING field = incprice ).
TRY.
    EXEC SQL.
      DROP PROCEDURE abap\_docu\_demo\_incprice;
    ENDEXEC.
  CATCH cx\_sy\_native\_sql\_error.
ENDTRY.
TRY.
    EXEC SQL.
      CREATE PROCEDURE
        abap\_docu\_demo\_incprice ( IN inc  DECIMAL(15,2),
                                  IN clnt NVARCHAR(3) ) AS
          BEGIN
            UPDATE sflight SET price = price + inc
                           WHERE mandt = clnt;
          END;
    ENDEXEC.
    EXEC SQL.
      EXECUTE PROCEDURE abap\_docu\_demo\_incprice ( IN :incprice,
                                                  IN :sy-mandt )
    ENDEXEC.
  CATCH cx\_sy\_native\_sql\_error INTO DATA(exc).
    cl\_demo\_output=>write( exc->get\_text( ) ).
ENDTRY.
cl\_demo\_output=>display( ).