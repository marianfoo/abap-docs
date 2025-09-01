  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

table index

An [index](javascript:call_link\('abenindex_glosry.htm'\) "Glossary Entry") of an [internal table](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry"), managed by the [ABAP runtime environment](javascript:call_link\('abenabap_runtime_envir_glosry.htm'\) "Glossary Entry"). A [primary table index](javascript:call_link\('abenprimary_table_index_glosry.htm'\) "Glossary Entry") is used for [index tables](javascript:call_link\('abenindex_table_glosry.htm'\) "Glossary Entry") and [secondary table indexes](javascript:call_link\('abensecondary_table_index_glosry.htm'\) "Glossary Entry") are used for the management of [sorted](javascript:call_link\('abensorted_key_glosry.htm'\) "Glossary Entry") [secondary table keys](javascript:call_link\('abensecondary_table_index_glosry.htm'\) "Glossary Entry"). The row numbers of every table index start at 1 and run consecutively and with no gaps, up to the current number of rows in the table. If necessary, the physical index is changed to a logical index, which increases runtime. The logical index is created in precisely the moment in which a row is inserted before another row, the order of the table rows is changed, or if any row except for the bottom row is deleted.

[→ More](javascript:call_link\('abenitab_key_memory.htm'\))