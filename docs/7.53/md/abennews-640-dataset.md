  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews.htm) →  [Changes in Releases 6.xx](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-6.htm) →  [Changes in Release 6.40](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-640.htm) → 

File Interface in Release 6.40

[1\. New statement TRUNCATE DATASET](#!ABAP_MODIFICATION_1@1@)
[
2\. New addition NO END OF LINE in TRANSFER](#!ABAP_MODIFICATION_2@2@)
[
3\. Change to the addition POSITION END-OF-FILE](#!ABAP_MODIFICATION_3@3@)

Modification 1

New Statement TRUNCATE DATASET

The new statement [TRUNCATE DATASET](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptruncate.htm) sets the end of the file to a specified item, which truncates or expands the file.

Modification 2

New Addition NO END OF LINE in TRANSFER

The new addition NO END OF LINE of the statement [TRANSFER](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptransfer.htm) prevents an end of file marker from being appended to the transferred data in a [text file](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_file_glosry.htm "Glossary Entry") or [legacy](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlegacy_file_glosry.htm "Glossary Entry") text file.

Modification 3

Change to the addition POSITION END-OF-FILE

In the statement [SET DATASET](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_dataset.htm), the name of the addition POSITION END-OF-FILE has been changed to POSITION END OF FILE for consistency. The END-OF-FILE spelling is still supported for compatibility reasons, but is no longer documented and no longer recommended.