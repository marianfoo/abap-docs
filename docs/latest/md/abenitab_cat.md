  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Data Objects](javascript:call_link\('abendata_objects.htm'\)) →  [Internal Tables](javascript:call_link\('abendobj_itab.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Selection%20of%20the%20Table%20Category%2C%20ABENITAB_CAT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

itab - Selection of the Table Category

What category of table should be used in an individual case depends on the type of individual line access that will be used most frequently on the table. These rules are made suitably relative to tables with [secondary keys](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry").

-   Standard Tables
    
    This table category is appropriate when the individual entries can be accessed using the [index](javascript:call_link\('abenindex_glosry.htm'\) "Glossary Entry"). Access using the index is the fastest possible access to table entries. Standard tables should be filled by appending lines using [APPEND](javascript:call_link\('abapappend.htm'\)) and implement other accesses using an index specification (INDEX addition of the respective statements). Since the cost of accesses to standard tables using the primary key increases linearly with the number of table entries, this type of access should only be used on standard tables if the filling of the table can be separated from the rest of the processing. If a standard table is sorted after filling, the cost of a key access with a binary search ([BINARY SEARCH](javascript:call_link\('abapread_table_free.htm'\))) only depends logarithmically on the number of table entries.
    
-   Sorted Tables
    
    This table category is appropriate if the table must already be sorted at the time it is constructed. The filling of the table takes place by insertion using the [INSERT](javascript:call_link\('abapinsert_itab.htm'\)) statement and in accordance with the sort order defined by the primary table key. The cost of key accesses depends logarithmically on the number of table entries because a binary search is performed automatically. Sorted tables are also particularly suited for partially sequential processing in a [LOOP](javascript:call_link\('abaploop_at_itab.htm'\)), if initial parts of the table key are specified in the WHERE condition.
    
-   Hashed Tables
    
    This table category is suitable when key accesses are the central operation on table entries. Hashed tables cannot be accessed using a primary table index. However, the cost per key access is always constant and independent of the number of table entries. As with database tables, the key of hashed tables is always unique. Therefore, hashed tables are suitable for creating database-like internal tables and using them accordingly.
    

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