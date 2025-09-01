  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Releases 6.xx](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-6.htm) →  [Changes in Release 6.10](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-610.htm) → 

File Interface in Release 6.10

The file interface in Release 6.10 has been completely overhauled. The changes and developments affect the following topics:

[1\. Adapting to Unicode](#!ABAP_MODIFICATION_1@1@)
[
2\. Reading and changing file properties at runtime](#!ABAP_MODIFICATION_2@2@)
[
3\. New classes for converting files](#!ABAP_MODIFICATION_3@3@)
[
4\. Support for files larger than 2 gigabytes](#!ABAP_MODIFICATION_4@4@)
[
5\. Limiting data range when reading files](#!ABAP_MODIFICATION_5@5@)

Modification 1

Adapting to Unicode

Extensive changes to the file interface have been made as a result of [the switch to Unicode](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunicode.htm).

Modification 2

Reading and changing file properties at runtime

The statement [GET DATASET ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_dataset.htm) returns both the current read or write positions and the file properties. In turn, a required file position can be set at runtime using the statement [SET DATASET ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_dataset.htm). It is also possible to change the properties of the file, but the system only applies values compatible with the opening mode.

Modification 3

New classes for converting files
Three classes have been implemented for file conversion:

1.  CL\_ABAP\_CONV\_IN\_CE: Instances of
    this class enable the conversion of external binary data to valid ABAP data objects
2.  CL\_ABAP\_CONV\_OUT\_CE: Instances of this class convert ABAP data objects to binary data.
3.  CL\_ABAP\_CONV\_X2X\_CE: Instances of this class enable the text data of various character sets and the numeric data of various number formats to be transformed.
    

Modification 4

Support for files larger than 2 gigabytes

Files larger than 2 gigabytes can now be read and written on all platforms that support large files. Only the platforms OS/390 and IBM System i (previously AS/400) are currently not included in this change. Additionally, the statement [OPEN DATASET](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset.htm) has been enhanced in such a way that, when opening a file, the file pointer also addresses positions larger than 2 gigabytes.

Modification 5

Limiting data range when reading files

The amount of data to be read can be limited using the addition [MAXIMUM LENGTH maxlen](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_dataset.htm). Depending on the mode in which the file was opened, maxlen defines the maximum number of characters or bytes that are to be read from the file.