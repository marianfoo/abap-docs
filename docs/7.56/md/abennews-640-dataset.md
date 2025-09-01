  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [News for Release 6.40](javascript:call_link\('abennews-640.htm'\)) → 

File Interface in Release 6.40

[1\. New Statement TRUNCATE DATASET](#!ABAP_MODIFICATION_1@1@)
[2\. New Addition NO END OF LINE in TRANSFER](#!ABAP_MODIFICATION_2@2@)
[3\. Change to the addition POSITION END-OF-FILE](#!ABAP_MODIFICATION_3@3@)

Modification 1   

New Statement TRUNCATE DATASET

The new statement [TRUNCATE DATASET](javascript:call_link\('abaptruncate.htm'\)) sets the end of the file to a specified item, which truncates or expands the file.

Modification 2   

New Addition NO END OF LINE in TRANSFER

The new addition NO END OF LINE of the statement [TRANSFER](javascript:call_link\('abaptransfer.htm'\)) prevents an end of file marker from being appended to the transferred data in a [text file](javascript:call_link\('abentext_file_glosry.htm'\) "Glossary Entry") or [legacy](javascript:call_link\('abenlegacy_file_glosry.htm'\) "Glossary Entry") text file.

Modification 3   

Change to the addition POSITION END-OF-FILE

In the statement [SET DATASET](javascript:call_link\('abapset_dataset.htm'\)), the name of the addition POSITION END-OF-FILE has been changed to POSITION END OF FILE for consistency. The END-OF-FILE spelling is still supported for compatibility reasons, but is no longer documented and no longer recommended.