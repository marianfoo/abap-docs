  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Overview](javascript:call_link\('abenitab_oview.htm'\)) → 

itab - Selection of the Table Category

What kind of table should be used in an individual case depends on the type of individual line access that will be used most frequently on the table. These rules are made suitably relative to tables with [secondary keys](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry").

-   Standard Tables
    This table category is appropriate when the individual entries can be accessed using the [index](javascript:call_link\('abenindex_glosry.htm'\) "Glossary Entry"). Access using the index is the fastest possible access to table entries. Standard tables should be filled by appending lines using [APPEND](javascript:call_link\('abapappend.htm'\)) and implement other accesses using an index specification (INDEX addition of the respective statements). Since the cost of accesses to standard tables using the primary key increases linearly with the number of table entries, this type of access should only be used on standard tables if the filling of the table can be separated from the rest of the processing. If a standard table is sorted after filling, the cost of a key access with a binary search ([BINARY SEARCH](javascript:call_link\('abapread_table_free.htm'\))) only depends logarithmically on the number of table entries.

-   Sorted Tables
    This kind of table is appropriate if the table must already be sorted from the time of creation. The filling of the table takes place by insertion using the [INSERT](javascript:call_link\('abapinsert_itab.htm'\)) statement and in accordance with the sort order defined by the primary table key. The cost of key accesses depends logarithmically on the number of table entries because a binary search is performed automatically. Sorted tables are also particularly suited for partially sequential processing in a [LOOP loop](javascript:call_link\('abaploop_at_itab.htm'\)), if initial parts of the table key are specified in the WHERE condition.

-   Hashed Tables
    This kind of table is suitable when key accesses are the central operation on table entries. Hashed tables cannot be accessed using a primary table index. However, the cost per key access is always constant and independent of the number of table entries. As with database tables, the key of hashed tables is always unique. Therefore, hashed tables are suitable for creating database-like internal tables and using them accordingly.

Example

A table scarr\_tab\_down intended for index access should be sorted by key field in descending order. This can only be a standard table. To sort in ascending order, a sorted table can and should be used, in this case scarr\_tab\_up. If only key access is required, then a hashed table like scarr\_tab\_key can be used.

DATA scarr\_tab\_down
  TYPE STANDARD TABLE OF scarr
       WITH NON-UNIQUE KEY carrid.
DATA scarr\_tab\_up
  TYPE SORTED TABLE OF scarr
       WITH UNIQUE KEY carrid.
DATA scarr\_tab\_key
  TYPE HASHED TABLE OF scarr
       WITH UNIQUE KEY carrid.
SELECT \*
       FROM scarr
       ORDER BY carrid DESCENDING
       INTO TABLE @scarr\_tab\_down.
scarr\_tab\_up = scarr\_tab\_down.
scarr\_tab\_key = scarr\_tab\_up.
cl\_demo\_output=>new(
)->write( scarr\_tab\_down\[ 1 \]
)->write( scarr\_tab\_up\[ 1 \]
)->write( scarr\_tab\_key\[ carrid = 'UA' \]
)->display( ).