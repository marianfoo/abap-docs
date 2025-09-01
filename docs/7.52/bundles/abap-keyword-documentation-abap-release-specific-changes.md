# ABAP - Keyword Documentation / ABAP - Release-Specific Changes

Included pages: 3


### abennwes-46-offset.htm

---
title: "nwes-46-offset"
description: |
  nwes-46-offset - ABAP 7.52 language reference documentation
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennwes-46-offset.htm"
abapFile: "abennwes-46-offset.htm"
keywords: ["do", "if", "abennwes", "offset"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Releases 4.xx](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-4.htm) →  [Changes in Release 4.6A](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-46a.htm) → 

Dynamic Access to Offsets and Lengths in Release 4.6A

Offsets/lengths specified dynamically enable a specific position to be accessed within a field or structure using values that are only known at runtime. This access type is available in Release 4.6A for all statements relating to fields.

Example:

g+off2(len2) = f+off1(len1).

Starting with offset off2 in length len2, the field g is assigned the content of field f starting with offset off1 in length len2. If the two field lengths are not identical, the remaining positions are cut off or padded with initial values. The fields f and g must have the type X, C, N, D, or T. Structures are also allowed.


### abennwes-46-debugger.htm

---
title: "String Processing"
description: |
  The display of the data types string and xstring can now be scrolled. You can position the cursor on the string by double-clicking it. Also, you can declare strings as watchpoints. Modification 2 Enhancements in ABAP Objects Static attributes(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennwes-46-debugger.htm"
abapFile: "abennwes-46-debugger.htm"
keywords: ["do", "if", "try", "data", "types", "abennwes", "debugger"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Releases 4.xx](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-4.htm) →  [Changes in Release 4.6A](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-46a.htm) → 

Debugger in Release 4.6A

For Release 4.6A, the ABAP Debugger has been enhanced to include the following functions:

[1\. String processing](#!ABAP_MODIFICATION_1@1@)

[2\. Enhancements in ABAP Objects](#!ABAP_MODIFICATION_2@2@)

[3\. Other features](#!ABAP_MODIFICATION_3@3@)

Modification 1

String Processing

The display of the data types string and xstring can now be scrolled. You can position the cursor on the string by double-clicking it. Also, you can declare strings as watchpoints.

Modification 2

Enhancements in ABAP Objects

[Static attributes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstatic_attribute_glosry.htm "Glossary Entry") and handlers of [static events](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstatic_event_glosry.htm "Glossary Entry") can now be displayed without specifying an instance. You can also find all references to a specific object. The same is valid for data references.

Modification 3

Other Features

The 'System Debugging' setting is also saved when you save breakpoints. A new pushbutton called 'Last [Short Dump](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshort_dump_glosry.htm "Glossary Entry")' is now available, which you can use to display the last runtime error generated. Alternatively, you can use transaction 'last\_shortdump'.


### abenportability.htm

---
title: "Notes on the Portability of ABAP"
description: |
  The nature of the ABAP runtime environment guarantees that ABAP programs can be supported by many different systems. There are only a few cases in which the porting of programs to other platforms could cause problems. Native SQL and AMDP Database-specific statements in ADBC, between EXEC SQL and END
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenportability.htm"
abapFile: "abenportability.htm"
keywords: ["select", "delete", "do", "while", "if", "case", "try", "method", "data", "types", "abenportability"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) → 

Notes on the Portability of ABAP

The nature of the ABAP runtime environment guarantees that ABAP programs can be supported by many different systems. There are only a few cases in which the porting of programs to other platforms could cause problems.

Native SQL and AMDP

Database-specific statements in ADBC, between EXEC SQL and ENDEXEC, or in [AMDP methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_method_glosry.htm "Glossary Entry") are the most critical factor for portability. - Whenever possible, ABAP Open SQL language elements should be used.

Files

The statements OPEN, CLOSE, TRANSFER, READ DATASET, and DELETE DATASET have a file name as parameter. This file name is passed directly to the underlying operating system. The organization of file systems ( [flat](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenflat_glosry.htm "Glossary Entry"), hierarchical, ...) and the form of valid file names, however, depend to a great extent on the operating system. The function module FILE\_GET\_NAME makes it possible to convert logical file names (platform-independent) to physical file names (platform-specific).

Numeric Format

The format of numeric types i and f can be represented by various byte sequences, and (with type f) the code itself. - Here, support is provided by the command TRANSLATE ... NUMBER FORMAT.

Numbers

While numbers of type p and i are handled in the same way on all platforms supported by SAP, there are differences when handling floating point numbers (type f). The value range (approximately 10\*\*(-308) to 10\*\*(+308)) and accuracy up to 15 decimal places is the same everywhere, but rounding behavior can vary. These differences should not have any serious consequences in practice, but it is not advisable to test two floating point numbers for equality, with the exception of zero; instead, check that the difference is only very small as shown below.

DATA: F        TYPE F,
      G        TYPE F,
      REL\_DIFF TYPE F,
      EPSILON TYPE F VALUE '1E-6'.
      REL\_DIFF = ABS( ( F - G ) / G ).
      IF REL\_DIFF < EPSILON. ...  ENDIF.

Alignment

Certain fields are [aligned](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenalignment_glosry.htm "Glossary Entry") at the half word or word limit in field strings. As a result, these field strings may contain leading bytes, even before the first field. Furthermore, some ABAP types differ depending on the platform. For this reason, always address components of a field string by name and not with an offset value, for example, T000-ORT01 rather than T000+28.

Character set

The set of available characters and their coding depends not only on the platform, but also on the country and language of installation. - The command TRANSLATE ... CODE PAGE enables texts to be converted from one coding to another.

Sorting

Only very limited assumptions can be made about the effect of sorting on the character sequence. For instance:

-   Lowercase letters can come before uppercase letters or vice versa.

-   Numbers can come before letters or vice versa.

-   While the numbers 0 to 9 follow each other with no gaps, this is not necessary for letters. Letters with an accent are not sorted.

These problems affect the statements SORT, READ TABLE ... BINARY SEARCH, and SELECT ... ORDER BY and the relational operators <, <=, \>, \>=, BT, and NB. Unfortunately, there is no general solution at present. There is a special solution for the [SORT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsort_itab.htm) command. This is "locale-friendly" sorting, using the addition AS TEXT.
