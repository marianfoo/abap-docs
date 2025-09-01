  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Overview](javascript:call_link\('abenopen_sql_oview.htm'\)) →  [ABAP SQL - Table Buffering](javascript:call_link\('abensap_puffering.htm'\)) →  [Table Buffering - Buffering Types](javascript:call_link\('abenbuffer_kind.htm'\)) → 

Table Buffering - Generic Buffering

When a read is performed on a row, all rows are loaded into the table buffer that match this row in a left-justified part of the primary key. The number of key fields covered is specified in the definition and is always less than the total number of key fields. Together, these key fields are the generic key.

The individual generic areas are handled like standalone tables or views whose primary key is the generic key and that are fully buffered.

If a fully specified generic key is used to access an unbuffered row through ABAP SQL, an attempt is made to load the area. If the row is not found, this is noted in the buffer and the database is not accessed again the next time a row is accessed using a fully specified generic key.

Notes

-   In a generically buffered table or view, access to nonexistent data is very fast (see [Buffer Management](javascript:call_link\('abenbuffer_memory.htm'\))).

-   When using generic buffering, any ABAP SQL statements must respect the generic key to prevent them from [bypassing](javascript:call_link\('abenbuffer_restrictions.htm'\)) table buffering.

-   Generic buffering should be used if usually only certain areas of the table or view are required. These areas should not be too small, to prevent too many of them from being created and overloading buffer management. They should also not be too big, to prevent too much data from being loaded. [Full buffering](javascript:call_link\('abenbuffer_complete_buffering.htm'\)) may also be more efficient in some cases. Accordingly, the generic key must not cover too many or too few fields.

Example

One good application of generic buffering are language-dependent tables that have the language code field as a generic key.