  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) →  [News for ABAP Release 7.5x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-75.htm) →  [News for ABAP Release 7.50](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-750.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Further%20Changes%20in%20ABAP%20Release%207.50%2C%20ABENNEWS-750-OTHERS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Further Changes in ABAP Release 7.50

[1\. Specifying the Logon Language in SUBMIT VIA JOB](#!ABAP_MODIFICATION_1@1@)
[2\. Results Table in ADBC](#!ABAP_MODIFICATION_2@2@)
[3\. Short Texts in ABAP Doc](#!ABAP_MODIFICATION_3@3@)
[4\. Full Text Search in the Web Version of the ABAP Keyword Documentation](#!ABAP_MODIFICATION_4@4@)

Modification 1   

Specifying the Logon Language in SUBMIT VIA JOB

The new addition LANGUAGE of the statement [SUBMIT VIA JOB](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsubmit_via_job.htm) makes it possible to set the [logon language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogon_language_glosry.htm "Glossary Entry") of the background session, which was previously only possible when using the function module JOB\_SUBMIT directly.

Modification 2   

Results Table in ADBC

The method SET\_PARAM\_TABLE of the class CL\_SQL\_STATEMENT, used to access sets in [ADBC queries](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadbc_query.htm), now accepts sorted and hashed tables as well as standard tables.

Modification 3   

Short Texts in ABAP Doc

It is now possible to define short texts in [ABAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_doc_comment_glosry.htm "Glossary Entry") comments and synchronize them with the short texts of methods and function modules in ABAP Workbench.

Modification 4   

Full Text Search in the Web Version of the ABAP Keyword Documentation

Quotation marks (") can be placed around a search term in the input fields of the Web version of the ABAP keyword documentation to force a full text search. If there are no quotation marks, an index search is performed and a full text search is made only if the index search does not find any hits.

The full text search option has been available in the dialog box of the SAP GUI Version of the ABAP keyword documentation for some time now using radio buttons. From ABAP release 7.50, SP02 this function can also be accessed using quotation marks (") to enter a search term in the documentation display input field.