  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20primary%20table%20key%2C%20ABENPRIMARY_TABLE_KEY_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

primary table key

Each [internal table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_table_glosry.htm "Glossary Entry") has a primary [table key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_key_glosry.htm "Glossary Entry") that is either a user-defined key or the [standard key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_key_glosry.htm "Glossary Entry"). In [hashed tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhashed_table_glosry.htm "Glossary Entry"), the primary key is a [hash key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhash_key_glosry.htm "Glossary Entry") and in [sorted tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensorted_table_glosry.htm "Glossary Entry"), the primary key is a [sorted key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensorted_key_glosry.htm "Glossary Entry"). Both table types are [key tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenkey_table_glosry.htm "Glossary Entry") for which key access is optimized, and the primary key thus has its own administration. The key fields of these tables are write-protected when individual lines are accessed. [Standard tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_table_glosry.htm "Glossary Entry") also have a primary key, but the corresponding access is not optimized, there is no separate key administration, and the key fields are not write-protected.

[→ More about](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_key_primary.htm)