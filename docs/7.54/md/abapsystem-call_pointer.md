---
title: "SYSTEM-CALL - Saving Addresses and Setting Field Symbols"
description: |
  This statement is intended solely for  Internal use within SAP Basis Development  Even within SAP Basis, it may be used only in programs within the ABAP+GUI dvelopment groups. Its use is subject to various restrictions, some of which may not be described in the documentation . This docum
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsystem-call_pointer.htm"
abapFile: "abapsystem-call_pointer.htm"
keywords: ["do", "data", "field-symbol", "abapsystem", "call", "pointer"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

SYSTEM-CALL - Saving Addresses and Setting Field Symbols

This statement is intended solely for
\*\*\* Internal use within SAP Basis Development \*\*\*
Even within SAP Basis, it may be used only in programs within the ABAP+GUI dvelopment groups.
Its use is subject to various restrictions, some of which may not be described in the documentation . This documentation is intended for internal SAP use within the Basis development group ABAP+GUI.
Changes and further developments, which may be incompatible, can occur at any time without prior notice!

Variants:

[1\. SYSTEM-CALL POINTER <f> TO   ptr.](#!ABAP_VARIANT_1@1@)
2\. SYSTEM-CALL POINTER <f> FROM ptr.

Variant 1

SYSTEM-CALL POINTER <f> TO ptr.

Effect

The data description of the field to which the field symbol<f> is pointed is saved in POINTER ptr.
The 'pointer' ptr must be created using DATA ptr POINTER.

Addition 2

SYSTEM-CALL POINTER <f> FROM ptr.

Effect

The field symbol <f> is set to the field whose data description is saved in 'pointer' ptr.
You must create the pointer ptr using DATA ptr POINTER.