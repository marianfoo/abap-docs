  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Overview](javascript:call_link\('abenitab_oview.htm'\)) → 

itab - Table Type

A [table type](javascript:call_link\('abentable_type_glosry.htm'\) "Glossary Entry") defined as a [DDIC table type](javascript:call_link\('abenddic_table_type_glosry.htm'\) "Glossary Entry") or using [TYPES](javascript:call_link\('abaptypes_itab.htm'\)) or [DATA](javascript:call_link\('abapdata_itab.htm'\)) is specified completely using:

-   Line type
    
    The [line type](javascript:call_link\('abenrow_type_glosry.htm'\) "Glossary Entry") of an internal table can be any data type. If the line type is structured, the individual components of a line are also referred to as the columns of the internal table.
    
-   Table category
    
    The [table category](javascript:call_link\('abentable_category_glosry.htm'\) "Glossary Entry") defines how an internal table is administered and how its individual lines can be accessed. There are three table categories:
    
    -   [Standard tables](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") are administered internally using a [primary table index](javascript:call_link\('abenprimary_table_index_glosry.htm'\) "Glossary Entry"), which can be implemented using a logical index if necessary. The table can be accessed using either a table index or a [table key](javascript:call_link\('abentable_key_glosry.htm'\) "Glossary Entry"). The primary key of a standard table is always non-unique. The response time for accessing the table using the primary key depends linearly on the number of entries in the table. [Secondary table keys](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") can be defined to make key access to standard tables more efficient.
    -   [Sorted tables](javascript:call_link\('abensorted_table_glosry.htm'\) "Glossary Entry") are also administered internally using a [primary table index](javascript:call_link\('abenprimary_table_index_glosry.htm'\) "Glossary Entry"). They are always sorted according to the [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry"). Sorting is in ascending order by size according to the [comparison rules](javascript:call_link\('abenlogexp_rules.htm'\)) for the data types of the key fields and returns the same result as the [SORT](javascript:call_link\('abapsort_itab.htm'\)) statement without specifying additions. The table can be accessed using either a table index or a [table key](javascript:call_link\('abentable_key_glosry.htm'\) "Glossary Entry"). The primary key of a sorted table can be either unique or non-unique. The response time for accessing the table using the primary key depends logarithmically on the number of table entries, since a binary search is used.
    -   [Hashed tables](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry") are administered internally using a [hash algorithm](javascript:call_link\('abenhash_algorithm_glosry.htm'\) "Glossary Entry"). Hashed tables can be accessed using a [table key](javascript:call_link\('abentable_key_glosry.htm'\) "Glossary Entry") or a [secondary table index](javascript:call_link\('abensecondary_table_index_glosry.htm'\) "Glossary Entry"). The primary key of hashed tables is always unique. The response time for primary key access is constant and independent of the number of entries in the table.
-   Table key
    
    A [table key](javascript:call_link\('abentable_key_glosry.htm'\) "Glossary Entry") is used to identify lines in a table (see below). There are two possible key types for internal tables: [primary keys](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") and optional [secondary keys](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry"). Every internal table has a primary key, which is either the [standard key](javascript:call_link\('abenstandard_key_glosry.htm'\) "Glossary Entry") or a self-defined key. Depending on the table category, the primary key can be defined as unique or non-unique. A secondary key is either a sorted key, which can be unique or non-unique, or a unique hash key. If keys are unique, a line with a specific content in the [key fields](javascript:call_link\('abenkey_field_glosry.htm'\) "Glossary Entry") can exist only once in the internal table. A table key can consist of components of the line type or of the entire line ( [pseudo component](javascript:call_link\('abenpseudo_component_glosry.htm'\) "Glossary Entry") table\_line) if they are not internal tables or do not contain internal tables. When a table key is defined, the order of the key fields is significant.
    

Unlike all other self-defined data types, a table type defined in the ABAP Dictionary or using [TYPES](javascript:call_link\('abaptypes_itab.htm'\)) does not have to be specified completely. Either only the keys or the line type and the keys can remain unspecified. This makes the type generic and it can be used only for [typings](javascript:call_link\('abentyping_glosry.htm'\) "Glossary Entry") of field symbols and formal parameters. The predefined [generic ABAP types](javascript:call_link\('abenbuilt_in_types_generic.htm'\)) ANY TABLE and INDEX TABLE can be used for this purpose. The first type includes all table categories and the second type includes standard tables and sorted tables, known as [index tables](javascript:call_link\('abenindex_table_glosry.htm'\) "Glossary Entry").

Like [strings](javascript:call_link\('abenstring_glosry.htm'\) "Glossary Entry"), internal tables are [dynamic data objects](javascript:call_link\('abendynamic_data_object_glosry.htm'\) "Glossary Entry"). Their line type, table category, and table key are always specified completely, but the number of lines is variable and restricted only by the capacity restrictions of specific system installations (see [Maximum Size of Dynamic Data Objects](javascript:call_link\('abenmemory_consumption_2.htm'\))).

Hint

Table keys are evaluated when [typing](javascript:call_link\('abentyping_glosry.htm'\) "Glossary Entry") is checked. Only actual parameters that have the same keys can be assigned to a formal parameter or a field symbol whose table type has a non-generic primary key or one or more secondary keys.

Example

Definition of a table type spfli\_tab with the structured line type SPFLI from the ABAP Dictionary, the table category hashed table, a unique primary key, and exactly one non-unique sorted secondary key cities.

TYPES spfli\_tab
  TYPE HASHED TABLE OF spfli
       WITH UNIQUE KEY carrid connid
       WITH NON-UNIQUE SORTED KEY cities COMPONENTS cityfrom cityto
       WITHOUT FURTHER SECONDARY KEYS.