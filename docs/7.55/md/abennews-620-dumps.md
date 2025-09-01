  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews.htm) →  [Changes in Releases 6.xx](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-6.htm) →  [Changes in Release 6.20](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-620.htm) → 

Short Dumps in Release 6.20

[1\. Displaying work areas](#!ABAP_MODIFICATION_1@1@)
[2\. Selected variables](#!ABAP_MODIFICATION_2@2@)
[3\. SNAP variables](#!ABAP_MODIFICATION_3@3@)
[4\. Display languages](#!ABAP_MODIFICATION_4@4@)

Modification 1

Displaying Work Areas

The system now only displays processed work areas, and the [data area](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_area_glosry.htm "Glossary Entry") directory no longer exists. Instead, only the directory of application tables is displayed, including their administration information.

Modification 2

Selected Variables

The display of selected variables has been improved. The data for all call levels is now displayed, whereas previously only the uppermost call level was displayed. A display of all active calls can be viewed under application calls.

Modification 3

SNAP Variables

The SNAP variable list contains the data for the short dump in compact form, without explanatory text. This data can be stored locally on the front end. Due to the shortened display, this format is suitable for sending, for example as an attachment in a customer problem message.

Modification 4

Display Languages

When [short dumps](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshort_dump_glosry.htm "Glossary Entry") are displayed, the system now also respects the second language, stored in the [profile parameter](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") zcsa/second\_language. If no text is found, a note can be created and referred to in the standard text. The search for the short dump text is performed in the following order with respect to language version:

1.  Search for text in logon language
    
2.  Search for text in second language
    
3.  Search for text in English
    
4.  Search for standard text including note created
    
5.  Search for standard text
    

As soon as a text is found, the system stops the search and displays the text.