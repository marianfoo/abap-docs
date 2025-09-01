---
title: "SYSTEM-CALL CHECK FOR SEQUENCE OF C"
description: |
  This statement is intended solely for  Internal use within SAP Basis Development  Even within SAP Basis, it may be used only in programs within the ABAP+GUI dvelopment groups. Its use is subject to various restrictions, some of which may not be described in the documentation . This docum
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsystem-call_check.htm"
abapFile: "abapsystem-call_check.htm"
keywords: ["do", "if", "try", "method", "class", "abapsystem", "call", "check"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SYSTEM-CALL%20CHECK%20FOR%20SEQUENCE%20OF%20C%2C%20ABAPSYSTEM-CALL_CHECK%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SYSTEM-CALL CHECK FOR SEQUENCE OF C

This statement is intended solely for
\*\*\* Internal use within SAP Basis Development \*\*\*
Even within SAP Basis, it may be used only in programs within the ABAP+GUI dvelopment groups.
Its use is subject to various restrictions, some of which may not be described in the documentation . This documentation is intended for internal SAP use within the Basis development group ABAP+GUI.
Changes and further developments, which may be incompatible, can occur at any time without prior notice!

Variants:

[1\. SYSTEM-CALL CHECK f1 FOR SEQUENCE OF C CLASS f2 METHOD f3 PARAMETER f4.](#!ABAP_VARIANT_1@1@)
[2\. SYSTEM-CALL CHECK f1 FOR SEQUENCE OF C FUNCTION f2 PARAMETER f3.](#!ABAP_VARIANT_2@2@)
[3\. SYSTEM-CALL CHECK f1 FOR SEQUENCE OF C FORM f2 PARAMETER f3.](#!ABAP_VARIANT_3@3@)

Variant 1   

SYSTEM-CALL CHECK f1 FOR SEQUENCE OF C CLASS f2 METHOD f3 PARAMETER f4.

Effect

Enter this system call in the first line of the method. The system checks that f1 is of type c or string. If not, the system returns the short dump METH\_PARM\_IS\_NOT\_SEQUENCE\_OF\_C using the character fields f2, f3 and f4.

Variant 2   

SYSTEM-CALL CHECK f1 FOR SEQUENCE OF C FUNCTION f2 PARAMETER f3.

Effect

Enter this system call in the first line of the function. The system checks that f1 is of type c or string. If not, the system returns the [short dump](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshort_dump_glosry.htm "Glossary Entry") FUNC\_PARM\_IS\_NOT\_SEQUENCE\_OF\_C using the character fields f2 and f3.

Variant 3   

SYSTEM-CALL CHECK f1 FOR SEQUENCE OF C FORM f2 PARAMETER f3.

Effect

Enter this system call in the first line of the form. The system checks that f1 is of type c or string. If not, the system returns the short dump Form\_PARM\_IS\_NOT\_SEQUENCE\_OF\_C using the character fields f2 and f3.