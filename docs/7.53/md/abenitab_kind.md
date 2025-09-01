  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Internal Tables - Overview](javascript:call_link\('abenitab_oview.htm'\)) → 

Selection of Table Category

The category of table used in each individual case depends on the type of individual row access that is used most often on the table. These rules are made suitably relative to tables with [secondary keys](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry").

-   Standard Tables
    This category of table is appropriate when the individual entries can be addressed using the [index](javascript:call_link\('abenindex_glosry.htm'\) "Glossary Entry"). Access by the index is the fastest possible access to table entries. You should fill standard tables by appending lines using [APPEND](javascript:call_link\('abapappend.htm'\)) and implement the other accesses using an index specification (INDEX addition of the respective statements). Since the cost of accesses to standard tables using the primary key increases linearly with the number of table entries, this type of access should only be used on standard tables if the filling of the table can be separated from the rest of the processing. If a standard table is sorted after filling, the cost of a key access with a binary search ([BINARY SEARCH](javascript:call_link\('abapread_table_free.htm'\))) has a logarithmic relationship to the number of table entries.

-   Sorted Tables
    This category of table is appropriate if the table must be sorted from the time of creation. The filling of the table takes place by insertion using the [INSERT](javascript:call_link\('abapinsert_itab.htm'\)) statement and in accordance with the sort order defined by the primary table key. The cost of key accesses is related logarithmically to the number of table entries because a binary search is automatically carried out. Sorted tables are also particularly suited for partially sequential access in a [LOOP loop](javascript:call_link\('abaploop_at_itab.htm'\)), if the first part of the table key is specified in the WHERE condition.

-   Hashed Tables
    This category of table is suitable when key accesses are the central operation to be carried out on the table. Hashed tables cannot be accessed using a primary table index. However, the cost per key access is always constant and independent of the number of table entries. As with database tables, the key of hashed tables is always unique. Therefore hashed tables are suitable for creating internal tables that are similar to databases and can be used in a corresponding fashion.

Example

A table scarr\_tab\_down intended for index access should be sorted by key field in descending order. This can only be a standard table. If you want a table in ascending order, you can and should use a sorted table, in this case scarr\_tab\_up. If only key access is required, then a hash table like scarr\_tab\_key can be used.

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