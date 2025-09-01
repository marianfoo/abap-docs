  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) → 

Notes on the Portability of ABAP

The nature of the ABAP runtime environment guarantees that ABAP programs can be supported by many different systems. There are only a few cases in which the porting of programs to other platforms could cause problems.

Native SQL and AMDP

Database-specific statements in ADBC, between EXEC SQL and ENDEXEC, or in [AMDP methods](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") are the most critical factor for portability. - Whenever possible, ABAP Open SQL language elements should be used.

Files

The statements OPEN, CLOSE, TRANSFER, READ DATASET, and DELETE DATASET have a file name as parameter. This file name is passed directly to the underlying operating system. The organization of file systems ( [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry"), hierarchical, ...) and the form of valid file names, however, depend to a great extent on the operating system. The function module FILE\_GET\_NAME makes it possible to convert logical file names (platform-independent) to physical file names (platform-specific).

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

Certain fields are [aligned](javascript:call_link\('abenalignment_glosry.htm'\) "Glossary Entry") at the half word or word limit in field strings. As a result, these field strings may contain leading bytes, even before the first field. Furthermore, some ABAP types differ depending on the platform. For this reason, always address components of a field string by name and not with an offset value, for example, T000-ORT01 rather than T000+28.

Character set

The set of available characters and their coding depends not only on the platform, but also on the country and language of installation. - The command TRANSLATE ... CODE PAGE enables texts to be converted from one coding to another.

Sorting

Only very limited assumptions can be made about the effect of sorting on the character sequence. For instance:

-   Lowercase letters can come before uppercase letters or vice versa.

-   Numbers can come before letters or vice versa.

-   While the numbers 0 to 9 follow each other with no gaps, this is not necessary for letters. Letters with an accent are not sorted.

These problems affect the statements SORT, READ TABLE ... BINARY SEARCH, and SELECT ... ORDER BY and the relational operators <, <=, \>, \>=, BT, and NB. Unfortunately, there is no general solution at present. There is a special solution for the [SORT](javascript:call_link\('abapsort_itab.htm'\)) command. This is "locale-friendly" sorting, using the addition AS TEXT.