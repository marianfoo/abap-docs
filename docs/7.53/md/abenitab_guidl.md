  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrobust_abap_guidl.htm) → 

Internal Tables

An internal table is a dynamic data object consisting of a sequence of rows with the same data type. The data type of an internal table is a table type that has the following basic properties of every internal table:

-   Row type

The row type can be any data type. In particular, tables of

elementary types, tables of structures, tables of tables, and

tables or references are all possible.

-   Table category

The table category specifies the storage method and primary access method. The possible table categories are:

-   Standard tables administered using a primary table index and which cannot have a unique primary table key.

-   Sorted tables administered using a primary table index and that can have a unique or non-unique primary table key (used to sort the table).

-   Hashed tables whose primary table key always has to be unique and which use a hash algorithm (distributed memory management) to administer their rows. A hashed table does not have a primary table index.

-   Primary table key

Every internal table has a primary table key. A table key consists of columns from the internal table. The content of these columns identifies table rows. The table category determines whether a key is unique or non-unique.

Internal tables enable variable datasets (a variable number of rows) with a fixed structure (the row type) to be edited in the working memory of the [internal session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_session_glosry.htm "Glossary Entry") of a program. The content of an internal table can either be accessed sequentially in a LOOP or by accessing individual rows (for example, by using READ TABLE or a table expression).

There are two ways of accessing individual rows:

-   By specifying a key (a table key or a free key)

-   By specifying a row index

Primary table access is possible for all three table categories. Access using the primary key, however, is optimized only for sorted tables and hashed tables. In standard tables, primary key access uses a linear search. Access using the primary row index, on the other hand, is possible for standard tables and sorted tables only. As well as its primary key, an internal key can also have further secondary keys. These keys enhance and optimize access options to the various table categories.

-   [Selecting the Table Category](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_table_type_guidl.htm "Guideline")

-   [Secondary Keys](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensecondary_key_guidl.htm "Guideline")

-   [Initial Memory Requirements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninitial_memory_requ_guidl.htm "Guideline")

-   [Sorted Filling](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensort_guidl.htm "Guideline")

-   [Compressed Filling](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencollect_guidl.htm "Guideline")

-   [Output Behavior](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_output_guidl.htm "Guideline")

-   [Loop Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenloop_guidl.htm "Guideline")

Continue
[Selecting the Table Category](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_table_type_guidl.htm)
[Secondary Key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensecondary_key_guidl.htm)
[Initial Memory Requirements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninitial_memory_requ_guidl.htm)
[Sorted Filling](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensort_guidl.htm)
[Collected Filling](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencollect_guidl.htm)
[Output Behavior](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_output_guidl.htm)
[Loop Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenloop_guidl.htm)