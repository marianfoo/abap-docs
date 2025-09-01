  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 6.xx](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-6.htm) →  [News for Release 6.10](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-610.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: File Interface in Release 6.10, ABENNEWS-610-DATASET, 757%0D%0A%0D%0AError:%0D%0A%0D%
0A%0D%0A%0D%0ASuggestion for improvement:)

File Interface in Release 6.10

The file interface in Release 6.10 has been completely overhauled. The changes and developments affect the following topics:

[1\. Adapting to Unicode](#!ABAP_MODIFICATION_1@1@)
[2\. Reading and Changing File Properties at Runtime](#!ABAP_MODIFICATION_2@2@)
[3\. New Classes for Converting Files](#!ABAP_MODIFICATION_3@3@)
[4\. Support for Files Greater than 2 Gigabytes](#!ABAP_MODIFICATION_4@4@)
[5\. Limiting Data Range when Reading Files](#!ABAP_MODIFICATION_5@5@)

Modification 1   

Adapting to Unicode

Extensive changes to the file interface have been made as a result of the switch to [Unicode](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunicode_glosry.htm "Glossary Entry").

Modification 2   

Reading and Changing File Properties at Runtime

The statement [GET DATASET ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_dataset.htm) returns both the current reading or write positions and the file properties. In turn, a required file position can be set at runtime using the statement [SET DATASET ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_dataset.htm). It is also possible to change the properties of the file, but the system only applies values compatible with the opening mode.

Modification 3   

New Classes for Converting Files

Three classes have been implemented for file conversion:

1.  CL\_ABAP\_CONV\_IN\_CE: Instances of this class enable the conversion of external binary data to valid ABAP data objects
2.  CL\_ABAP\_CONV\_OUT\_CE: Instances of this class convert ABAP data objects to binary data.
3.  CL\_ABAP\_CONV\_X2X\_CE: Instances of this class enable the text data of various character sets and the numeric data of various number formats to be transformed.

Modification 4   

Support for Files Greater than 2 Gigabytes

Files greater than 2 gigabytes can now be read and written on all platforms that support large files. Only the platforms OS/390 and IBM System i (previously AS/400) are currently not included in this change. Additionally, the statement [OPEN DATASET](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapopen_dataset.htm) has been enhanced in such a way that, when opening a file, the file pointer also addresses positions greater than 2 gigabytes.

Modification 5   

Limiting Data Range when Reading Files

The amount of data to be read can be limited using the addition [MAXIMUM LENGTH maxlen](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_dataset.htm). Depending on the mode in which the file was opened, maxlen defines the maximum number of characters or bytes that are to be read from the file.