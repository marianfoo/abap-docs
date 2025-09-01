---
title: "Code Pages for Files"
description: |
  Background When you open text files on the host computer(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhost_computer_glosry.htm 'Glossary Entry') of the current AS instance using the OPEN DATASET statement, you specify the following options that are very important for internationa
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencodepage_file_guidl.htm"
abapFile: "abencodepage_file_guidl.htm"
keywords: ["select", "insert", "do", "if", "try", "data", "abencodepage", "file", "guidl"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrobust_abap_guidl.htm) →  [Internationalization](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninternationalization_guidl.htm) → 

Code Pages for Files

Background

When you open text files on the [host computer](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhost_computer_glosry.htm "Glossary Entry") of the current AS instance using the OPEN DATASET statement, you specify the following options that are very important for internationalization:

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