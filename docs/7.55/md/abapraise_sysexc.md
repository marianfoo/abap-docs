---
title: "RAISE SYSTEM-EXCEPTIONS"
description: |
  This statement is for internal use only. It must not be used in application programs. Syntax RAISE SYSTEM-EXCEPTIONS  RMC_COMMUNICATION_FAILURE  RMC_INVALID_STATUS  RMC_SYSTEM_FAILURE  Effect The given runtime error is raised. Hint Currently, only the following runtime errors are r
version: "7.55"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapraise_sysexc.htm"
abapFile: "abapraise_sysexc.htm"
keywords: ["method", "abapraise", "sysexc"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

RAISE SYSTEM-EXCEPTIONS

This statement is for internal use only.
It must not be used in application programs.

Syntax

RAISE SYSTEM-EXCEPTIONS *{* RMC\_COMMUNICATION\_FAILURE
                        *|* RMC\_INVALID\_STATUS
                        *|* RMC\_SYSTEM\_FAILURE *}*

Effect

The given runtime error is raised.

Hint

Currently, only the following runtime errors are raised:

-   RMC\_COMMUNICATION\_FAILURE

-   RMC\_INVALID\_STATUS

-   RMC\_SYSTEM\_FAILURE

Moreover, this is only allowed within methods and only in system programs.