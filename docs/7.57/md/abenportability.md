  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Notes on the Portability of ABAP, ABENPORTABILITY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%
0D%0A%0D%0ASuggestion for improvement:)

Notes on the Portability of ABAP

The nature of the ABAP runtime framework guarantees that ABAP programs can be supported by many different systems. There are only a few cases in which the porting of programs to other platforms could cause problems.

Native SQL and AMDP

Database-specific statements in ADBC, between EXEC SQL and ENDEXEC, or in [AMDP methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_method_glosry.htm "Glossary Entry") are the most critical factor for portability. - Whenever possible, ABAP SQL language elements should be used.

Files

The statements OPEN, CLOSE, TRANSFER, READ DATASET, and DELETE DATASET have a file name as parameter. This file name is passed directly to the underlying operating system. The organization of file systems ( [flat](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenflat_glosry.htm "Glossary Entry"), hierarchical, ...) and the form of valid file names, however, depend to a great extent on the operating system. The function module FILE\_GET\_NAME makes it possible to convert logical file names (platform-independent) to physical file names (platform-dependent).

Numeric Format

The format of numeric types i and f can be represented by various byte sequences, and (with type f) the code itself. - Here, support is provided by the statement TRANSLATE ... NUMBER FORMAT.

Numbers

While numbers of type p and i are handled in the same way on all platforms supported by SAP, there are differences when handling floating point numbers (type f). The value range (approximately 10\*\*(-308) to 10\*\*(+308)) and accuracy up to 15 decimal places is the same everywhere, but rounding behavior can vary. These differences should not have any serious consequences in practice, but it is not advisable to test two floating point numbers for equality, with the exception of zero; instead, check that the difference is only very small as shown below.

Example

DATA: F        TYPE F,
      G        TYPE F,
      REL\_DIFF TYPE F,
      EPSILON TYPE F VALUE '1E-6'.
      REL\_DIFF = ABS( ( F - G ) / G ).
      IF REL\_DIFF < EPSILON. ...  ENDIF.

Alignment

Certain fields are [aligned](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenalignment_glosry.htm "Glossary Entry") in structures at the half word or word limit. As a result, these structures may contain padding bytes, even before the first field in the structure. Furthermore, some ABAP types differ depending on the platform. For this reason, always address components of a structure by name and not with an offset value, for example, t000-ort01 rather than t000+28.

Character Set

The set of available characters and their encoding depends not only on the platform, but also on the country and language of installation. - The statement TRANSLATE ... CODE PAGE enables texts to be converted from one coding to another.

Sorting

Only very limited assumptions can be made about the effect of sorting on the character sequence. For instance:

-   Lowercase letters can come before uppercase letters or vice versa.
-   Numbers can come before letters or vice versa.
-   While the numbers 0 to 9 follow each other with no gaps, this is not necessary for letters. Letters with an accent are not sorted.

These problems affect the statements SORT, READ TABLE ... BINARY SEARCH, and SELECT ... ORDER BY and the comparison operators <, <=, \>, \>=, BT, and NB. Unfortunately, there is no general solution at present. There is a special solution for the [SORT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsort_itab.htm) statement. This is "locale-friendly" sorting, using the addition AS TEXT.