  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews.htm) →  [Changes in Releases 6.xx](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-6.htm) →  [Changes in Release 6.40](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-640.htm) → 

File Interfaces in Release 6.40

[1\. New statement TRUNCATE DATASET](#!ABAP_MODIFICATION_1@1@)
[
2\. New addition NO END OF LINE in TRANSFER](#!ABAP_MODIFICATION_2@2@)
[
3\. Change to addition POSITION END-OF-FILE](#!ABAP_MODIFICATION_3@3@)

Modification 1

\- New statement TRUNCATE DATASET

The new statement [TRUNCATE DATASET](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptruncate.htm) sets the end of file to a specified item, therefore shortening or lengthening a file.

Modification 2

\- New addition NO END OF LINE in TRANSFER

The new addition NO END OF LINE to statement [TRANSFER](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptransfer.htm) prevents that for a [text file](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_file_glosry.htm "Glossary Entry") or [legacy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlegacy_file_glosry.htm "Glossary Entry") text file, an end-of-line-selection is added to the data to be transferred.

Modification 3

\- Change to addition POSITION END-OF-FILE

In the statement [SET DATASET](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_dataset.htm), the name of the POSITION END-OF-FILE addition is changed for uniformity reasons to POSITION END OF FILE. The END-OF-FILE spelling is still supported for compatibility reasons, but is no longer documented and no longer recommended.