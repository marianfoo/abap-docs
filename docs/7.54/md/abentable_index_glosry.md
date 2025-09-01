  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_glossary.htm) → 

table index

An [index](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenindex_glosry.htm "Glossary Entry") of an [internal table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_table_glosry.htm "Glossary Entry"), managed by the [ABAP runtime environment](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_runtime_envir_glosry.htm "Glossary Entry"). A [primary table index](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprimary_table_index_glosry.htm "Glossary Entry") is used for [index tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenindex_table_glosry.htm "Glossary Entry") and [secondary table indexes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_table_index_glosry.htm "Glossary Entry") are used for the management of [sorted](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensorted_key_glosry.htm "Glossary Entry") [secondary table keys](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_table_index_glosry.htm "Glossary Entry"). The row numbers of every table index start at 1 and run consecutively and with no gaps, up to the current number of rows in the table. If necessary, the physical index is changed to a logical index, which increases runtime. The logical index is created in precisely the moment in which a row is inserted before another row, the order of the table rows is changed, or if any row except for the bottom row is deleted.

[→ More](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_key_memory.htm)