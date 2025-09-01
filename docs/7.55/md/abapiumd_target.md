  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Write Access](javascript:call_link\('abenopen_sql_writing.htm'\)) → 

INSERT, UPDATE, MODIFY, DELETE, target

Syntax

... dbtab *|*view*|*(target\_syntax)  *\[*[client\_handling](javascript:call_link\('abapiumd_client.htm'\))*\]* ...

Alternatives:

[1\. ... dbtab*|*view](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... (target\_syntax)](#!ABAP_ALTERNATIVE_2@2@)

Effect

In the modifying ABAP SQL statements [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)), [UPDATE](javascript:call_link\('abapupdate.htm'\)), [MODIFY](javascript:call_link\('abapmodify_dbtab.htm'\)), and [DELETE](javascript:call_link\('abapdelete_dbtab.htm'\)), these elements specify which [DDIC database table](javascript:call_link\('abenddic_db_table_glosry.htm'\) "Glossary Entry") or [DDIC view](javascript:call_link\('abendictionary_view_glosry.htm'\) "Glossary Entry") is accessed statically or dynamically. Optional additions [client\_handling](javascript:call_link\('abapiumd_client.htm'\)) define [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry"). Only views whose key fields are located together at the beginning of the view can be accessed.

Hint

Write access to DDIC database tables or DDIC table views with [replacement objects](javascript:call_link\('abenddic_replacement_objects.htm'\)) is still performed on the DDIC database table or the DDIC view and produce a syntax warning.

Alternative 1

... dbtab*|*view

Effect

dbtab can be a DDIC database table defined in ABAP Dictionary and view can be a [DDIC table view](javascript:call_link\('abentable_view_glosry.htm'\) "Glossary Entry") .

Only DDIC table views that refer to a single DDIC database table, and whose status in ABAP Dictionary allows changes, can be specified. No [DDIC external views](javascript:call_link\('abenexternal_view_glosry.htm'\) "Glossary Entry") or [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") can be specified.

Hint

The database table or view must be specified using the exact name defined for it in ABAP Dictionary. More specifically, it cannot be prefixed with the name for the [database schema](javascript:call_link\('abendatabase_schema_glosry.htm'\) "Glossary Entry"). An ABAP SQL statement always accesses the database schema assigned to the current [database user name](javascript:call_link\('abendatabase_user_name_glosry.htm'\) "Glossary Entry"). In cases where the [standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry") or a [service connection](javascript:call_link\('abenservice_connection_glosry.htm'\) "Glossary Entry") is used, this is the [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry"). In cases where a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") is used, this is the database schema assigned to the [database user](javascript:call_link\('abendatabase_user_glosry.htm'\) "Glossary Entry") defined in the secondary connection. Here, each access assumes that the database table or view exists under this exact name in the current AS ABAP's ABAP Dictionary, regardless of the connection.

Example

Specifies a DDIC database table in different writing ABAP SQL statements statically.

DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM TABLE @( VALUE #(
  ( id = 'X' num1 = 1 num2 = 10 )
  ( id = 'Y' num1 = 2 num2 = 20 )
  ( id = 'Z' num1 = 3 num2 = 30 ) ) ).
UPDATE demo\_expressions
  SET num2 = num2 + demo\_expressions~num1
  WHERE id = 'X'.
MODIFY demo\_expressions FROM @( VALUE #(
  id = 'Y' num1 = 20 num2 = 200 ) ).
DELETE FROM demo\_expressions WHERE id = 'Z'.
SELECT id, num1, num2
       FROM demo\_expressions
       INTO TABLE @DATA(itab).
cl\_demo\_output=>display( itab ).

Alternative 2

... (target\_syntax)

Effect

Instead of specifying an object statically, a parenthesized data object target\_syntax can be specified that must contain the name of the DDIC database table or the DDIC view when the statement is executed. A character-like data object or a [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") with a character-like row type can be specified for the data object target\_syntax. The syntax in target\_syntax is not case-sensitive. Invalid syntax raises a catchable exception from the class CX\_SY\_DYNAMIC\_OSQL\_ERROR.

Security Hint

If used incorrectly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or masked before it is used in dynamic statements. This can be done using the system class CL\_ABAP\_DYN\_PRG or the built-in function [escape](javascript:call_link\('abenescape_functions.htm'\)). See [SQL Injections Using Dynamic Tokens](javascript:call_link\('abensql_inj_dyn_tokens_scrty.htm'\)).

Hint

When specified dynamically, ABAP SQL statements can contain the comment characters [\*](javascript:call_link\('abencomment.htm'\)) and ["](javascript:call_link\('abencomment.htm'\)) as follows:

-   In a dynamic token specified as a character-like data object, all content is ignored from the first comment character ".

-   In a dynamic token specified as an internal table, all rows are ignored that start with the comment character \*. In the row, all content is ignored from the first comment character ".

Example

Specifies a DDIC database table in a DELETE statement to delete all rows of the current client dynamically. A check is made to verify whether the object entered is in a particular package and any exceptions are handled.

DATA(dbtab) = \`demo\_update\`.
cl\_demo\_input=>request( CHANGING field = dbtab ).
TRY.
    dbtab =
      cl\_abap\_dyn\_prg=>check\_table\_name\_str(
        val = to\_upper( dbtab )
        packages = 'SABAPDEMOS' ).
  CATCH cx\_abap\_not\_a\_table cx\_abap\_not\_in\_package.
    cl\_demo\_output=>display( 'Object must be in package SABAPDEMOS' ).
    LEAVE PROGRAM.
ENDTRY.
TRY.
    DELETE FROM (dbtab).
    cl\_demo\_output=>display( |Deleted { sy-dbcnt } lines| ).
  CATCH cx\_sy\_dynamic\_osql\_semantics.
    cl\_demo\_output=>display( 'Deletion failed' ).
ENDTRY.

Continue
[INSERT, UPDATE, MODIFY, DELETE dbtab, CLIENT, CLIENTS](javascript:call_link\('abapiumd_client.htm'\))