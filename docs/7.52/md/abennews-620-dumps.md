  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [Changes in Release 6.20](javascript:call_link\('abennews-620.htm'\)) → 

Short Dumps in Release 6.20

[1\. Display of Work Areas](#!ABAP_MODIFICATION_1@1@)
[
2\. Selected Variables](#!ABAP_MODIFICATION_2@2@)
[
3\. SNAP Variable](#!ABAP_MODIFICATION_3@3@)
[
4\. Display Languages](#!ABAP_MODIFICATION_4@4@)

Modification 1

Display of Work Areas

The system now only displays processed work areas, and the [data area](javascript:call_link\('abendata_area_glosry.htm'\) "Glossary Entry") directory no longer exists. Instead you only see the directory of application tables including their administration information.

Modification 2

Selected Variables

The display of selected variables has been extended. You can now see the data for all call levels, whereas previously only the uppermost call level was displayed. You can see a display of all active calls under application calls.

Modification 3

SNAP Variable

The SNAP variable list contains the data for the short dump in compact form, without explanatory text. This data can be stored locally on the front end. Due to the shortened display, this format is suitable for sending, for example as an attachment in a customer problem message.

Modification 4

Display Languages

When [short dumps](javascript:call_link\('abenshort_dump_glosry.htm'\) "Glossary Entry") are displayed, the system now also takes the second language, stored in the [profile parameter](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") zcsa/second\_language, into account. If no text is found, you can create a note and refer to it in the standard text. The search for the short dump text is carried out in the following order, with regard to language version:

1.  Search for text in logon language
2.  Search for text in second language
3.  Search for text in English
4.  Search for standard text including note created
5.  Search for standard text

As soon as a text is found, the system stops the search and displays the text.