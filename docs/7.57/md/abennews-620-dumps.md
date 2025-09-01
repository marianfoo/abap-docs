  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [News for Release 6.20](javascript:call_link\('abennews-620.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Short Dumps in Release 6.20, ABENNEWS-620-DUMPS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D
%0A%0D%0ASuggestion for improvement:)

Short Dumps in Release 6.20

[1\. Displaying Work Areas](#!ABAP_MODIFICATION_1@1@)
[2\. Selected Variables](#!ABAP_MODIFICATION_2@2@)
[3\. SNAP Variables](#!ABAP_MODIFICATION_3@3@)
[4\. Display Languages](#!ABAP_MODIFICATION_4@4@)

Modification 1   

Displaying Work Areas

The system now only displays processed work areas, and the [data area](javascript:call_link\('abendata_area_glosry.htm'\) "Glossary Entry") directory no longer exists. Instead, only the directory of application tables is displayed, including their administration information.

Modification 2   

Selected Variables

The display of selected variables has been improved. The data for all call levels is now displayed, whereas previously only the uppermost call level was displayed. A display of all active calls can be viewed under application calls.

Modification 3   

SNAP Variables

The SNAP variable list contains the data for the short dump in compact form, without explanatory text. This data can be stored locally on the front end. Due to the shorter representation, this format is suitable for sending, for example as an attachment in a customer problem message.

Modification 4   

Display Languages

When [short dumps](javascript:call_link\('abenshort_dump_glosry.htm'\) "Glossary Entry") are displayed, the system now also respects the second language, stored in the [profile parameter](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") zcsa/second\_language. If no text is found, a note can be created and referred to in the standard text. The search for the short dump text is performed in the following order with respect to language version:

1.  Search for text in logon language
2.  Search for text in second language
3.  Search for text in English
4.  Search for standard text including note created
5.  Search for standard text

As soon as a text is found, the system stops the search and displays the text.