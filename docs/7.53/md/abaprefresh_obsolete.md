  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Obsolete Database Access](javascript:call_link\('abendatabase_access_obsolete.htm'\)) →  [Obsolete Access Statements](javascript:call_link\('abendb_access_obsolete.htm'\)) → 

REFRESH itab FROM

[Quick Reference](javascript:call_link\('abaprefresh_from_shortref.htm'\))

Obsolete Syntax

REFRESH itab FROM TABLE *{* dbtab *|* \*dbtab*}*.

Effect

The variant of the statement REFRESH, which is forbidden in classes, initializes the internal table itab, reads multiple rows from a database table or [classic view](javascript:call_link\('abenclassical_view_glosry.htm'\) "Glossary Entry") dbtab, and adds their contents to the internal table itab. The row contents are cast to the row type of the internal table. If the row type of the internal table is too short, it is truncated from the right.

dbtab expects a database table or [classic view](javascript:call_link\('abenclassical_view_glosry.htm'\) "Glossary Entry") that begins with "T" and has a maximum length of five characters. For the database table or view dbtab, a [table work area](javascript:call_link\('abentable_work_area_glosry.htm'\) "Glossary Entry") or an [additional table work area](javascript:call_link\('abaptables_asterisk.htm'\)) must be declared using the statement [TABLES](javascript:call_link\('abaptables.htm'\)). The internal table itab must be an [index table](javascript:call_link\('abenindex_table_glosry.htm'\) "Glossary Entry"). All components of the table work area that match the primary key fields of the database table or view dbtab must be character-like.

The rows to be read are determined by the content of the components of the table work area, which correspond with the [primary key fields](javascript:call_link\('abenprimary_key_glosry.htm'\) "Glossary Entry") of the database table or view dbtab. The content of these components is taken, flush left, as a search key, and the system makes a generic search for suitable entries in the database table or view. The search key handles blanks as if they match all values.

If the database table or view does not match the specified naming conventions, the behavior of the statement is undefined.

System Fields

This statement always sets sy-subrc to 0.

Notes

-   This form of the REFRESH statement must be replaced by the [SELECT](javascript:call_link\('abapselect.htm'\)) statement.
    
-   Obsolete access statements do not support automatic [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry"). The [client ID](javascript:call_link\('abenclient_identifier_glosry.htm'\) "Glossary Entry") of a database table must be specified explicitly. Note that application programs should only use data from the current client.
    

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

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Non-Handleable Exceptions

-   Cause: No memory available to execute the statement.
    Runtime error: REFRESH\_NO\_SHORT\_MEMORY