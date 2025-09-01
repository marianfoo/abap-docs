  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab.htm) →  [itab - Overview](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab_oview.htm) → 

itab - Table Type

A [table type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_type_glosry.htm "Glossary Entry") defined as a [DDIC table type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_table_type_glosry.htm "Glossary Entry") or using [TYPES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_itab.htm) or [DATA](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdata_itab.htm) is specified completely using:

-   Line type
    
    The [line type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrow_type_glosry.htm "Glossary Entry") of an internal table can be any data type. If the line type is structured, the individual components of a line are also referred to as the columns of the internal table.
    
-   Table category
    
    The [table category](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_category_glosry.htm "Glossary Entry") defines how an internal table is administered and how its individual lines can be accessed. There are three table categories:
    
    -   [Standard tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_table_glosry.htm "Glossary Entry") are administered internally using a [primary table index](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprimary_table_index_glosry.htm "Glossary Entry"), which can be implemented using a logical index if necessary. The table can be accessed using either a table index or a [table key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_key_glosry.htm "Glossary Entry"). The primary key of a standard table is always non-unique. The response time for accessing the table using the primary key depends linearly on the number of entries in the table. [Secondary table keys](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") can be defined to make key access to standard tables more efficient.
    -   [Sorted tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensorted_table_glosry.htm "Glossary Entry") are also administered internally using a [primary table index](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprimary_table_index_glosry.htm "Glossary Entry"). They are always sorted according to the [primary table key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprimary_table_key_glosry.htm "Glossary Entry"). Sorting is in ascending order by size according to the [comparison rules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp_rules.htm) for the data types of the key fields and returns the same result as the [SORT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsort_itab.htm) statement without specifying additions. The table can be accessed using either a table index or a [table key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_key_glosry.htm "Glossary Entry"). The primary key of a sorted table can be either unique or non-unique. The response time for accessing the table using the primary key depends logarithmically on the number of table entries, since a binary search is used.
    -   [Hashed tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhashed_table_glosry.htm "Glossary Entry") are administered internally using a [hash algorithm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhash_algorithm_glosry.htm "Glossary Entry"). Hashed tables can be accessed using a [table key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_key_glosry.htm "Glossary Entry") or a [secondary table index](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensecondary_table_index_glosry.htm "Glossary Entry"). The primary key of hashed tables is always unique. The response time for primary key access is constant and independent of the number of entries in the table.
-   Table key
    
    A [table key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_key_glosry.htm "Glossary Entry") is used to identify lines in a table (see below). There are two possible key types for internal tables: [primary keys](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") and optional [secondary keys](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensecondary_table_key_glosry.htm "Glossary Entry"). Every internal table has a primary key, which is either the [standard key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_key_glosry.htm "Glossary Entry") or a self-defined key. Depending on the table category, the primary key can be defined as unique or non-unique. A secondary key is either a sorted key, which can be unique or non-unique, or a unique hash key. If keys are unique, a line with a specific content in the [key fields](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenkey_field_glosry.htm "Glossary Entry") can exist only once in the internal table. A table key can consist of components of the line type or of the entire line ( [pseudo component](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpseudo_component_glosry.htm "Glossary Entry") table\_line) if they are not internal tables or do not contain internal tables. When a table key is defined, the order of the key fields is significant.
    

Unlike all other self-defined data types, a table type defined in the ABAP Dictionary or using [TYPES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_itab.htm) does not have to be specified completely. Either only the keys or the line type and the keys can remain unspecified. This makes the type generic and it can be used only for [typings](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentyping_glosry.htm "Glossary Entry") of field symbols and formal parameters. The predefined [generic ABAP types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuilt_in_types_generic.htm) ANY TABLE and INDEX TABLE can be used for this purpose. The first type includes all table categories and the second type includes standard tables and sorted tables, known as [index tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenindex_table_glosry.htm "Glossary Entry").

Like [strings](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_glosry.htm "Glossary Entry"), internal tables are [dynamic data objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynamic_data_object_glosry.htm "Glossary Entry"). Their line type, table category, and table key are always specified completely, but the number of lines is variable and restricted only by the capacity restrictions of specific system installations (see [Maximum Size of Dynamic Data Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmemory_consumption_2.htm)).

Hint

Table keys are evaluated when [typing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentyping_glosry.htm "Glossary Entry") is checked. Only actual parameters that have the same keys can be assigned to a formal parameter or a field symbol whose table type has a non-generic primary key or one or more secondary keys.

Example

Definition of a table type spfli\_tab with the structured line type SPFLI from the ABAP Dictionary, the table category hashed table, a unique primary key, and exactly one non-unique sorted secondary key cities.

TYPES spfli\_tab
  TYPE HASHED TABLE OF spfli
       WITH UNIQUE KEY carrid connid
       WITH NON-UNIQUE SORTED KEY cities COMPONENTS cityfrom cityto
       WITHOUT FURTHER SECONDARY KEYS.