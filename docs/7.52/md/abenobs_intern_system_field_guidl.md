  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Robust ABAP](javascript:call_link\('abenrobust_abap_guidl.htm'\)) →  [System Fields](javascript:call_link\('abensystem_fields_guidl.htm'\)) → 

Obsolete and Internal System Fields

Background

Not all system fields are designed to be used in application programs. All available system fields can be displayed as components of the structure SYST in ABAP Dictionary (or as components of the structure sy in the debugger). The meaning of the components is included in the accompanying description. Any system fields that are [obsolete](javascript:call_link\('abensystem_fields_obsolete.htm'\)) or only to be [used internally](javascript:call_link\('abensystem_fields_internal.htm'\)) are clearly marked.

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