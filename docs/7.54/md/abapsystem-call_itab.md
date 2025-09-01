---
title: "SYSTEM-CALL - Editing Internal Tables"
description: |
  This statement is intended solely for  Internal use within SAP Basis Development  Even within SAP Basis, it may be used only in programs within the ABAP+GUI dvelopment groups. Its use is subject to various restrictions, some of which may not be described in the documentation . This docum
version: "7.54"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsystem-call_itab.htm"
abapFile: "abapsystem-call_itab.htm"
keywords: ["delete", "do", "if", "internal-table", "field-symbol", "abapsystem", "call", "itab"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

SYSTEM-CALL - Editing Internal Tables

This statement is intended solely for
\*\*\* Internal use within SAP Basis Development \*\*\*
Even within SAP Basis, it may be used only in programs within the ABAP+GUI dvelopment groups.
Its use is subject to various restrictions, some of which may not be described in the documentation . This documentation is intended for internal SAP use within the Basis development group ABAP+GUI.
Changes and further developments, which may be incompatible, can occur at any time without prior notice!

Variants:

[1\. SYSTEM-CALL ITAB\_DELETE\_LIST TABLE itab1 INDEX-LIST itab2](#!ABAP_VARIANT_1@1@)
                                [*\[*NO-CHECK*\]* *\[*USING KEY key*\]*.](#!ABAP_VARIANT_1@1@)
[2\. SYSTEM-CALL ITAB\_INFO TABLE itab1 OPCODE op](#!ABAP_VARIANT_2@2@)
                                     [*{*VALUE f*|*PROTOCOL itab2*}*.](#!ABAP_VARIANT_2@2@)

Variant 1

SYSTEM-CALL ITAB\_DELETE\_LIST TABLE itab1 INDEX-LIST itab2
                                *\[*NO-CHECK*\]* *\[*USING KEY key*\]*.

Effect

The rows of the internal table itab1 are deleted whose row numbers are specified in the internal table itab2
The row number table itab2 must have the row type i and must contain the numbers of the rows pending deletion in ascending order (and non-duplicated). This means itab2 must contain a strict ascending sequence of numbers from 1 to row number(itab2). If not, a runtime error is triggered.
If the optional addition NO-CHECK is specified, the caller is responsible for guaranteeing that the row number table itab2 contains only valid row numbers in strict ascending order.
The optional addition USING KEY can be used to determine the table key that deletes the rows specified in the parameter TABLE t.

Variant 2

SYSTEM-CALL ITAB\_INFO TABLE itab1 OPCODE op
                                  *{*VALUE f*|*PROTOCOL itab2*}*.

Effect

Provides information from the header of the internal table itab1. The field OPCODE is used to define which information is taken from the header. Depending on the setting of OPCODE, the results are passed either to the field f or to the log table itab2.
The field f must be of type i and itab2 must be a table across the row type c with length 72.
At present, the following OPCODEs are supported:

'IT\_OCCU'

Passes the actual value of OCCURS used in the table itab1 to the field f.

'IT\_HSDIR'

Passes the value 1 (if internal COLLECT hash management exists for table itab1) or 0 (if it no longer exists or never existed) to the field f.

'IT\_FSREGCNT'

Number of field symbols registered for the table.

'IT\_LENG'

Length of the table row

'IT\_FILL'

Fill level of the table

'IT\_GETSTOR'

Writes information about the memory allocated to and used by the table itab1 to the log table itab2.

'IT\_TYPE\_INFO'

Writes information about the type of the internal table itab1 to the log table itab2. The first three rows contain the CRC64 hash values of the row type, the key definition, and the table type itself. The following three rows contain the values for the table category, the number of key fields, and the uniqueness flag.

'IT\_REF\_COUNT'

Reference counter to the shared part of the table header