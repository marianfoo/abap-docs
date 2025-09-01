  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

SYSTEM-CALL - Run-Time Type Identification (RTTI)

This statement is intended solely for
\*\*\* Internal use within SAP Basis Development \*\*\*
Even within SAP Basis, it may be used only in programs within the ABAP+GUI dvelopment groups.
Its use is subject to various restrictions, some of which may not be described in the documentation . This documentation is intended for internal SAP use within the Basis development group ABAP+GUI.
Changes and further developments, which may be incompatible, can occur at any time without prior notice!

Variants:

[1\. SYSTEM-CALL DESCRIBE ADMINISTRATION MODE f1 OF f2 INTO f3 f4 f5.](#!ABAP_VARIANT_1@1@)
[2\. SYSTEM-CALL DESCRIBE NAVIGATION MODE f1 FROM f2 TO f3 f4 INTO f5 f6 f7.](#!ABAP_VARIANT_2@2@)
[3\. SYSTEM-CALL DESCRIBE APPLIES f1 TO f2 RESULT f3.](#!ABAP_VARIANT_3@3@)
[4\. SYSTEM-CALL DESCRIBE APPLIES f1 TO CLASS f2 RESULT f3.](#!ABAP_VARIANT_4@4@)
[5\. SYSTEM-CALL DESCRIBE ELEMENTARY f1 INTO f2 f3 f4 f5 f6 f7 f8.](#!ABAP_VARIANT_5@5@)
[6\. SYSTEM-CALL DESCRIBE REFERENCE f1 INTO f2 f3 f4 f5.](#!ABAP_VARIANT_6@6@)
[7\. SYSTEM-CALL DESCRIBE STRUCTURE f1 INTO f2 f3 f4 f5 f6 f7.](#!ABAP_VARIANT_7@7@)
[8\. SYSTEM-CALL DESCRIBE TABLE f1 INTO f2 f3 f4 f5 f6 f7 f8 f9 f10.](#!ABAP_VARIANT_8@8@)
[9\. SYSTEM-CALL DESCRIBE CLASS f1 INTO f2 f3 f4 f5 f6 f7 f8 f9 f10 f11 f12 f13 f14.](#!ABAP_VARIANT_9@9@)
[10\. SYSTEM-CALL DESCRIBE INTERFACE f1 INTO f2 f3 f4 f5 f6 f7 f8 f9 f10 f11.](#!ABAP_VARIANT_10@10@)

Variant 1

SYSTEM-CALL DESCRIBE ADMINISTRATION MODE f1 OF f2 INTO f3 f4 f5.

Variant 2

SYSTEM-CALL DESCRIBE NAVIGATION MODE f1 FROM f2 TO f3 f4 INTO f5 f6 f7.

Variant 3

SYSTEM-CALL DESCRIBE APPLIES f1 TO f2 RESULT f3.

Variant 4

SYSTEM-CALL DESCRIBE APPLIES f1 TO CLASS f2RESULT f3.

Variant 5

SYSTEM-CALL DESCRIBE ELEMENTARY f1 INTO f2 f3 f4 f5 f6 f7 f8.

Variant 6

SYSTEM-CALL DESCRIBE REFERENCE f1 INTO f2 f3 f4 f5.

Variant 7

SYSTEM-CALL DESCRIBE STRUCTURE f1 INTO f2 f3 f4 f5 f6 f7.

Variant 8

SYSTEM-CALL DESCRIBE TABLE f1 INTO f2 f3 f4 f5 f6 f7 f8 f9 f10.

Variant 9

SYSTEM-CALL DESCRIBE CLASS f1 INTO f2 f3 f4 f5 f6 f7 f8 f9 f10 f11 f12 f13 f14.

Variant 10

SYSTEM-CALL DESCRIBE INTERFACE f1 INTO f2 f3 f4 f5 f6 f7 f8 f9 f10 f11.

Variants 1-10 are intended for [RTTS](javascript:call_link\('abenrun_time_type_services_glosry.htm'\) "Glossary Entry") system classes. They will become obsolete in the near future.