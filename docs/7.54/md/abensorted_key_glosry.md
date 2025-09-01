  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

sorted key

Unique or non-unique [table key](javascript:call_link\('abentable_key_glosry.htm'\) "Glossary Entry") of an [internal table](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry"), in which the assignment to the table rows is managed using a [table index](javascript:call_link\('abentable_index_glosry.htm'\) "Glossary Entry"). The key entries of this index are sorted in ascending order. A sorted key is the [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") of a [sorted table](javascript:call_link\('abensorted_table_glosry.htm'\) "Glossary Entry") and can be assigned to all internal tables as a [secondary table key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry"). Sorting occurs according to the [comparison rules](javascript:call_link\('abenlogexp_rules.htm'\)) for the data types of the key fields. When an internal table is accessed using a sorted key, the response time has a logarithmic relation to the number of table entries, since the table is accessed using a binary search.