  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_glossary.htm) → 

primary table key

Each [internal table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_table_glosry.htm "Glossary Entry") has a primary [table key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_key_glosry.htm "Glossary Entry") that is either a self-defined key or the [standard key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstandard_key_glosry.htm "Glossary Entry"). In [hashed tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhashed_table_glosry.htm "Glossary Entry"), the primary key is a [hash key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhash_key_glosry.htm "Glossary Entry") and in [sorted tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensorted_table_glosry.htm "Glossary Entry"), the primary key is a [sorted key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensorted_key_glosry.htm "Glossary Entry"). Both of these table categories are [key tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenkey_table_glosry.htm "Glossary Entry") for which key access is optimized and where the primary key has its own administration. The key fields of these tables are read-only when individual rows are accessed. [Standard tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstandard_table_glosry.htm "Glossary Entry") also have a primary key, but the corresponding access is not optimized, there is no separate key administration, and the key fields are not read-only.

[→ More](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab_key_primary.htm)