  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrobust_abap_gdl.htm) →  [Internationalization](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternationalization_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Code%20Pages%20for%20Files%2C%20ABENCODEPAGE_FILE_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Code Pages for Files

Background   

When you open text files on the [host computer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhost_computer_glosry.htm "Glossary Entry") of the current AS instance using the OPEN DATASET statement, you specify the following options that are very important for internationalization:

-   The ENCODING addition specifies the character representation where the content of the file is handled.
-   The WITH BYTE-ORDER MARK addition, which is only possible for UTF-8 files, specifies that a byte order mark (BOM) is inserted at the beginning of a text file when it is written.

If the code page is not specified explicitly when a file is written, it is set implicitly (to UTF-8 in a Unicode system). If nothing is specified, a BOM is not set.

Rule   

Write text files in UTF-8 and with a byte order mark.

Open text files for output explicitly in the UTF-8 code page. The byte order mark should be inserted and taken into account when the file is read.

Details   

When a file is read, the code page used is usually very difficult to identify. However, if the byte-order mark is inserted, a file is clearly defined as a UTF-8. Therefore, you should always specify the ENCODING UTF-8 WITH BYTE-ORDER MARK additions when opening a text output file with the OPEN DATASET statement. When a text file of this type is read, it should only be opened with the SKIPPING BYTE-ORDER MARK addition, so that the byte order mark is automatically skipped and does not appear in the read application data.

Exception

Files used for data exchange with applications that do not support UTF-8 format must be output in a suitable code page.

Bad Example

The following source code shows how a text file is opened for writes without explicitly specifying the code page. In Unicode systems, UTF-8 is selected implicitly, but a byte order mark is not inserted.

OPEN DATASET dset
  FOR OUTPUT IN TEXT MODE
  ENCODING DEFAULT.

Good Example

The following source code shows how a text file is opened for writes by explicitly specifying the UTF-8 code page and using the byte order mark.

OPEN DATASET dset
  FOR OUTPUT IN TEXT MODE
  ENCODING UTF-8 WITH BYTE-ORDER MARK.