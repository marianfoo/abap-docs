  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) → 

itab - System Class CL\_ABAP\_ITAB\_UTILITIES

The class CL\_ABAP\_ITAB\_UTILITIES contains the following methods:

-   FLUSH\_ITAB\_KEY and FLUSH\_ITAB\_KEYS can be used to update individual [secondary table keys](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") or all secondary table keys of an internal table explicitly. Otherwise the update takes place as a [delayed](javascript:call_link\('abendelayed_update_glosry.htm'\) "Glossary Entry") or [lazy update](javascript:call_link\('abenlazy_update_glosry.htm'\) "Glossary Entry").
-   READ\_BINARY\_SEARCH\_CHECK can be used with the addition [BINARY SEARCH](javascript:call_link\('abapread_table_free.htm'\)) to activate checks on the required sort for test purposes. If the required sort does not exist, the runtime error ITAB\_ILLEGAL\_ORDER occurs when the check is activated.
-   HAS\_COLLECT\_HASH\_ADMIN can be used to check whether the temporary hash administration of the statement [COLLECT](javascript:call_link\('abapcollect.htm'\)) exists for a standard table.
-   INDEX\_HEALTH\_CHECK can be used to check the consistency of [primary](javascript:call_link\('abenprimary_table_index_glosry.htm'\) "Glossary Entry") and [secondary table indexes](javascript:call_link\('abensecondary_table_index_glosry.htm'\) "Glossary Entry").
-   VIRTUAL\_SORT can be used to perform virtual sorts on a set of internal tables with the same number of lines. The internal tables are handled internally like a single combined table containing all the columns of the involved internal tables. The result is an array of line numbers of the virtually sorted combined table. See the corresponding [executable examples](javascript:call_link\('abenvirtual_sort_abexas.htm'\)).

Continue
[itab - Examples of Virtual Sorts](javascript:call_link\('abenvirtual_sort_abexas.htm'\))