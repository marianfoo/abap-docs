  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SYSTEM-CALL - Saving Addresses and Setting Field Symbols, ABAPSYSTEM-CALL_POINTER, 75
7%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

SYSTEM-CALL - Saving Addresses and Setting Field Symbols

This statement is intended solely for
\*\*\* Internal use within SAP Basis Development \*\*\*
Even within SAP Basis, it may be used only in programs within the ABAP+GUI dvelopment groups.
Its use is subject to various restrictions, some of which may not be described in the documentation . This documentation is intended for internal SAP use within the Basis development group ABAP+GUI.
Changes and further developments, which may be incompatible, can occur at any time without prior notice!

Variants:

[1\. SYSTEM-CALL POINTER <f> TO   ptr.](#!ABAP_VARIANT_1@1@)
[2\. SYSTEM-CALL POINTER <f> FROM ptr.](#!ABAP_VARIANT_2@2@)

Variant 1   

SYSTEM-CALL POINTER <f> TO ptr.

Effect

The data description of the field to which the field symbol<f> is pointed is saved in POINTER ptr.
The 'pointer' ptr must be created using DATA ptr POINTER.

Variant 2   

SYSTEM-CALL POINTER <f> FROM ptr.

Effect

The field symbol <f> is set to the field whose data description is saved in 'pointer' ptr.
You must create the pointer ptr using DATA ptr POINTER.