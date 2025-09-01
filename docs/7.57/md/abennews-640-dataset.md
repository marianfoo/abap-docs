  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 6.xx](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-6.htm) →  [News for Release 6.40](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-640.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: File Interface in Release 6.40, ABENNEWS-640-DATASET, 757%0D%0A%0D%0AError:%0D%0A%0D%
0A%0D%0A%0D%0ASuggestion for improvement:)

File Interface in Release 6.40

[1\. New Statement TRUNCATE DATASET](#!ABAP_MODIFICATION_1@1@)
[2\. New Addition NO END OF LINE in TRANSFER](#!ABAP_MODIFICATION_2@2@)
[3\. Change to the Addition POSITION END-OF-FILE](#!ABAP_MODIFICATION_3@3@)

Modification 1   

New Statement TRUNCATE DATASET

The new statement [TRUNCATE DATASET](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptruncate.htm) sets the end of the file to a specified item, which truncates or expands the file.

Modification 2   

New Addition NO END OF LINE in TRANSFER

The new addition NO END OF LINE of the statement [TRANSFER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptransfer.htm) prevents an end of file marker from being appended to the transferred data in a [text file](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_file_glosry.htm "Glossary Entry") or [legacy](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlegacy_file_glosry.htm "Glossary Entry") text file.

Modification 3   

Change to the Addition POSITION END-OF-FILE

In the statement [SET DATASET](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_dataset.htm), the name of the addition POSITION END-OF-FILE has been changed to POSITION END OF FILE for consistency. The END-OF-FILE spelling is still supported for compatibility reasons, but is no longer documented and no longer recommended.