  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_storage_obsolete.htm) →  [Obsolete Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_access_obsolete.htm) →  [Obsolete Access Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendb_access_obsolete.htm) → 

REFRESH itab FROM

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaprefresh_from_shortref.htm)

Obsolete Syntax

REFRESH itab FROM TABLE *{* dbtab *|* \*dbtab*}*.

Effect

The variant of the statement REFRESH, which is forbidden in classes, initializes the internal table itab, reads multiple rows from a database table or [DDIC table view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_view_glosry.htm "Glossary Entry") dbtab, and adds their contents to the internal table itab. The row contents are cast to the line type of the internal table. If the line type of the internal table is too short, it is truncated from the right.

dbtab expects a database table or a [DDIC table view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_view_glosry.htm "Glossary Entry") that starts with "T" and has a maximum length of five characters. For the database table or view dbtab, a [table work area](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_work_area_glosry.htm "Glossary Entry") or an [additional table work area](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptables_asterisk.htm) must be declared using the statement [TABLES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptables.htm). The internal table itab must be an [index table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenindex_table_glosry.htm "Glossary Entry"). All components of the table work area that match the primary key fields of the database table or view dbtab must be character-like.

The rows to be read are determined by the content of the components of the table work area, which correspond with the [primary key fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprimary_key_glosry.htm "Glossary Entry") of the database table or view dbtab. The content of these components is taken, flush left, as a search key, and the system makes a generic search for suitable entries in the database table or view. The search key handles blanks as if they match all values.

If the database table or view does not match the specified naming conventions, the behavior of the statement is undefined.

System Fields

This statement always sets sy-subrc to 0.

Hints

-   This form of the REFRESH statement must be replaced by the [SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect.htm) statement.

-   Obsolete access statements do not support [implicit client handling](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_client_handling.htm). The [client ID](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclient_identifier_glosry.htm "Glossary Entry") of a database table must be specified explicitly. Note that application programs should only use data from the current client.

Example

Reads multiple rows from the database table T100 into an internal table itab.

TABLES t100.
DATA itab TYPE STANDARD TABLE OF t100.
t100-sprsl = 'E'.
t100-arbgb = 'BC'.
REFRESH itab FROM TABLE t100.

The ABAP SQL syntax to be used instead reads:

DATA itab TYPE STANDARD TABLE OF t100.
SELECT \*
       FROM t100
       WHERE sprsl = 'E' AND
             arbgb LIKE 'BC%'
       INTO TABLE @itab.

[Exceptions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_exceptions.htm)

Uncatchable Exceptions

-   Cause: No memory available to execute the statement.
    Runtime error: REFRESH\_NO\_SHORT\_MEMORY