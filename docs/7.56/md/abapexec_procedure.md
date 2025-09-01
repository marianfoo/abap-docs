---
title: "EXEC SQL - EXECUTE PROCEDURE"
description: |
  Syntax EXEC SQL. EXECUTE PROCEDURE proc ( IN    p_in1,    IN    p_in2, ... OUT   p_out1,   OUT   p_out2, ... INOUT p_inout1, INOUT p_inout2, ... ) ENDEXEC. Effect In database systems, procedures can be defined as stored procedures(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/ab
version: "7.56"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapexec_procedure.htm"
abapFile: "abapexec_procedure.htm"
keywords: ["update", "do", "if", "try", "catch", "data", "abapexec", "procedure"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [Native SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennative_sql.htm) →  [Embedded Native SQL (EXEC SQL)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennativesql.htm) →  [EXEC SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapexec.htm) → 

EXEC SQL - EXECUTE PROCEDURE

Syntax

EXEC SQL.
  EXECUTE PROCEDURE proc ( IN    p\_in1,    IN    p\_in2, ...
                           OUT   p\_out1,   OUT   p\_out2, ...
                           INOUT p\_inout1, INOUT p\_inout2, ... )
ENDEXEC.

Effect

In database systems, procedures can be defined as [stored procedures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstored_procedure_glosry.htm "Glossary Entry"). Since the syntax for calling this type of procedure and the associated parameter passing can vary widely for various database systems, a uniform statement exists in statically embedded [Native SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennative_sql_glosry.htm "Glossary Entry").

The statement EXECUTE PROCEDURE calls a procedure proc stored in the database. For all formal parameters of the procedure, actual parameters separated by commas must be specified. IN, OUT, or INOUT must be specified in front of every actual parameter, to indicate whether the parameter is an input, output, or input/output parameter. Literals or [host variables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapexec_host.htm) indicated by colons (:) can be used for the actual parameters.

Hints

-   On the [SAP HANA database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhana_database_glosry.htm "Glossary Entry"), the stored procedures are [database procedures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_procedure_glosry.htm "Glossary Entry") written in [SQLScript](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_script_glosry.htm "Glossary Entry"). In ABAP, these procedures can be managed and called using [ABAP Managed Database Procedures (AMDP)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp.htm) and the special statement [CALL DATABASE PROCEDURE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_database_procedure.htm). This statement enables access using a [secondary connection](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry").
-   EXECUTE PROCEDURE can be used to call procedures with input and output parameters but cannot be used to call functions with return values. In SQL, functions are used directly in suitable operand positions (see [Executable Example](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexec_sql_db_function_abexa.htm)).

Example

Definition of a procedure abap\_docu\_demo\_incprice using database-specific SQL statements and calling the procedure with the SAP-specific Native SQL statement EXECUTE PROCEDURE. The execution of the program section increases the price of every flight for the current client in the table SFLIGHT by a specific amount. See also the corresponding executable [example for ADBC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenadbc_procedure_abexa.htm).

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