  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

table index

An [index](javascript:call_link\('abenindex_glosry.htm'\) "Glossary Entry") of an [internal table](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry") managed by the [ABAP runtime framework](javascript:call_link\('abenabap_runtime_frmwk_glosry.htm'\) "Glossary Entry"). A [primary table index](javascript:call_link\('abenprimary_table_index_glosry.htm'\) "Glossary Entry") is used for [index tables](javascript:call_link\('abenindex_table_glosry.htm'\) "Glossary Entry") and [secondary table indexes](javascript:call_link\('abensecondary_table_index_glosry.htm'\) "Glossary Entry") are used for the management of [sorted](javascript:call_link\('abensorted_key_glosry.htm'\) "Glossary Entry") [secondary table keys](javascript:call_link\('abensecondary_table_index_glosry.htm'\) "Glossary Entry"). The line numbers of every table index start at 1 and run consecutively with no gaps up to the current number of lines in the table. If necessary, the physical index is changed to a logical index, which increases runtime demand. The logical index is created in exactly the moment in which a line is inserted before another line, the order of the table lines is changed, or if any line except for the bottom line is deleted.

[→ More about](javascript:call_link\('abenitab_access.htm'\))