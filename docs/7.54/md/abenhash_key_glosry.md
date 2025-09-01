  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_glossary.htm) → 

hash key

Unique [table key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_key_glosry.htm "Glossary Entry") of an [internal table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_table_glosry.htm "Glossary Entry"), in which the assignment to the table rows is managed using a [hash algorithm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhash_algorithm_glosry.htm "Glossary Entry"). A hash key is the [primary table key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") of a [hashed table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhashed_table_glosry.htm "Glossary Entry") and can be assigned to every type of internal table as a [secondary table key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprimary_table_key_glosry.htm "Glossary Entry"). When an internal table is accessed using a hash key, the response time is constant, regardless of the number of table entries.