  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [Changes in Release 6.40](javascript:call_link\('abennews-640.htm'\)) → 

File Interfaces in Release 6.40

[1\. New statement TRUNCATE DATASET](#!ABAP_MODIFICATION_1@1@)
[
2\. New addition NO END OF LINE in TRANSFER](#!ABAP_MODIFICATION_2@2@)
[
3\. Change to addition POSITION END-OF-FILE](#!ABAP_MODIFICATION_3@3@)

Modification 1

\- New statement TRUNCATE DATASET

The new statement [TRUNCATE DATASET](javascript:call_link\('abaptruncate.htm'\)) sets the end of file to a specified item, therefore shortening or lengthening a file.

Modification 2

\- New addition NO END OF LINE in TRANSFER

The new addition NO END OF LINE to statement [TRANSFER](javascript:call_link\('abaptransfer.htm'\)) prevents that for a [text file](javascript:call_link\('abentext_file_glosry.htm'\) "Glossary Entry") or [legacy](javascript:call_link\('abenlegacy_file_glosry.htm'\) "Glossary Entry") text file, an end-of-line-selection is added to the data to be transferred.

Modification 3

\- Change to addition POSITION END-OF-FILE

In the statement [SET DATASET](javascript:call_link\('abapset_dataset.htm'\)), the name of the POSITION END-OF-FILE addition is changed for uniformity reasons to POSITION END OF FILE. The END-OF-FILE spelling is still supported for compatibility reasons, but is no longer documented and no longer recommended.