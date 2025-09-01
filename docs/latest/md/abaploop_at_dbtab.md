---
title: "LOOP AT dbtab"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_dbtab_shortref.htm) Obsolete Syntax LOOP AT  dbtab  dbtab  VERSION vers. ... ENDLOOP. Addition: ... VERSION vers(#!ABAP_ONE_ADD@1@) Effect The statements LOOP and ENDLOOP define a loop
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_dbtab.htm"
abapFile: "abaploop_at_dbtab.htm"
keywords: ["select", "loop", "do", "if", "try", "class", "data", "abaploop", "dbtab"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_storage_obsolete.htm) →  [Obsolete Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_access_obsolete.htm) →  [Obsolete Access Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20LOOP%20AT%20dbtab%2C%20ABAPLOOP_AT_DBTAB%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

LOOP AT dbtab

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_dbtab_shortref.htm)

Obsolete Syntax

LOOP AT *{* dbtab *|* \*dbtab *}* *\[*VERSION vers*\]*.
  ...
ENDLOOP.

Addition:

[... VERSION vers](#!ABAP_ONE_ADD@1@)

Effect

The statements LOOP and ENDLOOP define a loop around a statement block, which is forbidden in classes. dbtab expects a database table or [DDIC table view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_view_glosry.htm "Glossary Entry") that starts with T and has a maximum length of five characters. For the database table or view dbtab, a [table work area](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_work_area_glosry.htm "Glossary Entry") or an [additional table work area](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptables_asterisk.htm) must be declared using the statement [TABLES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptables.htm). All components of the table work area that match the primary key fields of the database table or view dbtab must be character-like.

In each loop pass, the statement LOOP reads a row from the database table or view dbtab and assigns its content either to the table work area, or if \*dbtab is specified, to the additional table work area. The rows to be read are determined by the content of the components of the table work area that match the [primary key fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprimary_key_glosry.htm "Glossary Entry") of the database table or view dbtab. Before the first loop pass, the content of these components is taken left-aligned as the search key and the database table or view is searched generically for suitable entries. The search key handles blanks as if they match all values.

If a database table or view is specified that does not start with T, the first letter is implicitly replaced by T. The loop is not executed if the database table or view does not exist.

System Fields

sy-subrc

Meaning

12

The database table or view was not found.

Hints

-   This form of the LOOP\-loop is not allowed in classes. It must be replaced by the [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect.htm) statement.
-   Obsolete access statements do not support [implicit client handling](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_client_handling.htm). The [client ID](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclient_identifier_glosry.htm "Glossary Entry") of a database table must be specified explicitly. Note that application programs should only use data from the current client.

Addition   

... VERSION vers

Effect

If the addition VERSION is specified, the database table or view dbtab is not read, and the table or view whose name is composed of T and the content of vers is read instead. vers expects a data object with a maximum of four characters, of type c. The content of the row is still assigned to the table work area of dbtab or \*dbtab and its type is cast. If the table work area is too short, a runtime error occurs.

Example

Sequential reading of rows from database table T100.

TABLES t100.
t100 = space.
t100-sprsl = 'E'.
t100-arbgb = 'BC'.
t100-msgnr = '1'.
LOOP AT t100.
  ...
ENDLOOP.

The ABAP SQL syntax to be used instead reads:

DATA wa TYPE t100.
SELECT \*
       FROM t100
       WHERE sprsl = 'E'  AND
             arbgb = 'BC' AND
             msgnr LIKE '1%'
       INTO @wa.
  ...
ENDSELECT.