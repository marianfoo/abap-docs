  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: primary table key, ABENPRIMARY_TABLE_KEY_GLOSRY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D
%0A%0D%0ASuggestion for improvement:)

primary table key

Each [internal table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_table_glosry.htm "Glossary Entry") has a primary [table key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_key_glosry.htm "Glossary Entry") that is either a self-defined key or the [standard key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_key_glosry.htm "Glossary Entry"). In [hashed tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhashed_table_glosry.htm "Glossary Entry"), the primary key is a [hash key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhash_key_glosry.htm "Glossary Entry") and in [sorted tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensorted_table_glosry.htm "Glossary Entry"), the primary key is a [sorted key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensorted_key_glosry.htm "Glossary Entry"). Both table types are [key tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenkey_table_glosry.htm "Glossary Entry") for which key access is optimized, and the primary key thus has its own administration. The key fields of these tables are write-protected when individual lines are accessed. [Standard tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_table_glosry.htm "Glossary Entry") also have a primary key, but the corresponding access is not optimized, there is no separate key administration, and the key fields are not write-protected.

[→ More about](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_key_primary.htm)