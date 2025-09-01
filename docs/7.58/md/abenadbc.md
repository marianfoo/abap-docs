---
title: "ABAP Database Connectivity (ADBC)"
description: |
  ADBC is an API for the Native SQL interface(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennative_sql_interface_glosry.htm 'Glossary Entry') of the AS ABAP that is based on classes in ABAP Objects. The ADBC methods can be used to pass Native SQL(https://help.sap.com/doc/abapdocu_
version: "7.58"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadbc.htm"
abapFile: "abenadbc.htm"
keywords: ["do", "while", "if", "try", "method", "class", "data", "internal-table", "abenadbc"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [Native SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennative_sql.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Database%20Connectivity%20%28ADBC%29%2C%20ABENADBC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Database Connectivity (ADBC)

ADBC is an API for the [Native SQL interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennative_sql_interface_glosry.htm "Glossary Entry") of the AS ABAP that is based on classes in ABAP Objects. The ADBC methods can be used to pass [Native SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennative_sql_glosry.htm "Glossary Entry") statements to the database interface. They make it possible to

-   send database specific SQL statements to a database system and process the result
-   to establish and manage database connections.

The ADBC classes all begin with the prefix CL\_SQL\_ or CX\_SQL\_ and are documented. The following paragraphs briefly introduce the most important classes.

-   [ADBC - CL\_SQL\_STATEMENT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_sql_statement.htm)
-   [ADBC - CL\_SQL\_PREPARED\_STATEMENT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_sql_prepared_statement.htm)
-   [ADBC - CL\_SQL\_CONNECTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_sql_connection.htm)
-   [ADBC - CX\_SQL\_EXCEPTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencx_sql_exception.htm)
-   [ADBC - Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadbc_abexas.htm)

Programming Guideline

[Using ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_access_guidl.htm "Guideline")

Hints

-   ADBC can always be used when access to a database using the Native SQL interface instead of the ABAP SQL interface is necessary.
-   ADBC does not support [implicit client handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_client_handling.htm). The [client ID](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclient_identifier_glosry.htm "Glossary Entry") of a database table must be specified explicitly. It should be noted that application programs should only use data from the current client. See also the associated [security note](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclient_dependent_scrty.htm) and the [programming guideline](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclient_handling_guidl.htm "Guideline").
-   When the [CDS-managed DDIC view (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") of a [client-dependent](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_client_handling_v1.htm) CDS view is accessed using Native SQL and the client handling of the view is specified by the annotation @ClientHandling.algorithm:#SESSION\_VARIABLE, the [session variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensession_variable_glosry.htm "Glossary Entry") [$session.client](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_session_variable_v1.htm) is generally evaluated here. Only on [SAP HANA databases](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_database_glosry.htm "Glossary Entry"), is an instance of this session variables created as a HANA session variable [CDS\_CLIENT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_session_variables.htm). Its current value is used here. On other platforms, unexpected behavior or program terminations may occur.
-   Apart from ADBC, it is also possible to [embed](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennativesql.htm) Native SQL statically between [EXEC SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexec.htm) and [ENDEXEC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapendexec.htm) in ABAP programs. The recommendation, however, is to use ADBC.
    
    -   While the [static embedding](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennativesql.htm) of Native SQL offers exclusively static access to the Native SQL interface, ADBC makes modern object-oriented and dynamic access possible.
    -   New developments and improvements, such as optimized performance using bulk access across internal tables, are now made only for ADBC.
    
    The existing static embedding of Native SQL statements is still supported but should no longer be used in new programs.
    

Security Hints

-   If used incorrectly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before it is used in dynamic statements. This can be done using the system class CL\_ABAP\_DYN\_PRG or the built-in function [escape](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenescape_functions.htm).
-   To avoid [SQL injections](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_injection_glosry.htm "Glossary Entry") in ADBC reliably, no parts of an SQL statement that is not an operand position can come from outside of the program. Variable parts in operand positions can only be implemented using ? placeholders and the associated SET\_PARAM methods, which in ADBC are not just possible in prepared statements, unlike in JDBC.
-   See also [SQL Injections Using ADBC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_inj_adbc_scrty.htm)

Executable Examples

The program ADBC\_DEMO and further programs with the prefix ADBC\_DEMO\_ demonstrate the most important methods of ADBC. Executable examples from the ABAP example library can be found under [ADBC Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadbc_abexas.htm). These examples generally work on SAP's own [HANA database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_database_glosry.htm "Glossary Entry"). They might not work on other database platforms.

Continue
[ADBC - CL\_SQL\_STATEMENT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_sql_statement.htm)
[ADBC - CL\_SQL\_PREPARED\_STATEMENT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_sql_prepared_statement.htm)
[ADBC - CL\_SQL\_CONNECTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_sql_connection.htm)
[ADBC - CX\_SQL\_EXCEPTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencx_sql_exception.htm)
[ADBC - Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadbc_abexas.htm)