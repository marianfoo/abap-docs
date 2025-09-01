  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.50](javascript:call_link\('abennews-750.htm'\)) → 

Further Changes in Release 7.50

[1\. Specifying the Logon Language in SUBMIT VIA JOB](#!ABAP_MODIFICATION_1@1@)
[2\. Results Table in ADBC](#!ABAP_MODIFICATION_2@2@)
[3\. Short Texts in ABAP Doc](#!ABAP_MODIFICATION_3@3@)
[4\. Full Text Search in the Web Version of the ABAP Keyword Documentation](#!ABAP_MODIFICATION_4@4@)

Modification 1   

Specifying the Logon Language in SUBMIT VIA JOB

The new addition LANGUAGE of the statement [SUBMIT VIA JOB](javascript:call_link\('abapsubmit_via_job.htm'\)) makes it possible to set the [logon language](javascript:call_link\('abenlogon_language_glosry.htm'\) "Glossary Entry") of the background session, which was previously only possible when using the function module JOB\_SUBMIT directly.

Modification 2   

Results Table in ADBC

The method SET\_PARAM\_TABLE of the class CL\_SQL\_STATEMENT, used to access sets in [ADBC queries](javascript:call_link\('abenadbc_query.htm'\)), now accepts sorted and hashed tables as well as standard tables.

Modification 3   

Short Texts in ABAP Doc

It is now possible to define short texts in [ABAP](javascript:call_link\('abenabap_doc_comment_glosry.htm'\) "Glossary Entry") comments and synchronize them with the short texts of methods and function modules in ABAP Workbench.

Modification 4   

Full Text Search in the Web Version of the ABAP Keyword Documentation

Quotation marks (") can be placed around a search term in the input fields of the Web version of the ABAP keyword documentation to force a full text search. If there are no quotation marks, an index search is performed and a full text search is made only if the index search does not find any hits.

The full text search option has been available in the dialog box of the SAP GUI Version of the ABAP keyword documentation for some time now using radio buttons. From Release 7.50, SP02 this function can also be accessed using quotation marks (") to enter a search term in the documentation display input field.