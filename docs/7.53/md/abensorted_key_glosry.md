  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_glossary.htm) → 

sorted key

Unique or non-unique [table key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_key_glosry.htm "Glossary Entry") of an [internal table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_table_glosry.htm "Glossary Entry"), in which the assignment to the table rows is managed using a [table index](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_index_glosry.htm "Glossary Entry"). The key entries of this index are sorted in ascending order. A sorted key is the [primary table key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") of a [sorted table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensorted_table_glosry.htm "Glossary Entry") and can be assigned to all internal tables as a [secondary table key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensecondary_table_key_glosry.htm "Glossary Entry"). Sorting occurs according to the [comparison rules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_rules.htm) for the data types of the key fields. When an internal table is accessed using a sorted key, the response time has a logarithmic relation to the number of table entries, since the table is accessed using a binary search.