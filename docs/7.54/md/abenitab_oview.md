  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) → 

Internal Tables - Overview

Internal tables provide a means of taking variable data from a fixed structure and storing it in working memory in ABAP. An internal table is a data object that contain any rows with any data type whose total is not defined statically. The data type of an internal table is a table type. As well as the row type, the table type also defines the [table category](javascript:call_link\('abentable_category_glosry.htm'\) "Glossary Entry") and the [table key](javascript:call_link\('abentable_key_glosry.htm'\) "Glossary Entry").

Internal tables offer dynamic arrays and removes the task of program-driven dynamic memory management from the programmer (see [Memory Consumption of Deep Data Objects](javascript:call_link\('abenmemory_consumption.htm'\))). A particularly important use for internal tables is for storing and formatting data from a database table within a program. In conjunction with [structures](javascript:call_link\('abendata_objects_structure.htm'\)), they are also the best way of defining complicated data structures in an ABAP program.

-   [Internal Tables - Data Type](javascript:call_link\('abenitab_data_type.htm'\))

-   [Internal Tables - Table Category](javascript:call_link\('abenitab_kind.htm'\))

-   [Internal Tables - Table Key](javascript:call_link\('abenitab_key.htm'\))

-   [Internal Tables - Access](javascript:call_link\('abenitab_access.htm'\))

-   [Row-Based Administration Costs of Internal Tables](javascript:call_link\('abenitab_key_memory.htm'\))

Notes

-   For information about the maximum size of an internal table, see [Maximum Size of Dynamic Data Objects](javascript:call_link\('abenmemory_consumption_2.htm'\)).

-   For information about obsolete headers of internal tables, see [Internal Tables with Header](javascript:call_link\('abenitab_header_line.htm'\)).

Continue
[Data Type of an Internal Table](javascript:call_link\('abenitab_data_type.htm'\))
[Selection of Table Category](javascript:call_link\('abenitab_kind.htm'\))
[Table Keys](javascript:call_link\('abenitab_key.htm'\))
[Access to Internal Tables](javascript:call_link\('abenitab_access.htm'\))
[Row-Based Administration Costs of Internal Tables](javascript:call_link\('abenitab_key_memory.htm'\))