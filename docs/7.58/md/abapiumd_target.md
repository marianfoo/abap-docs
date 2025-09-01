---
title: "INSERT, UPDATE, MODIFY, DELETE, target"
description: |
  Syntax ... dbtabview(target_syntax) client_handling(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapiumd_client.htm) ... Alternatives: 1. ... dbtabview(#!ABAP_ALTERNATIVE_1@1@) 2. ... (target_syntax)(#!ABAP_ALTERNATIVE_2@2@) Effect In the modifying ABAP SQL
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapiumd_target.htm"
abapFile: "abapiumd_target.htm"
keywords: ["select", "insert", "update", "delete", "do", "if", "case", "try", "catch", "class", "data", "internal-table", "abapiumd", "target"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Write Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_writing.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20INSERT%2C%20UPDATE%2C%20MODIFY%2C%20DELETE%2C%20target%2C%20ABAPIUMD_TARGET%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

INSERT, UPDATE, MODIFY, DELETE, target

Syntax

... dbtab*|*view*|*(target\_syntax) *\[*[client\_handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapiumd_client.htm)*\]* ...

Alternatives:

[1\. ... dbtab*|*view](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... (target\_syntax)](#!ABAP_ALTERNATIVE_2@2@)

Effect

In the modifying ABAP SQL statements [INSERT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinsert_dbtab.htm), [UPDATE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapupdate.htm), [MODIFY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_dbtab.htm), and [DELETE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_dbtab.htm), these elements specify statically or dynamically which [DDIC database table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_db_table_glosry.htm "Glossary Entry") or [DDIC view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_view_glosry.htm "Glossary Entry") is accessed. Optional additions [client\_handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapiumd_client.htm) control [client handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclient_handling_glosry.htm "Glossary Entry"). Only views whose key fields are located together at the beginning of the view can be accessed.

Hint

Write access to DDIC database tables or DDIC table views with [replacement objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_replacement_objects.htm) is still performed on the DDIC database table or the DDIC view and produce a syntax warning.

Alternative 1   

... dbtab*|*view

Effect

dbtab can be a DDIC database table defined in the ABAP Dictionary and view can be a [DDIC table view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_view_glosry.htm "Glossary Entry").

Only DDIC table views that refer to a single DDIC database table and whose status in the ABAP Dictionary allows changes can be specified. No [DDIC external views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexternal_view_glosry.htm "Glossary Entry") or [CDS entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_glosry.htm "Glossary Entry") can be specified.

Hint

The database table or view must be specified using the exact name defined for it in the ABAP Dictionary. More specifically, no name for the [database schema](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_schema_glosry.htm "Glossary Entry") can be prefixed. An ABAP SQL statement always accesses the database schema assigned to the current [database user name](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_user_name_glosry.htm "Glossary Entry"). In cases where the [standard connection](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstandard_db_connection_glosry.htm "Glossary Entry") or a [service connection](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenservice_connection_glosry.htm "Glossary Entry") is used, this is the [ABAP database schema](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_db_schema_glosry.htm "Glossary Entry"). In cases where a [secondary connection](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") is used, this is the database schema assigned to the [database user](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_user_glosry.htm "Glossary Entry") defined in the secondary connection. Here, each access requires the database table or view to exist under this exact name in the ABAP Dictionary of the current AS ABAP, regardless of the connection.

Example

Static specification of a DDIC database table in different writing ABAP SQL statements.

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
       INTO TABLE @FINAL(itab).
cl\_demo\_output=>display( itab ).

Alternative 2   

... (target\_syntax)

Effect

Instead of specifying an object statically, a parenthesized data object target\_syntax can be specified that must contain the name of the DDIC database table or the DDIC view when the statement is executed. A character-like data object or a [standard table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstandard_table_glosry.htm "Glossary Entry") with a character-like row type can be specified for the data object target\_syntax. The syntax in target\_syntax is not case-sensitive. Invalid syntax raises a catchable exception from the class CX\_SY\_DYNAMIC\_OSQL\_ERROR.

Security Hint

If used incorrectly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before it is used in dynamic statements. This can be done using the system class CL\_ABAP\_DYN\_PRG or the built-in function [escape](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenescape_functions.htm). See [SQL Injections Using Dynamic Tokens](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_inj_dyn_tokens_scrty.htm).

Hint

When specified dynamically, ABAP SQL statements can contain the comment characters [\*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencomment.htm) and ["](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencomment.htm) as follows:

-   In a dynamic token specified as a character-like data object, all content is ignored from the first comment character ".
-   In a dynamic token specified as an internal table, all rows are ignored that start with the comment character \*. In the row, all content is ignored from the first comment character ".

Example

Specification of a DDIC database table in a DELETE statement to delete all rows of the current client dynamically. A check is made to verify whether the object entered is in a particular package and any exceptions are handled.

DATA(dbtab) = \`demo\_update\`.
cl\_demo\_input=>request( CHANGING field = dbtab ).
TRY.
    dbtab =
      cl\_abap\_dyn\_prg=>check\_table\_name\_str(
        val = to\_upper( dbtab )
        packages = 'SABAPDEMOS' ).
  CATCH cx\_abap\_not\_a\_table cx\_abap\_not\_in\_package.
    cl\_demo\_output=>display( 'Object must be in package SABAPDEMOS' ).
ENDTRY.
TRY.
    DELETE FROM (dbtab).
    cl\_demo\_output=>display( |Deleted { sy-dbcnt } lines| ).
  CATCH cx\_sy\_dynamic\_osql\_semantics.
    cl\_demo\_output=>display( 'Deletion failed' ).
ENDTRY.

Continue
[INSERT, UPDATE, MODIFY, DELETE dbtab, CLIENT, CLIENTS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapiumd_client.htm)