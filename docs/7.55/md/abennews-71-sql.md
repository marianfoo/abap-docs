  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.0 and its EhPs](javascript:call_link\('abennews-70_ehps.htm'\)) →  [Changes in Release 7.0, EhP2](javascript:call_link\('abennews-71.htm'\)) → 

Database Access in Release 7.0, EhP2

[1\. UPDATE for tables with strings](#!ABAP_MODIFICATION_1@1@)
[2\. Table buffering with single record access](#!ABAP_MODIFICATION_2@2@)
[3\. Short strings as key fields of database tables](#!ABAP_MODIFICATION_3@3@)
[4\. Maximum length of short strings in ABAP Dictionary](#!ABAP_MODIFICATION_4@4@)
[5\. ABAP Database Connectivity (ADBC)](#!ABAP_MODIFICATION_5@5@)
[6\. Streaming and locators in ABAP SQL](#!ABAP_MODIFICATION_6@6@)
[7\. Specifying sorting columns in ABAP SQL](#!ABAP_MODIFICATION_7@7@)
[8\. Overflow handling for sy-dbcnt](#!ABAP_MODIFICATION_8@8@)

Modification 1

UPDATE for Tables with Strings

When the statement [UPDATE](javascript:call_link\('abapupdate.htm'\)) is used for a column of type STRING or RAWSTRING with the addition [SET](javascript:call_link\('abapupdate_source.htm'\)), it is no longer necessary to specify the [primary key](javascript:call_link\('abenprimary_key_glosry.htm'\) "Glossary Entry") in full in the WHERE condition.

Modification 2

Table Buffering with Single Record Access

Access to a table with single record buffering that an equality condition is set for in the WHERE clause for all key fields of the primary key uses [table buffering](javascript:call_link\('abentable_buffering_glosry.htm'\) "Glossary Entry"), even if the addition [SINGLE](javascript:call_link\('abapselect_single.htm'\)) is not specified for SELECT. Before Release 7.0 EhP2, table buffering was bypassed if SINGLE was missing.

Modification 3

Short Strings as Key Fields of Database Tables

From Release 7.0, EhP2, [short strings](javascript:call_link\('abenddic_character_byte_types.htm'\)) can be used as key fields of the type [SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)) in database tables. This can produce significant memory and performance gains in comparison with using long fields of type CHAR.

Modification 4

Maximum Length of Short Strings in ABAP Dictionary

The maximum length of short strings of type [SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)) has been increased from 255 to 1333.

Modification 5

ABAP Database Connectivity (ADBC)

The class-based framework ABAP Database Connectivity (ADBC), which has existed since Release 6.10 for dynamic access to the [Native SQL interface](javascript:call_link\('abennative_sql_interface_glosry.htm'\) "Glossary Entry"), is now also documented in the ABAP keyword documentation under [ADBC](javascript:call_link\('abenadbc.htm'\)).

Modification 6

Streaming and Locators in ABAP SQL

From Release 7.0, EhP2, ABAP SQL supports processing of [LOBs](javascript:call_link\('abenlob_glosry.htm'\) "Glossary Entry") using [data streams](javascript:call_link\('abendata_stream_glosry.htm'\) "Glossary Entry") and [locators](javascript:call_link\('abenlocator_glosry.htm'\) "Glossary Entry").

-   A new set of classes and interfaces was introduced.
    See [ABAP SQL - Streaming and Locators](javascript:call_link\('abenstreams_locators.htm'\))

-   In reading and changing ABAP SQL statements, data streams and locators can be linked to LOBs in database tables by using special reference variables.
    See [SELECT - LOB Handles](javascript:call_link\('abenselect_into_lob_handles.htm'\)) and [INSERT, UPDATE, MODIFY dbtab*|*view - LOB Handles](javascript:call_link\('abenium_lob.htm'\))

-   Using the statements TYPES, DATA, and CLASS-DATA, it is possible to derive special LOB handle structures for use in ABAP SQL.
    See [TYPES ... FOR ... COLUMNS ...](javascript:call_link\('abaptypes_lob_handle.htm'\))

-   The data streams for ABAP SQL are embedded in a broader streaming framework. Further data streams and filter streams will be added to this in future releases.
    See [Streaming](javascript:call_link\('abenstreaming.htm'\)).
    

Modification 7

Specifying Sorting Columns in ABAP SQL

The restriction that after [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)) in [SELECT](javascript:call_link\('abapselect.htm'\)) only columns can be specified that are also specified after SELECT does not apply.

This also applies to the addition PRIMARY KEY. Previously, all columns of the primary key had to be in the SELECT list, but this is no longer the case.

Modification 8

Overflow Handling for sy-dbcnt

If an overflow occurs in the system field sy-dbcnt, meaning the number of statements processed by SQL access is greater than 2,147,483,647, the value of sy-dbcnt is set to -1. The value was previously undefined.