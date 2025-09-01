  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Obsolete Database Access](javascript:call_link\('abendatabase_access_obsolete.htm'\)) →  [Obsolete Access Statements](javascript:call_link\('abendb_access_obsolete.htm'\)) → 

READ TABLE dbtab

[Quick Reference](javascript:call_link\('abapread_table_dbtab_shortref.htm'\))

Obsolete Syntax

READ TABLE *{* dbtab *|* \*dbtab *}*
           *\[*WITH KEY key*\]*
           *\[*SEARCH *{*FKEQ*|*FKGE*|*GKEQ*|*GKGE*}**\]*
           *\[*VERSION vers*\]*.

Extras:

[1\. ... WITH KEY key](#!ABAP_ADDITION_1@1@)
[2\. ... SEARCH *{*FKEQ*|*FKGE*|*GKEQ*|*GKGE*}*](#!ABAP_ADDITION_2@2@)
[3\. ... VERSION vers](#!ABAP_ADDITION_3@3@)

Effect

This variant of the statement READ (not allowed in classes) reads a row from the database table dbtab or from a [classic view](javascript:call_link\('abenclassical_view_glosry.htm'\) "Glossary Entry") and assigns the content to a work area.

A [table work area](javascript:call_link\('abentable_work_area_glosry.htm'\) "Glossary Entry") dbtab or \*dbtab is used implicitly as the work area. The table work area must be declared using the statement [TABLES](javascript:call_link\('abaptables.htm'\)). If the name \*dbtab is used instead of the name of the database table or view dbtab, dbtab is accessed, but the [additional table work area](javascript:call_link\('abaptables_asterisk.htm'\)) is used. All components of the table work area that match the [primary key fields](javascript:call_link\('abenprimary_key_glosry.htm'\) "Glossary Entry") of the database table or view dbtab must be character-like.

dbtab expects a database table or [classic view](javascript:call_link\('abenclassical_view_glosry.htm'\) "Glossary Entry") that starts with "T" and has a maximum length of five characters. If a database table or view is specified that does not begin with "T", the first letter is implicitly replaced by "T".

Without the addition WITH KEY, the row to be read is determined by the content of the components of the table work area that correspond to the primary key fields of database table or view dbtab.

System Fields

sy-subrc

Meaning

0

A table entry was read.

4

No table entry was found under the specified search key.

8

The table work area is too short.

12

The database table or view was not found.

Notes

-   This form of READ statement is not allowed in classes. It must be replaced by the [SELECT](javascript:call_link\('abapselect.htm'\)) statement.
    
-   Obsolete access statements do not support automatic [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry"). The [client ID](javascript:call_link\('abenclient_identifier_glosry.htm'\) "Glossary Entry") of a database table must be specified explicitly. Note that application programs should only use data from the current client.
    

Addition 1

... WITH KEY key

Effect

The addition WITH KEY determines the key by using the content of data object key, which expects a [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") character-like data type.

The content of the table work area or the data object key is taken from the database table or view as a search key (left-justified with the length of the key components). A search for a matching entry is then made in the database table or view.

Addition 2

... SEARCH *{*FKEQ*|*FKGE*|*GKEQ*|*GKGE*}*

Effect

The addition SEARCH determines how the row is searched:

-   Without the addition SEARCH and with SEARCH FKEQ, the first row in the database table or view that matches the search key is searched.
    
-   SEARCH GKEQ is used to search generically for the first row of the database table or view that matches the search key. The search key handles blanks as if they match all values.
    
-   SEARCH FKGE searches the first row of the database table or view that is greater than or equal to the search key.
    
-   SEARCH GKGE searches (generically) the first row of the database table or view that is greater than or equal to the search key. The search key handles blanks as if they match all values.
    

Addition 3

... VERSION vers

Effect

If the addition VERSION is specified, the database table or view dbtab is not read, and the table whose name is composed of "T" and the content of vers is read instead. vers expects a data object with a maximum of four characters, of type c. If the database table or view is not available, sy-subrc is set to 12.

The content of the row is still assigned to the table work area of dbtab or \*dbtab and its type is cast. If the table work area is too short, sy-subrc is set to 8.

Example

Reading of a row from the database table T100 or another database table that starts with "T".

TABLES t100.
PARAMETERS p TYPE c LENGTH 4 DEFAULT '100T'.
t100-sprsl = 'E'.
t100-arbgb = 'BC'.
READ TABLE t100 SEARCH FKEQ VERSION p.
IF sy-subrc = 0.
  ...
ENDIF.

The ABAP SQL syntax to be used instead reads as follows. It uses a dynamic FROM clause and also uses CREATE DATA to create a suitable work area for the INTO clause.

PARAMETERS p TYPE c LENGTH 5 DEFAULT 'T100T'.
DATA dref TYPE REF TO data.
FIELD-SYMBOLS <fs> TYPE ANY.
CREATE DATA dref TYPE (p).
ASSIGN dref->\* TO <fs>.
SELECT SINGLE \*
       FROM (p)
       WHERE sprsl = 'E' AND
             arbgb = 'BC'
       INTO @<fs>.
IF sy-subrc = 0.
  ...
ENDIF.