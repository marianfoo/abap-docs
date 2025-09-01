  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Write Accesses](javascript:call_link\('abenopen_sql_writing.htm'\)) →  [UPDATE dbtab](javascript:call_link\('abapupdate.htm'\)) → 

UPDATE dbtab - target

[Quick Reference](javascript:call_link\('abapupdate_shortref.htm'\))

Syntax

... dbtab *|*view*|*(target\_syntax)  *\[*USING CLIENT clnt*\]* *|* *\[*CLIENT SPECIFIED*\]* ...

Alternatives:

[1\. ... dbtab*|*view](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... (target\_syntax)](#!ABAP_ALTERNATIVE_2@2@)

Extras:

[1\. ... USING CLIENT clnt](#!ABAP_ADDITION_1@1@)
[2\. ... CLIENT SPECIFIED](#!ABAP_ADDITION_2@2@)

Effect

The entries in target determine, statically or dynamically, which [database table](javascript:call_link\('abendatabase_table_glosry.htm'\) "Glossary Entry") or which [view](javascript:call_link\('abenview_glosry.htm'\) "Glossary Entry") is accessed, and control [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry"). Only views whose key fields are located together at the beginning of the view can be accessed.

Note

Write access to tables or classic views with [replacement objects](javascript:call_link\('abenddic_replacement_objects.htm'\)) is still performed on the database table or the classic view and lead to a syntax warning.

Alternative 1

... dbtab*|*view

Effect

dbtab can be a database table defined in ABAP Dictionary and view can be a [classic view](javascript:call_link\('abenclassical_view_glosry.htm'\) "Glossary Entry") .

Only views that refer to a single database table, and whose status in ABAP Dictionary permits changes can be specified. No [external views](javascript:call_link\('abenexternal_view_glosry.htm'\) "Glossary Entry") or [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") can be specified.

Note

The database table or view must be specified using the exact name defined for it in ABAP Dictionary. More specifically, it cannot be prefixed with the name for the [database schema](javascript:call_link\('abendatabase_schema_glosry.htm'\) "Glossary Entry"). An ABAP SQL statement always accesses the database schema assigned to the current [database user name](javascript:call_link\('abendatabase_user_name_glosry.htm'\) "Glossary Entry"). In cases where the [standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry") or a [service connection](javascript:call_link\('abenservice_connection_glosry.htm'\) "Glossary Entry") is used, this is the [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry"). In cases where a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") is used, this is the database schema assigned to the [database user](javascript:call_link\('abendatabase_user_glosry.htm'\) "Glossary Entry") defined in the secondary connection. Here, each access assumes that the database table or view exists under this exact name in the current AS ABAP ABAP Dictionary, regardless of the connection.

Alternative 2

... (target\_syntax)

Effect

Instead of specifying an object statically, a parenthesized data object target\_syntax can be specified that must contain the name of the database table or the view when the statement is executed. A character-like data object or a [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") with a character-like row type can be specified for the data object target\_syntax. The syntax in target\_syntax is not case-sensitive, as in ABAP Editor. Invalid syntax raises a handleable exception from the class CX\_SY\_DYNAMIC\_OSQL\_ERROR.

Security Note

If used wrongly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before being used in dynamic statements. This can be done using the system class CL\_ABAP\_DYN\_PRG or the built-in function [escape](javascript:call_link\('abenescape_functions.htm'\)). See [SQL Injections Using Dynamic Tokens](javascript:call_link\('abensql_inj_dyn_tokens_scrty.htm'\)).

Note

When specified dynamically, ABAP SQL statements can contain the comment characters [\*](javascript:call_link\('abencomment.htm'\)) and ["](javascript:call_link\('abencomment.htm'\)) as follows:

-   In a dynamic token specified as a character-like data object, all content is ignored from the first comment character ".

-   In a dynamic token specified as an internal table, all rows are ignored that start with the comment character \*. In the row, all content is ignored from the first comment character ".
    

Addition 1

... USING CLIENT clnt

Effect

This addition modifies automatic [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry") in ABAP SQL so that the client ID from clnt is used instead of the current client ID. The [ABAP runtime environment](javascript:call_link\('abenabap_runtime_envir_glosry.htm'\) "Glossary Entry") passes the ID of the client specified in clnt to the database system, and not the ID of the current client or the client specified in source.

clnt expects a data object of the type c with length 3 and containing a client ID. A literal or a [host variable](javascript:call_link\('abenopen_sql_host_variables.htm'\)) can be specified, prefixed by an escape character @. The addition can only be used when changing a client-specific table or a view and not together with the addition CLIENT SPECIFIED. If specified, the system field sy-mandt would be ignored and cannot be specified directly for clnt.

Notes

-   If the addition USING CLIENT is used, the statement ABAP SQL functions as if the current user were logged on with the client ID specified in clnt.
    
-   If clnt contains a client ID for a nonexistent client, the SQL statement is executed with this ID and is hence ignored.
    
-   If the database table or view is specified statically, the addition USING CLIENT in SELECT can always be specified. If client-dependency does not apply, the addition is ignored.
    
-   The addition USING CLIENT is not allowed in the [obsolete short forms](javascript:call_link\('abenopen_sql_obsolete.htm'\)).
    
-   When the addition USING CLIENT, the syntax check is performed in a [strict mode](javascript:call_link\('abenopensql_strict_mode_740_sp05.htm'\)), which handles the statement more strictly than the regular syntax check.
    
-   Since each client represents a complete unit, automatic client handling should never be switched in application programs.
    
-   If access to the data of a different client is required, USING CLIENT should be used instead of CLIENT SPECIFIED, since in this case all necessary conditions are set implicitly.
    
-   The addition USING CLIENT is not permitted when accessing [global temporary tables](javascript:call_link\('abenddic_database_tables_gtt.htm'\)).
    
-   See also the associated [security note](javascript:call_link\('abenclient_dependent_scrty.htm'\)) and the [programming guideline](javascript:call_link\('abenclient_handling_guidl.htm'\) "Guideline").
    

Addition 2

... CLIENT SPECIFIED

Effect

This addition deactivates automatic [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry") in ABAP SQL. It can be specified only when accessing client-specific database tables or views and cannot be combined with USING CLIENT. If the addition CLIENT SPECIFIED is used, the [client ID](javascript:call_link\('abenclient_identifier_glosry.htm'\) "Glossary Entry") specified in source is respected. Without the addition CLIENT SPECIFIED, the [ABAP runtime environment](javascript:call_link\('abenabap_runtime_envir_glosry.htm'\) "Glossary Entry") does not pass the client ID specified in source to the database system, but passes the ID of the current client instead.

Notes

-   Since each client represents a complete unit, automatic client handling should never be turned off in application programs.
    
-   If data has to be accessed in a different client, USING CLIENT should be used instead of the addition CLIENT SPECIFIED, since all necessary conditions are set implicitly and accessing client-specific CDS entities is more simple.
    
-   If the database table or view is specified dynamically, the addition CLIENT SPECIFIED can always be specified. If client-dependency does not apply, the addition is ignored.
    
-   See also the associated [security note](javascript:call_link\('abenclient_dependent_scrty.htm'\)) and the [programming guideline](javascript:call_link\('abenclient_handling_guidl.htm'\) "Guideline").
    
-   The addition CLIENT SPECIFIED is not permitted when accessing [global temporary tables](javascript:call_link\('abenddic_database_tables_gtt.htm'\)).
    
-   If specified for client-specific database tables or views, the addition CLIENT SPECIFIED produces a syntax error in the [strict modes](javascript:call_link\('abenopensql_strict_modes.htm'\)) of the syntax check from Release 7.40, SP05 or else a syntax warning.
    

Example

Modifies a row in a different client. The first UPDATE statement shows the recommended method with the addition USING CLIENT. In the second UPDATE statement, automatic client handling is disabled using CLIENT SPECIFIED and the client field must be filled explicitly.

DELETE FROM demo\_update CLIENT SPECIFIED.
INSERT demo\_update USING CLIENT '800'
       FROM @( VALUE #( id = 'X' ) ).
UPDATE demo\_update USING CLIENT '800'
       FROM @( VALUE #( id = 'X' col1 = 100 ) ).
DELETE FROM demo\_update CLIENT SPECIFIED.
INSERT demo\_update CLIENT SPECIFIED
       FROM @( VALUE #( client = '800' id = 'X'  ) ).
UPDATE demo\_update CLIENT SPECIFIED
       FROM @( VALUE #( client = '800' id = 'X' col1 = 100 ) ).