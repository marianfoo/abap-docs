---
title: "Obsolete and Internal System Fields"
description: |
  Background Not all system fields are designed to be used in application programs. All available system fields are components of the structure SYST in ABAP Dictionary (or components of the structure sy in the debugger). The meaning of the components is included in the accompanying description. Any sy
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobs_intern_system_field_guidl.htm"
abapFile: "abenobs_intern_system_field_guidl.htm"
keywords: ["do", "if", "data", "abenobs", "intern", "system", "field", "guidl"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrobust_abap_gdl.htm) →  [System Fields](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensystem_fields_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Obsolete%20and%20Internal%20System%20Fields%2C%20ABENOBS_INTERN_SYSTEM_FIELD_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impro
vement:)

Obsolete and Internal System Fields

Background   

Not all system fields are designed to be used in application programs. All available system fields are components of the structure SYST in ABAP Dictionary (or components of the structure sy in the debugger). The meaning of the components is included in the accompanying description. Any system fields that are [obsolete](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensystem_fields_obsolete.htm) or only to be [used internally](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensystem_fields_internal.htm) are clearly marked.

Rule   

Do not use obsolete or internal system fields

In application programs, do not use system fields flagged as obsolete or for internal use only in ABAP Dictionary or in the ABAP documentation.

Details   

The behavior of obsolete and internal system fields is undefined. This means that ABAP application programs must not make any assumptions about the content of these system fields.

Bad Example

The following source code shows how the system field sy-fodec, flagged for internal use, is used illegally in the structure SYST after the statement DESCRIBE FIELD to count the number of decimal places in a data object.

DATA dobj TYPE p LENGTH 8 DECIMALS 2.
DATA type TYPE c LENGTH 1.
DATA decimal TYPE i.
DESCRIBE FIELD dobj TYPE type.
decimals = sy-fodec.

Good Example

The following source code demonstrates how decimal places can be counted correctly using the appropriate addition of the statement DESCRIBE FIELD.

DATA dobj TYPE p LENGTH 8 DECIMALS 2.
DATA type TYPE c LENGTH 1.
DATA decimals TYPE i.
DESCRIBE FIELD dobj TYPE type DECIMALS decimals.