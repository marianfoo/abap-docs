  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Releases 4.xx](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-4.htm) →  [Changes in Releases 4.0 and 4.5](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-40.htm) → 

Processing Large Datasets in Release 4.0

General

You can manage large datasets in ABAP either as internal tables or [extract datasets](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenextract_dataset_glosry.htm "Glossary Entry").

Internal tables are dynamic sequential datasets whose rows all have the same structure and a key.

[Extracts](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenextract_glosry.htm "Glossary Entry") are dynamic sequential datasets whose rows can be structured differently. Extracts cannot be accessed using indexes or keys. They are always processed in a loop.

From Release 4.5A, the performance of some crucial operations on internal tables and extracts has improved significantly.

Description of Functions

New Index Management in Internal Tables

Until now, the cost of manipulating indexes increased in linear relation to the number of entries being inserted or deleted from [standard](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_table_glosry.htm "Glossary Entry") and [sorted tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensorted_table_glosry.htm "Glossary Entry"). From Release 4.5A, these index manipulation costs will only increase in logarithmic relation to the number of entries, mainly due to the fact that table indexes are now managed in tree form. This allows for more efficient insertion and deletion in very large standard and sorted tables.
[Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab.htm)

Accessing Individual Internal Table Entries Using Field Symbols

Until now, individual entries in internal tables could only be processed indirectly using separate work areas. From Release 4.5A, you can use field symbols to display internal table entries. You can now both read internal table entries and write to them as well. This allows for better performance when working with large and complex tables and makes processing nested internal tables considerably easier.

To assign a table row to a field symbol, use the following statements:
[LOOP AT itab ASSIGNING <fs>](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab.htm).
[READ TABLE itab ASSIGNING <fs>](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table.htm).

New Repository for Extracts

Until now, [extracts](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenextract_glosry.htm "Glossary Entry") were stored in SAP paging. In an effort to improve sorting and sequential processing performance, extracts of more than 500 kBytes are now stored directly in the file system.
Extracts

New External Sort Process for Internal Tables and Extracts

The main memory cannot sort large datasets all at once. Until now large datasets were sorted by the operating system's own platform-specific sort function. Now SAP's own platform-independent sort procedure is used. This reduces the costs of some sorting operations considerably.

Extracts stored in the file system are always resorted physically. Internal tables are sorted physically if they are longer than 2^19 rows or larger than 12 MB. Physical sorting reduces the costs of any follow-on sequential processing.