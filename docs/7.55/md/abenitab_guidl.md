  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Robust ABAP](javascript:call_link\('abenrobust_abap_guidl.htm'\)) → 

Internal Tables

An internal table is a dynamic data object consisting of a sequence of lines with the same data type. The data type of an internal table is a table type that has the following basic properties of every internal table:

-   line type

The line type can be any data type. In particular, tables of

elementary types, tables of structures, tables of tables, and

tables or references are all possible.

-   Table category

The table category specifies the storage method and primary access method. The possible table categories are:

-   Standard tables administered using a primary table index and which cannot have a unique primary table key.

-   Sorted tables administered using a primary table index and that can have a unique or non-unique primary table key (used to sort the table).

-   Hashed tables whose primary table key always has to be unique and which use a hash algorithm (distributed memory management) to administer their lines. A hashed table does not have a primary table index.

-   Primary table key

Every internal table has a primary table key. A table key consists of columns from the internal table. The content of these columns identifies table lines. The table category determines whether a key is unique or non-unique.

Internal tables enable variable datasets (a variable number of lines) with a fixed structure (the line type) to be processed in the working memory of the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") of a program. The content of an internal table can either be accessed sequentially in a LOOP or by accessing individual lines (for example, by using READ TABLE or a table expression).

There are two ways of accessing individual lines:

-   By specifying a key (a table key or a free key)

-   By specifying a line index

Primary table access is possible for all three table categories. Access using the primary key, however, is optimized only for sorted tables and hashed tables. In standard tables, primary key access uses a linear search. Access using the primary line index, on the other hand, is possible for standard tables and sorted tables only. As well as its primary key, an internal key can also have further secondary keys. These keys enhance and optimize access options to the various table categories.

-   [Selecting the Table Category](javascript:call_link\('abenselect_table_type_guidl.htm'\) "Guideline")

-   [Secondary Keys](javascript:call_link\('abensecondary_key_guidl.htm'\) "Guideline")

-   [Initial Memory Requirements](javascript:call_link\('abeninitial_memory_requ_guidl.htm'\) "Guideline")

-   [Sorted Filling](javascript:call_link\('abensort_guidl.htm'\) "Guideline")

-   [Compressed Filling](javascript:call_link\('abencollect_guidl.htm'\) "Guideline")

-   [Target Area](javascript:call_link\('abentable_output_guidl.htm'\) "Guideline")

-   [Loop Processing](javascript:call_link\('abenloop_guidl.htm'\) "Guideline")

Continue
[Selecting the Table Category](javascript:call_link\('abenselect_table_type_guidl.htm'\))
[Secondary Key](javascript:call_link\('abensecondary_key_guidl.htm'\))
[Initial Memory Requirements](javascript:call_link\('abeninitial_memory_requ_guidl.htm'\))
[Sorted Filling](javascript:call_link\('abensort_guidl.htm'\))
[Collected Filling](javascript:call_link\('abencollect_guidl.htm'\))
[Target Area](javascript:call_link\('abentable_output_guidl.htm'\))
[Loop Processing](javascript:call_link\('abenloop_guidl.htm'\))