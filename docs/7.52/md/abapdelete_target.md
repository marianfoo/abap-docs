  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql.htm) →  [Open SQL - Write Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_writing.htm) →  [DELETE dbtab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_dbtab.htm) → 

DELETE dbtab - target

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_dbtab_shortref.htm)

Syntax

... dbtab*|*view*|*(target\_syntax) *\[*USING CLIENT clnt*\]* *|* *\[*CLIENT SPECIFIED*\]* ...

Alternatives:

[1\. ... dbtab*|*view](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... (target\_syntax)](#!ABAP_ALTERNATIVE_2@2@)

Extras:

[1\. ... USING CLIENT clnt](#!ABAP_ADDITION_1@1@)
[2\. ... CLIENT SPECIFIED](#!ABAP_ADDITION_2@2@)

Effect

The entries in target determine, statically or dynamically, which [database table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_table_glosry.htm "Glossary Entry") or which [view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenview_glosry.htm "Glossary Entry") is accessed, and control [client handling](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_handling_glosry.htm "Glossary Entry").

Note

Write access to tables or classic views with [replacement objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_replacement_objects.htm) is still performed on the database table or the classic view and lead to a syntax warning.

Alternative 1

... dbtab*|*view

Effect

dbtab expects a database table or a view and a [classic view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclassical_view_glosry.htm "Glossary Entry") defined in ABAP Dictionary.

Only views that refer to a single database table, and whose status in ABAP Dictionary permits changes can be specified. No [external views](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexternal_view_glosry.htm "Glossary Entry") or [CDS entities](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_entity_glosry.htm "Glossary Entry") can be specified.

Note

The database table or view must be specified using the exact name defined for it in ABAP Dictionary. More specifically, it cannot be prefixed with the name for the [database schema](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_schema_glosry.htm "Glossary Entry"). An Open SQL statement always accesses the database schema assigned to the current [database user name](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_user_name_glosry.htm "Glossary Entry"). In cases where the [standard connection](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_db_connection_glosry.htm "Glossary Entry") or a [service connection](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenservice_connection_glosry.htm "Glossary Entry") is used, this is the [ABAP database schema](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_db_schema_glosry.htm "Glossary Entry"). In cases where a [secondary connection](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") is used, this is the database schema assigned to the [database user](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_user_glosry.htm "Glossary Entry") defined in the secondary connection. Here, each access assumes that the database table or view exists under this exact name in the current AS ABAP ABAP Dictionary, regardless of the connection.

Alternative 2

... (target\_syntax)

Effect

Instead of specifying an object statically, a parenthesized data object target\_syntax can be specified that must contain the name of the database table or the view when the statement is executed. A character-like data object or a [standard table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_table_glosry.htm "Glossary Entry") with a character-like row type can be specified for the data object target\_syntax. The syntax in target\_syntax is not case-sensitive, as in ABAP Editor. Invalid syntax raises a handleable exception from the class CX\_SY\_DYNAMIC\_OSQL\_ERROR.

Security Note

If used wrongly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before being used in dynamic statements. This can be done using the system class CL\_ABAP\_DYN\_PRG or the predefined function [escape](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenescape_functions.htm). See [SQL Injections Using Dynamic Tokens](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_inj_dyn_tokens_scrty.htm).

Note

When specified dynamically, Open SQL statements can contain the comment characters [\*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencomment.htm) and ["](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencomment.htm) as follows:

-   In a dynamic token specified as a character-like data object, all content is ignored from the first comment character ".

-   In a dynamic token specified as an internal table, all rows are ignored that start with the comment character \*. In the row, all content is ignored from the first comment character ".
    

Addition 1

... USING CLIENT clnt

Effect

This addition modifies automatic [client handling](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_handling_glosry.htm "Glossary Entry") in Open SQL so that the client ID from clnt is used instead of the current client ID. The [ABAP runtime environment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_runtime_envir_glosry.htm "Glossary Entry") passes the ID of the client specified in clnt to the database system, and not the ID of the current client or the client specified in source.

clnt expects a data object of the type c with length 3 and containing a client ID. A literal or a [host variable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_host_variables.htm) can be specified, prefixed by an escape character @. The addition can only be used when changing a client-specific table or a view and not together with the addition CLIENT SPECIFIED. If specified, the system field sy-mandt would be ignored and cannot be specified directly for clnt.

Notes

-   If the addition USING CLIENT is used, the statement Open-SQL functions as if the current user were logged on with the client ID specified in clnt.
    
-   If clnt contains a client ID for a nonexistent client, the SQL statement is executed with this ID and is hence ignored.
    
-   The addition USING CLIENT is not allowed in the [obsolete short forms](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_obsolete.htm).
    
-   When the addition USING CLIENT, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_740_sp05.htm), which handles the statement more strictly than the regular syntax check.
    
-   Since each client represents a complete unit, automatic client handling should never be switched in application programs.
    
-   If access to the data of a different client is required, USING CLIENT should be used instead of CLIENT SPECIFIED, since in this case all necessary conditions are set implicitly.
    
-   The addition USING CLIENT is not permitted when accessing [global temporary tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_gtt.htm).
    
-   See also the associated [security note](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_dependent_scrty.htm) and the [programming guideline](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_handling_guidl.htm "Guideline").
    

Addition 2

... CLIENT SPECIFIED

Effect

This addition deactivates automatic [client handling](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_handling_glosry.htm "Glossary Entry") in Open SQL. If the addition CLIENT SPECIFIED is used, the [client ID](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_identifier_glosry.htm "Glossary Entry") specified in source is respected. Without the addition CLIENT SPECIFIED, the [ABAP runtime environment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_runtime_envir_glosry.htm "Glossary Entry") does not pass the client ID specified in source to the database system, but passes the ID of the current client instead.

Notes

-   Each client represents a standalone unit, which means that automatic client handling should never be switched off in application programs.
    
-   If data has to be accessed in a different client, USING CLIENT should be used instead of the addition CLIENT SPECIFIED, since all necessary conditions are set implicitly and accessing client-specific CDS entities is more simple.
    
-   See also the associated [security note](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_dependent_scrty.htm) and the [programming guideline](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_handling_guidl.htm "Guideline").
    
-   The addition CLIENT SPECIFIED is not permitted when accessing [global temporary tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_gtt.htm).
    
-   Eine DELETE\-Anweisung mit dem Zusatz CLIENT SPECIFIED und ohne Angabe, welche Zeilen gelöscht werden sollen, löscht die Daten aller Mandanten einer mandantenabhängigen Tabelle.
    

Example

Die beiden folgenden DELETE\-Anweisungen haben die gleiche Wirkung. Die erste Anweisung verwendet den Zusatz USING CLIENT und zeigt damit die empfohlene Variante, auf einen bestimmten Mandanten zuzugreifen. Die zweite Anweisung schaltet dagegen mit CLIENT SPECIFIED die automatische Mandantenbehandlung ab und muss deshalb eine WHERE\-Bedingung für das Mandantenfeld enthalten.

DELETE FROM demo\_expressions USING CLIENT '800'
  WHERE id = 'X'.
DELETE FROM demo\_expressions CLIENT SPECIFIED
  WHERE mandt = '800' AND id = 'X'.