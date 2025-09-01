  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sorted%20key%2C%20ABENSORTED_KEY_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sorted key

Unique or non-unique [table key](javascript:call_link\('abentable_key_glosry.htm'\) "Glossary Entry") of an [internal table](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry"), in which the assignment to the table lines is managed using a [table index](javascript:call_link\('abentable_index_glosry.htm'\) "Glossary Entry"), the key entries of which are sorted in ascending order. A sorted key is the [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") of a [sorted table](javascript:call_link\('abensorted_table_glosry.htm'\) "Glossary Entry") and can be assigned to all internal tables as a [secondary table key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry"). Sorting occurs according to the [comparison rules](javascript:call_link\('abenlogexp_rules.htm'\)) for the data types of the key fields. When an internal table is accessed using a sorted key, the response time logarithmically depends on the number of table entries because the table is accessed using a binary search.