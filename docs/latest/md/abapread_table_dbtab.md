  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_storage_obsolete.htm) →  [Obsolete Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_access_obsolete.htm) →  [Obsolete Access Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20READ%20TABLE%20dbtab%2C%20ABAPREAD_TABLE_DBTAB%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

READ TABLE dbtab

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_table_dbtab_shortref.htm)

Obsolete Syntax

READ TABLE *{* dbtab *|* \*dbtab *}*
           *\[*WITH KEY key*\]*
           *\[*SEARCH *{*FKEQ*|*FKGE*|*GKEQ*|*GKGE*}**\]*
           *\[*VERSION vers*\]*.

Additions:

[1\. ... WITH KEY key](#!ABAP_ADDITION_1@1@)
[2\. ... SEARCH *{*FKEQ*|*FKGE*|*GKEQ*|*GKGE*}*](#!ABAP_ADDITION_2@2@)
[3\. ... VERSION vers](#!ABAP_ADDITION_3@3@)

Effect

This variant of the statement READ, which is forbidden in classes, reads a row from the database table dbtab or from a [DDIC table view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_view_glosry.htm "Glossary Entry") and assigns the content to a work area.

A [table work area](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_work_area_glosry.htm "Glossary Entry") dbtab or \*dbtab is used implicitly as the work area. This table work area must be declared using the statement [TABLES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptables.htm). If the name \*dbtab is used instead of the name of the database table or view dbtab, dbtab is accessed, but the [additional table work area](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptables_asterisk.htm) is used. All components of the table work area that match the [primary key fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprimary_key_glosry.htm "Glossary Entry") of the database table or view dbtab must be character-like.

dbtab expects a database table or [DDIC table view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_view_glosry.htm "Glossary Entry") that starts with T and has a maximum length of five characters. If a database table or view is specified that does not begin with T, the first letter is implicitly replaced by T.

Without the addition WITH KEY, the row to be read is determined by the content of the components of the table work area that match the primary key fields of database table or view dbtab.

System Fields

sy-subrc

Meaning

0

A table entry was read.

4

No table entry was found for the specified search key.

8

The table work area is too short.

12

The database table or view was not found.

Hints

-   This form of READ statement is not allowed in classes. It must be replaced by the [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect.htm) statement.
-   Obsolete access statements do not support [implicit client handling](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_client_handling.htm). The [client ID](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclient_identifier_glosry.htm "Glossary Entry") of a database table must be specified explicitly. Note that application programs should only use data from the current client.

Addition 1   

... WITH KEY key

Effect

The addition WITH KEY determines the key by using the content of data object key, which expects a [flat](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenflat_glosry.htm "Glossary Entry") character-like data type.

The content of the table work area or the data object key is taken from the database table or view as a search key (left-aligned with the length of the key components). A search for a matching entry is then made in the database table.

Addition 2   

... SEARCH *{*FKEQ*|*FKGE*|*GKEQ*|*GKGE*}*

Effect

The addition SEARCH determines how the row is searched for:

-   Without the addition SEARCH and with SEARCH FKEQ, the first row in the database table or view that matches the search key is searched for.
-   SEARCH GKEQ is used to search generically for the first row of the database table or view that matches the search key. The search key handles blanks as if they match all values.
-   SEARCH FKGE searches the first row of the database table or view that is greater than or equal to the search key.
-   SEARCH GKGE generically searches the first row of the database table or view that is greater than or equal to the search key. The search key handles blanks as if they match all values.

Addition 3   

... VERSION vers

Effect

If the addition VERSION is specified, the database table or view dbtab is not read, and the table whose name is composed of T and the content of vers is read instead. vers expects a data object with a maximum of four characters, of type c. If the database table or view is not available, sy-subrc is set to 12.

The content of the row is still assigned to the table work area of dbtab or \*dbtab, where its type is cast. If the table work area is too short, sy-subrc is set to 8.

Example

Reading of a row from the database table T100 or another database table that starts with T.

TABLES t100.
PARAMETERS p TYPE c LENGTH 4 DEFAULT '100T'.
t100-sprsl = 'E'.
t100-arbgb = 'BC'.
READ TABLE t100 SEARCH FKEQ VERSION p.
IF sy-subrc = 0.
  ...
ENDIF.

The ABAP SQL syntax to be used instead reads as follows. It uses a dynamic FROM clause and CREATE DATA to create a suitable work area for the INTO clause.

PARAMETERS p TYPE c LENGTH 5 DEFAULT 'T100T'.
DATA dref TYPE REF TO data.
CREATE DATA dref TYPE (p).
SELECT SINGLE \*
       FROM (p)
       WHERE sprsl = 'E' AND
             arbgb = 'BC'
       INTO @dref->\*.
IF sy-subrc = 0.
  ...
ENDIF.