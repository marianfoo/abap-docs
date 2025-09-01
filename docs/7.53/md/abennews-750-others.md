  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews.htm) →  [Changes in Releases 7.5x](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-75.htm) →  [Changes in Release 7.50](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-750.htm) → 

Further Changes in Release 7.50

[1\. Specifying the text environment in SUBMIT VIA JOB](#!ABAP_MODIFICATION_1@1@)

[2\. Results table in ADBC](#!ABAP_MODIFICATION_2@2@)

[3\. Short texts in ABAP Doc](#!ABAP_MODIFICATION_3@3@)

[4\. Full text search in the Web version of the ABAP keyword documentation](#!ABAP_MODIFICATION_4@4@)

Modification 1

Specifying the Text Environment in SUBMIT VIA JOB

The new addition LANGUAGE of the statement [SUBMIT VIA JOB](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsubmit_via_job.htm) makes it possible to set the [text environment](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_environment.htm) of the called program, which was previously only possible when using the function module JOB\_SUBMIT directly.

Modification 2

Results Table in ADBC

The method SET\_PARAM\_TABLE of the class CL\_SQL\_STATEMENT, used to access sets in [ADBC queries](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenadbc_query.htm), now accepts sorted and hashed tables as well as standard tables.

Modification 3

Short Texts in ABAP Doc

It is now possible to define short texts in [ABAP comments](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_doc_comment_glosry.htm "Glossary Entry") and synchronize them with the short texts of methods and function modules in ABAP Workbench.

Modification 4

Full Text Search in the Web Version of the ABAP Keyword Documentation

Quotation marks (") can be placed around a search term in the input fields of the Web version of the ABAP keyword documentation to force a full text search. If there are no quotation marks, an index search is performed and a full text search is made only if the index search does not find any hits.

The full text search option has been available in the dialog box of the SAP GUI VERSION of the ABAP keyword documentation for some time now using radio buttons. From Release 7.50, SP02, this function can also be accessed using quotation marks (") to enter a search term in the documentation display input field.